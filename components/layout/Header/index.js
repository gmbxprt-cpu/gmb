"use client"; // हुक का इस्तेमाल करने के लिए यह जरूरी है

import useWindowSize from '@/hooks/useWindowSize';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  const { width } = useWindowSize();
  const breakpoint = 768; // md breakpoint in Tailwind

  // जब तक width पता न चले, कुछ न दिखाएँ
  if (width === undefined) {
    return null;
  }

  return width < breakpoint ? <MobileHeader /> : <DesktopHeader />;
}
