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
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "ブログ自動生成・投稿システム",
    shortDescription: "WordPressへのブログ記事の自動生成・投稿を実現し、コンテンツ作成を効率化。",
    mainImage: "/images/projects/blog-automation_main.png",
    techIcons: ["Python", "Google Gemini API", "Docker"],
    description: "インターンシップ先で最も印象的だったプロジェクトです。企業のコンテンツマーケティングを支援するため、指定されたキーワードに基づき、AI(Gemini API)を用いてSEOに最適化されたブログ記事を自動で生成し、WordPressに下書きとして自動投稿するシステムを開発しました。",
    screenshots: [
      { src: "/images/projects/blog-automation_ss_01.png", caption: "システムの基本フロー" },
      { src: "/images/projects/blog-automation_ss_02.png", caption: "生成された記事のサンプル" },
      { src: "/images/projects/blog-automation_ss_03.png", caption: "投稿設定画面" },
    ],
    challenge: "コンテンツ作成には多くの時間と手間がかかり、特にSEOを意識した質の高い記事を継続的に制作することが大きな負担となっていました。",
    solution: "Google Gemini APIを活用して、キーワードから構成案、本文、メタディスクリプションまでを自動生成。さらにWordPress REST APIと連携し、生成された記事を自動で下書き投稿する機能を実装しました。",
    result: "記事1本あたりの作成時間を約2時間から5分へと大幅に短縮（95%以上削減）。コンテンツの量産化を可能にし、Webサイトへの流入増加に貢献しました。",
    techStack: ["Python", "Flask", "Google Gemini API", "WordPress REST API", "Docker", "Git"],
    githubUrl: "https://github.com/example/blog-automation",
  },
  {
    id: 2,
    title: "スタイル情報自動生成アプリ",
    shortDescription: "美容室のヘアスタイル写真から説明文やタグをAIが自動生成。",
    mainImage: "/images/projects/style-generator_main.png",
    techIcons: ["Python", "Google Gemini API", "Playwright"],
    description: "美容室のHotPepperBeauty掲載用スタイルページ作成業務を効率化するためのデスクトップアプリです。複数のヘアスタイル写真から、スタイル名、説明文、特徴タグなどをAIが自動生成します。",
    screenshots: [
      { src: "/images/projects/style-generator_ss_01.png", caption: "アプリのメイン画面" },
      { src: "/images/projects/style-generator_ss_02.png", caption: "画像から情報が生成される様子" },
    ],
    challenge: "スタイルページの作成は、写真1枚1枚に対して手作業で情報を入力する必要があり、1件あたり1時間もの時間を要していました。",
    solution: "複数枚の画像情報を基に、Google Gemini APIが最適なスタイル情報を一括で自動生成する機能を開発。生成された情報はすぐにコピー＆ペーストして使用できます。",
    result: "スタイルページ作成時間を1件あたり1時間から3分へと、95%削減することに成功しました。",
    techStack: ["Python", "PyQt6", "Google Gemini API", "Playwright", "Pydantic"],
    githubUrl: "https://github.com/example/style-generator",
  },
  {
    id: 3,
    title: "HotPepperBeauty自動投稿アプリ",
    shortDescription: "スクレイピングとブラウザ自動化でブログ投稿作業を自動化。",
    mainImage: "/images/projects/hpb-auto-post_main.png",
    techIcons: ["Python", "Selenium", "BeautifulSoup"],
    description: "企業のブログコンテンツをHotPepperBeautyのブログへ自動で転載・投稿するためのシステムです。既存のブログサイトから記事をスクレイピングし、Seleniumを使ってHotPepperBeautyの管理画面にログイン後、自動で投稿します。",
    screenshots: [
      { src: "/images/projects/hpb-auto-post_ss_01.png", caption: "自動投稿プロセスの概念図" },
    ],
    challenge: "既存のブログコンテンツをHotPepperBeautyに手動で転記・投稿する作業は、時間がかかり単純作業であるため、ミスが発生しやすい状況でした。",
    solution: "BeautifulSoupで元サイトから記事データを抽出し、SeleniumでHotPepperBeautyのブログ投稿フォームを自動操作するスクリプトを開発しました。",
    result: "手動での転記作業を完全になくし、作業時間を月間数時間からほぼゼロに削減。投稿ミスもなくなりました。",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Requests"],
    githubUrl: "https://github.com/example/hpb-auto-post",
  },
  {
    id: 4,
    title: "LSTMによる歩行者の軌道予測",
    shortDescription: "深層学習モデルを用いて、多数の歩行者の将来位置を予測する研究。",
    mainImage: "/images/projects/pedestrian-prediction_main.png",
    techIcons: ["Python", "PyTorch", "NumPy"],
    description: "大学の研究として、深層学習（LSTM）を用いて、監視カメラ映像などから検出された多数の歩行者の将来の軌道を予測するアルゴリズムを開発しました。自動運転やロボットのナビゲーションへの応用を目的としています。",
     screenshots: [
      { src: "/images/projects/pedestrian-prediction_ss_01.png", caption: "軌道予測結果の可視化" },
      { src: "/images/projects/pedestrian-prediction_ss_02.png", caption: "モデルの構造図" },
    ],
    challenge: "人間が密集する環境では、相互作用が複雑で、個々の歩行者の将来位置を正確に予測することは困難でした。",
    solution: "過去の軌道データを時系列データとして捉え、LSTMモデルに入力することで、歩行者間の相互作用を学習し、将来の軌道を予測するモデルを構築しました。",
    result: "従来のモデルと比較して、予測精度を約15%向上させることに成功しました。",
    techStack: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/example/pedestrian-prediction",
  }
]; 