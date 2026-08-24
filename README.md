# Astroloop

**English** · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

An Astro landing page template for **AI agent products** — built around the questions autonomy actually raises: what it can touch, what it has to ask about first, and what a run costs.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 The agent loop

A diagram of the actual loop — goal, plan, act, tool call, observe — with the arrow that goes **back**, and the gate that **stops and waits for a person** before the result. Pure SVG, no dependencies.

## 🔐 The permission matrix

Per tool: what it reads, what it writes, **what it has to ask about first**, and whether it is audited. Driven from a YAML file. `writes` and `approval` stay separate columns on purpose — buyers are not afraid an agent can write, they are afraid it can write *without asking*. And the empty cells are the point: a column of green ticks reads as marketing, blanks read as a real audit.

## Features

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

## License

MIT
