# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · **Deutsch** · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

Ein Astro-Landingpage-Template für **KI-Agentenprodukte** — gebaut um die Fragen, die Autonomie tatsächlich aufwirft: worauf sie zugreifen darf, wofür sie erst fragen muss und was ein Lauf kostet.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 Die Agentenschleife

Ein Diagramm der tatsächlichen Schleife — Ziel, Plan, Aktion, Werkzeugaufruf, Beobachtung — mit dem Pfeil, der **zurückführt**, und dem Tor, das vor dem Ergebnis **anhält und auf einen Menschen wartet**. Reines SVG, keine Abhängigkeiten.

## 🔐 Die Berechtigungsmatrix

Pro Werkzeug: was gelesen, was geschrieben, **wofür erst gefragt** und was protokolliert wird. Gespeist aus einer YAML-Datei. `writes` und `approval` sind absichtlich getrennte Spalten: Niemand fürchtet, dass ein Agent schreiben kann, sondern dass er *ohne zu fragen* schreibt. Und die leeren Zellen sind der Punkt — eine Spalte grüner Haken liest sich wie Werbung, Lücken lesen sich wie eine echte Prüfung.

## Funktionen

- **13 Seiten** — Start, Preise, Blog, Kontakt, Über uns, Rechtliches, 404
- **Astro 7** und **Tailwind CSS 4**
- Native CSS-View-Transitions, inklusive gemeinsamer Elemente von der Blogübersicht in den Beitrag — ohne Router
- Schriften über die eingebaute Pipeline von Astro: selbst gehostet, vorgeladen, mit Fallback-Metriken, damit der Wechsel das Layout nicht verschiebt
- Hell und dunkel, entschieden vor dem ersten Rendern
- Content Collections für den Blog, RSS, Sitemap, OG-Bild
- Nutzungsbasierte Preisseite, denn Agentenprodukte verkaufen keine Plätze
- Barrierefrei: Sprunglink, echte Tabellensemantik, Text hinter jedem Symbol
- **Lighthouse 100** in allen vier Kategorien auf der veröffentlichten Demo

## Anpassen

1. `src/data/site.ts` — Name, Slogan, Navigation, Kontakt, kanonische URL
2. `src/content/tools/tools.yaml` — die Berechtigungsmatrix
3. `src/styles/global.css` — Farben stehen im `@theme`-Block
4. `src/content/blog/` — Markdown-Beiträge

## Befehle

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Lizenz

MIT
