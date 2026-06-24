# Hugo Blog - @zhisme :: signal over noise

Personal blog about software engineering and developer philosophy.
Live at: https://zhisme.com/

## Tech Stack

- **Static Site Generator**: Hugo v0.145.0
- **Theme**: Custom theme `zhisme-blog` (in `themes/zhisme-blog/`)
- **Styling**: SCSS (compiled from `themes/zhisme-blog/assets/sass/main.scss`)
- **Frontend**: Vanilla JavaScript (minimal, in `assets/js/`)
- **Deployment**: GitHub Actions → Docker image → Helm/Kubernetes (GitOps)
- **Comments**: Disqus integration

## Project Structure

```
hugo_blog/
├── content/articles/           # Blog posts (main content)
│   └── YYYY-MM-DD-slug/       # Article folders with index.md
├── layouts/                    # Custom layout overrides
│   ├── partials/              # Custom partial templates
│   ├── index.html             # Homepage override
│   └── 404.html               # Custom 404 page
├── themes/zhisme-blog/        # Custom theme
│   ├── layouts/               # Theme templates (_default, partials, shortcodes)
│   └── assets/sass/           # SCSS source partials (main.scss = entry)
├── assets/                     # Site-level assets
│   ├── css/                   # cv.css only (standalone CV page styles)
│   └── js/                    # JavaScript (app.min.js, main.js)
├── static/                     # Static files (served as-is)
├── archetypes/                # Content templates
└── hugo.toml                  # Main configuration
```

## Content Guidelines

### Article Frontmatter Structure
All articles in `content/articles/` use this frontmatter:
```yaml
---
title: "Article Title"
slug: "url-friendly-slug"
categories: ["Engineering"]  # Common: Engineering, Philosophy
tags: ["tag1", "tag2"]       # Specific tech/topics
intro: "Brief introduction for article cards"
description: "SEO meta description"
keywords: ["keyword1", "keyword2"]  # For SEO
---
```

### Article Organization
- Each article lives in its own folder: `content/articles/YYYY-MM-DD-slug/`
- Main content in `index.md`
- Images/assets co-located in the same folder
- Date can be inferred from filename (configured in `frontmatter.date`)

### Topics & Categories
- Primary focus: software engineering, developer tools, pragmatic engineering
- Common categories: Engineering, Philosophy, Tools
- Common tags: neovim, open-source, ruby, javascript, testing, productivity

## Configuration

### Hugo Config (`hugo.toml`)
- Base URL: https://zhisme.com/
- Permalinks: `/articles/:slug/` (no dates in URLs)
- Markup: Goldmark with unsafe HTML enabled, footnotes supported
- Syntax highlighting: custom classes (not inline styles)
- Taxonomies: categories and tags

### Theme (`themes/zhisme-blog`)
- Custom built, not from Hugo themes gallery
- License: MIT (see `themes/zhisme-blog/LICENSE`)
- Layouts include custom partials for headers, footers, metadata
- SCSS-based styling: source partials in `themes/zhisme-blog/assets/sass/`, entry `main.scss`. Hugo compiles via libsass (`toCSS`, transpiler `libsass`) in `partials/head/css.html` → `public/css/style.css` (expanded in dev, minified+fingerprinted in prod). No committed compiled CSS — never hand-edit output, edit the partials. Requires Hugo **extended**.

## Development Workflow

### Local Development
```bash
hugo server -D          # Run dev server with drafts
hugo server            # Run without drafts
```

### Building
```bash
hugo --minify          # Build for production (outputs to public/)
```

### Deployment
- Automatic via GitHub Actions on push to `master` (`.github/workflows/build-and-deploy.yml`)
- Pipeline (GitOps):
  1. **build-and-push**: builds Docker image via `Dockerfile` (runs `hugo --minify`, output baked into image), pushes to a container registry tagged with short commit SHA
  2. **update-infra**: bumps the image tag in a separate private GitOps infra repo (Helm values), which a Kubernetes cluster reconciles to roll out the new image
- PRs run `.github/workflows/ci.yml` (Hugo build smoke test, no deploy)
- Image serving: built `public/` is served by nginx in the k8s deployment
- Source images in `content/` are the truth; Hugo regenerates processed variants (webp/jpg) at build — `resources/_gen/` is a local cache, gitignored

## Important Conventions

1. **File Organization**: Keep articles self-contained in dated folders
2. **Asset Handling**: Styles are SCSS in `themes/zhisme-blog/assets/sass/`, compiled by Hugo at build (no committed CSS except `assets/css/cv.css`). JS in `assets/js/` keeps source + minified.
3. **Layout Overrides**: Root `layouts/` overrides `themes/zhisme-blog/layouts/`
4. **No Node Modules**: Pure Hugo, no npm/yarn build process needed
5. **Clean URLs**: Use slugs, not dates in article URLs
6. **SEO Focused**: Always include description, keywords, og:image considerations

## Common Tasks

### Creating a New Article
1. Create folder: `content/articles/YYYY-MM-DD-slug/`
2. Add `index.md` with proper frontmatter
3. Write boilerplate content using Markdown
4. Test locally with `hugo server -D`
5. Remove draft status when ready

### Modifying Theme
- Edit layouts in `themes/zhisme-blog/layouts/`
- Or override in root `layouts/` directory
- SCSS changes go in `themes/zhisme-blog/assets/sass/` partials; add new partials via `@import` in `main.scss`. Hugo recompiles automatically (`hugo server`). Output is `public/css/style.css` — do not edit it.

### Adding Custom Functionality
- Custom partials: `layouts/partials/` or `themes/zhisme-blog/layouts/partials/`
- Shortcodes: `themes/zhisme-blog/layouts/shortcodes/`
- JavaScript: `assets/js/main.js` (don't forget to update minified version)

## Notes for AI Assistant

- This is a personal blog, not a corporate site - tone should be direct and pragmatic
- Focus is on practical software engineering insights, not theory
- Code examples should be production-quality and well-commented
- When adding features, maintain the minimalist aesthetic
- All changes should be tested locally before committing
- Don't create unnecessary files - prefer editing existing structure
- **og.jpg requirements for Twitter/X cards**: Use **1200x630** (2:1 ratio) or **1024x1024** (1:1 ratio). Avoid 3:2 ratio (e.g., 1536x1024) as Twitter fails to render these. Format must be JPG, prefer cartoon style when generating
- Do not generate text content for the blog, only assist in reviewing, editing author texts, and improving site structure or functionality as requested
- When I ask to generate article, this means scaffolding only
