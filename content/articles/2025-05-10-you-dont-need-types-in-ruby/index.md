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

## How we deal with types in ruby
Most of the time in ruby we use [duck-typing](https://en.wikipedia.org/wiki/Duck_typing).
It is object-oriented language that is designed to send messages which influenced by the [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) programming language. The idea is to send messages to objects and not to worry about the types of the objects. Now we want to skip years of evolution and try to treat objects like statically typed bits and procedures (which is the way of thinking for statically typed languages and procedural programming). We want to step back and say we not so smart as the inventors of dynamically typed languages and we strictly need to use typed bits to understand what we are doing. Nah. Why we need it in first place? Because we used to it and can't adopt to *new* paradigms which is 50 years old? (Smalltalk was invented in 1970s)

Let's examine the following example:

```ruby
# example1

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

class Animal
  def make_sound(animal)
    animal.sound
  end
end

cat = Cat.new
cow = Cow.new
animal = Animal.new
animal.make_sound(cat) # Meow!
animal.make_sound(cow) # Moooo!
```

This is the essence of duck-typing. You don't need to worry about the type of the object, as long as it responds to the method you are calling on it. We will use this example later on when adding types to it and see how it will look.

{{< quote author="Sandy Metz" citeCaption="\"Practical Object-Oriented Design: An Agile Primer Using Ruby\" author" authorPic="sandi-metz.jpg" >}}
If you have a method that takes an argument, you should be able to pass any object to it, as long as that object responds to the method you are calling on it.
{{</ quote >}}

The well-written book the subject is [Practical Object-Oriented Design in Ruby](https://a.co/d/7fA1qwt) by Sandi Metz. The book is a great resource for learning about object-oriented design in Ruby. It covers topics such as duck-typing, polymorphism, and how to write clean and maintainable object-oriented code.

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
  def sound(cat)
    cat.sound
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

## When do you need types?
There are cases when you need types.

1. For example, when building gems or API. You need to provide types for your users. But it is not the case when you build your application. How ruby developers dealt without types for years? They used other tool called [yard](https://yardoc.org/) that allows you to document your code. It is a great tool for documenting your code and it is widely used in the ruby community. It is not a type checker, but it allows you to document your code and to provide types for your users. You can even turn on LSP support for it. It is a great tool for documenting your code and it is widely used in the ruby community. It is not a type checker, but it allows you to document your code and to provide types for your users.

```ruby
# example2

# @param [Animal] animal
# @return [String]
def sound(animal)
  animal.sound
end
```

Beloved reader would ask: "Oh, zhisme! But I want types to refactor my codebase. It is so easy to catch errors with all this linters that verify types and help me with nil-checks. How do I achieve that without types?"

Write tests. Tests are the best way to catch errors in your code. They are the best way to verify that your code works as expected. They are the best way to refactor your code. They are the best way to document your code. They are the best way to provide types for your users (they can check them in your repo and understand what happens if you throw nil in your method). They are the best way to provide types for your users, not magic comments.

The more I see current codebases the more I believe that we are in some adult-kindergarten. We invent tools for fun and persuade others to use them and take this as religious belief.

## Conclusion

However I really against types in dynamic language with strict typing, I believe there's a problem that our industry has met that this typing annotations were firstly invented and tried out in production environment. Can you describe such cases? I mean like real production cases, not including type checks into your codebase just for fun or because ruby gives you a lot of freedom and allows you to experiment. Did you do any benchmarking, like it slighly improved your delivering speed or decreased errors in your production (errors in production for nil checks decreased or whatever)

We care so much about environment and [climate changes](https://marmelab.com/blog/2020/10/21/sunsetting-faker.html#faker-has-a-design-problem), but think it is ok to waste resources for such activity.

https://blog.iron.io/how-we-went-from-30-servers-to-2/
