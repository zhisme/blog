---
title: "Give Your LLM Brevity"
slug: "give-your-llm-brevity"
categories: ["Engineering"]
tags: ["claude", "ai", "tools"]
intro: "If you're tired of your LLM writing poems for you and eating your limits, the caveman plugin will help."
description: "Caveman plugin for Claude Code: cut token usage ~75% while keeping full technical accuracy. Terse output, fragments OK, code unchanged. No AI-slop poems."
keywords: ["claude code", "claude plugin", "caveman mode", "llm brevity", "token efficiency", "terse output", "claude caveman"]
---

{{< quote author="A.P. Chekhov"  authorPic="chekhov.jpg" >}}
Brevity is the Sister of Talent
{{< /quote >}}

## Why?!

I don't want to read invented machinery poems from an LLM about why it chose `BigDecimal(0.5)` instead of a literal `0.5` and writes 3 paragraphs defending a choice I didn't ask about.
I don't want to read invented nonsense that I have no time for.
If I don't like something, I'll ask to reimplement/refactor, or in rare cases request elaboration.
Then I will cover it with the needed tests until it satisfies me.
If you're like me, you don't want to spend time on that.

Hopefully there's a solution: [`caveman`](https://github.com/JuliusBrussee/caveman).

## What it does

It does correct prompt engineering[^1], telling the LLM to be terse and less verbose. It also adds hooks to your CLI, so they won't be "forgotten".
Of course, you can do that by writing it to your `~/.claude/CLAUDE.md`, but that only works occasionally.

This plugin architecture is total shit (just a plain `SKILL.md` and MCP to send it to the server) compared with githooks, for example, where your instructions are guaranteed to run — no probability they might be ignored for some reason not even remotely obvious to you (the LLM just decided so, arghh).


## How to install

1. `claude plugin marketplace add JuliusBrussee/caveman`
2. `claude plugin install caveman@caveman`
3. `bash <(curl -s https://raw.githubusercontent.com/JuliusBrussee/caveman/main/hooks/install.sh)`
4. `mkdir -p ~/.config/caveman && echo '{"defaultMode":"ultra"}' > ~/.config/caveman/config.json`
5. `source ~/.zshrc` or `source ~/.bashrc`

This will add the plugin to your Claude-code, install the status bar (point 3) and set the default mode to ultra (max compression). You can loosen it to other modes, but I'm using the max. Less text, less attention to pay. Win-win.
Enjoy!

## Footnotes
[^1]: https://github.com/JuliusBrussee/caveman/blob/main/caveman/SKILL.md
