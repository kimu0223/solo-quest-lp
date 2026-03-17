# GA4 Data API セットアップ手順

## 1. Google Cloud でサービスアカウントを作成

1. https://console.cloud.google.com/ を開く
2. プロジェクトを選択（または新規作成）
3. 「APIとサービス」→「ライブラリ」→ **Google Analytics Data API** を検索して有効化
4. 「IAMと管理」→「サービスアカウント」→「+ サービスアカウントを作成」
5. 名前: `solo-quest-ga4-reader` など
6. ロール: 付与しない（GA4側で設定するため）
7. 作成後、サービスアカウントをクリック→「キー」→「鍵を追加」→「新しい鍵を作成」→ **JSON**
8. ダウンロードされた JSON ファイルを `credentials.json` という名前でプロジェクトルートに配置

## 2. GA4 でサービスアカウントに権限を付与

1. https://analytics.google.com/ → Solo Quest のプロパティを選択
2. 左下「管理」→ プロパティ列「プロパティのアクセス管理」
3. 「+」→「ユーザーを追加」
4. メールアドレス: `credentials.json` 内の `client_email` の値を貼り付け
5. 役割: **閲覧者** を選択 → 追加

## 3. 実行

```bash
# 一回だけ実行
npm run analytics

# 毎時自動実行（要 watch コマンド）
npm run analytics:watch
```

## 4. 出力

- コンソールに整形されたレポートが表示されます
- `ga4-report.json` に生データが保存されます

## 5. A/Bテスト確認

- バリアントAを見る: `/lp/priority?v=a`
- バリアントBを見る: `/lp/priority?v=b`
- GA4 イベントエクスプローラーで `ab_test_view` / `ab_test_conversion` / `cta_click` を確認

## 注意

- `credentials.json` は `.gitignore` に追加されていることを確認
- 本番環境では環境変数 `GOOGLE_APPLICATION_CREDENTIALS` を使用
