"use client";
import React from 'react';
import { Fade } from "react-awesome-reveal";

// 👇 SEO & Accessibility: Added <title> tags to icons
const icons = {
  provider: (
    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="providerIconTitle">
      <title id="providerIconTitle">Provider Icon</title>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  ),
  affordable: (
    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="affordableIconTitle">
      <title id="affordableIconTitle">Affordable Icon</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
  ),
  timely: (
    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="timelyIconTitle">
      <title id="timelyIconTitle">Timely Delivery Icon</title>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  ),
  agency: (
    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="agencyIconTitle">
      <title id="agencyIconTitle">Marketing Agency Icon</title>
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.48L7.5 9 12 6.51 16.5 9 12 11.48zM17 18v-2h-5v2h5zm-2-4v-2h-5v2h5zm-2-4V8h-5v2h5z"/>
    </svg>
  ),
};

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-lg">
    <div className="flex items-center">
      <div className="bg-slate-100 p-3 rounded-lg">
        {icon}
      </div>
      {/* This <h3> heading is correct for SEO */}
      <h3 className="ml-4 text-lg font-black text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-base leading-relaxed">{children}</p>
  </div>
);

// Data for rendering and schema
const processSteps = [
    { key: "provider", title: "Local Service Provider", description: "We submit information in a consistent and accurate manner to different citation sites." },
    { key: "affordable", title: "Affordable Services", description: "We offer citation services at very competitive pricing to fit your budget." },
    { key: "timely", title: "Timely Delivery", description: "We save your time by delivering the order in an agreed turnaround time." },
    { key: "agency", title: "Top Marketing Agency", description: "We offer services to top marketing agencies from the USA, UK, Canada, and Australia." }
];

export default function MobileWorkingWith() {

  // 👇 SEO: ItemList Schema for the process steps
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Our Process for Working With GMB Expert",
    "itemListElement": processSteps.map((step, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": step.title,
        "description": step.description
      }
    }))
  };

  return (
    <section className="bg-slate-50 py-12 md:hidden">
      {/* 👇 SEO: Renders the schema script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="container mx-auto px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Our Process
            </span>
            {/* This <h2> heading is correct for SEO */}
            <h2 className="text-3xl font-extrabold text-black mt-4">
              Working With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">GMB Expert</span>
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 text-left">
            {processSteps.map(step => (
                <InfoCard key={step.key} icon={icons[step.key]} title={step.title}>{step.description}</InfoCard>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}