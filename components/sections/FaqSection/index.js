"use client";
import useWindowSize from '@/hooks/useWindowSize';
import DesktopFaq from './DesktopFaq';
import MobileFaq from './MobileFaq';
export default function FaqSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;
  if (width === undefined) return null;
  const Component = width < breakpoint ? MobileFaq : DesktopFaq;
  return <section id="faq"><Component /></section>;
}
