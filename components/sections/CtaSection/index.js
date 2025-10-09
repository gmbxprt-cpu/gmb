"use client";

import useWindowSize from '@/hooks/useWindowSize';
import DesktopCta from './DesktopCta';
import MobileCta from './MobileCta';

export default function CtaSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;

  if (width === undefined) {
    return null;
  }

  return width < breakpoint ? <MobileCta /> : <DesktopCta />;
}
