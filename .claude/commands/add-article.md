# ブログ記事追加スキル

Solo Quest LP にブログ記事を追加する。

## 手順

### 1. site-index を読む
まず `docs/site-index.md` を読んで以下を確認する：
- 次に使うべき記事ID（現在の最大ID + 1）
- 既存記事との重複がないか
- カテゴリ・記事テーマの傾向

### 2. ユーザーの意図を確認
引数（$ARGUMENTS）があればそれをテーマにする。なければユーザーに確認：
- 記事テーマ・ターゲットキーワード
- カテゴリ
- どのLP誘導CTA を末尾に使うか（CTA定数一覧は site-index.md 参照）

### 3. 記事を生成して posts.ts に追加
`app/blog/posts.ts` の `BLOG_POSTS` 配列の**先頭**（最大IDの前）に追加する。

#### 記事フォーマット
```typescript
{
  id: [次のID],
  title: "[タイトル]",
  excerpt: "[120〜150字の要約。読者の悩みから書き出し、解決できることを示す]",
  date: "[今日の日付 YYYY.MM.DD形式]",
  category: "[カテゴリ]",
  tags: ["[検索キーワード1]", "[検索キーワード2]", "[検索キーワード3]", "[検索キーワード4]", "[検索キーワード5]"],
  emoji: "[テーマに合った絵文字]",
  content: `
    [HTMLコンテンツ 1500〜2000字]

    ${CTA_○○}

    <div class="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
      <p class="text-sm font-bold text-slate-600 mb-3">関連記事</p>
      <ul class="space-y-2 text-sm">
        [関連記事リンク 2〜3本]
      </ul>
    </div>
  `,
},
```

#### コンテンツ構成ルール
- **h2** でメインセクション（3〜5個）
- **h3** でサブセクション
- 保護者の「あるある悩み」から書き出す
- 心理学・脳科学・行動経済学の知見を1〜2個盛り込む
- `bg-amber-50` のポイントボックス（チェックリストや実践tips）を1つ挿入
- 末尾に `${CTA_○○}` を必ず入れる（site-index.md のCTA定数表を参照）

#### タグのSEOルール
- 検索ボリュームが見込めるロングテールキーワードを選ぶ
- 「[悩み] [対象]」「[悩み] [対策/方法]」の形式が多い
- 5個程度

### 4. 関連ドキュメントを更新
- `docs/site-index.md` のブログ記事一覧に追加（先頭に追記）
- `docs/seo-keywords.md` のテーブルに追加（ID・URL・タイトル・キーワード）

### 5. ビルド確認
```bash
npm run build
```
エラーがないことを確認する。

### 6. コミット & デプロイ
```bash
git add -A
git commit -m "feat: ブログ記事追加 — [タイトル]"
git push origin main
```

## 注意事項
- `posts.ts` は直接読まず、site-index.md で記事IDを確認する
- CTA定数（`${CTA_○○}`）はテンプレートリテラル内でそのまま使う
- Google Fonts禁止・TypeScriptエラーなし
- HTMLタグはエスケープしない（テンプレートリテラル内）
