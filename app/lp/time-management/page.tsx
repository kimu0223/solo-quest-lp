import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "子供の時間管理・ダラダラ対策に！AI実況アプリ | Solo Quest",
  description: "「朝の準備が遅い」「ゲームをやめない」など、子供の時間管理にお悩みの方へ。Solo Questは時間を可視化し、性格に合わせたAIのサポートで子供を「自ら動く勇者」に変えるiOS専用アプリです。",
};

export default function TimeManagementLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-grow pt-16">
        
        {/* ▼▼▼ Hero セクション (画像エリア追加) ▼▼▼ */}
        <section className="relative bg-gradient-to-b from-teal-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-sm font-bold tracking-wider mb-6">
                小学生の「ダラダラ・後回し」解消アプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                「早くしなさい！」の無限ループ、<br />
                もう終わりにしませんか？
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                朝の支度、ゲームの時間、寝る前の歯磨き…。<br />
                見えない「時間」をゲームのように可視化し、AIがその子に合わせたサポートを行うことで、子供を自ら動く勇者に変える新しい時間管理アプリです。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link 
                  href="https://apps.apple.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  App Store で無料DL
                </Link>
              </div>
            </div>
            
            {/* アプリ画面のモックアップ */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <span className="text-slate-500 font-bold">App Screen</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* ▼▼▼ 悩み・共感セクション ▼▼▼ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              子供の「時間管理」に、こんな疲れを感じていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">⏰</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">朝の準備が絶望的に遅い</h3>
                <p className="text-sm text-slate-600">「早く着替えて！」「ご飯遊びながら食べないで！」毎朝玄関で叫んで、仕事前に親のHPがゼロに…。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🎮</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">ゲームの時間を守れない</h3>
                <p className="text-sm text-slate-600">「あとちょっと！」が30分続く。無理やり没収すると癇癪を起こし、親も自己嫌悪の繰り返し。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">💤</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">夜のルーティンを後回し</h3>
                <p className="text-sm text-slate-600">お風呂も歯磨きも「あとでやる」。ダラダラして結局寝る時間が遅くなり、翌朝起きられない悪循環。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 原因解説セクション ▼▼▼ */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                時間を守れないのは「性格」ではありません。
              </h2>
              <p className="text-slate-300">
                心理学や脳科学の知見から見ると、子供が時間を守れないのには明確な理由があります。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧠</span> 理由1：前頭葉が未発達だから
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「遅刻するから急ごう」と将来を見据えてブレーキをかける脳の部位（前頭葉）は、小学生ではまだ未熟です。目の前の「遊びたい」という強い欲求（ドーパミン）には、自制心だけでは勝てないのが自然な状態です。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  <p>※参考：脳科学における「前頭前野」の発達過程</p>
                </div>
              </div>
              
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">⏳</span> 理由2：時間が「見えていない」
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「8時までに出るよ」という抽象的な数字は、子供にはピンときません。人は「時間がある」と思うほど、その時間をすべて使い切るようにダラダラと行動を引き伸ばしてしまう心理的傾向があります。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  <p>※参考：パーキンソンの法則（第1法則）、および「時間割引」の概念</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 解決策・機能セクション ▼▼▼ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                Solo Questで、時間を「攻略」する
              </h2>
            </div>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-teal-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-teal-100 shadow-inner text-5xl">⏱️</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. ダラダラを消し去る<br />「タイムアタック・クエスト」</h3>
                  <p className="text-slate-600 leading-relaxed">
                    「8時までに着替える」という長い枠ではなく、「着替えミッション、制限時間3分！」と設定します。目の前の1つのタスクに極端に短い制限時間を設けることで、「あとでやる」という余地を物理的に消し去ります。
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-amber-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-amber-100 shadow-inner text-5xl">🤝</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. その子に合わせて伴走する<br />AIパートナー</h3>
                  <p className="text-slate-600 leading-relaxed">
                    準備が終わったらアプリに報告します。AIがその子の性格に合わせたトーンで「驚異のスピードだ！」「昨日より早くできたね」と称賛することで、親に怒られないためではなく「認められるため」に自ら動くようになります。
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-slate-200 shadow-inner text-5xl">📜</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. 感情論を排除する<br />「ギルドの掟」システム</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    ゲームの時間を守れなかった時、親が怒って没収するのはお互いに強いストレスを生みます。時間を過ぎたら「システムが発動して経験値が減っちゃったね」と事務的に伝えるだけ。親は怒る「監視者」から「味方」に変わります。
                  </p>
                  <div className="bg-slate-50 p-2 rounded text-xs text-slate-500">※アドラー心理学の「論理的結末」を応用</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ ユーザーの声セクション ▼▼▼ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              「毎朝の怒声が消えました」
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「タイムアタックをゲーム感覚で楽しんでいて、ダラダラしていた朝の準備の時間が半分になりました！私が怒る前に自分から動くので本当に助かっています。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学1年生のママ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「ゲームの時間を過ぎるとAIのシステムで『デバフ』がかかるルールにしたところ、私が力ずくで取り上げなくても、すんなりやめるようになりました。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学3年生のパパ</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ FAQセクション ▼▼▼ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-10">よくあるご質問</h2>
            <div className="space-y-4">
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-teal-500">Q.</span> 本当に無料ですか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい、時間管理やクエスト機能はすべて無料でご利用いただけます。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-teal-500">Q.</span> 子供がスマホを持っていないのですが…</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. 親御さんのスマホでアプリを開き、一緒にタイマーをセットしたり報告したりする形でも十分な効果があります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ CTAセクション ▼▼▼ */}
        <section className="py-20 bg-teal-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              毎日の「早くしなさい」を手放そう
            </h2>
            <p className="text-teal-100 mb-10 text-lg">
              Solo Questは基本無料でご利用いただけます。<br className="hidden sm:block" />今すぐアプリをダウンロードして、お子様と一緒に最初のクエストを設定してみませんか？
            </p>
            <Link 
              href="https://apps.apple.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-amber-500 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-3"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              App Store で手に入れる
            </Link>
          </div>
        </section>

        {/* ▼▼▼ 回遊リンクセクション ▼▼▼ */}
        <section className="py-12 bg-slate-900 text-center border-b border-slate-800">
          <p className="text-slate-400 mb-4 text-sm font-bold">＼ 他の悩みから解決策を探す ／</p>
          <div className="flex flex-wrap justify-center gap-4 px-6">
            <Link href="/lp/priority" className="text-slate-300 hover:text-teal-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位・パニック</Link>
            <Link href="/lp/task-management" className="text-slate-300 hover:text-teal-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📝 タスク管理・三日坊主</Link>
            <Link href="/blog" className="text-slate-300 hover:text-teal-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 解決コラムを読む</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}