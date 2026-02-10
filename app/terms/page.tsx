import Link from 'next/link';

export default function Terms() {
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
        <h1 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-4">利用規約</h1>
        
        <div className="prose prose-slate prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-3">第1条（適用）</h2>
            <p>本規約は、ユーザーとSolo Quest運営事務局（以下「当事務局」）との間の、本サービスの利用に関わる一切の関係に適用されます。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-3">第2条（利用登録）</h2>
            <p>登録希望者が当事務局の定める方法によって利用登録を申請し、当事務局がこれを承認することによって、利用登録が完了するものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-3">第3条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当事務局のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当事務局のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-3">第4条（免責事項）</h2>
            <p>当事務局は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-teal-800 mb-3">第5条（準拠法・裁判管轄）</h2>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
          </section>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}