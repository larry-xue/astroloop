# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · **Français** · [Português](./README.pt.md) · [한국어](./README.ko.md)

Un template de landing Astro pour les **produits à base d'agents IA**, construit autour des questions que l'autonomie soulève vraiment : ce qu'il peut atteindre, ce pour quoi il doit demander, et ce que coûte une exécution.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![La page d'accueil d'Astroloop](./.github/assets/hero.png)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/lx-themes/astroloop) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lx-themes/astroloop) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lx-themes/astroloop)

## Fonctionnalités

- **La boucle de l'agent** — objectif, plan, action, appel d'outil, observation, et la porte qui attend une personne. SVG pur.
- **Matrice de permissions par outil** — lecture, écriture, approbation et audit en quatre colonnes distinctes, pilotées par un YAML.
- **13 pages** — accueil, tarifs, blog, contact, à propos, mentions légales, 404
- **Astro 7** et **Tailwind CSS 4**
- Transitions de vue CSS natives, avec éléments partagés de l'index du blog vers l'article, sans router
- Polices via le pipeline intégré d'Astro : auto-hébergées, préchargées, avec métriques de repli pour que la bascule ne décale pas la mise en page
- Clair et sombre, décidé avant le premier rendu
- Content collections pour le blog, RSS, sitemap, image OG
- Page de tarifs à l'usage, parce qu'un produit d'agents ne vend pas des sièges
- Accessible : lien d'évitement, sémantique de tableau réelle, texte derrière chaque icône
- **Lighthouse 100** sur les quatre catégories pour la démo déployée

## Personnaliser

1. `src/data/site.ts` — nom, accroche, navigation, contact, URL canonique
2. `src/content/tools/tools.yaml` — la matrice de permissions
3. `src/styles/global.css` — les couleurs sont dans le bloc `@theme`
4. `src/content/blog/` — articles en markdown

## Documentation

La documentation complète est dans [`docs/`](./docs/).

| | |
|---|---|
| [Démarrage](./docs/getting-started.md) | Installer, lancer, et les fichiers que tu modifieras vraiment |
| [Déploiement](./docs/deploying.md) | Cloudflare, Netlify, Vercel, et ailleurs |
| [Contenu](./docs/content.md) | Articles, auteurs, la matrice de permissions |
| [Personnalisation](./docs/customising.md) | Couleurs, typographie, motion, et ce qu'il ne faut pas casser |
| [Dépannage](./docs/troubleshooting.md) | Toutes les erreurs que ce template peut produire |

## Astroloop Pro

Ce template reste sous licence MIT et reste maintenu. Pro, c'est le même design
déployé sur un site entier plutôt que sur une seule landing page.

**[Démo en ligne](https://astroloop-pro.larryxue.dev)** — toutes les sections ci-dessous y figurent.

### Six skills IA, dans le dépôt

La raison d'acheter plutôt que de forker. Livrés dans `.agents/skills/` **et**
`.claude/skills/`, avec un `AGENTS.md` et un `DESIGN.md` que chaque skill lit —
une page modifiée avec Claude Code, Cursor, Codex, Copilot ou Gemini CLI
ressemble encore au reste du site.

| Skill | Ce qu'il fait |
|---|---|
| `astroloop-brief` | Détermine ce que ton site doit prouver. Une question à la fois. |
| `astroloop-design` | Repère et corrige les dérives — tokens, contraste, motion. |
| `astroloop-copy` | Ramène le texte à la bonne longueur. Supprime les affirmations sans condition. |
| `astroloop-seo` | SEO de page, pages programmatiques et GEO pour les moteurs de réponse. |
| `astroloop-blog` | Des articles qui méritent un lien, câblés aux content collections. |
| `astroloop-study` | Lit d'abord comment trois projets comparables l'ont résolu. |

### Et

- **29 pages, 29 composants** — documentation avec barre latérale, évaluations,
  changelog, intégrations, sécurité, mentions légales
- **Chronologie interactive des appels d'outils** — une exécution rejouée étape
  par étape, y compris l'étape qui a échoué et l'appel qui a été refusé
- **Estimateur d'usage** — exécutions par mois selon le forfait, les exécutions
  non facturées apparaissant en déduction plutôt que masquées
- **Huit langues** avec alternates hreflang et sélecteur
- **Keystatic CMS** et **recherche Pagefind**
- Animations de scroll GSAP et Lenis, différées après le premier rendu

[**Acheter — 79 $**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · projets illimités, les tiens et ceux de tes clients
Remboursement sous quatorze jours, sans justification. support@larryxue.dev

## Licence

MIT
