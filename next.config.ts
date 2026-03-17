import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  // 静的アセットの長期キャッシュ + セキュリティヘッダー
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // 静的ファイル（画像・フォントなど）を1年キャッシュ
        source: "/(.*)\\.(png|jpg|jpeg|webp|svg|ico|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // WebP/AVIF形式への自動変換でLCP改善
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
