"use client";
import Image from 'next/image'; // Import the Image component
import { Fade, Slide } from "react-awesome-reveal";

export default function DesktopWhatIsGmb() {
  return (
    <section className="bg-white py-20 md:py-28 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center">
            <Slide direction="left" triggerOnce>
              <div className="p-4 bg-slate-50 rounded-3xl shadow-2xl border border-slate-200/80">
                {/* Replaced DataGrowthIcon with your image */}
                <Image
                  src="/Images/GMB-optimization-1024x871.png" // Path to your image
                  alt="Google My Business Optimization showing a phone with local search results and map"
                  width={600} // Adjust width as needed
                  height={500} // Adjust height as needed, maintaining aspect ratio
                  className="rounded-2xl object-cover"
                />
              </div>
            </Slide>
          </div>
          
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
