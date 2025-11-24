---
title: "copy_with_context.nvim v3 Released"
slug: "copy-with-context-v3-released"
categories: ["Engineering"]
tags: ["open-source", "tools", "neovim", "lua"]
intro: "Version 3 of copy_with_context plugin is now available! This release focuses on improving usability and adding new features for context management. Let me explain what's new, what's changed and how it can help you be more productive with AI-assisted coding."
description: "Announcing copy_with_context v3 with new features, improved usability, and enhanced context handling capabilities."
keywords: ["copy_with_context", "release", "neovim", "open-source", "lua", "productivity"]
draft: false
---

Previous post on original release is available at [copy_with_context.nvim plugin released](/articles/copy-with-context-nvim).

## What's New in v3

### Automatic Repository URL Generation

The headline feature: when you copy code, the plugin now automatically includes a direct permalink to the code in your repository. No manual URL construction, no hunting for the right commit SHA—it just works.

```lua
-- When you copy this code, you get:
function authenticate(user)
  validate_credentials(user)
end

-- Output automatically includes:
-- app/controllers/auth_controller.rb:45-47
-- https://github.com/username/repo/blob/abc1234/app/controllers/auth_controller.rb#L45-L47
```

**What it does:**
- Detects your git repository and remote URL automatically
- Generates stable permalinks using commit SHA (not branch names that change)
- Supports GitHub, GitLab, and Bitbucket—including self-hosted/Enterprise versions
- Handles HTTPS, SSH, and git:// protocol URLs
- Gracefully degrades when you're not in a git repo

**Configuration:**
```lua
  require('copy_with_context').setup({
    mappings = {
      ... # omitted for brevity
      remote = '<leader>cr',
    },
    formats = {
      remote = '# {remote_url}',
    },
  })
```

### Platform Support

Each platform gets the correct URL format:

- **GitHub**: `/blob/{sha}/{path}#L{start}[-L{end}]`
- **GitLab**: `/-/blob/{sha}/{path}#L{start}[-{end}]`
- **Bitbucket**: `/src/{sha}/{path}#lines-{start}[:{end}]`

The plugin lazy-loads provider detection, so there's no performance hit until you actually copy code.

If you need support for a different git hosting provider, I encourage you to open a PR on the [repo](https://github.com/zhisme/copy_with_context.nvim) and contribute a new URL format. Any help appreciated!

### Edge Case Handling

Works correctly with:
- Detached HEAD states
- Git submodules
- Multiple remotes (uses `origin` by default)
- Windows path conversions
- Untracked files (skips URL generation gracefully)

## Why This Matters: AI-Assisted Development

If you're using AI coding assistants on the Web (ChatGPT, Claude, Gemini, etc.), this feature significantly improves the quality of responses you get. The idea that you can copypaste code from editor with already defined context, so it can understand how the files rely to each other, what folders they are in. Sometimes filename does not match module named defined and vica-versa, the idea is to improve the clarity for the Web AI assistants to not loss extra context.

### The Problem

When you paste code without context, AI has to guess:
- Which file is this from?
- Where in the codebase does this live?
- What's the surrounding architecture?
- Is this the complete function or a snippet?

This leads to generic, often unhelpful answers, or even hallucinations (like inventing file/module/path names)

### The Solution

Including file paths, line numbers, and repository URLs gives AI precise context:

**❌ Without context:**
```ruby
Here's my login function:
def authenticate(user)
  validate_credentials(user)
end

How do I add OAuth?
```

**✅ With context (using copy_with_context.nvim):**
```ruby
Here's my login function:
def authenticate(user)
  validate_credentials(user)
end
# app/controllers/auth_controller.rb:45-47
# https://github.com/user/repo/blob/abc123/app/controllers/auth_controller.rb#L45-L47

How do I add OAuth?
```

**Result:** The second prompt tells AI exactly where this code lives in your project structure. Instead of generic OAuth advice, you get integration suggestions that fit your actual architecture—in the right file, at the right location.

### Concrete Benefits

- **Precise context**: AI knows which line you mean, not "somewhere in that function"
- **Better suggestions**: Paths like `src/auth/login.ts:42` reveal project structure
- **Faster workflow**: No back-and-forth clarifying which file you're talking about
- **Accurate responses**: Solutions that fit your codebase, not Stack Overflow copypasta

## Installation

See [README](https://github.com/zhisme/copy_with_context.nvim) for details how to configure with different package managers. Here's only popular [`lazy.nvim`](https://github.com/folke/lazy.nvim) which I use myself added as an example.

```lua
{
    'zhisme/copy_with_context.nvim',
    config = function()
      require('copy_with_context').setup({
        -- Customize mappings
        mappings = {
          relative = '<leader>cy',
          absolute = '<leader>cY',
          remote = '<leader>cr',
        },
        formats = {
          default = '# {filepath}:{line}',  -- Used by relative and absolute mappings
          remote = '# {remote_url}',
        },
        -- whether to trim lines or not
        trim_lines = false,
      })
    end
  },
```

## Migration from v2

1. Update plugin to latest version
2. Edit your config with new mappings and formats. Readme describes how to do that. Old `context_format` config is no longer supported.

Everything else works the same way.

## Conclusion

I encourage you to try the plugin and check github repo to explore what's inside. I developed it for personal use, cause I haven't found anything that would match my needs. Zero dependency plugin that does only 1 thing, adds filepaths besides source code that is copied, that eases collaboration with others. Now when remote url is available, this is just 1 click for other person to do, so he can check directly on the web and explore any extra lines/files answering your question or helping you to understand where is your problem lies.

---

Check out the [GitHub repository](https://github.com/zhisme/copy_with_context.nvim) for full documentation and to report issues.
