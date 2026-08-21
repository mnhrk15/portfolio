export interface Publication {
  authors: string;
  title: string;
  venue: string;
  date: string;
  format: string;
  badge: "国際会議（査読あり）" | "国内講演会（査読なし）";
  status?: string;
  url?: string;
}

export interface ResearchData {
  theme: string;
  overview: string;
  codeUrl?: string;
  publications: Publication[];
}

export const researchData: ResearchData = {
  theme: "歩行者軌道予測 × 自動運転経路計画",
  overview:
    "深層学習による歩行者軌道予測と自動運転の経路計画の統合をテーマに研究しています。歩行者が自車を能動的に回避する双方向の相互作用を再現した閉ループシミュレーション基盤（Python 約3.2万行・pytest 535件）を自ら設計・開発し、等速モデル・LSTM・Social-GAN の3つの予測手法を安全性・効率性の統一指標で比較評価しています。",
  codeUrl: "https://github.com/mnhrk15/integrated_path_planning",
  publications: [
    {
      authors: "Hiraku MINE, Bo YANG",
      title:
        "Evaluation of Deep Learning-Based Trajectory Prediction for Autonomous Path Planning Considering Pedestrian Interactions",
      venue: "17th International Symposium on Advanced Vehicle Control (AVEC'26)",
      date: "2026年9月7日〜11日（つくば）",
      format: "フルペーパー",
      badge: "国際会議（査読あり）",
      status: "採択済み・発表予定",
      url: "https://avec.jsae.or.jp/2026/",
    },
    {
      authors: "峯 陽楽, 楊 波",
      title: "歩行者との相互作用を考慮した自動運転経路計画手法の提案と基礎検証",
      venue:
        "日本機械学会ロボティクス・メカトロニクス講演会2026 in Fukuoka（ROBOMECH2026）",
      date: "2026年6月30日（福岡）",
      format: "ポスター発表",
      badge: "国内講演会（査読なし）",
      status: "発表済み",
      url: "https://robomech.org/2026/",
    },
  ],
};
