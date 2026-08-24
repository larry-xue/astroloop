# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · **Português** · [한국어](./README.ko.md)

Um template de landing em Astro para **produtos de agentes de IA**, construído em torno das perguntas que a autonomia realmente levanta: o que ele pode tocar, o que precisa perguntar antes e quanto custa uma execução.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![A página inicial do Astroloop](./.github/assets/hero.png)

## 🔁 O laço do agente

Um diagrama do laço real — objetivo, plano, ação, chamada de ferramenta, observação — com a seta que **volta atrás** e o portão que **para e espera uma pessoa** antes do resultado. SVG puro, sem dependências.

![O diagrama do ciclo do agente](./.github/assets/agent-loop.png)

## 🔐 A matriz de permissões

Por ferramenta: o que lê, o que escreve, **o que precisa aprovar antes** e se fica auditado. Vem de um arquivo YAML. `writes` e `approval` são colunas separadas de propósito: ninguém teme que um agente escreva, teme que ele escreva *sem perguntar*. E as células vazias são o ponto — uma coluna de vistos verdes soa a marketing; lacunas soam a auditoria de verdade.

![A matriz de permissões](./.github/assets/permissions.png)

## Recursos

- **13 páginas** — início, preços, blog, contato, sobre, legal, 404
- **Astro 7** e **Tailwind CSS 4**
- Transições de view em CSS nativo, com elementos compartilhados do índice do blog para o post, sem router
- Fontes pelo pipeline nativo do Astro: auto-hospedadas, pré-carregadas e com métricas de fallback para a troca não deslocar o layout
- Claro e escuro, decidido antes da primeira pintura
- Content collections para o blog, RSS, sitemap, imagem OG
- Página de preços por uso, porque produto de agente não vende assento
- Acessível: link de pular, semântica real de tabela, texto atrás de cada ícone
- **Lighthouse 100** nas quatro categorias na demo publicada

## Deixar do seu jeito

1. `src/data/site.ts` — nome, slogan, navegação, contato, URL canônica
2. `src/content/tools/tools.yaml` — a matriz de permissões
3. `src/styles/global.css` — as cores ficam no bloco `@theme`
4. `src/content/blog/` — posts em markdown

## Comandos

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Astroloop Pro

Este template continua MIT e continua mantido. O Pro é o mesmo design levado a
um site inteiro em vez de uma única landing page.

**[Demo ao vivo](https://astroloop-pro.larryxue.dev)** — todas as secções abaixo estão lá.

- **Seis skills de IA incluídas** — `.claude/skills/` mais `AGENTS.md` e `DESIGN.md`,
  para que uma página editada com Claude, Cursor ou Codex continue a parecer-se com o site
- **29 páginas, 29 componentes** — documentação com barra lateral, avaliações,
  changelog, integrações, segurança, legal
- **Linha temporal interativa de chamadas de ferramentas** — uma execução passo
  a passo, incluindo o passo que falhou e a chamada que foi recusada
- **Estimador de utilização** — execuções por mês face a um plano, com as
  execuções não faturadas mostradas como dedução em vez de escondidas
- **Oito idiomas** com alternates hreflang e seletor
- **Keystatic CMS** e **pesquisa Pagefind**
- Animação de scroll com GSAP e Lenis, adiada para depois da pintura

[**Comprar — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · projetos ilimitados, teus e dos teus clientes
Reembolso de catorze dias, sem perguntas. support@larryxue.dev

## Licença

MIT
