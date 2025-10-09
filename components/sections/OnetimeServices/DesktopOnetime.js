"use client";
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { onetimeServicesData } from '@/components/data/pricingData';

// Re-using the same icons as monthly plans for consistency
const CheckIcon = () => <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const CrossIcon = () => <svg className="w-6 h-6 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
const WhatsAppIcon = () => <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.383 1.905 6.091l-1.216 4.433 4.515-1.185z"></path></svg>;

const OnetimeCard = ({ service, isFeatured = false }) => {
    const phoneNumber = "917009364216";
    // 👇 URL se message (text) wala part hata diya hai
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <div className={`relative bg-white rounded-2xl p-8 flex flex-col shadow-lg transition-all duration-300 ${isFeatured ? 'border-2 border-blue-600 transform scale-105' : 'border border-slate-200'}`}>
            {isFeatured && ( <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Recommended</span> )}
            <h3 className="text-xl font-black text-center text-black leading-tight mb-4">{service.name}</h3>
            <p className="text-center mt-4">
                <span className="text-5xl font-extrabold text-black">₹{service.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-500 font-medium">{service.type}</span>
            </p>
            <div className="flex-grow">
                <ul className="mt-8 space-y-4 text-left">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-800 font-medium">
                            {feature.included ? <CheckIcon /> : <CrossIcon />}
                            <span className="ml-3">{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full mt-8 py-3 px-6 text-center rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-300">
                <WhatsAppIcon /> Chat on WhatsApp
            </a>
        </div>
    );
};

export default function DesktopOnetimeServices() {
    return (
        <section className="bg-white py-20 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                    <h2 className="text-4xl font-extrabold text-black mt-4">ONETIME SERVICES</h2>
                    <p className="mt-2 text-slate-600 max-w-3xl mx-auto">We believe in simple and transparent pricing for all GMB support services. No hidden charges, no confusing plans—just clear solutions for phone verification, number updation, and GMB ranking. Choose the package that fits your business needs and pay only for the results you want.</p>
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        <OnetimeCard service={onetimeServicesData.phoneVerification} />
                        <OnetimeCard service={onetimeServicesData.newListing} isFeatured={true} />
                        <OnetimeCard service={onetimeServicesData.reinstatement} />
                    </div>
                </Fade>
            </div>
        </section>
    );
}