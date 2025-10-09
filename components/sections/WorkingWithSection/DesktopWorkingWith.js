"use client";
import React from 'react';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";
import { GlassIcons } from '@/components/icons/GlassIcons';

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 shadow-lg h-full">
    <div className="flex items-center">
      <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
      {/* This <h3> heading is correct for SEO */}
      <h3 className="ml-4 text-lg font-bold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{children}</p>
  </div>
);

// We define the card data here to use it for both rendering and schema
const processSteps = [
    { icon: GlassIcons.provider, title: "Local Service Provider", description: "We submit information in a consistent and accurate manner to different citation sites, following best practices for rich media citations." },
    { icon: GlassIcons.affordable, title: "Affordable Services", description: "We offer citation services at very competitive pricing. Our FAQ section answers all primary questions related to our services." },
    { icon: GlassIcons.timely, title: "Timely Delivery", description: "We save your time by delivering the order in an agreed turnaround time to increase our customer retention rate." },
    { icon: GlassIcons.agency, title: "Top Marketing Agency", description: "We offer services to top marketing agencies from the USA, UK, Canada, Australia, and many other countries." }
];

export default function DesktopWorkingWith() {
  
  // 👇 SEO: ItemList Schema for the process steps
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Our GMB Optimization Process",
    "description": "Key features of working with GMB Expert for local SEO and citation services.",
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
    <section className="bg-slate-50 py-20 hidden md:block">
      {/* 👇 SEO: Renders the schema script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Column: Image */}
          <Slide direction="left" triggerOnce>
            <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                // 👇 SEO: More descriptive alt text
                alt="The GMB Expert team collaborating on a local SEO strategy for clients"
                layout="fill"
                className="object-cover"
              />
            </div>
          </Slide>

          {/* Right Column: Content */}
          <Slide direction="right" triggerOnce>
            <div className="flex flex-col justify-center h-full">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase self-start">
                Our Process
              </span>
              {/* This <h2> heading is correct for SEO */}
              <h2 className="text-4xl font-extrabold text-black mt-4">
                Working With <span className="text-blue-600">GMB Expert</span>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                    <InfoCard key={index} icon={step.icon} title={step.title}>{step.description}</InfoCard>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}