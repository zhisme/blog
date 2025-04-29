---
title: copy_with_context.nvim plugin released
date: 2025-04-13
categories: ["Engineering"]
tags: ["neovim", "open-source", "lua"]
featuredImage: "/img/copy_with_context/index.png"
featuredImageAlt: "copy_with_context.nvim"
readingTime: 4
intro: Copy lines with file path and line number metadata. Perfect for sharing code snippets with context.
description: Copy lines with file path and line number metadata in neovim. Perfect for sharing code snippets with context.
keywords: ["neovim", "plugin", "open-source", "copy_with_context.nvim", "lua", "nvim"]
---
I'm excited to announce the release of my new Neovim plugin, [copy_with_context.nvim](https://github.com/zhisme/copy_with_context.nvim)

When sharing code snippets, it's often useful to include the file path and line number for context. This plugin makes it easy to copy lines with this metadata. It is easier to understand the context of the code snippet when the file path and line number are included. Otherwise you have to do it manually. Copying snippet, then adding the line number *(what if it is long config file? it is boring)*. We can automate it and do not waste our time.

You can install the plugin using your favorite plugin manager. Please refer to the [README.md](https://github.com/zhisme/copy_with_context.nvim?tab=readme-ov-file#installation)

What does it do? This plugin makes it super easy to copy code snippets along with their file path and line numbers. No more manually adding context when sharing code with your team.

### How to use it?
For example, if you copy this line with `<leader>cy`:
```ruby
4: <% posts.each do |post| %>
```
You’ll get when pasting:
```ruby
<% posts.each do |post| %>
# app/views/widgets/show.html.erb:4
```
Also supports copying multiple lines. Just select the lines you want to copy and use the same command. The plugin will automatically add the file path and line numbers for each selected line. For absolute path you will need to use `<leader>cY`. Configuration is also available, check README.md for more details.

### Why I built this
I got tired of manually adding file paths and line numbers when sharing code snippets. Forcing you to check for file names, numbers, branches. This plugin automates that process, saving time and making collaboration smoother.

In latest version I handled rewritting it fully to lua from vimscript. Plugin structured is reorganized and improved. Added tests and linters so it can be used with stability. Adding badges and green CI markers, making it production ready for anyone to use. Current version is **v2.2.1**

### What's next?

I'm planning to add 1 important feature: add context integration with remote repo URL [github issue](https://github.com/zhisme/copy_with_context.nvim/issues/1).
The idea is when copying file to include the URL to the file in the remote repository. You can link directly to the file in the repository.
```
3: puts "Hello World"
# README.md:3
# repo URL: https://github.com/zhisme/copy_with_context.vim/blob/master/README.md?plain=1#L3
```
I will add support for github and gitlab providers. For others I will leave this for community as I don't use others like bitbucket, gitea, etc. But this could be useful for you. Feel free to open an issue or [PR](https://github.com/zhisme/copy_with_context.nvim/pulls).

Plugin aims for simplicity and ease of use. No overhead configuration and extra features is planned. I want to keep it lightweight and focused on the core functionality. I believe that simplicity is key to a great user experience.

I'm using it a lot right now and advertise you to give it a try.
