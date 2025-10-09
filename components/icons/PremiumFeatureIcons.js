import React from 'react';

// createIcon फंक्शन अब <svg> के अंदर सीधे पाथ डालेगा
const createIcon = (paths) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity:1}} />
        <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity:1}} />
      </linearGradient>
    </defs>
    {/* paths को यहाँ रेंडर किया जाएगा */}
    {paths}
  </svg>
);

const PremiumFeatureIcons = {
  // हर आइकॉन के मल्टीपल पाथ को <>...</> के अंदर रखा गया है
  visibility: createIcon(<>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  brand: createIcon(<>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  conversion: createIcon(<>
    <path d="M20 12h-6m-1-5l-3 3-3-3" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  traffic: createIcon(<>
    <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM5 6v-1a2 2 0 012-2h10a2 2 0 012 2v1" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12h.01" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  credibility: createIcon(<>
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  rankings: createIcon(<>
    <path d="M16 8l-4-4-4 4M16 16l-4 4-4-4" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3v18" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  social: createIcon(<>
    <path d="M17 20h5v-5M3 4h5v5" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4l-6 6M3 21l6-6" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  map_presence: createIcon(<>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10a3 3 0 100-6 3 3 0 000 6z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  strategy: createIcon(<>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
};

export default PremiumFeatureIcons;
