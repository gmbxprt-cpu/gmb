"use client";
import { useState } from 'react';
// 👇 Step 1: useRouter ko import karein
import { useRouter } from 'next/navigation';

export default function MobileContactForm() {
  const [status, setStatus] = useState('');
  const [showOther, setShowOther] = useState(false);
  // 👇 Step 2: useRouter ko initialize karein
  const router = useRouter();

  // 👇 Step 3: Yahan se 'if (status === 'success')' wala block HATA diya gaya hai.

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
        // 👇 Step 4: Success hone par /thank-you page par redirect karein
        router.push('/thank-you');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-0 bg-slate-50 md:hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-black">Ready to <span className="text-blue-600">Get Started?</span></h2>
          <p className="mt-3 text-slate-600">Fill out the form below for a free consultation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-600">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name-mobile" className="block text-sm font-bold text-slate-700">Name</label>
              <input type="text" name="name" id="name-mobile" required placeholder="e.g., John Doe" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="email-mobile" className="block text-sm font-bold text-slate-700">Email</label>
              <input type="email" name="email" id="email-mobile" required placeholder="e.g., john.doe@example.com" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="contact-mobile" className="block text-sm font-bold text-slate-700">Contact Number</label>
              <input type="tel" name="contact" id="contact-mobile" required placeholder="Your contact number" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="gmbLink-mobile" className="block text-sm font-bold text-slate-700">GMB Profile Link</label>
              <input type="url" name="gmbLink" id="gmbLink-mobile" required placeholder="Your GMB profile URL" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="interest-mobile" className="block text-sm font-bold text-slate-700">Are you interested in?</label>
              <select name="interest" id="interest-mobile" required onChange={(e) => setShowOther(e.target.value === 'OTHER')} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500">
                <option value="" className="text-slate-500">Select a service</option>
                <option value="GMB SEO">GMB SEO</option>
                <option value="NEW LISTING">New Listing</option>
                <option value="PHONE NUMBER UPDATION">Phone Number Updation</option>
                <option value="Listing Reinstatement">Listing Reinstatement</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            {showOther && (
              <div>
                <label htmlFor="other-mobile" className="block text-sm font-bold text-slate-700">Please Specify</label>
                <input type="text" name="other" id="other-mobile" required placeholder="Describe your requirement" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            )}
            <div>
              <button type="submit" disabled={status === 'sending'} className="w-full justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 text-white font-semibold hover:opacity-90 disabled:bg-slate-400 shadow-lg">
                {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
            {status === 'error' && <p className="text-center text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}