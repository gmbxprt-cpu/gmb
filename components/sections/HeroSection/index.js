"use client";

import useWindowSize from '@/hooks/useWindowSize';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

export default function HeroSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;

  if (width === undefined) {
    return null; 
  }

  return width < breakpoint ? <MobileHero /> : <DesktopHero />;
}
