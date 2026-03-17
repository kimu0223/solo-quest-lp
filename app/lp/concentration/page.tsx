import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "子供の集中力が続かない悩みを解決 | Solo Quest",
  description: "「すぐ飽きる」「5分も座っていられない」「気が散って宿題が終わらない」。子供の集中力が続かない本当の理由と、ゲーミフィケーションで集中を習慣化する方法をSolo Questが解説します。",
  alternates: {
    canonical: "https://solo-quest.jp/lp/concentration",
  },
  openGraph: {
    title: "子供の集中力が続かない悩みを解決 | Solo Quest",
    description: "「また気が散ってる！」を繰り返す日々を終わらせたい方へ。Solo Questで集中を「仕組み」で引き出しましょう。",
    url: "https://solo-quest.jp/lp/concentration",
    type: "website",
  },
};

export default function ConcentrationLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wider mb-6">
                小学生の「集中できない」を根本解決するアプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                「また気が散ってる！」を<br />
                もう言わなくて済む日が来る。
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                机に座っても5分で立ち上がる、ペンを持ってぼーっとする…。<br />
                集中力が続かないのは、意志の弱さではありません。<br />
                Solo Questは、集中を「仕組み」で引き出します。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <CTAButton
                  href="https://apps.apple.com/"
                  label="App Store で無料DL"
                  eventLabel="concentration_lp_hero"
                  className="w-full sm:w-auto bg-purple-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
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
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* 共感セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              集中力のことで、こんな思いをしていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">😶</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">机に座ってもボーっとする</h3>
                <p className="text-sm text-slate-600">「勉強しなさい」と言って机に座らせても、鉛筆を持ったままぼーっとして一向に進まない。気づいたら窓の外を眺めている。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🦋</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">5分おきに立ち上がる</h3>
                <p className="text-sm text-slate-600">お水を飲みに行く、鉛筆を取りに行く、トイレに行く…。次々と理由をつけては席を立ち、30分の宿題が2時間かかる。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">📱</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">少しの刺激で全部リセット</h3>
                <p className="text-sm text-slate-600">ようやく集中してきたと思ったら、スマホの通知音や兄弟の声で一気に集中が切れる。そこから再スタートまでまた時間がかかる。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 原因解説 */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
                「飽きっぽい」のではなく、「仕組み」の問題です。
              </h2>
              <p className="text-slate-300">
                子供が集中できないのは性格の問題ではありません。脳の発達段階と環境設計に原因があります。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧠</span> 理由1：前頭前野がまだ未発達
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  集中力・衝動制御・計画立案を担う前頭前野は、25歳頃まで発達し続けます。小学生の脳はまだ「集中を持続させる機能」が物理的に未熟な状態です。「意志が弱い」のではなく、脳がまだその機能を持っていないのです。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：前頭前野の発達と実行機能（Executive Function）研究
                </div>
              </div>
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> 理由2：ゴールが不明確で達成感がない
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「勉強しなさい」という指示には終わりがありません。人間の脳は「どこまで頑張ればいいか」が見えない作業を苦手とします。ゲームが集中を引き出せるのは「このボスを倒す」という明確なゴールがあるから。同じ構造を学習に作れば、集中は自然と続くようになります。
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
              <span className="text-purple-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                集中力を「仕組み」で引き出す3つのステップ
              </h2>
            </div>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-purple-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-purple-100 shadow-inner text-5xl">🎯</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. 「タイムアタッククエスト」でゴールを明確化</h3>
                  <p className="text-slate-600 leading-relaxed">
                    「宿題やりなさい」ではなく「漢字10問を10分以内に攻略せよ！」というクエストに変換。終わりが見えることで、子供の脳は「ゴールまで全力で走る」モードに切り替わります。タイムアタック形式が適度な緊張感を生み、集中力を最大化します。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-violet-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-violet-100 shadow-inner text-5xl">🔔</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. 「集中タイマー」で席を立つ衝動をコントロール</h3>
                  <p className="text-slate-600 leading-relaxed">
                    集中の持続時間は最初から長くする必要はありません。最初は5分、慣れたら10分、15分と段階的に伸ばしていきます。アプリのタイマーが「まだ3分残ってるよ！もう少しで完了だ！」と声かけすることで、衝動的な離席を防ぎます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-fuchsia-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-fuchsia-100 shadow-inner text-5xl">⭐</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. クリア直後の「AIからの即時称賛」で集中を強化</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    集中してクエストをクリアしたら、すぐに「見事な集中力だ！今日の記録は8分32秒、先週より1分速い！」とAIが称賛します。集中した直後に褒められる体験が繰り返されると、「集中すること」自体が気持ちいいと脳が学習し、習慣化していきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 声 */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">「集中できる子に変わりました」</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「宿題が終わるまで1時間以上かかっていたのが、Solo Questを使い始めてから30分以内に終わるようになりました。タイムアタック形式が息子にドンピシャでした。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学3年生のママ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「ADHDグレーゾーンの娘で、集中力がなくずっと悩んでいました。AIが優しく声かけしてくれるので、娘も嬉しそうに取り組んでいます。最近は自分からアプリを開くようになりました。」</p>
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
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-purple-500">Q.</span> 集中できる時間が本当に短い場合でも効果がありますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい。Solo Questは最短3分のクエストから設定できます。「3分集中できた！」という小さな成功体験を積み重ねることで、少しずつ集中時間を伸ばしていくことができます。最初から長く集中させようとするのは逆効果です。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-purple-500">Q.</span> ADHD傾向の子供にも使えますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. Solo Questは医療機器ではありませんが、短時間の明確なゴール設定・即時フィードバック・視覚的な進捗表示という特性は、注意力の維持が難しい子供にとって取り組みやすい設計になっています。ただし、専門医の診断・指導のもとでご利用ください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-purple-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              「また気が散ってる！」を<br />今日で最後にしませんか？
            </h2>
            <p className="text-purple-100 mb-10 text-lg">
              Solo Questは基本無料でご利用いただけます。<br className="hidden sm:block" />お子様と一緒に、最初の集中クエストを始めましょう。
            </p>
            <CTAButton
              href="https://apps.apple.com/"
              label="App Store で手に入れる"
              eventLabel="concentration_lp_cta"
              className="inline-flex bg-white text-purple-700 font-bold text-xl px-12 py-5 rounded-xl shadow-xl hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-3"
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
            <Link href="/lp/homework" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 宿題をしない</Link>
            <Link href="/lp/gaming" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🎮 ゲームがやめられない</Link>
            <Link href="/lp/morning" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🌅 朝起きられない</Link>
            <Link href="/lp/time-management" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">⏰ 時間管理・ダラダラ</Link>
            <Link href="/lp/priority" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位がつけられない</Link>
            <Link href="/blog" className="text-slate-300 hover:text-purple-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📖 解決コラムを読む</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
