---
title: "Filter Interviews: The Ones You Already Met"
slug: "filter-interviews-the-ones-you-already-met"
categories: ["Industry"]
tags: ["interviews", "hiring", "software-engineering", "career"]
intro: "Part 2: Now from the hiring desk. Why companies build these gauntlets, and why they're okay with losing you."
description: "The company perspective on technical interviews: how organizations filter thousands of candidates, why they accept false-positives, and the economics of hiring at scale."
keywords: ["technical interviews", "hiring process", "candidate filtering", "recruitment", "false positive hiring"]
images: ["og.jpg"]
draft: true
---

## TL;DR

- Filter interviews exist because scale is real - you can't 1:1 interview 100+ people
- But most companies copy FAANG filtering for non-FAANG problems
- False-positives (rejecting good candidates) hurt small companies more than big ones
- The system finds prepared candidates, not the best candidates
- [something about CV advice?]

## Previously, on "Theory vs Practice"

[Link to [part 1](/articles/theory-vs-practice-why-technical-interviews-go-wrong/): we talked about how interviews feel from the candidate side - the absurdity, the disconnect from reality, the Instagram-building theater. The frustrated candidate leaving thinking "I never built Instagram, I must be bad."]

-- CHANGED: Now let's flip the desk. You're not the candidate anymore. You're the one with 100 CVs on your desk and a position to fill. How do you even begin?

## The "Already Met" Problem

-- ADDED NEW POINT: Here's what candidates don't understand when they fail these interviews and leave frustrated:

**Nobody expects you to build Instagram.**

They expect you to show you MEMORIZED how Instagram COULD BE built. It's not a practical test - it's a theory exam. The same theory exam you already encountered at company X, Y, and Z. The same one that rejected you before anyone looked at what you actually did in your career.

You've already met this interview. It didn't care about you then, it doesn't care about you now. It's a filter, not an evaluation.

## The Scale Problem (It's Real)

-- ADDED NEW POINT: Let's do the math for a non-FAANG company.

Your company: 30 people.
Open position: 1 senior developer.
Applications received: 100+ (conservative for a decent posting).

A real technical interview takes 1-1.5 hours. Let's say 1 hour average.

100 candidates × 1 hour = **100 hours of interviewing**.

That's **2.5 weeks of full-time work** for one engineer. An engineer who could be shipping features, fixing bugs, doing actual work.

And that's just the interview time. Add:
- CV review time
- Scheduling coordination
- Post-interview discussion
- Rejection emails

You're looking at a full month of engineering capacity burned on ONE hire.

-- ADDED NEW POINT: Now you understand why filtering exists. It's not laziness (well, sometimes it is). It's survival math.

## The Broken Funnel

Here's how the current system works:

### Stage 1: HR Keyword Bingo

HR person (who doesn't code) scans CVs for keywords: "React", "5+ years", "AWS", "Agile".

1000 CVs → 100 "matches" in a few hours.

-- ADDED NEW POINT: The problem? Nobody technical has looked at these CVs yet. A candidate with 10 years of solving hard problems gets filtered out because they wrote "JavaScript" instead of "React". A junior who listed every buzzword they heard gets through.

### Stage 2: Filter Interviews (The Theory Exam)

-- CHANGED: Leetcode, system design - the "you already met" stage.

The candidate who failed this exact interview 3 times before? They prepared. They read the book. They memorized the Instagram architecture diagram. They pass.

The candidate with 15 years of production experience who never needed to "design Twitter in 45 minutes"? Rejected.

100 → 10-15 candidates.

### Stage 3: Real Technical Interview

Finally, someone technical talks to the candidate about actual work.

-- ADDED NEW POINT: But wait. Remember our 30-person company? Those 10-15 candidates still need ~15 hours of senior engineer time. And by now, the best candidates from Stage 1 (the ones filtered by HR keywords) are already working somewhere else.

### Stage 4: Culture Fit

The subjective final gate. Sometimes legitimate ("can this person collaborate?"), sometimes just "do I want to have beer with this person?"

## The False-Positive Math

-- ADDED NEW POINT: Companies know they reject good candidates. They accept it as cost of doing business.

**For FAANG (10,000+ employees, 1000+ applications per role):**
- Reject 10% of good candidates? That's fine. Still have 900 to choose from.
- False-positive cost: minimal. There's always another candidate.
- Priority: Avoid false-negatives (hiring bad people is expensive to fix).

**For small company (30 employees, 100 applications):**
- Reject 10% of good candidates? You might have just rejected THE ONE person who could solve your actual problems.
- False-positive cost: massive. Your candidate pool is tiny.
- Every wrongly rejected candidate hurts more.

-- ADDED NEW POINT: The irony: small companies copy FAANG filtering processes designed for FAANG-scale candidate pools. They apply enterprise solutions to startup problems.

A 30-person company rejecting candidates like Google can afford to? You're not Google. You don't have Google's candidate volume. Your false-positive tolerance should be much, much lower.

## The CV Problem (And How to Fix It)

-- ADDED NEW POINT: Since HR does the first filter and doesn't understand technical work, you need TWO versions of your CV:

**Version 1: The Seller (1 page max)**
- For HR eyes
- Keywords they're looking for
- Company names they recognize
- Clean, scannable, buzzword-optimized
- Gets you past the keyword filter

**Version 2: The Technical Document (2-3 pages)**
- For engineering eyes
- What you actually built
- Problems you actually solved
- Technologies you actually used (not just "worked with")
- Bring this to the real interview
- What is interested for you, how do you see yourself

-- ADDED NEW POINT: The first CV gets you in the door. The second CV proves you belong there.

## FAANG Problems for FAANG Companies

-- CHANGED: Let's be clear about when complex filtering makes sense:

**FAANG-style filtering is justified when:**
- You have 1000+ applications per role (real scale)
- False-positive cost is low (huge candidate pool)
- The job ACTUALLY requires system design skills
- You can afford to burn senior engineer time on interviews

**FAANG-style filtering is cargo cult when:**
- You have 50-200 applications (not real scale)
- Your team is small (false-positives hurt)
- The job is 90% CRUD and maintenance
- You're copying the process because "that's how Google does it"

## What Companies Should Actually Do

-- CHANGED: Acknowledge the constraint is real, but the solution doesn't have to be stupid.

**For the scale problem:**
- Have TECHNICAL people do initial CV screening, not HR
- 5 minutes per CV × 100 CVs = 8 hours. That's one day, not one month.
- A developer can spot "this person actually did things" vs "this person listed buzzwords" in minutes.

**For the filtering problem:**
- Filter for YOUR problems, not Instagram's problems
- Doing CRUD apps? Test CRUD skills. Test debugging. Test reading existing code.
- Don't test "design Twitter" for a job maintaining a 10-year-old monolith.

**For the time problem:**
- Short screening calls (15-20 min) before full interviews
- Async code review tasks (give them YOUR codebase problem)
- Trial days/weeks (expensive but highest signal)

## The Self-Perpetuating System

-- ADDED NEW POINT: Here's the trap:

1. Companies use filter interviews that test memorization
2. Candidates who pass are the ones who memorized
3. Those candidates get hired and become interviewers
4. They create more filter interviews that test memorization
5. Repeat

The system selects for people who are good at the system. Not people who are good at the job.

You keep meeting the same type of candidate because you designed a filter that only lets that type through.

## Conclusion

The scale problem is real. You can't interview 100+ people individually. Filtering is necessary.

But copying FAANG filters for non-FAANG problems? That's just lazy. That's choosing "nobody got fired for interviewing like Google" over actually finding the right person.

Small companies: your false-positive tolerance is low. Every good candidate you wrongly reject hurts more. Design your filter for YOUR scale, YOUR problems, YOUR actual job requirements.

The candidates you keep meeting? They're the ones your filter was designed to find. If you want different results, build a different filter.

---

*This is Part 2 of a series on technical interviews. [Part 1](/articles/theory-vs-practice-why-technical-interviews-go-wrong/) covered the candidate perspective.*

