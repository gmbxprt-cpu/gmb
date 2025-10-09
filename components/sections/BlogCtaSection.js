"use client";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

export default function BlogCtaSection() {
  return (
    <section className="bg-emerald-950 py-8" id="blog">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Yeh 'flex-col-reverse' class hi mobile par content ko upar laati hai */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE (Code mein pehle hai, mobile par neeche dikhega) */}
          <Fade direction="left" triggerOnce>
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              <Image 
                src="/images/crb.jpeg" 
                alt="GMB Expert is a Google Certified partner for GMB SEO"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </Fade>
          
          {/* CONTENT (Code mein doosre number par hai, mobile par upar dikhega) */}
          <Fade direction="right" triggerOnce>
            <div className="text-center md:text-left px-4 md:px-0">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">
                Expert GMB Services
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight">
                Turn Your Google Profile into a <span className="text-emerald-300">Lead Machine</span>
              </h2>

              {/* Desktop ka bada paragraph */}
              <p className="hidden md:block mt-4 text-emerald-100 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
                Unlock your business's true potential. Our expert-led GMB optimization services are designed to elevate your local search ranking, drive more qualified customer calls, and significantly boost your visibility on Google Maps. We implement advanced strategies in profile optimization, local SEO, and review management to turn your GMB profile into a powerful customer acquisition tool.
              </p>

              {/* Mobile ka chhota paragraph */}
              <p className="md:hidden mt-4 text-emerald-100 leading-relaxed text-lg">
                Boost your local ranking and get more calls. Our expert services turn your GMB profile into a lead generation machine.
              </p>
              
              <div className="mt-6">
                <a 
                  href="https://wa.me/917009364216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.45 16.86L2.06 21.94L7.31 20.58C8.76 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.63C16.56 3.63 20.32 7.39 20.32 11.91C20.32 16.43 16.56 20.19 12.04 20.19C10.49 20.19 8.99 19.79 7.69 19.06L7.32 18.85L4.23 19.74L5.15 16.73L4.93 16.36C4.15 15 3.76 13.47 3.76 11.91C3.76 7.39 7.52 3.63 12.04 3.63M9.35 7.03C9.15 7.03 8.96 7.04 8.78 7.07C8.42 7.13 7.97 7.34 7.64 7.82C7.32 8.3 6.69 9.17 6.69 10.38C6.69 11.58 7.66 12.74 7.82 12.94C7.98 13.14 9.24 15.09 11.2 15.89C13.52 16.85 13.52 16.42 14.15 16.36C14.78 16.29 15.89 15.69 16.13 15.11C16.37 14.53 16.37 14.05 16.31 13.95C16.25 13.85 16.09 13.79 15.83 13.63C15.57 13.47 14.47 12.94 14.25 12.86C14.04 12.78 13.88 12.73 13.72 12.97C13.56 13.21 13.06 13.79 12.9 13.95C12.74 14.11 12.58 14.13 12.32 13.97C12.06 13.81 11.03 13.45 9.77 12.27C8.79 11.38 8.16 10.28 7.96 10.04C7.76 9.8 7.86 9.68 8 9.53C8.13 9.38 8.29 9.21 8.43 9.05C8.57 8.89 8.62 8.79 8.72 8.63C8.82 8.47 8.77 8.31 8.71 8.19C8.65 8.07 8.1 6.96 7.88 6.46C7.66 5.96 7.45 6.03 7.29 6.02L7.15 6.03H6.95V7.03H9.35Z"></path></svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}