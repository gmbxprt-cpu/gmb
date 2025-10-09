"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import EmbeddedContactForm from '@/components/common/EmbeddedContactForm';

const CircleCheckIcon = () => (
    <div className="flex-shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md" aria-hidden="true">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
    </div>
);

export default function MobileHero() {
  return (
    // 👇 Top padding reduced further to pt-6
    <section className="bg-slate-50 w-full md:hidden pt-6 pb-12 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                Google My Business Optimization
            </span>
            
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Rank Higher, Get Seen on <span className="text-blue-600">Google Maps</span>
            </h1>

            <div className="mt-6 text-left">
              <Fade direction="up" delay={100} triggerOnce>
                <EmbeddedContactForm />
              </Fade>
            </div>
            
            <ul className="mt-6 space-y-2 text-md font-semibold text-slate-800 max-w-sm mx-auto">
                <li className="flex items-center">
                    <CircleCheckIcon />
                    <span className="ml-3 text-left">Increase Visitors from Google Maps</span>
                </li>
                <li className="flex items-center">
                    <CircleCheckIcon />
                    <span className="ml-3 text-left">Get More Calls from Customers</span>
                </li>
                 <li className="flex items-center">
                    <CircleCheckIcon />
                    <span className="ml-3 text-left">Generate More Leads</span>
                </li>
            </ul>

            <div className="mt-6 flex flex-col space-y-2">
                <Link href="#pricing" className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform hover:scale-105">
                    <span>Choose Your Plan</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                <a href="tel:+917009364216" className="w-full flex items-center justify-center space-x-2 bg-transparent border-2 border-slate-300 text-slate-700 font-bold py-3 px-8 rounded-lg transition-colors hover:bg-slate-200" aria-label="Book a call with our team">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Book A Call</span>
                </a>
            </div>
        </Fade>
      </div>
    </section>
  );
}
