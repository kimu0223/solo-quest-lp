import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tighter">SOLO QUEST</span>
            <p className="text-gray-500 text-xs mt-2">日常を冒険に変える、親子で楽しむ成長RPG</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
            <Link href="/faq" className="hover:text-teal-400 transition">よくある質問</Link>
            <Link href="/blog" className="hover:text-teal-400 transition">ブログ</Link>
            <Link href="/privacy" className="hover:text-teal-400 transition">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-teal-400 transition">利用規約</Link>
            <Link href="/legal" className="hover:text-teal-400 transition">特定商取引法に基づく表記</Link>
            <Link href="/contact" className="hover:text-teal-400 transition">お問い合わせ</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-600 text-[10px]">
          <p>© 2026 Solo Quest Guild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}