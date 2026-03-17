'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/lp", label: "子供の悩み別" },
  { href: "/blog", label: "ブログ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "保護者の方へ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
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
          {/* ▼▼▼ ここに「子供の悩み別」を追加しました ▼▼▼ */}
          <Link href="/lp" className="hover:text-teal-600 transition-colors py-2">
            子供の悩み別
          </Link>
          {/* ▲▲▲ -------------------------------- ▲▲▲ */}
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
          <Link
            href="/privacy"
            className="hidden sm:block text-xs font-bold text-teal-600 border border-teal-200 px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
          >
            保護者の方へ
          </Link>

          {/* ハンバーガーボタン（モバイルのみ表示） */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-teal-50 transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-slate-600 transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-600 transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-teal-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors py-3 px-4 rounded-lg"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
