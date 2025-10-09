"use client";
import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { allPricingFeatures, plansData } from '../../data/pricingData';

const CheckIcon = () => <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const CrossIcon = () => <svg className="w-6 h-6 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
const WhatsAppIcon = () => <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.383 1.905 6.091l-1.216 4.433 4.515-1.185z"></path></svg>;

const PricingCard = ({ plan, price, isFeatured = false, isYearly }) => {
    const phoneNumber = "917009364216";
    // 👇 URL se message (text) wala part hata diya hai
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <div className={`relative bg-white rounded-2xl p-8 flex flex-col shadow-lg transition-all duration-300 ${isFeatured ? 'border-2 border-blue-600 transform scale-105' : 'border border-slate-200'}`}>
            {isFeatured && ( <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</span> )}
            <div className={`absolute top-4 right-[-1px] ${isFeatured ? 'bg-yellow-400' : 'bg-slate-200'} text-black font-bold text-sm px-4 py-1 rounded-l-full`}>{plan.name}</div>
            <h3 className="text-2xl font-black text-left text-black mt-8">GMB SEO MONTHLY PACKAGES</h3>
            <p className="text-left mt-4"><span className="text-5xl font-extrabold text-black">₹{price.toLocaleString('en-IN')}</span><span className="text-gray-500 font-medium">/Month</span></p>
            <div className="flex-grow">
                <ul className="mt-8 space-y-4 text-left">
                    {allPricingFeatures.map(feature => {
                        const featureValue = plan.features[feature.key];
                        if (featureValue === false) return ( <li key={feature.key} className="flex items-center text-slate-400 line-through"><CrossIcon /><span className="ml-3">{feature.text}</span></li> );
                        if (featureValue === true) return ( <li key={feature.key} className="flex items-center text-slate-800 font-medium"><CheckIcon /><span className="ml-3">{feature.text}</span></li> );
                        return ( <li key={feature.key} className="flex items-center text-slate-800 font-medium"><CheckIcon /><span className="ml-3">{feature.text.replace(/Keywords|Months/g, '').trim()}: <span className="font-bold text-blue-600">{featureValue}</span></span></li> );
                    })}
                </ul>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full mt-8 py-3 px-6 text-center rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-300">
                <WhatsAppIcon /> Chat on WhatsApp
            </a>
        </div>
    );
};

export default function DesktopPricing() {
    const [isYearly, setIsYearly] = useState(false);
    const getPrice = (plan) => isYearly ? Math.round(plan.price * 0.50) : plan.price; // 50% discount

    const schemaOffers = Object.values(plansData).map(plan => ({ "@type": "Offer", "name": `${plan.name} Plan`, "price": plan.price, "priceCurrency": "INR" }));
    const pricingSchema = { "@context": "https://schema.org", "@type": "Product", "name": "GMB SEO Plans", "description": "Monthly and yearly GMB SEO plans to boost your Google ranking.", "brand": { "@type": "Brand", "name": "GMB Expert" }, "offers": schemaOffers };

    return (
        <section className="bg-slate-50 py-20 hidden md:block" id="pricing">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
            <div className="max-w-7xl mx-auto px-6 text-center">
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                    <h2 className="text-4xl font-extrabold text-black mt-4">GMB SEO PLANS MONTHLY</h2>
                    <p className="mt-2 text-slate-600">Let GMB Expert help increase your business visibility – the Google My Business SEO Guide.</p>
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <span className={`font-semibold ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
                        <button onClick={() => setIsYearly(!isYearly)} className={`w-14 h-8 rounded-full p-1 flex items-center transition-colors ${isYearly ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}`} aria-label={`Switch to ${isYearly ? 'Monthly' : 'Yearly'} billing`}>
                            <span className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform" />
                        </button>
                        <span className={`font-semibold ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
                            Yearly <span className="text-green-500 text-sm">(Save 50%)</span>
                        </span>
                    </div>
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
                        <PricingCard plan={plansData.silver} price={getPrice(plansData.silver)} isYearly={isYearly} />
                        <PricingCard plan={plansData.gold} price={getPrice(plansData.gold)} isFeatured={true} isYearly={isYearly} />
                        <PricingCard plan={plansData.platinum} price={getPrice(plansData.platinum)} isYearly={isYearly} />
                    </div>
                </Fade>
            </div>
        </section>
    );
}