import Link from 'next/link';
import { BLOG_POSTS } from './posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* ヘッダー */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🌱</span>
            <span className="font-black tracking-tight text-slate-800 group-hover:text-teal-600 transition-colors">
              Solo Quest
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* メイン */}
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-teal-100">Blog</div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">冒険の記録</h1>
          <p className="text-slate-500 font-medium">子育てを「もっと楽しく」するヒントをお届けします</p>
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            // ★重要：ここがリンクになっています！ここがないと遷移しません！
            <Link key={post.id} href={`/blog/${post.id}`} className="group block h-full">
              <article className="clay-card p-6 h-full flex flex-col hover:-translate-y-2 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-lime-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{post.emoji}</span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">{post.category}</span>
                </div>
                
                <h2 className="text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-teal-600 transition-colors">{post.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">#{tag}</span>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 font-medium text-right group-hover:text-teal-500 transition-colors">
                    {post.date} → 読む
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}