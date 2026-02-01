import Link from 'next/link';
import { BLOG_POSTS } from './posts'; // さっき作ったデータを読み込む

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white text-slate-700">
      
      {/* --- ヘッダー --- */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-black text-xl tracking-tight text-blue-600 hover:opacity-70 transition-opacity">
            SOLO QUEST
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-500 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* --- メインコンテンツ --- */}
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-4 tracking-tight">
            冒険の記録
            <span className="block text-base font-bold text-sky-500 mt-2">PARENTING TIPS</span>
          </h1>
          <p className="text-slate-500 font-medium">子育てを「もっと楽しく」するヒントをお届けします</p>
        </div>

        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group bg-white rounded-3xl p-6 shadow-lg shadow-sky-100 hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-1 transition-all duration-300 border border-sky-50 cursor-pointer flex flex-col h-full">
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{post.emoji}</span>
                <span className="text-xs font-bold text-sky-600 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              {/* ここが新機能：タグエリア */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-400 font-medium text-right">
                  {post.date}
                </div>
              </div>

            </article>
          ))}
        </div>

      </main>

      {/* --- フッター --- */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>&copy; 2026 Solo Quest</p>
      </footer>

    </div>
  );
}