# www付きURL問題の解決ガイド

## 🚨 問題の概要

Google Search Consoleで以下のエラーが表示されていました：

```
URLがGoogleに登録されていません
ページはインデックスに登録されていません。重複しています。
ユーザーにより、正規ページとして選択されていません

Googleが選択した正規URL: https://www.hiraku-portfolio.site/
```

**問題**: Googleがwww付きのURLを正規URLとして認識していますが、実際のサイトはwwwなしです。

## ✅ 実施した修正

### 1. Next.jsでのリダイレクト設定 (`next.config.ts`)

www付きのURLからwwwなしのURLへ301リダイレクト：

```typescript
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
```

### 2. 正規URLの明示 (`src/app/layout.tsx`)

メタデータに正規URLを追加：

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://hiraku-portfolio.site"),
  alternates: {
    canonical: "https://hiraku-portfolio.site",
  },
  // ... 他の設定
}
```

### 3. Vercelレベルでのリダイレクト (`vercel.json`)

Vercelの設定ファイルでも同様のリダイレクトを設定：

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "host",
          "value": "www.hiraku-portfolio.site"
        }
      ],
      "destination": "https://hiraku-portfolio.site/$1",
      "permanent": true
    }
  ]
}
```

## 📋 デプロイ後の確認手順

### ステップ1: リダイレクトの動作確認

1. ブラウザで以下のURLにアクセス：
   ```
   https://www.hiraku-portfolio.site
   ```

2. 自動的に以下にリダイレクトされることを確認：
   ```
   https://hiraku-portfolio.site
   ```

3. ブラウザの開発者ツールで確認：
   - ネットワークタブを開く
   - ステータスコード `301` を確認
   - Location ヘッダーが `https://hiraku-portfolio.site` になっていることを確認

### ステップ2: HTML内の正規URLタグ確認

1. `https://hiraku-portfolio.site` にアクセス
2. ページのソースコードを表示（右クリック → ページのソースを表示）
3. 以下のタグがあることを確認：

```html
<link rel="canonical" href="https://hiraku-portfolio.site">
```

### ステップ3: Google Search Consoleで再検査

修正をデプロイ後、Google Search Consoleで再度URL検査を実行：

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. 左メニューの「**URL検査**」をクリック
3. `https://hiraku-portfolio.site` を入力
4. 「**インデックス登録をリクエスト**」をクリック
5. 1～2分待つ

### ステップ4: 期待される結果

数日後にURL検査を再実行すると、以下のように表示されるはずです：

- ✅ **URLはGoogleに登録されています**
- ✅ **Googleが選択した正規URL**: `https://hiraku-portfolio.site`
- ✅ **ユーザーが指定した正規URL**: `https://hiraku-portfolio.site`

## 🔍 Vercelでのドメイン設定確認

### 現在の設定を確認

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. プロジェクト（hiraku-portfolio）を選択
3. 「**Settings**」タブ → 「**Domains**」セクション

### 推奨設定

以下の2つのドメインが登録されていることを確認：

| ドメイン | タイプ | 設定 |
|---------|--------|------|
| `hiraku-portfolio.site` | Primary | メインドメイン |
| `www.hiraku-portfolio.site` | Redirect | `hiraku-portfolio.site` にリダイレクト |

### www.hiraku-portfolio.site の設定手順

もし `www.hiraku-portfolio.site` が設定されていない場合：

1. Vercel Dashboard → Domains
2. 「**Add Domain**」をクリック
3. `www.hiraku-portfolio.site` を入力
4. 「**Add**」をクリック
5. **Redirect to**: `hiraku-portfolio.site` を選択
6. 保存

## 📊 問題の原因

### なぜこの問題が発生したか？

1. **DNSの設定**: wwwありとwwwなしの両方のAレコードが設定されている場合
2. **正規URLの未指定**: HTMLに `<link rel="canonical">` タグがなかった
3. **リダイレクトの未設定**: www付きからwwwなしへのリダイレクトがなかった

### Googleの動作

Googleクローラーは以下の優先順位で正規URLを判断します：

1. **ユーザー指定の正規URL** (`<link rel="canonical">`)
2. **サイトマップ内のURL**
3. **リダイレクト設定**
4. **最初に発見したURL**

今回は正規URLが明示されていなかったため、Googleが独自に判断してwww付きを選択しました。

## ⏰ インデックスまでのタイムライン（修正後）

| 期間 | 状態 | アクション |
|------|------|-----------|
| **デプロイ直後** | リダイレクト動作開始 | リダイレクト確認 |
| **1～3日** | Googleが再クロール | URL検査でリクエスト |
| **3～7日** | 正規URL更新 | 状態確認 |
| **1～2週間** | インデックス完了 | 検索結果確認 |

## 🚀 次のステップ

### 今すぐやること

1. ✅ **コミット & プッシュ**
   ```bash
   git add .
   git commit -m "fix: www付きURLからのリダイレクト設定を追加"
   git push origin main
   ```

2. ✅ **Vercelで自動デプロイ確認**
   - Vercel Dashboardでデプロイ完了を確認

3. ✅ **リダイレクト動作確認**
   - `https://www.hiraku-portfolio.site` → `https://hiraku-portfolio.site` にリダイレクトされるか確認

4. ✅ **Google Search Consoleで再検査**
   - URL検査 → インデックス登録をリクエスト

### 3日後にやること

- [ ] Google Search Consoleで再度URL検査
- [ ] 正規URLが `https://hiraku-portfolio.site` になっているか確認

### 1週間後にやること

- [ ] `site:hiraku-portfolio.site` で検索
- [ ] インデックス登録状況を確認
- [ ] 「峯陽楽」で検索して表示されるか確認

## ❓ よくある質問

### Q1: なぜwww付きとwwwなし両方が存在するの？

**A**: DNSの設定で両方のAレコードが設定されている場合、両方のURLでアクセス可能になります。
どちらか一方を正規URLとして統一する必要があります。

### Q2: wwwありとwwwなし、どちらが正しい？

**A**: どちらでも構いませんが、**一貫性が重要**です。
このプロジェクトでは **wwwなし** を正規URLとして設定しています。

### Q3: 修正後もまだ「重複しています」エラーが出る？

**A**: 修正が反映されるまで数日かかります。
Googleが再クロールするまで待ちましょう。

### Q4: サイトマップも更新が必要？

**A**: いいえ。`sitemap.ts` ではすでに `https://hiraku-portfolio.site` を使用しているため、更新不要です。

### Q5: robots.txtも確認すべき？

**A**: はい。以下のURLで確認してください：
```
https://hiraku-portfolio.site/robots.txt
```

正常であれば以下が表示されます：
```
User-Agent: *
Allow: /

Sitemap: https://hiraku-portfolio.site/sitemap.xml
```

## 📝 チェックリスト

修正完了後の確認項目：

### コード修正
- [x] `next.config.ts` にリダイレクト設定追加
- [x] `src/app/layout.tsx` に正規URL設定追加
- [x] `vercel.json` 作成

### デプロイ
- [ ] Git にコミット & プッシュ
- [ ] Vercel で自動デプロイ完了

### 動作確認
- [ ] `https://www.hiraku-portfolio.site` → `https://hiraku-portfolio.site` にリダイレクト
- [ ] HTML に `<link rel="canonical">` タグが存在
- [ ] Google Search Console で再検査実施

### 結果確認（数日後）
- [ ] URL検査で正規URLが正しい
- [ ] `site:` 検索でインデックス確認
- [ ] 「峯陽楽」で検索結果表示

## 🎯 期待される結果

この修正により：

1. **www付きURLは自動的にwwwなしURLにリダイレクト**
2. **Googleは正しい正規URL（wwwなし）を認識**
3. **重複コンテンツの問題が解消**
4. **インデックス登録が正常に進む**

## 📞 追加のサポート

さらに詳しい情報が必要な場合：

- **Next.js リダイレクト**: https://nextjs.org/docs/app/api-reference/next-config-js/redirects
- **Vercel リダイレクト**: https://vercel.com/docs/projects/project-configuration#redirects
- **Google 正規URL設定**: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

---

**最終更新日**: 2025年10月17日

