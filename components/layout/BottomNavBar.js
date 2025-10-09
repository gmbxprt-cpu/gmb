"use client";

import Link from 'next/link';
import { BottomNavIcons } from '@/components/icons/BottomNavIcons';

const NavItem = ({ href, icon, label, isActive }) => (
  <Link 
    href={href} 
    className="flex flex-col items-center justify-center w-full h-full"
  >
    <div className={`transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-black'}`}>
      {icon}
    </div>
    <span className={`text-xs mt-1 font-semibold transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-slate-700'}`}>
      {label}
    </span>
  </Link>
);

export default function BottomNavBar({ activeSection }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-5px_15px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-md mx-auto h-full grid grid-cols-5 items-center">
        <NavItem href="#" icon={BottomNavIcons.home} label="Home" isActive={activeSection === 'home'} />
        <NavItem href="#services" icon={BottomNavIcons.services} label="Services" isActive={activeSection === 'services'} />
        <NavItem href="#pricing" icon={BottomNavIcons.pricing} label="Pricing" isActive={activeSection === 'pricing'} />
        <NavItem href="#faq" icon={BottomNavIcons.faq} label="FAQ" isActive={activeSection === 'faq'} />
        <NavItem href="tel:+917009364216" icon={BottomNavIcons.contact} label="Call Now" isActive={false} />
      </div>
    </nav>
  );
}
