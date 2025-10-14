---
title: 'You Don’t Need Types in Ruby'
slug: 'you-dont-need-types-in-ruby'
draft: true
categories: ["Engineering"]
tags: ["ruby", "types", "sorbet", "static-typing"]
intro: Ruby was never meant to be statically typed — and forcing it to be one breaks what makes it beautiful. Let's explore why adding types to Ruby is a mistake, and how to embrace the language the way it was designed.
description: Why adding static types to Ruby goes against the language philosophy, and why duck typing and good design are still the best tools for reliability and clarity.
keywords: ["ruby", "types", "duck typing", "sorbet"]
---

There was an intense discussion on Hacker News in [this thread](https://news.ycombinator.com/item?id=43938400) about [Sorbet](https://sorbet.org/) and types in Ruby, which originally led me to write this post. It’s fascinating how people keep trying to make Ruby *look like* a statically typed language. It’s not the first time — and it won’t be the last.

My opinion? Turning Ruby into Java-like is a terrible idea. Let me explain why.

Let’s begin.

---

## How We Deal with Types in Ruby

Most of the time in Ruby, we use [duck typing](https://en.wikipedia.org/wiki/Duck_typing).
Ruby is an object-oriented language built around message passing — a concept deeply influenced by [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk).

The idea is simple: you send messages to objects and don’t worry about their types. You care about *behavior*, not classification.

Now, some developers want to “upgrade” Ruby by forcing it to behave like a statically typed or procedural language — the kind where every variable has a fixed type, and the compiler babysits your logic. That’s not evolution; that’s regression.

Do we really need types just because we’re too used to them? Because we can’t adapt to a paradigm that’s been around for fifty years? (Smalltalk appeared in the 1970s.)

Let’s look at an example.

```ruby
class Cat
  def sound
    puts "Meow!"
  end
end

class Cow
  def sound
    puts "Moooo!"
  end
end

animal = rand(100).even? ? Cat.new : Cow.new
animal.sound if animal.respond_to?(:sound)
```

This is the essence of duck typing. You don’t care what animal is — only that it responds to sound.
That’s flexibility. That’s Ruby.

{{< quote author="Sandi Metz" citeCaption="Practical Object-Oriented Design: An Agile Primer Using Ruby" authorPic="sandi-metz.jpg" >}}
If you have a method that takes an argument, you should be able to pass any object to it, as long as that object responds to the method you are calling on it.
{{</ quote >}}

A great resource on this topic is Practical Object-Oriented Design in Ruby by Sandi Metz. It’s the kind of book that makes you appreciate Ruby’s design — duck typing, polymorphism, and writing clean, adaptable code.

## A Brief History of Typing in Ruby

The “types in Ruby” debate is not new — it’s at least a decade old.

Over the years, several projects tried to bring static typing to Ruby. Most of them either failed or proved unnecessary.

RBS – Introduced as part of Ruby 3
 and the “Ruby 3x3” initiative (3× faster than Ruby 2). It added type signatures to Ruby, but the idea never really caught on. It quietly faded away.

dry-types – Part of the dry-rb
 ecosystem. Still alive and well. Provides runtime type validation — but it affects performance.

typed-ruby, Rubype, rtc (Ruby Type Checker) – all abandoned.

Sorbet – Developed and promoted by Stripe. It’s popular and actively used, but it still suffers from the same conceptual flaws: performance overhead, verbosity, and philosophical mismatch.

Why Types Are a Bad Fit for Dynamic Languages

Adding static types to Ruby (or any dynamic language) is a design mistake.
It’s like bolting a type system onto a philosophy that was built not to need one.

Let’s break down why:

No compilation step.
Static type systems shine in compiled languages. Ruby is interpreted. It can’t leverage compile-time guarantees.

Runtime overhead.
Tools like Sorbet perform runtime type checks — which means slower code.

Code pollution.
You end up with verbose annotations everywhere. Instead of elegant Ruby, you get noisy, cluttered code.

False sense of safety.
If developers don’t trust the annotations, the type system is useless anyway. Even Sorbet admits this
.

Here’s what that “safety” looks like:

sig { params(cat: Cat).void }
def sound(cat)
  cat.sound
end


It doesn’t improve your design. It just adds ceremony.
If your code needs type annotations to make sense, it probably needs refactoring instead.

Ruby was designed around messages, not static bits of data.
Methods like to_int, to_str, and to_ary already provide strong type guarantees when needed — the Ruby way.

So what do you gain by adding types?

Is Ruby faster? No — it’s slower.

More readable? No — more verbose.

Type safe? Not really — just more complex.

It’s like using a hammer on a self-tapping screw: wrong tool, wrong mindset.

Matz himself (the creator of Ruby) has spoken clearly on this:

“Ruby without duck typing? Really Ruby?! Ruby should keep being Ruby, forever.” 1

We already have statically typed languages: Go, Java, Rust, C++.
Why try to make Ruby pretend to be one of them?

The Numbers: Performance

Sorbet relies on runtime type checks to “verify” assumptions made by its static analyzer.
These checks run in production and cost CPU time. Stripe themselves admitted this overhead was measurable — and they needed to optimize around it.

In other words: you trade speed and simplicity for a simulation of type safety.

So What Should You Do Instead?

If you’re managing a Ruby codebase, focus on these instead of adding types:

Educate developers.
Teach them Ruby’s philosophy — message passing, duck typing, and polymorphism.

Use YARD for documentation.
YARD
 lets you document method signatures for humans and tools alike. It’s simple, readable, and integrates with LSP.

# @param [Animal] animal
# @return [String]
def sound(animal)
  animal.sound
end


Write tests.
Tests are your best type checker.
They catch nils, verify interfaces, and protect your design far better than annotations.

The Ruby community has thrived for decades without static typing.
We don’t need to reinvent a wheel that was never meant to roll that way.

When You Actually Need Types

There are valid cases — when building libraries or APIs consumed by others.
There, type definitions act as a contract for external users. But even then, documentation (YARD, RBS, or generated API specs) often works better than enforced runtime checks.

Within your application? You don’t need it.
Ruby’s clarity, expressiveness, and testability are your safety net.

The Real Problem

Many developers treat new tools like religion.
They adopt them because they feel safer, not because they make code better.

It’s like an adult kindergarten: inventing toys, playing with them, and then convincing others they’re essential for “serious work.”

We should know better.

Conclusion

I’m firmly against adding types to Ruby.
But I’m also aware this debate didn’t appear out of nowhere — it’s a symptom of a real industry problem.
We’ve confused “rigor” with “rigidity.”

So here’s a question for you:
If you added Sorbet or RBS to your production system — did it actually reduce errors?
Did it speed up development, improve runtime stability, or reduce production issues?

Show the numbers. Otherwise, it’s just ceremony.

We talk about saving the planet and optimizing compute resources — but we’re fine wasting CPU cycles on runtime type checks that exist only to make us feel safer.

As Iron.io’s case study
 reminds us — less code, fewer abstractions, and simpler systems almost always win.

Keep Ruby Ruby.

Footnotes

---

Would you like me to also help you add a **short meta excerpt** (1–2 sentence TL;DR summary) and **Twitter card description** for your blog engine

Footnotes

Matz on Duck Typing — YouTube talk
 ↩
