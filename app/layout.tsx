import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ★ここを強化修正しました
export const metadata: Metadata = {
  title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
  description: "子供が声でがんばったことを報告すると、AIがRPGの口調で称賛。自律性を福利のように積み上げる、新しい教育体験アプリ。",
  metadataBase: new URL('https://solo-quest.jp'),
  openGraph: {
    title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
    description: "毎日ガミガミ言いたくない親御さんへ。子供が自ら動く「冒険」を始めませんか？",
    url: 'https://solo-quest.jp',
    siteName: 'Solo Quest',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // ★重要：publicフォルダに1200x630pxの画像を置いてください
        width: 1200,
        height: 630,
        alt: 'Solo Quest - 日常を冒険に変える成長RPG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
    description: "毎日ガミガミ言いたくない親御さんへ。子供が自ら動く「冒険」を始めませんか？",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
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