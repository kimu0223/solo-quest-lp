import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "勉強しない小学生が自ら机に向かう方法 | Solo Quest",
  description: "「勉強しなさい」が毎日の口癖になっていませんか？Solo Questは勉強をRPGクエストに変え、AIが即座に子供を褒めて「また頑張りたい」という気持ちを育てます。無料で試せます。",
  alternates: {
    canonical: "https://solo-quest.jp/lp/study",
  },
  openGraph: {
    title: "勉強しない小学生が自ら机に向かう方法 | Solo Quest",
    description: "「勉強しなさい」を繰り返す毎日を終わらせたい方へ。Solo Questで勉強をクエスト化し、子供が自ら机に向かう習慣を作りましょう。",
    url: "https://solo-quest.jp/lp/study",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Solo Questで本当に子供が自分から勉強するようになりますか？",
    a: "はい。Solo Questは「勉強=クエスト」という発想で、宿題や学習タスクをRPGのミッションに変換します。子供がクエストをクリアするたびにAIがRPG口調で褒めるため、「もう1問やりたい」という内発的動機づけが生まれます。",
  },
  {
    q: "勉強の内容はアプリが決めるのですか？",
    a: "いいえ、勉強の内容はお子様と保護者の方が決めます。Solo Questは「何を学ぶか」ではなく「どう取り組むか」をサポートするツールです。宿題・ドリル・読書など、どんな学習タスクでもクエスト化できます。",
  },
  {
    q: "ゲームが好きな子供に特に効果がありますか？",
    a: "はい。Solo Questはゲームの「達成感・報酬・ストーリー性」を学習に応用するため、ゲーム好きのお子様ほど夢中になる傾向があります。「ゲームより勉強」ではなく「勉強もゲームのように楽しい」に変える設計です。",
  },
  {
    q: "何歳から使えますか？",
    a: "主に小学1年生〜6年生を対象に設計していますが、幼稚園年長さんや中学生の方にもご利用いただいています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function StudyLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wider mb-6">
                小学生の「勉強しない」を根本解決するアプリ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                「勉強しなさい」で<br />
                一日が終わっていませんか？
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                声がけ・怒鳴り・ご褒美作戦…。<br />
                どれも長続きしないのには理由があります。<br className="hidden md:block" />
                Solo Questは子供が<strong>「自分からやりたくなる仕組み」</strong>を作ります。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <CTAButton
                  href="https://apps.apple.com/jp/app/solo-quest/id6739063143"
                  label="無料で試してみる"
                  eventLabel="lp_study_hero_cta"
                  className="w-full sm:w-auto bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  無料で試してみる
                </CTAButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden">
                <Image
                  src="/screenshots/screen-result.png"
                  alt="Solo Questアプリ画面 - 勉強クエスト達成"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </section>

        {/* 共感セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              「勉強しなさい」を言うたびに<br className="hidden md:block" />
              親子関係が少しずつ壊れていく
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: "😤", title: "1日に何回言っても動かない", desc: "声がけしても「あとで」「わかった」だけ。何時間も経って結局やっていない。" },
                { emoji: "😞", title: "ご褒美作戦が通じなくなった", desc: "最初は効いても1週間で飽きる。どんどんご褒美を釣り上げないといけない悪循環。" },
                { emoji: "😰", title: "怒鳴ると自己嫌悪になる", desc: "怒鳴っても効果がなく、夜は子供の寝顔に謝る毎日。このままでいいのか不安。" },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="text-4xl mb-4">{emoji}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 原因セクション */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              子供が勉強しない本当の理由
            </h2>
            <p className="text-slate-300 text-center mb-12">やる気がないのではありません。仕組みが足りないだけです。</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "即時報酬がない", desc: "ゲームは1秒で「レベルアップ！」と褒めてくれます。勉強は頑張っても次のテストまで何の反応もない。" },
                { num: "02", title: "ゴールが見えない", desc: "「宿題やりなさい」は終わりが見えない。ゲームのクエストは「あと3問でクリア」が可視化されています。" },
                { num: "03", title: "褒められ体験が少ない", desc: "親は怒ることはあっても、勉強の過程を褒めることは少ない。「できた！」を誰かに認めてほしい。" },
              ].map(({ num, title, desc }) => (
                <div key={num} className="bg-slate-700 rounded-2xl p-6">
                  <div className="text-indigo-400 font-black text-3xl mb-3">{num}</div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 解決策セクション */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Solo Questが3つの問題を同時に解決
            </h2>
            <p className="text-slate-500 text-center mb-12">ゲームの仕組みをそのまま勉強に応用します</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "即時フィードバック", desc: "タスクをクリアした瞬間、AIが「よくやった、勇者よ！」と称えます。勉強の達成感が即座に得られます。" },
                { icon: "🎯", title: "クエスト化で可視化", desc: "「算数ドリル3ページ」がクエストになり、進捗バーで残りが一目でわかります。終わりが見えると動けます。" },
                { icon: "⭐", title: "経験値で成長実感", desc: "頑張るたびに経験値が貯まり、キャラクターが育ちます。努力の積み重ねが目に見えるのでやる気が続きます。" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 機能STEP */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              3ステップで「勉強するキャラ」に変わる
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "STEP 1",
                  title: "今日の「勉強クエスト」をセット",
                  desc: "宿題・ドリル・読書など今日やることをクエストとして登録。親子で一緒に設定するとさらに効果的です。",
                  img: "/screenshots/screen-quest.png",
                  color: "bg-indigo-100 text-indigo-700",
                },
                {
                  step: "STEP 2",
                  title: "クリアしたらAIに声で報告",
                  desc: "「算数ドリル終わった！」と子供が声で報告。AIがRPG口調で全力で褒めてくれます。",
                  img: "/screenshots/screen-praise.png",
                  color: "bg-indigo-100 text-indigo-700",
                },
                {
                  step: "STEP 3",
                  title: "経験値を貯めてキャラが成長",
                  desc: "勉強するたびに経験値が貯まり、キャラクターが強くなります。努力が目に見えるので続けやすい。",
                  img: "/screenshots/screen-result.png",
                  color: "bg-indigo-100 text-indigo-700",
                },
              ].map(({ step, title, desc, img, color }, i) => (
                <div key={step} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
                  <div className="md:w-1/2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-black mb-4 ${color}`}>{step}</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-48 h-96 bg-slate-800 rounded-[2.5rem] border-8 border-slate-800 shadow-xl relative overflow-hidden">
                      <Image src={img} alt={title} fill className="object-cover object-top" sizes="192px" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">よくある質問</h2>
            <div className="space-y-4">
              {faqItems.map(({ q, a }) => (
                <details key={q} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
                  <summary className="px-6 py-5 font-bold text-slate-800 cursor-pointer list-none flex justify-between items-center hover:bg-indigo-50 transition-colors">
                    {q}
                    <span className="text-indigo-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 最終CTA */}
        <section className="py-24 bg-indigo-700 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              今日から「勉強しなさい」をやめませんか？
            </h2>
            <p className="text-indigo-200 mb-10 text-sm md:text-base">
              Solo Questは無料でダウンロードできます。<br />
              まず1週間、子供と一緒に試してみてください。
            </p>
            <CTAButton
              href="https://apps.apple.com/jp/app/solo-quest/id6739063143"
              label="App Storeで無料ダウンロード"
              eventLabel="lp_study_bottom_cta"
              className="inline-flex items-center gap-3 bg-white text-indigo-700 font-black text-lg px-10 py-5 rounded-2xl shadow-xl hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              App Storeで無料ダウンロード
            </CTAButton>
            <p className="text-indigo-300 text-xs mt-6">iOS専用 · 完全無料 · 広告なし</p>
          </div>
        </section>

        {/* 回遊リンク */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-slate-500 mb-6">他のお悩みも解決できます</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: "/lp/homework", emoji: "📚", label: "宿題をしない" },
                { href: "/lp/gaming", emoji: "🎮", label: "ゲームをやめられない" },
                { href: "/lp/time-management", emoji: "⏰", label: "時間管理・ダラダラ" },
                { href: "/lp/concentration", emoji: "🧠", label: "集中力が続かない" },
              ].map(({ href, emoji, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-indigo-400 hover:text-indigo-700 hover:shadow-sm transition-all">
                  <span>{emoji}</span><span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
