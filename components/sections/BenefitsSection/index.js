"use client";

import useWindowSize from '@/hooks/useWindowSize';
import DesktopBenefits from './DesktopBenefits';
import MobileBenefits from './MobileBenefits';

export default function BenefitsSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;

  if (width === undefined) {
    return null;
  }

  return width < breakpoint ? <MobileBenefits /> : <DesktopBenefits />;
}
