import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // wwwありからwwwなしへリダイレクト
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hiraku-portfolio.site',
          },
        ],
        destination: 'https://hiraku-portfolio.site/:path*',
        permanent: true, // 301リダイレクト
      },
    ];
  },
  
  // SEO最適化
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
  
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // パフォーマンス最適化
  compress: true,
  
  // 本番環境でのソースマップ生成を無効化（パフォーマンス向上）
  productionBrowserSourceMaps: false,
};

export default nextConfig;
