---
title: 'You Dont Need Types in Ruby'
slug: 'you-dont-need-types-in-ruby'
draft: true
categories: ["Engineering"]
tags: ["ruby", "types"]
intro: intro
description: desc
keywords: ["ruby", "types"]
---

# You Don't Need Types in Ruby
Why would one implement types in Ruby? The language is dynamically typed, and it works well for most use cases.
That's quite interesting why people try to reinvent wheel all over the history.

There are statically typed languages: go, java, rust, even c++. Why one would try to make ruby "look like" statically typed language? It violates the idea of ruby, which dynamically typed language. You can create amazing tools if you think in dynamic way (duck-typing, meta-programming, runtime definitions). There are messages that you send to objects not statically typed bits and procedures (which the way of thinking for statically typed languages and procedural programming). You even have in your toolbox methods like (to_int, to_str, to_ary), that already do type-check strictly.

When you add types to ruby what are your benefits? It becomes faster language? No, it becomes even slower. It becomes more readable? Alas no. It becomes type safe? Yet no. It becomes more verbose with this type annotation everywhere making it look like nightmare. Why should one use hammer with self-tapping screw? Use screwdriver for that kind of activity.

We care so much about environment and [climate changes](https://marmelab.com/blog/2020/10/21/sunsetting-faker.html#faker-has-a-design-problem), but think it is ok to waste resources for such activity.
