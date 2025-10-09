import React from 'react';
import { motion } from 'framer-motion';

const DataGrowthIcon = ({ className = "w-48 h-48" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const barVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Base lines */}
      <path d="M10 90H90" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 10V90" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

      {/* Animated Bars */}
      <g clipPath="url(#clip)">
        <motion.rect x="20" y="50" width="15" height="40" fill="#60A5FA" variants={barVariants} />
        <motion.rect x="42.5" y="30" width="15" height="60" fill="#3B82F6" variants={barVariants} />
        <motion.rect x="65" y="15" width="15" height="75" fill="#1D4ED8" variants={barVariants} />
      </g>
      
      {/* Clip path to ensure bars grow from bottom */}
      <defs>
        <clipPath id="clip">
          <rect x="10" y="10" width="80" height="80" />
        </clipPath>
      </defs>

       {/* Floating circle for dynamism */}
       <motion.circle 
          cx="75" 
          cy="25" 
          r="5" 
          fill="#FBBF24"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
    </motion.svg>
  );
};

export default DataGrowthIcon;
