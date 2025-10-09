"use client";
import useWindowSize from '@/hooks/useWindowSize';
import DesktopWhyChooseUs from './DesktopWhyChooseUs';
import MobileWhyChooseUs from './MobileWhyChooseUs';
export default function WhyChooseUsSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;
  if (width === undefined) return null;
  const Component = width < breakpoint ? MobileWhyChooseUs : DesktopWhyChooseUs;
  return <section id="services"><Component /></section>;
}
