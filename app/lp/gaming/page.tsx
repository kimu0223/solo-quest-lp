import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "子供がゲームをやめられない・スマホ依存の対処法 | Solo Quest",
  description: "「ゲームやめなさい！」が1日に何回もある方へ。Solo Questはゲームの時間ルールを親子で設定し、子供が自分でやめる仕組みを作ります。没収・怒鳴りなしで解決。",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "スマホゲームだけでなくSwitchなどの据え置きゲームにも使えますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい。Solo Questはゲーム機の種類を問わず、「時間ルールを決めて守る」という行動習慣のサポートをします。" }
    },
    {
      "@type": "Question",
      "name": "ルールを守れなかった時のペナルティはありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "アプリ内で経験値が減る「デバフ」が入ります。親が感情的に怒る必要がなく、「システムのルール」として子供が受け入れやすくなります。" }
    },
    {
      "@type": "Question",
      "name": "子供がルールを変えようとしてきます。どうすればいいですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "ルールの変更は「週に1回、家族会議で話し合う」という仕組みをアプリでサポートしています。子供の意見を聞きながら、合理的なルールを一緒に更新していけます。" }
    }
  ]
};

export default function GamingLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-violet-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 text-sm font-bold tracking-wider mb-6">
                ゲーム依存・スマホ時間問題を解決するアプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                ゲームを「没収」しても<br />
                何も解決しない。
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                怒って取り上げて、泣かれて、自己嫌悪…。<br />
                毎日繰り返すこのサイクルに、もう疲れていませんか？<br />
                Solo Questは子供が「自分でやめる力」を育てます。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <CTAButton
                  href="https://apps.apple.com/"
                  label="App Store で無料DL"
                  eventLabel="gaming_lp_hero"
                  className="w-full sm:w-auto bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  App Store で無料DL
                </CTAButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <span className="text-slate-500 font-bold">App Screen</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* 共感セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              ゲームのことで、毎日こんなことになっていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🎮</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">「あとちょっと！」が永遠に続く</h3>
                <p className="text-sm text-slate-600">「30分だけ」と決めても、30分後には「あとセーブするまで」→「あとボスだけ」。気づいたら2時間経っている。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">😡</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">取り上げると大爆発</h3>
                <p className="text-sm text-slate-600">無理やりやめさせると大泣き・叫ぶ・物を投げる…。毎回消耗戦で、親も子もボロボロになってしまう。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">📵</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">ゲーム以外のことが全部後回し</h3>
                <p className="text-sm text-slate-600">宿題・お風呂・食事・睡眠。すべてがゲームの後回しになり、生活リズムが崩れて翌日の学校に影響が出ている。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 原因解説 */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                ゲームをやめられないのは「意志が弱い」からではありません。
              </h2>
              <p className="text-slate-300">
                ゲームは「やめられないよう設計された」プロダクトです。子供の脳はその仕掛けに勝てません。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> 理由1：ゲームはドーパミンを意図的に出し続ける
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  ゲームはレベルアップ・報酬・ランキングなど、常に次の目標を提示して「やめるタイミング」を意図的になくしています。これはギャンブルと同じ心理設計で、大人でも抗うのは難しいものです。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：可変報酬スケジュール（スキナー）とゲームデザイン
                </div>
              </div>
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚫</span> 理由2：「ダメ」という禁止は逆効果
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  親に取り上げられて強制終了されると、子供の脳は「次にやれる機会に全力でやろう」と学習します。禁止は渇望を強化します。「自分でやめた」という成功体験を積み重ねることが、本当の解決につながります。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：心理的リアクタンス理論（ブレーム）
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 解決策・機能 */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-violet-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                「自分でやめる力」を育てる3つの仕組み
              </h2>
            </div>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-violet-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-violet-100 shadow-inner text-5xl">🤝</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. 「ギルドの掟」を一緒に作る</h3>
                  <p className="text-slate-600 leading-relaxed">
                    親が一方的に「30分ね」と決めるのではなく、子供と一緒に「何時まで」「やること終わったら何分」などのルールを作ります。自分で決めたルールは守りやすい。これがすべての出発点です。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-amber-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-amber-100 shadow-inner text-5xl">⏰</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. 終了5分前の「事前アラート」</h3>
                  <p className="text-slate-600 leading-relaxed">
                    時間ギリギリに言われると人は焦って反発します。Solo Questは終了5分前に「残り5分だ、区切りのいいところまでやっておこう」とアラートを出します。心の準備ができるので、スムーズにやめられます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-slate-200 shadow-inner text-5xl">🏆</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. 「自分でやめた」ことを称賛する</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    時間通りにゲームをやめてアプリに報告すると、AIが「お主の自制力、まさに勇者の証！」と大絶賛。親に怒られなかったことへの安堵より、「自制できた自分」への誇りが育ちます。
                  </p>
                  <div className="bg-slate-50 p-2 rounded text-xs text-slate-500">※アドラー心理学の「勇気づけ」を応用</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 声 */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">「ゲームを巡る戦争が終わりました」</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「毎日ゲームで喧嘩してうんざりしていました。Solo Questでルールを一緒に決めてからは、アラートが鳴ると自分からやめるようになりました。親子関係が劇的に改善しました。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学3年生のママ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「没収すると翌日も翌々日も根に持つので困っていました。AIがやめた時に褒めてくれるようになってから、やめること自体を達成感に感じているみたいで、素直にやめてくれます。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学5年生のパパ</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-10">よくあるご質問</h2>
            <div className="space-y-4">
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-violet-500">Q.</span> スマホゲームだけでなくSwitchなどの据え置きゲームにも使えますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい。Solo Questはゲーム機の種類を問わず、「時間ルールを決めて守る」という行動習慣のサポートをします。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-violet-500">Q.</span> ルールを守れなかった時のペナルティはありますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. アプリ内で経験値が減る「デバフ」が入ります。親が感情的に怒る必要がなく、「システムのルール」として子供が受け入れやすくなります。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-violet-500">Q.</span> 子供がルールを変えようとしてきます。どうすればいいですか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. ルールの変更は「週に1回、家族会議で話し合う」という仕組みをアプリでサポートしています。子供の意見を聞きながら、合理的なルールを一緒に更新していけます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-violet-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              「ゲームやめなさい！」を<br />今日で終わりにしよう
            </h2>
            <p className="text-violet-100 mb-10 text-lg">
              Solo Questは基本無料でご利用いただけます。<br className="hidden sm:block" />お子様と一緒に、最初のゲームルールを設定してみましょう。
            </p>
            <CTAButton
              href="https://apps.apple.com/"
              label="App Store で手に入れる"
              eventLabel="gaming_lp_cta"
              className="inline-flex bg-amber-500 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-3"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              App Store で手に入れる
            </CTAButton>
          </div>
        </section>

        {/* 回遊リンク */}
        <section className="py-12 bg-slate-900 text-center border-b border-slate-800">
          <p className="text-slate-400 mb-4 text-sm font-bold">＼ 他の悩みから解決策を探す ／</p>
          <div className="flex flex-wrap justify-center gap-4 px-6">
            <Link href="/lp/homework" className="text-slate-300 hover:text-violet-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 宿題をしない</Link>
            <Link href="/lp/morning" className="text-slate-300 hover:text-violet-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🌅 朝起きられない</Link>
            <Link href="/lp/time-management" className="text-slate-300 hover:text-violet-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">⏰ 時間管理・ダラダラ</Link>
            <Link href="/lp/priority" className="text-slate-300 hover:text-violet-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位がつけられない</Link>
            <Link href="/blog" className="text-slate-300 hover:text-violet-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 解決コラムを読む</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
