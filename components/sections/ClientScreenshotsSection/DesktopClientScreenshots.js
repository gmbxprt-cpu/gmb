"use client";
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

const screenshots = [
  // --- PURANI TEEN IMAGES ---
  {
    src: "/images/1.jpeg",
    alt: "Screenshot of a Google Business Profile report showing 57 interactions and significant growth in calls and views."
  },
  {
    src: "/images/2.jpeg",
    alt: "Screenshot of a Google Business Profile dashboard showing 824 customer interactions."
  },
  {
    src: "/images/6.jpeg",
    alt: "Infographic showing a local SEO strategy for businesses, including 'Near Me' optimization and GMB listings."
  },
  // --- NAYI TEEN IMAGES (aapke pichhle request se) ---
  {
    src: "/images/image copy 2.png",
    alt: "Screenshot of Google Business Profile analytics showing call growth over five months."
  },
  {
    src: "/images/image.png",
    alt: "Comparison screenshot of GMB call performance, showing an increase in calls."
  },
  {
    src: "/images/image copy.png",
    alt: "Screenshot of GMB performance overview, displaying business profile views and top search terms."
  }
];

export default function DesktopClientScreenshots() {
  return (
    <section className="bg-blue-50 py-24 hidden md:block"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Slide direction="up" triggerOnce>
            <span className="bg-blue-200 text-blue-800 text-sm font-bold px-4 py-2 rounded-full uppercase">Proof of Growth</span>
            <h2 className="text-5xl font-extrabold text-black mt-4 leading-tight">Some Of Our <span className="text-blue-700">Client Results</span></h2>
            <p className="text-slate-700 mt-5 text-xl">We deliver measurable growth. Here are a few snapshots of the results we've achieved for our clients.</p>
          </Slide>
        </div>

        {/* --- GRID LAYOUT MEIN BADLAV KIYA GAYA HAI --- */}
        {/* Ab yeh grid automatically 3-3 ke rows bana lega kyunki 6 items hain */}
        <Slide direction="up" cascade damping={0.2} triggerOnce>
          {/* CHANGE: grid-cols-1 lg:grid-cols-3 se grid-cols-1 md:grid-cols-2 lg:grid-cols-3 kar diya hai */}
          {/* Isse choti screens par 2-2 images dikhengi, aur badi screens par 3-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {screenshots.map((shot, index) => (
              <div key={index} className="group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-slate-200 cursor-pointer bg-white">
                <div className="relative w-full aspect-[4/3]">
                  <Image 
                    src={shot.src} 
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
}