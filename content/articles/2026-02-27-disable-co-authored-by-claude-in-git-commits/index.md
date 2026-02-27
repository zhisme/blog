---
title: "Disable Co-Authored-By Claude in Git Commits"
slug: "disable-co-authored-by-claude-in-git-commits"
categories: ["Engineering"]
tags: ["guides", "claude", "ai", "git"]
intro: "How to disable the Co-Authored-By Claude boilerplate in your git commits"
description: "A quick guide on disabling the automatic Co-Authored-By Claude attribution that gets added to your git commit messages when using Claude Code."
keywords: ["claude code", "co-authored-by", "claude attribution", "git commits claude", "disable claude commit message"]
---

## Solution

Open `~/.claude/settings.json` with your favorite editor and add this to your json config. This is taken from Claude docs[^1]

```json
{
  // ...
  "attribution": {
    "commit": "",
    "pr": ""
  }
}
```

## Why

This actually makes no sense and I agree with Rob Pike's take on that[^2]. It just adds non-readable boilerplate that does not add any value to the git commit. If it was committed by some guy I expect him to take responsibility of that commit, not some excuse like "that was written by Claude, sorry I didn't check". So it makes **no sense** at all, we are blind to that string anyway. Git commits should be atomic, simple and readable, not overwhelmed by nonsense. The trick above will help you with that.

Happy vibe-coding!

## Footnotes

[^1]: https://code.claude.com/docs/en/settings#attribution-settings
[^2]: https://groups.google.com/g/golang-dev/c/4Li4Ovd_ehE/m/UU87HnL5DgAJ
