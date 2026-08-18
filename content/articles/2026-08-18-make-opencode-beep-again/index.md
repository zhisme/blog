---
title: 'Make OpenCode Beep Again'
slug: 'make-opencode-beep-again'
categories: ["Engineering"]
tags: ["opencode", "tools", "guides"]
intro: This guide teaches you how to bring the cool feature of opencode beeping when it needs you.
description: How to make OpenCode alert you with a sound and OS notification when it needs input, a permission approval, or hits a question — via the separate ~/.config/opencode/tui.json attention block.
keywords: ["opencode beep", "opencode attention", "opencode notification", "opencode tui.json", "opencode sound", "opencode unfocused alert"]
---

Recently, I started using opencode.
And one critical feature for me was missing: beeping when it needs my attention.
Reading docs was not enough for me.
So consider this guide an easy path to set up the missing feature.

## The problem

OpenCode silently waits when it needs input, a permission approval, or hits a
question. If the terminal is unfocused — another window, another monitor — you
won't notice. The model is frozen, and you're off doing something else, assuming
it's still working.

## The fix

For me, the config file was missing, and there's no `/config` or `/init` command to help set it up.
The thing is that you need to create it by hand and know the exact place and filename in order for it to work.

OpenCode reads a **separate** config file, `~/.config/opencode/tui.json`, with
its own schema (`https://opencode.ai/tui.json`) — not your main `opencode.jsonc`.
The `attention` block controls the alert:

```json
// tui.json
{
  "$schema": "https://opencode.ai/tui.json",
  "attention": {
    "enabled": true,
    "notifications": true,
    "sound": true,
    "volume": 0.8
  }
}
```

So how to fix:

1. Create config file `touch ~/.config/opencode/tui.json`
2. Put the config contents from the above `tui.json` into the file.
3. Voila!

## Worth noting

1. **OpenCode only alerts when its window is unfocused** — by design, so it
   doesn't beep while you're looking at it. Test by switching away from the
   terminal, then triggering a permission prompt or a question. If you're staring
   at it, you won't hear a thing.

2. **Restart OpenCode after creating the file** — it's read at startup, not
   hot-reloaded. No config reload, no `:restart` trick; kill and relaunch.
