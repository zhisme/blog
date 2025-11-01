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

## The Real Value: Cognitive Offloading

The real power of AI isn't in writing code—it's in **offloading cognitive burden**.

- Don't waste mental energy on boilerplate
- Don't spend 20 minutes remembering SQL syntax for window functions
- Don't manually map out execution flows through 50 files
- Don't stare at a blank test file wondering what edge cases exist

Use AI for the grunt work. Reserve your brain for the hard problems: architecture decisions, business logic, performance optimization, and the creative problem-solving that actually defines software engineering.

## Final Thoughts

AI is a productivity multiplier, not a replacement for skill. Use it to move faster on the boring stuff so you have more energy for the interesting stuff. But never—and I mean **never**—trust it blindly.

Review every line. Understand every decision. Own your code.

Because when production breaks at 2 AM, the AI won't be the one on the pager.
You are responsible. Always.
