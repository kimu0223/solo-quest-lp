import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// HeaderとFooterは page.tsx 内で実装しているため、ここでは読み込みません
// import Header from "@/components/Header"; 
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
  description: "子供が声でがんばったことを報告すると、AIがRPGの口調で称賛。自律性を福利のように積み上げる、新しい教育体験アプリ。",
  metadataBase: new URL('https://solo-quest.jp'), // 正しいドメインに変更済み
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      {/* デザイン変更：
        背景色: クリーム色(#FFF9E5) 
        文字色: ブラウン(#4E342E) 
        フォント: Inter (日本語フォント指定があればそちらを優先しますが、一旦このままでOK)
      */}
      <body className={`${inter.className} bg-[#FFF9E5] text-[#4E342E] min-h-screen flex flex-col`}>
        
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-284MJPXY48"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-284MJPXY48');
          `}
        </Script>

        {/* page.tsx 側でヘッダー・フッターを実装しているため、
          ここでは children だけを表示します。
        */}
        <div className="flex-grow">
          {children}
        </div>
        
      </body>
    </html>
  );
}