"use client";
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link'; // 👈 Step 1: Link component ko import karein

export default function DesktopCta() {
  return (
    <section className="bg-slate-100 hidden md:block">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
            {/* Yeh h2 tag SEO ke liye bilkul sahi hai */}
            <h2 className="text-4xl font-black text-slate-900 leading-tight">
              Looking for the <span className="text-blue-600">Best Local Business Listing Provider</span> for the USA, UK, Canada, Australia, New Zealand, UAE, and India?
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Let's work together to boost your local rankings and grow your business.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              
              {/* 👇 Step 2: <a> tag ko <Link> component se badlein */}
              <Link href="/pricing" className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1">
                <span>Get Local Citations</span>
              </Link>
              
              {/* Yeh 'tel:' link SEO ke liye bilkul sahi hai */}
              <a 
                href="tel:+917009364216" 
                className="border-2 border-slate-300 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-slate-200 transition-colors duration-300"
                aria-label="Book a call with us" // Accessibility ke liye joda gaya
              >
                Book A Call
              </a>
            </div>
        </Fade>
      </div>
    </section>
  );
}