"use client";
import { useState } from 'react';

export default function HeroForm() {
  const [status, setStatus] = useState('');

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center border-t-4 border-green-500">
        <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
        <p className="mt-2 text-slate-700">Our team will contact you shortly.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      gmbLink: 'N/A - Hero Form',
      interest: 'Hero Form Lead', 
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl border-t-4 border-blue-600">
      <h3 className="text-2xl font-bold text-black text-center mb-1">Get a Free Audit</h3>
      <p className="text-center text-slate-500 mb-6 text-sm">Submit your details to get started.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hero-name" className="sr-only">Name</label>
          <input type="text" name="name" id="hero-name" required placeholder="Your Name" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label htmlFor="hero-email" className="sr-only">Email</label>
          <input type="email" name="email" id="hero-email" required placeholder="Your Email" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label htmlFor="hero-contact" className="sr-only">Contact Number</label>
          <input type="tel" name="contact" id="hero-contact" required placeholder="Contact Number" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <button type="submit" disabled={status === 'sending'} className="w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-white font-semibold hover:bg-blue-700 disabled:bg-slate-400">
            {status === 'sending' ? 'Submitting...' : 'Request a Callback'}
          </button>
        </div>
        {status === 'error' && <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}
