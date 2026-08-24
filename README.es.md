# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · **Español** · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

Una plantilla Astro de landing para **productos de agentes de IA**, construida alrededor de las preguntas que la autonomía plantea de verdad: qué puede tocar, qué tiene que preguntar antes y cuánto cuesta una ejecución.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 El bucle del agente

Un diagrama del bucle real —objetivo, plan, acción, llamada a herramienta, observación— con la flecha que **vuelve atrás** y la puerta que **se detiene y espera a una persona** antes del resultado. SVG puro, sin dependencias.

## 🔐 La matriz de permisos

Por herramienta: qué lee, qué escribe, **qué tiene que consultar antes** y si queda auditado. Definido en un archivo YAML. `writes` y `approval` son columnas separadas a propósito: nadie teme que un agente pueda escribir, temen que escriba *sin preguntar*. Y las celdas vacías son el punto: una columna de marcas verdes se lee como marketing; los huecos, como una auditoría real.

## Características

- **13 páginas** — inicio, precios, blog, contacto, sobre nosotros, legal, 404
- **Astro 7** y **Tailwind CSS 4**
- Transiciones de vista CSS nativas, con elementos compartidos del índice del blog al artículo, sin router
- Fuentes con el pipeline integrado de Astro: alojadas aquí, precargadas y con métricas de reserva para que el cambio no mueva el diseño
- Claro y oscuro, decidido antes del primer pintado
- Content collections para el blog, RSS, sitemap, imagen OG
- Página de precios por uso, porque los productos de agentes no venden asientos
- Accesible: enlace de salto, semántica de tabla real, texto detrás de cada icono
- **Lighthouse 100** en las cuatro categorías en la demo desplegada

## Hacerla tuya

1. `src/data/site.ts` — nombre, lema, navegación, contacto, URL canónica
2. `src/content/tools/tools.yaml` — la matriz de permisos
3. `src/styles/global.css` — los colores viven en el bloque `@theme`
4. `src/content/blog/` — artículos en markdown

## Comandos

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Licencia

MIT
