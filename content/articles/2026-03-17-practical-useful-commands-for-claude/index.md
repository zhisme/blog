---
title: "Practical Useful Commands for Claude"
slug: "practical-useful-commands-for-claude"
categories: ["Engineering"]
tags: ["claude", "ai", "guides", "tools"]
intro: "A collection of practical commands and tips for getting the most out of Claude Code"
description: "Practical useful commands, shortcuts, and tips for working with Claude Code CLI in your daily development workflow."
keywords: ["claude code", "claude commands", "claude code tips", "claude cli", "claude code workflow", "claude slash commands", "claude sandbox", "claude worktree", "claude effort flag"]
---

These are commands I use often and see a lot of value from. I advise you at least to consider using them in case you haven't tried them yet.

## Commands

1. `claude --worktree` or `claude -w`

In case you want multiple agents to run simultaneously, this option was designed for it. Each Claude agent gets its own version of the repo so they won't interfere with each other. Where can you use it? Let's say you're migrating something to a new architecture and there are multiple services that need changes, but they're located in a monorepo. With this option, each agent will be moving its own service or "folder" if you want, without getting conflicts with others.

2. `/review`

Reviews your code after writing it, highlighting potential issues and ways it can blow up. I like to run it before committing to catch things I might have missed — edge cases, security holes, performance pitfalls, and so on. Also gives general feedback about the code: is it readable to someone besides me? Cool early feedback from an LLM.

3. `/batch`

Decomposes your codebase into smaller independent units and spawns one agent per unit.
This can be used as a smarter "IDE", like let's refactor this module to single responsibility objects.
Or add a validation layer for all modules.
Or rename routes for each controller, and so on.

4. `/simplify`

Spawns code review agents with a given prompt.
Examples:

`/simplify find possible memory leaks`
`/simplify verify no deadlocks introduced`
`/simplify check no srp violated`

So it runs code review with multiple agents to match your prompt. Useful at the final stages of code, when all the tests/linters pass and you want to improve your solution before merging into upstream.

5. `/sandbox`

Like `--dangerously-skip-permissions` but done the right way. It already gives you a VM:
macOS: Uses Seatbelt for sandbox enforcement.
Linux: Uses bubblewrap for isolation.
So it can run simple commands in the current folder without your permissions. It can run bash, git, and so on without bothering you.

In case it needs to check something outside the working folder, it will prompt for your permission.
It reduces your prompts significantly, making you more focused on other stuff. Must-have option.
For me it has problems with git commit signing, always waiting for me to interact, sign, and push. But in all other cases works great.

6. `/loop`

Useful in case you are looking for a bug and can't locate it, and you have written failing tests.
You can say loop until the test suite is green, or the linter passes, or whatever.
Also good with `git bisect`[^1] where you can say this commit does not have the bug, and the current one does. Loop until you find the working version and produce a fix.

7. `/debug`

In case you have found an uncertain, flaky bug, you can just give some error trace and run this command.
It will reproduce it → find the cause → suggest a fix. You do the final review and accept.

8. `--effort` can be low/medium/max

This one is cool for managing your context window and tokens in general, so you won't run out of them before your working day ends.
Default is medium — you use that regularly.
Low is used when you just need a simple question, like check this API whether it has such an option, make some web search, and so on.
Max is when you have an architectural prompt but in general words. Let's say you want to implement a new config structure and you have that in mind, but you're not clear and may lose details. With max effort it can help you highlight such options and propose solutions.
Using max effort regularly will kill your tokens very fast.

9. `/hooks`

You can set up hooks on task finish, prompt needed, and so on.
Let's say you want to send a tweet on task completion (I'm joking).
Or you want to send a text message to your favorite messenger that the task is complete while you're AFK. You can write a custom command to verify that you are AFK and annoyingly remind you about a task pending because of your input. Also cool for tracking statistics — which project consumed how many tokens/memory. You can later build a Grafana dashboard from that data.
For the full reference, it's quite a big article[^2].

10. `claude --dangerously-skip-permissions`

This one reads like "ALLOW ALL", meaning that it can accidentally wipe your filesystem, corrupt your OS, or just delete your databases. There's a rare case when you want this (or at least you should think hard about what prompt you are entering), but it can still be useful for doing something simple without interacting with permissions. Let's say you have some scenario where it asks you for many safe commands like read files, git commit them, verify status, verify deploy status, and so on. Non-destructive commands, I would say. This flag would help. Or you can run this flag in case your Claude CLI is running in some VM without access to your valuable files, and the maximum damage it can do is wipe your VM, which you can easily restore.
With great power comes great responsibility. Be vigilant.

## Footnotes

[^1]: https://git-scm.com/docs/git-bisect
[^2]: https://code.claude.com/docs/en/hooks
