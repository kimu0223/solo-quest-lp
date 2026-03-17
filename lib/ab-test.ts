/**
 * A/Bテスト ユーティリティ
 *
 * - サーバーサイド: cookies() でバリアント読み取り
 * - クライアントサイド: document.cookie でバリアント読み取り + GA4イベント送信
 */

export type Variant = 'a' | 'b';

export interface AbTest {
  id: string;
  path: string;
  description: string;
  variants: {
    a: string;
    b: string;
  };
}

// ── 登録済みA/Bテスト一覧 ─────────────────────────────────────────
export const AB_TESTS: Record<string, AbTest> = {
  'priority-cta': {
    id: 'priority-cta',
    path: '/lp/priority',
    description: 'CTAボタンのコピーテスト',
    variants: {
      a: 'App Store で無料DL',       // 現行
      b: '今すぐ無料で始める',        // テスト案
    },
  },
  'priority-hero': {
    id: 'priority-hero',
    path: '/lp/priority',
    description: 'ヒーロー見出しのコピーテスト',
    variants: {
      a: '小学生の「優先順位」の悩みをゲームの力で解決しませんか？',  // 現行
      b: '「宿題より先にゲーム」をやめさせる方法、見つかりました',   // テスト案
    },
  },
  'time-cta': {
    id: 'time-cta',
    path: '/lp/time-management',
    description: '時間管理LPのCTAテスト',
    variants: {
      a: 'App Store で無料DL',
      b: '7日間無料で試してみる',
    },
  },
  'lp-hub-layout': {
    id: 'lp-hub-layout',
    path: '/lp',
    description: 'LPハブページのレイアウトテスト',
    variants: {
      a: '3カラムグリッド',  // 現行
      b: '縦並びリスト',    // テスト案（スマホ最適化）
    },
  },
};

export function getCookieName(testId: string): string {
  return `ab_${testId.replace(/-/g, '_')}`;
}

/** クライアントサイドでバリアントをGA4に送信 */
export function trackAbTestView(testId: string, variant: Variant): void {
  if (typeof window === 'undefined') return;
  if (typeof (window as Window & { gtag?: unknown }).gtag !== 'function') return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'ab_test_view', {
    ab_test_id: testId,
    ab_variant: variant,
    event_category: 'AB Test',
  });
}

/** クライアントサイドでコンバージョンをGA4に送信 */
export function trackAbTestConversion(testId: string, variant: Variant, label: string): void {
  if (typeof window === 'undefined') return;
  if (typeof (window as Window & { gtag?: unknown }).gtag !== 'function') return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'ab_test_conversion', {
    ab_test_id: testId,
    ab_variant: variant,
    ab_conversion_label: label,
    event_category: 'AB Test',
  });
}

/** クライアントサイドでCTAクリックをGA4に送信 */
export function trackCtaClick(testId: string, variant: Variant, ctaText: string): void {
  if (typeof window === 'undefined') return;
  if (typeof (window as Window & { gtag?: unknown }).gtag !== 'function') return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'cta_click', {
    ab_test_id: testId,
    ab_variant: variant,
    cta_text: ctaText,
    event_category: 'CTA',
  });
}

/** スクロール深度をGA4に送信 */
export function trackScrollDepth(page: string, depth: number): void {
  if (typeof window === 'undefined') return;
  if (typeof (window as Window & { gtag?: unknown }).gtag !== 'function') return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'scroll_depth', {
    page_path: page,
    scroll_depth_percent: depth,
    event_category: 'Engagement',
  });
}
