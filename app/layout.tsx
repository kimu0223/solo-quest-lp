import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
  description: "子供が声でがんばったことを報告すると、AIがRPGの口調で称賛。自律性を福利のように積み上げる、新しい教育体験アプリ。",
  metadataBase: new URL('https://solo-quest.com'), // ドメイン取得後に変更
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A15] text-white min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}