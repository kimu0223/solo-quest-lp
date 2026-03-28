'use client';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

type CTAButtonProps = {
  href: string;
  label: string;
  eventLabel: string;
  className?: string;
  children: React.ReactNode;
};

export default function CTAButton({ href, eventLabel, className, children }: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_label: eventLabel,
        page_location: window.location.href,
        cta_destination: href,
        event_category: 'engagement',
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
