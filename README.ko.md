# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · **한국어**

**AI 에이전트 제품**을 위한 Astro 랜딩 페이지 템플릿. 자율성이 실제로 불러오는 질문들——무엇에 닿을 수 있는지, 무엇을 먼저 물어야 하는지, 한 번 돌리는 데 얼마인지——을 중심으로 만들었습니다.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

## 🔁 에이전트 루프

실제 루프의 다이어그램입니다. 목표, 계획, 실행, 도구 호출, 관찰 — 그리고 **되돌아가는** 화살표와 결과 직전에 **멈춰 사람을 기다리는** 게이트. 순수 SVG, 의존성 없음.

## 🔐 권한 매트릭스

도구별로 무엇을 읽고, 무엇을 쓰고, **무엇을 먼저 물어야 하며**, 감사 기록이 남는지 나열합니다. YAML 파일이 원본입니다. `writes` 와 `approval` 을 일부러 두 열로 나눴습니다. 사람들이 두려워하는 건 에이전트가 쓸 수 있다는 사실이 아니라 *묻지 않고* 쓴다는 사실이니까요. 빈칸도 의도입니다. 초록 체크로만 채운 열은 광고처럼 읽히고, 빈칸이 있는 표라야 진짜 권한 감사처럼 읽힙니다.

## 기능

- **13개 페이지** — 홈, 요금, 블로그, 문의, 소개, 법적 고지, 404
- **Astro 7** 과 **Tailwind CSS 4**
- 네이티브 CSS 뷰 트랜지션. 블로그 목록에서 글로 이어지는 공유 요소 포함, 라우터 불필요
- 폰트는 Astro 내장 파이프라인으로: 자체 호스팅, 프리로드, 폴백 메트릭까지 있어 교체 시 레이아웃이 밀리지 않습니다
- 라이트/다크, 첫 페인트 전에 결정
- 블로그용 content collections, RSS, 사이트맵, OG 이미지
- 사용량 기반 요금 페이지 — 에이전트 제품은 좌석을 팔지 않으니까요
- 접근성: 건너뛰기 링크, 실제 테이블 시맨틱, 모든 아이콘 뒤에 텍스트
- 배포된 데모에서 **Lighthouse 네 항목 모두 100**

## 내 것으로 만들기

1. `src/data/site.ts` — 이름, 태그라인, 내비게이션, 연락처, canonical URL
2. `src/content/tools/tools.yaml` — 권한 매트릭스
3. `src/styles/global.css` — 색상은 `@theme` 블록에
4. `src/content/blog/` — 마크다운 글

## 명령

```bash
npm install     # install
npm run dev     # localhost:4321
npm run build   # ./dist/
```

## 라이선스

MIT
