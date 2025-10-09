"use client";
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link'; // 👈 Step 1: Link component ko import karein

export default function MobileCta() {
  return (
    <section className="bg-slate-100 md:hidden">
      <div className="max-w-7xl mx-auto px-4 py-14 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {/* Yeh h2 tag SEO ke liye bilkul sahi hai */}
          <h2 className="text-3xl font-black text-slate-900 leading-tight">
            Looking for the <span className="text-blue-600">Best Local Listing Provider?</span>
          </h2>
          <p className="mt-3 text-slate-600">
              Let's boost your local rankings together.
          </p>
          <div className="mt-6 flex flex-col space-y-3">
            
            {/* 👇 Step 2: <a> tag ko <Link> component se badlein */}
            <Link href="/pricing" className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md">
              Get Local Citations
            </Link>
            
            {/* 👇 Step 3: Phone number theek kiya gaya hai aur aria-label joda gaya hai */}
            <a 
              href="tel:+917009364216" 
              className="bg-slate-200 text-slate-800 font-bold py-3 px-6 rounded-lg"
              aria-label="Book a call with us"
            >
              Book A Call
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}