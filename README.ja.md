# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · **日本語** · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · [한국어](./README.ko.md)

**AI エージェント製品**向けの Astro ランディングページテンプレート。自律性が実際に引き起こす問い——何に触れるのか、何を先に確認するのか、一回の実行にいくらかかるのか——を軸に組み立てています。

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 エージェントループ

実際のループの図です。目標・計画・実行・ツール呼び出し・観察、そして**戻る**矢印と、結果の手前で**止まって人を待つ**ゲート。純粋な SVG、依存ゼロ。

## 🔐 権限マトリクス

ツールごとに、何を読み、何を書き、**何を先に確認し**、監査されるかを並べます。データは YAML ファイル。`writes` と `approval` を別の列にしているのは意図的です。買い手が恐れているのは書けることではなく、*断りなく*書けることだからです。空欄も意図的です。緑のチェックが並ぶ列は宣伝に見え、空欄のある表は本物の権限監査に見えます。

## 機能

- **13 ページ** — ホーム、料金、ブログ、問い合わせ、会社概要、法務、404
- **Astro 7** と **Tailwind CSS 4**
- ネイティブ CSS ビュートランジション。ブログ一覧から記事への共有要素つき、ルーター不要
- フォントは Astro 内蔵のパイプライン。自前配信・プリロード・フォールバックメトリクス付きで、切り替え時にレイアウトがずれません
- ライト／ダーク、初回描画の前に確定
- ブログは content collections、RSS・サイトマップ・OG 画像つき
- 従量課金の料金ページ。エージェント製品は席数を売らないからです
- アクセシビリティ：スキップリンク、正しいテーブルのセマンティクス、すべてのアイコンに代替テキスト
- デプロイ済みデモで **Lighthouse 4 項目とも 100**

## 自分のものにする

1. `src/data/site.ts` — 名前、タグライン、ナビ、連絡先、canonical URL
2. `src/content/tools/tools.yaml` — 権限マトリクス
3. `src/styles/global.css` — 色は `@theme` ブロックに
4. `src/content/blog/` — markdown 記事

## コマンド

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## ライセンス

MIT
