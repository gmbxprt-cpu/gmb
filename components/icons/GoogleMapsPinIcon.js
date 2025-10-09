import React from 'react';
import { motion } from 'framer-motion';

const GoogleMapsPinIcon = ({ className = "w-48 h-48", color = "text-blue-600" }) => {
  return (
    <motion.svg
      className={`${className} ${color}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
    >
      {/* Map Pin base */}
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </motion.svg>
  );
};

export default GoogleMapsPinIcon;
