---
title: "Multiple Git Configs Per Directory"
slug: "multiple-git-configs-per-directory"
categories: ["Engineering"]
tags: ["git", "guides", "tools"]
intro: "How to override your default git config per directory so each project group gets its own identity"
description: "A guide on using git conditional includes to automatically apply different git user configs per directory. No more committing with the wrong email."
keywords: ["git config", "gitconfig per directory", "git includeIf", "git conditional includes", "multiple git users", "git config override", "gitconfig per project"]
---

## The Problem

You have a personal GitHub and a work GitLab (or multiple work accounts). Your global `~/.gitconfig` has your personal email. You clone a work repo, make a commit, push — and now your personal email is in the company git history. haha-haha classic..

You could run `git config user.email` in every new repo you clone. But you'll forget. You always forget. But this is a boring routine, why do this?

## The Solution

Git has **conditional includes**[^1] — a built-in way to load different configs based on the repo's location on your filesystem.

### Step 1: Create a directory-specific gitconfig

Let's say all your work repos live under `~/dev/projects/mycompany/`. Create a gitconfig file there:

```bash
# ~/dev/projects/mycompany/.gitconfig

[user]
  name = yourworkname
  email = you@company.com
```

Put whatever overrides you need. This will **merge on top of** your global config — only the keys you specify here get replaced, everything else stays.

### Step 2: Add a conditional include to your global gitconfig

Open `~/.gitconfig` and add:

```gitconfig
[includeIf "gitdir:~/dev/projects/mycompany/"]
  path = ~/dev/projects/mycompany/.gitconfig
```

That's it. Every repo under `~/dev/projects/mycompany/` (including nested subdirectories) will now use the work identity.

### Step 3: Verify

```bash
cd ~/dev/projects/mycompany/some-repo
git config user.email
# → zhisme@mycompany.com

cd ~/personal-stuff/some-repo
git config user.email
# → evdev34@gmail.com
```

## How It Works

The `includeIf` directive with `gitdir:` checks whether the repo's `.git` directory falls under the specified path. If it does, the referenced config file gets included and its values override the global ones.

A few things to note:

- **The trailing slash matters.** `gitdir:~/dev/projects/mycompany/` matches all repos inside that directory. Without the slash, it would only match a repo at that exact path.
- **You can have multiple `includeIf` blocks.** One for work, one for open source, one for your vibe-coder entity (so you won't be embarrassed).
- **It's a merge, not a replace.** Your global settings (aliases, diff tools, colors) still apply. Only the keys in the included file get overridden.

## Why Not Per-Repo Config?

Running `git config user.email` inside each repo works, but it's manual and fragile. You'll inevitably clone a new repo and push a commit with the wrong email before you remember. Then you will have to rebase/amend/squash your commits or they even can go into master, so it is an unnecessary headache. The directory-based approach is set-and-forget — you organize your repos by org/client/purpose (which you probably already do), and git handles the rest.

## Footnotes

[^1]: https://git-scm.com/docs/git-config#_conditional_includes
