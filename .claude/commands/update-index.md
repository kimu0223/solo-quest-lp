# サイトインデックス更新スキル

`docs/site-index.md` を現在の実態に合わせて最新化する。

## 手順

### 1. 現状把握
以下を確認する：
```bash
# ブログ記事の最新ID確認
grep "id:" app/blog/posts.ts | head -5

# LPページ一覧確認
ls app/lp/

# FAQ Schema 実装状況確認
grep -rl "FAQPage" app/lp/
```

### 2. site-index.md を更新
`docs/site-index.md` の以下を最新化する：
- [ ] ブログ記事一覧（新規追加分を先頭に追記）
- [ ] 「次の記事IDは XX」の数字を更新
- [ ] LPページ一覧（新規LP追加・FAQ Schema 追加分を更新）
- [ ] カバーできていないテーマ（新LP追加で消えたものを削除）
- [ ] 最終更新日を今日の日付に変更

### 3. seo-keywords.md を更新
`docs/seo-keywords.md` の記事一覧テーブルに新規記事を追加する。

## 注意事項
- `app/blog/posts.ts` は全読みしない。`grep` で必要な情報だけ取得する
- 更新後は `docs/site-index.md` の「最終更新」日付を必ず変える
