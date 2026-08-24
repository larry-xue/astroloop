# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · **Deutsch** · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

Ein Astro-Landingpage-Template für **KI-Agentenprodukte** — gebaut um die Fragen, die Autonomie tatsächlich aufwirft: worauf sie zugreifen darf, wofür sie erst fragen muss und was ein Lauf kostet.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![Die Astroloop-Startseite](./.github/assets/hero.png)

## 🔁 Die Agentenschleife

Ein Diagramm der tatsächlichen Schleife — Ziel, Plan, Aktion, Werkzeugaufruf, Beobachtung — mit dem Pfeil, der **zurückführt**, und dem Tor, das vor dem Ergebnis **anhält und auf einen Menschen wartet**. Reines SVG, keine Abhängigkeiten.

![Das Diagramm der Agentenschleife](./.github/assets/agent-loop.png)

## 🔐 Die Berechtigungsmatrix

Pro Werkzeug: was gelesen, was geschrieben, **wofür erst gefragt** und was protokolliert wird. Gespeist aus einer YAML-Datei. `writes` und `approval` sind absichtlich getrennte Spalten: Niemand fürchtet, dass ein Agent schreiben kann, sondern dass er *ohne zu fragen* schreibt. Und die leeren Zellen sind der Punkt — eine Spalte grüner Haken liest sich wie Werbung, Lücken lesen sich wie eine echte Prüfung.

![Die Berechtigungsmatrix](./.github/assets/permissions.png)

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

## Astroloop Pro

Dieses Template bleibt MIT und bleibt gepflegt. Pro ist dasselbe Design über
eine ganze Website statt über eine einzelne Landingpage.

**[Live-Demo](https://astroloop-pro.larryxue.dev)** — alle folgenden Abschnitte sind dort zu sehen.

### Sechs KI-Skills, im Repository

Der Grund zu kaufen statt zu forken. In `.agents/skills/` **und**
`.claude/skills/`, mit einer `AGENTS.md` und einer `DESIGN.md`, die jeder Skill
liest — eine mit Claude Code, Cursor, Codex, Copilot oder Gemini CLI bearbeitete
Seite sieht danach noch nach der Seite aus.

| Skill | Wofür |
|---|---|
| `astroloop-brief` | Klärt, was deine Seite belegen muss. Eine Frage nach der anderen. |
| `astroloop-design` | Findet und behebt Abweichungen — Tokens, Kontrast, Motion. |
| `astroloop-copy` | Kürzt Texte auf Maß. Streicht Behauptungen ohne Bedingung. |
| `astroloop-seo` | Seiten-SEO, programmatische Seiten und GEO für Antwortmaschinen. |
| `astroloop-blog` | Beiträge, die verlinkt werden — an die Content Collections angebunden. |
| `astroloop-study` | Liest zuerst, wie drei vergleichbare Projekte es gelöst haben. |

### Und

- **29 Seiten, 29 Komponenten** — Dokumentation mit Seitenleiste, Evaluierungen,
  Changelog, Integrationen, Sicherheit, Rechtliches
- **Interaktive Tool-Call-Timeline** — ein Durchlauf Schritt für Schritt,
  einschließlich des fehlgeschlagenen Schritts und des abgelehnten Aufrufs
- **Nutzungsrechner** — Läufe pro Monat gegen einen Tarif, wobei nicht
  abgerechnete Läufe als Abzug erscheinen statt versteckt zu werden
- **Acht Sprachen** mit hreflang-Alternates und Umschalter
- **Keystatic CMS** und **Pagefind-Suche**
- Scroll-Animation mit GSAP und Lenis, erst nach dem Rendern geladen

[**Kaufen — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · unbegrenzte Projekte, deine und die deiner Kunden
Vierzehn Tage Rückgaberecht, ohne Nachfragen. support@larryxue.dev

## Lizenz

MIT
