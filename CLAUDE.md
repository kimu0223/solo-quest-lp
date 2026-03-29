# Solo Quest LP — CLAUDE.md

## 🔴 会話開始時の必須手順

**毎回の会話で最初に必ず `docs/site-index.md` を読むこと。**
このファイルを読めば `app/blog/posts.ts`（70K tokens）や各LPファイルを全読みしなくて済む。
記事ID・LP一覧・CTA定数・App StoreURL・注意事項がすべて記載されている。

## プロジェクト概要

子供向け教育アプリ「Solo Quest」のランディングページサイト。
子供が声でがんばったことを報告するとAIがRPG口調で称賛し、自律性を育てるアプリのマーケティングサイト。

- **本番URL**: https://solo-quest.jp
- **GitHub**: kimu0223/solo-quest-lp (public)
- **主なターゲット**: 小学生の子を持つ保護者

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router) + TypeScript
- **スタイリング**: Tailwind CSS v4
- **フォント**: @fontsource/inter（ローカル配信、Google Fonts不使用）
- **メール**: Resend API（コンタクトフォーム）
- **ビルダー**: Turbopack
- **デプロイ**: Vercel（チーム: kimu0223s-projects、プロジェクトID: prj_kHnMCfS6IoOKWANFFmwBDN6IpOOx）

## 外部サービス連携

### Vercel
- チームID: `team_2ctvNQLN1iTGL7qoRyuQOSVa`
- プロジェクトID: `prj_kHnMCfS6IoOKWANFFmwBDN6IpOOx`
- mainブランチへのpushで自動デプロイ
- Node.js 24.x ランタイム

### Supabase（solo-quest-lp プロジェクト）← LP専用
- プロジェクトID: `exknxhhhitdqxbjpdqsr`
- URL: `https://exknxhhhitdqxbjpdqsr.supabase.co`
- リージョン: ap-northeast-1（東京）
- ステータス: ACTIVE_HEALTHY
- テーブル一覧（RLS有効、service_roleのみアクセス可）:
  - `contact_submissions` — コンタクトフォーム送信データ
  - `ab_test_results` — A/Bテスト表示・CV・CTAクリック記録
  - `page_conversions` — LPページごとのCTAクリック・コンバージョン
- **環境変数**: `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` をVercelに設定する

### Supabase（solo-quest プロジェクト）← アプリ専用・LP側からは触らない
- プロジェクトID: `irosahorhknyzchgwdtx`
- リージョン: ap-northeast-1（東京）
- テーブル: profiles, players, quests, rewards, appraisal_logs

### Google Analytics 4
- 計測ID: `G-284MJPXY48`
- layout.tsx でグローバルに読み込み済み
- カスタムイベント: `cta_click`, `ab_test_view`, `ab_test_conversion`, `scroll_depth`, `contact_form_submit`

## ディレクトリ構成

```
app/
  layout.tsx          # グローバルレイアウト（GA4・JSON-LD・OGP）
  page.tsx            # トップページ
  lp/                 # LPページ群（7種）
    priority/         # 優先順位LP（A/Bテスト実装済み）
    time-management/  # 時間管理LP（A/Bテスト実装済み）
    homework/         # 宿題LP
    gaming/           # ゲームLP
    morning/          # 朝の支度LP
    concentration/    # 集中力LP（紫テーマ）
    task-management/  # タスク管理LP
  blog/               # ブログ記事（37記事、静的データ）
  faq/                # FAQ
  contact/            # コンタクトフォーム
  api/contact/        # Resendメール送信API
  legal/ privacy/ terms/ site-map/  # 法的ページ
components/
  CTAButton.tsx       # GA4イベント計測付きCTAボタン（client component）
  AbTestCta.tsx       # A/Bテスト用CTAコンポーネント
  AbTestTracker.tsx   # A/Bテスト表示追跡（GA4送信）
  Header.tsx          # モバイルハンバーガー対応ヘッダー
  Footer.tsx          # フッター
lib/
  ab-test.ts          # A/Bテスト設定・GA4トラッキング関数
middleware.ts         # A/Bテストのバリアント振り分け（Cookie）
scripts/
  ga4-report.mjs      # GA4 Data APIレポートスクリプト
  GA4_SETUP.md        # GA4セットアップ手順
public/
  screenshots/        # アプリのスクリーンショット6枚
  logo.png            # ロゴ（98KB最適化済み）
```

## A/Bテスト

`middleware.ts` でCookieにバリアント（a/b）を振り分け。

登録済みテスト（`lib/ab-test.ts`）:
- `priority-cta`: /lp/priority のCTAコピー
- `priority-hero`: /lp/priority のヒーロー見出し
- `time-cta`: /lp/time-management のCTAコピー
- `lp-hub-layout`: /lp のレイアウト

新しいA/Bテストを追加する手順:
1. `lib/ab-test.ts` の `AB_TESTS` にエントリ追加
2. `middleware.ts` でCookieマッチング追加（既存パターン参照）
3. 対象ページに `AbTestCta` + `AbTestTracker` を追加

## SEO・構造化データ

- `layout.tsx`: Organization + WebSite JSON-LD（サイト全体）
- 各LPページ: FAQPage JSON-LD + canonical + OGP
- ブログ記事: Article + BreadcrumbList JSON-LD + generateMetadata
- `app/opengraph-image.tsx`: OG画像を動的生成（Next.js ImageResponse）
- `app/sitemap.ts` / `app/robots.ts`: 自動生成

## 開発コマンド

```bash
npm run dev          # 開発サーバー起動
npm run build        # ビルド
npm run lint         # ESLint
npm run analytics    # GA4レポート出力（要: GOOGLE_APPLICATION_CREDENTIALS）
```

## 環境変数（app/.env.local）

```
RESEND_API_KEY=         # コンタクトフォームのメール送信
GOOGLE_APPLICATION_CREDENTIALS=  # GA4 Data API認証（scripts/ga4-report.mjs用）
```

## 重要な制約・注意事項

- **フォント**: Google Fontsは使用しない（ビルドエラー実績あり）。必ず @fontsource/* を使うこと
- **edge runtime**: `generateStaticParams` と同一セグメントに `export const runtime = 'edge'` を設定しない（競合エラーが起きる）
- **静的searchParams**: `searchParams` を使うページには `export const dynamic = 'force-dynamic'` が必要
- **ブログ記事**: `app/blog/posts.ts` に静的データとして管理（現在37記事）。CMSは未導入
- **photoフォルダ**: 削除済み。スクリーンショットは `public/screenshots/` に配置

## Vercel・Supabase MCP でできること

### Vercel MCP
- デプロイ状況の確認・ロールバック
- ビルドログ・ランタイムログの確認
- デプロイの手動トリガー
- ドメイン管理

### Supabase MCP
- テーブルスキーマの確認・変更（apply_migration）
- SQLクエリ実行（データ分析）
- Edge Functions のデプロイ
- LPからSupabaseにデータを書き込む機能の追加（フォーム→DB保存等）
- appraisal_logs テーブルを使ったAI称賛データ分析

## 今後の連携アイデア（未実装）

- コンタクトフォームの送信データをSupabaseに保存
- A/Bテスト結果をSupabaseに記録してリアルタイム分析
- Supabaseの `appraisal_logs` を集計してLPに「利用実績」として表示
- Vercel Edge Functionsを使ったパーソナライゼーション
