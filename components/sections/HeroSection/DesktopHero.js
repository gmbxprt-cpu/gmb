"use client";
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import HeroLeadForm from '@/components/common/HeroLeadForm';

const CircleCheckIcon = () => (
  <div className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-sm" aria-hidden="true">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function DesktopHero() {
  return (
    <section className="w-full bg-slate-50 pt-16 lg:pt-20 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ===== Left Column (Content as Requested) ===== */}
          <div>
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-md">
                Google My Business Optimization
              </span>
              
              <h1 className="mt-6 text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Rank Higher In Local Searches and <span className="text-blue-600">Google Maps</span>
              </h1>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-lg font-semibold text-slate-800">
                  <CircleCheckIcon />
                  <span className="ml-4">Increase Visitors from Google Maps</span>
                </li>
                <li className="flex items-center text-lg font-semibold text-slate-800">
                  <CircleCheckIcon />
                  <span className="ml-4">Get More Calls from Interested Customers</span>
                </li>
                <li className="flex items-center text-lg font-semibold text-slate-800">
                  <CircleCheckIcon />
                  <span className="ml-4">Generate More Leads Than Your Competitors</span>
                </li>
              </ul>

              <div className="mt-10 flex items-center gap-4">
                <Link href="#pricing" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                  See Pricing
                </Link>
             <a 
  href="tel:+917009364216" 
  className="bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transition-colors"
>
  Call Now
</a>  
              </div>
            </Fade>
          </div>

          {/* ===== Right Column (New, Better Form) ===== */}
          <div className="hidden lg:flex items-center justify-center">
             <Fade direction="right" duration={1000} triggerOnce>
                <HeroLeadForm />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
