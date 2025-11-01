---
title: "When, how and why AI boosts productivity in software engineering"
slug: "practical-ai-for-developers"
categories: ["Engineering"]
tags: ["AI", "productivity", "development-workflow", "tools"]
intro: "How I use AI to enhance my development workflow without blindly trusting generated code"
description: "My personal practical strategies for using AI in software development: from brainstorming to documentation, testing to codebase exploration — without the blind trust"
keywords: ["AI programming", "developer productivity", "code review", "AI tools", "software engineering workflow"]
---

Let's be clear: **I don't use AI for coding**. But I do use it to make me more productive. There's a massive difference between the two, and understanding that difference is what separates developers who benefit from AI from those who end up debugging AI-generated disasters.

## How I met AI

It was early 2023 I guess the first time openai released the API in public and it make my attention to it. I was skeptical. I tried it out for fun, asking it to generate some code snippets. I was using it mainly for SQL queries generation at first. And I was shocked, it actually was working. Not always, not every time, but in 5-15 iterations I could get a working SQL query that did what I wanted. I was actually loading the whole db schema into the prompt to help it understand the context. It was a game changer for me. It would take time for me to understand all the indexes/tables how to plan the query and to google all the needed aggregation functions, what's join is better etc. But with AI it was just a matter of prompt engineering. I could get the query in few iterations. I was amazed. That's how my journey with AI started.

## The Golden Rule: Never Commit Without Review

Here's my first principle: **Never commit AI-generated code without reviewing each line**. I don't care how confident the AI sounds or how syntactically correct the code looks. If you can't explain what every line does and why it's there, you have no business merging it.

AI is a tool, not a teammate. It doesn't understand your business logic, your edge cases, or the subtle bugs that will wake you up at 3 AM.

## What I Don't Trust AI For

### Writing Production Code

I don't trust AI code. Period.

I'll use AI for brainstorming and problem-solving—"Hey, what are some approaches to handle rate limiting in a distributed system?"—but the actual implementation? That's on me. AI can suggest patterns, but I'm the one who has to make them work in the context of my application.

## What I Do Trust AI For

### 1. Boilerplate and Repetitive Tasks

Generating boilerplate code? Hell yes.

CRUD operations, API route scaffolding, model definitions—this is where AI shines. But here's the catch: **I will tune it later**. AI gives me the skeleton, I add the muscle and nervous system.

Example: "Generate a REST controller for a User resource with CRUD operations in Express.js"—I'll get the structure, then I'll add validation, error handling, authentication, logging, and all the things that make code production-ready.

### 2. Documentation and Comments

AI is surprisingly good at writing clear documentation and comments. It helps me maintain clarity, especially when I'm deep in implementation mode and my brain is tired of context-switching.

**Tip**: After writing a complex function, paste it into AI with the prompt: "Write clear documentation for this function, including parameter descriptions and edge cases." Review it, adjust for accuracy, and you've saved yourself 10 minutes of staring at a docstring template.

### 3. Exploring Large Codebases

This is where AI becomes genuinely valuable: **digging through unfamiliar codebases**.

Here's my workflow:
1. I identify an entry point (a route handler, a CLI command, whatever)
2. I ask AI: "I need to implement feature X. This is the entry point at `src/routes/users.js:42`. Can you describe how this executes through the system so I can understand briefly and dig in myself?"
3. AI gives me a high-level execution flow
4. I use that as a map to explore the actual code

This saves hours of grepping through files trying to understand how data flows from request to response.

**Example prompt**:
```
Entry point: app.post('/api/orders', orderController.create)
Located at: src/controllers/orderController.js:15

Describe the execution flow when a POST request hits this endpoint.
Include: middleware chain, service layers, database interactions,
and any background jobs triggered.
```

### 4. Drawing Diagrams and Architecture Plans

AI is exceptional at drawing UML and Mermaid diagrams from text descriptions.

Instead of spending 30 minutes dragging boxes around in a diagram tool, I'll describe the system architecture in plain English and get a clean Mermaid diagram in seconds.

**Tip**: "Draw a sequence diagram for the OAuth2 authorization code flow in our system. Include the client, auth server, resource server, and user agent."

The output might need minor tweaks, but you're 90% of the way there instantly.

### 5. Writing Tests and Test Cases

AI is brilliant for helping write tests, especially for covering edge cases you might miss.

My workflow:
1. Write the endpoint/service
2. Give AI the context: "I wrote this authentication middleware. Here's what it should do: [description]. Here are example inputs and expected outputs:"
   ```
   Input: { token: 'valid-jwt-token' }
   Expected: User object extracted, request proceeds

   Input: { token: 'expired-token' }
   Expected: 401 error, message: 'Token expired'

   Input: { }
   Expected: 401 error, message: 'No token provided'
   ```
3. Ask: "Write comprehensive test cases for this, including edge cases I haven't thought of"

AI will generate test structures you can adapt. You'll still need to review and ensure they test the right things, but it's a massive time-saver.

### 6. Learning New Technologies and Concepts

This is where AI truly shines: **personalized learning**.

With proper prompts about your interests, background, and learning style, AI can help you find resources, summarize complex topics, and generate practice problems to test your understanding.

Google even released a "Learn Your Way" AI tool designed to help students learn more effectively by tailoring content to their needs—taking into consideration your real-life experiences, learning preferences, interests, and how you best absorb information.

**My workflow for learning**:
- "I'm a Rails developer learning Rust. Explain ownership and borrowing using analogies from Ruby's memory management"
- "Generate 5 practice problems for understanding React hooks, starting from beginner to intermediate level"
- "Summarize the key differences between gRPC and REST APIs. I'm familiar with REST already"

AI adjusts to your context. No more sifting through generic tutorials that assume you know nothing—or worse, assume you know everything.

## The Real Value: Cognitive Offloading

The real power of AI isn't in writing code—it's in **offloading cognitive burden**.

- Don't waste mental energy on boilerplate
- Don't spend 20 minutes remembering SQL syntax for window functions
- Don't manually map out execution flows through 50 files
- Don't stare at a blank test file wondering what edge cases exist

Use AI for the grunt work. Reserve your brain for the hard problems: architecture decisions, business logic, performance optimization, and the creative problem-solving that actually defines software engineering.

## The Elephant in the Room: Privacy Concerns

Let's address why people still aren't using AI in 2025: **privacy**.

What will AI tools do with your data? How do they store it? Can someone else stumble upon your proprietary code snippets while asking similar questions? Will your company's internal logic end up in someone else's AI-generated response?

I believe in the old aphorism: **"If something gets into the internet, it will be there forever."**

Many companies rightfully forbid AI tools on company devices. Your employer has every right to protect their IP. But here's the thing: **opensource is now more fun than ever** with AI.

You can jump into any opensource repository with an AI tool, grab an issue, and command your AI to dig through the codebase, find related changes, understand the context, and give you a summary. Suddenly, contributing to massive projects like Kubernetes or Rails isn't as daunting anymore.

**My approach**:
- Work code? No AI. Or only approved, self-hosted, company-controlled AI tools.
- Opensource? AI all the way. It's public anyway.
- Personal projects? Your call. Just don't paste production secrets or API keys like a fool.

Privacy concerns are legitimate. The solution isn't to avoid AI—it's to be intentional about when and where you use it.

## AI is Your Tool, Not Your Brain

Here's the uncomfortable truth: **Only good developers can use AI tools effectively**.

You have to understand and write code in your everyday routine to know what's going on and how to adjust AI answers and prompts to your needs. You cannot trust it blindly. You must verify and validate what AI gives you.

But here's the kicker: **AI is your assistant, not your replacement**.

A good developer with AI will outperform a bad developer with AI every single time. Why? Because:
- You need to understand programming fundamentals to evaluate AI suggestions
- You need to know architecture patterns to recognize when AI is suggesting garbage
- You need to understand algorithms and data structures to optimize what AI generates
- You need domain knowledge to translate requirements into proper prompts

AI can suggest multiple solutions, but **the responsibility and final choice are always yours**.

A junior developer copying AI code without understanding it will produce buggy, unmaintainable garbage. An experienced developer using AI to skip boilerplate and explore solutions faster? That's a force multiplier.

AI cannot replace a good developer. But a good developer with AI can absolutely replace a mediocre developer without it.

## Final Thoughts

AI is a productivity multiplier, not a replacement for skill. Use it to move faster on the boring stuff so you have more energy for the interesting stuff. But never—and I mean **never**—trust it blindly.

Review every line. Understand every decision. Own your code.

Because when production breaks at 2 AM, the AI won't be the one on the pager.
You are responsible. Always.
