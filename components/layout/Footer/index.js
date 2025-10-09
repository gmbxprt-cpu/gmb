"use client";

import useWindowSize from '@/hooks/useWindowSize';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

export default function Footer() {
  const { width } = useWindowSize();
  const breakpoint = 768;

  if (width === undefined) {
    return null;
  }

  return width < breakpoint ? <MobileFooter /> : <DesktopFooter />;
}
