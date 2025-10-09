"use client";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const caseStudies = [
  { client: "Local Restaurant", headline: "#1 Ranked 'Best Dinner Spot'", after: "Reservation clicks from GMB increased by 300%.", metrics: ["#1 Map Ranking", "+300% Clicks-to-Book"], image: { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "A delicious spread of food at a restaurant." } },
  { client: "Yoga Studio", headline: "Filled Morning Classes", after: "We targeted wellness keywords and filled their morning class schedule within two months.", metrics: ["Classes Full", "+90% Visibility"], image: { src: "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "A serene and full yoga class." } },
  { client: "Boutique Hotel", headline: "Increased Direct Bookings by 250%", after: "We drove a 250% increase in 'Book Now' clicks directly to their website, bypassing OTA fees.", metrics: ["+250% Direct Bookings", "Reduced Fees"], image: { src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "A stylish boutique hotel room." } }
];

export default function MobileResultsSection() {
  return (
    <section className="bg-white py-16 md:hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-black">Proven Client Results</h2>
          <p className="text-slate-600 mt-3">Here's how we've helped businesses just like yours.</p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Fade key={index} direction="up" triggerOnce>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="relative w-full h-56 rounded-lg overflow-hidden mb-5">
                  <Image src={study.image.src} alt={study.image.alt} fill className="object-cover" />
                </div>
                <span className="text-blue-600 font-bold uppercase text-sm">{study.client}</span>
                <h3 className="text-xl font-bold text-black mt-1">{study.headline}</h3>
                <div className="flex flex-wrap gap-2 my-3">
                  {study.metrics.map((metric, i) => (
                    <span key={i} className="bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full text-xs">{metric}</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">{study.after}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
