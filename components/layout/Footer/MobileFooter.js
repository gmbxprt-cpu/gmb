import Link from 'next/link';
import Image from 'next/image';

const SocialIcon = ({ href, 'aria-label': ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-slate-400 hover:text-blue-400 transition-colors">
    {children}
  </a>
);

export default function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white md:hidden">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* 👇 Yahan 'grid grid-cols-2' ko 'flex justify-between' se badal diya hai */}
        <div className="flex justify-between items-start">
          {/* Left Column: Brand, Contact, Address */}
          <div>
            <Link href="#" className="flex items-center space-x-2 flex-nowrap">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image src="/images/logo.png" alt="GMB Expert Logo" fill className="object-contain" />
              </div>
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
            <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b-2 border-blue-500 inline-block">Quick Links</h3>
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
          <div className="flex justify-center space-x-6">
            <SocialIcon href="#" aria-label="Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg></SocialIcon>
            <SocialIcon href="#" aria-label="Twitter"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.623.169-1.282.203-1.943.163.599 1.954 2.338 3.296 4.402 3.332-1.734 1.35-3.921 2.162-6.327 2.162-.41 0-.814-.024-1.21-.072 2.189 1.407 4.843 2.238 7.748 2.238 9.283 0 14.379-7.697 14.02-14.386.972-.701 1.815-1.583 2.484-2.585z"/></svg></SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></SocialIcon>
          </div>
          <div className="mt-6 text-center text-slate-400 text-xs">
            <p>&copy; {currentYear} GMB Expert. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}