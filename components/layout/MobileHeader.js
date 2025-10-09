"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavDrawerIcons } from '@/components/icons/NavDrawerIcons';

// एनिमेटेड टॉगल बटन
const AnimatedToggleButton = ({ isOpen, toggle }) => (
    <button onClick={toggle} className="relative w-8 h-8 z-50" aria-label="Toggle menu">
        <motion.span
            className="absolute h-0.5 w-6 bg-slate-800"
            animate={{ y: isOpen ? 0 : -6, rotate: isOpen ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ left: '4px', top: '50%'}}
        />
        <motion.span
            className="absolute h-0.5 w-6 bg-slate-800"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.1 }}
            style={{ left: '4px', top: '50%'}}
        />
        <motion.span
            className="absolute h-0.5 w-6 bg-slate-800"
            animate={{ y: isOpen ? 0 : 6, rotate: isOpen ? -45 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ left: '4px', top: '50%'}}
        />
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
    <header className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image src="/images/logo.png" alt="Gmb Logo" layout="fill" objectFit="contain" priority />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-blue-600">GMB</span> <span className="text-slate-800">Expert</span>
          </span>
        </Link>
        <AnimatedToggleButton isOpen={isMenuOpen} toggle={toggleMenu} />
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMenu} className="fixed inset-0 bg-black/50 z-40" />
              <motion.nav variants={drawerVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold">Menu</span>
                </div>
                <ul className="flex flex-col space-y-2">
                  <motion.li variants={itemVariants}><a href="#" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-gray-700 hover:bg-slate-100 rounded-md">{NavDrawerIcons.home} <span>Home</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#services" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-gray-700 hover:bg-slate-100 rounded-md">{NavDrawerIcons.services} <span>Services</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#pricing" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-gray-700 hover:bg-slate-100 rounded-md">{NavDrawerIcons.pricing} <span>Pricing</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#faq" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-gray-700 hover:bg-slate-100 rounded-md">{NavDrawerIcons.faq} <span>FAQ</span></a></motion.li>
                  <motion.li variants={itemVariants}><a href="#" onClick={toggleMenu} className="flex items-center space-x-4 py-3 px-3 text-lg font-semibold text-gray-700 hover:bg-slate-100 rounded-md">{NavDrawerIcons.blog} <span>Blog</span></a></motion.li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
