"use client";
import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { allPricingFeatures, plansData } from '../../data/pricingData';

const CheckIcon = () => <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const CrossIcon = () => <svg className="w-6 h-6 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
const PhoneIcon = () => <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>;
const WhatsAppIcon = () => <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2.16c-5.49 0-9.94 4.45-9.94 9.94 0 1.96.58 3.82 1.63 5.43l-1.68 5.67 5.8-1.55c1.51.87 3.2 1.34 4.19 1.34h.02c5.49 0 9.94-4.45 9.94-9.94 0-2.67-1.04-5.18-2.92-7.06-1.88-1.88-4.39-2.92-7.06-2.92zM12.04 20.89c-1.6 0-3.11-.47-4.43-1.34l-.27-.16-2.78.74.75-2.73-.18-.28c-.97-1.49-1.52-3.2-1.52-4.99.01-4.75 3.86-8.61 8.61-8.61 2.3 0 4.46.9 6.09 2.53 1.63 1.63 2.53 3.8 2.53 6.09.01 4.75-3.86 8.61-8.61 8.61zm4.84-6.09c-.26-.13-1.54-.75-1.78-.85-.25-.1-.43-.14-.61.14-.18.28-.7.85-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.74-1.34-1.63-1.52-1.92-.18-.28-.02-.43.12-.57.12-.12.27-.32.41-.48.14-.16.18-.28.28-.46.09-.18.04-.36-.01-.5-.05-.14-.58-1.39-.81-1.92-.22-.53-.44-.45-.61-.45h-.5c-.18 0-.46.04-.7.31-.24.28-.9.9-.9 2.15 0 1.25.92 2.45 1.05 2.63.13.18 1.83 2.76 4.5 3.87 2.67 1.1 2.67.74 3.14.68.48-.06 1.52-.64 1.76-1.22.25-.58.24-1.1.17-1.23-.07-.13-.25-.2-.51-.34z"/></svg>;

const PricingCard = ({ plan, price, isFeatured = false, isYearly }) => {
    const phoneNumber = "917009364216";
    const whatsappMessage = `Hello GMB Expert, I am interested in the "${plan.name}" ${isYearly ? 'Yearly' : 'Monthly'} plan.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // --- NAYE COLORS KA LOGIC YAHAN ADD KIYA GAYA HAI ---
    let borderStyle = 'border border-slate-200';
    if (isFeatured) { // Gold plan
        borderStyle = 'border-2 border-blue-600 transform scale-105';
    } else if (plan.name === 'Silver') {
        borderStyle = 'border-2 border-red-700';
    } else if (plan.name === 'Platinum') {
        borderStyle = 'border-2 border-green-700';
    }

    let tagStyle = 'bg-slate-200 text-black';
    if (isFeatured) { // Gold plan
        tagStyle = 'bg-yellow-400 text-black';
    } else if (plan.name === 'Silver') {
        tagStyle = 'bg-red-700 text-white';
    } else if (plan.name === 'Platinum') {
        tagStyle = 'bg-green-700 text-white';
    }

    return (
        <div className={`bg-white rounded-2xl p-6 shadow-lg w-full relative transition-all duration-300 ${borderStyle}`}>
            {isFeatured && (<span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</span>)}
            <div className={`absolute top-4 right-[-1px] font-bold text-sm px-4 py-1 rounded-l-full ${tagStyle}`}>{plan.name}</div>
            
            <h3 className="text-xl font-black text-left text-black mt-10">GMB SEO MONTHLY PACKAGES</h3>
            <p className="text-left mt-2"><span className="text-4xl font-extrabold text-black">₹{price.toLocaleString('en-IN')}</span><span className="text-gray-500 font-medium">/Month</span></p>
            <div className="flex-grow">
                <ul className="mt-6 space-y-3 text-left">
                  {allPricingFeatures.map(feature => {
                        const featureValue = plan.features[feature.key];
                        if (featureValue === false) { return ( <li key={feature.key} className="flex items-start text-slate-400 line-through"><CrossIcon /><span className="ml-3">{feature.text}</span></li> ); }
                        if (featureValue === true) { return ( <li key={feature.key} className="flex items-start text-slate-800 font-medium"><CheckIcon /><span className="ml-3">{feature.text}</span></li> ); }
                        return ( <li key={feature.key} className="flex items-start text-slate-800 font-medium"><CheckIcon /><span className="ml-3">{feature.text.replace(/Keywords|Months/g, '').trim()}: <span className="font-bold text-blue-600">{featureValue}</span></span></li> );
                    })}
                </ul>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
                <a href={`tel:+${phoneNumber}`} className="flex items-center justify-center py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 text-sm transition-colors duration-300">
                    <PhoneIcon /> Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2.5 px-3 text-center rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 text-sm transition-colors duration-300">
                    <WhatsAppIcon /> WhatsApp
                </a>
            </div>
        </div>
    );
};

export default function MobilePricing() {
    const [isYearly, setIsYearly] = useState(false);
    const getPrice = (plan) => isYearly ? Math.round(plan.price * 0.50) : plan.price;

    return (
        <section className="bg-slate-50 py-10 md:hidden" id="pricing-mobile">
            <div className="container mx-auto px-4 text-center">
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                    <h2 className="text-3xl font-extrabold text-black">GMB SEO PLANS MONTHLY</h2>
                    <p className="mt-2 text-slate-600 text-sm">Let GMB Expert help increase your business visibility.</p>
                    <div className="mt-6 flex justify-center items-center space-x-4">
                        <span className={`font-semibold ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
                        <button onClick={() => setIsYearly(!isYearly)} className={`w-12 h-7 rounded-full p-1 flex items-center transition-colors ${isYearly ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}`}><span className="w-5 h-5 bg-white rounded-full shadow-md" /></button>
                        <span className={`font-semibold ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Yearly <span className="text-xs text-green-500">(Save 50%)</span></span>
                    </div>
                    {/* --- CARDS KA ORDER YAHAN BADLA GAYA HAI --- */}
                    <div className="mt-8 flex flex-col items-center space-y-8">
                        {/* Silver ab pehle aayega */}
                        <PricingCard plan={plansData.silver} price={getPrice(plansData.silver)} isYearly={isYearly} />
                        {/* Gold (Featured) doosre number par aayega */}
                        <PricingCard plan={plansData.gold} price={getPrice(plansData.gold)} isFeatured={true} isYearly={isYearly} />
                        {/* Platinum aakhir mein aayega */}
                        <PricingCard plan={plansData.platinum} price={getPrice(plansData.platinum)} isYearly={isYearly} />
                    </div>
                </Fade>
            </div>
        </section>
    );
}