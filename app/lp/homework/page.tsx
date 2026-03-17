import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "宿題をしない子供への対処法 | Solo Quest",
  description: "「宿題やったの？」が毎日の口癖になっていませんか？Solo Questは宿題をRPGのクエストに変換し、子供が自ら机に向かう仕組みを作ります。怒らなくていい毎日へ。",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "宿題の内容によって使い方は変わりますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "どんな宿題でも「クエスト」として登録できます。漢字・計算・読書・自由研究など、タイプに合わせてAIが声かけを変えます。" }
    },
    {
      "@type": "Question",
      "name": "ゲームとの連動はありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "宿題クリアで獲得した経験値を使って、アプリ内で好きなキャラクターや称号を解放できます。これが「宿題をする→ゲームに有利になる」という好循環を生みます。" }
    },
    {
      "@type": "Question",
      "name": "低学年でも使えますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい。ひらがなが読める年齢から使えるようにUIを設計しています。最初は親御さんが一緒に操作し、慣れてきたら子供だけで使えるようになります。" }
    }
  ]
};

export default function HomeworkLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-amber-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wider mb-6">
                小学生の「宿題しない」を根本解決するアプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                「宿題やったの？」を<br />
                もう言わなくて済む日が来る。
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                帰ってきてもゲーム・YouTube・お菓子…。<br />
                宿題だけが後回しになる毎日に疲れていませんか？<br />
                Solo Questは、宿題を「こなすもの」から「攻略するもの」に変えます。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <CTAButton
                  href="https://apps.apple.com/"
                  label="App Store で無料DL"
                  eventLabel="homework_lp_hero"
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
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* 共感セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              宿題のことで、こんな思いをしていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">📚</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">帰宅してもまず遊ぶ</h3>
                <p className="text-sm text-slate-600">ランドセルを放り投げてゲームへ直行。「宿題は？」と聞くたびに「あとでやる」。夜になって慌ててやるか、結局やらずに寝てしまう。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">😤</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">隣でついてないとやらない</h3>
                <p className="text-sm text-slate-600">机に座らせても、親が席を外した瞬間にマンガを読んでいる。結局ずっと監視していないと進まず、親が疲弊してしまう。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">😭</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">泣いて嫌がる・癇癪になる</h3>
                <p className="text-sm text-slate-600">「宿題しなさい！」と言うと泣いたり怒ったりして逆効果。宿題のたびに親子関係が悪化していく気がして、もう疲れた…。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 原因解説 */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                「やる気がない」のではなく、「やり方」の問題です。
              </h2>
              <p className="text-slate-300">
                子供が宿題を後回しにするのは、性格の問題ではありません。脳の仕組みに原因があります。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧠</span> 理由1：「報酬」の遅延が苦手
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  ゲームはやった瞬間に「楽しい」という報酬が得られます。一方、宿題は「将来役に立つ」という非常に遠い未来の報酬しかありません。子供の脳はまだ遠い未来の報酬より、目の前の楽しさを強く優先してしまいます。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：「遅延割引」と報酬系の発達心理学
                </div>
              </div>
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📉</span> 理由2：「ゴールが見えない」不安
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「宿題をやりなさい」という指示は、終わりが曖昧で達成感が生まれにくい作業です。ゲームは「ボスを倒す」「レベルアップする」という明確なゴールがあるから熱中できます。宿題も同じ構造にすれば、自然と取り組めます。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：フロー理論（チクセントミハイ）とゴール明確化の効果
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 解決策・機能 */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-amber-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                宿題を「クエスト」に変換する3つの仕組み
              </h2>
            </div>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-amber-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-amber-100 shadow-inner text-5xl">⚔️</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. 宿題を「討伐クエスト」に変換</h3>
                  <p className="text-slate-600 leading-relaxed">
                    「漢字ドリル10問」ではなく「漢字10文字を打倒せよ！」。「計算プリント1枚」は「算術の魔物を5分で全滅させろ！」に変換。同じ作業でも名前を変えるだけで、子供の脳への伝わり方がまったく違います。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-teal-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-teal-100 shadow-inner text-5xl">🎤</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. 終わったら声で「クリア報告」</h3>
                  <p className="text-slate-600 leading-relaxed">
                    宿題が終わったらアプリに向かって「計算問題、クリアしました！」と声で報告します。AIが「見事な速さだ、勇者よ！今日の経験値は最高値だ！」と称賛。親に怒られるのを避けるためではなく、AIに認められるために動くよう変わっていきます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-100 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-slate-200 shadow-inner text-5xl">📊</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. 親は「記録」で見守るだけ</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    何時に宿題を始めて何分でクリアしたか、アプリが自動で記録します。「宿題やったの？」と聞かなくても、アプリを見れば一目瞭然。親の役割は監視員からサポーターに変わります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 声 */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">「毎日の宿題バトルがなくなりました」</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「帰ってすぐゲームをして、宿題は夜10時過ぎることも珍しくありませんでした。Solo Questを使ってからは、帰宅後30分以内に自分から机に向かうようになりました。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学2年生のママ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「『宿題クリアした！』とアプリに向かって叫んでいる子供を見て、これが親の理想の姿だと思いました。宿題が自分から取り組む習慣になったのが信じられません。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学4年生のパパ</p>
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
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-amber-500">Q.</span> 宿題の内容によって使い方は変わりますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. どんな宿題でも「クエスト」として登録できます。漢字・計算・読書・自由研究など、タイプに合わせてAIが声かけを変えます。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-amber-500">Q.</span> ゲームとの連動はありますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. 宿題クリアで獲得した経験値を使って、アプリ内で好きなキャラクターや称号を解放できます。これが「宿題をする→ゲームに有利になる」という好循環を生みます。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-amber-500">Q.</span> 低学年でも使えますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい。ひらがなが読める年齢から使えるようにUIを設計しています。最初は親御さんが一緒に操作し、慣れてきたら子供だけで使えるようになります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-amber-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              「宿題やったの？」を<br />今日で最後にしませんか？
            </h2>
            <p className="text-amber-100 mb-10 text-lg">
              Solo Questは基本無料でご利用いただけます。<br className="hidden sm:block" />お子様と一緒に、最初の宿題クエストを始めましょう。
            </p>
            <CTAButton
              href="https://apps.apple.com/"
              label="App Store で手に入れる"
              eventLabel="homework_lp_cta"
              className="inline-flex bg-white text-amber-600 font-bold text-xl px-12 py-5 rounded-xl shadow-xl hover:bg-amber-50 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-3"
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
            <Link href="/lp/gaming" className="text-slate-300 hover:text-amber-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🎮 ゲームがやめられない</Link>
            <Link href="/lp/morning" className="text-slate-300 hover:text-amber-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🌅 朝起きられない</Link>
            <Link href="/lp/time-management" className="text-slate-300 hover:text-amber-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">⏰ 時間管理・ダラダラ</Link>
            <Link href="/lp/priority" className="text-slate-300 hover:text-amber-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位がつけられない</Link>
            <Link href="/blog" className="text-slate-300 hover:text-amber-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 解決コラムを読む</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
