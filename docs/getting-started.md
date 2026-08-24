# Getting started

## Requirements

Node **20.3+** or **22+**. Astro 7 refuses to build on older versions, and the
error it gives points at a dependency rather than at Node, which wastes an hour.

## Install

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build into `./dist` |
| `npm run preview` | Serves `./dist` exactly as it will be served in production |

Run `npm run build` before you commit. **Content collections only fail at build
time** — a broken frontmatter field or a missing author will run fine in `dev`
and then break the deploy.

## The five files you will actually edit

Everything else follows from these.

### 1. `src/data/site.ts`

Name, tagline, navigation, contact address, canonical URL. Change `url` before
you deploy — it is what the sitemap, the canonical tags and the OG images are
built from, and getting it wrong means submitting the wrong domain to Google.

```ts
export const site = {
  url: 'https://your-domain.com',
  name: 'Your product',
  titleSuffix: 'What it is, in six words',   // used only in <title>
  tagline: 'The headline on the home page.',
  description: '…',                          // meta description, under 155 chars
  email: 'support@your-domain.com',
}
```

`titleSuffix` and `tagline` are separate on purpose. The tagline is the hero
headline and tends to run long; a `<title>` over 60 characters gets truncated in
search results.

### 2. `src/content/tools/tools.yaml`

The permission matrix. One entry per tool:

```yaml
- name: github
  order: 1
  reads: issues, pull requests, file contents
  writes: branches, pull requests
  approval: merge, force-push
  audited: true
```

Leave a field out and the cell renders as `—` with screen-reader text saying
"no access". **Do not fill every cell.** A matrix with something in every box
reads as a brochure; the blanks are what make it read as an audit.

`writes` and `approval` are separate columns because "it can write" and "it can
write without asking" are different things, and the second one is what the buyer
is afraid of.

### 3. `src/styles/global.css`

The `@theme` block. Every colour in the template comes from here and nowhere
else. See [Customising](./customising.md).

### 4. `src/content/blog/`

Markdown and MDX posts. See [Content](./content.md).

### 5. `src/components/DemoBanner.astro`

A floating badge that only renders when `PUBLIC_DEMO=true`. If you cloned this
template it renders nothing — no markup, no CSS — and you can delete the file.

## What to delete

- `src/components/DemoBanner.astro` — see above
- `.github/FUNDING.yml` — points at the author's sponsors
- `netlify.toml` / `wrangler.jsonc` — only needed for the platform you use
- The demo blog posts in `src/content/blog/` and the authors in
  `src/content/authors/`
