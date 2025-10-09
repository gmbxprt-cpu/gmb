"use client";
import Image from 'next/image';
import { Fade, Slide } from "react-awesome-reveal";

export default function DesktopWhatIsGmb() {
  return (
    <section className="bg-white py-20 md:py-28 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ===== Left Column (Your Image) ===== */}
          <div className="flex justify-center">
            <Slide direction="left" triggerOnce>
              <div className="p-4 bg-white rounded-3xl shadow-2xl">
                <Image
                  src="/images/GMB-optimization-1024x871.png"
                  alt="A visual representation of GMB Optimization showing a business profile on Google Maps and a phone with local search results."
                  width={500}
                  height={427}
                  className="rounded-2xl"
                />
              </div>
            </Slide>
          </div>
          
          {/* ===== Right Column (Content) ===== */}
          <div>
            <Fade direction="right" cascade damping={0.1} triggerOnce>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                What Is <span className="text-blue-600">Google My Business Optimization</span>?
              </h2>
              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-6">
                <p>
                  GMB optimization is the art and science of enhancing your online business profile to dominate local Google Search and Maps results. It’s the single most powerful tool for making your business discoverable to customers in your immediate area.
                </p>
                <p>
                  Our expert service transforms your profile by improving accuracy, integrating high-value keywords, and ensuring your information is always current. We manage every detail to guarantee you rank for the local search terms that matter most.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
