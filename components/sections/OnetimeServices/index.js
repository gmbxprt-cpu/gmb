"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopOnetimeServices = dynamic(() => import('./DesktopOnetime'));
const MobileOnetimeServices = dynamic(() => import('./MobileOnetime'));

export default function OnetimeServices() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopOnetimeServices />;
  }
  return <MobileOnetimeServices />;
}
