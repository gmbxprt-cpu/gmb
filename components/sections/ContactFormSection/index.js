"use client";
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';

const DesktopContactForm = dynamic(() => import('./DesktopContactForm'));
const MobileContactForm = dynamic(() => import('./MobileContactForm'));

export default function ContactFormSection() {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopContactForm />;
  }
  return <MobileContactForm />;
}
