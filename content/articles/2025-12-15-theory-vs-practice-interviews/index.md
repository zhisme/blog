---
title: "Theory vs Practice: Why Technical Interviews Go Wrong"
slug: "theory-vs-practice-why-technical-interviews-go-wrong"
categories: ["Industry"]
tags: ["interviews", "hiring", "software-engineering", "career"]
intro: "The disconnect between what technical interviews test and what the job actually requires. Wanted to share it earlier, but the time is now."
description: "An examination of why technical interviews often test theoretical knowledge that rarely applies to day-to-day engineering work, and what this means for both candidates and companies."
keywords: ["technical interviews", "system design interview", "software engineering hiring", "algorithm interviews", "interview process"]
images: ["og.jpg", "plumber.jpg"]
---

## TL;DR

**Match interview complexity to job complexity.**

- Interview for what the job actually requires
- System design interviews test interview prep, not engineering ability
- Copying FAANG processes for non-FAANG problems is cargo cult
- Knowledge you don't use, you lose

## An Exaggerated Hiring Story

HR contacts an engineer and asks them:

<blockquote>
Hi, %username%

We are fast-growing, extra efficient, super sufficient
LIST of Fortune 500 FORBES %company_name%

Want to enlarge our staff and hire one another scintillating developer **(YOU)** to join our super friendly team
Let's schedule a call to share the details and proceed with next steps

xoxo

Looking forward to your email %username%

Best regards,
LIST of Fortune 500 FORBES %company_name%
</blockquote>

You reply:

<blockquote>
Hi, extra efficient, super sufficient LIST of Fortune 500 FORBES %company_name%

Thanks for reaching out!

Before any call let's discuss what your expectations are, what is the hiring process?

Regards,
%username%
</blockquote>

HR again:
<blockquote>
Hi, %username%

We think you are a very good match for our company, however I didn't read your resume.

I just checked that your title **(Principal Software Engineer)** matches our title that we are currently looking for.

The following skills are expected: blah-blah-blah

Your responsibility: blah-blah, lead fast-growing super efficient team, be responsible for releases, diseases and your manager's bad mood, blah-blah

Oh, also your hiring process will be the following:

1 step: algorithm interview (we expect you to be a proficient user of LeetCode, you will do BFS/HFS/LPG/DJ/SVG/Tree-deep-node-reversal algorithm (I believe I wrote everything correctly, cause I don't know what these abbreviations stand for he-he)

2 step: design interview, you will be building a full clone Instagram application with robust architecture and uptime for 99.999% SLA. Hope this sounds familiar to you, if any requirement is not met our interviewers will be mad and will not allow you to pass forward. Please prepare and read a few books about system design interview, so you can shine with your efficient knowledge

3 step: management interview, we will create an idiot's situation and you will need to manage them, showing your great communication skills (this actually doesn't matter, we are a toxic collective, but it will be funny for us to see you trying)

4 step: cultural interview. If you don't like zero sugar Coca-Cola and are not vegan, there's no chance for you to pass this step

5 step: interview with our CEO's dog. He's like a talisman to us, his pet is very smart and everyone should be approved by the dog. I believe you are a dog-lover, so you can interact friendly with the dog! That's very important!!

That's all, I wanted to be really honest with you (but you know this never happens in real life he-he)

See your reply and free slots, so we can book the time from our team too
xoxo

Regards,
LIST of Fortune 500 FORBES %company_name%
</blockquote>

And you finally:
<blockquote>
Hi, extra efficient, super sufficient LIST of Fortune 500 FORBES %company_name%

No thanks, I'm not a match.

I never built Instagram, I was doing mostly CRUD and fixing more narrow problems like cache invalidation problems, late-night deploying and debugging microservices-mess in production.

Furthermore I don't want to be rejected by a dog at the final stage. This is bollocks!

So I will not be a good candidate for you, thanks bye-bye-bye

Regards,
%username%
</blockquote>

And that's it. Company demands you to build Instagram, and you are not a match. Why would they hire you for something that you never did?


## Real Story

Most of us have already encountered these strange interviews: where they demand your hands-on experience but test you on hypothetical questions and theory, something that you mostly read about from other companies or tech sites. Let's go straight to the example.

Some HR finds your CV and suggests a position in a new company, let's say for a title "Senior Software Engineer". And then comes all the magic. You are being interviewed for theoretical knowledge, there's maybe a LeetCode-like task for Dijkstra's algorithm[^1] if it's some initial step and your interviewer is a bit of a non-ordinary person.
That's actually not rocket science, but this algorithm is used for pathfinding (imagine Google Maps finding the shortest route for you to the grocery store, so you won't travel with extra distance).

That's a great algorithm and is studied in first courses at any university regarding computer science. But the real question is, are you being interviewed for developing Google Maps path routes? That's already developed — so they're testing your theoretical knowledge.

Most of us haven't used this algorithm after we graduated and started working, have we?

This step is not so hard, and many people tend to pass it. There are many variations for algorithms, you can refer to LeetCode and find other popular algorithms (some HR even sends you a link to which algorithm you will be tested on, like 10-20 example tasks to prepare). Do these 10-20 variants sound like something similar to your school times?

The real interesting problem for me is the system design part of the interview process. Here we have variations of different tasks that are expected to be solved during a 1-1.5h call. Having like 1-2 engineers follow your solution and tend to mess with you and your solution, asking whether this will survive high load, should we add another layer of cache here? And plenty of other questions.
What's funny here, from my opinion, is that interviewers expect you to architect some Instagram-like clone with real distributions, including CDN, caches, DB, clients going offline, DB sharding, some message brokers with data bus, maybe even go further and add business metrics.

Their task will mostly at first expect you to count RPS to forecast the expected high-load value so you can plan your solution to meet defined needs. It is basically some DAU (daily active users) or MAU (monthly active users) and some extra condition to show you that user activity is not normalized — your hotspots for the backend will be mostly in the daytime (but the thing is that your users are across the whole world, so you cannot easily predict the load).

The task will occasionally be poorly written (so you can ask your questions), you will waste another 10-15 minutes to understand what the actual key points are and what can be omitted. Also don't forget that you should also please your interviewer with the solution — if they're an RDBMS expert, they will ask you additional questions ("Are you sure that this DB architecture will handle such load? I would think more deeply about the architecture.")

And here you are sitting, shaking your head, embarrassed and waiting for this interview to end. And this cold thought goes through your mind: "I am not as good as I thought, I never developed Instagram from scratch in my career, I must be a junior developer and they are so smart!"

## The Perfect Match

Let's imagine — are there many people in the market who made Instagram or an Instagram-like application with very high RPS and are looking for their dream job and available to attend such interviews and discuss it? I'm talking not about the person who read some book "System Design Interview"[^2] (which is cool btw), but someone who has real hands-on experience doing similar work.

I really, really doubt it. But still there are many companies, and their count is growing, that are doing system design interviews and are wannabe FAANG companies. Wait. Is this normal? More and more companies interviewing engineers for problems they:
- never saw
- never did
- (mostly) will never do

What is that? They are testing **THEORY** knowledge — how smart is the person they are trying to interview, whether they can retain knowledge that will never be used. Are there many of us who in our careers have built really high-loaded web applications from scratch? Isn't this an evolving process?

System design interviews don't test engineering — they test whether you can read the room. If your interviewer is an RDBMS expert, you better spend time on database design. If they care about caching, pivot there. You're not demonstrating competence, you're performing for an audience of one. The skill being tested isn't 'can you architect systems' — it's 'can you figure out what this specific person wants to hear.'

I admit system design interviews can be useful — they allow you to check if a person can see the whole picture: spot ambiguity in the solution, understand trade-offs, and communicate why they picked one database over another. Why, for example, they default to RDBMS and not NoSQL. A candidate can break complex problems into simpler pieces and all of that. But if the interviewer has previously solved this problem in a different way, they may not accept the new solution, because it doesn't align with their thinking. And this is also a problem to consider.

Here's my answer to the previous question asked in the section above. This is not an interview, this is a school **EXAM** (or university if you want). Why do so many companies try to do examination instead of actually interviewing people? Why did the IT industry walk this path? Do we all think that this is normal and this is how it should be? It is not. Let me explain why.

## The Problem

Such an approach tends to be ignorant and really ineffective.
What such interviews claim to test: problem-solving, system thinking, engineering skills. Why would you test someone for rocket science if you know that person will be doing JSON/XML API and sometimes gRPC (like 1% of all work)?

Does this testing help you believe that the person who passed all these exams is really decent and can be hired?
You can always appeal to authority — but he passed a 5-step interview process! That's something else, nobody to blame here, that's not my responsibility.

The reason for inadequate use of such approaches and too long hiring processes is to avoid personal responsibility of the one who hires.

In case he fails and gets fired later, they can always say, if he passed such a process, he must be great! Maybe he's not good for us, but at least he passed the interview process perfectly.
And everyone is pleased — yeah, we just were not lucky to get such a guy, the only one who we will blame is that guy who passed all exams and then failed. None of us, not the process — we believe it is ideal.

The thing is, theoretical knowledge is just theoretical knowledge. You can have as many pet projects as you want, deploying them on 30 VPS you rented last night, and trying to high-load it and then add to your resume a label ("High-load experienced, worked in company X, had really high-loaded 30 distributed servers"). But this is just "imaginary."

{{< figure src="plumber.jpg" alt="The Pipe Fixer" caption="Theory vs Practice" >}}

Let's see the following dead simple example:
You want to fix a pipe that is broken inside your house. Who will you hire — the guy who fixed every broken pipe you know, metal, plastic, rubber? Or will you hire a guy who will tell you, "I fixed pipes in the President's house and they are still working"? How are you gonna check it? Believe him? Oh yes, he must be very smart, he fixed a pipe in his majesty the President's house! He's so cool!
Or you will pick a guy who has real hands-on experience all his life fixing pipes and will fix yours in no time without extra bullshit talks?

The thing is, people tend to buy such "his majesty the Presidential pipe fixer" when they don't have any pipes broken. They just believe someday these pipes will need to be repaired, but we don't even know their material — but we believe that the guy who worked in the Presidential house will fix our pipes too. But the key point is, your pipes aren't made of gold, just pick an ordinary guy and get your problem done. The same applies in software. Software is a craft, developers are not Albert Einsteins of nowadays. They are more like pipe fixers, but instead of a wrench, they use funny beards, glasses, and computers.

## Why This Happens

There are multiple misconceptions and misunderstandings when trying to be a wannabe FAANG company. This requires **EITHER** acquiring their **INNER** habits and inner processes (how they manage, how they fire, how they promote, how they reward top performers) **OR** acquiring their **OUTER** habits like complex interviews trying to solve non-existent problems, bureaucracy mess, interviewing by third-party companies and doing cultural interviews to be aware that we are on the same side with interviewees to get along for 5-10 years.
So smaller companies look at FAANG and try to copy them, without even a thought to criticize and think critically about why they have such processes.
A Latin proverb says[^3]:
<blockquote>
Quod licet Iovi, non licet bovi
</blockquote>

I think the most common misconceptions are:
1. The safety of "industry standard" processes
2. The cargo cult. Go big or go home. If it's in Google then it's worth it.
3. Companies copying FAANG interview practices without context. Wasting more resources!
4. If we acquire their habits, we will be as big as them!
5. Nobody got fired for using the same interview as Google. Claiming this is standard, we're doing exactly like Google!

Point 1 is quite straightforward — you have "authority" which you can always appeal to, it intersects with point 5.

Point 2. I think this is some ceremony in faith and belief — we believe, then it should work. Some magical thinking. Very close to point 4.

Point 3. Having a five-step interview for a company 100 people big is, I would say, ***nonsense.*** Why would you need to interview someone five times? Your company can lose investors and just disappear while you're doing a five-step interview process.

Alas, this is a real story from nowadays. Even cultural interviews with the owner's dog.


## What This Problem Led To

Now with such standards in the industry, there's not much choice to be made. I select the most common ones:

1. Reject such interviews if there's a system design part
2. Cheat them — LLMs on a different computer besides the interview one. Or glasses, or headphones, or whatever
3. Try to memorize them. Read books on system design, ask other colleagues who had some knowledge about such interview processes
4. Join some private clubs where people attend interviews and share screencasts, questions by the interviewer, and also memorize them
5. Blindly visit such interviews, expecting that some system design actually refers to your experience and was pre-created before asking you to join the interview. Very rare, but exists
6. Ask your colleague through personal interactions to recommend you on their personal responsibility (so you can mostly skip all dull interviews and get the job on trial right away)

Point 1. Rejection is simple, nothing to comment there.

Point 2. Cheating is more and more widely spread. As you cannot get this experience, you try to fake it until you make it. Then you get the job and mostly will be fired for incompetence (but sometimes people stay and learn in the real "battle").

Point 3. Memorizing the questions is the most popular one. That's why we have so many books written for such situations and they sell well (business idea for you, if you're still hesitating to do it). One book[^2] already recommended, easy to read and follow. I also tend to use such an approach — it's not like cheating, but in my experience, such knowledge is not really useful. You're memorizing but are unable to use it in the real world; this will be erased in your memory as useless data that takes space. So for me it's like you're trying to cheat but are afraid of consequences — being banned or rejected with a red label. Knowledge you don't use, you lose. If the job won't reinforce what the interview tested, you're just selecting for good short-term memory.

Point 4. Private clubs (most of the time paid by some $ value) where real people provide all the recent information about interviews. There are Telegram channels which I will not advertise here, but they're not hard to find. This is mostly what mentors do (they actually share some knowledge from some real high-load project from a big tech company), or they share details about the interview process using their private information of the company. So this mentor can help you with actually getting the job. But about such clubs — it's a membership of people doing everything: cheating, memorizing, and trying to get inside any big company or even get as many big companies as possible. You can read about such stories on Twitter freely. One example from news[^4], and this is one more detailed[^5].

Point 5. Yeah, this is what desperation looks like. Sisyphus' boulder[^6].

Point 6. I would recommend using this one as much as possible if you have networking and previous colleagues to help you — nothing better has been invented.

## In the Real World

In the real world, you would never design Instagram. You would barely design anything — most of the time you will be getting to work with previous solutions and legacy. Some caching that is 10 years old and nobody knows how it works and why. The author was fired 10 years ago, and now you have to modify some input parameters that will affect 1000 of 2000 clients of yours, and be careful — try not to break anything.
Alas, nobody wrote tests for that case, nobody ever wanted to write tests. And this is your responsibility to take over it, that's why you get a salary.

The thing is, what you were doing for company X may not be relevant for company Y, but that's normal. There's always company FOO that is looking for your set of skills and you will be a perfect match for it. The main problem is why company Y tries to hire "theorycrafters" instead of hands-on experienced people.

## An Interview Is Not an Exam

Having been on both sides of system design interviews — passing some, failing others — the pattern became clear. Success depends less on your engineering ability and more on whether your thinking style matches the interviewer's.

How would the dialog during an interview normally look?
"We are building some high-efficiency system, we know that our RDBMS will be pretty hot. Do you have experience in optimizing queries from a 20-year-old app written in COBOL?"

The answer is yes/no.

And then you can ask more detailed questions — how do we achieve the expected goal? What do we need, do you have some ideas? And during this dialogue between the engineering guy and you (the one who hires), you can understand whether they are a good match or not. If they can solve your problem, why would you need to interview them like "Do you know how to build Instagram?" This even sounds like something very weird. The normal answer without hesitation should be: "No, I don't. I'm not a founder of Instagram."

Here's an example from a small company and how they evolved their hiring process:

- Discussed the requirements, the key points about the product, key technologies
- Asked whether you have experience with that and what you have solved
- Asked what you like and don't like
- Explained their process
- Introduced your buddy who will handle your onboarding
- If during the interview everything is fine, they get a guy aboard for a trial period. If he's decent and not a liar about his experience, he will contribute to the product and strengthen the development team; otherwise, fired

Hiring and then firing the incompetent during the trial period is cheaper than doing a 5-step interview for them, then waiting for the perfect one to come (real production experience, knowledge of all algorithms and system design). Sounds like a unicorn, doesn't it?

## How to Cure This

Hiring should be based on current product needs. You see high loads and that your latency for request/response is growing? Find a guy who is an expert at optimization and let him get the work done.

If you're doing fast prototyping for your clients because you are running an outsource business, find a guy who is good at prototyping.
Do not expect him to know all System Design Patterns — otherwise reject him.

If you don't know why you are hiring a new developer, or the tasks that are waiting for them are unclear, you may not need to hire at all — just improve the current processes. Hiring is always painful and should be treated like an investment. A newly joined guy will be mostly barely useful for the first 3 months, and besides that will also take time from your current employees to transfer all the knowledge about what and why is done in certain ways.

So my take is the following:
If you know **WHY** you need to hire.
You know the team leader who is **READY** to get a new guy and onboard them.
Let them interview based on **THEIR** needs (they are aware of context, tasks, stack, and everything else). They already know who they need, and a simple interview will do — they can spot during the interview whether the guy is a match or not. Otherwise, a trial period and real management will show if they are decent.
Without burning your time and resources on FAANG interview processes, first ask critically — **WHY** do we need them?

You have a backlog, you have tasks to be done, find appropriate candidate to handle them. If they require architecting (or mostly nowadays re-architecting after someone), prepare a design interview to contain parts you expect to hear from the candidate. If your tasks are maintaining legacy and fast-prototyping something in production, hire an appropriate candidate. Waiting and burning resources to find a unicorn is like waiting for The Second Coming.

## Conclusion

Match interview complexity to job complexity.
Stop interviewing for the company you wish you were. Interview for the problems you actually have.

## Footnotes
[^1]: https://en.wikipedia.org/wiki/Dijkstra's_algorithm
[^2]: https://www.amazon.com/dp/B08CMF2CQF/ref=tsm_1_fb_lk
[^3]: https://en.wikipedia.org/wiki/Quod_licet_Iovi,_non_licet_bovi
[^4]: https://tech.yahoo.com/business/articles/over-employed-engineer-caught-secretly-115532357.html
[^5]: https://cybernews.com/news/soham-parekh-silicon-valley-scandal-multiple-jobs/
[^6]: https://en.wikipedia.org/wiki/Sisyphus
