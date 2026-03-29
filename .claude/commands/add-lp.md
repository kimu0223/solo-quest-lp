# LPページ追加スキル

Solo Quest LP に新しいランディングページを追加する。

## 手順

### 1. site-index を読む
まず `docs/site-index.md` を読んで以下を確認する：
- 既存LPとの重複・テーマの被り
- カバーできていないテーマ（候補リストあり）
- 既存LPのテーマ色と被らないか

### 2. ユーザーの意図を確認
引数（$ARGUMENTS）があればそれをテーマにする。確認事項：
- LP のテーマ・ターゲットキーワード
- URL スラッグ（例: `/lp/school`）
- テーマカラー（既存と被らないもの）

### 3. LPページを作成
`app/lp/[スラッグ]/page.tsx` を新規作成する。

#### 参考にするファイル
```
app/lp/homework/page.tsx   # 基本構成の参考
app/lp/study/page.tsx      # FAQをfaqItems配列で管理する書き方の参考
```

#### 必須要素チェックリスト
- [ ] `metadata` — title・description・canonical・openGraph すべて設定
- [ ] `faqJsonLd` — FAQPage Schema（4問以上）を `<script>` タグで出力
- [ ] `Header` / `Footer` コンポーネント使用
- [ ] `CTAButton` — `href` は必ず `https://apps.apple.com/jp/app/solo-quest/id6739063143`
- [ ] `eventLabel` — `lp_[スラッグ]_hero_cta` / `lp_[スラッグ]_bottom_cta`
- [ ] セクション構成: Hero → 共感 → 原因 → 解決策 → 機能 → FAQ → 最終CTA → 回遊リンク

#### テーマカラー選択（被り禁止）
| 既存LP | 使用カラー |
|--------|---------|
| time-management | teal |
| priority | indigo（A/Bテスト用） |
| homework | amber |
| gaming | violet |
| morning | sky |
| concentration | purple |
| task-management | emerald |
| study | indigo |

新規LPには上記以外を選ぶ（rose, orange, cyan, lime など）

### 4. 関連ドキュメントを更新
- `docs/site-index.md` のLPページ一覧に追加
- `docs/seo-keywords.md` に新LPのURLとキーワードを追加
- `app/lp/page.tsx`（LPハブ）にリンクカードを追加する

### 5. ビルド確認 & デプロイ
```bash
npm run build
git add -A
git commit -m "feat: LP追加 — /lp/[スラッグ]"
git push origin main
```

## 注意事項
- Google Fonts禁止
- `export const runtime = 'edge'` と `generateStaticParams` を同一ファイルに書かない
- TypeScriptエラーなし
- App StoreリンクURL: `https://apps.apple.com/jp/app/solo-quest/id6739063143`
