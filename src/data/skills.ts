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
      { name: "Flask", experience: "実務経験: インターンでのアプリ開発" },
      { name: "Pandas" },
      { name: "Pydantic" },
      { name: "BeautifulSoup" },
      { name: "httpx" },
      { name: "openpyxl" },
      { name: "asyncio" },
      { name: "PyQt6" },
      { name: "Playwright" },
      { name: "Requests" },
      { name: "Selenium" },
      { name: "NumPy" },
      { name: "PyTorch" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Google Gemini API", experience: "実務経験: インターンでのアプリ開発" },
      { name: "LSTM", experience: "研究で使用" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", experience: "実務経験" },
      { name: "Docker", experience: "実務経験" },
      { name: "Linux", experience: "授業での学習、VPSでの使用経験" },
      { name: "VPS", experience: "アプリデプロイ経験" },
      { name: "AI-Driven Development", experience: "生成AIを活用したコーディング" },
    ],
  },
]; 