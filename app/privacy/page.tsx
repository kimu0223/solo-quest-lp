import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a10] text-gray-300 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-cyan-500 pb-4">プライバシーポリシー</h1>
        
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4">1. 基本方針</h2>
            <p>
              Solo Quest 運営事務局（以下「当事務局」）は、本アプリ「Solo Quest」（以下「本サービス」）において、ユーザーおよびその保護者のプライバシーを尊重し、個人情報の保護を最優先事項として取り扱います。
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">2. 取得する情報と利用目的</h2>
            <ul className="list-disc ml-5 space-y-3">
              <li>
                <strong className="text-white">音声データ：</strong> 
                クエスト報告時の音声。AI（Google Gemini API）による内容鑑定およびフィードバック生成のために利用します。
              </li>
              <li>
                <strong className="text-white">メールアドレス：</strong> 
                ユーザー認証、データのバックアップ、および重要なお知らせの送信に利用します。
              </li>
              <li>
                <strong className="text-white">利用ログ：</strong> 
                サービスの改善および不具合修正のための統計データとして利用します。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4">3. AI（人工知能）の利用について</h2>
            <p>
              本サービスは音声解析に Google Gemini API を利用します。送信された音声データは解析後、速やかに破棄されます。これらのデータが第三者のAI学習に永続的に利用されることはありません。
            </p>
          </section>

          <section className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
            <h2 className="text-xl font-bold text-red-400 mb-4">4. アカウントとデータの削除</h2>
            <p>
              ユーザーは、アプリ内の「設定」メニューよりいつでもアカウントの削除（退会）をリクエストできます。削除が行われた場合、当事務局はサーバー上のすべての関連データを完全に消去いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4">5. お問い合わせ</h2>
            <p>本ポリシーに関するご質問は、アプリ内のお問い合わせフォームよりご連絡ください。</p>
            <p className="mt-8 text-sm opacity-50">最終更新日：2026年1月31日</p>
          </section>
        </div>
      </div>
    </main>
  );
}