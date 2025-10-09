import React from 'react';
import { motion } from 'framer-motion';

const GlobePinIcon = ({ className = "w-48 h-48" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Globe */}
      <motion.circle 
        cx="10" cy="12" r="8" 
        stroke="#4A5568" 
        strokeWidth="1.5"
      />
      <motion.path 
        d="M10 4C11.5714 6.64286 11.5714 17.3571 10 20" 
        stroke="#4A5568" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <motion.path 
        d="M4.64286 6.14286C7.28571 7.14286 12.7143 7.14286 15.3571 6.14286" 
        stroke="#4A5568" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <motion.path 
        d="M4.64286 17.8571C7.28571 16.8571 12.7143 16.8571 15.3571 17.8571" 
        stroke="#4A5568" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Map Pin */}
      <motion.g
        initial={{ y: -5 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <path 
          d="M18 9.5C18 12.91 14.5 17 14.5 17C14.5 17 11 12.91 11 9.5C11 6.09 14.5 4 14.5 4C14.5 4 18 6.09 18 9.5Z" 
          fill="#3B82F6" 
        />
        <circle cx="14.5" cy="9.5" r="1.5" fill="white" />
      </motion.g>
    </motion.svg>
  );
};

export default GlobePinIcon;
