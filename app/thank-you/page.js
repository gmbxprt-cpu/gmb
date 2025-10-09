// File: app/thank-you/page.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

export default function ThankYouPage() {
  return (
    // 👇 Mobile par upar ka gap aur kam kiya gaya hai (py-12)
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <main className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-x-16 gap-y-12 lg:grid-cols-2">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <Fade direction="left" cascade damping={0.1} triggerOnce>
              <div className="inline-flex justify-center lg:justify-start">
                <span className="rounded-full bg-green-100 px-4 py-2 text-base font-semibold text-green-800">
                  Submission Received!
                </span>
              </div>
              
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Thank You!
                </span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We're on it. A dedicated GMB Expert will personally review your submission and contact you within 24 hours.
              </p>
              
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-x-2 rounded-md bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-gray-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  <svg className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  Back to Home
                </Link>
              </div>

              {/* 👇 Is section ke upar ka gap kam kiya gaya hai (mt-12) */}
              <div className="mt-12 border-t border-gray-900/10 pt-8">
                <h2 className="text-base font-semibold leading-7 text-gray-900">What's Next?</h2>
                <ul className="mt-4 space-y-4 text-gray-600 text-left">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 flex-none text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><span className="font-semibold text-gray-900">In-Depth Audit:</span> Our team begins a comprehensive analysis of your GMB profile.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-6 flex-none text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><span className="font-semibold text-gray-900">Personalized Contact:</span> An expert will contact you within 24 hours to discuss the findings.</span>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:flex items-center justify-center">
            <Slide direction="right" triggerOnce>
              <div className="h-full w-full">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A successful business team celebrating"
                  width={800}
                  height={900}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </Slide>
          </div>

        </div>
      </main>
    </div>
  );
}