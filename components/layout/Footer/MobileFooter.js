import Link from 'next/link';
import Image from 'next/image';

// Instagram Icon SVG
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);


export default function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    // 👇 Background color ko 'bg-black' kar diya hai
    <footer className="bg-black text-white md:hidden">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        <div className="flex justify-between items-start">
          {/* Left Column: Brand, Contact, Address */}
          <div>
            <Link href="#" className="flex items-center space-x-2 flex-nowrap">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image src="/images/logo.png" alt="GMB Expert Logo" fill className="object-contain" />
              </div>
              {/* 👇 Heading pehle se hi multi-color hai */}
              <span className="text-xl font-extrabold tracking-tight whitespace-nowrap">
                <span className="text-blue-500">G</span><span className="text-red-500">M</span><span className="text-yellow-400">B</span> <span className="text-green-500">Expert</span>
              </span>
            </Link>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Office No - 02, Fourth Floor, City Court, Zirakpur 140603, Chandigarh</span>
              </div>
              <a href="tel:+917009364216" className="flex items-center space-x-2 hover:text-white">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 70093 64216</span>
              </a>
              <a href="mailto:hello@gmb.expert" className="flex items-center space-x-2 hover:text-white">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="break-all">hello@gmb.expert</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div>
            {/* 👇 "Quick Links" heading ko halka white ('text-slate-200') kar diya hai */}
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider pb-2 border-b-2 border-blue-500 inline-block">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#" className="text-slate-400 hover:text-white">Home</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white">Services</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#faq" className="text-slate-400 hover:text-white">FAQ</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          {/* 👇 Social icons ko hatakar ek naya Instagram button bana diya hai */}
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/gmb.expert.seo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Instagram" 
              className="inline-flex items-center space-x-3 py-2 px-5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity"
            >
              <InstagramIcon />
              <span>Follow on Instagram</span>
            </a>
          </div>
          <div className="mt-6 text-center text-slate-400 text-xs">
            <p>&copy; {currentYear} GMB Expert. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}