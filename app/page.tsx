import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-bold tracking-[0.2em] uppercase">
            Quest Your Life
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            親の「早くしなさい」を、<br />
            AIが<span className="text-[#00D4FF]">「すごい！」</span>に変える。
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            子供が声でがんばったことを報告すると、AI鑑定士が称賛。
            自律性を福利のように積み上げる、新しい教育体験。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <span className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-white/5 cursor-default">
              App Store で近日公開
            </span>
            <Link href="/contact" className="bg-[#1A1A2E] border border-white/10 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition">
              先行情報を手に入れる
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの特徴セクション */}
      <section id="features" className="py-24 px-6 bg-[#0E0E1A]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-16">Solo Quest が届ける3つの覚醒</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-[#161625] border border-white/5">
              <div className="text-4xl mb-6">📜</div>
              <h4 className="text-xl font-bold mb-4 text-[#00D4FF]">ギルドの司令</h4>
              <p className="text-gray-400 text-sm leading-relaxed">保護者がクエスト（課題）を作成。子供の成長に合わせた難易度設定が可能です。</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161625] border border-white/5">
              <div className="text-4xl mb-6">🎙️</div>
              <h4 className="text-xl font-bold mb-4 text-[#39FF14]">賢者の耳（AI鑑定）</h4>
              <p className="text-gray-400 text-sm leading-relaxed">子供が音声で報告。Gemini AIが内容を解析し、独自のランクで努力を称賛します。</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161625] border border-white/5">
              <div className="text-4xl mb-6">💎</div>
              <h4 className="text-xl font-bold mb-4 text-[#FF74B1]">冒険者の証</h4>
              <p className="text-gray-400 text-sm leading-relaxed">XPが貯まりレベルアップ。親が設定したご褒美（宝物庫）を解放する達成感を演出。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 信頼（セキュリティ）セクション */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center border border-[#00D4FF]/20 bg-[#00D4FF]/5 rounded-[2.5rem] p-12 md:p-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#00D4FF]">福利を生む「信頼」への約束</h3>
          <p className="text-gray-300 mb-12 leading-relaxed">
            私たちは「顧客の信頼」こそが最大の資産であると考えます。お子様の音声データはAI鑑定後すぐに破棄され、広告や不適切な課金誘導は一切排除されています。
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="flex gap-4">
              <div className="text-[#00D4FF]">✓</div>
              <div className="text-sm text-gray-400 font-medium">音声データの即時破棄</div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#00D4FF]">✓</div>
              <div className="text-sm text-gray-400 font-medium">チャイルドロック完備</div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#00D4FF]">✓</div>
              <div className="text-sm text-gray-400 font-medium">個人情報の厳重保護</div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#00D4FF]">✓</div>
              <div className="text-sm text-gray-400 font-medium">広告なしの純粋な体験</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}