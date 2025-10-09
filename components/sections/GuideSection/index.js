"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopGuideSection = dynamic(() => import('./DesktopGuideSection'));
const MobileGuideSection = dynamic(() => import('./MobileGuideSection'));

export default function GuideSection() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopGuideSection />;
  }
  return <MobileGuideSection />;
}
