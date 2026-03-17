'use client';

import Link from 'next/link';
import { trackCtaClick, trackAbTestConversion, type Variant } from '@/lib/ab-test';

interface AbTestCtaProps {
  testId: string;
  variant: Variant;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A/Bテスト対応CTAボタン
 * クリック時に GA4 cta_click + ab_test_conversion を送信
 */
export default function AbTestCta({ testId, variant, href, className, children }: AbTestCtaProps) {
  const handleClick = () => {
    trackCtaClick(testId, variant, String(children));
    trackAbTestConversion(testId, variant, 'app_store_click');
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
