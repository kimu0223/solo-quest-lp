# GA4 + Search Console 統合レポート セットアップ手順

## 使えるコマンド

| コマンド | 内容 |
|---------|------|
| `npm run report` | **GA4 + Search Console 統合レポート**（新） |
| `npm run analytics` | GA4 のみのレポート（旧） |

---

## セットアップ手順

### Step 1. Google Cloud でサービスアカウントを作成

1. https://console.cloud.google.com/ を開く
2. プロジェクトを選択（または新規作成）
3. 「APIとサービス」→「ライブラリ」で以下の2つを有効化:
   - **Google Analytics Data API**
   - **Google Search Console API**（`webmasters` API）
4. 「IAMと管理」→「サービスアカウント」→「+ サービスアカウントを作成」
   - 名前: `solo-quest-analytics-reader` など
   - ロール: 付与しない（各サービス側で設定する）
5. 作成後、サービスアカウントをクリック→「キー」→「鍵を追加」→「新しい鍵を作成」→ **JSON**
6. ダウンロードしたファイルを **`credentials.json`** という名前でプロジェクトルートに配置

> ⚠️ `credentials.json` は `.gitignore` に追加済みです。Gitにコミットしないこと。

---

### Step 2. GA4 にサービスアカウントを追加

1. https://analytics.google.com/ → Solo Quest プロパティを選択
2. 左下「管理」→ プロパティ列「**プロパティのアクセス管理**」
3. 「+」→「ユーザーを追加」
4. メールアドレス: `credentials.json` 内の `client_email` の値を貼り付け
5. 役割: **閲覧者** → 追加

---

### Step 3. Search Console にサービスアカウントを追加

1. https://search.google.com/search-console/ → solo-quest.jp プロパティを選択
2. 左メニュー「設定」→「**ユーザーと権限**」
3. 「ユーザーを追加」
4. メールアドレス: Step 2 と同じ `client_email` の値を貼り付け
5. 権限: **制限付き**（Restricted） → 追加

---

### Step 4. 実行

```bash
# GA4 + Search Console 統合レポート
npm run report

# GA4 のみ（旧スクリプト）
npm run analytics
```

---

## レポートの見方

### GA4 セクション（1〜8）
| セクション | 内容 |
|-----------|------|
| 1. サイト全体サマリー | セッション・直帰率・滞在時間・CVなど |
| 2. 流入チャネル | オーガニック・SNS・直接流入の比較 |
| 3. デバイス別 | モバイル vs デスクトップの差異 |
| 4. ページ別 | 上位30ページのPV・直帰率・CV |
| 5. イベント | GA4カスタムイベント一覧 |
| 6. CTAクリック | CTAボタンのクリック数（LP別） |
| 7. A/Bテスト結果 | バリアントA/Bのイベント・CV比較 |
| 8. 曜日別 | アクセスが多い曜日の把握 |

### Search Console セクション（9〜11）
| セクション | 内容 |
|-----------|------|
| 9. 検索クエリ | クリック・表示回数・CTR・掲載順位（上位50） |
| 10. ページ別 | ページごとの検索パフォーマンス |
| 11. デバイス別 | モバイル/PC/タブレットの検索数 |

### 改善提案（12）
- 🔴 CRITICAL: 即対応が必要
- 🟡 WARNING: 改善余地あり
- 💡 OPPORTUNITY: 成長機会

---

## 出力ファイル

- `analytics-report.json`: 全データのJSON（.gitignoreに追加済み）

---

## A/Bテスト確認

- バリアントAを見る: `/lp/priority?v=a`
- バリアントBを見る: `/lp/priority?v=b`
- GA4 イベントエクスプローラーで `ab_test_view` / `ab_test_conversion` / `cta_click` を確認

---

## よくあるエラー

| エラー | 原因 | 対処 |
|-------|------|------|
| PERMISSION_DENIED | GA4かGSCへのアクセス権限なし | Step 2・3 を再確認 |
| UNAUTHENTICATED | credentials.json が無効 | 新しいキーを発行し直す |
| 404 / Site not found | GSCのサイトURLが間違っている | `sc-domain:solo-quest.jp` or `https://solo-quest.jp/` を確認 |
