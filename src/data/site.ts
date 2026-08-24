export const site = {
  // Change this to your own domain before you deploy.
  url: 'https://astroloop.larryxue.dev',
  name: 'Astroloop',
  // The fictional product this demo is for. Rename it and the rest follows.
  product: 'Astroloop',
  /* Used only in <title>. The tagline is the hero headline and runs to fifty
     characters, which pushed every home page title past the 60-character point
     where search results truncate. */
  titleSuffix: 'Astro template for AI agent products',
  tagline: 'The agent that closes your backlog while you sleep.',
  description:
    'An Astro landing page template for AI agent products: the agent loop, a per-tool permission matrix, and what a run actually costs.',
  email: 'azoux0311@gmail.com',
  repo: 'https://github.com/lx-themes/astroloop',
  nav: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Permissions', href: '/#permissions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  /** Secondary links, shown in the footer only. */
  footerNav: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/legal/privacy' },
    { label: 'Terms', href: '/legal/terms' },
  ],
}
