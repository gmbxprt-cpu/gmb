"use client";

import Link from 'next/link';

// Animation styles ko alag rakha gaya hai
const AnimationStyles = () => (
  <style jsx global>{`
    /* Dheema pulse effect jo hamesha chalta rahega (Idle State) */
    @keyframes pulse-slow {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
    }

    .animate-pulse-slow {
      animation: pulse-slow 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
    }
  `}</style>
);


// Default values agar aap props pass nahi karte hain
const DEFAULT_PHONE_NUMBER = "917009364216";
const DEFAULT_MESSAGE = "Hello! I'm interested in your GMB Optimization services.";


export default function WhatsAppButtonPro({ 
  phoneNumber = DEFAULT_PHONE_NUMBER, 
  message = DEFAULT_MESSAGE 
}) {
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <AnimationStyles />

      {/* `group` class hover effects ko child elements par apply karne mein madad karti hai */}
      <Link 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="group fixed bottom-20 right-4 z-50 flex items-center justify-center md:bottom-6 md:right-6"
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip: Yeh hover par dikhega */}
        <div className="absolute right-full mr-4 hidden whitespace-nowrap rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 md:block">
          Chat on WhatsApp
          <svg className="absolute left-full top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 transform bg-gray-800" xmlns="http://www.w3.org/2000/svg" />
        </div>

        {/* Main Button */}
        <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 animate-pulse-slow">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2.16c-5.49 0-9.94 4.45-9.94 9.94 0 1.96.58 3.82 1.63 5.43l-1.68 5.67 5.8-1.55c1.51.87 3.2 1.34 4.19 1.34h.02c5.49 0 9.94-4.45 9.94-9.94 0-2.67-1.04-5.18-2.92-7.06-1.88-1.88-4.39-2.92-7.06-2.92zM12.04 20.89c-1.6 0-3.11-.47-4.43-1.34l-.27-.16-2.78.74.75-2.73-.18-.28c-.97-1.49-1.52-3.2-1.52-4.99.01-4.75 3.86-8.61 8.61-8.61 2.3 0 4.46.9 6.09 2.53 1.63 1.63 2.53 3.8 2.53 6.09.01 4.75-3.86 8.61-8.61 8.61zm4.84-6.09c-.26-.13-1.54-.75-1.78-.85-.25-.1-.43-.14-.61.14-.18.28-.7.85-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.74-1.34-1.63-1.52-1.92-.18-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.28-.46.09-.18.04-.36-.01-.5-.05-.14-.58-1.39-.81-1.92-.22-.53-.44-.45-.61-.45h-.5c-.18 0-.46.04-.7.31-.24.28-.9.9-.9 2.15 0 1.25.92 2.45 1.05 2.63.13.18 1.83 2.76 4.5 3.87 2.67 1.1 2.67.74 3.14.68.48-.06 1.52-.64 1.76-1.22.25-.58.24-1.1.17-1.23-.07-.13-.25-.2-.51-.34z"/>
          </svg>
        </div>
      </Link>
    </>
  );
}