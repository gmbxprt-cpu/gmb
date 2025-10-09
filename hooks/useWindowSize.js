"use client"; // यह जरूरी है क्योंकि यह ब्राउज़र फीचर का इस्तेमाल करता है

import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    // पहली बार लोड होने पर साइज सेट करें
    handleResize();
    
    // कंपोनेंट हटने पर इवेंट लिस्नर को साफ करें
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}
