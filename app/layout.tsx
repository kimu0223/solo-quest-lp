import type { Metadata } from "next";
import { Inter } from "next/font/google"; // もし日本語フォント(Noto Sans JPなど)を使う場合はここで変更
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
  description: "子供が声でがんばったことを報告すると、AIがRPGの口調で称賛。自律性を福利のように積み上げる、新しい教育体験アプリ。",
  metadataBase: new URL('https://solo-quest.jp'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      {/* 改善点：
        - bg-white: 背景を純白にしてコントラストを最強にする
        - text-slate-900: 文字色を「真っ黒に近い濃紺」にして、柔らかさと読みやすさを両立
      */}
      <body className={`${inter.className} bg-white text-slate-900 min-h-screen flex flex-col antialiased`}>
        
        {/* Google Analytics */}
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

        <div className="flex-grow">
          {children}
        </div>
        
      </body>
    </html>
  );
}