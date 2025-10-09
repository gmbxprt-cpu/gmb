"use client";
import { Fade } from "react-awesome-reveal";

// नए आइकॉन
const icons = {
  warning: <svg className="w-7 h-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  sparkles: <svg className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  lightbulb: <svg className="w-8 h-8 text-yellow-400 flex-shrink-0 mb-4 sm:mb-0 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
};

export default function MobileBenefits() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-16 md:hidden">
      <div className="container mx-auto px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">The Benefits</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              How GMB Optimization Drives SEO Results
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
              <div className="flex items-center">
                {icons.warning}
                <h3 className="ml-3 text-xl font-bold text-rose-900">The Problem: Lost Customers</h3>
              </div>
              <p className="mt-3 text-slate-700">Unoptimized GMB profiles lead to missed opportunities, lost revenue, and being overshadowed by competitors.</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <div className="flex items-center">
                {icons.sparkles}
                <h3 className="ml-3 text-xl font-bold text-indigo-900">The Solution: GMB Expert</h3>
              </div>
              <p className="mt-3 text-slate-700">At <strong className="font-semibold text-slate-900">GMB Expert</strong>, we provide comprehensive optimization to boost your ranking and drive engagement.</p>
            </div>
          </div>
        
          <div className="mt-12 bg-white rounded-xl shadow-xl p-6 text-center border border-slate-200/80">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
              {icons.lightbulb}
              <span className="text-xl font-bold text-slate-800">Get Started with GMB Listing Optimization Today</span>
            </div>
            <button className="w-full mt-6 sm:mt-4 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg">
              Start Optimizing
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
}
