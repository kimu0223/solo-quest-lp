import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "子供が朝起きられない・朝の支度が遅い対処法 | Solo Quest",
  description: "毎朝「起きなさい！」「早くして！」で始まる1日に疲れていませんか？Solo Questは朝のルーティンをゲームに変えて、子供が自ら起きて支度できる習慣を育てます。",
  alternates: {
    canonical: "https://solo-quest.jp/lp/morning",
  },
  openGraph: {
    title: "子供が朝起きられない・朝の支度が遅い対処法 | Solo Quest",
    description: "毎朝怒鳴って始まる1日を変えたい方へ。Solo Questで朝のルーティンをクエスト化し、子供が自ら動く朝を作りましょう。",
    url: "https://solo-quest.jp/lp/morning",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "毎朝何度起こしても起きません。Solo Questで変わりますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい。Solo Questは朝のルーティンをゲームのクエストに変え、AIが「今日も勇者として起動した！」と称えます。朝起きることが「達成感のある行動」に変わることで、自ら起きる習慣が育ちます。" }
    },
    {
      "@type": "Question",
      "name": "普通のアラームアプリと何が違いますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "アラームは「起こす」だけですが、Solo Questは「起きてからの行動」をゲーム化します。着替え・朝ごはん・歯磨きなど朝の支度全体をクエストにして、AIが進捗を実況します。" }
    },
    {
      "@type": "Question",
      "name": "夜更かしが続いている子供にも効果がありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい。Solo Questは就寝クエストも設定できるため、夜のルーティンからアプローチして生活リズムを整えることも可能です。" }
    },
    {
      "@type": "Question",
      "name": "何歳から使えますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "主に小学1年生〜6年生を対象に設計しています。保護者の方がサポートしながら使えば幼稚園年長さんもご利用いただけます。" }
    }
  ]
};

export default function MorningLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-sky-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-sm font-bold tracking-wider mb-6">
                朝の支度・起床問題を根本から解決するアプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                毎朝「起きなさい！」で<br />
                始まる1日を変えたい。
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                何度呼んでも起きない、起きても動かない、<br />
                ダラダラして毎日ギリギリ…。<br />
                Solo Questは朝のルーティンを「出発クエスト」に変え、<br />
                子供が自ら動く朝を作ります。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <CTAButton
                  href="https://apps.apple.com/"
                  label="App Store で無料DL"
                  eventLabel="morning_lp_hero"
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
              <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden">
                <Image
                  src="/screenshots/screen-voice.png"
                  alt="Solo Questアプリ画面"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* 共感セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              毎朝こんなことが起きていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🛏️</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">何度呼んでも起きない</h3>
                <p className="text-sm text-slate-600">アラームを止めてまた寝る。5回呼んでやっと布団から出ても、ぼーっとしたまま動かない。毎朝親のストレスが限界を超える。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🐢</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">起きても支度がノロノロ</h3>
                <p className="text-sm text-slate-600">やっと起きたと思えば朝ごはんをダラダラ食べ、着替えは10分かけても終わらない。何度声をかけても「うん」だけで動かない。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">😤</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">親がイライラして怒鳴ってしまう</h3>
                <p className="text-sm text-slate-600">結局最後は「早くしなさい！！」と怒鳴って子供は泣きながら登校。仕事が始まる前から疲れ果てて、自己嫌悪の繰り返し。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 原因解説 */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                子供が朝動けないのには、生理学的な理由があります。
              </h2>
              <p className="text-slate-300">
                「やる気がない」「だらしない」ではなく、脳と体の仕組みの問題です。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌙</span> 理由1：子供の体内時計は大人より遅い
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  思春期前後の子供は、メラトニン（睡眠ホルモン）の分泌タイミングが大人より2〜3時間遅いことが研究で示されています。つまり、大人が「当然起きられる時間」でも、子供の体はまだ深い眠りの中にいる可能性があります。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：睡眠相後退と思春期のサーカディアンリズム研究（American Academy of Sleep Medicine）
                </div>
              </div>
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">😶</span> 理由2：「なぜやるか」が分からないと体は動かない
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  「学校があるから」という理由は、子供にとって「やらされる理由」でしかありません。人間は内発的動機（自分がやりたい理由）がないと行動を起こすのが難しい。朝の支度に「やってみたい！」という要素を組み込むことが鍵です。
                </p>
                <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-400">
                  ※参考：自己決定理論（デシ＆ライアン）における内発的動機づけ
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 解決策・機能 */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sky-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                朝を「出発クエスト」に変える3つの仕組み
              </h2>
            </div>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-video rounded-3xl relative overflow-hidden border-4 border-sky-100 shadow-inner bg-slate-900">
                  <Image
                    src="/screenshots/screen-home.png"
                    alt="Solo Questアプリ画面"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. 「今日のミッション」で目覚める朝</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Solo Questは起床と同時に「今日の朝クエスト」を表示します。「7時30分までに着替えとご飯を完了せよ！報酬：+50経験値」という目標が見えると、子供はゲームのキャラクターと同じように「今日もやるぞ！」と感じます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-video rounded-3xl relative overflow-hidden border-4 border-teal-100 shadow-inner bg-slate-900">
                  <Image
                    src="/screenshots/screen-quest.png"
                    alt="Solo Questアプリ画面"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. 各ステップを超短い「ミニクエスト」に分解</h3>
                  <p className="text-slate-600 leading-relaxed">
                    「支度する」という大きなタスクではなく、「①着替え（3分）→②顔を洗う（2分）→③朝ごはん（15分）→④歯磨き（3分）→⑤ランドセル確認（2分）」に分解。1つ終わるごとに「クリア！」という達成感が生まれ、次のステップへの動力になります。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-video rounded-3xl relative overflow-hidden border-4 border-amber-100 shadow-inner bg-slate-900">
                  <Image
                    src="/screenshots/screen-voice.png"
                    alt="Solo Questアプリ画面"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. 出発前の「クエスト達成報告」が習慣を定着させる</h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    玄関を出る前に「出発クエスト、全クリアしました！」とアプリに報告。AIが「見事じゃ！今日も勇者よ、行ってらっしゃい！」と送り出します。親の「今日は早くできたね」という言葉より、AIの称賛が子供のモチベーションに直結します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 声 */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">「怒鳴らない朝が来た」</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「毎朝怒鳴って仕事に行くのが嫌で嫌でたまりませんでした。Solo Questを始めて2週間で、子供がアラームで自分で起きて、声をかけなくても7時台に支度を終わらせるようになりました。泣きそうになりました。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学1年生のワーキングマザー</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「着替えミッション3分というのが刺さったのか、タイマーを自分でセットして服を着るようになりました。『パパより速い！』と得意げに言ってくるのが微笑ましいです。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学3年生のパパ</p>
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
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-sky-500">Q.</span> 低学年の子でも使えますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい。最初は親御さんが一緒にクエストを設定し、操作を教えてあげてください。慣れてくれば、子供が自分でアプリを開いて確認するようになります。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-sky-500">Q.</span> 朝の時間が毎日バラバラです。対応できますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. 曜日ごとに異なる朝クエストを設定できます。習い事がある日・ない日など、家庭のスケジュールに合わせて柔軟に設定してください。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-sky-500">Q.</span> 効果が出るまでどのくらいかかりますか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. 個人差はありますが、多くのご家庭で1〜2週間で変化を感じていただいています。最初の3日間は一緒に使い、ルーティンを一緒に作ることがポイントです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-sky-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              明日の朝から、<br />怒らなくていい。
            </h2>
            <p className="text-sky-100 mb-10 text-lg">
              Solo Questは基本無料でご利用いただけます。<br className="hidden sm:block" />今夜、お子様と一緒に「明日の朝クエスト」を設定してみましょう。
            </p>
            <CTAButton
              href="https://apps.apple.com/"
              label="App Store で手に入れる"
              eventLabel="morning_lp_cta"
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
            <Link href="/lp/homework" className="text-slate-300 hover:text-sky-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 宿題をしない</Link>
            <Link href="/lp/gaming" className="text-slate-300 hover:text-sky-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🎮 ゲームがやめられない</Link>
            <Link href="/lp/time-management" className="text-slate-300 hover:text-sky-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">⏰ 時間管理・ダラダラ</Link>
            <Link href="/lp/priority" className="text-slate-300 hover:text-sky-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位がつけられない</Link>
            <Link href="/blog" className="text-slate-300 hover:text-sky-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 解決コラムを読む</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
