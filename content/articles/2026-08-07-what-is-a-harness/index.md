---
title: 'What Is A Harness, Demystified'
slug: 'what-is-a-harness-demystified'
categories: ["Engineering"]
tags: ["ai", "llm", "claude", "tools"]
intro: Harness, harness. You've probably heard this relatively new term by now. Where does it come from?
description: A harness is a loop, tools the model acts with, a deterministic check on the result, and repetition until the check goes green. What the term means, where it came from, and when it degenerates back into a prompt.
keywords: ["what is a harness", "llm harness", "agent harness", "test harness", "claude code harness", "deterministic verification llm", "ai agent tooling"]
images: ["mayakovsky.jpg", "look_at_my_horse.jpg", "index.jpg"]
---

{{< quote author="V.V. Mayakovsky" authorPic="mayakovsky.jpg" citeCaption="\"What Is Good And What Is Bad\" (1925), trans. Dorian Rottenberg" >}}
One fine day a tiny laddie <br>
came and asked his dad:<br>
"Could you tell me, Daddy, <br>
what is good and what is bad?"
{{< /quote >}}

## From testing

The word isn't new. *Test harness*[^1] is a thirty-year-old term: the rig that runs the code under test, feeds it inputs, collects outputs, and says "pass / fail". Swap "code under test" for "model" and you get exactly what everyone is talking about now.

Then there's the literal meaning: a harness is a set of straps for a horse. In this case, the horse is our model.

{{< figure src="look_at_my_horse.jpg" alt="Look at my horse" caption="Look at my horse" >}}

## Two ways

There are two ways to improve a model, in the sense of answer quality, context handling, and "reasoning".

1. **Fine-tuning** — retraining and friends. This used to be affordable only for giants, but today a LoRA[^2] on top of an open model is a weekend and a couple hundred bucks. Cheap doesn't mean easy though: you need data, labeling, and an understanding of what you're actually fixing. The money is no longer the problem, the labor is. Not everyone can afford it.

2. **The harness** — the thing itself. Everything wrapped around the model. You don't touch the model, you touch everything around it.

## One definition, to demystify

A harness is a loop: tools the model acts with, a deterministic check on the result, and repetition until the check goes green.

Three parts, all mandatory. One script is not a harness, it's a tool. One linter is not a harness, it's a validator. The harness is the thing that decides when to call them, what to do with the result, and when to stop.

Without a harness the path is a straight line, and nobody ever checks the end of it:

```
task ──▶ model ──▶ answer ──▶ you hope it's right
                                (find out in prod)
```

With a harness it's a loop that can't be left through the side door:

```
task ──▶ model ──▶ tool call ──▶ result
                                   │
                                   ▼
                              ┌─────────┐
                     ┌────────┤  check  │
                     │        └─────────┘
              red    │             │  green
        "here's what │             │
         broke, fix" │             ▼
                     │        done, exit 0
                     │
                     └──────▶ back to the model
```

The only exit is green. Red doesn't end the run (unless you are out of tokens), it feeds the failure back in as the next input.

## What came before

A year or two ago, advice on improving results came down to prompt engineering, prompt tuning, etc. Roughly: write your inputs better so you hit the right triggers. But not too much and not too little. Golden mean[^3].

Write too much and you ~~stack overflow~~ overflow the context window — models measurably lose track of what sits in the middle of a long input[^4] — and get even more hallucinations. Write too little and you get nonsense: it starts asking clarifying questions and wanders off.

Except the harness didn't arrive *instead of* the prompt. The system prompt, `AGENTS.md`, tool descriptions — all of these are parts of the harness. The difference is elsewhere: a prompt is a recommendation, and it can be ignored. A harness makes some of those recommendations unavoidable. Not "instead of", but "on top of". And it holds — the model can't jump out of the straps.

## Example: a book

Drop a book into a model and say: find everything here about the main character. The result will be so-so. Somewhere it finds things, somewhere it gives up, and somewhere it decides that's enough and skips the rest.

What could the harness be here? A trivial script that greps the text for the character's name and returns every mention — plain substring search over the text. The model calls it, gets an exact list, and then formats it into decent language.

But the script alone isn't a harness yet. The harness appears when there's a check: are all chapters covered, does the mention count add up, and a loop of "doesn't add up, go again". The little script runs once more, and in that loop all the mismatches surface.

## Why it works

Ever notice how well a model works with a CLI, bash, and anything deterministic? How it more or less hammers that CLI until it figures out how it works? It gets a help page: "call me like this, these flags, these commands, nothing else exists." And it re-invokes the CLI in a loop until it gets `exit code 0`.

That's the whole philosophy. The model can be arbitrarily smart or dumb — the only question is how many iterations it needs to reach `exit code 0`. And the value isn't in the straps themselves, it's that the model now has a self-correction mechanism: did it, checked it, fixed it, checked it again.

Which is why a model that writes code wrapped in linters, tests, and formatters is far better than a model that writes code with the prompt "do good, don't do bad".

## What it looks like in the real world

Claude Code and Codex are first and foremost harnesses, not models. Tools with strict call schemas, permissions for what can and can't be touched, hooks on events, subagents with trimmed access and context, project rules read from a file. The model there is a replaceable part. The wrapping is the constant.

## Where it doesn't work

The whole trick rests on one assumption: a cheap objective check exists. It's the same assumption the training people lean on when they reward a model only for answers a machine can verify[^5]. For code it holds — compiler, linter, tests. Ready-made, free, written by someone else.

And for "write a good email"? There's no verifier. Writing one costs more than doing the task by hand. There the harness degenerates back into the prompt "do good". Or you need an expert who knows what a good email is and can pack it into a prompt: "always sign off with Best regards", and so on.

So before building the wrapping, answer this: what am I going to measure green with? If there's no answer, there's no harness as an entity either.

## Conclusion

A harness is a set of deterministic, defined, unambiguous rules that the model bangs against like a wall until it passes. That's the criterion that gives it an understanding of what's good and what's bad. In the literal binary sense:

🟢 all green — good, 1

🔴 at least one validation tool red — 0, all bad

Hope I dispelled a bit of the magic around the word "harness", which is being chanted everywhere these days.

## Footnotes
[^1]: https://en.wikipedia.org/wiki/Test_harness
[^2]: https://arxiv.org/abs/2106.09685
[^3]: https://en.wikipedia.org/wiki/Golden_mean_(philosophy)
[^4]: https://arxiv.org/abs/2307.03172
[^5]: https://arxiv.org/abs/2411.15124
