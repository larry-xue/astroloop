# Astroloop

**English** · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

An Astro landing page template for **AI agent products** — built around the questions autonomy actually raises: what it can touch, what it has to ask about first, and what a run costs.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![The Astroloop home page](./.github/assets/hero.png)

## Features

- **The agent loop** — goal, plan, act, tool call, observe, and the gate that waits for a person. Pure SVG.
- **A per-tool permission matrix** — reads, writes, approval and audit as four separate columns, driven from YAML.
- **13 pages** — home, pricing, blog, contact, about, legal, 404
- **Astro 7** and **Tailwind CSS 4**
- Native CSS view transitions, including shared elements from the blog index into the post — no router
- Fonts through Astro's built-in pipeline: self-hosted, preloaded, with fallback metrics so the swap does not shift the layout
- Light and dark, chosen before first paint
- Content collections for the blog, RSS, sitemap, OG image
- Usage-based pricing page, because agent products do not sell seats
- Accessible: skip link, real table semantics, text behind every icon
- **Lighthouse 100** across all four categories on the deployed demo

## Making it yours

1. `src/data/site.ts` — name, tagline, nav, contact, canonical URL
2. `src/content/tools/tools.yaml` — the permission matrix
3. `src/styles/global.css` — colours live in the `@theme` block
4. `src/content/blog/` — markdown posts

## Commands

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Astroloop Pro

This template stays MIT and stays maintained. Pro is the same design carried
across a whole site instead of a landing page.

**[Live demo](https://astroloop-pro.larryxue.dev)** — the sections below are all on it.

### Six AI skills, in the repo

The reason to buy rather than fork. Shipped in `.agents/skills/` **and**
`.claude/skills/`, with an `AGENTS.md` and a `DESIGN.md` that every skill reads —
so a page edited with Claude Code, Cursor, Codex, Copilot or Gemini CLI comes
back looking like the rest of the site.

| Skill | What it does |
|---|---|
| `astroloop-brief` | Works out what your site has to prove. One question at a time. |
| `astroloop-design` | Finds and fixes drift — tokens, contrast, motion, layout. |
| `astroloop-copy` | Cuts copy to length. Kills claims with no condition on them. |
| `astroloop-seo` | Page SEO, programmatic pages, and GEO for answer engines. |
| `astroloop-blog` | Posts worth linking to, wired to the content collections. |
| `astroloop-study` | Reads how three comparable projects solved it, first. |

### And

- **29 pages, 29 components** — docs with a sidebar, evals, changelog,
  integrations, security, legal
- **An interactive tool-call timeline** — one run replayed step by step,
  including the step that failed and the call that was refused
- **A usage estimator** — runs per month against a plan, with the runs that do
  not bill shown as a deduction rather than hidden
- **Eight languages** with hreflang alternates and a switcher
- **Keystatic CMS** and **Pagefind search**
- GSAP and Lenis scroll motion, deferred until after paint

[**Buy — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · unlimited projects, yours and your clients'
Fourteen-day refund, no questions. support@larryxue.dev

## License

MIT
