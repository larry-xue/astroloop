# Astroloop

An Astro landing page template for **AI agent products** — built around the
questions autonomy actually raises: what can it touch, what did it do, and
what does it cost.

**[Live demo](https://astroloop.larryxue.dev)** · MIT licensed · Astro 7 · Tailwind 4

Most SaaS templates answer "what does it do". An agent buyer is asking
something else: *what does it do when nobody is watching.* Astroloop ships the
two sections that answer that, and no other Astro template has them.

## 🔁 The agent loop

A diagram of the actual loop — goal, plan, act, tool call, observe — with the
arrow that goes **back**, and the gate that **stops and waits for a person**
before the result. Pure SVG, no dependencies, draws itself on scroll where the
browser supports it.

## 🔐 The permission matrix

Per tool: what it reads, what it writes, **what it has to ask about first**,
and whether it is audited. Driven from `src/content/tools/tools.yaml`, so you
edit YAML and never open the component.

Two columns that most templates would merge stay separate on purpose — buyers
are not afraid an agent can write, they are afraid it can write *without
asking*. And the empty cells are the point: a column of green ticks reads as
marketing, blanks read as a real permission list.

Underneath it sits the tool definition in code, so the table is verifiable
rather than decorative.

## ✨ Everything else

- **Astro 7** and **Tailwind CSS 4**
- **Zero client-side JavaScript** — no animation library, no smooth-scroll
  hijacking. Motion is CSS scroll-driven animation and degrades to static.
- Self-hosted variable fonts, preloaded. No third-party font origin.
- Light and dark, chosen before first paint so there is no flash
- Content collections for the blog, RSS, sitemap, canonical URLs, OG tags
- Usage-based pricing page, because agent products do not sell seats
- Accessible: skip link, real table semantics, `sr-only` text behind every icon

## 🧞 Commands

Requires Node 22.12 or later.

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |

## 🎨 Making it yours

1. `src/data/site.ts` — name, tagline, nav, contact, canonical URL
2. `src/content/tools/tools.yaml` — the permission matrix
3. `src/styles/global.css` — colours live in the `@theme` block. One accent
   colour, used in three places: the loop, the result, the ticks.
4. `src/content/blog/` — markdown posts

## 💼 Commercial use

MIT. Use it for client work, invoice for it, ship it. No strings, no gated
"pro" version of what is here.

If you are shipping paid projects on it, see
**[Commercial use & support](./COMMERCIAL.md)**.

## 📝 License

MIT
