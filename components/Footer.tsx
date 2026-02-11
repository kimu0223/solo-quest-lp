import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#f8fafc] border-t border-teal-100 text-slate-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* 左側：ロゴとキャッチコピー */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-2 group">
              <span className="text-xl">🌱</span>
              <span className="font-black text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">
                Solo Quest
              </span>
            </Link>
            <p className="text-xs font-medium text-slate-400">
              日常を冒険に変える、親子で楽しむ成長RPG
            </p>
          </div>

          {/* 右側：リンク集 */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold">
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              ブログ
            </Link>
            <Link href="/faq" className="hover:text-teal-600 transition-colors">
              よくある質問
            </Link>
            <Link href="/contact" className="hover:text-teal-600 transition-colors">
              お問い合わせ
            </Link>
            <span className="w-full md:w-auto hidden md:block border-r border-slate-200 h-4"></span>
            <Link href="/terms" className="hover:text-teal-600 transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="hover:text-teal-600 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/legal" className="hover:text-teal-600 transition-colors">
              特商法表記
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 font-medium">
            &copy; 2026 Solo Quest Guild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}