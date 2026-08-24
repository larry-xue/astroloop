# Astroloop

[English](./README.md) · **简体中文** · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

面向 **AI agent 产品**的 Astro 落地页模板——围绕自主性真正会引发的问题设计：它能碰什么、必须先问什么、跑一次多少钱。

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 Agent 循环图

画的是真实的循环——目标、规划、执行、调用工具、观察——带着那条**绕回去**的箭头，以及在产出之前**停下来等人**的闸门。纯 SVG，零依赖。

## 🔐 权限矩阵

逐个工具列出：读什么、写什么、**必须先问什么**、是否留痕。数据来自 YAML 文件。`writes` 和 `approval` 是刻意分开的两列——买家怕的不是 agent 能写，是它**不打招呼就写**。空格子也是有意的：一整列绿勾读起来像营销，空白读起来才像真实的权限审计。

## 功能

- **13 个页面**——首页、定价、博客、联系、关于、法务、404
- **Astro 7** + **Tailwind CSS 4**
- 原生 CSS 视图过渡，含从博客列表到文章页的共享元素——不用路由器
- 字体走 Astro 内置管线：自托管、预加载、带 fallback metrics，字体切换不会推动布局
- 明暗双主题，首屏绘制前就确定，不闪
- 博客用 content collections，含 RSS、sitemap、OG 图
- 按用量计价的定价页——agent 产品不卖席位
- 无障碍：跳转链接、真实表格语义、每个图标背后都有文字
- 部署后的 demo **Lighthouse 四项满分**

## 改成你自己的

1. `src/data/site.ts` —— 名称、标语、导航、联系方式、canonical URL
2. `src/content/tools/tools.yaml` —— 权限矩阵
3. `src/styles/global.css` —— 颜色都在 `@theme` 块里
4. `src/content/blog/` —— markdown 文章

## 命令

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## Astroloop Pro

这个模板会一直是 MIT，也会一直维护。Pro 是同一套设计铺满整站，而不只是一个落地页。

**[在线预览](https://astroloop-pro.larryxue.dev)** —— 下面这些区块都在上面。

- **29 个页面、29 个组件** —— 带侧栏的文档、评测、更新日志、集成、安全、法务
- **可交互的工具调用时间线** —— 一次运行逐步回放，包含失败的那一步和被拒绝的那次调用
- **用量估算器** —— 按月运行次数对应套餐，不计费的运行是当作抵扣显示的，不是藏起来
- **八国语言**，带 hreflang 和语言切换
- **Keystatic CMS** 和 **Pagefind 搜索**
- GSAP + Lenis 滚动动效，首屏绘制后才加载

[**购买 — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · 不限项目数，自己的和客户的都算
十四天无理由退款。support@larryxue.dev

## 许可

MIT
