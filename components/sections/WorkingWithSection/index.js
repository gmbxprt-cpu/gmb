"use client";

import useWindowSize from '@/hooks/useWindowSize';
import DesktopWorkingWith from './DesktopWorkingWith';
import MobileWorkingWith from './MobileWorkingWith';

export default function WorkingWithSection() {
  const { width } = useWindowSize();
  const breakpoint = 1024; // lg breakpoint

  if (width === undefined) {
    return null;
  }

  return width < breakpoint ? <MobileWorkingWith /> : <DesktopWorkingWith />;
}
