---
title: "The Constant Frozen at Boot Bug: A Ruby Exercise For An Interview"
slug: "ruby-constant-frozen-at-boot"
categories: ["Engineering"]
tags: ["ruby", "rails", "interviews", "debugging"]
intro: "A payment handler resolves its method ids into class-level constants. One day charges start landing with a NULL method and the only fix is a pod restart. Why? This is a real production bug that makes an excellent interview question."
description: "A real-world Ruby/Rails bug: class-level constants are evaluated once at class load time. If a DB lookup returns nil at boot, the constant stays nil for the whole process lifetime. Why it happens, why it's silent, and how to fix it."
keywords: ["ruby class constant evaluation", "rails autoload constant", "constant evaluated at load time", "ruby interview question", "rails eager load bug", "class body evaluated once"]
---

I like interview questions that come from real incidents instead of a puzzle book. You can't google your way out of them, and the candidate's reasoning maps directly onto the job. This one came from a payment service. It looks trivial. It is not.

I've stripped the production code and rebuilt the same shape around a fake payment router. The bug is identical; the names are not.

## The Question

> Here is a class that routes payments to a gateway. Occasionally a charge is
> written to the database with `method_id = NULL`, even though the payment method
> clearly exists in the `payment_methods` table. No exception is raised. The only
> thing that reliably fixes it is restarting the process. Find the bug.

```ruby
module Payments
  class GatewayRouter
    # Resolve the ids of the methods we route, once, up front.
    CARD_METHOD_ID   = PaymentMethod.find_by(code: "card")&.id
    CRYPTO_METHOD_ID = PaymentMethod.find_by(code: "crypto")&.id
    WIRE_METHOD_ID   = PaymentMethod.find_by(code: "wire")&.id

    def route(payment)
      Charge.create!(
        amount:    payment.amount,
        currency:  payment.currency,
        method_id: method_id_for(payment.kind)
      )
    end

    private

    def method_id_for(kind)
      case kind
      when :card   then CARD_METHOD_ID
      when :crypto then CRYPTO_METHOD_ID
      when :wire   then WIRE_METHOD_ID
      end
    end
  end
end
```

Looks fine. The lookups are correct, the `case` is exhaustive for the kinds we
support, `create!` would bang on a validation error. So where does the `NULL`
come from?

## The Symptom in Production

Everything is green. CI passed, the migration that seeded `payment_methods` ran,
the row is right there:

```ruby
PaymentMethod.find_by(code: "crypto")
# => #<PaymentMethod id: 3, code: "crypto", ...>
```

Yet some pods keep writing `crypto` charges with `method_id: nil`, and others
on the same deploy are perfectly healthy. Restart the bad pod and it heals.
Restart it again a week later for an unrelated reason and the bug is back on a
different method. It feels haunted.

It is not haunted. It is a load-order bug.

## The Root Cause: The Class Body Runs Once

The three constants are not assigned when you call `route`. They are assigned
**when the class body is evaluated**, which happens exactly once, the first time
the class is loaded into the process.

```ruby
class GatewayRouter
  # this line is plain Ruby code that executes at load time,
  # the same way `puts "hi"` would if you put it here
  CARD_METHOD_ID = PaymentMethod.find_by(code: "card")&.id
end
```

A constant assignment in a class body is not a declaration. It's a statement
that runs top-to-bottom while Ruby is defining the class. So the value baked
into `CARD_METHOD_ID` is whatever `PaymentMethod.find_by(...)` returned **at that
single moment in time** — and it never re-runs.

Now look at the `&.`:

```ruby
PaymentMethod.find_by(code: "crypto")&.id
```

If the row is missing at load time, `find_by` returns `nil`, the safe-navigation
swallows it, and the constant is permanently set to `nil`. No error. The class
loads happily. From that point on, every `crypto` payment in that process resolves
to `method_id: nil`, and `Charge.create!` accepts it because `nil` is a perfectly
valid value for the column unless you forbade it.

## Why Only Some Pods, Why Only Sometimes

The constant is frozen at the moment of **first load**, and what's in the
database at that moment depends on a race you don't control:

- **Autoloading.** Under Rails autoload/zeitwerk, a class loads the first time it's
  referenced, not at boot. So the lookup runs at some arbitrary point during the
  first request that touches `GatewayRouter` — different wall-clock time on every
  pod.
- **Deploy ordering.** If pods boot while the seed/migration that inserts a new
  payment method is still in flight, the early pods load the class, miss the row,
  and cache `nil`. Pods that start a few seconds later see the row and cache the
  real id. Same image, same commit, split-brain behavior.
- **Replica lag.** If the lookup hits a read replica that hasn't caught up to the
  primary yet, same result: `nil`, frozen.

This is why a restart "fixes" it. A restart re-evaluates the class body, the row
now exists, the constant gets a real id. Until the next time the stars line up
wrong.

```
deploy
  ├── pod A boots ──▶ request ──▶ load GatewayRouter ──▶ row absent ──▶ const = nil  (sick for life)
  └── pod B boots ──▶ (slower) ──▶ load GatewayRouter ──▶ row present ──▶ const = 3   (healthy)
```

## The Fix

The original code wasn't wrong to want a cache — resolving the same three ids on
every charge is wasteful. It was wrong about *when* to fill it.
That is classic and good example of known pattern called **singleton**, it really well fits here.
So keep the per-process cache, but make it **lazy** (filled on first use, not at load) and
**poison-free** (a missing row raises instead of being cached as `nil`).

A singleton is a clean fit: one instance per process, one cache hanging off it.

```ruby
require "singleton"

module Payments
  class GatewayRouter
    include Singleton

    CODES = %i[card crypto wire].freeze

    def route(payment)
      Charge.create!(
        amount:    payment.amount,
        currency:  payment.currency,
        method_id: method_id_for(payment.kind)
      )
    end

    private

    # Resolved on first use, then cached for the life of the process — but only
    # after the lookup succeeds. find_by! raises before the assignment runs, so
    # a missing row is never cached. A later call retries once the row exists.
    def method_id_for(kind)
      raise UnknownCode, "unknown payment kind #{kind}" unless kind.in?(CODES)
      method_ids[kind] ||= PaymentMethod.find_by!(code: kind).id
    end

    def method_ids
      @method_ids ||= {}
    end
  end
end
```

Call it through the single instance:

```ruby
Payments::GatewayRouter.instance.route(payment)
```

The whole fix lives in two details:

- **`method_ids[kind] ||= find_by!(...)`.** The `||=` only assigns on a truthy
  result. `find_by!` raises `RecordNotFound` *before* the assignment ever runs,
  so the cache is never poisoned with `nil`. Compare that to the original
  `find_by(...)&.id`, which turned "row missing" into a permanently cached `nil`.
  That `&.` was the second half of the bug — it converted "data is missing" into
  "everything is fine".
- **Lazy, not load-time.** The first charge that needs `crypto` fills the slot
  with whatever is in the database *then* — not whatever happened to be there
  during the autoload race at boot.

The difference is subtle but total: same per-process caching the constants gave
you, minus the one property that made them dangerous. A frozen-at-boot constant
is caching with an infinite TTL, no invalidation, *and* it happily caches the
failure. That last part is the trap.

The two hardest problems in software haven't changed since the dinosaurs: **cache invalidation** and **naming things**. This bug is just the first one wearing a costume.

## Why It's a Good Interview Question

It separates people who memorized "constants are evaluated once" from people who
can reason about *when* "once" is.

The strong candidates walk a chain: the class body is code → it runs at load time
→ load time under autoload is non-deterministic → `&.` turned a missing row into a
silent `nil` → `nil` is a legal column value so nothing complained → a restart
re-runs the body, which is why it "fixes" it. Each link is ordinary Ruby. Strung
together they explain a bug that looks supernatural.

And it's honest about the job: most production bugs aren't exotic. They're a
reasonable line of code evaluated at the wrong moment.
