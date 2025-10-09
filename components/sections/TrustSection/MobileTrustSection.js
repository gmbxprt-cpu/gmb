"use client";
import { Fade } from 'react-awesome-reveal';

// Icons are the same as desktop
const icons = {
  results: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>,
  team: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
  process: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>,
};

// Data is the same as desktop
const trustPoints = [
  { key: 'results', title: "Proven Results", description: "Our case studies show real-world success, from doubling walk-ins for local cafes to reinstating suspended plumbing services and ranking clinics for competitive keywords." },
  { key: 'team', title: "Expert Team of Specialists", description: "A GMB specialist saves you time and prevents costly mistakes. We know how to handle suspensions, complex verifications, and navigate Google's guidelines to get you results faster." },
  { key: 'process', title: "Transparent & Clear Process", description: "From a full profile audit and keyword research to ongoing reporting, we follow a clear 8-step process. You'll always know what we're doing and see the progress we're making." }
];

export default function MobileTrustSection() {
  return (
    <section className="bg-gray-800 text-white py-16 md:hidden">
      <div className="container mx-auto px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Build Trust, Build Your Business</h2>
            <p className="text-slate-300 mt-3">We build a foundation of trust with Google and your customers.</p>
          </div>
          <div className="mt-12 space-y-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  {icons[point.key]}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="text-slate-300 mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
