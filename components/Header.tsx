import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.png"
            alt="Solo Quest Logo"
            width={200}
            height={40}
            className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* ナビゲーションメニュー（PCのみ表示） */}
        <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
          <Link href="/blog" className="hover:text-teal-600 transition-colors py-2">
            ブログ
          </Link>
          <Link href="/faq" className="hover:text-teal-600 transition-colors py-2">
            よくある質問
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition-colors py-2">
            お問い合わせ
          </Link>
        </nav>

        {/* 右側のボタンエリア */}
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hidden sm:block text-xs font-bold text-teal-600 border border-teal-200 px-4 py-2 rounded-full hover:bg-teal-50 transition-colors">
            保護者の方へ
          </Link>
        </div>
      </div>
    </header>
  );
}