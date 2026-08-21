import { MetadataRoute } from 'next'

// 1ページ構成のため、エントリはトップのみ。
// フラグメント付きURL（/#about 等）は検索エンジンが個別ページとして扱わないため掲載しない。
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hiraku-portfolio.site',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
