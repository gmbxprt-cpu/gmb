"use client";

import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

// Dono (desktop aur mobile) ke liye ek hi detailed data source
const caseStudies = [
  {
    client: "Local Restaurant",
    headline: "Became the #1 Ranked 'Best Dinner Spot' in the Area",
    before: "Was struggling to get evening diners and was buried on the second page of Google Maps.",
    after: "Optimized for dinner-related keywords and showcased high-quality food photography, leading to a 300% increase in reservation clicks from GMB.",
    metrics: ["#1 Map Ranking", "+300% Clicks-to-Book"],
    image: {
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "A delicious spread of food at a highly-ranked local restaurant."
    }
  },
  {
    client: "Yoga Studio",
    headline: "Filled Morning Classes by Dominating Wellness Searches",
    before: "Had empty slots in their morning yoga classes and wasn't visible for keywords like 'yoga near me'.",
    after: "We targeted wellness and fitness keywords, ran GMB Offers for new members, and completely filled their morning class schedule within two months.",
    metrics: ["Morning Classes Full", "+90% Local Visibility"],
    image: {
      src: "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "A serene and full yoga class in session at a successful local studio."
    }
  },
  {
    client: "Boutique Hotel",
    headline: "Increased Direct Bookings by 250%, Bypassing OTA Fees",
    before: "Was overly reliant on online travel agencies (OTAs) that took large commissions for each booking.",
    after: "By highlighting unique amenities in GMB and encouraging direct reviews, we drove a 250% increase in 'Book Now' clicks directly to their website.",
    metrics: ["+250% Direct Bookings", "Reduced OTA Fees"],
    image: {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "A stylish and inviting boutique hotel room, encouraging direct bookings."
    }
  }
];

export default function ClientResultsSection() {
  // SEO ke liye structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GMB Expert Client Case Studies",
    "itemListElement": caseStudies.map((study, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CaseStudy",
        "name": study.headline,
        "author": {
          "@type": "Organization",
          "name": "GMB Expert"
        },
        "about": {
          "@type": "Service",
          "name": "GMB Optimization"
        }
      }
    }))
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Proven Client Results
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            We deliver tangible results that boost visibility, drive traffic, and increase revenue. Here's how we've helped businesses just like yours.
          </p>
        </div>

        {/* Desktop Layout: Image aur Text alag alag side par */}
        <div className="hidden md:block space-y-20">
          {caseStudies.map((study, index) => (
            <Fade key={index} direction={index % 2 === 0 ? 'left' : 'right'} triggerOnce cascade damping={0.1}>
              <div className={`flex items-center gap-12 lg:gap-16 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Image */}
                <div className="w-1/2">
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <Image src={study.image.src} alt={study.image.alt} fill className="object-cover" />
                  </div>
                </div>

                {/* Poori Details */}
                <div className="w-1/2">
                  <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">{study.client}</span>
                  <h3 className="text-3xl font-bold text-black mt-2">{study.headline}</h3>
                  <div className="flex flex-wrap gap-2 my-4">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm">{metric}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mt-4"><strong className="text-slate-800">Before:</strong> {study.before}</p>
                  <p className="text-slate-600 mt-2"><strong className="text-slate-800">After:</strong> {study.after}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Mobile Layout: Vertical Cards */}
        <div className="md:hidden space-y-12">
          {caseStudies.map((study, index) => (
            <Fade key={index} direction="up" triggerOnce>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="relative w-full h-56 rounded-lg overflow-hidden mb-5">
                  <Image src={study.image.src} alt={study.image.alt} fill className="object-cover" />
                </div>
                <span className="text-blue-600 font-bold uppercase text-sm">{study.client}</span>
                <h3 className="text-xl font-bold text-black mt-1">{study.headline}</h3>
                <div className="flex flex-wrap gap-2 my-3">
                  {study.metrics.map((metric, i) => (
                    <span key={i} className="bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full text-xs">{metric}</span>
                  ))}
                </div>
                {/* Mobile ke liye choti 'after' detail */}
                <p className="text-slate-600 text-sm">{study.after}</p>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
