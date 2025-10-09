"use client";
import { Fade } from 'react-awesome-reveal';

// Icons for the trust points
const icons = {
  results: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>,
  team: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
  process: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>,
};

const trustPoints = [
  {
    icon: icons.results,
    title: "Proven Results",
    description: "Our case studies show real-world success, from doubling walk-ins for local cafes to reinstating suspended plumbing services and ranking clinics for competitive keywords."
  },
  {
    icon: icons.team,
    title: "Expert Team of Specialists",
    description: "A GMB specialist saves you time and prevents costly mistakes. We know how to handle suspensions, complex verifications, and navigate Google's guidelines to get you results faster."
  },
  {
    icon: icons.process,
    title: "Transparent & Clear Process",
    description: "From a full profile audit and keyword research to ongoing reporting, we follow a clear 8-step process. You'll always know what we're doing and see the progress we're making."
  }
];

export default function DesktopTrustSection() {
  
  // SEO Schema for the trust points
  const trustSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Why Trust GMB Expert",
    "itemListElement": trustPoints.map((point, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": point.title,
        "description": point.description
      }
    }))
  };

  return (
    <section className="bg-gray-800 text-white py-20 hidden md:block">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trustSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold">Build Trust, Build Your Business</h2>
            <p className="text-slate-300 mt-4 text-lg">We don't just optimize profiles; we build a foundation of trust with Google and your customers through proven expertise and transparent results.</p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-gray-700/50 p-8 rounded-xl border border-gray-600 shadow-lg">
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold mt-5">{point.title}</h3>
                <p className="text-slate-300 mt-2">{point.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
