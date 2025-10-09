"use client";
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { SolidFeatureIcons } from '@/components/icons/SolidFeatureIcons';

const FeatureCard = ({ icon, title, color, children }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/60">
    <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center">
      {/* 👇 Accessibility: Icon ko decorative banaya gaya hai */}
      <svg className="w-9 h-9 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
    </div>
    {/* Yeh <h3> tag SEO ke liye bilkul sahi hai */}
    <h3 className={`text-xl font-black ${color} mt-5`}>{title}</h3>
    <p className="text-slate-600 mt-2 text-base">{children}</p>
  </div>
);

const headingColors = [
  "text-blue-600", "text-teal-600", "text-amber-600",
  "text-rose-600", "text-indigo-600", "text-cyan-600",
  "text-lime-600", "text-purple-600", "text-pink-600"
];

const features = [
    { id: 'visibility', title: 'Increase Your Visibility', description: 'Enhance your visibility in search results with our specialized GMB optimization services.' },
    { id: 'brand', title: 'Brand Presence & Reputation', description: 'Boost your brand presence and online reputation through our comprehensive optimization strategies.' },
    { id: 'conversion', title: 'Higher Conversion Rate', description: 'Maximize customer engagement and conversion rates with our effective GMB ranking and profile management.' },
    { id: 'traffic', title: 'Drive More Traffic', description: 'Drive increased traffic to your business and website with targeted Google Maps optimization services.' },
    { id: 'credibility', title: 'Build Credibility', description: 'Enhance your business’s credibility with perfectly optimized Google Business Profiles.' },
    { id: 'rankings', title: 'Dominate Search Rankings', description: 'Improve your search rankings with our tailored Google My Business optimization strategies.' },
    { id: 'social', title: 'Boost Social Visibility', description: 'Expand your brand presence on social media platforms with effective GMB optimization tools.' },
    { id: 'map_presence', title: 'Strong Maps Presence', description: 'Strengthen your business presence on Google Maps with our expert GMB optimization services.' },
    { id: 'strategy', title: 'Elevate Marketing Strategy', description: 'Elevate your business’s overall marketing strategy through our specialized GMB services.' },
];

export default function DesktopWhyChooseUs() {
  
  // 👇 SEO: ItemList Schema Google ko aapke benefits batata hai
  const featuresSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Benefits of Choosing GMB Expert",
    "itemListElement": features.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": feature.title,
        "description": feature.description
      }
    }))
  };

  return (
    <section className="bg-white py-20 hidden md:block">
      {/* 👇 SEO: Schema ko JSON-LD script tag mein daala gaya hai */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Our Advantage</span>
            {/* Yeh <h2> tag SEO ke liye bilkul sahi hai */}
            <h2 className="text-4xl font-extrabold text-black mt-4">
              Why Choose <span className="text-blue-600">GMB Expert</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg">Our GMB optimization services are designed to drive tangible results, enhancing your visibility and boosting conversions.</p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.id}
                icon={SolidFeatureIcons[feature.id]} 
                title={feature.title}
                color={headingColors[index % headingColors.length]}
              >
                {feature.description}
              </FeatureCard>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}