import React from 'react';

const createIcon = (path) => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">{path}</svg>;

const BottomNavIcons = {
  home: createIcon(<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>),
  services: createIcon(<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>),
  pricing: createIcon(<path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.99l-9-9V4h7l9 9-7 7.01zM6.5 6C5.67 6 5 6.67 5 7.5S5.67 9 6.5 9 8 8.33 8 7.5 7.33 6 6.5 6z"/>),
  faq: createIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/>),
  contact: createIcon(<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>),
};

export { BottomNavIcons };
