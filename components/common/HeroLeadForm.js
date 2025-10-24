"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function HeroLeadForm() {
  const [status, setStatus] = useState("");
  const [showOther, setShowOther] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const router = useRouter();

  // ✅ Use your actual reCAPTCHA site key from .env or Vercel environment variables
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA before submitting.");
      return;
    }

    setStatus("sending");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      gmbLink: e.target.gmbLink.value,
      interest: e.target.interest.value,
      other: e.target.other ? e.target.other.value : "",
      captcha: captchaValue, // send captcha token to backend if you want to verify server-side
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl border-t-4 border-blue-600">
      <h3 className="text-2xl font-bold text-black text-center mb-1">
        Get a Free Audit
      </h3>
      <p className="text-center text-slate-500 mb-6">
        Submit your details to get started.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="tel"
            name="contact"
            required
            placeholder="Contact Number"
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="url"
            name="gmbLink"
            required
            placeholder="GMB Profile Link"
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <select
            name="interest"
            required
            onChange={(e) => setShowOther(e.target.value === "OTHER")}
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" className="text-slate-500">
              Interested in...
            </option>
            <option value="GMB SEO">GMB SEO</option>
            <option value="NEW LISTING">New Listing</option>
            <option value="PHONE NUMBER UPDATION">Phone Number Updation</option>
            <option value="Listing Reinstatement">Listing Reinstatement</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {showOther && (
          <input
            type="text"
            name="other"
            placeholder="Please Specify"
            className="w-full rounded-md border-slate-300 shadow-sm p-3 text-gray-900 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        )}

        {/* ✅ Google reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={(value) => setCaptchaValue(value)}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full justify-center rounded-md bg-blue-600 py-3 px-4 text-white font-semibold hover:bg-blue-700 disabled:bg-slate-400"
          >
            {status === "sending" ? "Submitting..." : "Request a Callback"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
