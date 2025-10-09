"use client";
import { Fade } from "react-awesome-reveal";
// CHANGE: Link component ko import kiya
import Link from 'next/link';

// नए आइकॉन, accessibility के लिए <title> tag के साथ
const icons = {
  warning: (
    <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-labelledby="warningTitle">
      <title id="warningTitle">Warning Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-labelledby="sparklesTitle">
      <title id="sparklesTitle">Sparkles Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-10 h-10 text-yellow-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="lightbulbTitle">
      <title id="lightbulbTitle">Lightbulb Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
    </svg>
  )
};

export default function DesktopBenefits() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-20 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {/* ऊपर का हिस्सा */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">The Benefits</span>
            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              How GMB Optimization Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Real SEO Results</span>
            </h2>
          </div>

          {/* कंटेंट कार्ड्स */}
          <div className="mt-12 grid grid-cols-2 gap-8">
            {/* The Problem Card */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-8">
              <div className="flex items-center">
                {icons.warning}
                <h3 className="ml-3 text-2xl font-bold text-rose-900">The Problem: Lost Customers & Visibility</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Many businesses struggle with unoptimized GMB profiles, making them invisible in **local search and on Google Maps**. This leads to missed opportunities, lost revenue, and being overshadowed by competitors. Without effective **Google Business optimization**, you're leaving money on the table.
              </p>
            </div>
            {/* The Solution Card */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
              <div className="flex items-center">
                {icons.sparkles}
                <h3 className="ml-3 text-2xl font-bold text-indigo-900">The Solution: Expert GMB Optimization</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                At <strong className="font-semibold text-slate-900">GMB Expert</strong>, we provide a comprehensive optimization service to boost your **local visibility and ranking on Google Maps**. We ensure your business stands out, attracting more calls, clicks, and customers.
              </p>
            </div>
          </div>
        
          {/* नीचे का बैनर */}
          <div className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-xl p-8 flex justify-between items-center border border-slate-200/80">
            <div className="flex items-center">
              {icons.lightbulb}
              <span className="text-2xl font-bold text-slate-800">Get Started with Your GMB Optimization Today</span>
            </div>

            {/* CHANGE: <button> ko <Link> se badal diya hai */}
            <Link 
              href="#pricing"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Start Optimizing Now
            </Link>

          </div>
        </Fade>
      </div>
    </section>
  );
}