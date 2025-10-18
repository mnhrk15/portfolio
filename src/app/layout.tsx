import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiraku-portfolio.site"),
  title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
  description: "峯陽楽（みね ひらく / Mine Hiraku）のポートフォリオサイト。九州工業大学在学中。AI駆動開発で業務効率化を実現するエンジニア。Python、Google Gemini API、Flask等を使用したアプリケーション開発実績多数。基本情報技術者・応用情報技術者保有。",
  keywords: ["峯陽楽", "Mine Hiraku", "みね ひらく", "AIエンジニア", "Python開発者", "九州工業大学", "ポートフォリオ", "AI駆動開発", "Google Gemini API", "Flask", "基本情報技術者", "応用情報技術者"],
  authors: [{ name: "峯陽楽", url: "https://github.com/mnhrk15" }],
  creator: "峯陽楽",
  publisher: "峯陽楽",
  alternates: {
    canonical: "https://hiraku-portfolio.site",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hiraku-portfolio.site",
    siteName: "峯陽楽 ポートフォリオ",
    title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
    description: "峯陽楽（みね ひらく）のポートフォリオサイト。AI駆動開発で業務効率化を実現するエンジニア。九州工業大学在学中。",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "峯陽楽のプロフィール写真",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
    description: "AI駆動開発で業務効率化を実現するエンジニア、峯陽楽のポートフォリオサイト",
    images: ["/images/profile.png"],
    creator: "@mnhrk15",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Consoleで取得したコードをここに追加
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "峯陽楽",
    alternateName: "Mine Hiraku",
    url: "https://hiraku-portfolio.site",
    image: "https://hiraku-portfolio.site/images/profile.png",
    jobTitle: "AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "美容室集客支援ベンチャー企業"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "九州工業大学",
      department: "情報工学部 知的システム工学科"
    },
    knowsAbout: ["Python", "AI Development", "Flask", "Google Gemini API", "Machine Learning", "Web Development"],
    sameAs: [
      "https://github.com/mnhrk15"
    ],
    description: "AI駆動開発で業務効率化を実現するエンジニア。Python、Google Gemini API、Flask等を使用したアプリケーション開発実績多数。"
  };

  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${noto.variable} ${montserrat.variable} bg-light-gray font-sans text-text-main antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
