# プロジェクト概要
- Next.js(App Router) + TypeScript + Tailwind CSSで構成された個人ポートフォリオサイト。
- `src/app/page.tsx`で`Hero`/`About`/`Skills`/`Projects`セクションをまとめてレンダリング。
- レイアウトは`src/app/layout.tsx`でヘッダー・フッター・フォント(Noto Sans JP, Montserrat)を設定し、サイト全体を`Section`コンポーネントで統一したパディングと幅に揃える。
- 主要データは`src/data/profile.ts`・`skills.ts`・`projects.ts`にTypeScript型と共に定義され、各セクションコンポーネントが参照する。
- 公式資料として`docs/requirements.md`(要件定義)と`docs/design_specification.md`(設計書)があり、コンテンツ構成やデザイン指針が詳細化されている。