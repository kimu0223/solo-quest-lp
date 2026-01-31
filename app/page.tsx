import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a10] text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* --- ヘッダー（ナビゲーション） --- */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a10]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            SOLO QUEST
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">プライバシー</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">利用規約</Link>
          </nav>
        </div>
      </header>

      {/* --- ヒーローセクション（メインビジュアル） --- */}
      <main className="pt-32 pb-20 px-6 relative">
        {/* 背景の装飾（オーラ） */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* キャッチコピー */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase">
            Start Your Adventure
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            日常を<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">冒険に変える</span>
            <br />魔法のアプリ
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            「お風呂洗い」も「宿題」も、すべてはクエストだ。<br />
            AIが君の声を鑑定し、経験値を与える。<br />
            さあ、ソロクエストの世界へ旅立とう。
          </p>

          {/* CTAボタン（アクション） */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                冒険を始める
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </button>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4">
              まずは規約を確認
            </Link>
          </div>

          {/* スマホ画面風のプレビュー（仮） */}
          <div className="mt-20 relative mx-auto w-full max-w-[300px] aspect-[9/19] bg-gray-800 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold bg-[#1a1a2e]">
                APP SCREEN<br />COMING SOON
             </div>
          </div>

        </div>
      </main>

      {/* --- フッター --- */}
      <footer className="border-t border-white/5 py-10 text-center text-gray-600 text-sm">
        <p>&copy; 2026 Solo Quest. All rights reserved.</p>
      </footer>

    </div>
  );
}