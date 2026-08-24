# Troubleshooting

Every error this template can produce, and what it actually means.

## `Cannot read properties of undefined (reading 'collection')`

A blog post references an author that does not exist. Check the `author` field
against the filenames in `src/content/authors/`.

## The build passes in `dev` and fails on deploy

Content collections are validated at **build** time, not in `dev`. Run
`npm run build` locally before pushing — this catches missing authors, bad
`pubDate` formats and empty post bodies, all of which run fine in `dev`.

## A post renders as a blank page

Empty body. Rendering fails at `entry.body`. Put one sentence in it.

## `@apply` fails inside a component `<style>` block

Tailwind 4 needs the stylesheet referenced first:

```astro
<style>
  @reference "../styles/global.css";
  .thing { @apply text-ink-600; }
</style>
```

## A `{` in a `<style>` block breaks every rule after the first

Inside an Astro expression, `{` starts a JSX expression. Wrapping the CSS in a
template literal leaks the backticks into the stylesheet. Inject it instead:

```astro
<style is:inline set:html={css}></style>
```

## A vertical scrollbar flickers during a scroll animation

A transform inside a container with `overflow-x: auto`. CSS computes
`overflow-y: visible` to `auto` when the other axis is not visible. Animate
opacity only in those containers.

## Cumulative Layout Shift went up after adding motion

The initial hidden state is being set from JS. Move it into CSS behind
`.has-motion`, applied before first paint.

## Largest Contentful Paint went up after adding motion

`data-rise` is on something above the fold. An element at `opacity: 0` cannot be
the LCP element, so the browser waits for the next candidate.

## Lighthouse is worse locally than on the deployed site

It usually is. A local preview server does not gzip. Measure the deployed URL,
with a cold cache, more than once.

## Cloudflare Pages builds every push but the site never changes

Production branch mismatch. **Settings → Builds → Production branch** is not the
branch you push, so every build lands as a preview. Nothing errors.

## The demo badge appears on my own site

`PUBLIC_DEMO=true` is set in your host's environment. Unset it, or delete
`src/components/DemoBanner.astro` — it is inert without the variable and safe to
remove entirely.

## Node version errors that point at a dependency

Astro 7 needs Node 20.3+ or 22+. The failure surfaces inside a dependency rather
than as a version check. Set `NODE_VERSION` in your host's build environment.
