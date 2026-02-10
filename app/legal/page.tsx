import Link from 'next/link';

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
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
        <h1 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">特定商取引法に基づく表記</h1>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">事業者名</div>
            <div className="md:col-span-2 text-slate-600">Solo Quest 運営事務局</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">代表者</div>
            <div className="md:col-span-2 text-slate-600">Kimu</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">所在地・電話番号</div>
            <div className="md:col-span-2 text-slate-600 text-sm">
              <p>請求があったら遅滞なく開示します。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">メールアドレス</div>
            <div className="md:col-span-2 text-slate-600">
                {/* 実際のアドレスを入れてください、またはフォームへのリンクでも可 */}
                contact@solo-quest.jp
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">販売価格</div>
            <div className="md:col-span-2 text-slate-600 text-sm">
              アプリのダウンロードは無料です。<br/>
              その他、有料コンテンツがある場合は、購入画面に価格を表示します。
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-6">
            <div className="font-bold text-teal-800">支払方法・時期</div>
            <div className="md:col-span-2 text-slate-600 text-sm">
              App Store / Google Play の決済システムを利用します。<br/>
              支払時期は各プラットフォームの規約に従います。
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
            <div className="font-bold text-teal-800">返品・キャンセル</div>
            <div className="md:col-span-2 text-slate-600 text-sm">
              デジタルコンテンツの性質上、購入後の返品・キャンセルはお受けできません。<br/>
              不具合等がある場合はお問い合わせフォームよりご連絡ください。
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}