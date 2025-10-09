"use client";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

// --- SCREENSHOTS ARRAY KO 6 IMAGES KE SAATH UPDATE KAR DIYA GAYA HAI ---
const screenshots = [
  // Purani Images
  { src: "/images/1.jpeg", alt: "GMB report showing 57 interactions" },
  { src: "/images/2.jpeg", alt: "GMB dashboard showing 824 interactions" },
  { src: "/images/6.jpeg", alt: "Local SEO strategy infographic" },
  // Nayi Images
  {
    src: "/images/image copy 2.png",
    alt: "Screenshot of Google Business Profile analytics showing call growth over five months."
  },
  {
    src: "/images/image.png",
    alt: "Comparison screenshot of GMB call performance, showing an increase in calls."
  },
  {
    src: "/images/hg.png",
    alt: "Screenshot of GMB performance overview, displaying business profile views and top search terms."
  }
];

export default function MobileClientScreenshots() {
  return (
    <section className="bg-slate-50 py-16 md:hidden">
      <div className="container mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <span className="bg-blue-200 text-blue-800 text-sm font-bold px-3 py-1.5 rounded-full uppercase">Proof of Growth</span>
            <h2 className="text-3xl font-extrabold text-black mt-4">Client Results</h2>
            <p className="text-slate-600 mt-3">Here are a few snapshots of the results we've achieved.</p>
          </div>
          <div className="space-y-8">
            {screenshots.map((shot, index) => (
              <Fade key={index} direction="up" triggerOnce delay={index * 100}>
                <div className="rounded-xl shadow-lg overflow-hidden border border-slate-200 bg-white">
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src={shot.src} 
                      alt={shot.alt} 
                      fill 
                      sizes="100vw"
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}