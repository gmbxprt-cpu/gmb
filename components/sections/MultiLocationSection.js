"use client";
import { useRef } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link'; // 👈 Step 1: Link component ko import karein
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MultiLocationSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={sectionRef} className="bg-slate-50 py-12 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="hidden md:block">
            <Slide direction="left" triggerOnce>
              <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{ y: imageY }}
                >
                  <Image
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // 👇 SEO: More descriptive alt text
                    alt="GMB Expert's strategy for multi-location business optimization"
                    layout="fill"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </Slide>
          </div>
          
          {/* Text Column */}
          <div>
            <Slide direction="right" triggerOnce>
              <div className="md:bg-transparent bg-white md:p-0 p-6 rounded-2xl md:shadow-none shadow-xl text-center md:text-left">
                {/* This <h2> heading is correct for SEO */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                  Specialized GMB Optimization for <span className="text-blue-600">Multi-Location Businesses</span>
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed hidden md:block">
                  If you operate multiple business locations, managing your GMB profiles can be a challenge. At GMB Expert, we specialize in multi-location GMB optimization services. Our services are tailored to meet the unique needs of businesses with multiple GMB listings, ensuring each location is optimized for its specific market.
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed md:hidden">
                  Managing multiple GMB profiles is a challenge. We specialize in multi-location GMB optimization to ensure each of your locations is perfectly optimized for its specific market.
                </p>

                <div className="mt-8">
                  {/* 👇 Step 2: <a> tag ko <Link> se badlein */}
                  <Link 
                    href="#pricing" 
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
                  >
                    <span>Get Started Now</span>
                    {/* 👇 Accessibility: Decorative icon is hidden from screen readers */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </div>
            </Slide>
          </div>

        </div>
      </div>
    </section>
  );
}