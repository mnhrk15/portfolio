export interface Skill {
  name: string;
  experience?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "AI-Driven Development",
    skills: [
      { name: "Claude Code", experience: "実務・研究の開発全般で日常的に活用" },
      { name: "Cursor" },
      { name: "Codex" },
      { name: "プロンプト設計", experience: "スキーマ検証×自動再生成など本番LLMパイプラインの設計" },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", experience: "実務3年以上: FastAPI / Django / Flask でのアプリ開発、研究" },
      { name: "TypeScript", experience: "実務: Next.js / React でのWebアプリ開発" },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Gemini API", experience: "実務: マルチモーダル生成・画像生成・検索グラウンディング" },
      { name: "OpenAI API", experience: "実務: 検索グラウンディングを用いた診断機能" },
      { name: "PyTorch", experience: "研究: Social-GAN / LSTM による歩行者軌道予測" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    skills: [
      { name: "Docker", experience: "実務: 開発・本番環境のコンテナ化" },
      { name: "Supabase" },
      { name: "Celery / Redis", experience: "実務: 非同期ジョブ・進捗通知" },
      { name: "Playwright", experience: "実務: ブラウザ自動操作による無人投稿システム" },
      { name: "pytest", experience: "研究: 535件のテストで品質担保" },
      { name: "Git / GitHub" },
      { name: "Linux (VPS)", experience: "実務: 本番サーバでの運用" },
    ],
  },
];
