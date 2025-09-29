# スタイル・コーディング規約
- TypeScriptでstrictモード、型インポートは`@/*`パスエイリアス利用。
- React関数コンポーネントが中心で、セクション/レイアウト/UIでディレクトリ分離。
- UIはTailwind CSSユーティリティで構築。カスタムカラー(`base-white`,`light-gray`,`accent`など)とフォント変数を利用。
- Framer Motionや`react-intersection-observer`でアニメーション実装、`lucide-react`でアイコン。
- ESLintは`next/core-web-vitals` + `next/typescript`設定。