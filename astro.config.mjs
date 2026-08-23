// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { site } from './src/data/site.ts'

export default defineConfig({
  site: site.url,
  integrations: [
    sitemap(),
    // Icons are inlined as SVG at build time — no runtime, no requests.
    icon({ include: { lucide: ['*'] } }),
  ],
  vite: { plugins: [tailwindcss()] },
})
