import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600 text-white overflow-hidden selection:bg-yellow-400/50">
      
      {/* --- ヘッダー --- */}
      <header className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/10 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* ロゴアイコン（仮） */}
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 transform -rotate-6">
              <span className="text-xl">⚔️</span>
            </div>
            <div className="text-xl font-black tracking-tight text-white drop-shadow-md">
              SOLO QUEST
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-bold text-white/90">
            <Link href="/privacy" className="hover:text-yellow-300 transition-colors drop-shadow-sm">プライバシー</Link>
            <Link href="/terms" className="hover:text-yellow-300 transition-colors drop-shadow-sm">利用規約</Link>
          </nav>
        </div>
      </header>

      {/* --- ヒーローセクション --- */}
      <main className="pt-32 pb-20 px-6 relative">
        
        {/* 背景の雲（装飾） */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-yellow-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* キャッチコピーのバッジ */}
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white text-blue-600 border-2 border-blue-200 shadow-xl shadow-blue-900/10 text-sm font-extrabold tracking-wider uppercase transform hover:scale-105 transition-transform cursor-default">
            ✨ キミだけの冒険がはじまる！
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight drop-shadow-lg">
            日常を<br className="md:hidden" />
            <span className="text-yellow-300 drop-shadow-md">大冒険</span>
            に変える<br />
            魔法のアプリ
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            「お風呂洗い」も「宿題」も、クリアすればレベルアップ！<br />
            キミの声が魔法になって、経験値に変わるよ。<br />
            さあ、伝説の勇者になろう。
          </p>

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-2xl font-black text-xl text-white shadow-[0_6px_0_rgb(194,65,12)] hover:shadow-[0_3px_0_rgb(194,65,12)] hover:translate-y-[3px] transition-all active:shadow-none active:translate-y-[6px]">
              <span className="flex items-center gap-2 drop-shadow-sm">
                冒険を始める
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </button>
            <Link href="/terms" className="text-sm text-white/80 hover:text-white underline underline-offset-4 font-bold drop-shadow-sm">
              保護者の方へ（規約）
            </Link>
          </div>

          {/* スマホ画面風のプレビュー */}
          <div className="mt-16 relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-white rounded-[3rem] border-8 border-white/30 shadow-2xl overflow-hidden ring-4 ring-black/5 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-50">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 text-4xl animate-bounce">
                  🛡️
                </div>
                <p className="font-black text-blue-900 text-lg tracking-widest">QUEST LOG</p>
                <p className="text-blue-400 text-xs font-bold mt-2 bg-white px-3 py-1 rounded-full shadow-sm">開発中だよ！</p>
             </div>
          </div>

        </div>
      </main>

      {/* --- フッター --- */}
      <footer className="border-t border-white/20 py-8 text-center text-white/70 text-sm bg-blue-900/20 backdrop-blur-sm">
        <p className="font-medium">&copy; 2026 Solo Quest. 冒険はつづく...</p>
      </footer>

    </div>
  );
}