---
title: 'Machinery Review'
slug: 'machinery-review'
draft: true
categories: ["Draft"]
tags: ["Draft"]
intro: We are used to compilers/linters/formatters of our beloved programming language. In the era of neural net (AI) we want to get the best of the world and make reviews more machinery and more "smart". How do we achieve that?
description: desc
keywords: ["Draft"]
---

Those are cool tools. For decades we have been using it along us, our pipelines were build on top of the input of linters/tests/compilers. If all pipelines green we trusted them. That means that all static and deterministic analysis of such tools were easy to understand.
Green tests, logic is OK -- that means we didn't violate our product logic regarding WHAT our code do (we may argue about this point, but most of the time that is the most valuable factor to us)
Green linters, that means we didn't violate our company rules regarding HOW we write code
Code compiled, that means that we actually can ship our code somewhere, it is READY.

All of the above is the part of machinery review based on other people developed tools.
We can have flaky tests, arguable rules for our code and some inline `TODO:` comments and disabled verifications.

But those tools is quite simple I would say. We configured them, we know how they work, so we quite familiar to it. Deterministic approach backed by known algorithms.

But the question is, can we actually say that running this tools against HEAD commit of developer's branch is code review? Of course not.
That's definetely not code review. This is just some kind of verification that developer's code is actually worth reviewing by human. I had enourmous count of PRs were I was assigned but I was giving it back because code even couldn't compile on remote machine e.g. gitlab-runner. So reviewing such code would be just waste of my time.

So let's agree static analysis and build code is not a code review. Lets proceed with this idea.

Then what is code review? Until nowadays the epoch of AI, it was people's duty to review some others code.
On some agreements between author and code reviewer about how the "good/clean" code should look.
This definition varies from company to company and even between people inside the same company. I would say this agreement mostly exists in team or at maximum companies department.

There's some definitions of "clean/good" code, but basically there's much contradictions then common in such terms.


--

theses:

1.

Do we trust pure AI?
I don't, so

2.

короче у меня верхнеуровневая идея, что в тлн мы должны хранить логику и правила для ревью талунера. типа критические куски должны рассматриваться человеком, и то что нарушает переделывает билд к примеру. и поверх этого еще чтоб было правило llm_review. типа большой МР, с него настругать контекста и уже потом кормить в LLM. чтобы она под другим углом посмотрела на солюшн, чтобы был цельный кусок от мира ревью

чтобы это выглядело макисмально на экспертное ревью из доменной области, как будто другой человек ревьювил со знанием дела. а не просто по общим данным обученным клодом/другой нейросеткой

3.

Evgeny Zhdanov  [3:50 PM]
да, как-нибудь нароем эту хуйню, начнем от простого что-то, в процессе додумаем как-то
[3:51 PM]в идеале эта хуйня tln наша, должна обладать экспертными знаниями. типа не трогай этот ебаный говнокодный алгоритм, он работает, но оч хуево написан и ничего не должно его ломать и рефакторить никогда))
