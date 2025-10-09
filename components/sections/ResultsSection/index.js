"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopResultsSection = dynamic(() => import('./DesktopResultsSection'));
const MobileResultsSection = dynamic(() => import('./MobileResultsSection'));

export default function ResultsSection() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopResultsSection />;
  }
  return <MobileResultsSection />;
}
