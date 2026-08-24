# Deploying

The build is static — `npm run build` produces `./dist` and any static host will
serve it. The three buttons in the README are shortcuts, not requirements.

**Before you deploy anywhere**, set `url` in `src/data/site.ts` to your real
domain. The sitemap, the canonical tags, the OG image URLs and `robots.txt` are
all built from it, and a wrong value is invisible until search results show the
wrong host.

## Cloudflare

The button uses **Workers**, not Pages — Cloudflare's deploy buttons only support
Workers. That is what `wrangler.jsonc` is for:

```jsonc
{
  "name": "astroloop",
  "compatibility_date": "2026-08-24",
  "assets": { "directory": "./dist" }
}
```

For a purely static site the Worker script itself is optional; the assets binding
is the whole configuration.

To deploy by hand instead:

```bash
npx wrangler deploy                                  # Workers
npx wrangler pages deploy dist --project-name=NAME   # Pages
```

If you use Pages with a git connection, check **Settings → Builds → Production
branch** matches the branch you push. A mismatch does not fail: it builds every
push as a *preview* and leaves production serving the last thing you uploaded by
hand, which looks exactly like nothing happening.

## Netlify

`netlify.toml` pins the build:

```toml
[build]
  command = "npm run build"
  publish = "dist"
[build.environment]
  NODE_VERSION = "22"
```

Netlify would detect Astro on its own, but detection reads `package.json`, so it
breaks quietly if you rename a script.

## Vercel

Nothing to configure. Astro is a first-class framework preset — Vercel finds the
build command and the output directory itself. There is deliberately no
`vercel.json` in this template; adding one tends to fight the preset.

## Anywhere else

```bash
npm run build
# then serve ./dist
```

GitHub Pages, S3 + CloudFront, Caddy, nginx — all fine. Two things to get right:

- **Trailing slashes.** The build emits `about/index.html`. A host that does not
  serve `index.html` for a directory will 404 on every page but the home page.
- **404s.** `dist/404.html` exists; point your host's not-found handler at it.

## Environment variables

| Variable | Effect |
|---|---|
| `PUBLIC_DEMO` | `true` renders the floating demo badge. Leave it unset. |

Anything prefixed `PUBLIC_` is **inlined into the client bundle at build time**.
Never put a secret behind that prefix.

## After the first deploy

1. Open the deployed site, not localhost, and run Lighthouse. Local numbers are
   measured on an uncompressed dev server and are not comparable.
2. Check `/sitemap-index.xml` and `/robots.txt` resolve on your domain.
3. Submit the sitemap to Google Search Console and Bing Webmaster Tools.
