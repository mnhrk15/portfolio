# モーション設計（2026年8月）

`docs/design_specification.md` §4 のビジュアル設計に対する、動きの設計指針。
配色・タイポグラフィ・罫線ベースのゾーニングは §4 のまま維持し、そこに「印象に残る動き」を足す。

## 背景

リニューアル直後の実装では、`FadeInWhenVisible`（`opacity 0→1` / `y 50→0` / 0.5s）を
全セクションに一律で適用していたため、「全部が同じ動き」になり静的なサイトとの差が体感されなかった。
また `prefers-reduced-motion` 対応がコードベース全体で 0 件だった。

## モーション原則

| 項目 | 方針 |
|---|---|
| 基準イージング | expo out `cubic-bezier(0.16, 1, 0.3, 1)`。立ち上がりが速く着地が静か |
| デュレーション | `fast 0.2s`（hover・色）/ `base 0.4s`（汎用）/ `slow 0.6s`（セクション reveal） |
| 移動量 | フェードインの `y` は 16px。大きく動かさない |
| 演出強度 | 「標準」。洗練された静けさを保ちつつ、気づくところはしっかり動く |
| トークン | すべて `src/lib/motion.ts` に集約する。コンポーネント側に数値を散らさない |

`src/lib/motion.ts` は型のみを import する純データモジュールなので、Server Component からも読める。

### `prefers-reduced-motion`

**メディアクエリを単一の真実とし、各レイヤーが自分で OS 設定を読む。**
アプリ側に「reduced かどうか」の状態を持たない（関心の分離）。

| レイヤー | 手段 |
|---|---|
| framer-motion の宣言的アニメーション | `MotionProviders` の `<MotionConfig reducedMotion="user">` 1箇所。transform / layout が無効化され、opacity は残る |
| Lenis（スクロール入力） | `respectReducedMotion: true`。慣性なしの即時スクロールにフォールバック |
| 自前 JS 演出（ScrambleText / CountUp） | 各コンポーネントで `useReducedMotion()` を呼び、演出自体をスキップ |
| 純 CSS のアニメーション | `motion-safe:animate-bounce`、`globals.css` の reduce ブロック |

**やってはいけないこと**: `useReducedMotion()` の結果を props で Lenis に渡して
`lerp: reduced ? 0 : 0.12` のように制御する。Lenis 内部の判定と食い違う。

**注意**: reduced motion で render ツリーを分岐させるとハイドレーション不一致になる
（`useReducedMotion()` は SSR では常に false のため）。`CountUp` では MotionValue の初期値を
終着値にすることで、DOM 構造を分岐させずに済ませている。

## 実装一覧

### スムーススクロール（Lenis）

`src/components/providers/MotionProviders.tsx` で `<ReactLenis root>` を設置。
`layout.tsx` は Server Component のまま、`children` を props で受け渡す。

- `lerp: 0.12`（控えめな慣性）、`syncTouch: false`（モバイルはネイティブに任せる）
- **`<html className="scroll-smooth">` は削除必須**。CSS スムーススクロールと重畳すると粘る／ガタつく
- **`lenis/dist/lenis.css` の import は必須**。`html.lenis { height: auto }` 等が当たらないとスクロール量がずれる
- `anchors: false` にして Header 側で `useLenis().scrollTo()` を明示的に呼ぶ。
  `anchors: true` は document レベルの click リスナで `preventDefault()` するため、
  React の合成イベントとの実行順が環境依存になる
- アンカーのオフセットは `HEADER_SCROLL_OFFSET = -64`（固定ヘッダー `h-16` の分）。
  実測で着地位置が `getBoundingClientRect().top === 64` になることを確認済み

**落とし穴**: `lenis.stop()` 中の `scrollTo()` は Lenis 側で破棄される。
モバイルメニューからの遷移では `setIsOpen(false)` の反映が間に合わないため、
`handleNavClick` 内で `lenis.start()` を先に呼んでいる。

### モーダルのスクロールロック

`lenis.stop()` と `body { overflow: hidden }` を**併用**する。

| 手段 | 止められるもの | 止められないもの |
|---|---|---|
| `lenis.stop()` | Lenis の wheel 処理・rAF 更新 | 素のタッチスクロール、スクロールバードラッグ、キーボード |
| `body { overflow: hidden }` | 上記すべて | Lenis 内部 `animatedScroll` の drift |

- `overflow` は元の値を退避して復元する（`'auto'` を焼き付けない）
- スクロールバー幅を `paddingRight` で補償する。補償しないとページ幅が変わり、
  **カードの実測矩形がずれて共有レイアウト遷移の始点が飛ぶ**
- パネルに `data-lenis-prevent` を付け、Lenis 停止中でも内部はネイティブスクロールを通す

### Projects カード → モーダルの共有レイアウト遷移（`layoutId`）

カードのサムネイル枠が、そのままモーダルの ImageSlider ビューポート枠へ morph する。

- 共有するのは **メディア枠**（`project-media-${id}`）と **バッジ**（`project-badge-${id}`）の2つのみ
- **タイトルは共有しない**。カード幅では2行、モーダルヘッダーでは1行になるため、
  開いた瞬間にカード上のタイトルが瞬間リフローする
- `mainImage` は `screenshots[0]` とバイト単位で同一（6件中5件）。
  そのためモーダルにヒーロー画像を追加せず、スライダー枠自体を共有対象にしている
- ImageSlider の前後ボタンは、**枠の内側にも最外の div の直下にも置かない**。
  枠の内側だと morph 中の `scale` がボタンにも乗り、最外だと `top-1/2` が
  キャプション・ドットを含む全体の中央になって枠の中心からずれる。
  枠とボタンだけを包む `relative` なラッパーを位置基準にしている

#### 破ると壊れる不変条件

1. **共有要素の角丸は `style={{ borderRadius: 8 }}` で指定する。**
   Tailwind の `rounded-lg` では morph 中に角丸が引き伸ばされる
   （framer-motion は `latestValues` にある値だけ scale 補正する）。
   `"0.5rem"` も不可 — 数値=px として書き戻され 0.5px になる
2. **オーバーレイとパネルに transform 系アニメーション（`scale` / `y`）を付けない。**
   登場・退場は opacity のみ。projection と二重に掛かって破綻する
3. **`layoutRoot` を `fixed inset-0` のオーバーレイに付ける。**
   fixed 要素の `getBoundingClientRect()` は document scroll を含まないため、
   無いと morph の始点が scrollY 分ずれる（Projects は scrollY ≒ 3200px の位置にある）
4. **`layoutScroll` を `overflow-y-auto` のパネルに付ける。**
   パネル内をスクロールしてから閉じたときの飛び戻り始点のため
5. **共有要素の祖先に transform を持つ要素を作らない。**
   カードを `FadeInWhenVisible` で個別にラップすると projection の測定矩形がずれる
   → grid コンテナ側で `staggerChildren` する形に変更済み
6. `createPortal` を使わない。framer の projection ツリーは React ツリーを辿る一方
   box は DOM で測るため、portal はこの2つを乖離させる

#### モーダルの a11y

`aria-modal="true"` を宣言し、かつ portal を使わない（＝ダイアログが `<section id="projects">` の
DOM 順に居る）構成のため、**Tab のトラップが必須**になる。portal 前提の「Tab は自然に背景へ抜ける」
という想定が成り立たないので、`Modal.tsx` の keydown ハンドラで Tab / Shift+Tab を
パネル内で循環させ、フォーカスが外へ出た場合は引き戻している。
併せて、開いたら閉じるボタンへフォーカスを移し、閉じたら元の要素へ復帰する。

### Hero

- **方眼グリッド**（静的・2026年8月25日にカーソル追従を廃止）: 罫色は `gray-border` と同色の `#E5E7EB`。
  グリッド自体に `radial-gradient(ellipse 65% 50% at 50% 50%, black 40%, transparent 100%)` のマスクを掛け、
  中央帯はしっかり見せつつ端だけ白へ抜く。縦半径 50% で上下端がちょうど透明になり、
  次セクションとの境目が罫線でぶつ切りにならない。
  当初はカーソル追従のスポットライトにしていたが、（1）罫色が淡すぎて変化を知覚できない、
  （2）ウィンドウを狭めるとスポットライトが画面に対して大きく位置ズレが目立つ、という理由で廃止した
- **見出しのスクランブル**（初回ロード時のみ）: 置換文字をランダムな英数字にせず、
  **表示対象の文字列自身の並べ替え**に限定するのが要点。IBM Plex Sans JP はプロポーショナルのため、
  無関係な文字に差し替えると行幅が毎フレーム変わり、モバイルでは折り返し位置まで動く。
  文字の多重集合を保てばレイアウトシフトが起きない（375px 幅で h1 の高さ 80px・2行が一定であることを実測確認）。
  空白と `-` は位置固定にして単語の塊とハイフンの造形を保つ
- **実績数字のカウントアップ**: `HeroStat.countTo` を明示指定した項目のみ対象。
  正規表現でのパースは `AVEC'26` から `26` を拾う事故を必ず起こすため採用しない
- SSR と初回クライアントレンダリングでは常に最終テキストを出力する（ハイドレーション一致・SEO・NoJS 対応）。
  加えて `sr-only` に実テキストを置き、支援技術・翻訳ツール・クローラには演出中も正しい文字列を渡す

### スクロール reveal

- `FadeInWhenVisible` は `whileInView` + `viewport` の宣言のみに刷新。
  `useAnimation` + `useEffect` + `useInView` の3段構えが消え、再レンダリングは 0 回になった
  （`react-intersection-observer` は依存から削除）
- `viewport.margin: "0px 0px -12% 0px"` で「画面下端から12%入ってから」発火させ、
  慣性スクロール中に要素が後追いで出てくる違和感を消す
- `FadeInWhenVisible` は `<Section>` の**内側**に置く。外側だと `id` を持つ `<section>` 自体が
  transform を持つ瞬間があり、アンカー着地位置がずれる
- `SectionTitle` 直下の罫線は `scaleX: 0→1` + `origin-left` で左から引く。
  `SectionTitle` を Server Component に保つため、罫線だけ `SectionRule` として client に切り出している

### ヘッダー

- スクロール進捗バー: `useScroll().scrollYProgress` → `useSpring` → `scaleX`。
  Lenis の root モードは実際に `window.scrollTo` を呼ぶ本物のスクロールなので、連携コードは不要
- アクティブセクション検出は **IntersectionObserver**（`rootMargin: "-64px 0px -60% 0px"`）。
  スクロールの駆動元に依存せず、毎フレームの計算も発生しない
- 下線は役割を分離する。アクティブ = `layoutId="nav-underline"` の 2px 実線が滑って移動、
  hover = CSS のみ（`after:` + `scale-x`）の 1px。Hero 表示中はアクティブなしで下線を出さない
- `<motion.header layoutRoot>` にして、fixed 要素内の下線の位置計算にページのスクロール量が混ざらないようにする

## 検証項目（変更時に確認すること）

1. `npx tsc --noEmit` / `npm run build` / `npm run lint`
2. ページ最下部までスクロールしてからカードを開く → morph の始点がカード位置と一致するか（`layoutRoot` の検証）
3. モーダル内を下までスクロールしてから閉じる（`layoutScroll` の検証）
4. 375px 幅で h1 のスクランブル中に折り返し位置が動かないか
5. DevTools > Rendering > Emulate `prefers-reduced-motion: reduce` で、
   慣性・スクランブル・カウントアップ・morph がすべて止まるか
6. Console にハイドレーション警告（`Text content did not match`）が出ていないか
7. ナビクリック後に `document.getElementById('about').getBoundingClientRect().top === 64` になるか
8. モバイルメニューからの遷移でメニューが閉じ、かつスクロールが実行されるか

## 今回スコープ外（別タスク候補）

- 背景コンテンツへの `aria-hidden` / `inert`（マウスでの背景クリックはバックドロップが受けるため
  実害は限定的だが、支援技術からは背景が読めてしまう）
- ImageSlider の `aria-live` / キーボード操作（←→）
- プロジェクトごとの URL（`#projects/1` 等）と履歴連携
