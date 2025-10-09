"use client";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const solutions = [
  { title: "Profile Suspension", description: "We audit suspended profiles and file appeals to get you back online." },
  { title: "Phone & Verification Issues", description: "We resolve phone number conflicts and navigate Google's verification process." },
  { title: "Fake or Negative Reviews", description: "We help identify and report fake reviews and grow genuine positive reviews." },
  { title: "Ranking Drops", description: "We analyze algorithm changes to recover and improve your GMB ranking." },
];

export default function MobileGuideSection() {
  return (
    <section className="bg-white py-16 md:hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl font-extrabold text-black">Your Guide to GMB Success</h2>
            <p className="mt-3 text-slate-600">
              Appearing on Google Maps can make or break a local business. Here's how we make it work for you.
            </p>
          </Fade>
        </div>

        <div className="mt-10">
          <Fade direction="up" triggerOnce>
            <div className="relative w-full h-64 rounded-xl shadow-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A team discussing GMB SEO strategy" fill className="object-cover" />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-black">What is GMB SEO?</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                It's optimizing your profile to rank higher on Google Maps. We focus on **Accuracy**, **Relevance**, and **Activity**.
              </p>
            </div>
          </Fade>
        </div>

        <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <Fade direction="up" triggerOnce>
            <h3 className="text-2xl font-bold text-black text-center">Common Problems We Solve</h3>
            <div className="mt-6 space-y-6">
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
