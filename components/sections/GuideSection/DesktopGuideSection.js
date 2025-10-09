"use client";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const solutions = [
  { title: "Profile Suspension", description: "We audit suspended profiles, find the cause, and file well-documented appeals to get you back online." },
  { title: "Phone & Verification Issues", description: "We resolve phone number conflicts and navigate Google's verification process to ensure your listing is secure." },
  { title: "Fake or Negative Reviews", description: "We help identify and report fake reviews and implement a strategy to gather more genuine positive reviews." },
  { title: "Ranking Drops", description: "We analyze competitor activity and algorithm changes to recover and improve your GMB ranking." },
];

export default function DesktopGuideSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Google My Business SEO Guide by GMB Expert",
    "author": { "@type": "Organization", "name": "GMB Expert" },
    "publisher": { "@type": "Organization", "name": "GMB Expert", "logo": { "@type": "ImageObject", "url": "https://www.gmb.expert/logo.png" } },
    "description": "An expert guide on GMB SEO, covering why it's important, key ranking factors, and how to solve common issues like profile suspension."
  };

  return (
    <section className="bg-white py-20 hidden md:block">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl font-extrabold text-black">Your Guide to GMB Success</h2>
            <p className="mt-4 text-lg text-slate-600">
              In today's digital world, appearing on Google Maps and local search can make or break a local business. This guide explains how we make your Google Business Profile work for you.
            </p>
          </Fade>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-16 items-center">
          <Fade direction="left" triggerOnce>
            <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden">
              <Image src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A team discussing GMB SEO strategy" fill className="object-cover" />
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div>
              <h3 className="text-3xl font-bold text-black">What is GMB SEO?</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                It's the process of optimizing your Google Business Profile to rank higher on Google Maps and in local search results. We focus on the three pillars of success: **Accuracy** (correct and consistent information), **Relevance** (matching what people search for), and **Activity** (regular updates, posts, and review responses).
              </p>
            </div>
          </Fade>
        </div>

        <div className="mt-20 bg-slate-50 p-12 rounded-2xl border border-slate-200">
          <Fade direction="up" triggerOnce>
            <h3 className="text-3xl font-bold text-black text-center">Common Problems We Solve</h3>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">{solution.title}</h4>
                    <p className="mt-1 text-slate-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
