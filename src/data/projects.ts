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
    title: "HotPepperBeautyブログ自動生成・投稿システム",
    shortDescription: "HotPepperBeautyブログ記事の自動生成・投稿を実現し、コンテンツ作成を効率化。",
    mainImage: "/images/projects/blog-automation_main.png",
    techIcons: ["Python", "Flask", "Playwright", "Google Gemini API", "Docker"],
    description: "HotPepper Beauty (HPB) に掲載するブログ記事を、アップロードされた画像から自動で生成し、サロンボード（HPB用コンテンツ管理システム）への投稿作業を効率化・自動化するWebアプリケーションです。",
    screenshots: [
      { src: "/images/projects/blog-automation_ss_01.png", caption: "パスワード入力画面" },
      { src: "/images/projects/blog-automation_ss_02.png", caption: "画像アップロード画面" },
      { src: "/images/projects/blog-automation_ss_03.png", caption: "画像アップロード後の画面" },
      { src: "/images/projects/blog-automation_ss_04.png", caption: "画像分析結果表示画面" },
      { src: "/images/projects/blog-automation_ss_05.png", caption: "生成された記事" },
      { src: "/images/projects/blog-automation_ss_06.png", caption: "記事テンプレート追加画面" },
      { src: "/images/projects/blog-automation_ss_07.png", caption: "サロン情報取得画面" },
      { src: "/images/projects/blog-automation_ss_08.png", caption: "ブログ記事投稿完了通知画面" },
    ],
    challenge: "ブログ記事の作成、特にSEOを意識した質の高いコンテンツを継続的に制作することは、多くの時間と手間を要する大きな課題でした。",
    solution: "Google Gemini APIを用いて、画像からSEOに最適化された記事を自動生成します。さらにPlaywrightを介してHotPepperBeautyの管理画面に自動でログインし、記事を下書き保存することで、投稿プロセスを完全に自動化しました。",
    result: "記事1本あたりの作成時間を約30分以上からわずか5分へと大幅に短縮（95%以上削減）し、コンテンツの量産化と質の向上を両立させました。",
    techStack: ["Python", "Flask", "Playwright", "Google Gemini API", "Docker"],
    githubUrl: "https://github.com/mnhrk15/hpb-blog-automation",
  },
  {
    id: 2,
    title: "モデルスタイル情報生成システム",
    shortDescription: "モデル画像からHotPepperBeautyで使えるスタイル情報を簡単作成。",
    mainImage: "/images/projects/style-generator_main.png",
    techIcons: ["Python", "Streamlit", "Google Gemini API", "Playwright"],
    description: "ヘアスタイルの画像を分析し、最適なスタイリスト、クーポン、スタイルタイトルを自動的に提案するアプリケーションです。Google Gemini APIを活用した画像解析と、ホットペッパービューティーからのデータ取得を組み合わせることで、効率的なマッチングを実現します。",
    screenshots: [
      { src: "/images/projects/style-generator_ss_01.png", caption: "アプリのメイン画面" },
      { src: "/images/projects/style-generator_ss_02.png", caption: "実行中画面" },
      { src: "/images/projects/style-generator_ss_03.png", caption: "生成結果の確認" },
      { src: "/images/projects/style-generator_ss_04.png", caption: "詳細結果表示・エクスポート機能" },
    ],
    challenge: "スタイル写真に最適なスタイリストやクーポンを手動で選定する作業は、膨大な情報を確認する必要があり、非常に時間がかかっていました。",
    solution: "Google Gemini APIによる画像解析でスタイルを特定し、HotPepperBeautyからリアルタイムに取得した情報と照合して、最適な組み合わせを自動で提案するシステムを構築しました。",
    result: "スタイルページ作成の効率が飛躍的に向上し、より魅力的で効果的なスタイル提案が可能になりました。これにより、顧客エンゲージメントの向上にも貢献しました。",
    techStack: ["Python", "Streamlit", "Google Gemini API"],
    githubUrl: "https://github.com/mnhrk15/hairstyle_analyzer_choose",
  },
  {
    id: 3,
    title: "ヘアスタイル変換システム",
    shortDescription: "簡単なプロンプトでアップロードしたモデル画像のヘアスタイルを変換。",
    mainImage: "/images/projects/hairstyle-ai_main.png",
    techIcons: ["Next.js", "TypeScript", "Replicate API", "Vercel"],
    description: "画像生成AIを活用して、美容室のWebサイト用モデル画像のヘアスタイルを瞬時に変更するWebアプリケーションです。",
    screenshots: [
      { src: "/images/projects/hairstyle-ai_ss_01.png", caption: "アプリのメイン画面" },
      { src: "/images/projects/hairstyle-ai_ss_02.png", caption: "画像・プロンプト・枚数入力画面" },
      { src: "/images/projects/hairstyle-ai_ss_03.png", caption: "生成結果の確認" },
      { src: "/images/projects/hairstyle-ai_ss_04.png", caption: "ギャラリー画面" },
    ],
    challenge: "多様なヘアスタイルカタログ画像を準備するには多くの時間とコストが必要でした。",
    solution: "FLUX.1 Kontext APIとGoogle Gemini APIを統合し、簡単なプロンプト入力でヘアスタイルを自在に変換できる機能を開発。これにより、様々なスタイルを低コストで迅速にシミュレーションできるようになりました。",
    result: "ヘアスタイルカタログ用の画像作成コストを大幅に削減することに大きく貢献しました。",
    techStack: ["Python", "FLUX.1 Kontext API", "Google Gemini API", "Flask"],
    githubUrl: "https://github.com/mnhrk15/hair-style-ai-generator",
  },
  {
    id: 4,
    title: "美容室リピート分析システム",
    shortDescription: "美容室来店情報から簡単にリピート分析 & 分析結果を見える化。",
    mainImage: "/images/projects/repeater-analyze_main.png",
    techIcons: ["Python", "Streamlit", "Pandas"],
    description: "美容室の顧客データを用いて、新規顧客のリピート状況を多角的に分析し、インタラクティブなダッシュボード形式で可視化するWebアプリケーションです。",
    screenshots: [
      { src: "/images/projects/repeater-analyze_ss_01.png", caption: "ファイルアップロード画面" },
      { src: "/images/projects/repeater-analyze_ss_02.png", caption: "分析期間指定画面" },
      { src: "/images/projects/repeater-analyze_ss_03.png", caption: "ダッシュボード画面（リピートファネル分析）" },
      { src: "/images/projects/repeater-analyze_ss_04.png", caption: "ダッシュボード画面（スタイリスト別リピート分析）" },
      { src: "/images/projects/repeater-analyze_ss_05.png", caption: "ダッシュボード画面（クーポン別リピート分析）" },
      { src: "/images/projects/repeater-analyze_ss_06.png", caption: "ダッシュボード画面（目標値比較分析）" },
      { src: "/images/projects/repeater-analyze_ss_07.png", caption: "ダッシュボード画面（リピートまでの期間分析）" },
      { src: "/images/projects/repeater-analyze_ss_08.png", caption: "ダッシュボード画面（月次トレンド分析）" },
      { src: "/images/projects/repeater-analyze_ss_09.png", caption: "エクスポート・印刷機能" },
    ],
    challenge: "顧客の再来店を促進するための効果的な施策を立てるには、リピート率などのデータを正確に把握する必要がありましたが、手作業での集計と分析には限界がありました。また、特定の期間の新規顧客のリピート動向を把握することは困難でした。",
    solution: "来店データをアップロードするだけで、リピート率、顧客単価、来店サイクルなどを自動で算出し、インタラクティブなグラフで可視化するダッシュボードを開発しました。",
    result: "データに基づいた客観的な分析が可能となり、効果的なマーケティング施策の立案やボトルネックの特定に貢献しました。",
    techStack: ["Python", "Streamlit", "Pandas", "Plotly"],
    githubUrl: "https://github.com/mnhrk15/hpb-repeat-analyzer",
  },
  {
    id: 5,
    title: "サロン情報スクレイピングシステム",
    shortDescription: "指定したエリアのサロン情報をスクレイピングし、営業リスト作成を効率化。",
    mainImage: "/images/projects/salon-scraping_main.png",
    techIcons: ["Python", "Selenium", "BeautifulSoup"],
    description: "HotPepperBeautyのウェブサイトから美容室の情報をスクレイピングするためのWebアプリケーションです。",
    screenshots: [
      { src: "/images/projects/salon-scraping_ss_01.png", caption: "メイン画面" },
      { src: "/images/projects/salon-scraping_ss_02.png", caption: "エリア指定画面" },
      { src: "/images/projects/salon-scraping_ss_03.png", caption: "実行中画面" },
      { src: "/images/projects/salon-scraping_ss_04.png", caption: "結果表示画面" },
    ],
    challenge: "営業リストを作成するために、Webサイトから手作業で情報を収集するのは非効率的で、時間のかかる上にミスも発生しやすい作業でした。",
    solution: "requestsとBeautifulSoupを活用し、指定したエリアのサロン名、住所、電話番号といった情報を自動で収集し、CSVファイルとして一括出力するシステムを開発しました。",
    result: "営業リスト作成の時間を大幅に削減することに成功し、営業活動の生産性を大幅に向上させました。",
    techStack: ["Python", "requests", "BeautifulSoup", "Pandas"],
    githubUrl: "https://github.com/mnhrk15/HPBscraper",
  },
  {
    id: 6,
    title: "HotPepperBeautyスタイル情報生成システム",
    shortDescription: "キーワードからHotPepperBeautyで使えるタイトル案を簡単生成。",
    mainImage: "/images/projects/style-info-generator_main.png",
    techIcons: ["Python", "Streamlit", "Google Gemini API"],
    description: "キーワードからヘアスタイルのタイトル、メニュー、コメント、ハッシュタグを自動生成するWebアプリケーションです。美容師やヘアサロンのスタッフが、HotPepperBeautyのコンテンツ作成を効率的に行うことができます。",
    screenshots: [
        { src: "/images/projects/style-info-generator_ss_01.png", caption: "メイン画面" },
        { src: "/images/projects/style-info-generator_ss_02.png", caption: "キーワード指定・実行中画面" },
        { src: "/images/projects/style-info-generator_ss_03.png", caption: "結果表示画面" },
        { src: "/images/projects/style-info-generator_ss_04.png", caption: "エクスポート機能" },
    ],
    challenge: "HotPepperBeautyに掲載するスタイル情報は、魅力的かつSEOに強いコンテンツを考える必要があり、創造的な負担が大きい作業でした。",
    solution: "Google Gemini APIを活用し、キーワードを入力するだけで、複数のタイトル案や説明文、ハッシュタグの組み合わせを瞬時に自動生成する機能を実装しました。",
    result: "スタイル情報作成にかかる時間を大幅に短縮し、より多くのスタイルを掲載できるようになったことで、集客力の向上に貢献しました。",
    techStack: ["Python", "Streamlit", "Google Gemini API"],
    githubUrl: "https://github.com/mnhrk15/auto-title-generator.git",
  },
]; 