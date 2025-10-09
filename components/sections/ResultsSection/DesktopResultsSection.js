"use client";

import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const resultsData = [
  {
    keyword: "Audi Repair",
    beforeImage: "/images/before-after/audi-before.png",
    afterImage: "/images/before-after/audi-after.png",
  },
  {
    keyword: "Volkswagen Repair",
    beforeImage: "/images/before-after/vw-before.png",
    afterImage: "/images/before-after/vw-after.png",
  },
  {
    keyword: "BMW Repair",
    beforeImage: "/images/before-after/bmw-before.png",
    afterImage: "/images/before-after/bmw-after.png",
  }
];

// Individual Result Card Component
const ResultCard = ({ keyword, beforeImage, afterImage }) => {
  // State to manage mobile view (toggle between 'before' and 'after')
  const [view, setView] = useState('after'); // Default to showing the 'After' result

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/80">
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <p className="text-sm text-slate-500">Search Keyword</p>
        <h3 className="text-2xl font-bold text-slate-800">{keyword}</h3>
      </div>

      {/* --- Desktop View: Side-by-side --- */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-6 p-8">
        {/* Before */}
        <div className="text-center">
          <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Before</span>
          <Image src={beforeImage} alt={`Before ranking for ${keyword}`} width={300} height={300} className="mt-4 rounded-lg shadow-md border border-slate-200" />
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0">
          <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </div>

        {/* After */}
        <div className="text-center">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase">After</span>
          <Image src={afterImage} alt={`After ranking for ${keyword}`} width={300} height={300} className="mt-4 rounded-lg shadow-md border-2 border-green-500" />
        </div>
      </div>

      {/* --- Mobile View: Toggle Buttons --- */}
      <div className="md:hidden p-6 text-center">
        <div className="flex justify-center bg-slate-100 p-1 rounded-lg mb-4">
          <button
            onClick={() => setView('before')}
            className={`w-full py-2 px-4 rounded-md text-sm font-bold transition-colors ${view === 'before' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}
          >
            Before
          </button>
          <button
            onClick={() => setView('after')}
            className={`w-full py-2 px-4 rounded-md text-sm font-bold transition-colors ${view === 'after' ? 'bg-green-500 text-white shadow-lg' : 'text-slate-500'}`}
          >
            After
          </button>
        </div>
        <Image
          src={view === 'before' ? beforeImage : afterImage}
          alt={`${view.charAt(0).toUpperCase() + view.slice(1)} ranking for ${keyword}`}
          width={350}
          height={350}
          className={`w-full h-auto rounded-lg shadow-md border-2 transition-all ${view === 'after' ? 'border-green-500' : 'border-slate-200'}`}
        />
      </div>
    </div>
  );
};


// Main Section Component
export default function ResultsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full uppercase">Proof of Performance</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mt-4">
            Don't Just Trust Our Words, <br/> <span className="text-blue-600">See The Results Yourself</span>
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            We deliver real, measurable ranking improvements. Here's how we've helped clients dominate local search for their most valuable keywords.
          </p>
        </div>

        <Fade direction="up" cascade damping={0.2} triggerOnce>
          <div className="space-y-12">
            {resultsData.map((result, index) => (
              <ResultCard key={index} {...result} />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}