import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden font-sans">
      
      {/* --- 背景装飾：呼吸する光 --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-r from-teal-200/40 to-lime-200/40 rounded-full blur-[120px] -z-10 animate-pulse-slow mixture-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-l from-sky-200/40 to-cyan-200/40 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      {/* --- ヘッダー：ガラスの質感 --- */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* ロゴ：ぷるんとした3Dアイコン */}
            <div className="w-11 h-11 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_8px_rgba(20,184,166,0.3)] group-hover:scale-105 group-hover:rotate-3 transition-all">
              <span className="text-2xl filter drop-shadow-sm">🌱</span>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800 group-hover:text-teal-600 transition-colors">
              Solo Quest
            </span>
          </div>
          <nav>
             <Link href="/privacy" className="clay-card px-5 py-2.5 text-sm font-bold text-teal-700 hover:text-teal-900 hover:scale-105 transition-all">
               保護者の方へ
             </Link>
          </nav>
        </div>
      </header>

      {/* --- ヒーローセクション --- */}
      <main className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* タグ：発光するバッジ */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-teal-200 text-teal-700 text-xs font-bold tracking-wide mb-10 shadow-sm backdrop-blur-md animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 border-2 border-white"></span>
            </span>
            3歳〜12歳のお子様向け 習慣化アプリ
          </div>
          
          {/* メインコピー：強調部分が飛び出す */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-[1.15]">
            「やりなさい」が<br className="sm:hidden" />
            <span className="relative inline-block px-2 mx-2">
              {/* 強調背景：ライムグリーンのマーカー + 3D影 */}
              <span className="absolute inset-0 bg-gradient-to-r from-lime-300 to-teal-300 -skew-y-3 rounded-xl -z-10 shadow-[4px_4px_0_rgba(20,184,166,0.2)]" />
              <span className="text-teal-950 drop-shadow-sm">「やったよ！」</span>
            </span>
            <br />
            に変わる瞬間。
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            AIが子供の小さな成長を見逃さず、冒険の記録に変える。<br />
            緑豊かな森のような安心と、澄んだ空のような自律を。
          </p>

          {/* アクションボタン：最強の強調（ネオン+3D） */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-28 relative">
            
            {/* メインボタン：発光するネオン・ライム */}
            <button className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-black text-lg neon-button hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <span className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <span className="relative flex items-center justify-center gap-2 drop-shadow-sm">
                冒険を始める
                <svg className="w-6 h-6 text-lime-100 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </button>
            
            {/* サブボタン：グラスモーフィズム */}
            <Link href="/blog" className="w-full sm:w-auto px-10 py-4 clay-card text-teal-800 font-bold text-lg hover:scale-105 hover:text-teal-600 transition-all text-center">
              機能を見る
            </Link>
          </div>

          {/* アプリ画面：浮遊する3Dモックアップ */}
          <div className="relative mx-auto w-full max-w-[380px] animate-float-delayed">
            {/* スマホ外枠：リッチな3Dクレイ質感 */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3.5rem] p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] ring-4 ring-white/10 relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-b from-teal-50 to-white rounded-[2.8rem] overflow-hidden aspect-[9/19] relative flex flex-col">
                
                {/* 画面内ヘッダー */}
                <div className="bg-white/70 backdrop-blur-md p-6 pt-10 pb-4 shadow-sm z-10 sticky top-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-teal-500 font-bold uppercase tracking-wider mb-1">Current Quest</p>
                      <h3 className="text-xl font-black text-slate-800">朝のクエスト</h3>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-100 to-teal-100 flex items-center justify-center text-2xl shadow-inner border border-white/50">
                      🛡️
                    </div>
                  </div>
                </div>

                {/* リストエリア */}
                <div className="flex-1 p-5 space-y-4">
                  {/* カード1：アクティブ（強調） */}
                  <div className="bg-white p-4 rounded-3xl shadow-[0_8px_16px_-6px_rgba(20,184,166,0.2)] border-2 border-lime-300 flex items-center gap-4 relative overflow-hidden group transform hover:scale-102 transition-all">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-lime-100/50 to-transparent -skew-x-12" />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-lime-400 flex items-center justify-center text-3xl text-white shadow-sm z-10">
                      🪥
                    </div>
                    <div className="flex-1 z-10">
                      <div className="flex justify-between mb-1">
                        <p className="font-bold text-slate-800">はみがき</p>
                        <span className="text-[10px] font-black text-lime-600 bg-lime-100 px-2 py-0.5 rounded-full animate-pulse">DOING!</span>
                      </div>
                      <div className="w-full bg-teal-50 h-2 rounded-full mt-2 overflow-hidden">
                         <div className="bg-gradient-to-r from-teal-400 to-lime-500 w-2/3 h-full rounded-full animate-pulse-slow" />
                      </div>
                    </div>
                  </div>
                  {/* カード2 */}
                  <div className="clay-card p-4 flex items-center gap-4 opacity-80 grayscale-[30%]">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
                      👕
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-600 text-sm">きがえ</p>
                      <div className="w-full bg-slate-100 h-2 rounded-full mt-2" />
                    </div>
                  </div>
                </div>

                {/* AIフィードバックエリア：浮遊感MAX */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                  {/* 吹き出し（3D） */}
                  <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] mb-6 relative border-b-4 border-teal-600 animate-bounce-slow">
                     <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-slate-800"></div>
                     <p className="text-sm font-bold leading-relaxed">
                       <span className="text-lime-300 mr-1">AI:</span>
                       「すごい！昨日より準備が早いね。その調子！」
                     </p>
                  </div>
                  {/* 音声ボタン（発光するオレンジ） */}
                  <div className="flex justify-center relative">
                    <div className="absolute inset-0 bg-orange-500 blur-[20px] opacity-40 rounded-full animate-pulse"></div>
                    <button className="relative w-18 h-18 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-4xl text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(249,115,22,0.3)] hover:scale-110 transition-transform border-4 border-white/80 z-10">
                      🎙️
                    </button>
                  </div>
                </div>

              </div>
            </div>
          
          </div>
        </div>
      </main>

      {/* --- フッター --- */}
      <footer className="bg-white/30 border-t border-teal-100/50 py-12 text-center backdrop-blur-md relative z-10">
        <p className="text-teal-800/70 text-sm font-bold">&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}