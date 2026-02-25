import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "小学生の「タスク管理」をRPG化！親のガミガミをなくすAIアプリ | Solo Quest",
  description: "紙のチェックリストが続かない小学生へ。日常のタスクを「クエスト」に変え、AIの即時フィードバックと経験値で子供が自ら動くようになるタスク管理アプリ「Solo Quest」。",
};

export default function TaskManagementLP() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-grow pt-16">
        
        {/* ▼▼▼ Hero セクション (画像エリア追加で視覚強化) ▼▼▼ */}
        <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wider mb-6">
                チェックリストが続かない小学生へ
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
                毎日の「タスク」を「クエスト」に。<br />
                親のガミガミをゼロにする。
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
                「宿題やった？」「明日の準備は？」と確認する毎日は終わりにしましょう。<br />
                日常をゲーム化し、AIが褒めて伸ばす、新しい自律型タスク管理ツールです。
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
            
            {/* アプリ画面のモックアップ（視覚的説得力） */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
                {/* 実際のアプリ画面画像に差し替える場所 */}
                <span className="text-slate-500 font-bold">App Screen</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        </section>

        {/* ▼▼▼ 悩み・共感セクション ▼▼▼ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              タスク管理、親が「マネージャー」になっていませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">📝</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">チェック表が3日で終わる</h3>
                <p className="text-sm text-slate-600">ホワイトボードや紙のリストを作っても、最初は面白がるだけで、すぐに飽きて見向きもしなくなる。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🗣️</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">毎日同じ確認で疲労困憊</h3>
                <p className="text-sm text-slate-600">「音読した？」「水筒出した？」と毎日1から10まで確認しないと終わらず、親のストレスが限界に。</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-4xl absolute -top-4 -left-4">🤷</div>
                <h3 className="font-bold text-lg text-slate-700 mb-3 mt-2">「忘れてた」の言い訳</h3>
                <p className="text-sm text-slate-600">タスクが多すぎて子供自身も把握できておらず、悪気なく「忘れてた」と言って怒られる悪循環。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 原因解説セクション ▼▼▼ */}
        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                続かない理由は「報酬（ドーパミン）」不足です
              </h2>
              <p className="text-slate-300">
                なぜゲームなら何時間でも続くのに、現実のタスクは続かないのか？その違いは「仕組み」にあります。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💤</span> 反応が薄すぎる
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  紙のリストに丸をつけてもファンファーレは鳴りません。脳は「行動直後に快感が得られる」ことでやる気を生み出しますが、現実のタスクはフィードバックが薄すぎるのです。
                </p>
              </div>
              <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 relative">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📈</span> 成長が見えない
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  日常の「お手伝い」や「宿題」は、どれだけ頑張っても自分のレベルが上がったのか目に見えません。進捗の可視化がなければ、モチベーションは続きません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ 解決策・機能セクション ▼▼▼ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold tracking-wider text-sm">HOW TO SOLVE</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                Solo Quest流・最強のタスク管理
              </h2>
            </div>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-emerald-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-emerald-100 shadow-inner text-5xl">⚔️</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. タスクを「クエスト」に変換</h3>
                  <p className="text-slate-600 leading-relaxed">
                    「宿題をやりなさい」という命令をやめ、「算数プリント討伐クエスト」としてアプリに登録。言葉をRPG風に変えるだけで、やらされる仕事から「自分が攻略すべきミッション」へと認識が変わります。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                  <div className="bg-amber-50 w-full aspect-video rounded-3xl flex items-center justify-center border-4 border-amber-100 shadow-inner text-5xl">🎉</div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. AIによる「即時フィードバック」</h3>
                  <p className="text-slate-600 leading-relaxed">
                    タスクが終わったらAIに報告。即座に「素晴らしい！伝説の勇者の行動だ！」と称賛してくれます。この「終わった瞬間の気持ちいい反応」が明日のモチベーションを作ります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ NEW: ユーザーの声（社会的証明）セクション ▼▼▼ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              「ガミガミ言わなくなった」の声が届いています
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「毎日ホワイトボードに書いてもダメだったのに、アプリで『クエストだ！』と言うと飛んでいくようになりました。AIが褒めてくれるので私のストレスも激減です。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学2年生のママ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm mb-4">「宿題を後回しにする子でしたが、経験値を稼ぐために自分から机に向かうように。ゲーム好きの子には最高のタスク管理ツールだと思います。」</p>
                <p className="text-xs text-slate-500 font-bold">ー 小学4年生のパパ</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ NEW: FAQ（不安払拭）セクション ▼▼▼ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-10">よくあるご質問</h2>
            <div className="space-y-4">
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-emerald-500">Q.</span> 本当に無料ですか？</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. はい、基本的なタスク管理とクエスト機能はすべて無料でご利用いただけます。</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 flex items-center gap-2"><span className="text-emerald-500">Q.</span> 子供がスマホを持っていないのですが…</h4>
                <p className="text-slate-600 text-sm mt-2 ml-6">A. 親御さんのスマホや、ご家庭のタブレットに入れて一緒に操作していただく形でも十分な効果があります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼▼▼ CTAセクション ▼▼▼ */}
        <section className="py-20 bg-emerald-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              親は「マネージャー」から「応援者」へ
            </h2>
            <p className="text-emerald-100 mb-10 text-lg">
              タスク管理はAIに任せて、子供のレベルアップを一緒に喜ぶ応援者になりませんか？
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

        {/* ▼▼▼ NEW: 離脱防止用リンク（回遊）セクション ▼▼▼ */}
        <section className="py-12 bg-slate-900 text-center border-b border-slate-800">
          <p className="text-slate-400 mb-4 text-sm font-bold">＼ 他の悩みから解決策を探す ／</p>
          <div className="flex flex-wrap justify-center gap-4 px-6">
            <Link href="/lp/time-management" className="text-slate-300 hover:text-emerald-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">⏰ 時間管理・ダラダラ</Link>
            <Link href="/lp/priority" className="text-slate-300 hover:text-emerald-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">🤯 優先順位・パニック</Link>
            <Link href="/blog" className="text-slate-300 hover:text-emerald-400 border border-slate-700 px-4 py-2 rounded-full text-sm transition-colors">📚 解決コラムを読む</Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}