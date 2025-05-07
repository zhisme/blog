---
title: lazy_names gem, how much time do you spend in console?
slug: lazy-names
date: 2020-01-12
categories: ["Engineering"]
tags: ["ruby", "gem", "open-source"]
intro: The idea behind the gem is to shorten long constant names that often appear as a project grows. Your services, models, and controllers get buried under deep namespaces, and typing them repeatedly becomes tedious. I'm a lazy developer, and I believe many of us are too.
description: lazy_names ruby gem that helps you shorten long constant names in your console. It allows you to use shorter names for constants/classes/modules, allowing you to type less in console.
keywords: ["ruby", "gem", "open-source", "lazy_names", "console", "pry", "irb"]
---
I'm happy to share the [lazy_names](https://github.com/zhisme/lazy_names?tab=readme-ov-file#lazy_names) gem!
This gem allows you to define a config file that maps long, namespaced constants to something simpler and more intuitive:
```yml
'Models::Users::CreditCard': 'UserCard'
```
I spend a lot of time in the console, which is why I originally wrote this gem. Here’s a quick look at my most frequently run commands from my Zsh history:
```sh
$: history | awk '{$1=""; print $0}' | sort | uniq -c | sort -nr
 647  gs
 135  rc # rails console
 135  ls
 134  gd
 ...
```

Do you use the Ruby console much while developing? I personally like to check my code directly in the console — calling methods to inspect return values — especially in the early development stage before tests are written. Sometimes, I need to drop records from the database or build some structs on the fly.

I also spend a lot of time in a remote Rails console via `kubectl exec -ti $1 -- bundle exec rails c`. However, I’m unsure whether shipping this gem to a production environment is the right move. I keep thinking about it in the background, as I often miss its functionality when working remotely.

Future Plans:
1. I’m considering adding custom shorteners to be defined by gem user. So it can convert class/constants by some user function, that can be configured outside of the gem. I think of modifying config file structure. So it will have only frequent constants list. And custom shortener will build lazy versions on console initialize.
2. I might take it a step further—feeding the gem a history file from Pry/IRB so it can automatically generate a ready-to-use config file based on your recent commands.
