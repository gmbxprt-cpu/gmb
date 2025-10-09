"use client";
import useWindowSize from '@/hooks/useWindowSize';
import DesktopWhatIsGmb from './DesktopWhatIsGmb';
import MobileWhatIsGmb from './MobileWhatIsGmb';
export default function WhatIsGmbSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;
  if (width === undefined) return null;
  const Component = width < breakpoint ? MobileWhatIsGmb : DesktopWhatIsGmb;
  return <section id="about"><Component /></section>;
}
