import React from 'react';

const NavDrawerIcons = {
  home: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12L2 7L12 2L22 7L21 12" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  services: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#6EE7B7"/>
      <rect x="4" y="13" width="7" height="7" rx="1.5" fill="#34D399" opacity="0.7"/>
      <rect x="13" y="4" width="7" height="7" rx="1.5" fill="#6EE7B7" opacity="0.7"/>
      <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#34D399"/>
    </svg>
  ),
  pricing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42z" fill="#FBBF24"/>
      <circle cx="6.5" cy="7.5" r="1.5" fill="white" opacity="0.7"/>
    </svg>
  ),
  faq: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#C4B5FD" opacity="0.9"/>
      <path d="M9.09 9C9.3251 7.81593 10.2223 7 12 7C13.5354 7 15 8.20914 15 10C15 11.0366 14.4691 11.6063 13.5311 12.192C12.6311 12.7523 12 13.5 12 15" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="18" r="1" fill="#8B5CF6"/>
    </svg>
  ),
  blog: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h16M4 12h16M4 18h10" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export { NavDrawerIcons };
