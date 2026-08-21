export interface ProfileData {
  name: {
    japanese: string;
    english: string;
  };
  contact: {
    email: {
      user: string;
      domain: string;
      tld: string;
    };
    github: string;
  };
  bio: string;
  internship: {
    company: string;
    period: string;
    description: string;
  };
  certifications: string[];
  education: string[];
}

export const profileData: ProfileData = {
  name: {
    japanese: "峯 陽楽",
    english: "Mine Hiraku"
  },
  contact: {
    email: {
      user: "mnhrk.jh15",
      domain: "gmail",
      tld: "com"
    },
    github: "https://github.com/mnhrk15"
  },
  bio: "研究とインターンの両輪で、「生成AIを使いこなして素早く形にする開発力」と「課題を要件に落とし込む力」を磨いてきました。大学院では深層学習による歩行者軌道予測と自動運転経路計画を統合するシミュレーション基盤を設計・開発し、国際会議AVEC'26にフルペーパーが採択されました。インターンでは、Claude Code等のAIコーディングツールを駆使して業務効率化・自動化アプリ約10件を要件定義から開発・運用まで担当し、うち3件は100以上の美容サロンで実利用されています。",
  internship: {
    company: "美容室集客支援ベンチャー企業",
    period: "2023年3月 ~ 現在（3年以上継続中）",
    description: "社内業務・美容室マーケティング業務を効率化するAIアプリ・自動化アプリ約10件を、要件定義から設計・実装・運用まで一人称で開発。うち3件は100以上の美容サロンで実利用されています。社内に専任エンジニアがいない環境で、ヒアリングによる要件化から技術選定・品質担保・本番運用まで単独で判断・遂行してきました。また、インターン生6名のまとめ役として、タスクのアサイン・成果物レビュー・経営層への報告・ミーティングの進行・採用活動も担当しています。"
  },
  certifications: [
    "基本情報技術者 (2022年5月)",
    "TOEIC L&R Test 755点 (2024年3月)",
    "応用情報技術者 (2024年12月)"
  ],
  education: [
    "九州工業大学 情報工学部 知的システム工学科 学士課程 (卒業: 2025年3月)",
    "九州工業大学 大学院 情報工学府 情報創成工学専攻 博士前期課程 (卒業予定: 2027年3月)"
  ]
}; 