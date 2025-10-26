"use client";
import { useState, useRef } from 'react';
// 👇 Step 1: useRouter ko import karein
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

export default function EmbeddedContactForm() {
  const [status, setStatus] = useState('');
  const [showOther, setShowOther] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);
  // 👇 Step 2: useRouter ko initialize karein
  const router = useRouter();

  // ✅ reCAPTCHA site key (client-side) — set in your .env as NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Ensure captcha is completed
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA before submitting.');
      return;
    }

    setStatus('sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      gmbLink: e.target.gmbLink.value,
      interest: e.target.interest.value,
      other: e.target.other ? e.target.other.value : '',
      captcha: captchaValue, // send token to backend for verification
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // reset the widget and local captcha state
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaValue(null);
        // push to thank-you page
        router.push('/thank-you');
      } else {
        // reset captcha so user can try again
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaValue(null);
        setStatus('error');
      }
    } catch (error) {
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setCaptchaValue(null);
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
            <label htmlFor="hero-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" id="hero-name" required placeholder="Your Name" className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" id="hero-email" required placeholder="Your Email" className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hero-contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input type="tel" name="contact" id="hero-contact" required placeholder="Contact Number" className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="hero-gmb" className="block text-sm font-medium text-gray-700 mb-1">GMB Link</label>
            <input type="url" name="gmbLink" id="hero-gmb" required placeholder="GMB Profile Link" className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
        </div>
        
        <div>
          <label htmlFor="hero-interest" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
          <select id="hero-interest" name="interest" required onChange={(e) => setShowOther(e.target.value === 'OTHER')} className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500">
            <option value="" className="text-slate-500">Select an option...</option>
            <option value="GMB SEO">GMB SEO</option>
            <option value="NEW LISTING">New Listing</option>
            <option value="PHONE NUMBER UPDATION">Phone Number Updation</option>
            <option value="Listing Reinstatement">Listing Reinstatement</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        {showOther && (
            <div>
              <label htmlFor="hero-other" className="block text-sm font-medium text-gray-700 mb-1">Please Specify</label>
              <input id="hero-other" type="text" name="other" placeholder="Specify your requirement" className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
        )}

        {/* ✅ Google reCAPTCHA widget */}
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={(token) => setCaptchaValue(token)}
          />
        </div>

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
