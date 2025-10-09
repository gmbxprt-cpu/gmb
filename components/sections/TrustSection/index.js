"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopTrustSection = dynamic(() => import('./DesktopTrustSection'));
const MobileTrustSection = dynamic(() => import('./MobileTrustSection'));

export default function TrustSection() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopTrustSection />;
  }
  return <MobileTrustSection />;
}
