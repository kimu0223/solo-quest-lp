import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "小学生の「優先順位」がつけられない悩みを解決 | Solo Quest",
  description: "宿題より遊びを優先してしまう、やることが多すぎてパニックになる小学生へ。Solo Questは「タイムアタック」と「クエスト化」で、目の前のタスクに集中させるiOS専用のAIサポートアプリです。",
};

export default function PriorityLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-grow pt-16">
        
        {/* ▼▼▼ Hero セクション ▼▼▼ */}
        <section className="relative bg-gradient-to-b from-indigo-50 to-white pt-20 pb-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wider mb-6">
              「何からやればいいの？」をなくすアプリ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
              小学生の「優先順位がつけられない」を<br className="hidden md:block" />
              ゲームの力で解決しませんか？
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              宿題、明日の準備、お風呂…。小学校に入って急激に増えたタスク。<br />
              子供の脳が処理しきれない「やることリスト」を1つのクエストに絞り込み、タイムアタックで集中力を爆発させる、新しいタスク管理アプリです。
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link 
                href="https://apps.apple.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store からダウンロード
              </Link>
              <p className="text-xs text-slate-500 font-medium">※iOS専用アプリ・基本無料</p>
            </div>
          </div>
          
          {/* 背景の装飾 */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-1/3 right-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </section>

        {/* ▼▼▼ 悩み・共感セクション ▼▼▼ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              「やらなきゃいけないこと」があるのに、<br className="hidden md:block" />なぜ遊んでしまうのか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">📺</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">好きなことを最優先</h3>
                <p className="text-sm text-slate-600">帰宅するなり宿題を放り出してYouTubeやゲーム。嫌なことは「あとでやる」と言って結局寝る直前までやらない。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🤯</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">やることが多くてパニック</h3>
                <p className="text-sm text-slate-600">「宿題して、明日の準備して、お風呂入って」と指示を出すと、どこから手をつけていいか分からずフリーズする。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🗣️</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">言われないと動けない</h3>
                <p className="text-sm text-slate-600">親が「次はこれをして」と一つ一つ指示を出さないと動かず、親もマネージャーのように管理するのに疲弊している。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 原因解説セクション ▼▼▼ */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                優先順位がつけられないのは「脳の容量オーバー」です
              </h2>
              <p className="text-slate-300">
                小学生の子供が「やらなきゃいけないこと」を後回しにする心理的・脳科学的な理由があります。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧠</span> 理由1：ワーキングメモリの限界
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  人間の脳の「作業用メモリ（ワーキングメモリ）」は、同時に処理できる情報量に限界があります。特に子供は、「宿題」「明日の準備」「お風呂」と複数のタスクを同時に突きつけられると、脳がキャパオーバーを起こし、「どうすればいいか分からないから、とりあえず目の前のおもちゃで遊ぶ」という逃避行動に走ります。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  <p>※参考：認知心理学における「ワーキングメモリ（作動記憶）」の容量に関する知見</p>
                </div>
              </div>
              
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🍩</span> 理由2：現在バイアス（目先の誘惑）
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「宿題を終わらせれば後が楽になる」という未来のメリットよりも、「今すぐゲームをしたい」という目先の快楽を優先してしまう心理傾向を「現在バイアス」と呼びます。子供はこのバイアスが非常に強いため、自制心だけで「嫌なことを先にやる」という優先順位をつけるのは至難の業なのです。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  <p>※参考：行動経済学における「現在バイアス（時間割引）」、および「マシュマロ・テスト」の知見</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-bold">
                「順番にやりなさい！」と教え込むのではなく、<br className="hidden md:block" />
                <span className="text-indigo-400">「今やるべき1つのこと」だけに集中させる仕組みが必要です。</span>
              </p>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 解決策・機能セクション ▼▼▼ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                「タイムアタック」が優先順位の悩みを消す
              </h2>
            </div>

            <div className="space-y-20">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-indigo-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-indigo-100 shadow-inner">
                    <span className="text-7xl">🎯</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    1. タスクを「1つ」に絞り込む<br />（RPGのメインクエスト方式）
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    RPGゲームでは、「次にどこへ行って何をすべきか」が画面に常に1つだけ表示されます。Solo Questでも同じように、「まずは『プリント1枚クエスト』だけを受注しよう」と、タスクを1つに絞り込みます。これで子供のワーキングメモリのパンクを防ぎます。
                  </p>
                </div>
              </div>

              {/* Feature 2: タイムアタック推し */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-amber-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-amber-100 shadow-inner">
                    <span className="text-7xl">⏱️</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    2. 後回しを許さない<br />「タイムアタック機能」
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    優先順位をつけさせる最強の方法は、<strong>「極端に短い時間制限」</strong>を設けることです。「このプリント、5分でクリアできるかタイムアタックだ！」とタイマーを起動します。<br />
                    「今すぐ終わらせなきゃ！」というゲーム的な焦り（作業興奮）が、目先の誘惑（現在バイアス）を上回り、結果的に一番面倒なタスクから手を付けるようになります。
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-slate-200 shadow-inner">
                    <span className="text-7xl">🤖</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    3. AIが「次」へ導く伴走者になる
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    タイムアタックをクリアすると、AIが「素晴らしい集中力だ！」と褒め称えます。親が「じゃあ次はこれやって！」と急かす代わりに、AIのシステムを利用して「次のクエストもクリアして自己ベストを出そう！」とテンションを維持したまま次の優先タスクへと誘導します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ CTAセクション ▼▼▼ */}
        <section className="py-20 bg-indigo-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              「やりなさい」の代わりに「よーい、ドン！」
            </h2>
            <p className="text-indigo-100 mb-10 text-lg">
              Solo Questのタイムアタック機能で、後回しグセをエンタメに変えましょう。<br className="hidden sm:block" />
              今すぐアプリをダウンロードして、最初のクエストを設定してみませんか？
            </p>
            <div className="flex justify-center">
              <Link 
                href="https://apps.apple.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-amber-500 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 items-center justify-center gap-3"
              >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store で手に入れる
              </Link>
            </div>
            <p className="mt-6 text-sm text-indigo-200 font-medium">対応OS: iOS 15.0以降</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}