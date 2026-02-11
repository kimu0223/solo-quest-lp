import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden font-sans">
      
      {/* --- 背景装飾：呼吸する光 --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-r from-teal-200/40 to-lime-200/40 rounded-full blur-[120px] -z-10 animate-pulse-slow mixture-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-l from-sky-200/40 to-cyan-200/40 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -z-10" />

      {/* --- ヘッダー --- */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
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

      {/* --- 1. ヒーローセクション --- */}
      <main className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-teal-200 text-teal-700 text-xs font-bold tracking-wide mb-10 shadow-sm backdrop-blur-md animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 border-2 border-white"></span>
            </span>
            親子で育む、新しい自律のカタチ
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-[1.15]">
            <span className="block text-2xl md:text-3xl text-slate-500 font-bold mb-4 tracking-normal">
              「命令」されるのは、もう終わり。
            </span>
            キミの日常は、<br />
            <span className="relative inline-block px-2 mx-2">
              <span className="absolute inset-0 bg-gradient-to-r from-lime-300 to-teal-300 -skew-y-3 rounded-xl -z-10 shadow-[4px_4px_0_rgba(20,184,166,0.2)]" />
              <span className="text-teal-950 drop-shadow-sm">「冒険」</span>
            </span>
            になる。
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            子供は「信じて任せる」と、驚くほど成長します。<br />
            AIがサポートする小さな成功体験の積み重ねが、<br />
            親子の信頼と、自ら動く自信を育てます。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-28 relative z-30">
            {/* ▼▼▼ 修正箇所：buttonタグをLinkに変更 ▼▼▼ */}
            <Link
              // ★★★ 重要：ここをご自身のGoogleフォームのURLに変更してください ★★★
              href="https://docs.google.com/forms/d/e/...../viewform" 
              target="_blank"
              className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-black text-lg neon-button hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <span className="relative flex items-center justify-center gap-2 drop-shadow-sm">
                無料で冒険を始める
                <svg className="w-6 h-6 text-lime-100 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </Link>
            
            <Link href="/blog" className="w-full sm:w-auto px-10 py-4 clay-card text-teal-800 font-bold text-lg hover:scale-105 hover:text-teal-600 transition-all text-center flex items-center justify-center cursor-pointer relative z-30">
              物語（ブログ）を読む
            </Link>
          </div>

          {/* 3Dスマホエリア */}
          <div className="relative mx-auto w-full max-w-[380px] animate-float-delayed mb-12">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3.5rem] p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] ring-4 ring-white/10 relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-b from-teal-50 to-white rounded-[2.8rem] overflow-hidden aspect-[9/19] relative flex flex-col">
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
                <div className="flex-1 p-5 space-y-4">
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
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                  <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] mb-6 relative border-b-4 border-teal-600 animate-bounce-slow">
                     <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-slate-800"></div>
                     <p className="text-sm font-bold leading-relaxed">
                       <span className="text-lime-300 mr-1">AI:</span>
                       「すごい！キミならできると信じてたよ！昨日の記録を超えたね！」
                     </p>
                  </div>
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

      {/* --- 2. 心のすれ違い（Perspective） --- */}
      <section className="py-24 relative bg-white/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-xs mb-6">
              Perspective
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              本当は、お互いに<br/>
              <span className="text-orange-500 border-b-4 border-orange-200">「笑顔でいたい」</span>だけ。
            </h2>
            <p className="text-slate-500 font-medium">
              ボタンの掛け違いが、日々のストレスを生んでいませんか？
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* 子供の視点 */}
            <div className="bg-white p-8 rounded-tr-[3rem] rounded-bl-[3rem] border border-blue-100 shadow-sm relative group">
              <div className="absolute -top-6 -left-4 text-6xl transform -rotate-12 group-hover:scale-110 transition-transform">👦</div>
              <h3 className="text-xl font-black text-blue-900 mb-4 text-right">ボクの気持ち</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-2xl rounded-tr-none text-blue-800 text-sm font-bold leading-relaxed">
                  「いまやろうと思ってたのに、『早くして！』って言われるとやる気なくなるんだ...」
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl rounded-tr-none text-blue-800 text-sm font-bold leading-relaxed">
                  「『宿題やった？』って聞かれると、監視されてるみたいで嫌だな...」
                </div>
              </div>
            </div>

            {/* 親の視点 */}
            <div className="bg-white p-8 rounded-tl-[3rem] rounded-br-[3rem] border border-orange-100 shadow-sm relative group">
              <div className="absolute -top-6 -right-4 text-6xl transform rotate-12 group-hover:scale-110 transition-transform">👩</div>
              <h3 className="text-xl font-black text-orange-900 mb-4 text-left">親の気持ち</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-2xl rounded-tl-none text-orange-800 text-sm font-bold leading-relaxed">
                  「本当はガミガミ言いたくない。でも言わないと動かないから...」
                </div>
                <div className="bg-orange-50 p-4 rounded-2xl rounded-tl-none text-orange-800 text-sm font-bold leading-relaxed">
                  「管理したいわけじゃない。ただ、自立できる子になってほしいだけなのに。」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. 使い方セクション（How it works） --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-2 block">How it works</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800">
              遊びのように始まる、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lime-500">新しい生活習慣。</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="clay-card p-8 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-teal-800 font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-teal-50 z-20">1</div>
              <div className="mb-6 relative">
                 <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-100 to-lime-100 rounded-full flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform">🏰</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">クエストを選ぶ</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                「宿題」も「歯磨き」も、ここでは全てがミッション。子供自身が「これを受ける！」と選びます。
              </p>
            </div>
            <div className="clay-card p-8 text-center relative group hover:-translate-y-2 transition-transform duration-300 delay-100">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-teal-800 font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-teal-50 z-20">2</div>
              <div className="mb-6 relative">
                 <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform">🗣️</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">声で報告する</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                親への報告は不要。スマホのAIに向かって「終わった！」と言うだけ。自律の第一歩です。
              </p>
            </div>
            <div className="clay-card p-8 text-center relative group hover:-translate-y-2 transition-transform duration-300 delay-200">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-teal-800 font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-teal-50 z-20">3</div>
              <div className="mb-6 relative">
                 <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform">🎉</div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">AIが全力で称賛！</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                親の代わりにAIが即座に、大袈裟なくらい褒めてくれます。この「達成感」が次への活力になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 追加セクション：開発者ストーリー --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-teal-50/50 rounded-3xl p-8 md:p-12 border border-teal-100 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* ご自身のアイコン画像があればここに設定、なければアバター等 */}
              <div className="w-full h-full flex items-center justify-center bg-teal-100 text-6xl">🧑‍💻</div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                「早くしなさい」と言いたくない。<br/>
                そんな悩みから生まれました。
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                はじめまして、Solo Quest開発者のKimuです。
                私自身も、子供の「宿題やりたくない」「歯磨き面倒くさい」に毎日悩んでいました。
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                「もっと楽しく、ゲームのように自ら動いてくれたら…」
                そんな願いを込めて、AIの力を借りて作ったのがこのアプリです。
                あなたの家庭にも、小さな冒険と笑顔が増えますように。
              </p>
              <div className="mt-6 flex items-center gap-2">
                 <span className="text-sm font-bold text-teal-600">Kimu</span>
                 <span className="text-xs text-slate-400">/ Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ★新セクション4：機能紹介（Features / 6つの武器） --- */}
      <section className="py-24 bg-gradient-to-b from-white/0 to-teal-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-2 block">Features</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
              「自ら動く子」を育てる、<br/>
              <span className="text-teal-600">6つの強力なサポート。</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 機能1: AIボイス */}
            <div className="clay-card p-8 flex gap-6 items-start">
              <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">専属の応援団 (AI)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  親御さんが忙しい時でも、AIはいつでも子供の頑張りを見ています。「見ててくれた！」という安心感が、子供の心を満たします。
                </p>
              </div>
            </div>

            {/* 機能2: 集中シールド (New!) */}
            <div className="clay-card p-8 flex gap-6 items-start border-l-4 border-l-orange-400">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">集中シールドモード</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  「ついYouTubeを見てしまう」を防ぎます。クエスト実行中は他のアプリへの誘惑をブロックし、集中できる環境を守ります。
                </p>
              </div>
            </div>

            {/* 機能3: ご褒美チケット (New!) */}
            <div className="clay-card p-8 flex gap-6 items-start">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">🎁</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">親子のご褒美チケット</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  貯めた経験値を「公園に行く」「おやつ」などのリアルなご褒美と交換！デジタルの頑張りが、現実の喜びにつながります。
                </p>
              </div>
            </div>

            {/* 機能4: ウィジェット (New!) */}
            <div className="clay-card p-8 flex gap-6 items-start">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">📱</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">ホーム画面ウィジェット</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  アプリを開かなくても、今のレベルや次のクエストを確認。ふとした瞬間に目に入ることで、自然とやる気スイッチが入ります。
                </p>
              </div>
            </div>

            {/* 機能5: 信頼貯金 */}
            <div className="clay-card p-8 flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">🤝</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">親子の信頼貯金</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  親は「命令する人」から「報告を聞いて喜ぶ人」へ。アプリが間に入ることで、家庭内の会話がポジティブに変わります。
                </p>
              </div>
            </div>

            {/* 機能6: プライバシー */}
            <div className="clay-card p-8 flex gap-6 items-start bg-teal-50/50">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-sm">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">安心のプライバシー設計</h3>
                <p className="text-teal-700 text-sm leading-relaxed">
                  お子様の音声データはサーバーに保存されません。広告も一切なし。安心してお使いいただける設計を徹底しています。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ★新セクション5：未来（Benefits） --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-lime-200/30 to-teal-200/30 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-12">
            さあ、親子で<br/>
            新しい冒険に出かけよう。
          </h2>

          <div className="clay-card p-8 md:p-12 bg-white/60">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <p className="text-slate-400 font-bold mb-4">Conflict</p>
                  <div className="text-6xl mb-4 grayscale opacity-50">🌩️</div>
                  <p className="text-slate-500 font-medium">「しなさい」と「いやだ」の<br/>終わらない戦い</p>
                </div>
                
                <div className="hidden md:block text-4xl text-teal-300">➜</div>
                
                <div className="text-center relative">
                   <div className="absolute inset-0 bg-yellow-200 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                   <p className="text-teal-600 font-bold mb-4">Harmony</p>
                   <div className="text-7xl mb-4 transform hover:scale-110 transition-transform">☀️</div>
                   <p className="text-slate-800 font-bold text-lg">互いを認め合い、<br/>成長を喜び合う冒険へ</p>
                </div>
             </div>
          </div>

          <div className="mt-16">
            {/* ▼▼▼ 修正箇所：ここもbuttonからLinkに変更 ▼▼▼ */}
            <Link 
              // ★★★ 重要：ここもGoogleフォームのURLに書き換えてください ★★★
              href="https://docs.google.com/forms/d/e/...../viewform" 
              target="_blank"
              className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-black text-xl neon-button hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <span className="relative flex items-center justify-center gap-3 drop-shadow-sm">
                今すぐ冒険を始める
                <svg className="w-6 h-6 text-lime-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </Link>
            <p className="mt-4 text-xs text-slate-500 font-medium">※登録不要・完全無料で始められます</p>
          </div>
        </div>
      </section>

      {/* --- フッター --- */}
      <footer className="bg-white/30 border-t border-teal-100/50 py-12 text-center backdrop-blur-md relative z-10">
        <p className="text-teal-800/70 text-sm font-bold">&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}