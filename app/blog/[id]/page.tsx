import { BLOG_POSTS } from '../posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 静的生成用の設定（これはそのままでOK）
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

// ★ここを修正：型定義を Promise にし、関数を async に変更
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  
  // ★ここを修正：params を await して中身を取り出す
  const { id } = await params;

  // 取り出した id で記事を探す
  const post = BLOG_POSTS.find((p) => p.id.toString() === id);

  // 記事がなければ404
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* --- ヘッダー --- */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🌱</span>
            <span className="font-black tracking-tight text-slate-800 group-hover:text-teal-600 transition-colors">
              Solo Quest
            </span>
          </Link>
          <Link href="/blog" className="text-sm font-bold text-teal-600 hover:text-teal-800">
            ← 記事一覧に戻る
          </Link>
        </div>
      </header>

      {/* --- 記事本文 --- */}
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        
        {/* アイキャッチエリア */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-teal-100">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-4 text-slate-500 text-sm font-medium">
            <span>{post.date}</span>
            <span>{post.emoji}</span>
          </div>
        </div>

        {/* コンテンツエリア */}
        <article className="clay-card p-8 md:p-12 bg-white/80 shadow-sm">
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-teal-800 prose-p:leading-relaxed prose-a:text-teal-600 hover:prose-a:text-teal-500"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        {/* タグエリア */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500 font-bold">
              #{tag}
            </span>
          ))}
        </div>

        {/* アクションエリア */}
        <div className="mt-16 text-center">
          <h3 className="font-bold text-slate-800 mb-6">この記事を読んだ人におすすめ</h3>
          <div className="flex justify-center">
            <Link href="/" className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all">
               Solo Questを無料で試す
            </Link>
          </div>
        </div>

      </main>

      {/* --- フッター --- */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>

    </div>
  );
}