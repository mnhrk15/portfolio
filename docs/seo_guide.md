# SEO最適化ガイド

このドキュメントは、「峯陽楽」でGoogle検索上位表示を目指すための設定ガイドです。

## 実装済みのSEO対策

### 1. メタデータ最適化 ✅
- タイトルタグに「峯陽楽（Mine Hiraku）」を含める
- 詳細なメタディスクリプション（200文字以内）
- キーワードメタタグの設定
- OGP（Open Graph Protocol）タグの設定
- Twitter Cardの設定

### 2. 構造化データ ✅
- JSON-LD形式のschema.org Person型を実装
- Googleが人物情報を理解しやすくする

### 3. サイトマップとrobots.txt ✅
- `/sitemap.xml` - 自動生成されるサイトマップ
- `/robots.txt` - 検索エンジンクローラーへの指示

### 4. コンテンツ最適化 ✅
- H1タグに「峯陽楽（Mine Hiraku）」を配置
- 画像のaltテキストに名前を含める
- セマンティックHTMLの使用

### 5. パフォーマンス最適化 ✅
- 画像の最適化（AVIF/WebP形式）
- 圧縮の有効化
- DNS Prefetchの有効化

### 6. OGP画像 ✅
- 動的に生成されるOGP画像（1200x630px）
- SNSシェア時に表示される画像

## デプロイ後に必要な設定

### 1. Google Search Console の設定 🔴 **重要**

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. サイトを追加（プロパティを追加）
3. ドメイン所有権の確認
   - 確認コードを取得
   - `src/app/layout.tsx` の `metadata.verification.google` に追加:
   ```typescript
   verification: {
     google: "your-verification-code-here",
   },
   ```
4. 再デプロイ

### 2. サイトマップの送信

1. Google Search Console にログイン
2. 左メニューの「サイトマップ」をクリック
3. 新しいサイトマップのURLを入力: `https://hiraku-portfolio.site/sitemap.xml`
4. 「送信」をクリック

### 3. URL検査とインデックス登録のリクエスト

1. Google Search Console で「URL検査」を選択
2. サイトのURL `https://hiraku-portfolio.site` を入力
3. 「インデックス登録をリクエスト」をクリック

### 4. Vercelの本番URLの確認と更新

デプロイ後、以下のファイル内のURLを本番環境のURLに更新してください：

- `src/app/layout.tsx` - openGraph.url
- `src/app/sitemap.ts` - baseUrl
- `src/app/robots.ts` - sitemap URL

✅ 現在の設定: `https://hiraku-portfolio.site`

### 5. Google Analytics の設定（任意）

1. [Google Analytics](https://analytics.google.com/) でプロパティを作成
2. 測定IDを取得
3. Next.jsにGoogle Analyticsを統合:

```bash
npm install @next/third-parties
```

`src/app/layout.tsx` に追加:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// body閉じタグの前に追加
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## 外部リンクの構築（オフページSEO）

### 1. GitHubプロフィールの最適化
- GitHubプロフィールにポートフォリオサイトのURLを追加
- READMEファイルにWebサイトへのリンクを含める

### 2. SNSプロフィールの作成・更新
以下のプラットフォームでプロフィールを作成し、WebサイトURLを記載：
- LinkedIn
- Twitter/X
- Qiita
- Zenn
- note

### 3. 技術ブログ・記事の執筆
- Qiita、Zenn、noteなどに技術記事を投稿
- 記事内で自己紹介として「峯陽楽」を記載
- プロフィール欄にWebサイトURLを記載

### 4. 大学のWebサイト
- 研究室のWebサイトに学生紹介として掲載されているか確認
- 可能であればポートフォリオサイトへのリンクを依頼

## SEO効果の確認方法

### 1. Google Search Consoleでの確認
- 「検索パフォーマンス」で表示回数、クリック数、掲載順位を確認
- 「カバレッジ」でインデックス状況を確認
- 「拡張」で構造化データのエラーを確認

### 2. Google検索での確認
以下のキーワードで検索して順位を確認：
- `峯陽楽`
- `Mine Hiraku`
- `峯陽楽 エンジニア`
- `峯陽楽 AI`
- `峯陽楽 九州工業大学`

### 3. インデックス確認
Google検索で以下を入力：
```
site:hiraku-portfolio.site
```

インデックスされているページ数が表示されます。

## 効果が出るまでの期間

- **インデックス登録**: 数日～1週間
- **検索結果への表示**: 1～2週間
- **上位表示**: 1～3ヶ月

※新規ドメインの場合、効果が出るまで時間がかかります。
継続的なコンテンツ更新と外部リンクの構築が重要です。

## 継続的な最適化

### 月次チェックリスト
- [ ] Google Search Consoleで検索パフォーマンスを確認
- [ ] 「峯陽楽」での検索順位を確認
- [ ] プロフィール情報の更新（新しいプロジェクトの追加）
- [ ] 技術ブログの投稿（月1回以上）

### コンテンツ更新時の注意点
- プロジェクトを追加したら、スクリーンショットのaltテキストを最適化
- 新しいスキルを追加したら、JSON-LDも更新
- 大きな変更後は、Google Search Consoleで再クロールをリクエスト

## トラブルシューティング

### インデックスされない場合
1. robots.txtが正しく設定されているか確認
2. Google Search ConsoleでURL検査を実施
3. サイトマップが正しく送信されているか確認
4. noindexタグが設定されていないか確認

### 順位が上がらない場合
1. 競合調査（「峯陽楽」で検索して上位サイトを分析）
2. コンテンツの充実化（プロジェクト数を増やす）
3. 外部リンクの構築を強化
4. 技術ブログでの露出を増やす

## 参考リソース

- [Google検索セントラル](https://developers.google.com/search)
- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Console ヘルプ](https://support.google.com/webmasters)
- [Schema.org Person](https://schema.org/Person)

