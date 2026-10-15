---
title: 'Decision models. Is determinism great again?'
slug: 'decision-models'
categories: ["Engineering"]
tags: ["llm", "ai", "decision-models", "software-engineering"]
intro: We are programmers, right? We all came from a deterministic, logical world. With LLMs we lose determinism. Decision models talk in typed structures instead.
description: LLMs answer in prose and give a different answer on every run. Decision models answer typed questions with labels and probabilities you can write if-else logic on.
keywords: ["decision models", "llm", "determinism", "software engineering"]
---

## What is a decision model?

If you've never heard the term, don't worry -- it's simpler than it sounds.

An LLM takes text and gives you text back. You ask a question, it writes an answer, word by word. Ask the same question twice and the wording, the structure, sometimes even the conclusion will drift. Your code then has to read that answer and guess what it meant.

So the difference in one line: an LLM answers in prose, a decision model answers in data.

## Determinism is what we're used to

Over the last 3 years we've all gotten fed up with LLMs (large language models). These are thingies that speak a language we understand.

But we are programmers, right? We all came from a deterministic, logical world: "if A is true, do B, otherwise do C" -- if-else, in other words.

With LLMs we lose determinism. Try running claude "review my PR" -- you get a big pile of text about everything. Then clear and run it again. You'll get a completely different pile of text, probably slightly similar to the previous one.

That's great for an essay, or a novel, or copywriters. But for us programmers it's the enemy. How can you build software on top of this at all? I have no answer.

But the companies that do research and dig around in solutions came up with a cool thing. Definitely way more deterministic than LLMs. These are the so-called decision models.

Let me explain what this is: they no longer speak the language we're used to. They speak the language of typed structures. More like a DB query, or GraphQL, or REST.

In your request you specify the whole structure you need up front, mark up the answer options, and get a quantitative result you can rely on (a probability from 0 to 1, or 0% to 100%).

Right now these solutions are represented by 3 neural nets: jev[^1], laya[^2], subq[^3].

## Example usage

A simple example, no essay in the answer.

The task: where to route a ticket, to which department[^4]?

```js
import { choice, noul, score, TypeSafeClient } from "@typesafe-ai/sdk";

const ticket = "Our API integration started returning 500 errors on every request about 20 minutes ago, and we can't process any customer orders until this is fixed.";

const client = new TypeSafeClient({ defaultModel: "jev-latest" });

const response = await client.systemOne({
  state: ticket,
  questions: {
    department: choice("Which team should handle this", {
      billing: "Payment or subscription issues",
      technical: "Bugs or integration problems",
      sales: "Pricing or account questions",
    }),
    frustration: score("How frustrated the customer appears", [
      "Calm, just stating facts",
      "Frustrated but civil",
      "Very angry, strong language",
    ]),
    is_urgent: noul("The message conveys urgency or time-sensitivity"),
  },
});

console.log(response.answers.department.choice);
console.log(response.answers.frustration.score);
console.log(response.answers.is_urgent.noul);
```

The console output will be:

```
technical
0.67
0.99
```

Then, for example, you can access the answer results and write your own event handlers and logic on top of these answers:

```js
if (response.answers.department.choice === 'technical') {
  HoneyBadger.client.sendAlert("We are on fire!")
}
```

You can also write them on probability values:

```js
if (response.answers.frustration.score > 0.9) {
  Users.findAffected().then(users => {
    users.forEach(user => SmsRelay.sendMessage(user.phone, "Sorry for the inconvenience. Take free promo code XXX for $10"))
  })
}
```

And this is something you can actually work with. It's not digging logic out of long text answers, it's writing logic on already computed values.
Very convenient!

This is already something typed, clear and digestible for a programmer, not a bunch of letters on the screen.

Overall there are a lot more neat tricks, like how to phrase the request properly and what request types exist, but let's leave that for future posts.

## Footnotes

[^1]: https://docs.typesafe.ai/introduction
[^2]: https://huggingface.co/convaiinnovations/laya
[^3]: https://subq.ai/
[^4]: https://docs.typesafe.ai/introduction/quickstart
