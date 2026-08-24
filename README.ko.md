# Astroloop

[English](./README.md) · [简体中文](./README.zh.md) · [Español](./README.es.md) · [日本語](./README.ja.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Português](./README.pt.md) · **한국어**

**AI 에이전트 제품**을 위한 Astro 랜딩 페이지 템플릿. 자율성이 실제로 불러오는 질문들——무엇에 닿을 수 있는지, 무엇을 먼저 물어야 하는지, 한 번 돌리는 데 얼마인지——을 중심으로 만들었습니다.

**[Live demo](https://astroloop.larryxue.dev)** · MIT · Astro 7 · Tailwind 4

![Astroloop 홈페이지](./.github/assets/hero.png)

![에이전트 루프 다이어그램](./.github/assets/agent-loop.png)

![권한 매트릭스](./.github/assets/permissions.png)

## 기능

- **에이전트 루프 다이어그램** — 목표·계획·실행·도구 호출·관찰, 그리고 사람을 기다리는 게이트. 순수 SVG.
- **도구별 권한 매트릭스** — 읽기·쓰기·승인·감사를 각각 독립된 4개 열로. YAML 로 구동.
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

## Astroloop Pro

이 템플릿은 계속 MIT이고 계속 유지보수됩니다. Pro는 같은 디자인을 랜딩 페이지
한 장이 아니라 사이트 전체에 펼친 버전입니다.

**[라이브 데모](https://astroloop-pro.larryxue.dev)** — 아래 섹션은 모두 데모에 있습니다.

### 저장소에 들어 있는 AI 스킬 6개

fork 대신 구매할 이유입니다. `.agents/skills/` **와** `.claude/skills/` 양쪽에
들어 있고, 모든 스킬이 읽는 `AGENTS.md` 와 `DESIGN.md` 가 함께 옵니다 — Claude
Code, Cursor, Codex, Copilot, Gemini CLI 중 무엇으로 편집해도 사이트다운 모습이
유지됩니다.

| 스킬 | 하는 일 |
|---|---|
| `astroloop-brief` | 이 사이트가 무엇을 증명해야 하는지 정리합니다. 한 번에 한 질문. |
| `astroloop-design` | 어긋난 곳을 찾아 고칩니다 — 토큰, 대비, 모션, 레이아웃. |
| `astroloop-copy` | 카피를 규정 길이로 줄입니다. 조건 없는 주장을 걷어냅니다. |
| `astroloop-seo` | 페이지 SEO, 대량 생성 페이지, 답변 엔진용 GEO. |
| `astroloop-blog` | 링크할 가치가 있는 글. content collections에 연결되어 있습니다. |
| `astroloop-study` | 비슷한 프로젝트 세 곳이 어떻게 풀었는지 먼저 읽습니다. |

### 그 밖에

- **29개 페이지, 29개 컴포넌트** — 사이드바가 있는 문서, 평가, 변경 이력,
  연동, 보안, 법적 고지
- **인터랙티브 도구 호출 타임라인** — 한 번의 실행을 단계별로 재생하며,
  실패한 단계와 거부된 호출까지 포함합니다
- **사용량 추정기** — 플랜 대비 월 실행 횟수를 계산하고, 과금되지 않는 실행을
  숨기지 않고 차감으로 표시합니다
- **8개 언어** — hreflang 대체 링크와 언어 전환 포함
- **Keystatic CMS** 와 **Pagefind 검색**
- GSAP · Lenis 스크롤 모션, 첫 페인트 이후로 지연 로딩

[**구매 — $79**](https://buy.polar.sh/polar_cl_1nwNqH1oFO2OMEWD3GY5UqGCu3iuyeqRqAVQL4V821m) · 프로젝트 수 무제한(본인 작업과 클라이언트 작업 모두)
14일 이내 전액 환불, 사유 불문. support@larryxue.dev

## 라이선스

MIT
