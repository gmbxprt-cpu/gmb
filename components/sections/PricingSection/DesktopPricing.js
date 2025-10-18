"use client";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { allPricingFeatures, plansData } from "../../data/pricingData";

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
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.383 1.905 6.091l-1.216 4.433 4.515-1.185z" />
  </svg>
);

/* ---------- Phone Icon (inline, visible) ---------- */
const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8.91 9.91a13.64 13.64 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" fill="currentColor" />
  </svg>
);

/* ---------- Pricing Card component ---------- */
const PricingCard = ({ plan, numericPrice, currency, isFeatured = false, isYearly, isIndia }) => {
  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const formatted = currency === "INR" ? `₹${numericPrice.toLocaleString("en-IN")}` : `$${numericPrice}`;

  let borderStyle = "border border-slate-200";
  if (isFeatured) borderStyle = "border-2 border-blue-600 transform scale-105";
  else if (plan.name === "Silver") borderStyle = "border-2 border-red-700";
  else if (plan.name === "Platinum") borderStyle = "border-2 border-green-700";

  let tagStyle = "bg-slate-200 text-black";
  if (isFeatured) tagStyle = "bg-yellow-400 text-black";
  else if (plan.name === "Silver") tagStyle = "bg-red-700 text-white";
  else if (plan.name === "Platinum") tagStyle = "bg-green-700 text-white";

  return (
    <div className={`relative bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-all duration-200 ${borderStyle}`}>
      {isFeatured && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <div className={`absolute top-4 right-[-1px] ${tagStyle} font-bold text-base px-4 py-1 rounded-l-full`}>
        {plan.name}
      </div>

      <h3 className="text-2xl font-extrabold text-left text-black mt-8">GMB SEO MONTHLY PACKAGES</h3>

      <p className="text-left mt-4">
        <span className="text-5xl font-extrabold text-black">{formatted}</span>
        <span className="text-gray-500 font-medium">/Month</span>
      </p>

      <div className="flex-grow">
        <ul className="mt-8 space-y-4 text-left">
          {allPricingFeatures.map((feature) => {
            const featureValue = plan.features[feature.key];
            if (featureValue === false) return (
              <li key={feature.key} className="flex items-center text-slate-400 line-through">
                <CrossIcon /> <span className="ml-3">{feature.text}</span>
              </li>
            );
            if (featureValue === true) return (
              <li key={feature.key} className="flex items-center text-slate-800 font-medium">
                <CheckIcon /> <span className="ml-3">{feature.text}</span>
              </li>
            );
            return (
              <li key={feature.key} className="flex items-center text-slate-800 font-medium">
                <CheckIcon />
                <span className="ml-3">
                  {feature.text.replace(/Keywords|Months/g, "").trim()}: <span className="font-bold text-blue-600">{featureValue}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Buttons: Call for India, WhatsApp for others */}
      {isIndia ? (
        <a
          href="tel:+917009364216"
          className="mt-8 inline-flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition transform active:scale-98"
          aria-label="Call GMB Expert"
        >
          <PhoneIcon /> <span>Call Now</span>
        </a>
      ) : (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition transform active:scale-98"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon /> <span>Chat on WhatsApp</span>
        </a>
      )}
    </div>
  );
};

/* ---------- Main DesktopPricing ---------- */
export default function DesktopPricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isIndia, setIsIndia] = useState(true);
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.country_code && data.country_code !== "IN") {
          setIsIndia(false);
          setCurrency("USD");
        } else {
          setIsIndia(true);
          setCurrency("INR");
        }
      } catch {
        setIsIndia(true);
        setCurrency("INR");
      }
    };
    detectCountry();
  }, []);

  const usdFixed = { Silver: 149, Gold: 249, Platinum: 399 };

  const computeNumericPrice = (plan) => {
    if (currency === "INR") {
      const value = plan.price ?? (plan.name === "Silver" ? 9999 : plan.name === "Gold" ? 14999 : 24999);
      return isYearly ? Math.round(value * 0.5) : value;
    } else {
      const baseUsd = usdFixed[plan.name] ?? 0;
      return isYearly ? Math.round(baseUsd * 0.5) : baseUsd;
    }
  };

  const schemaOffers = Object.values(plansData).map((p) => ({
    "@type": "Offer",
    name: `${p.name} Plan`,
    price: computeNumericPrice(p),
    priceCurrency: currency,
  }));

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GMB SEO Plans",
    description: "Monthly and yearly GMB SEO plans to boost your Google ranking.",
    brand: { "@type": "Brand", name: "GMB Expert" },
    offers: schemaOffers,
  };

  return (
    <section className="bg-slate-50 py-20 hidden md:block" id="pricing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <h2 className="text-4xl font-extrabold text-black mt-4">
            GMB SEO PLANS MONTHLY{" "}
            <span className="text-sm text-gray-400">({currency === "INR" ? "Prices shown in INR" : "Prices shown in USD"})</span>
          </h2>

          <p className="mt-2 text-slate-600">Let GMB Expert help increase your business visibility – the Google My Business SEO Guide.</p>

          <div className="mt-8 flex justify-center items-center space-x-4">
            <span className={`font-semibold ${!isYearly ? "text-blue-600" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-8 rounded-full p-1 flex items-center transition-colors ${isYearly ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start"}`}
              aria-label={`Switch to ${isYearly ? "Monthly" : "Yearly"} billing`}
            >
              <span className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform" />
            </button>
            <span className={`font-semibold ${isYearly ? "text-blue-600" : "text-gray-500"}`}>
              Yearly <span className="text-green-500 text-sm">(Save 50%)</span>
            </span>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
            <PricingCard
              plan={plansData.silver}
              numericPrice={computeNumericPrice(plansData.silver)}
              currency={currency}
              isYearly={isYearly}
              isIndia={isIndia}
            />
            <PricingCard
              plan={plansData.gold}
              numericPrice={computeNumericPrice(plansData.gold)}
              currency={currency}
              isFeatured={true}
              isYearly={isYearly}
              isIndia={isIndia}
            />
            <PricingCard
              plan={plansData.platinum}
              numericPrice={computeNumericPrice(plansData.platinum)}
              currency={currency}
              isYearly={isYearly}
              isIndia={isIndia}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
