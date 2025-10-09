import React from 'react';

const GmbFeatureIcons = {
  // 1. Visibility (Eye with target)
  visibility: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#81E6D9" opacity="0.8"/>
      <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#38B2AC"/>
      <path d="M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z" fill="#A0ECDD"/>
    </svg>
  ),
  // 2. Brand Presence (Shield with a star)
  brand: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 15.4183 7.58172 19 12 22C16.4183 19 20 15.4183 20 11V5L12 2Z" fill="#F6AD55" opacity="0.8"/>
      <path d="M12 15L15.2917 17.5L14.4167 13.5L17.5 11L13.5417 10.6667L12 7L10.4583 10.6667L6.5 11L9.58333 13.5L8.70833 17.5L12 15Z" fill="#ED8936"/>
    </svg>
  ),
  // 3. Conversion Rate (Graph with arrow)
  conversion: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#4299E1"/>
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#4299E1" opacity="0.8"/>
      <rect x="16" y="4" width="4" height="16" rx="1" fill="#4299E1" opacity="0.6"/>
      <path d="M18 6L12 12L8 8L4 12" stroke="#F6E05E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 4V6H16" stroke="#F6E05E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 4. Traffic (Car with direction sign)
  traffic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="16" height="6" rx="2" fill="#9F7AEA" opacity="0.8"/>
      <path d="M6 16V19H18V16" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="18" r="1.5" fill="#FFFFFF"/>
      <circle cx="17" cy="18" r="1.5" fill="#FFFFFF"/>
      <path d="M12 4L12 10" stroke="#F6AD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 6L12 4L14 6" stroke="#F6AD55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 5. Credibility (Badge with a checkmark)
  credibility: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L6 5V11C6 15.4183 9.58172 19 14 22C18.4183 19 22 15.4183 22 11V5L12 2Z" fill="#68D391" opacity="0.8"/>
      <path d="M9 12L11 14L15 10" stroke="#2F855A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 6. Search Rankings (Magnifying glass over a graph)
  rankings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="#F6E05E" strokeWidth="2"/>
      <line x1="16.5" y1="16.5" x2="21.5" y2="21.5" stroke="#F6E05E" strokeWidth="2" strokeLinecap="round"/>
      <rect x="2" y="10" width="4" height="6" rx="1" fill="#A0AEC0"/>
      <rect x="7" y="12" width="4" height="8" rx="1" fill="#A0AEC0" opacity="0.8"/>
      <rect x="12" y="14" width="4" height="10" rx="1" fill="#A0AEC0" opacity="0.6"/>
    </svg>
  ),
  // 7. Social Visibility (Share icon with network dots)
  social: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="12" r="3" fill="#FC8181"/>
      <circle cx="18" cy="6" r="3" fill="#FC8181" opacity="0.8"/>
      <circle cx="18" cy="18" r="3" fill="#FC8181" opacity="0.6"/>
      <line x1="8.5" y1="10.5" x2="15.5" y2="7.5" stroke="#FC8181" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8.5" y1="13.5" x2="15.5" y2="16.5" stroke="#FC8181" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  // 8. Google Maps Presence (Map with pin)
  map_presence: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.58172 2 4 5.58172 4 10C4 13.9782 7.07513 17.3822 11.0006 20.4497C11.5235 20.8659 12.3923 20.8659 12.9152 20.4497C16.8407 17.3822 19.9158 13.9782 19.9158 10C19.9158 5.58172 16.3341 2 11.9158 2H12Z" fill="#F06292" opacity="0.8"/>
      <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
      <path d="M12 2L19 7L19 17L12 22L5 17L5 7L12 2Z" stroke="#68D391" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 9. Marketing Strategy (Lightbulb with gear)
  strategy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18H15V19C15 20.1046 14.1046 21 13 21H11C9.89543 21 9 20.1046 9 19V18Z" fill="#A0AEC0"/>
      <path d="M12 2C9.23858 2 7 4.23858 7 7V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V7C17 4.23858 14.7614 2 12 2Z" fill="#F6E05E" opacity="0.8"/>
      <path d="M12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z" fill="#FBD38D"/>
      <path d="M20 12L22 14L20 16" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12L2 14L4 16" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default GmbFeatureIcons;
