"use client";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { onetimeServicesData } from "@/components/data/pricingData";

/* ---------- Icons ---------- */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-5 h-5 text-slate-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8.91 9.91a13.64 13.64 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" fill="currentColor" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2.16c-5.49 0-9.94 4.45-9.94 9.94 0 1.96.58 3.82 1.63 5.43l-1.68 5.67 5.8-1.55c1.51.87 3.2 1.34 4.19 1.34h.02c5.49 0 9.94-4.45 9.94-9.94 0-2.67-1.04-5.18-2.92-7.06-1.88-1.88-4.39-2.92-7.06-2.92zM12.04 20.89c-1.6 0-3.11-.47-4.43-1.34l-.27-.16-2.78.74.75-2.73-.18-.28c-.97-1.49-1.52-3.2-1.52-4.99.01-4.75 3.86-8.61 8.61-8.61 2.3 0 4.46.9 6.09 2.53 1.63 1.63 2.53 3.8 2.53 6.09.01 4.75-3.86 8.61-8.61 8.61zm4.84-6.09c-.26-.13-1.54-.75-1.78-.85-.25-.1-.43-.14-.61.14-.18.28-.7.85-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.74-1.34-1.63-1.52-1.92-.18-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.28-.46.09-.18.04-.36-.01-.5-.05-.14-.58-1.39-.81-1.92-.22-.53-.44-.45-.61-.45h-.5c-.18 0-.46.04-.7.31-.24.28-.9.9-.9 2.15 0 1.25.92 2.45 1.05 2.63.13.18 1.83 2.76 4.5 3.87 2.67 1.1 2.67.74 3.14.68.48-.06 1.52-.64 1.76-1.22.25-.58.24-1.1.17-1.23-.07-.13-.25-.2-.51-.34"/>
  </svg>
);

/* ---------- country detection helper (client-side, with fallbacks) ---------- */
async function detectCountryClientSide() {
  // 1) try a local server route (if you create /app/api/geo/route.js) -> fastest & reliable
  try {
    const res = await fetch("/api/geo", { cache: "no-store" });
    if (res.ok) {
      const j = await res.json();
      if (j?.country) return (j.country || j.country_code || "").toUpperCase();
    }
  } catch (e) { /* ignore */ }

  // 2) try ipwhois.app
  try {
    const r2 = await fetch("https://ipwhois.app/json/");
    if (r2.ok) {
      const j2 = await r2.json();
      const c2 = (j2?.country_code || j2?.country || "").toUpperCase();
      if (c2) return c2;
    }
  } catch (e) { /* ignore */ }

  // 3) try ipapi.co
  try {
    const r3 = await fetch("https://ipapi.co/json/");
    if (r3.ok) {
      const j3 = await r3.json();
      const c3 = (j3?.country || j3?.country_code || "").toUpperCase();
      if (c3) return c3;
    }
  } catch (e) { /* ignore */ }

  return null;
}

/* ---------- Mobile card component ---------- */
const MobileOnetimeCard = ({ service, numericPrice, currency = "INR", isFeatured = false, borderColorClass = "border-slate-200", isIndia = true }) => {
  const phoneNumber = "917009364216";
  // NO prefilled text in WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const formatted = currency === "INR" ? `₹${numericPrice.toLocaleString("en-IN")}` : `$${numericPrice}`;
  const featuredClasses = isFeatured ? "transform scale-105" : "";

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg w-full relative border-2 ${borderColorClass} ${featuredClasses}`}>
      {isFeatured && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Recommended
        </span>
      )}

      <h3 className="text-xl font-black text-center text-black leading-tight mt-4">{service.name}</h3>

      <p className="text-center mt-2">
        <span className="text-4xl font-extrabold text-black">{formatted}</span>
        <span className="text-gray-500 font-medium ml-2">{service.type ?? ""}</span>
      </p>

      <ul className="mt-6 space-y-3 text-left">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-slate-800 font-medium">
            {feature.included ? <CheckIcon /> : <CrossIcon />}
            <span className="ml-2">{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {isIndia ? (
          <a
            href="tel:+917009364216"
            className="flex items-center justify-center w-full py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 text-sm transition-colors duration-300"
            aria-label="Call GMB Expert"
          >
            <PhoneIcon /> Call Now
          </a>
        ) : (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 text-sm transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

/* ---------- Main MobileOnetimeServices ---------- */
export default function MobileOnetimeServices() {
  const [country, setCountry] = useState(null); // e.g., "IN"
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const CACHE_KEY = "gmb_onetime_geo_v1";
    const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

    // read cached value
    const cached = (() => {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const obj = JSON.parse(raw);
        if (!obj?.ts) return null;
        if (Date.now() - obj.ts > CACHE_TTL) {
          localStorage.removeItem(CACHE_KEY);
          return null;
        }
        return obj;
      } catch {
        return null;
      }
    })();

    if (cached && cached.country) {
      setCountry(cached.country);
      setCurrency(cached.country === "IN" ? "INR" : "USD");
      return;
    }

    let mounted = true;
    (async () => {
      const c = await detectCountryClientSide();
      if (!mounted) return;
      const resolved = (c || "").toUpperCase() || null;
      setCountry(resolved);
      setCurrency(resolved === "IN" ? "INR" : "USD");
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ country: resolved, ts: Date.now() }));
      } catch (e) { /* ignore */ }
    })();

    return () => { mounted = false; };
  }, []);

  const isIndia = country === "IN";

  // fixed USD prices (outside India)
  const usdFixed = {
    phoneVerification: 499,
    newListing: 299,
    reinstatement: 499,
  };

  const computeNumericPriceForKey = (key, service) => {
    if (currency === "INR") {
      return service.price ?? 0;
    }
    return usdFixed[key] ?? 0;
  };

  return (
    <section className="bg-white py-16 md:hidden">
      <div className="container mx-auto px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-extrabold text-black mt-4">ONETIME SERVICES</h2>
          <p className="mt-2 text-slate-600 text-sm">Clear solutions for phone verification, number updation, and GMB ranking. Prices shown in {currency === "INR" ? "INR" : "USD"}.</p>

          <div className="mt-12 flex flex-col items-center space-y-10">
            <MobileOnetimeCard
              service={onetimeServicesData.phoneVerification}
              numericPrice={computeNumericPriceForKey("phoneVerification", onetimeServicesData.phoneVerification)}
              currency={currency}
              borderColorClass="border-red-600"
              isIndia={isIndia}
            />

            <MobileOnetimeCard
              service={onetimeServicesData.newListing}
              numericPrice={computeNumericPriceForKey("newListing", onetimeServicesData.newListing)}
              currency={currency}
              isFeatured={true}
              borderColorClass="border-blue-600"
              isIndia={isIndia}
            />

            <MobileOnetimeCard
              service={onetimeServicesData.reinstatement}
              numericPrice={computeNumericPriceForKey("reinstatement", onetimeServicesData.reinstatement)}
              currency={currency}
              borderColorClass="border-green-600"
              isIndia={isIndia}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
