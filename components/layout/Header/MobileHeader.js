"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavDrawerIcons } from '@/components/icons/NavDrawerIcons';

// नया और बेहतर एनिमेटेड टॉगल बटन (SVG पर आधारित)
const AnimatedToggleButton = ({ isOpen, toggle }) => (
    <button onClick={toggle} className="relative w-8 h-8 z-[51]" aria-label="Toggle menu">
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 -mt-3 -ml-3"
        >
            <motion.path
                d="M4 6H20"
                stroke={isOpen ? "white" : "#1E293B"}
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                    hidden: { d: "M4 6H20", rotate: 0, y: 0 },
                    visible: { d: "M6 18L18 6", rotate: 45, y: 6, x: -6 }
                }}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            />
            <motion.path
                d="M4 12H20"
                stroke={isOpen ? "white" : "#1E293B"}
                strokeWidth="2"
                strokeLinecap="round"
                variants={{ hidden: { opacity: 1 }, visible: { opacity: 0 } }}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ duration: 0.1 }}
            />
            <motion.path
                d="M4 18H20"
                stroke={isOpen ? "white" : "#1E293B"}
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                    hidden: { d: "M4 18H20", rotate: 0, y: 0 },
                    visible: { d: "M6 6L18 18", rotate: -45, y: -6, x: -6 }
                }}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            />
        </motion.svg>
    </button>
);


export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.07, delayChildren: 0.2 } },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };
  const itemVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

  return (
    <header className="md:hidden sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image src="/images/logo.png" alt="Gmb Logo" layout="fill" objectFit="contain" priority />
          </div>
          <span className="text-xl font-bold tracking-tight">
           <span className="text-xl font-extrabold tracking-tight whitespace-nowrap">
                <span className="text-blue-500">G</span><span className="text-red-500">M</span><span className="text-yellow-400">B</span> <span className="text-green-500">Expert</span>
              </span>
          </span>
        </Link>
        
        <AnimatedToggleButton isOpen={isMenuOpen} toggle={toggleMenu} />

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMenu} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
              
              <motion.nav variants={drawerVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900 shadow-2xl z-50 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-white">Menu</span>
                </div>
                <ul className="flex flex-col space-y-2">
                  <motion.li variants={itemVariants}><a href="#" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-slate-200 hover:bg-slate-800 rounded-md">{NavDrawerIcons.home} <span>Home</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#services" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-slate-200 hover:bg-slate-800 rounded-md">{NavDrawerIcons.services} <span>Services</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#pricing" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-slate-200 hover:bg-slate-800 rounded-md">{NavDrawerIcons.pricing} <span>Pricing</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#faq" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-slate-200 hover:bg-slate-800 rounded-md">{NavDrawerIcons.faq} <span>FAQ</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#blog" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-slate-200 hover:bg-slate-800 rounded-md">{NavDrawerIcons.blog} <span>Blog</span></a></motion.li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
