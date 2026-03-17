import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solo Quest | 親の「早くしなさい」をAIが「すごい！」に変える";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f766e 0%, #134e4a 50%, #0c4a6e 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景の装飾円 */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(20,184,166,0.2)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(14,165,233,0.15)",
            display: "flex",
          }}
        />

        {/* コンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* バッジ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(20,184,166,0.3)",
              border: "1px solid rgba(94,234,212,0.5)",
              borderRadius: 100,
              padding: "8px 24px",
            }}
          >
            <span style={{ color: "#5eead4", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>
              Solo Quest
            </span>
          </div>

          {/* メインキャッチ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ color: "#f1f5f9", fontSize: 52, fontWeight: 900, lineHeight: 1.2 }}>
              親の「早くしなさい」を
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ color: "#14b8a6", fontSize: 52, fontWeight: 900 }}>AIが</span>
              <span
                style={{
                  background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  color: "#fbbf24",
                  fontSize: 52,
                  fontWeight: 900,
                }}
              >
                「すごい！」
              </span>
              <span style={{ color: "#f1f5f9", fontSize: 52, fontWeight: 900 }}>に変える</span>
            </div>
          </div>

          {/* サブキャッチ */}
          <div style={{ color: "#94a3b8", fontSize: 24, fontWeight: 500, marginTop: 8 }}>
            小学生の「やる気」と「自律性」を育てる AI タスク管理アプリ
          </div>

          {/* 特徴タグ */}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["🎮 ゲーム感覚", "🤖 AI コーチング", "📱 iOS 専用", "✨ 基本無料"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    color: "#e2e8f0",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
