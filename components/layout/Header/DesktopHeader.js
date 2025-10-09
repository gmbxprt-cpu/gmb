"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ड्रॉपडाउन एरो
const DropdownArrow = () => (
  <svg className="w-4 h-4 ml-1.5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

export default function DesktopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`hidden md:block w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* ===== टॉप बार (नीला हिस्सा) ===== */}
     <div className={`bg-blue-600 text-white transition-all duration-300 ${isScrolled ? 'py-0 h-0 opacity-0 invisible' : 'py-2'}`}>
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm ">
    
    {/* === UPDATED: INSTAGRAM BUTTON WITH COLORFUL GRADIENT === */}
    <a
      href="https://www.instagram.com/gmb.expert.seo/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      // Instagram-style gradient with a hover effect
      className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full transition-transform duration-300 hover:scale-105"
    >
      {/* Instagram SVG Icon */}
      <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.523.012-4.75.07-2.734.124-3.914 1.312-4.038 4.038-.058 1.226-.069 1.588-.069 4.75s.011 3.524.069 4.75c.124 2.725 1.304 3.914 4.038 4.038 1.226.058 1.588.069 4.75.069s3.524-.011 4.75-.069c2.734-.124 3.914-1.312 4.038-4.038.058-1.226.069-1.588.069-4.75s-.011-3.524-.069-4.75c-.124-2.725-1.304-3.914-4.038-4.038-1.226-.058-1.588-.069-4.75-.069zm0 3.192c-2.421 0-4.381 1.96-4.381 4.381s1.96 4.381 4.381 4.381 4.381-1.96 4.381-4.381S14.421 6.796 12 6.796zm0 7.332c-1.631 0-2.951-1.32-2.951-2.951S10.369 9.177 12 9.177s2.951 1.32 2.951 2.951S13.631 14.128 12 14.128zm4.965-7.835c-.783 0-1.419.636-1.419 1.419s.636 1.419 1.419 1.419 1.419-.636 1.419-1.419S17.748 6.293 16.965 6.293z"></path>
      </svg>
      <span className="text-xs font-semibold ">Instagram</span>
    </a>

    {/* Contact Info (Right Side) */}
    <div className="flex items-center space-x-6">
      <a href="mailto:hello@gmb.expert" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        <span>hello@gmb.expert</span>
      </a>
      <a href="tel:+917009364216" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        <span>+91 70093 64216</span>
      </a>
    </div>
  </div>
</div>

      {/* ===== मुख्य नेविगेशन (सफ़ेद हिस्सा) ===== */}
      <div className={`transition-colors ${isScrolled ? 'bg-transparent' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px- h-20 flex justify-between items-center">
          {/* Logo with Gmb text */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-24 flex-shrink-0">
                <Image 
                  src="/images/logo.png" 
                  alt="Gmb Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="-ml-4  text-2xl font-extrabold tracking-tight whitespace-nowrap">
                <span className="text-blue-500">G</span><span className="text-red-500">M</span><span className="text-yellow-400">B</span> <span className="text-green-500">Expert</span>
              </span>
            </Link>

          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex items-center space-x-7 text-gray-800 font-semibold">
                <li><Link href="/" className="hover:text-blue-600 transition-colors group">Home</Link></li>
                <li><Link href="#services" className="flex items-center hover:text-blue-600 transition-colors group">Services <DropdownArrow /></Link></li>
                <li><Link href="#pricing" className="flex items-center hover:text-blue-600 transition-colors group">Pricing <DropdownArrow /></Link></li>
                <li><Link href="#faq" className="flex items-center hover:text-blue-600 transition-colors group">FAQ <DropdownArrow /></Link></li>
                <li><Link href="#blog" className="hover:text-blue-600 transition-colors group">Blog</Link></li>
              </ul>
            </nav>
            <a href="#contact" className="bg-slate-800 text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:bg-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
  Get In Touch
</a>
          </div>
        </div>
      </div>
    </header>
  );
}
