"use client";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { onetimeServicesData } from "@/components/data/pricingData";

/* ---------- Icons ---------- */
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-6 h-6 text-slate-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8.91 9.91a13.64 13.64 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" fill="currentColor" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.383 1.905 6.091l-1.216 4.433 4.515-1.185z" />
  </svg>
);

/* ---------- Country detection (ipapi first, then ipwhois fallback) ---------- */
async function fetchCountryUsingIpApi() {
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) throw new Error("ipapi failed");
    const data = await res.json();
    const cc = (data?.country || data?.country_code || "").toUpperCase();
    if (cc) return cc;
  } catch (e) {
    // fallback next
  }
  // fallback to ipwhois.app
  try {
    const res2 = await fetch("https://ipwhois.app/json/", { cache: "no-store" });
    if (!res2.ok) throw new Error("ipwhois failed");
    const d2 = await res2.json();
    const cc2 = (d2?.country_code || d2?.country || "").toUpperCase();
    if (cc2) return cc2;
  } catch (e) {
    // give up
  }
  return null;
}

/* ---------- Onetime Card ---------- */
const OnetimeCard = ({ service, numericPrice, currency = "INR", isFeatured = false, borderColorClass = "border-slate-200", isIndia = true }) => {
  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`; // NO prefilled message
  const formatted = currency === "INR" ? `₹${numericPrice.toLocaleString("en-IN")}` : `$${numericPrice}`;

  return (
    <div className={`relative bg-white rounded-2xl p-8 flex flex-col shadow-lg transition-all duration-300 border-2 ${borderColorClass} ${isFeatured ? "transform scale-105" : ""}`}>
      {isFeatured && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Recommended
        </span>
      )}

      <h3 className="text-xl font-black text-center text-black leading-tight mb-4">{service.name}</h3>

      <p className="text-center mt-4">
        <span className="text-5xl font-extrabold text-black">{formatted}</span>
        <span className="text-gray-500 font-medium ml-2">{service.type ?? ""}</span>
      </p>

      <div className="flex-grow">
        <ul className="mt-8 space-y-4 text-left">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-slate-800 font-medium">
              {feature.included ? <CheckIcon /> : <CrossIcon />}
              <span className="ml-3">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        {isIndia ? (
          <a
            href="tel:+917009364216"
            className="flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            aria-label="Call GMB Expert"
          >
            <PhoneIcon /> Call Now
          </a>
        ) : (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

/* ---------- Desktop Onetime Services main ---------- */
export default function DesktopOnetimeServices() {
  const [country, setCountry] = useState(null); // e.g., "IN"
  const [currency, setCurrency] = useState("INR");
  const [isIndia, setIsIndia] = useState(true);

  useEffect(() => {
    const CACHE_KEY = "gmb_geo_cache_v1";
    const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

    // check cache
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const obj = JSON.parse(raw);
        if (obj?.ts && Date.now() - obj.ts < CACHE_TTL && obj.country) {
          setCountry(obj.country);
          setIsIndia(obj.country === "IN");
          setCurrency(obj.country === "IN" ? "INR" : "USD");
          return;
        }
      }
    } catch (e) {
      // ignore parse errors
    }

    let mounted = true;
    (async () => {
      const cc = await fetchCountryUsingIpApi();
      if (!mounted) return;
      const resolved = (cc || "").toUpperCase() || null;
      setCountry(resolved);
      setIsIndia(resolved === "IN");
      setCurrency(resolved === "IN" ? "INR" : "USD");
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ country: resolved, ts: Date.now() }));
      } catch (e) {
        // ignore localStorage errors
      }
    })();

    return () => { mounted = false; };
  }, []);

  // fixed USD prices for non-India one-time services
  const usdFixed = {
    phoneVerification: 499,
    newListing: 299,
    reinstatement: 499,
  };

  // compute numeric price helper
  const computeNumericPriceForKey = (key, service) => {
    if (currency === "INR") {
      const value = Number(service.price ?? 0);
      return value;
    } else {
      return Number(usdFixed[key] ?? 0);
    }
  };

  return (
    <section className="bg-white py-20 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <h2 className="text-4xl font-extrabold text-black mt-4">ONETIME SERVICES</h2>
          <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
            We believe in simple and transparent pricing for GMB support services. No hidden charges—just clear solutions.
          </p>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <OnetimeCard
              service={onetimeServicesData.phoneVerification}
              numericPrice={computeNumericPriceForKey("phoneVerification", onetimeServicesData.phoneVerification)}
              currency={currency}
              borderColorClass="border-red-600"
              isIndia={isIndia}
            />

            <OnetimeCard
              service={onetimeServicesData.newListing}
              numericPrice={computeNumericPriceForKey("newListing", onetimeServicesData.newListing)}
              currency={currency}
              isFeatured={true}
              borderColorClass="border-blue-600"
              isIndia={isIndia}
            />

            <OnetimeCard
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
