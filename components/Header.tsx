import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0A0A15]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-xl font-bold tracking-tighter text-[#00D4FF] group-hover:opacity-80 transition">
            SOLO QUEST
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="/#features" className="hover:text-[#00D4FF] transition">特徴</a>
          <a href="/#security" className="hover:text-[#00D4FF] transition">安全性</a>
          <Link href="/contact" className="hover:text-[#00D4FF] transition">お問い合わせ</Link>
        </nav>
        <div className="md:hidden">
          {/* モバイル用メニュー（必要に応じて実装） */}
          <span className="text-[#00D4FF] text-xs font-bold">GUILD MENU</span>
        </div>
      </div>
    </header>
  );
}