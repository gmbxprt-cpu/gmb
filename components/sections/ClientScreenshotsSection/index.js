"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopClientScreenshots = dynamic(() => import('./DesktopClientScreenshots'));
const MobileClientScreenshots = dynamic(() => import('./MobileClientScreenshots'));

export default function ClientScreenshotsSection() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopClientScreenshots />;
  }
  return <MobileClientScreenshots />;
}
