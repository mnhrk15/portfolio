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
      { src: "/images/projects/blog-automation_ss_02.png", caption: "記事のプレビュー" },
      { src: "/images/projects/blog-automation_ss_03.png", caption: "投稿設定画面" },
      { src: "/images/projects/blog-automation_ss_04.png", caption: "画像アップロード画面" },
      { src: "/images/projects/blog-automation_ss_05.png", caption: "生成された記事のサンプル" },
      { src: "/images/projects/blog-automation_ss_06.png", caption: "投稿完了メッセージ" },
      { src: "/images/projects/blog-automation_ss_07.png", caption: "ログイン画面" },
      { src: "/images/projects/blog-automation_ss_08.png", caption: "システム設定" },
    ],
    challenge: "ブログ記事の作成、特にSEOを意識した質の高いコンテンツを継続的に制作することは、多くの時間と手間を要する大きな課題でした。",
    solution: "Google Gemini APIを用いて、画像からSEOに最適化された記事を自動生成します。さらにPlaywrightを介してHotPepperBeautyの管理画面に自動でログインし、記事を下書き保存することで、投稿プロセスを完全に自動化しました。",
    result: "記事1本あたりの作成時間を約2時間からわずか5分へと大幅に短縮（95%以上削減）し、コンテンツの量産化と質の向上を両立させました。",
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
      { src: "/images/projects/style-generator_ss_02.png", caption: "画像から情報が生成される様子" },
      { src: "/images/projects/style-generator_ss_03.png", caption: "生成結果の確認" },
      { src: "/images/projects/style-generator_ss_04.png", caption: "設定画面" },
    ],
    challenge: "スタイル写真に最適なスタイリストやクーポンを手動で選定する作業は、膨大な情報を確認する必要があり、非常に時間がかかっていました。",
    solution: "Google Gemini APIによる画像解析でスタイルを特定し、PlaywrightでHotPepperBeautyからリアルタイムに取得した情報と照合して、最適な組み合わせを自動で提案するシステムを構築しました。",
    result: "スタイルページ作成の効率が飛躍的に向上し、より魅力的で効果的なスタイル提案が可能になりました。これにより、顧客エンゲージメントの向上にも貢献しました。",
    techStack: ["Python", "Streamlit", "Google Gemini API", "Playwright", "Pydantic"],
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
      { src: "/images/projects/hairstyle-ai_ss_01.png", caption: "ヘアスタイル変換のメイン画面" },
      { src: "/images/projects/hairstyle-ai_ss_02.png", caption: "変換結果の比較" },
      { src: "/images/projects/hairstyle-ai_ss_03.png", caption: "プロンプト入力画面" },
      { src: "/images/projects/hairstyle-ai_ss_04.png", caption: "その他の変換例" },
    ],
    challenge: "施術前にヘアスタイル変更後のイメージを顧客に具体的に伝えることは困難でした。また、多様なヘアカタログ画像を準備するには多くの時間とコストが必要でした。",
    solution: "Replicate APIを統合し、簡単なプロンプト入力でヘアスタイルを自在に変換できる機能を開発。これにより、様々なスタイルを低コストで迅速にシミュレーションできるようになりました。",
    result: "ヘアカタログ用の画像作成コストを大幅に削減し、顧客が事前に仕上がりをイメージできるようになったことで、顧客満足度の向上に大きく貢献しました。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Replicate API", "Vercel"],
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
      { src: "/images/projects/repeater-analyze_ss_01.png", caption: "分析ダッシュボードのメイン画面" },
      { src: "/images/projects/repeater-analyze_ss_03.png", caption: "詳細な分析グラフ" },
      { src: "/images/projects/repeater-analyze_ss_04.png", caption: "データフィルタリング機能" },
      { src: "/images/projects/repeater-analyze_ss_05.png", caption: "期間別リピート率" },
      { src: "/images/projects/repeater-analyze_ss_06.png", caption: "顧客セグメント分析" },
      { src: "/images/projects/repeater-analyze_ss_07.png", caption: "新規顧客とリピート顧客の比較" },
      { src: "/images/projects/repeater-analyze_ss_08.png", caption: "月次レポート" },
      { src: "/images/projects/repeater-analyze_ss_09.png", caption: "エクスポート機能" },
    ],
    challenge: "顧客の再来店を促進するための効果的な施策を立てるには、リピート率などのデータを正確に把握する必要がありましたが、手作業での集計と分析には限界がありました。",
    solution: "来店データをアップロードするだけで、リピート率、顧客単価、来店サイクルなどを自動で算出し、Streamlitを用いてインタラクティブなグラフで可視化するダッシュボードを開発しました。",
    result: "データに基づいた客観的な分析が可能となり、効果的なマーケティング施策の立案に貢献。結果として、リピート顧客の増加と売上向上に繋がりました。",
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
      { src: "/images/projects/salon-scraping_ss_01.png", caption: "アプリケーションの実行画面" },
      { src: "/images/projects/salon-scraping_ss_02.png", caption: "抽出されたデータ例" },
      { src: "/images/projects/salon-scraping_ss_03.png", caption: "検索条件設定" },
      { src: "/images/projects/salon-scraping_ss_04.png", caption: "データ出力形式" },
    ],
    challenge: "営業リストを作成するために、Webサイトから手作業で情報を収集するのは非効率的で、時間のかかる上にミスも発生しやすい作業でした。",
    solution: "SeleniumとBeautifulSoupを活用し、指定したエリアのサロン名、住所、電話番号といった情報を自動で収集し、CSVファイルとして一括出力するシステムを開発しました。",
    result: "営業リスト作成の時間を90%以上削減することに成功し、営業活動の生産性を大幅に向上させました。",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
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
        { src: "/images/projects/style-info-generator_ss_01.png", caption: "キーワード入力画面" },
        { src: "/images/projects/style-info-generator_ss_02.png", caption: "生成されたスタイル情報" },
        { src: "/images/projects/style-info-generator_ss_03.png", caption: "複数の提案パターン" },
        { src: "/images/projects/style-info-generator_ss_04.png", caption: "カスタマイズ機能" },
    ],
    challenge: "HotPepperBeautyに掲載するスタイル情報は、魅力的かつSEOに強いコンテンツを考える必要があり、創造的な負担が大きい作業でした。",
    solution: "Google Gemini APIを活用し、いくつかのキーワードを入力するだけで、複数のタイトル案や説明文、ハッシュタグの組み合わせを瞬時に自動生成する機能を実装しました。",
    result: "スタイル情報作成にかかる時間を大幅に短縮し、より多くのスタイルを掲載できるようになったことで、集客力の向上に貢献しました。",
    techStack: ["Python", "Streamlit", "Google Gemini API"],
    githubUrl: "https://github.com/mnhrk15/auto-title-generator.git",
  },
]; 