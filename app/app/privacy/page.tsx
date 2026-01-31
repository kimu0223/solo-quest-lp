export default function TermsOfService() {
    return (
      <main className="min-h-screen bg-[#0a0a10] text-gray-300 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 border-b border-purple-500 pb-4">利用規約</h1>
          
          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-purple-400 mb-4">第1条（冒険者の誓い）</h2>
              <p>本規約は、本サービス「Solo Quest」を利用するすべての冒険者（ユーザー）およびその守護者（保護者）に適用されます。</p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-purple-400 mb-4">第2条（保護者の同意）</h2>
              <p>未成年者が本サービスを利用する場合、必ず保護者の同意を得るものとします。本サービスを利用した時点で、保護者の同意があったものとみなします。</p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-purple-400 mb-4">第3条（禁止事項）</h2>
              <p>以下の行為を禁じます。違反した場合、アカウントを凍結することがあります。</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>公序良俗に反するクエストの作成</li>
                <li>システムの不正解析や改ざん</li>
                <li>他者のなりすまし利用</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-purple-400 mb-4">第4条（免責事項）</h2>
              <p>AIによる鑑定結果は、教育・娯楽を目的としたものであり、その正確性や妥当性を保証するものではありません。本サービスの利用により生じた直接的、間接的な損害について、当事務局は一切の責任を負わないものとします。</p>
            </section>
          </div>
        </div>
      </main>
    );
  }