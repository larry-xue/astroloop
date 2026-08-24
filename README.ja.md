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

## Astroloop Pro

このテンプレートは MIT のままで、メンテナンスも続きます。Pro は同じデザインを
ランディングページ 1 枚ではなくサイト全体に広げたものです。

**[ライブデモ](https://astroloop-pro.larryxue.dev)** — 以下のセクションはすべてデモ上にあります。

- **29 ページ、29 コンポーネント** — サイドバー付きドキュメント、評価、
  変更履歴、連携、セキュリティ、法務
- **インタラクティブなツール呼び出しタイムライン** — 1 回の実行をステップごとに
  再生。失敗したステップと拒否された呼び出しも含みます
- **使用量エスティメーター** — 月あたりの実行回数をプランに当てはめ、課金対象外の
  実行を隠さず控除として表示します
- **8 言語対応**、hreflang と言語切り替え付き
- **Keystatic CMS** と **Pagefind 検索**
- GSAP と Lenis のスクロール演出。描画後まで読み込みを遅延

[**購入 — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · プロジェクト数は無制限（自社案件もクライアント案件も）
14 日間の返金保証、理由は問いません。support@larryxue.dev

## ライセンス

MIT
