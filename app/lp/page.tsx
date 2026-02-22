import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "子供の悩み別・解決ガイド | Solo Quest",
  description: "朝のダラダラ、ゲームのルール、優先順位がつけられない…。小学生の親御さんが抱える「あるある」な悩み別に、AIとゲーミフィケーションを使った解決策をご提案します。",
};

export default function LPHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
              お子様の「どんなこと」にお悩みですか？
            </h1>
            <p className="text-slate-600 text-lg">
              当てはまるものを選んで、ゲーム開発の知見を取り入れた解決策を見てみましょう。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 悩み1：時間管理 */}
            <Link href="/lp/time-management" className="block group">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">⏰</div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    「早くしなさい！」の無限ループ
                  </h2>
                  <ul className="text-slate-600 space-y-2 mb-6">
                    <li>・朝の準備が絶望的に遅い</li>
                    <li>・ゲームの約束時間を守れない</li>
                    <li>・お風呂や歯磨きを後回しにする</li>
                  </ul>
                  <span className="inline-flex items-center text-teal-600 font-bold">
                    解決策を見る 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* 悩み2：優先順位・タスク管理 */}
            <Link href="/lp/priority" className="block group">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🤯</div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    優先順位がつけられない・パニック
                  </h2>
                  <ul className="text-slate-600 space-y-2 mb-6">
                    <li>・宿題よりYouTubeを優先してしまう</li>
                    <li>・やることが多くてどこから手をつけるか迷う</li>
                    <li>・親が1から10まで指示しないと動けない</li>
                  </ul>
                  <span className="inline-flex items-center text-indigo-600 font-bold">
                    解決策を見る 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-4">他にも様々な解決策（ブログ記事）をご用意しています。</p>
            <Link href="/blog" className="text-slate-600 font-bold border-b border-slate-400 hover:text-teal-600 hover:border-teal-600 transition-colors pb-1">
              ブログ記事一覧を見る
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}