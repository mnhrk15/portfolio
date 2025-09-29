# ディレクトリ構成メモ
- `src/app/` App Router構成。`layout.tsx`で共通レイアウト、`page.tsx`がトップページ。
- `src/components/`
  - `layout/` ヘッダー・フッター・セクションラッパなど共通レイアウト部品。
  - `sections/` ヒーロー/アバウト/スキル/プロジェクト各セクション。
  - `projects/` プロジェクトカード・モーダルや画像スライダーなど制作物表示用部品。
  - `ui/` ボタン・モーダル・フェードインなど汎用UIコンポーネント。
- `src/data/` プロフィール・スキル・プロジェクトデータを型付きオブジェクトで定義。
- `docs/` 要件定義・設計書など資料。
- ルート直下に`tailwind.config.ts`/`eslint.config.mjs`/`tsconfig.json`/`package.json`など設定。