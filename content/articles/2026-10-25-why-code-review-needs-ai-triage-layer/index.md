---
title: 'Why code review needs an AI triage layer'
slug: 'why-code-review-needs-ai-triage-layer'
pinned: true
categories: ["Engineering"]
tags: ["ai", "llm", "code-review", "decision-models", "software-engineering"]
intro: We are used to compilers/linters/formatters of our beloved programming language. In the era of neural net (AI) we want to get the best of the world and make reviews more machinery and more "smart". How do we achieve that?
description: Nobody reads a 2k-line PR, they press approve. Why AI should review first, fix the small stuff, and route only the critical lines to a human, instead of replacing review and paying for it in incidents.
keywords: ["ai code review", "llm code review", "code review triage", "large pull requests", "reviewing ai generated code", "lgtm", "code review process"]
---

## Machinery Review

Compilers/linters/formatters are cool tools. For decades we have been using them alongside us; our pipelines were built on top of the input of linters, tests and compilers. If all pipelines were green, we trusted them. The static and deterministic analysis of such tools was easy to understand.

Green tests mean the logic is OK: we didn't violate our product logic regarding WHAT our code does (we may argue about this point, but most of the time that is the most valuable factor to us). Green linters mean we didn't violate our company rules regarding HOW we write code.

But what if I say that real world companies live with red CI?! That's basically what happens somewhere, sometimes. They use one tool: the code compiled, which means we can actually ship it somewhere, it is READY.

All of the above is the machinery part of review, based on tools developed by other people. We can have flaky tests, arguable rules for our code, some inline `TODO:` comments and disabled verifications. But those tools are quite simple, I would say. We configured them, we know how they work, so we are quite familiar with them. A deterministic approach backed by known algorithms.

But the question is: can we actually say that running these tools against the HEAD commit of a developer's branch is code review? Of course not. This is just some kind of verification that the developer's code is actually worth reviewing by a human.

I had an enormous count of PRs where I was assigned, but I was giving them back because the code couldn't even compile on the remote machine, e.g. gitlab-runner. Reviewing such code would be just a waste of my time.

So let's agree: static analysis and a green build are not code review. Let's proceed with this idea.

## What Is Code Review?

Then what is code review? Until nowadays, the epoch of AI, it was people's duty to review others' code, based on some agreement between author and reviewer about how "good/clean" code should look. This definition varies from company to company and even between people inside the same company. I would say this agreement mostly exists within a team, or at maximum within a company's department.

There are some definitions of "clean/good" code, but basically there are more contradictions than common ground in such terms. So clean-good / bad is a non-deterministic approach. Do you agree on that?

A reviewer today can be very happy and approve nearly anything. Tomorrow he's upset and does a harsh, deep-dive review. Did the reviewer change his mind, go mad, or? Nah. That's just a real human being with his emotions and other stuff going on in his head. That's normal behavior. But it's far from deterministic behavior, isn't it?

## Big PRs

Another problem you may think of: big PRs. Let's say a PR > 500 lines long, or even > 1000 lines long. Isn't this scintillating?

Do you know that according to statistics[^1] reviewers find far fewer defects in big PRs than in small ones? There's a meme where the reviewer deep dives into a 50-line PR, asks clarifying questions, and then goes hard on the algorithm chosen.

{{< figure src="2k-lgtm.jpeg" alt="Reviewing is hard.." caption="LGTM!" >}}

But when the reviewer sees a 1000-line PR, he tends to just press the "APPROVE" button. Ah, first of all he would try to sabotage or dodge such a PR. Cause what sane being would like to take responsibility for a codebase that is going to be merged upstream? In case other dodging techniques didn't work, he will just drop 1-2 comments and then press APPROVE. That's a true story. Because he understands he has no time to deep dive into 1000 lines of code.

That's, I believe, the reason why people fight neuroslop. It is extremely cheap to write, but very hard to review. Imagine reviewing machine-written code 2k lines long. That's insane! I wouldn't have read that, and neither would you (at least we wouldn't be happy at all spending time on this tedious activity).

## PRs As Communication

Another review problem that is hard for people: we used to teach other developers and communicate with each other by reviewing each other's code. You remember that time?

All the juniors and trainees I have worked with have gone through a harsh code review process. And yes, sometimes I was too harsh and deep diving. I wouldn't review another senior's code like that, for sure. But with a junior you are driven to teach them and give some knowledge, and that drives you and makes you more attentive. And vigilant. Cause in no time your junior will tend to write some `SELECT * FROM TABLE` which is 100m rows long, or even a `DELETE` without a where clause. So it is your responsibility as the more senior guy to spot such things and help them navigate through this code/engineering world.

But let's get back to the review problem. We try to teach each other, or communicate, AFTER decisions were made. So it's a true story when some senior guy decided to implement the feature in SUCH a way, and when you spot that his architecture or decision is incorrect, you are asking him to `rm -rf` his files. And REIMPLEMENT that. Sounds insulting, no?

Barely. You are asking him to re-implement his work because you don't like his solution, or you prove his solution is slow/dangerous/unreadable (select the suitable). So you have arguments in your pocket, which are very rational.

But imagine yourself in such a situation. You would use any possible way to dodge this code review and persuade your colleague that your solution is cool and production-ready or you will fix his comments in follow-up PR. Or at least communicate with him that you can do 1-2-3 small fixes to your original code, but for sure you are not going to reimplement.

So the idea of this paragraph is to show that we used PRs as a sort of communication with each other. Among our developer species. This question was raised not by me but by Rachel Laycock[^2]. But now PRs have become something else. We should use other tools to communicate with each other, not just send PRs and say "hey, @developer, here's my solution. Please drop a review, I'm waiting".

Code review is hard.. For sure. And now it is even harder than it was before. We have to rethink and revolutionize our approach to the code review process.

## PR Review As Safety Net

We consider code review a safety net that can avoid further rollbacks and incidents in production. The main goal is to find the most bugs/design/decisions made wrong during code review.

We want to share responsibility between the author and reviewer A, reviewer B, ... reviewer Z. So later, if this code has caused an incident, we know who to call and ask politely to wake up and mitigate. Or beloved devops will roll back and they will deal with the issues in the morning (or on the weekend if they are unlucky).

So the idea is to have one more layer of certainty that your release cycle will go well and no incident is fired. We achieve this with different layers, starting with:
- linters
- formatters
- new tests written
- old tests passing
- green CI
- at least 2-3 approvers 👍
- acceptance testing passed
- and then the release flow, ready to be finally deployed to production

We want more certainty and confidence from these layers; we for sure don't want to reduce them. Otherwise the time you save in PR review will blow up during a night incident. You basically have no gain from that, you just moved the problem up to the stack head.

Each step requires human effort, except for the CI build (it is handled by the machine). You can automate anything, reducing human effort, but as a result you are just postponing it to the after-release phase. Who needs broken releases where customers complain?

It is easy to convert less human effort into less revenue for your product. But that isn't the goal. You definitely do not want to end up in the situation I demonstrate in fig. 1 (I would say this is the real situation for any vibe-coded product, but most of them never get to scale, that's why it is never seen).

<figure class="effort-figure">
<style>
.effort-figure svg { width: 100%; height: auto; font-family: inherit; }
.effort-figure .ink { fill: var(--ink); }
.effort-figure .pre { fill: #2a78d6; }
.effort-figure .post { fill: #e34948; }
[data-theme="dark"] .effort-figure .pre { fill: #3987e5; }
[data-theme="dark"] .effort-figure .post { fill: #e66767; }
</style>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="effort-title effort-desc">
  <title id="effort-title">Human effort before and after release, humans reviewing versus AI replacing humans</title>
  <desc id="effort-desc">Two stacked bars. When humans review, most effort is spent before release and little on incidents. When AI replaces humans, pre-release effort shrinks but incident effort grows, and the total bar is longer.</desc>
  <g font-size="13">
    <rect class="pre" x="150" y="14" width="14" height="14" rx="3"/>
    <text class="ink" x="170" y="25.5">before release</text>
    <rect class="post" x="290" y="14" width="14" height="14" rx="3"/>
    <text class="ink" x="310" y="25.5">after release: incidents, rollbacks, night calls</text>
  </g>
  <g font-size="14">
    <text class="ink" x="140" y="97" text-anchor="end">Humans review</text>
    <text class="ink" x="140" y="198" text-anchor="end">AI replaces humans</text>
  </g>
  <g font-size="12" class="ink" text-anchor="middle">
    <text x="185" y="68">tests</text>
    <text x="277" y="68">review</text>
    <text x="374" y="68">acceptance</text>
    <text x="441" y="68">release</text>
    <text x="498" y="68">incidents</text>
  </g>
  <g>
    <rect class="pre" x="150" y="76" width="70" height="34"/>
    <rect class="pre" x="222" y="76" width="110" height="34"/>
    <rect class="pre" x="334" y="76" width="80" height="34"/>
    <rect class="pre" x="416" y="76" width="50" height="34"/>
    <rect class="post" x="468" y="76" width="60" height="34" rx="4"/>
  </g>
  <g font-size="12" class="ink" text-anchor="middle">
    <text x="425" y="169">incidents, rollbacks, night calls</text>
  </g>
  <g>
    <rect class="pre" x="150" y="177" width="12" height="34"/>
    <rect class="pre" x="164" y="177" width="18" height="34"/>
    <rect class="pre" x="184" y="177" width="14" height="34"/>
    <rect class="pre" x="200" y="177" width="50" height="34"/>
    <rect class="post" x="252" y="177" width="350" height="34" rx="4"/>
  </g>
  <text class="ink" x="150" y="228" font-size="11" opacity=".7">tests, review, acceptance skimmed; release still manual</text>
  <g class="ink" font-size="12" opacity=".7">
    <line x1="150" y1="248" x2="602" y2="248" stroke="var(--ink)" stroke-width="1"/>
    <path d="M596 244 L602 248 L596 252" fill="none" stroke="var(--ink)" stroke-width="1"/>
    <text x="150" y="264">human effort, time × cost</text>
    <text x="602" y="264" text-anchor="end">illustrative, not measured</text>
  </g>
</svg>
<figcaption>fig. 1: Cut effort before release and it shows up after release, with interest</figcaption>
</figure>

## Do We Trust Pure AI?

Do we trust pure AI? I don't think so. Nevertheless, I believe everyone who claims that you can fully rely on AI review is either stupid or not an engineer. Or he's trying to sell you something you don't need. In any case you don't want that, and in any case you will be losing in such a situation. We are not ready for a full AI review, at least now, dated today's date. Not at all. (yet)

But AI can give you more layers, and that is for sure better than static analysis checks. They can actually benefit your product with more stability and stable release cycles. Those thoughts are exactly what Anthropic mentions in their article[^3].

## Where And How Can We Trust AI?

You can't trust AI 100%. But consider the layers I have described in fig.1: removing or reducing something there affects the final release and incident rate. Adding new layers won't. But for sure you have to consider a conscious number of layers. If there are 20 linters and 20 formatters running on a single PR, does it give positive value? Rhetorical question.

But adding wise layers improves it. Why not run an AI agent to review your changes before a human even touches them? So the human has to review less? Yes, of course you can object and tell me that AI review sucks. Give it the same entry two times and you will get different results. And I won't pretend to be the devil's advocate of AI review here. Yes, sometimes it can produce weird results. But you are the author, you can read what the AI wrote to you and pick what you as the author consider valuable. If it caught a concurrency issue or an unreadable variable name, would you object that it is a useful note?

After this polishing you can ask your team member for review and improve the code even more. Consider the following situation compared to the awful incidents illustration in fig. 1.

<figure class="route-figure">
<style>
.route-figure svg { width: 100%; height: auto; font-family: inherit; }
.route-figure .ink { fill: var(--ink); }
.route-figure .box { fill: var(--bg-subtle); stroke: var(--ink); stroke-width: 1; }
.route-figure .fwd { stroke: #2a78d6; fill: none; stroke-width: 2; }
.route-figure .back { stroke: #e34948; fill: none; stroke-width: 2; stroke-dasharray: 5 4; }
.route-figure .pre { fill: #2a78d6; }
.route-figure .post { fill: #e34948; }
[data-theme="dark"] .route-figure .fwd { stroke: #3987e5; }
[data-theme="dark"] .route-figure .back { stroke: #e66767; }
[data-theme="dark"] .route-figure .pre { fill: #3987e5; }
[data-theme="dark"] .route-figure .post { fill: #e66767; }
</style>
<svg viewBox="0 0 640 352" role="img" aria-labelledby="route-title route-desc">
  <title id="route-title">AI review gates a 2k-line PR before a human sees it</title>
  <desc id="route-desc">A PR goes to AI review loaded with team rules and critical paths. Three outcomes: small issues are fixed by AI, strange or critical changes are routed to a human as a short focused ask, rule violations are sent back to the author for rework. The first two reach release. Below, an effort bar on the same scale as figure 1 is shorter overall with a small incidents tail.</desc>
  <rect class="box" x="10" y="40" width="110" height="44" rx="4"/>
  <text class="ink" x="65" y="66.5" font-size="13" text-anchor="middle">PR, 2k lines</text>
  <path class="fwd" d="M120 62 H164"/>
  <path class="fwd" d="M158 57 L166 62 L158 67"/>
  <rect class="box" x="170" y="30" width="140" height="64" rx="4"/>
  <text class="ink" x="240" y="56" font-size="13" text-anchor="middle">AI review</text>
  <text class="ink" x="240" y="76" font-size="10" text-anchor="middle" opacity=".7">team rules, critical paths</text>
  <path class="fwd" d="M310 62 H340 V30 H364"/>
  <path class="fwd" d="M358 25 L366 30 L358 35"/>
  <path class="fwd" d="M310 62 H364"/>
  <path class="fwd" d="M358 57 L366 62 L358 67"/>
  <path class="back" d="M310 62 H340 V134 H364"/>
  <path class="back" d="M358 129 L366 134 L358 139" style="stroke-dasharray:none"/>
  <rect class="box" x="370" y="10" width="230" height="40" rx="4"/>
  <text class="ink" x="485" y="27" font-size="11" text-anchor="middle">fixed by AI</text>
  <text class="ink" x="485" y="41" font-size="10" text-anchor="middle" opacity=".7">lint, naming, small smells</text>
  <rect class="box" x="370" y="62" width="230" height="40" rx="4"/>
  <text class="ink" x="485" y="79" font-size="11" text-anchor="middle">routed to a human</text>
  <text class="ink" x="485" y="93" font-size="10" text-anchor="middle" opacity=".7">40 strange lines, not 2k</text>
  <rect class="box" x="370" y="114" width="230" height="40" rx="4"/>
  <text class="ink" x="485" y="131" font-size="11" text-anchor="middle">rejected to the author</text>
  <text class="ink" x="485" y="145" font-size="10" text-anchor="middle" opacity=".7">rework, rules violated</text>
  <path class="fwd" d="M600 30 H615 V196 H606"/>
  <path class="fwd" d="M600 82 H615"/>
  <path class="fwd" d="M612 191 L604 196 L612 201"/>
  <path class="back" d="M370 148 H350 V232 H65 V90"/>
  <path class="back" d="M60 96 L65 88 L70 96" style="stroke-dasharray:none"/>
  <rect class="box" x="370" y="176" width="230" height="40" rx="4"/>
  <text class="ink" x="485" y="193" font-size="11" text-anchor="middle">release</text>
  <text class="ink" x="485" y="207" font-size="10" text-anchor="middle" opacity=".7">fewer incidents, faster delivery</text>
  <text class="ink" x="140" y="293" font-size="13" text-anchor="end">AI gates first,</text>
  <text class="ink" x="140" y="309" font-size="13" text-anchor="end">humans do the rest</text>
  <g font-size="10" class="ink" text-anchor="middle">
    <text x="165" y="272">tests</text>
    <text x="202" y="272">review</text>
    <text x="249" y="272">acceptance</text>
    <text x="301" y="272">release</text>
    <text x="340" y="272">incidents</text>
  </g>
  <rect class="pre" x="150" y="280" width="30" height="30"/>
  <rect class="pre" x="182" y="280" width="40" height="30"/>
  <rect class="pre" x="224" y="280" width="50" height="30"/>
  <rect class="pre" x="276" y="280" width="50" height="30"/>
  <rect class="post" x="328" y="280" width="25" height="30" rx="4"/>
  <g class="ink" font-size="12" opacity=".7">
    <line x1="150" y1="328" x2="602" y2="328" stroke="var(--ink)" stroke-width="1"/>
    <path d="M596 324 L602 328 L596 332" fill="none" stroke="var(--ink)" stroke-width="1"/>
    <text x="150" y="344">human effort, same scale as fig. 1</text>
    <text x="602" y="344" text-anchor="end">illustrative, not measured</text>
  </g>
</svg>
<figcaption>fig. 2: AI gates first, a human sees only what needs a human, incidents and effort shrink</figcaption>
</figure>

## AI Triage

What if I tell you that the solution is easier than you think. Do you believe that an LLM can verify the grammar rules in the text you write? Why can't you rely on that for your code? So the LLM will find smells and other stuff in your code that may bite, and we can allow the LLM to work on such issues itself.

But for complex solutions there's triage: who will fix? LLM or human? Or LLM with a human copilot? You can actually route your fixes with an LLM (I wrote about routing with typed labels instead of prose in decision models[^4]). Some don't need an extra solution from you and the LLM will do just fine.

The other thing is to consider and understand where the critical paths of your application are. What is very important, what is core for your application? Where should every line be reviewed with extra effort? You are the one to define such boundaries. Also you have some business rules to cover, and an LLM won't do that for you (unless you give it the context).

## Conclusion

So basically, my high-level idea is that integrating AI into your company workflow requires effort. We should store the logic and rules valuable for the team/department/company in some factstore, where we can share our knowledge with AI. In the previous epoch (pre-AI) we did this by writing and reading guidelines, sharing them across team members and properly setting up formatters and static analyzers. Now it is time to move forward and think of the next step for such tools.

What about a factstore that can be shared with AI agents for review, building, testing and so on? I think it should look like the following: the guide clearly states which critical pieces should be looked at by a human, and whatever violates the rules goes back to the author for rework. On top of that, another LLM pass looks at the solution from a different angle (security, performance, data), so that it's a solid piece of the review world.

So that it looks as much as possible like an expert review from the domain area, as if another person reviewed it, knowing their shit, getting it done, not guessing. And not just based on general data by neural net provider trained on it.

Ideally, these guides and AI tools have expert domain knowledge and the solution behind it. Like: don't touch this shitty-code algorithm, it works, but it's written really ugly, and nothing should ever break it or refactor it

<figure class="judge-figure">
<style>
.judge-figure svg { width: 100%; height: auto; font-family: inherit; }
.judge-figure .ink { fill: var(--ink); }
.judge-figure .box { fill: var(--bg-subtle); stroke: var(--ink); stroke-width: 1; }
.judge-figure .fwd { stroke: #2a78d6; fill: none; stroke-width: 2; }
.judge-figure .back { stroke: #e34948; fill: none; stroke-width: 2; stroke-dasharray: 5 4; }
.judge-figure .rej { stroke: #e34948; fill: none; stroke-width: 2; }
.judge-figure .ctx { stroke: var(--ink); fill: none; stroke-width: 1.5; }
[data-theme="dark"] .judge-figure .fwd { stroke: #3987e5; }
[data-theme="dark"] .judge-figure .back { stroke: #e66767; }
[data-theme="dark"] .judge-figure .rej { stroke: #e66767; }
</style>
<svg viewBox="0 0 640 210" role="img" aria-labelledby="judge-title judge-desc">
  <title id="judge-title">A shared factstore feeds an LLM judgement that routes every PR</title>
  <desc id="judge-desc">Two inputs, the PR diff and a factstore of team guides, critical paths, a do-not-touch list and business rules, go into an LLM judgement that cites a rule in every verdict. Four routes out: back to the author for rework, to a human reviewer for a critical path, to another LLM pass for a different angle, or rejected as doing nothing useful.</desc>
  <rect class="box" x="10" y="30" width="120" height="40" rx="4"/>
  <text class="ink" x="70" y="54.5" font-size="13" text-anchor="middle">PR diff</text>
  <rect class="box" x="10" y="100" width="120" height="92" rx="4"/>
  <text class="ink" x="70" y="120" font-size="13" text-anchor="middle">factstore</text>
  <g class="ink" font-size="10" text-anchor="middle" opacity=".7">
    <text x="70" y="138">team guides</text>
    <text x="70" y="152">critical paths</text>
    <text x="70" y="166">do-not-touch list</text>
    <text x="70" y="180">business rules</text>
  </g>
  <path class="ctx" d="M130 50 H165 V90 H194"/>
  <path class="ctx" d="M188 85 L196 90 L188 95"/>
  <path class="ctx" d="M130 146 H165 V110 H194"/>
  <path class="ctx" d="M188 105 L196 110 L188 115"/>
  <rect class="box" x="200" y="60" width="140" height="80" rx="4"/>
  <text class="ink" x="270" y="90" font-size="13" text-anchor="middle">LLM judgement</text>
  <text class="ink" x="270" y="108" font-size="10" text-anchor="middle" opacity=".7">reads the rules,</text>
  <text class="ink" x="270" y="122" font-size="10" text-anchor="middle" opacity=".7">cites one in every verdict</text>
  <path class="ctx" d="M340 100 H370"/>
  <path class="back" d="M370 100 V27 H394"/>
  <path class="back" d="M388 22 L396 27 L388 32" style="stroke-dasharray:none"/>
  <path class="fwd" d="M370 100 V77 H394"/>
  <path class="fwd" d="M388 72 L396 77 L388 82"/>
  <path class="fwd" d="M370 100 V127 H394"/>
  <path class="fwd" d="M388 122 L396 127 L388 132"/>
  <path class="rej" d="M370 100 V177 H394"/>
  <path class="rej" d="M388 172 L396 177 L388 182"/>
  <rect class="box" x="400" y="8" width="230" height="38" rx="4"/>
  <text class="ink" x="515" y="24" font-size="11" text-anchor="middle">back to the author</text>
  <text class="ink" x="515" y="38" font-size="10" text-anchor="middle" opacity=".7">rule violated, rework and resubmit</text>
  <rect class="box" x="400" y="58" width="230" height="38" rx="4"/>
  <text class="ink" x="515" y="74" font-size="11" text-anchor="middle">to a human reviewer</text>
  <text class="ink" x="515" y="88" font-size="10" text-anchor="middle" opacity=".7">critical path touched, 40 lines to read</text>
  <rect class="box" x="400" y="108" width="230" height="38" rx="4"/>
  <text class="ink" x="515" y="124" font-size="11" text-anchor="middle">to another LLM pass</text>
  <text class="ink" x="515" y="138" font-size="10" text-anchor="middle" opacity=".7">different angle: security, perf, data</text>
  <rect class="box" x="400" y="158" width="230" height="38" rx="4"/>
  <text class="ink" x="515" y="174" font-size="11" text-anchor="middle">rejected</text>
  <text class="ink" x="515" y="188" font-size="10" text-anchor="middle" opacity=".7">does nothing useful, closed</text>
</svg>
<figcaption>fig. 3: the factstore feeds the judgement, the judgement picks the route</figcaption>
</figure>

Yeah, we'll dig into it somehow, start with something simple, figure it out along the way.

## Bonus

For everyone who did read up to this line, a small present: https://www.youtube.com/watch?app=desktop&v=3TNpOD6bov8

## Footnotes

[^1]: https://static0.smartbear.co/support/media/resources/cc/book/code-review-cisco-case-study.pdf
[^2]: https://martinfowler.com/rachels-ramblings/code-review.html
[^3]: https://claude.dev/blog/solving-code-review-at-anthropic/
[^4]: https://zhisme.com/articles/decision-models/
