# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · **Français** · [Português](./README.pt.md) · [한국어](./README.ko.md)

Un template de landing Astro pour les **produits à base d'agents IA**, construit autour des questions que l'autonomie soulève vraiment : ce qu'il peut atteindre, ce pour quoi il doit demander, et ce que coûte une exécution.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 La boucle de l'agent

Un schéma de la boucle réelle — objectif, plan, action, appel d'outil, observation — avec la flèche qui **revient en arrière** et la porte qui **s'arrête et attend une personne** avant le résultat. SVG pur, aucune dépendance.

## 🔐 La matrice de permissions

Par outil : ce qu'il lit, ce qu'il écrit, **ce pour quoi il doit demander d'abord**, et s'il est journalisé. Alimentée par un fichier YAML. `writes` et `approval` sont deux colonnes distinctes à dessein : personne ne craint qu'un agent puisse écrire, on craint qu'il écrive *sans demander*. Et les cases vides sont l'essentiel : une colonne de coches vertes se lit comme du marketing, les trous se lisent comme un vrai audit.

## Fonctionnalités

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

## Commandes

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Astroloop Pro

Ce template reste sous licence MIT et reste maintenu. Pro, c'est le même design
déployé sur un site entier plutôt que sur une seule landing page.

**[Démo en ligne](https://astroloop-pro.larryxue.dev)** — toutes les sections ci-dessous y figurent.

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
