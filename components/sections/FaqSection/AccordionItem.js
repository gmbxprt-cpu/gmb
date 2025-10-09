"use client";

import { useState } from 'react';

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 bg-slate-100 hover:bg-slate-200 focus:outline-none"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className="text-blue-600 font-bold text-xl">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-left">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
