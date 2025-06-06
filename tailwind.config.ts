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
        'light-gray': '#F9FAFB', // クリーンなライトグレー (Tailwind gray-50)
        'text-main': '#374151', // ダークグレー (本文)
        'text-dark': '#111827', // 黒 (見出し)
        'accent': '#2563EB', // モダンな青 (Tailwind blue-600)
        'gray-border': '#E5E7EB', // 罫線
        'gray-subtext': '#6B7280', // サブテキスト
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