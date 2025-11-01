export const allPricingFeatures = [
  { key: 'ranking', text: '#1 Ranking On Google Maps' },
  { key: 'top_keywords', text: 'Top Position On Keywords' },
  { key: 'posters', text: 'Posters Monthly' },
  { key: 'results_time', text: 'Results in Months' },
  { key: 'report', text: 'SEO Report' },
  { key: 'citations', text: 'Citation In Month' },
  { key: 'backlinks', text: 'Backlink Dofollow' },
  { key: 'audit', text: 'Local SEO Audit' },
  { key: 'review_reply', text: 'Review Reply Management' },
  { key: 'media_upload', text: 'Photo & Video Upload' },
  { key: 'competitor_analysis', text: 'Competitor Analysis' },
  { key: 'priority_support', text: 'Priority Support' },
];

export const plansData = {
  silver: {
    name: 'Silver',
    price: 6000,
    features: {
      ranking: true,
      top_keywords: '2-4 Keywords',
      posters: '15 Monthly',
      results_time: '2-3 Months',
      report: 'Monthly 1',
      citations: '500',
      backlinks: '40',
      audit: false,
      review_reply: false,
      media_upload: false,
      competitor_analysis: false,
      priority_support: false,
    },
  },
  gold: {
    name: 'Gold',
    price: 8000,
    features: {
      ranking: true,
      top_keywords: '4-7 Keywords',
      posters: '20 Monthly',
      results_time: '2-3 Months',
      report: 'Monthly 2',
      citations: '1200',
      backlinks: '100',
      audit: true,
      review_reply: false,
      media_upload: false,
      competitor_analysis: true,
      priority_support: true,
    },
  },
  platinum: {
    name: 'Platinum',
    price: 12000,
    features: {
      ranking: true,
      top_keywords: '8-12 Keywords',
      posters: '30 Monthly',
      results_time: '1-2 Months',
      report: 'Weekly',
      citations: '5000',
      backlinks: '250',
      audit: true,
      review_reply: true,
      media_upload: true,
      competitor_analysis: true,
      priority_support: true,
    },
  },
};

// ✅ Onetime services with numeric prices
export const onetimeServicesData = {
  phoneVerification: {
    name: 'PHONE NUMBER INSTANT VERIFICATION',
    price: 9000, // ✅ number, not string
    type: '/Instant',
    features: [
      { text: '24 Hours Number Will Live', included: true },
      { text: 'GMB Verification', included: true },
      { text: 'Get 1 Week Support', included: true },
      { text: '100% Safe & Verified', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
  },
  newListing: {
    name: 'GMB NEW LISTING',
    price: 9500, // ✅ number, not string
    type: '/Same Day',
    features: [
      { text: 'New Listing With Number Will Live', included: true },
      { text: 'GMB Verification', included: true },
      { text: 'Get 1 Week Support', included: true },
      { text: '100% Safe & Verified', included: true },
      { text: '99% Success Rate!', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
  },
  reinstatement: {
    name: 'GMB PROFILE SUSPENDED REINSTATEMENT',
    price: 12000,
    type: '/Onetime',
    features: [
      { text: 'Appeal a Denied Reinstatement Request', included: true },
      { text: 'Hard Suspension', included: true },
      { text: 'Soft Suspension', included: true },
      { text: 'Google Profile Optimization', included: true },
      { text: '95% Success Rate!', included: true },
    ],
  },
};
