import React from 'react';

const GmbLogoIcon = ({ className = "w-48 h-48", color = "text-blue-600" }) => {
  return (
    <svg className={`${className} ${color}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background shape - like a storefront */}
      <path d="M12 2L2 7V9H22V7L12 2Z" fill="currentColor"/>
      {/* Front part - like a building */}
      <path d="M2 9V22H22V9H2ZM16 11H19V19H16V11ZM5 11H8V19H5V11Z" fill="currentColor" fillOpacity="0.8"/>
      {/* Google "G" on the front */}
      <circle cx="12" cy="15" r="4" fill="white"/>
      <path d="M12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11ZM12 12.2C13.0457 12.2 13.9 13.0543 13.9 14.1C13.9 14.3415 13.8569 14.5768 13.7745 14.7979L12.3536 13.377C12.285 13.2982 12.1979 13.2384 12.1 13.2C11.6477 13.0645 11.2 13.5684 11.2 14.1C11.2 14.3415 11.2431 14.5768 11.3255 14.7979L10.2071 13.6795C10.0547 13.5271 9.9453 13.3147 9.8824 13.0815C9.6953 12.5925 9.7745 12.0122 10.1601 11.6266C10.5457 11.2411 11.126 11.1619 11.615 11.349C11.8482 11.4119 12.0606 11.5213 12.213 11.6737L12 12.2Z" fill="black"/>
    </svg>
  );
};

export default GmbLogoIcon;
