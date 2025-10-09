"use client";
import useWindowSize from '@/hooks/useWindowSize';
import DesktopPricing from './DesktopPricing';
import MobilePricing from './MobilePricing';
export default function PricingSection() {
  const { width } = useWindowSize();
  const breakpoint = 768;
  if (width === undefined) return null;
  const Component = width < breakpoint ? MobilePricing : DesktopPricing;
  return <section id="pricing"><Component /></section>;
}
