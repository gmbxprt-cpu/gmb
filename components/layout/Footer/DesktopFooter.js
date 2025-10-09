import Link from 'next/link';
import Image from 'next/image';

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

export default function DesktopFooter() {
  const currentYear = new Date().getFullYear();
  return (
   <footer className="bg-black text-white hidden md:block">
      <div className="max-w-7xl mx-auto px- py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* --- CHANGE YAHAN KIYA GAYA HAI: Negative margin 'lg:-ml-6' hata diya hai --- */}
          <div className="lg:col-span-1">
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
            
            <p className="mt-6 ml-8 text-slate-300 text-sm leading-relaxed">
              We help local businesses dominate search results and get seen on Google Maps through expert GMB optimization.
            </p>

            <div className="mt-6 mt-6 ml-8">
              <a 
                href="https://www.instagram.com/gmb.expert.seo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <svg className=" w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-bold tracking-wider uppercase mt-3">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 font-bold tracking-wider uppercase mt-3">Resources</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 font-bold tracking-wider uppercase mt-3">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-slate-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <span className="font-semibold text-white">CHANDIGARH:</span>
                  <span className="block text-sm">Office No - 02, Fourth Floor, City Court, Zirakpur 140603, Chandigarh</span>
                </div>
              </li>
              <li className="flex items-start">
                 <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <span className="font-semibold text-white">PUNE:</span>
                  <span className="block text-sm">408, Montvert Velocity, Baner - Pashan Link Rd, Baner, Pune, Maharashtra 411021</span>
                </div>
              </li>
              <li className="flex items-center pt-2 border-t border-gray-800">
  <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    {/* --- Gradient yahan define kiya gaya hai --- */}
    <defs>
      <linearGradient id="phoneIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6' }} />   {/* Blue color */}
        <stop offset="100%" style={{ stopColor: '#22c55e' }} /> {/* Green color */}
      </linearGradient>
    </defs>
    {/* --- Icon ke path par gradient apply kiya gaya hai --- */}
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="1.5" 
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
      stroke="url(#phoneIconGradient)" 
      fill="none"
    />
  </svg>
  <a href="tel:+917009364216" className="hover:text-white">+91 70093 64216</a>
</li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:sales@citationbuilderpro.com" className="hover:text-white">hello@gmb.expert</a>
              </li>
            </ul>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-white text-sm lg:col-span-4">
            <p>&copy; {currentYear} GMB Expert. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}