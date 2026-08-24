# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · **Español** · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

Una plantilla Astro de landing para **productos de agentes de IA**, construida alrededor de las preguntas que la autonomía plantea de verdad: qué puede tocar, qué tiene que preguntar antes y cuánto cuesta una ejecución.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![La página de inicio de Astroloop](./.github/assets/hero.png)

![El diagrama del bucle del agente](./.github/assets/agent-loop.png)

![La matriz de permisos](./.github/assets/permissions.png)

## Características

- **El bucle del agente** — objetivo, plan, acción, llamada a herramienta, observación, y la puerta que espera a una persona. SVG puro.
- **Matriz de permisos por herramienta** — lectura, escritura, aprobación y auditoría en cuatro columnas separadas, desde un YAML.
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

## Astroloop Pro

Esta plantilla sigue siendo MIT y sigue mantenida. Pro es el mismo diseño
llevado a un sitio entero en lugar de una sola landing.

**[Demo en vivo](https://astroloop-pro.larryxue.dev)** — todas las secciones de abajo están ahí.

### Seis skills de IA, en el repositorio

La razón para comprar en lugar de hacer fork. En `.agents/skills/` **y**
`.claude/skills/`, con un `AGENTS.md` y un `DESIGN.md` que todas leen: una página
editada con Claude Code, Cursor, Codex, Copilot o Gemini CLI vuelve pareciéndose
al resto del sitio.

| Skill | Qué hace |
|---|---|
| `astroloop-brief` | Averigua qué tiene que demostrar tu sitio. Una pregunta cada vez. |
| `astroloop-design` | Encuentra y corrige desviaciones: tokens, contraste, movimiento. |
| `astroloop-copy` | Recorta el texto. Elimina afirmaciones sin condición. |
| `astroloop-seo` | SEO de página, páginas programáticas y GEO para motores de respuesta. |
| `astroloop-blog` | Posts que merecen un enlace, conectados a las content collections. |
| `astroloop-study` | Lee primero cómo lo resolvieron tres proyectos comparables. |

### Y

- **29 páginas, 29 componentes** — documentación con barra lateral, evaluaciones,
  changelog, integraciones, seguridad, legal
- **Línea de tiempo interactiva de llamadas a herramientas** — una ejecución
  paso a paso, incluido el paso que falló y la llamada que fue rechazada
- **Estimador de uso** — ejecuciones al mes según el plan, mostrando como
  descuento las que no se facturan en lugar de ocultarlas
- **Ocho idiomas** con alternates hreflang y selector
- **Keystatic CMS** y **búsqueda Pagefind**
- Movimiento de scroll con GSAP y Lenis, diferido hasta después del pintado

[**Comprar — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · proyectos ilimitados, tuyos y de tus clientes
Reembolso de catorce días, sin preguntas. support@larryxue.dev

## Licencia

MIT
