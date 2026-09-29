---
title: 'Not Worth the Squeeze; Picking a Neural Net'
slug: 'not-worth-the-squeeze-neural-net'
categories: ["Industry"]
tags: ["ai", "claude", "tools", "linux", "arch"]
intro: Everyone argues about which neural net writes better code, benchmarks this, benchmarks that. Meanwhile the argument itself costs more than just picking one and using it.
description: Why arguing over which LLM to pick wastes more time than picking one. A Linux Ubuntu vs Arch analogy for why Claude beats the tinker-it-yourself alternatives.
keywords: ["claude ai", "choosing an llm", "ai coding tools", "vibe coding", "claude vs chatgpt", "arch linux vs ubuntu analogy"]
---

I keep hearing arguments everywhere: should you pick this one, it writes code better, or that one, worse — or hey, why not just build your own?! Then compare the metrics: "whoa, mine beats the out-of-the-box ones from other providers by 3% on benchmarks!! I'm so cool.."

If you're curious what I'm talking about, take a look at this benchmark for example[^1].

Talking about what to pick costs more than just doing it. Buy Claude and start using it, instead of spending days figuring out what's best. You won't get it until you try it. Good thing they've got a $20 plan.

It's like with Linux. Yeah, Ubuntu's simpler, decisions made for you, but it works right after install (see DHH's omarchy[^2]). Arch's more flexible, sure, but if you're unlucky you'll be patching your own AUR, fixing stuff for yourself, praying that after a kernel update you don't get stuck with a blank terminal window and a jumping cursor because the new kernel didn't find your video card and the monitor couldn't render X11.

Is an engineer someone who spends months building a system tailored to themselves, or someone who takes what's ready and tunes it to their needs? The question isn't about configurability — it's whether you have the time for it, and whether it's even worth it.

Out of the box, Claude's the best of everything out there. With the rest you sit with a file in hand — filing, filing, filing, and yes ... filing.

My advice: go with Claude by default. Use it a month, two, three, and you'll figure out what's missing, get to know the tool. After that you either move to semi-homebrew setups and rebuild everything around yourself, or stick with a couple of skills and handy scripts around Claude and call it a day — enjoy it, convert human-AI hours into money and useful work (or not so useful), but you'll get some output for sure, instead of talk, agonizing over choices, and zero results.

My own pick, after three years of heavy neural net use: Claude, only Claude. One real downside — token price (yeah, you'll get comparatively less than with other providers). But you're not planning to build the next Instagram killer, are you?! For everything else you'll have plenty of tokens. Meanwhile it's a class above the rest with none of the hassle (remember the golden days of Windows/Mac/Ubuntu — works well right out of the box). And if open source is missing something, you can find it, or vibe-code it yourself.

Everything else is Arch Linux: get lucky and it builds, don't and you're compiling from stale sources, praying it doesn't fall apart after the next update[^3]. <!-- TODO: add funny story when arch failed to boot after upgrade -->

---

My advice isn't an ad, not an offer, not a call to action. Aimed at coders (vibe-coders included) and IT folks close to code. If you've ever written so much as a script or an SQL query, you'll get along with Claude, guaranteed.

p.s.
I've got nothing against Arch Linux, but only if you're under 20, no wife, no kids, no personal life to speak of, and you're not planning on leaving the house for the next six months while you set everything up (and then find some new shiny thing and start rebuilding it all over again).


## Footnotes
[^1]: https://artificialanalysis.ai/agents/coding-agents?coding-agents-cost-chart=cost-distribution
[^2]: https://omarchy.org/
[^3]: https://bbs.archlinux.org/viewtopic.php?id=278312
