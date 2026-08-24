// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
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
  /**
   * Astro's built-in font pipeline, stable since 6.0. It downloads the files at
   * build time and serves them from this origin, generates the @font-face rules
   * and the preload tags, and — the part that matters — emits fallback metrics
   * so the swap from the system font does not shift the layout.
   *
   * This replaces two @fontsource-variable dependencies and a pair of
   * hand-written preload links that had to reference hashed filenames.
   */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  ],

  vite: { plugins: [tailwindcss()] },
})
