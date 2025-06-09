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
  bio: "AIを用いたビジネス課題の解決に強い関心を持っています。特に、生成AIの最新動向にキャッチアップし、それを活用して具体的なビジネス課題を解決することに情熱を注いでいます。インターンシップでは、AI駆動開発による迅速なプロトタイピングと業務効率化で成果を上げ、「課題発見から解決までを一気通貫でやり遂げる力」を培いました。IT技術の力でビジネスの成長に貢献できるエンジニアを目指しています。",
  internship: {
    company: "美容室集客支援ベンチャー企業",
    period: "2023年3月 ~ 現在",
    description: "AIを活用した社内業務効率化アプリや、クライアントである美容室向けの業務効率化ツールを開発。技術者がいない環境で、生成AIを活用しながら独学で複数のアプリを開発しました。インターン内では6名のインターン生のリーダーとして、チームのマネジメントを行いました。"
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