"use client";
import { useState } from 'react';

export default function EmbeddedContactForm() {
  const [status, setStatus] = useState('');
  const [showOther, setShowOther] = useState(false);

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
      gmbLink: e.target.gmbLink.value,
      interest: e.target.interest.value,
      other: e.target.other ? e.target.other.value : '',
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
    <div className="bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-lg shadow-2xl border border-slate-200/80">
      <h3 className="text-2xl font-bold text-black text-center mb-1">Get a <span className="text-blue-600">Free Audit</span></h3>
      <p className="text-center text-slate-500 mb-6">Submit your details to get started.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hero-name" className="sr-only">Name</label>
            <input type="text" name="name" id="hero-name" required placeholder="Your Name" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"/>
          </div>
          <div>
            <label htmlFor="hero-email" className="sr-only">Email</label>
            <input type="email" name="email" id="hero-email" required placeholder="Your Email" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"/>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hero-contact" className="sr-only">Contact</label>
            <input type="tel" name="contact" id="hero-contact" required placeholder="Contact Number" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"/>
          </div>
          <div>
            <label htmlFor="hero-gmb" className="sr-only">GMB Link</label>
            <input type="url" name="gmbLink" id="hero-gmb" required placeholder="GMB Profile Link" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"/>
          </div>
        </div>
        
        <div>
          <select name="interest" required onChange={(e) => setShowOther(e.target.value === 'OTHER')} className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-slate-500">
            <option value="">Interested in...</option>
            <option value="GMB SEO">GMB SEO</option>
            <option value="NEW LISTING">New Listing</option>
            <option value="PHONE NUMBER UPDATION">Phone Number Updation</option>
            <option value="Listing Reinstatement">Listing Reinstatement</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        {showOther && (
            <input type="text" name="other" placeholder="Please Specify" className="w-full rounded-md border-slate-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"/>
        )}
        <div>
          <button type="submit" disabled={status === 'sending'} className="w-full justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 text-white font-semibold hover:opacity-90 disabled:bg-slate-400 shadow-lg">
            {status === 'sending' ? 'Submitting...' : 'Request a Callback'}
          </button>
        </div>
        {status === 'error' && <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}
