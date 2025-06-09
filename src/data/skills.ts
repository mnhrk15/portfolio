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
    title: "Programming Languages",
    skills: [
      { name: "Python", experience: "実務経験: インターンでのアプリ開発、研究" },
      { name: "C", experience: "授業での学習: 基本的なアルゴリズム実装" },
      { name: "MATLAB", experience: "授業での学習" },
      { name: "JavaScript", experience: "オンライン学習講座受講" },
      { name: "GAS", experience: "インターンでのツール開発" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Flask"},
      { name: "Playwright" },
      { name: "Requests" },
      { name: "BeautifulSoup" },
      { name: "Docker" },
      { name: "Streamlit" },
      { name: "Pandas" },
      { name: "Httpx" },
      { name: "Openpyxl" },
      { name: "Celery" },
      { name: "Redis" },
      { name: "Pillow" },
      { name: "Numpy" },
      { name: "Tqdm" }
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Google Gemini API", experience: "実務経験: インターンでのアプリ開発" },
      { name: "LSTM(Long Short-Term Memory)", experience: "研究で使用" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", experience: "基本的な操作は可能" },
      { name: "Docker", experience: "基本的な操作は可能" },
      { name: "Linux", experience: "授業での学習、VPSでの使用経験" },
    ],
  },
]; 