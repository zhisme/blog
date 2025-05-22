---
title: 'You Dont Need Types in Ruby'
draft: true
categories: ["Engineering"]
tags: ["ruby", "types", "sorbet", "static-typing"]
intro: Why would one implement types in Ruby? The language is dynamically typed, and it works well for most use cases. That's quite interesting why people try to reinvent wheel all over the history. Let's deep dive into the topic that people believe will improve their codebases and bring them beloved stability.
description: desc
keywords: ["ruby", "types"]
---
There was quite intensive discussion in hackernews [thread](https://news.ycombinator.com/item?id=43938400) about [sorbet](https://sorbet.org/) in general that originally led to this post. I think it is quite interesting to see how people try to make ruby **only look like** statically typed language. It is not the first time when people try to add types to ruby. The author opinion is to make java from ruby is completely wrong idea, let me prove my point below.

Let's begin!

## Brief history
There was many projects trying to achieve this goal. Most of them failed. Let's take a look at them.

- There was a project called [rbs]()
that was trying to add types to ruby. It was a part of the [ruby 3](https://www.ruby-lang.org/en/news/2019/12/25/ruby-3-0-0-preview1/) release. It was a part of the [ruby 3x3](https://www.ruby-lang.org/en/news/2019/12/25/ruby-3-0-0-preview1/) initiative. The idea was to make ruby 3 times faster than ruby 2. The project was abandoned and it is not clear why.
- There was another project called [dry-types](https://dry-rb.org/gems/dry-types/2.0/) that was trying to add types to ruby. It was a part of the [dry-rb](https://dry-rb.org/) initiative. The idea was to make ruby more type safe. The project is still alive and it is quite popular in the ruby community. But the problem they do all this in runtime affecting performance.
- There was another project called typed-ruby that was trying to add types to ruby. That was abandoned as well.
- sorbet is another project that is trying to add types to ruby. It is quite popular in the ruby community and it is used by many companies. The idea is to make ruby more type safe and to make it easier to write code.
- rtc: Ruby Type Checker
- Rubype

## Why types are bad in dynamic languages

I think it is a bad idea to add types to ruby. I think it is a bad idea to add types to any dynamically typed language. I think it is a bad idea to add types to any language that was not designed in first place for that.

It is a desing flaw. Consider typing in statically typed languages:
1. They have compilation process
2. Types are checked during compilation and compilation is aborted in case types are incorrect
3. No runtime typechecks that decrease perfomance *here add some benchmarking with ruby sorbet for example*
4. Overwhelming annotations that pollute codebase. That most of the time live as comments near to your methods.
5. Type annotations in a codebase are near useless if developers don’t trust [them](https://sorbet.org/docs/runtime#why-have-runtime-checks).

*Show what happens when types are checked, how many extra commands are generated*

But annotating everywhere

```ruby
  sig { params(cat: Cat) }
  def meow(cat)
    cat.meow
  end
```
does not improve your design, it just makes noisy and clumsy. I would think that if your code need type annotations, it smells like bad design and should be considered for refactoring.

There are messages that you send to objects not statically typed bits and procedures (which the way of thinking for statically typed languages and procedural programming). You even have in your toolbox methods like (to_int, to_str, to_ary), that already do type-check strictly.

When you add types to ruby what are your benefits? It becomes faster language? No, it becomes even slower. It becomes more readable? Alas no. It becomes type safe? Yet no. It becomes more verbose with this type annotation everywhere making it look like nightmare. Why should one use hammer with self-tapping screw? Use screwdriver for that kind of activity.

Matz (the creator of ruby) said that he doesn't like types in ruby. He suggest to use duck-typing hiding the types behind the interface. *find quote here, link*

There are statically typed languages: go, java, rust, even c++. Why one would try to make ruby "look like" statically typed language? It violates the idea of ruby, which dynamically typed language. You can create amazing tools if you think in dynamic way (duck-typing, meta-programming, runtime definitions). There are messages that you send to objects not statically typed bits and procedures (which the way of thinking for statically typed languages and procedural programming). You even have in your toolbox methods like (to_int, to_str, to_ary), that already do type-check strictly.

When you add types to ruby what are your benefits? It becomes faster language? No, it becomes even slower. It becomes more readable? Alas no. It becomes type safe? Yet no. It becomes more verbose with this type annotation everywhere making it look like nightmare. Why should one use hammer with self-tapping screw? Use screwdriver for that kind of activity.

## The numbers. Performance

>*Enable Runtime Checks.*
<br/>
Sorbet relies heavily on runtime type checks to back up the predictions made statically about a codebase. Learn why these checks are necessary, and how to enable them.

## What to do?

Educate your developers, show them duck-typing and how to deal with ruby if they have statically typed language background.


## Conclusion

However I really against types in dynamic language with strict typing, I believe there's a problem that our industry has met that this typing annotations were firstly invented and tried out in production environment. Can you describe such cases? I mean like real production cases, not including type checks into your codebase just for fun or because ruby gives you a lot of freedom and allows you to experiment. Did you do any benchmarking, like it slighly improved your delivering speed or decreased errors in your production (errors in production for nil checks decreased or whatever)

We care so much about environment and [climate changes](https://marmelab.com/blog/2020/10/21/sunsetting-faker.html#faker-has-a-design-problem), but think it is ok to waste resources for such activity.

https://blog.iron.io/how-we-went-from-30-servers-to-2/
