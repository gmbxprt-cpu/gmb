"use client";
import { Fade } from "react-awesome-reveal";

const Point = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div className="ml-4">
            {/* 👇 SEO Fix: Changed <h4> to <h3> for correct heading hierarchy */}
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{children}</p>
        </div>
    </div>
);

// 👇 SEO & Accessibility: Added <title> tags to icons
const icons = {
    search: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="searchIconTitle"><title id="searchIconTitle">Search Icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    shield: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="shieldIconTitle"><title id="shieldIconTitle">Shield Icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056v-9.447z" /></svg>,
    tag: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="tagIconTitle"><title id="tagIconTitle">Tag Icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 0l6.343 6.343a2 2 0 010 2.828l-3.535 3.535a2 2 0 01-2.828 0L3.657 14.343a2 2 0 010-2.828L10 5" /></svg>,
    refresh: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-labelledby="refreshIconTitle"><title id="refreshIconTitle">Refresh Icon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 12h-3a6 6 0 00-9.45-4.5L4 4z" /></svg>,
};


export default function MobileWhatIsGmb() {
  return (
    <section className="bg-white py-12 md:hidden text-left">
      <div className="container mx-auto px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div className="text-center mb-8">
                {/* This <h2> is correct */}
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    What Is <span className="text-blue-600">GMB Optimization?</span>
                </h2>
            </div>
            
            <div className="space-y-6">
                <Point icon={icons.search} title="Appear in Local Searches">We ensure your business shows up prominently when local customers search on Google and Maps.</Point>
                <Point icon={icons.shield} title="Improve Profile Accuracy">A complete and accurate profile builds trust with both Google and your potential customers.</Point>
                <Point icon={icons.tag} title="Rank for Local Keywords">We integrate high-value keywords to help you rank for the services people are actively looking for.</Point>
                <Point icon={icons.refresh} title="Keep Information Current">Your hours, services, and photos are always kept up-to-date, preventing customer frustration.</Point>
            </div>
        </Fade>
      </div>
    </section>
  );
}