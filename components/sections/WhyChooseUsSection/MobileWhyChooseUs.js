"use client";
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { SolidFeatureIcons } from '@/components/icons/SolidFeatureIcons';

const MobileFeatureCard = ({ icon, title, color }) => (
  <div className="bg-white rounded-lg p-3 flex flex-col items-center text-center h-full shadow-md border border-slate-200/50">
    <div className="bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center">
      {/* 👇 Accessibility: Icon is hidden from screen readers */}
      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
    </div>
    {/* This <h3> heading is correct for SEO */}
    <h3 className={`text-xs font-black ${color} mt-2 leading-tight`}>{title}</h3>
  </div>
);

const headingColors = ["text-blue-600", "text-teal-600", "text-amber-600", "text-rose-600", "text-indigo-600", "text-cyan-600", "text-lime-600", "text-purple-600", "text-pink-600"];

const features = [{ id: 'visibility', title: 'Visibility' },{ id: 'brand', title: 'Reputation' },{ id: 'conversion', title: 'Conversions' },{ id: 'traffic', title: 'Traffic' },{ id: 'credibility', title: 'Credibility' },{ id: 'rankings', title: 'Rankings' },{ id: 'social', title: 'Social' },{ id: 'map_presence', title: 'Maps Presence' },{ id: 'strategy', title: 'Strategy' }];

export default function MobileWhyChooseUs() {
  
  // 👇 SEO: ItemList Schema provides a structured list of benefits to Google
  const featuresSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Advantages of GMB Expert",
    "itemListElement": features.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": feature.title
      }
    }))
  };

  return (
    <section className="bg-slate-50 py-12 md:hidden">
      {/* 👇 SEO: Renders the schema script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <div className="container mx-auto px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Our Advantage</span>
            {/* This <h2> heading is correct for SEO */}
            <h2 className="text-3xl font-extrabold text-black mt-4">Why Choose <span className="text-blue-600">GMB Expert</span></h2>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <MobileFeatureCard key={feature.id} icon={SolidFeatureIcons[feature.id]} title={feature.title} color={headingColors[index % headingColors.length]} />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}