"use client";
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
// 👇 Step 1: useRouter ko import karein
import { useRouter } from 'next/navigation';

export default function DesktopContactForm() {
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
    <section className="py-24 bg-slate-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Updated Content */}
          <div className="pt-8">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <h2 className="text-4xl font-extrabold text-black tracking-tight">Ready to Start Your GMB Success Story?</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Whether you have a specific question about our services or you're ready to start your journey to the top of local rankings, we're here to help. Fill out the form, and a dedicated GMB Expert will provide a detailed response within 24 hours.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-black">Email Us Directly</h3>
                    <a href="mailto:hello@gmb.expert" className="text-slate-600 hover:text-blue-600">hello@gmb.expert</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-black">Call for a Consultation</h3>
                    <a href="tel:+917009364216" className="text-slate-600 hover:text-blue-600">+91 70093 64216</a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Column: Form */}
          <div>
            <Fade direction="up" triggerOnce>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
                      <input type="text" name="name" id="name" required placeholder="Your Name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                     <div>
                      <label htmlFor="email-contact" className="block text-sm font-medium text-slate-800">Email</label>
                      <input type="email" name="email" id="email-contact" required placeholder="Your Email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-slate-800">Contact Number</label>
                    <input type="tel" name="contact" id="contact" required placeholder="123-45-678" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                  <div>
                    <label htmlFor="gmbLink" className="block text-sm font-medium text-slate-800">GMB Profile Link</label>
                    <input type="url" name="gmbLink" id="gmbLink" required placeholder="https://maps.app.goo.gl/..." className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-800">Are you interested in?</label>
                    <select name="interest" id="interest" required onChange={(e) => setShowOther(e.target.value === 'OTHER')} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500">
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
                      <label htmlFor="other" className="block text-sm font-medium text-slate-800">Please Specify</label>
                      <input type="text" name="other" id="other" required placeholder="Specify your need" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                  )}
                  <div>
                    <button type="submit" disabled={status === 'sending'} className="w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-white font-semibold hover:bg-blue-700 disabled:bg-slate-400">
                      {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                  {status === 'error' && <p className="text-center text-red-600">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}