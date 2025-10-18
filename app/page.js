import HomePageClient from './HomePageClient';

// METADATA: Title aur description SEO ke liye aache hain, isliye inko nahi badla.
export const metadata = {
  title: 'GMB Expert: Google Business Profile Expert & Local SEO Specialist',
  description: 'As the #1 GMB Expert and Google My Business SEO Specialist, we help local businesses rank higher on Google, recover suspended profiles, and optimize Google Business listings for maximum visibility. Partner with a trusted Local SEO and Google Business Profile expert to grow your presence and attract real customers.',
  alternates: {
    canonical: '/',
  },
};

// FAQ DATA: Yeh GMB se related hai aur theek hai, isliye isse bhi nahi badla.
const faqData = [{
    "name": "How long does it take to see results from GMB SEO?",
    "acceptedAnswer": { "@type": "Answer", "text": "Typically, you can see initial improvements within 30-60 days, but significant ranking gains in competitive markets can take 2-3 months of consistent effort."}
  },{
    "name": "Can I handle Google My Business Optimization on my own?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes, but a GMB specialist can work faster, avoid common pitfalls like profile suspension, and achieve better results due to their experience and knowledge of Google's guidelines."}
  },{
    "name": "What if my GMB profile is suspended?",
    "acceptedAnswer": { "@type": "Answer", "text": "If your profile is suspended, contact us immediately. We will diagnose the reason, gather the necessary documentation, and handle the appeal process with Google to get it reinstated."}
}]

// UPDATED: Business Schema mein aapki original details daal di hain.
function addHomepageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'GMB Expert',
    // NOTE: Make sure this logo URL is correct.
    'image': 'https://www.gmb.expert/logo.png',
    'url': 'https://www.gmb.expert/',
    'telephone': '+91 70093 64216',
    // NOTE: Since you have two locations, we list both in the address field.
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': 'Office No - 02, Fourth Floor, City Court', 
        'addressLocality': 'Zirakpur',
        'postalCode': '140603',
        'addressRegion': 'PB', // PB for Punjab
        'addressCountry': 'IN'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '408, Montvert Velocity, Baner - Pashan Link Rd, Baner', 
        'addressLocality': 'Pune',
        'postalCode': '411021',
        'addressRegion': 'MH', // MH for Maharashtra
        'addressCountry': 'IN'
      }
    ],
    'description': 'We help local businesses dominate search results and get seen on Google Maps through expert GMB optimization.',
    'email': 'hello@gmb.expert'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function addFaqSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map(faq => ({
          '@type': 'Question',
          'name': faq.name,
          'acceptedAnswer': faq.acceptedAnswer
        }))
      };
    
      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      );
}

export default function HomePage() {
  return (
    <>
      {addHomepageSchema()}
      {addFaqSchema()}
      <HomePageClient />
    </>
  );
}