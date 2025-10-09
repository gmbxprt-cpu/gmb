import React from 'react';

const createGlassIcon = (path, gradientId) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`${gradientId}1`} x1="0" y1="0" x2="24" y2="24">
        <stop stopColor="#A78BFA"/>
        <stop offset="1" stopColor="#7C3AED"/>
      </linearGradient>
      <linearGradient id={`${gradientId}2`} x1="24" y1="0" x2="0" y2="24">
        <stop stopColor="#60A5FA"/>
        <stop offset="1" stopColor="#3B82F6"/>
      </linearGradient>
    </defs>
    {path}
  </svg>
);

const GlassIcons = {
  provider: createGlassIcon(
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke={`url(#provider1)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    "provider"
  ),
  affordable: createGlassIcon(
    <path d="M11 3.252a1 1 0 012 0v1.512a1 1 0 01-2 0V3.252zM12 20.75a1 1 0 012 0v1.5a1 1 0 01-2 0v-1.5zM4.76 6.26a1 1 0 011.415-1.414l1.06 1.06a1 1 0 01-1.414 1.415l-1.06-1.06zM16.707 18.12a1 1 0 011.414-1.414l1.06 1.06a1 1 0 01-1.414 1.415l-1.06-1.06zM3.25 13a1 1 0 010-2h1.51a1 1 0 010 2H3.25zM19.24 13a1 1 0 010-2h1.51a1 1 0 010 2h-1.51zM6.175 16.707a1 1 0 01-1.414 1.414l-1.06-1.06a1 1 0 011.414-1.415l1.06 1.06zM18.12 6.207a1 1 0 01-1.414 1.414l-1.06-1.06a1 1 0 011.414-1.415l1.06 1.06zM12 15a3 3 0 100-6 3 3 0 000 6z" fill={`url(#affordable2)`}/>,
    "affordable"
  ),
  timely: createGlassIcon(
    <><circle cx="12" cy="12" r="10" stroke={`url(#timely1)`} strokeWidth="2"/><path d="M12 6v6l4 2" stroke={`url(#timely2)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    "timely"
  ),
  agency: createGlassIcon(
    <><path d="M21 12.792V14a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.208c0-.68.349-1.303.92-1.664l7-3.888a2 2 0 012.16 0l7 3.888c.571.361.92.983.92 1.664z" stroke={`url(#agency1)`} strokeWidth="2"/><path d="M21 12.792L12 8 3 12.792" stroke={`url(#agency2)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14v6h10v-6" stroke={`url(#agency1)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    "agency"
  ),
};

export { GlassIcons };
