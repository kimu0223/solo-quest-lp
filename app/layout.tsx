import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14b8a6",  // teal-500 - ブラウザUIの色
};

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
    // app/opengraph-image.tsx が自動的に使用されます
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える",
    description: "毎日ガミガミ言いたくない親御さんへ。子供が自ら動く「冒険」を始めませんか？",
    // app/opengraph-image.tsx が自動的に使用されます
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased">
        
        {/* JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://solo-quest.jp/#organization",
                  "name": "Solo Quest Guild",
                  "url": "https://solo-quest.jp",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://solo-quest.jp/og-image.png",
                    "width": 1200,
                    "height": 630
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://solo-quest.jp/#website",
                  "url": "https://solo-quest.jp",
                  "name": "Solo Quest",
                  "description": "子供が声でがんばったことを報告すると、AIがRPGの口調で称賛。自律性を積み上げる新しい教育体験アプリ。",
                  "inLanguage": "ja",
                  "publisher": { "@id": "https://solo-quest.jp/#organization" }
                }
              ]
            })
          }}
        />

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