// ▼▼▼ 修正: ./posts ではなく ../posts に変更 ▼▼▼
import { BLOG_POSTS } from '../posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id.toString() === id);

  if (!post) {
    return { title: '記事が見つかりません | Solo Quest' };
  }

  return {
    title: `${post.title} | Solo Quest`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Solo Quest`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date.replace(/\./g, '-'),
      url: `https://solo-quest.jp/blog/${post.id}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const post = BLOG_POSTS.find((p) => p.id.toString() === id);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date.replace(/\./g, '-'),
    "dateModified": post.date.replace(/\./g, '-'),
    "author": {
      "@type": "Organization",
      "name": "Solo Quest",
      "url": "https://solo-quest.jp"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solo Quest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solo-quest.jp/logo.png"
      }
    },
    "url": `https://solo-quest.jp/blog/${post.id}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://solo-quest.jp" },
        { "@type": "ListItem", "position": 2, "name": "ブログ", "item": "https://solo-quest.jp/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://solo-quest.jp/blog/${post.id}` }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        
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

        <article className="clay-card p-8 md:p-12 bg-white/80 shadow-sm">
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-teal-800 prose-p:leading-relaxed prose-a:text-teal-600 hover:prose-a:text-teal-500"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="bg-gradient-to-br from-teal-50 to-lime-50 rounded-2xl p-8 text-center border border-teal-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">この記事の内容を、アプリで実践しませんか？</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Solo Questなら、AIが子供の「できた！」を全力で褒めて伸ばします。
              </p>
              <Link href="/" className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-teal-600 transition-colors">
                無料でアプリを試す
              </Link>
            </div>
          </div>
          
        </article>

        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500 font-bold">
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-bold text-slate-800 mb-6 text-center">お子様の「どんなこと」でお悩みですか？</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/lp/homework', emoji: '📚', label: '宿題をしない' },
              { href: '/lp/gaming', emoji: '🎮', label: 'ゲームをやめられない' },
              { href: '/lp/morning', emoji: '🌅', label: '朝起きられない' },
              { href: '/lp/time-management', emoji: '⏰', label: '時間管理・ダラダラ' },
              { href: '/lp/priority', emoji: '🤯', label: '優先順位がつけられない' },
              { href: '/lp/task-management', emoji: '📝', label: 'タスク管理・三日坊主' },
            ].map(({ href, emoji, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:shadow-sm transition-all"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>

    </div>
  );
}