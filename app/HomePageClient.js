"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BottomNavBar from '@/components/layout/BottomNavBar';
import HeroSection from '@/components/sections/HeroSection';
import WhatIsGmbSection from '@/components/sections/WhatIsGmbSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import WorkingWithSection from '@/components/sections/WorkingWithSection';
import ClientScreenshotsSection from '@/components/sections/ClientScreenshotsSection';
import PricingSection from '@/components/sections/PricingSection';
import OnetimeServices from '@/components/sections/OnetimeServices';
import MultiLocationSection from '@/components/sections/MultiLocationSection';
import FaqSection from '@/components/sections/FaqSection';
import BlogCtaSection from '@/components/sections/BlogCtaSection';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function HomePageClient() {
  const [activeSection, setActiveSection] = useState('home');
  const options = { threshold: 0.3, rootMargin: "-40% 0px -40% 0px" };

  const { ref: homeRef, inView: homeInView } = useInView(options);
  const { ref: servicesRef, inView: servicesInView } = useInView(options);
  const { ref: resultsRef, inView: resultsInView } = useInView(options);
  const { ref: pricingRef, inView: pricingInView } = useInView(options);
  const { ref: faqRef, inView: faqInView } = useInView(options);
  const { ref: contactRef, inView: contactInView } = useInView(options);
  const { ref: blogRef, inView: blogInView } = useInView(options);

  useEffect(() => {
    if (homeInView) setActiveSection('home');
    if (servicesInView) setActiveSection('services');
    if (resultsInView) setActiveSection('results');
    if (pricingInView) setActiveSection('pricing');
    // Corrected a small bug in original code where faqRef was checked instead of faqInView
    if (faqInView) setActiveSection('faq');
    if (blogInView) setActiveSection('blog');
    if (contactInView) setActiveSection('contact');
  }, [homeInView, servicesInView, resultsInView, pricingInView, faqInView, blogInView, contactInView]);

  return (
    <main className="relative">
      {/* --- New Strategic Flow for the Homepage --- */}
      
      {/* 1. Hook & Introduction */}
      <div id="home" ref={homeRef}><HeroSection /></div>
      <WhatIsGmbSection />

      {/* 3. Pricing (Monthly & Onetime) - MOVED UP */}
      <div id="pricing" ref={pricingRef}>
                <OnetimeServices />
        <PricingSection />

      </div>
      
      {/* 2. Benefits & Features */}
      <BenefitsSection />
      <div id="services" ref={servicesRef}><WhyChooseUsSection /></div>
      
    

      {/* 4. Build Trust & Show Proof */}
      <WorkingWithSection />
      <div id="results" ref={resultsRef}><ClientScreenshotsSection /></div>
      <MultiLocationSection />
      
      {/* 5. Answer Doubts */}
      <div id="faq" ref={faqRef}><FaqSection /></div>
      
      {/* 6. Final Call to Action */}
      <div id="contact" ref={contactRef}>
        {/* <div className="text-center bg-white pt-20 pb-12 px-4">
            <h2 className="text-4xl font-extrabold text-black">Get In Touch</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question or want to start a project? Send us a message and our team will contact you shortly.
            </p>
        </div> */}
        <ContactFormSection />
      </div>

      {/* 7. Content - MOVED TO LAST */}
      <div id="blog" ref={blogRef}><BlogCtaSection /></div>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BottomNavBar activeSection={activeSection} />
    </main>
  );
}