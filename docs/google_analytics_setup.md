# Google Analytics セットアップガイド

このガイドでは、ポートフォリオサイトにGoogle Analyticsを統合する手順を説明します。

## 📊 Google Analytics の設定

### ステップ1: Google Analyticsでプロパティを作成

#### 1. Google Analyticsにアクセス
```
https://analytics.google.com/
```

#### 2. アカウント作成（初めての場合）
1. 「測定を開始」をクリック
2. **アカウント名**: 例）`峯陽楽 Portfolio`
3. アカウントのデータ共有設定（推奨設定のままでOK）
4. 「次へ」をクリック

#### 3. プロパティの設定
1. **プロパティ名**: `hiraku-portfolio.site`
2. **レポートのタイムゾーン**: `日本`
3. **通貨**: `日本円（JPY）`
4. 「次へ」をクリック

#### 4. ビジネス情報の入力
1. **業種**: `テクノロジー` または `キャリア`
2. **ビジネスの規模**: `小規模（従業員数1～10人）`
3. **Analyticsの利用目的**: 
   - ☑️ ユーザー行動の調査
   - ☑️ サイトやアプリの改善
4. 「作成」をクリック

#### 5. データストリームの設定
1. **プラットフォーム**: 「**ウェブ**」を選択
2. **ウェブサイトのURL**: `https://hiraku-portfolio.site`
3. **ストリーム名**: `hiraku-portfolio.site`
4. 拡張計測機能（推奨設定）：
   - ☑️ ページビュー
   - ☑️ スクロール数
   - ☑️ 離脱クリック
   - ☑️ サイト内検索
   - ☑️ 動画エンゲージメント
   - ☑️ ファイルのダウンロード
5. 「ストリームを作成」をクリック

#### 6. 測定IDを取得 🔑
データストリームの詳細画面に表示される **測定ID** をコピーします：
```
G-XXXXXXXXXX
```
（`G-`で始まる10桁の英数字）

---

## 💻 Next.jsプロジェクトへの統合

### ステップ2: 環境変数の設定

#### 1. `.env.local` ファイルを作成
プロジェクトのルートディレクトリに `.env.local` ファイルを作成します：

```bash
# プロジェクトルートで実行
touch .env.local
```

#### 2. 測定IDを設定
`.env.local` ファイルに以下を記述：

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

⚠️ **重要**: 
- `G-XXXXXXXXXX` を、ステップ1で取得した実際の測定IDに置き換えてください
- `.env.local` ファイルは `.gitignore` に含まれているため、Gitにコミットされません

#### 3. Vercelへの環境変数設定

本番環境（Vercel）にもGoogle Analytics測定IDを設定します：

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. プロジェクト（hiraku-portfolio）を選択
3. 「Settings」タブをクリック
4. 左メニューから「Environment Variables」を選択
5. 新しい環境変数を追加：
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX`（実際の測定ID）
   - **Environment**: `Production`, `Preview`, `Development` すべてにチェック
6. 「Save」をクリック
7. プロジェクトを再デプロイ（自動デプロイが有効な場合は次回のpushで自動的に反映）

---

## ✅ 実装の確認

### ステップ3: 動作確認

#### 1. ローカル環境での確認

開発サーバーを起動：
```bash
npm run dev
```

ブラウザで開発者ツールを開き、以下を確認：

1. **Consoleタブ**: Google Analyticsのエラーがないか確認
2. **Networkタブ**: `google-analytics.com` へのリクエストが送信されているか確認

#### 2. 本番環境での確認

デプロイ後、以下の方法で確認できます：

##### Google Analytics リアルタイムレポート
1. [Google Analytics](https://analytics.google.com/) にログイン
2. プロパティを選択
3. 左メニューから「レポート」→「リアルタイム」を選択
4. 自分のサイトにアクセス
5. リアルタイムレポートに訪問者が表示されればOK ✅

##### Google Tag Assistant（Chrome拡張機能）
1. [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) をインストール
2. サイトにアクセスし、拡張機能をクリック
3. 「Google Analytics」が表示され、緑色のチェックマークがあればOK ✅

#### 3. 測定IDの確認

実装されている測定IDを確認：
```bash
# プロジェクトルートで実行
echo $NEXT_PUBLIC_GA_ID
```

または、ブラウザのソースコードで確認：
1. サイトにアクセス
2. ページを右クリック→「ページのソースを表示」
3. `G-` で検索
4. 測定IDが含まれていればOK

---

## 📈 Google Analyticsで確認できるデータ

### 基本的な指標

#### リアルタイムレポート
- 現在の訪問者数
- 閲覧されているページ
- 訪問者の地域
- 流入元（検索エンジン、SNSなど）

#### ユーザーレポート
- セッション数（訪問回数）
- ユーザー数（訪問者数）
- ページビュー数
- 平均セッション時間
- 直帰率

#### トラフィックソース
- **Organic Search**: Google検索などからの流入
- **Direct**: URLを直接入力
- **Referral**: 他のサイトからのリンク
- **Social**: SNSからの流入

#### ページレポート
- 各ページの閲覧数
- 平均滞在時間
- 離脱率

### SEO効果の測定

#### 検索キーワード（一部のみ表示）
- Google Search Consoleと連携することで、どのキーワードで検索されているか確認可能
- 「峯陽楽」で何回検索されているか追跡

#### コンバージョン目標の設定
以下のような目標を設定できます：
1. 特定のセクションへのスクロール（例：Projectsセクション）
2. 外部リンクのクリック（GitHubリンク）
3. ページ滞在時間（例：3分以上）

---

## 🔧 高度な設定（オプション）

### イベントトラッキング

特定のアクションを追跡する場合は、イベントを手動で送信できます：

```typescript
// 例：プロジェクト詳細モーダルを開いたとき
window.gtag('event', 'view_project', {
  project_name: 'ブログ自動生成アプリ',
  project_category: 'portfolio'
});
```

### Google Search Consoleとの連携

1. Google Analytics にログイン
2. 「管理」→「プロダクトのリンク」→「Search Consoleのリンク」
3. 「リンク」をクリック
4. Search Consoleプロパティを選択
5. 「次へ」→「送信」

連携することで、Google Analytics内でSEOデータも確認できます。

### カスタムディメンション

訪問者の属性をより詳しく追跡：
- ブラウザの種類
- デバイスの種類（PC、スマホ、タブレット）
- 画面解像度

---

## 📊 レポートの見方

### ダッシュボードの確認頻度

#### 毎日チェック
- リアルタイムレポート（訪問者がいるか確認）

#### 週1回チェック
- ユーザーレポート（訪問者数の推移）
- トラフィックソース（どこから来ているか）

#### 月1回チェック
- ページレポート（どのページが人気か）
- コンバージョン（目標達成状況）

### SEO効果の判定

Google Analyticsで以下が確認できれば、SEO対策が成功しています：

1. **Organic Search からの流入が増加**
   - 「峯陽楽」での検索からの訪問
2. **直帰率が低い**
   - 訪問者がサイト内を回遊している
3. **平均セッション時間が長い**
   - プロフィールやプロジェクトをじっくり見ている

---

## ❓ トラブルシューティング

### データが表示されない

#### 原因1: 環境変数が設定されていない
```bash
# 確認
echo $NEXT_PUBLIC_GA_ID

# 出力がない場合は .env.local を作成
```

#### 原因2: 本番環境で環境変数が設定されていない
- Vercelの管理画面で環境変数を確認
- 再デプロイが必要

#### 原因3: 広告ブロッカーが有効
- 広告ブロッカー（uBlock Origin、AdBlockなど）がGoogle Analyticsをブロックしている
- シークレットモードで確認

### リアルタイムレポートに表示されない

- データ反映には数分かかることがあります
- 5〜10分待ってから再確認

### 測定IDが間違っている

```bash
# .env.local の内容を確認
cat .env.local

# 測定IDが G-XXXXXXXXXX の形式か確認
```

---

## 📝 セキュリティとプライバシー

### Cookie同意バナー

日本国内では必須ではありませんが、EU圏からのアクセスがある場合は以下を検討：

1. Cookie同意バナーの設置
2. プライバシーポリシーページの作成

### IPアドレスの匿名化

Google Analytics 4（GA4）ではデフォルトでIPアドレスが匿名化されています。

---

## 🎯 まとめ

### 設定完了後の確認項目

- [ ] Google Analyticsでプロパティを作成
- [ ] 測定ID（G-XXXXXXXXXX）を取得
- [ ] `.env.local` に測定IDを設定
- [ ] Vercelに環境変数を設定
- [ ] 本番環境に再デプロイ
- [ ] リアルタイムレポートで動作確認
- [ ] Google Search Consoleと連携（オプション）

### 定期的にチェックすること

- 週1回: ユーザー数、ページビュー数
- 月1回: 検索流入の推移（「峯陽楽」での検索）
- 月1回: 人気のページ、滞在時間

---

## 🔗 参考リンク

- [Google Analytics 公式サイト](https://analytics.google.com/)
- [Next.js Third-Party Libraries](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [Google Analytics ヘルプセンター](https://support.google.com/analytics)
- [Google Tag Assistant](https://tagassistant.google.com/)

---

## 💡 次のステップ

1. データが蓄積されたら（1週間後〜）、ユーザー行動を分析
2. 人気のないページを改善
3. 流入元を分析し、SNS戦略を立てる
4. 「峯陽楽」での検索流入を追跡し、SEO効果を測定

