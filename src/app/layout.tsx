import type { Metadata } from "next";
import { IBM_Plex_Sans_JP, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plexSansJP = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-sans-jp",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiraku-portfolio.site"),
  title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
  description: "峯陽楽（みね ひらく / Mine Hiraku）のポートフォリオサイト。九州工業大学大学院在学中。生成AIを活用した業務効率化アプリを要件定義から開発・運用し、うち3件は100以上の美容サロンで実利用。国際会議AVEC'26フルペーパー採択。基本情報技術者・応用情報技術者保有。",
  keywords: ["峯陽楽", "Mine Hiraku", "みね ひらく", "生成AI", "Python開発者", "九州工業大学", "ポートフォリオ", "AI駆動開発", "Google Gemini API", "Next.js", "FastAPI", "基本情報技術者", "応用情報技術者"],
  authors: [{ name: "峯陽楽", url: "https://github.com/mnhrk15" }],
  creator: "峯陽楽",
  publisher: "峯陽楽",
  alternates: {
    canonical: "https://hiraku-portfolio.site",
  },
  // OG画像・Twitter画像はファイル規約の opengraph-image.tsx（1200x630）が使われるため、ここでは指定しない
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hiraku-portfolio.site",
    siteName: "峯陽楽 ポートフォリオ",
    title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
    description: "峯陽楽（みね ひらく）のポートフォリオサイト。生成AIを活用した業務効率化アプリの開発・運用実績多数。九州工業大学大学院在学中。",
  },
  twitter: {
    card: "summary_large_image",
    title: "峯陽楽（Mine Hiraku）| ポートフォリオ",
    description: "峯陽楽（みね ひらく）のポートフォリオサイト。生成AIを活用した業務効率化アプリの開発・運用実績多数。九州工業大学大学院在学中。",
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
    affiliation: {
      "@type": "EducationalOrganization",
      name: "九州工業大学 大学院",
      department: "情報工学府 情報創成工学専攻"
    },
    knowsAbout: ["Python", "TypeScript", "Generative AI", "Google Gemini API", "Machine Learning", "Next.js", "FastAPI", "Web Development"],
    sameAs: [
      "https://github.com/mnhrk15"
    ],
    description: "生成AIを活用した業務効率化アプリを要件定義から開発・運用。うち3件は100以上の美容サロンで実利用。国際会議AVEC'26フルペーパー採択。"
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
        className={`${plexSansJP.variable} ${plexMono.variable} bg-base-white font-sans text-text-main antialiased`}
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
