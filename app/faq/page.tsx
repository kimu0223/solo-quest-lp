import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🌱</span>
            <span className="font-black tracking-tight text-slate-800 group-hover:text-teal-600 transition-colors">
              Solo Quest
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-4">よくある質問</h1>
          <p className="text-slate-500">ギルドによく届く質問をまとめました</p>
        </div>

        <div className="space-y-6">
          {/* Q1 */}
          <div className="clay-card p-6 bg-white">
            <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-start gap-3">
              <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded text-sm shrink-0 mt-1">Q</span>
              アプリは無料ですか？
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed pl-9">
              はい、Solo Questはダウンロード無料でお使いいただけます。将来的にプレミアム機能（サブスクリプション等）を追加する可能性がありますが、基本的な機能は無料で提供し続ける予定です。
            </p>
          </div>

          {/* Q2 */}
          <div className="clay-card p-6 bg-white">
            <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-start gap-3">
              <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded text-sm shrink-0 mt-1">Q</span>
              子供の音声データは保存されますか？
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed pl-9">
              いいえ、保存されません。音声データはAIによる解析のために一時的に送信されますが、<strong>解析完了後、即座にサーバーから破棄されます。</strong> また、AIの学習データとして利用されることもありません。
            </p>
          </div>

          {/* Q3 */}
          <div className="clay-card p-6 bg-white">
            <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-start gap-3">
              <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded text-sm shrink-0 mt-1">Q</span>
              何歳から使えますか？
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed pl-9">
              主に<strong>4歳〜小学校低学年</strong>のお子様を想定して設計されていますが、「日々の習慣を楽しくしたい」という目的であれば、どの年齢の方でもご利用いただけます。
            </p>
          </div>

          {/* Q4 */}
          <div className="clay-card p-6 bg-white">
            <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-start gap-3">
              <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded text-sm shrink-0 mt-1">Q</span>
              Android版はありますか？
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed pl-9">
              現在はiOS版（iPhone/iPad）のリリースに向けて準備中です。Android版の開発も検討しておりますので、最新情報は公式サイトやブログでお知らせいたします。
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4 text-sm">その他、ご不明な点はありますか？</p>
          <Link href="/contact" className="inline-block border-2 border-teal-500 text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-teal-50 transition-colors">
            お問い合わせフォームへ
          </Link>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}