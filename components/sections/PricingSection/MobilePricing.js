"use client";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { allPricingFeatures, plansData } from "../../data/pricingData";

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

/* phone + whatsapp icons for mobile buttons */
const PhoneIcon = () => (
  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8.91 9.91a13.64 13.64 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" fill="currentColor"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2.16c-5.49 0-9.94 4.45-9.94 9.94 0 1.96.58 3.82 1.63 5.43l-1.68 5.67 5.8-1.55c1.51.87 3.2 1.34 4.19 1.34h.02c5.49 0 9.94-4.45 9.94-9.94 0-2.67-1.04-5.18-2.92-7.06-1.88-1.88-4.39-2.92-7.06-2.92zM12.04 20.89c-1.6 0-3.11-.47-4.43-1.34l-.27-.16-2.78.74.75-2.73-.18-.28c-.97-1.49-1.52-3.2-1.52-4.99.01-4.75 3.86-8.61 8.61-8.61 2.3 0 4.46.9 6.09 2.53 1.63 1.63 2.53 3.8 2.53 6.09.01 4.75-3.86 8.61-8.61 8.61zm4.84-6.09c-.26-.13-1.54-.75-1.78-.85-.25-.1-.43-.14-.61.14-.18.28-.7.85-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.74-1.34-1.63-1.52-1.92-.18-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.28-.46.09-.18.04-.36-.01-.5-.05-.14-.58-1.39-.81-1.92-.22-.53-.44-.45-.61-.45h-.5c-.18 0-.46.04-.7.31-.24.28-.9.9-.9 2.15 0 1.25.92 2.45 1.05 2.63.13.18 1.83 2.76 4.5 3.87 2.67 1.1 2.67.74 3.14.68.48-.06 1.52-.64 1.76-1.22.25-.58.24-1.1.17-1.23-.07-.13-.25-.2-.51-.34z"/>
  </svg>
);

/* ---------- Mobile Pricing Card Component ---------- */
const MobilePricingCard = ({ plan, numericPrice, currency, isFeatured = false, isYearly, isIndia }) => {
  const phoneNumber = "917009364216"; // local variable
  // optional message for WhatsApp (only used for non-India)
  const whatsappMessage = `Hello GMB Expert, I'm interested in the "${plan.name}" ${isYearly ? "Yearly" : "Monthly"} plan.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
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
    <div className={`bg-white rounded-2xl p-6 shadow-lg w-full relative transition-all duration-300 ${borderStyle}`}>
      {isFeatured && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <div className={`absolute top-4 right-[-1px] font-bold text-sm px-4 py-1 rounded-l-full ${tagStyle}`}>
        {plan.name}
      </div>

      <h3 className="text-xl font-black text-left text-black mt-10">GMB SEO MONTHLY PACKAGES</h3>
      <p className="text-left mt-2">
        <span className="text-4xl font-extrabold text-black">{formatted}</span>
        <span className="text-gray-500 font-medium">/Month</span>
      </p>

      <div className="flex-grow">
        <ul className="mt-6 space-y-3 text-left">
          {allPricingFeatures.map((feature) => {
            const featureValue = plan.features[feature.key];
            if (featureValue === false) {
              return (
                <li key={feature.key} className="flex items-start text-slate-400 line-through">
                  <CrossIcon />
                  <span className="ml-3">{feature.text}</span>
                </li>
              );
            }
            if (featureValue === true) {
              return (
                <li key={feature.key} className="flex items-start text-slate-800 font-medium">
                  <CheckIcon />
                  <span className="ml-3">{feature.text}</span>
                </li>
              );
            }
            return (
              <li key={feature.key} className="flex items-start text-slate-800 font-medium">
                <CheckIcon />
                <span className="ml-3">
                  {feature.text.replace(/Keywords|Months/g, "").trim()}:{" "}
                  <span className="font-bold text-blue-600">{featureValue}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Buttons: show CALL only for India, WhatsApp only for others */}
      <div className="mt-6 grid grid-cols-1 gap-3">
        {isIndia ? (
          <a
            href="tel:+917009364216"
            className="flex items-center justify-center py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 text-sm transition-colors duration-300"
            aria-label="Call GMB Expert"
          >
            <PhoneIcon /> Call Now
          </a>
        ) : (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 text-sm transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        )}
      </div>
    </div>
  );
};

/* ---------- Main MobilePricing ---------- */
export default function MobilePricing() {
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
      } catch (err) {
        // fallback to India
        setIsIndia(true);
        setCurrency("INR");
        console.warn("Country detection failed, defaulting to INR", err);
      }
    };
    detectCountry();
  }, []);

  // USD fixed prices
  const usdFixed = { Silver: 149, Gold: 249, Platinum: 399 };

  const computeNumericPrice = (plan) => {
    if (currency === "INR") {
      // use original price from plansData (assumed numeric)
      const base = plan.price ?? (plan.name === "Silver" ? 9999 : plan.name === "Gold" ? 14999 : 24999);
      return isYearly ? Math.round(base * 0.5) : base;
    } else {
      const baseUsd = usdFixed[plan.name] ?? 0;
      return isYearly ? Math.round(baseUsd * 0.5) : baseUsd;
    }
  };

  return (
    <section className="bg-slate-50 py-10 md:hidden" id="pricing-mobile">
      <div className="container mx-auto px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-extrabold text-black">GMB SEO PLANS MONTHLY</h2>
          <p className="mt-2 text-slate-600 text-sm">Let GMB Expert help increase your business visibility.</p>

          <div className="mt-6 flex justify-center items-center space-x-4">
            <span className={`font-semibold ${!isYearly ? "text-blue-600" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-12 h-7 rounded-full p-1 flex items-center transition-colors ${isYearly ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start"}`}
              aria-label={`Switch to ${isYearly ? "Monthly" : "Yearly"} billing`}
            >
              <span className="w-5 h-5 bg-white rounded-full shadow-md" />
            </button>
            <span className={`font-semibold ${isYearly ? "text-blue-600" : "text-gray-500"}`}>Yearly <span className="text-xs text-green-500">(Save 50%)</span></span>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-8">
            <MobilePricingCard
              plan={plansData.silver}
              numericPrice={computeNumericPrice(plansData.silver)}
              currency={currency}
              isYearly={isYearly}
              isFeatured={false}
              isIndia={isIndia}
            />
            <MobilePricingCard
              plan={plansData.gold}
              numericPrice={computeNumericPrice(plansData.gold)}
              currency={currency}
              isYearly={isYearly}
              isFeatured={true}
              isIndia={isIndia}
            />
            <MobilePricingCard
              plan={plansData.platinum}
              numericPrice={computeNumericPrice(plansData.platinum)}
              currency={currency}
              isYearly={isYearly}
              isFeatured={false}
              isIndia={isIndia}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
