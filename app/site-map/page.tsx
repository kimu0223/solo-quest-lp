import Link from 'next/link';
import { BLOG_POSTS } from '../blog/posts';

export default function SitemapHTML() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* ヘッダー */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
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

      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">サイトマップ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* メインメニュー */}
          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center gap-2">
              <span className="text-xl">🧭</span> メインメニュー
            </h2>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-teal-600 hover:underline">トップページ</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-teal-600 hover:underline">ブログ（冒険の記録）</Link></li>
              <li><Link href="/faq" className="text-slate-600 hover:text-teal-600 hover:underline">よくある質問</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-teal-600 hover:underline">お問い合わせ</Link></li>
            </ul>
          </section>

          {/* 重要情報 */}
          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center gap-2">
              <span className="text-xl">📜</span> 重要情報
            </h2>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-slate-600 hover:text-teal-600 hover:underline">利用規約</Link></li>
              <li><Link href="/privacy" className="text-slate-600 hover:text-teal-600 hover:underline">プライバシーポリシー</Link></li>
              <li><Link href="/legal" className="text-slate-600 hover:text-teal-600 hover:underline">特定商取引法に基づく表記</Link></li>
            </ul>
          </section>

        </div>

        {/* ブログ記事一覧 */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center gap-2">
            <span className="text-xl">✏️</span> ブログ記事一覧
          </h2>
          <ul className="space-y-3">
            {BLOG_POSTS.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`} className="text-slate-600 hover:text-teal-600 hover:underline block truncate">
                  <span className="text-slate-400 text-xs mr-2">{post.date}</span>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}