export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  mainImage: string;
  techIcons: string[];
  description: string;
  screenshots: {
    src: string;
    caption: string;
  }[];
  challenge: string;
  solution: string;
  result: string;
  highlights?: string[]; // 技術的な工夫
  badge?: string; // 例: "100+サロンで実利用"
  period?: string; // 開発期間
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string; // 公開リポジトリがある場合のみ
  serviceUrl?: string; // サービス紹介LPがある場合のみ
}

// インターン先（美容サロン集客支援ベンチャー）のアプリは非公開リポジトリのため、コードURLなし（公開LPがあるものは serviceUrl を掲載）
export const projectsData: Project[] = [
  {
    id: 1,
    title: "HotPepperBeautyコンテンツ投稿自動化システム",
    shortDescription:
      "写真からAIで投稿文を生成し、深夜にブラウザ自動操作で投稿。スタイル・ブログ・フォトギャラリー3種対応。",
    mainImage: "/images/projects/salon-post-automation_main.png",
    techIcons: ["TypeScript", "Next.js", "Supabase", "Playwright", "Gemini API", "Docker"],
    description:
      "ヘアスタイル写真からGeminiのマルチモーダル生成で投稿文・ハッシュタグ・担当スタイリスト等を自動生成し、深夜にブラウザ自動操作で予約管理サイトへ投稿する、HotPepperBeautyのスタイル・ブログ・フォトギャラリー3種に対応したマルチサロン投稿自動化システムです。",
    screenshots: [
      { src: "/images/projects/salon-post-automation_ss_01.png", caption: "サービス紹介ページ（今日の自動投稿キューのイメージ）" },
      { src: "/images/projects/salon-post-automation_ss_02.png", caption: "主要機能: AI下書き・完全自動投稿・多店舗一元管理" },
      { src: "/images/projects/salon-post-automation_ss_03.png", caption: "運用フロー: ストック作成から深夜自動投稿・ログ確認まで" },
    ],
    challenge:
      "HotPepperBeautyへの継続的なコンテンツ投稿は集客に直結する一方、1件ずつ手作業で作成・投稿する必要があり、多店舗の運用では膨大な工数がかかっていました。",
    solution:
      "写真からのAI自動生成とPlaywrightによるブラウザ自動操作を組み合わせ、コンテンツ作成から深夜の無人投稿までを自動化するマルチサロン対応システムを構築しました。",
    result:
      "100以上の美容サロンで実利用中。TypeScript約11万行（うちテスト約3.4万行）のモノレポを要件定義から一人称で開発・運用しています。",
    highlights: [
      "生成結果をスキーマで検証し、文字数超過・禁止語・選択肢外の値を検出すると問題点をプロンプトにフィードバックして最大2回自動再生成するループを実装。「上限ちょうどの文字数指示では実測で約半数が超過する」等の実測に基づきプロンプトを調整",
      "生成直前に掲載ページを再取得してスタイリスト・クーポン情報を最新化し、投稿先と完全一致が必要な値の整合性を担保",
      "リモートブラウザ接続を複数ゾーン構成とし、接続失敗時のフェイルオーバーと指数バックオフ＋ジッターによる再接続で深夜バッチの安定稼働を確保",
      "投稿先サイトの認証情報はAES-256-GCMで暗号化して保存",
    ],
    badge: "100+サロンで実利用",
    period: "2026年3月〜現在",
    techStack: ["TypeScript", "Next.js", "React", "Supabase", "Playwright", "Gemini API", "Google Sheets API", "Docker"],
    serviceUrl: "https://salon-post-automation.ai-beauty.tokyo/",
  },
  {
    id: 2,
    title: "サロン統合分析ダッシュボード",
    shortDescription:
      "GoogleビジネスプロフィールとHotPepperBeautyの指標を一元管理し、口コミAI分析まで行うマルチテナントSaaS。",
    mainImage: "/images/projects/salon-dashboard_main.png",
    techIcons: ["TypeScript", "Next.js", "Supabase", "Gemini API", "Playwright", "Docker"],
    description:
      "Googleビジネスプロフィール（GBP）とHotPepperBeautyの集客指標を一元管理し、Geminiによる口コミの総合分析・返信案生成・自動返信、複数店舗一括のPDFレポート出力までを行うマルチテナントSaaSです。GBP APIからの日次自動収集と、ブラウザ自動操作による月次データの自動取得を組み合わせています。（スクリーンショットはデモモードの架空データです）",
    screenshots: [
      { src: "/images/projects/salon-dashboard_ss_01.png", caption: "店舗ダッシュボード: GBP指標のKPIカードと推移グラフ" },
      { src: "/images/projects/salon-dashboard_ss_02.png", caption: "検索キーワードランキングと閲覧経路の内訳" },
      { src: "/images/projects/salon-dashboard_ss_03.png", caption: "口コミ一覧とAI返信提案" },
    ],
    challenge:
      "複数サロンの集客指標がGoogle・HotPepperBeautyなど媒体ごとに分散しており、横断的な状況把握やレポート作成、口コミへの対応に多大な工数がかかっていました。",
    solution:
      "API連携・ブラウザ自動操作・CSVアップロードの3経路でデータを自動集約するダッシュボードを構築し、口コミのAI分析・返信案生成からPDFレポート出力までを自動化しました。",
    result:
      "100以上の美容サロンで実利用中。TypeScript約7万行・ユニットテスト約1,400件を単独で開発し、無人バッチを長期安定稼働させています。",
    highlights: [
      "インメモリ＋DBの二層構造の分散ジョブロックとジョブ別TTL・更新方式で、Webとバッチ双方からの二重実行を構造的に防止",
      "5回連続失敗で対象店舗を自動無効化するサーキットブレーカー（自動復帰付き）と3層のリトライ設計で、無人運転を自己修復可能に",
      "口コミ本文をデリミタで隔離するプロンプトインジェクション防御、出力の引用を入力と突合する幻覚除去、構造化出力＋スキーマ検証の多層防御でLLMを本番組み込み",
      "認証情報のAES-256-GCM暗号化（用途別の鍵分離）、平文パスワードを型レベルで封じ込めるbranded type、ログの秘匿情報redactなど多層のセキュリティ設計",
      "レートリミット・セマフォキュー・ジョブキュー化を重ね、200店舗の一括PDF生成をブラウザを閉じても完走できる設計に",
    ],
    badge: "100+サロンで実利用",
    period: "2026年2月〜現在",
    techStack: ["TypeScript", "Next.js", "React", "Supabase", "Gemini API", "GBP API", "Playwright", "Puppeteer", "Docker"],
    serviceUrl: "https://salon-dashboard.ai-beauty.tokyo/",
  },
  {
    id: 3,
    title: "Googleビジネスプロフィール自動投稿システム",
    shortDescription:
      "HotPepperBeautyとInstagramのコンテンツをAIで選別・整形し、Googleビジネスプロフィールへ自動投稿。",
    mainImage: "/images/projects/salon-gbp-system_main.png",
    techIcons: ["Python", "FastAPI", "Celery", "React", "Gemini API", "Docker"],
    description:
      "HotPepperBeautyとInstagramのコンテンツを自動収集し、ルールベースのスコアリングで投稿価値を選別、Geminiで集客向けの文章に整形して、Googleビジネスプロフィールへ承認制または全自動で投稿するSaaSです。Celeryの定期タスク11本が収集から投稿・自己修復までを無人で運転します。",
    screenshots: [
      { src: "/images/projects/salon-gbp-system_ss_01.png", caption: "サービス紹介ページ" },
      { src: "/images/projects/salon-gbp-system_ss_02.png", caption: "運用フロー: コンテンツ取得 → 確認・承認 → GBP投稿・管理" },
    ],
    challenge:
      "Googleビジネスプロフィールへの継続的な投稿はMEO（マップ検索対策）に有効な一方、店舗ごとに手動運用するのは現実的でなく、多くのサロンで放置されがちでした。",
    solution:
      "既存コンテンツの自動収集からAIによる選別・文章生成、GBP APIへの投稿までを一気通貫で自動化するパイプラインを構築し、承認制と全自動の2モードで運用できるようにしました。",
    result:
      "100以上の美容サロンで実利用中。バックエンド実装約1万行に対しテスト約1.3万行・631件を備え、無人運転を長期安定稼働させています。",
    highlights: [
      "送信直前に「送信意図」をDBへ記録し、次回実行時にGoogle側の投稿一覧と照合するWrite-Aheadマーカー＋事後照合方式で、外部APIへの二重投稿を防止",
      "本番障害の実測（一斉送信による18件の失敗）を起点に、タスク起動を5秒間隔でずらすスタガー分散とジッター付き指数バックオフを設計してレート制限を回避",
      "LLM出力に含まれる数値を素材と突合して創作を検出する決定的バリデーションなど多層のアンチハルシネーション対策。AI障害時はルールベース文章へ自動縮退し投稿が止まらない設計",
      "停滞したジョブを15分間隔で回収する自己修復タスク群により、無人運転が「静かに止まる」ことを防止",
      "スクレイプ由来URLへのSSRF対策（allowlist方式）、OAuthトークンのAES-256-GCM暗号化保存などセキュリティを多層化",
    ],
    badge: "100+サロンで実利用",
    period: "2026年2月〜現在",
    techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "TypeScript", "Gemini API", "GBP API", "Meta Graph API", "Docker"],
    serviceUrl: "https://salon-gbp.ai-beauty.tokyo/",
  },
  {
    id: 4,
    title: "サロン向けAI診断ツール",
    shortDescription:
      "サロンの掲載ページや売上レポートを自動採点し、改善提案付きPDFを出力する営業支援ツール。AIO/GEO診断搭載。",
    mainImage: "/images/projects/salon-compass_main.png",
    techIcons: ["Python", "FastAPI", "TypeScript", "Next.js", "Gemini API", "OpenAI API"],
    description:
      "美容サロンの掲載ページや売上レポートPDFを自動採点する3つの診断アプリからなり、結果を改善提案付きのPDFレポートとして出力する営業支援ツールです。「AIO/GEO診断」では、生成AI検索がそのサロンをどう認識しているかをWeb検索グラウンディング（Gemini・OpenAIの2系統）で実測しスコア化します。（スクリーンショットのサロン名・社名はマスクしています）",
    screenshots: [
      { src: "/images/projects/salon-compass_ss_01.png", caption: "ホーム: 3つの診断アプリ" },
      { src: "/images/projects/salon-compass_ss_02.png", caption: "AIO/GEO診断: サロンページURLを入力するだけで診断" },
      { src: "/images/projects/salon-compass_ss_03.png", caption: "診断結果: 総合スコアと項目別評価" },
      { src: "/images/projects/salon-compass_ss_04.png", caption: "AIによる分析所見と、優先課題・アクションリストの提案" },
    ],
    challenge:
      "営業担当者が商談でサロンの課題を示す際、掲載ページや売上データの分析が属人的で、説得力のある提案資料の作成に時間がかかっていました。",
    solution:
      "掲載ページ・売上レポートを自動採点し、改善提案付きPDFレポートを数分で出力できる診断ツールを開発。生成AI検索時代の新しい指標としてAIO/GEO診断も実装しました。",
    result: "営業担当者が商談で使う診断ツールとして実運用中です。",
    highlights: [
      "弱点判定・優先度はルールベースで決定的に確定し、LLMは提案文・総評の文章生成に限定するハイブリッド構成。LLM障害時も決定論的なノウハウ集へ縮退し、診断結果が必ず成立する設計",
      "LLMへ渡す値は数値指標の許可リストに限定し、口コミ本文や第三者の個人情報を送信しない仕組みを構造的に保証",
      "Web検索グラウンディングをGemini・OpenAIの2系統で併用し、片系統の障害時も診断を継続",
      "PDFパーサの取りこぼしをビジョンモデルで救済する多段フォールバック（対象数値を限定したfail-closed設計）",
    ],
    period: "2026年6月〜現在",
    techStack: ["Python", "FastAPI", "TypeScript", "Next.js", "Gemini API", "OpenAI API", "Google Places API", "Docker"],
    serviceUrl: "https://salon-compass.ai-beauty.tokyo/lp",
  },
  {
    id: 5,
    title: "美容室向けAI画像変換アプリ",
    shortDescription:
      "参照画像とプロンプト指定でヘアカラー・髪型・背景を変換するAI画像変換Webアプリ。",
    mainImage: "/images/projects/style-ai-generator_main.png",
    techIcons: ["Python", "Django", "Celery", "Redis", "Gemini API", "Docker"],
    description:
      "モデルやスタイリストの写真を、参照画像とプロンプト指定でヘアカラー・髪型・背景などを変換するAI画像変換Webアプリです。Celeryによる非同期生成とWebSocketの進捗通知、ユーザーごとの月次クレジット管理を備え、本番運用中です。",
    screenshots: [
      { src: "/images/projects/style-ai-generator_ss_01.png", caption: "画像アップロード画面（通常変換・合成変換の2モード）" },
      { src: "/images/projects/style-ai-generator_ss_02.png", caption: "変換設定: 目線・表情・髪の長さ等の指定とAIプロンプト改善" },
      { src: "/images/projects/style-ai-generator_ss_03.png", caption: "合成変換: 参照画像の役割（背景・髪色・髪型）を指定" },
    ],
    challenge:
      "美容室のスタイル写真は撮影・加工に時間とコストがかかり、多様なスタイル画像を継続的に用意することが困難でした。",
    solution:
      "画像生成AIで既存写真からヘアカラー・髪型・背景を変換できるWebアプリを開発し、非同期処理と進捗通知で複数枚の生成も快適に行えるようにしました。",
    result: "本番運用中。スタイル写真制作の工数・コスト削減に貢献しています。",
    highlights: [
      "画像生成はGemini Developer APIを主経路、混雑時はVertex AIへ即時切替する2経路の冗長構成とし、障害時も生成を継続",
      "参照画像の役割（背景・髪色・髪型）ごとに指示を組み立てるプロンプト設計",
      "ユーザーの大まかな指示を最適化された構造化プロンプトへ自動変換する「プロンプト改善機能」を実装",
      "フォールバック発生時にクレジットを原子的に返却する月次クレジット管理",
    ],
    period: "2025年10月〜現在",
    techStack: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "WebSocket (Channels)", "Gemini API", "Vertex AI", "Docker"],
  },
  {
    id: 6,
    title: "自動運転研究用シミュレーション基盤",
    shortDescription:
      "歩行者軌道予測と経路計画を統合した閉ループシミュレーション基盤。国際会議AVEC'26採択の実験基盤。",
    mainImage: "/images/projects/research-sim_main.png",
    techIcons: ["Python", "PyTorch", "pysocialforce", "pytest"],
    description:
      "深層学習による歩行者軌道予測（Social-GAN）とFrenet座標系の経路計画を統合した閉ループシミュレーション基盤（Python約3.2万行）です。歩行者が自車を能動的に回避する双方向の相互作用を再現し、等速モデル・LSTM・Social-GANの3つの予測手法を安全性・効率性の統一指標で比較できます。",
    screenshots: [
      { src: "/images/projects/research-sim_ss_01.png", caption: "評価レポート: 軌跡・車両ダイナミクス・TTC分布・安全性指標を自動集計" },
      { src: "/images/projects/research-sim_ss_02.png", caption: "交差点シナリオ: 歩行者群を回避する自車軌跡" },
    ],
    challenge:
      "歩行者の軌道予測と自動運転の経路計画は別々に研究されることが多く、予測手法の違いが計画の安全性・効率性へ与える影響を一貫した条件で評価できる基盤がありませんでした。",
    solution:
      "予測→計画→歩行者の反応までのループを閉じたシミュレーション基盤を自作し、3つの予測手法を統一指標で比較評価できるようにしました。",
    result:
      "本基盤による研究成果が国際会議AVEC'26にフルペーパー採択（ROBOMECH2026でもポスター発表）。",
    highlights: [
      "予測の不確実性（20サンプル）を考慮したchance-constrained衝突判定",
      "3状態のフェイルセーフ状態機械による安全停止設計",
      "衝突判定のベクトル化により、数百障害物の環境でも1ステップ約0.06msで判定",
      "pytest 535件のテストで、研究コードでも品質・再現性を担保",
    ],
    badge: "国際会議AVEC'26採択",
    period: "2025年12月〜現在",
    techStack: ["Python", "PyTorch", "pysocialforce", "NumPy", "pytest"],
    repoUrl: "https://github.com/mnhrk15/integrated_path_planning",
  },
];
