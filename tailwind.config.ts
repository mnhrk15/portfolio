import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-white': '#FFFFFF', // 白
        'light-gray': '#F5F5F5', // ライトグレー
        'text-main': '#333333', // ダークグレー (本文)
        'text-dark': '#000000', // 黒 (見出し)
        'accent': '#FF7A00', // オレンジ
        'gray-border': '#CCCCCC', // 罫線
        'gray-subtext': '#999999', // サブテキスト
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config; 