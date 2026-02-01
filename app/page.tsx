import Link from 'next/link';

export default function Home() {
  return (
    // 背景色を「クリーム色(#FFF9E5)」、文字色を「ブラウン(#4E342E)」に設定
    // これだけで「デジタルの冷たさ」が消え、絵本のような温かみが出ます
    <div className="min-h-screen bg-[#FFF9E5] text-[#4E342E] overflow-x-hidden font-sans selection:bg-[#FF7444]/20">
      
      {/* --- ヘッダー --- */}
      <header className="fixed top-0 w-full z-50 bg-[#FFF9E5]/90 backdrop-blur-sm border-b-4 border-[#FF7444]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            {/* ロゴアイコン：スキューモーフィズムを意識した「実物感」のあるアイコン */}
            <div className="w-10 h-10 bg-[#FF7444] rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_#cc5833] group-hover:translate-y-1 group-hover:shadow-none transition-all">
              <span className="text-2xl text-white drop-shadow-md">⚔️</span>
            </div>
            <div className="text-xl font-black tracking-tight text-[#4E342E]">
              SOLO QUEST
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-bold text-[#4E342E]/70">
            <Link href="/privacy" className="hover:text-[#FF7444] transition-colors">保護者の方へ</Link>
          </nav>
        </div>
      </header>

      {/* --- ヒーローセクション --- */}
      <main className="pt-32 pb-20 px-6 relative">
        
        {/* 背景装飾：ポップな円形（おもちゃ箱のイメージ） */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#37B6F6]/20 rounded-full blur-2xl pointer-events-none animate-bounce-slow" />
        <div className="absolute top-60 right-10 w-60 h-60 bg-[#FF7444]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* キャッチコピーのバッジ：フェーズ1〜2向けの分かりやすい言葉 */}
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-[#37B6F6] text-[#37B6F6] text-sm font-black tracking-wider shadow-sm transform rotate-[-2deg]">
            ✨ キミが主役の冒険！
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight text-[#4E342E]">
            日常を<br className="md:hidden" />
            <span className="text-[#FF7444] inline-block transform hover:scale-105 transition-transform cursor-default">大冒険</span>
            に変える<br />
            魔法のアプリ
          </h1>
          
          <p className="text-[#4E342E]/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            「お風呂洗い」も「宿題」も、クリアすればレベルアップ！<br />
            キミの声が魔法になって、経験値に変わるよ。<br />
            <span className="text-[#FF7444] font-bold">さあ、伝説の勇者になろう。</span>
          </p>

          {/* アクションボタン：物理的な手応えを感じさせるデザイン */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-5 bg-[#FF7444] rounded-2xl font-black text-xl text-white shadow-[0_6px_0_#cc5833] hover:shadow-[0_3px_0_#cc5833] hover:translate-y-[3px] transition-all active:shadow-none active:translate-y-[6px]">
              <span className="flex items-center gap-3">
                冒険を始める
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </button>
            <Link href="/blog" className="group flex items-center gap-2 px-8 py-5 bg-white border-4 border-[#37B6F6] text-[#37B6F6] rounded-2xl font-bold text-lg shadow-[0_6px_0_#bae6fd] hover:shadow-[0_3px_0_#bae6fd] hover:translate-y-[3px] transition-all active:shadow-none active:translate-y-[6px]">
              <span>冒険の記録を見る</span>
            </Link>
          </div>

          {/* スマホ画面風プレビュー：フェーズ1「カード型UI」をイメージ */}
          <div className="mt-20 relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-white rounded-[3rem] border-[8px] border-[#4E342E] shadow-2xl overflow-hidden ring-4 ring-[#4E342E]/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
             {/* 画面の中身 */}
             <div className="absolute inset-0 bg-[#FFF9E5] flex flex-col p-6">
                {/* ヘッダー */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-8 h-8 bg-[#4E342E] rounded-full text-white flex items-center justify-center text-xs font-bold">LV.1</div>
                  <div className="w-20 h-4 bg-[#FF7444]/20 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-[#FF7444]"></div>
                  </div>
                </div>
                
                {/* メインカード（スキューモーフィズム） */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-3xl border-4 border-[#37B6F6] flex items-center justify-center shadow-[8px_8px_0px_0px_#bae6fd] mb-6 transform hover:scale-105 transition-transform">
                    <span className="text-6xl">🦷</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#4E342E] mb-2">はみがき</h3>
                  <p className="text-[#4E342E]/60 font-bold">0 / 3 分</p>
                </div>

                {/* ボタン */}
                <div className="mt-auto">
                   <div className="w-full py-4 bg-[#88D64C] rounded-xl text-white font-black text-center shadow-[0_4px_0_#65a30d]">
                     できた！
                   </div>
                </div>
             </div>
          </div>

        </div>
      </main>

      {/* --- フッター --- */}
      <footer className="border-t-4 border-[#FF7444]/10 py-10 text-center text-[#4E342E]/60 text-sm font-bold bg-white">
        <p>&copy; 2026 Solo Quest. <br className="sm:hidden"/>冒険はつづく...</p>
      </footer>

    </div>
  );
}