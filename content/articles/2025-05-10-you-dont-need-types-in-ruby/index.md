---
title: 'You Don’t Need Types in Ruby'
slug: 'you-dont-need-types-in-ruby'
draft: false
categories: ["Engineering"]
tags: ["ruby", "types", "sorbet", "static-typing"]
intro: Ruby was never meant to be statically typed. For decades, it has thrived as a dynamic, expressive, and human-oriented language. Yet every few years, someone tries to reinvent it as a typed one. Let’s explore why that’s a mistake — and why Ruby should stay Ruby.
description: A critical look at the trend of adding types to Ruby — Sorbet, RBS, and others — and why forcing static typing into a dynamic language misses the point.
keywords: ["ruby", "types", "sorbet", "static typing"]
---

There was a lively discussion on Hacker News [here](https://news.ycombinator.com/item?id=43938400) about [Sorbet](https://sorbet.org/) and static typing in Ruby that inspired this post.

It’s fascinating how people try to make Ruby *look* like a statically typed language. But this isn’t the first attempt — and every time, it ends up fighting against what Ruby fundamentally is.

Turning Ruby into Java isn’t progress. It’s a step backward.
Let me explain why.

---

## How Ruby Deals with Types

Ruby is a dynamically typed, object-oriented language designed around message passing — an idea borrowed from [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk).

In Ruby, we send *messages* to objects, not checkboxes of type signatures. That’s what makes it flexible, expressive, and alive.

This is known as [duck typing](https://en.wikipedia.org/wiki/Duck_typing).
If an object responds to a message, that’s all you need to know.

```ruby
class CreditCard
  def process(amount)
    puts "Charging $#{amount} to credit card"
    true
  end
end

class BankTransfer
  def process(amount)
    puts "Transferring $#{amount} from bank account"
    true
  end
end

class Cash
  def process(amount)
    puts "Accepting $#{amount} cash"
    true
  end
end

def checkout(payment_method, amount)
  payment_method.process(amount)
end

checkout(CreditCard.new, 50)
checkout(BankTransfer.new, 50)
checkout(Cash.new, 50)
````

That’s Ruby’s essence — you don’t care *what* it is, only *what it can do*.

{{< quote author="Sandi Metz" citeCaption="Practical Object-Oriented Design: An Agile Primer Using Ruby" authorPic="sandi-metz.jpg" >}}
If you have a method that takes an argument, you should be able to pass any object to it, as long as that object responds to the method you are calling on it.
{{</ quote >}}

Sandi Metz’s book [Practical Object-Oriented Design in Ruby](https://a.co/d/7fA1qwt) is still the best explanation of this philosophy.
It’s not about enforcing constraints — it’s about designing objects that *cooperate*.

---

## A Brief History of Type Experiments

Adding types to Ruby isn’t new. Many have tried. Most have failed.

* **RBS** – Introduced with [Ruby 3](https://www.ruby-lang.org/en/news/2019/12/25/ruby-3-0-0-preview1/) as part of the “Ruby 3x3” initiative. It aimed to formalize type definitions but never gained much real-world traction.
* **dry-types** – Part of the [dry-rb](https://dry-rb.org/) ecosystem. It adds runtime type constraints but at a cost: slower performance.
* **typed-ruby**, **RTC**, **Rubype** – early academic or community efforts that never made it.
* **Sorbet** – the most popular attempt so far, backed by Stripe. It mixes static and runtime checks but at the expense of speed and simplicity/readability.

Ten years later, the discussion is still alive — but the core issue remains: Ruby wasn’t designed for static typing.

---

## Why Adding Types to Ruby Is a Bad Idea

Adding static types to a dynamic language is like putting a manual transmission in a Tesla - you're bolting on complexity that contradicts the core architecture. It makes no sense.

Here’s why:

1. **Ruby doesn’t compile.**
   Static type checks make sense in compiled languages. Ruby isn’t one — everything happens at runtime.
2. **Runtime type checks hurt performance.**
   Sorbet and similar systems add extra runtime overhead to simulate safety that compiled languages get for free. It actually should run some checks at runtime to ensure type safety, defeating the purpose of static typing.
3. **Annotations pollute the codebase.**
   Endless ```sig { params(...) }``` blocks make code noisy without improving design.

```ruby
sig { params(cat: Cat).void }
def sound(cat)
  cat.sound
end
```

That doesn’t make your program better. It just adds ceremony.

4. **It’s a design smell.**
   If your Ruby code “needs” types to feel safe, that’s not a type problem — that’s a design problem. It probably needs refactoring, not annotations.

Ruby already provides implicit[^1] conversion hooks like `to_int`, `to_str`, `to_ary`, which are *strict* enough when you need type enforcement. You don’t need Sorbet for that.

So what’s the benefit of types here?
Faster? No — slower.
More readable? No — noisier.
Safer? Barely.

It’s a bad trade-off.

Matz himself said he doesn’t like types in Ruby.
He encourages hiding types behind interfaces — not surfacing them as syntax[^2].

There are already excellent statically typed languages — Go, Java, Rust, C++.
Ruby isn’t one of them, and it shouldn’t pretend to be.

---

## Performance

Even Sorbet's own docs[^3] admit it:
> "Enable Runtime Checks. Sorbet relies heavily on runtime type checks to back up its static predictions."

Those runtime checks aren't free. Every method call now includes overhead: type extraction, signature validation, error raising on mismatches. This happens in production, not just during development. The irony is thick: static typing exists to catch errors before runtime, yet Sorbet reintroduces runtime validation as a core feature.

Compare this to a linter. A linter runs during development, catches issues in your editor or CI pipeline, and ships nothing to production. Zero runtime cost. Sorbet, however, can't be stripped out — there's no "production mode" that removes the type checks. You're paying the performance tax in the place that matters most: live traffic serving real users.

Why does a static type checker need to exist in production at all? It shouldn't. The whole point of static analysis is to fail fast during development, not to babysit your code in production. Sorbet conflates compile-time safety with runtime validation, and you pay for it.

---

## What to Do Instead

Instead of forcing static typing into Ruby, teach developers how to *think* in Ruby.
If someone comes from Java, Go, or C#, help them unlearn the obsession with type systems.

Show them:

* **Duck typing** — it’s powerful, flexible, and elegant when used right.
* **[YARD](https://yardoc.org/)** — for documenting code with optional type hints.
* **Tests** — still the best type system Ruby ever had. In ruby you have [rspec](https://rspec.info/)/[minitest](https://github.com/minitest/minitest) to cover your codebase.
* **Linters** — like [RuboCop](https://rubocop.org/) to enforce style and catch common mistakes.

```ruby
# @param [Animal] animal
# @return [String]
def sound(animal)
  animal.sound
end
```

YARD gives you clarity without overhead. You can even hook it into LSP for autocompletion and hints.

Linters like rubocop can catch perfomance issues, style violations, and common bugs without any effect on runtime.

And if you want confidence — write tests.

Tests catch errors, verify expectations, and allow safe refactoring.
They’re the true safety net of Ruby, not magic type annotations.

---

## The Cultural Problem

Modern engineering culture has developed a strange addiction to tools.
We build abstractions for the sake of it, and then convince others it’s “best practice.”

The more code I see, the more it feels like an adult kindergarten — full of toys and shiny tools, but not much craftsmanship.

Typing systems in Ruby fall right into that category. They give an illusion of safety while draining time, performance, and clarity.

We care deeply about sustainability and [climate change](https://marmelab.com/blog/2020/10/21/sunsetting-faker.html#faker-has-a-design-problem),
but we think it’s fine to burn CPU cycles running pointless runtime type checks?

[Iron.io](https://blog.iron.io/how-we-went-from-30-servers-to-2/) showed how performance matters — and waste adds up. The same logic applies here.

---

## Conclusion

I’m strongly against forcing types into dynamic languages.
It’s not just a philosophical issue — it’s a practical one.
You lose performance, clarity, and the spirit of Ruby.
There are many languages designed for static typing. Ruby isn’t one of them.

### Footnotes
[^1]: [Implicit vs. Explicit by zverok](https://zverok.space/blog/2016-01-18-implicit-vs-expicit.html)
[^2]: [Matz on Duck Typing (YouTube)](https://youtu.be/85ct6jOvVPI?si=G0JOy8FUD3C5QoNf&t=957)
[^3]: [Sorbet Runtime Checks](https://sorbet.org/docs/runtime#why-have-runtime-checks)
