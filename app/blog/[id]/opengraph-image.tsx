import { ImageResponse } from 'next/og';
import { BLOG_POSTS } from '../posts';

export const runtime = 'edge';
export const alt = 'Solo Quest ブログ';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.id.toString() === params.id);

  const title = post?.title ?? 'Solo Quest ブログ';
  const emoji = post?.emoji ?? '📖';
  const category = post?.category ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #f0fdf9 0%, #ffffff 50%, #eff6ff 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* 装飾ライン */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #14b8a6, #3b82f6)',
          }}
        />

        {/* カテゴリバッジ */}
        {category && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                background: '#14b8a6',
                color: 'white',
                padding: '6px 20px',
                borderRadius: '999px',
                fontSize: '22px',
                fontWeight: 'bold',
              }}
            >
              {category}
            </div>
          </div>
        )}

        {/* メインコンテンツ */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flex: 1 }}>
          <div
            style={{
              fontSize: '120px',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            {emoji}
          </div>
          <div
            style={{
              fontSize: title.length > 30 ? '38px' : '44px',
              fontWeight: 'bold',
              color: '#1e293b',
              lineHeight: 1.4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {title}
          </div>
        </div>

        {/* フッター */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}
            >
              ⚔️
            </div>
            <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#14b8a6' }}>
              Solo Quest
            </span>
          </div>
          <span style={{ fontSize: '20px', color: '#94a3b8' }}>solo-quest.jp</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
