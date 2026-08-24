# Content

Everything is an Astro content collection, so mistakes are caught at build time
rather than rendering as an empty page.

## Blog posts

```
src/content/blog/<slug>.md      (or .mdx)
```

```yaml
---
title: Under 60 characters, no colon-subtitle construction
description: Under 155 characters. This is the meta description and the card text.
pubDate: 2026-08-24
author: mara-volkov          # must exist in src/content/authors/
tags: [agents, pricing]      # two to four, reuse existing ones
draft: false
---
```

Rules the build enforces:

- **The author must already exist.** `author` is a `reference()` to
  `src/content/authors/`. A name that is not there fails the build with an error
  that points at the collection, not at your post.
- **The body cannot be empty.** An empty body crashes rendering at `entry.body`.
  One sentence is enough.
- **`pubDate` must parse as a date.** `2026-08-24`, not `24/08/2026`.

Use `.mdx` instead of `.md` when you want a component inside the post.

## Authors

```
src/content/authors/<id>.json
```

```json
{
  "name": "Mara Volkov",
  "role": "Co-founder",
  "bio": "One or two sentences.",
  "initials": "MV",
  "hue": 168
}
```

There is no photograph field, on purpose. Avatars are initials on a coloured
disc generated from `hue`. Stock photographs used as customer faces are the
fastest way to lose a technical reader, and randomly-generated portraits are
photographs of real people.

## The permission matrix

```
src/content/tools/tools.yaml
```

```yaml
- name: github
  order: 1
  reads: issues, pull requests, file contents
  writes: branches, pull requests
  approval: merge, force-push
  audited: true
```

- `order` controls the row order. Gaps are fine.
- Omit a field and the cell renders `—` plus screen-reader text.
- Leave real blanks. See [Getting started](./getting-started.md#2-srccontenttoolstoolsyaml).

## RSS, sitemap, OG

Generated. `src/pages/rss.xml.ts` reads the blog collection, the sitemap comes
from the Astro integration, and the OG image is built from `src/data/site.ts`.
None of them need editing — but all three read `site.url`, so set that first.
