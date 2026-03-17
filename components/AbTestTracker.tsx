'use client';

import { useEffect, useRef } from 'react';
import { trackAbTestView, trackScrollDepth, type Variant } from '@/lib/ab-test';

interface AbTestTrackerProps {
  testId: string;
  variant: Variant;
  pagePath: string;
  /** スクロール深度計測する場合は true */
  trackScroll?: boolean;
}

/**
 * A/Bテストのビュー計測 + スクロール深度計測
 * Server Component のページの中に一度だけ配置する
 */
export default function AbTestTracker({ testId, variant, pagePath, trackScroll = true }: AbTestTrackerProps) {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // ビュー計測（マウント時に1回）
    trackAbTestView(testId, variant);

    if (!trackScroll) return;

    const depths = [25, 50, 75, 90, 100];

    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);

      for (const d of depths) {
        if (pct >= d && !trackedDepths.current.has(d)) {
          trackedDepths.current.add(d);
          trackScrollDepth(pagePath, d);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [testId, variant, pagePath, trackScroll]);

  return null;
}
