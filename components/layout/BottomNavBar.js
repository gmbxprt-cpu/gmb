"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BottomNavIcons } from "@/components/icons/BottomNavIcons";

const NavItem = ({ href, icon, label, isActive, ariaDisabled = false }) => {
  // If ariaDisabled is true, render a non-clickable element for accessibility
  if (ariaDisabled) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full opacity-60 pointer-events-none" aria-disabled="true">
        <div className={`transition-colors duration-200 text-slate-400`}>{icon}</div>
        <span className="text-xs mt-1 font-semibold text-slate-400">{label}</span>
      </div>
    );
  }

  return (
    <Link href={href} className="flex flex-col items-center justify-center w-full h-full">
      <div className={`transition-colors duration-200 ${isActive ? "text-blue-600" : "text-black"}`}>{icon}</div>
      <span className={`text-xs mt-1 font-semibold transition-colors duration-200 ${isActive ? "text-blue-600" : "text-slate-700"}`}>{label}</span>
    </Link>
  );
};

export default function BottomNavBar({ activeSection }) {
  const [isIndia, setIsIndia] = useState(null); // null = loading, true/false = resolved
  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const CACHE_KEY = "gmb_geo_cache_v1";
    const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

    const cached = (() => {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const obj = JSON.parse(raw);
        if (!obj || !obj.ts) return null;
        if (Date.now() - obj.ts > CACHE_TTL) {
          localStorage.removeItem(CACHE_KEY);
          return null;
        }
        return obj;
      } catch (e) {
        return null;
      }
    })();

    if (cached && cached.country) {
      setIsIndia(cached.country === "IN");
      return;
    }

    let mounted = true;

    async function fetchCountry() {
      // 1) Try the server edge endpoint first
      try {
        const res = await fetch("/api/geo", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          const c = (json?.country || "").toUpperCase() || null;
          if (mounted) {
            if (c) {
              localStorage.setItem(CACHE_KEY, JSON.stringify({ country: c, ts: Date.now() }));
              setIsIndia(c === "IN");
              return;
            }
          }
        }
      } catch (err) {
        // continue to fallback
        // console.warn("Edge geo failed:", err);
      }

      // 2) Fallback: ipwhois.app (no api key)
      try {
        const res2 = await fetch("https://ipwhois.app/json/");
        if (res2.ok) {
          const j2 = await res2.json();
          const c2 = (j2?.country_code || j2?.country || "").toUpperCase();
          if (mounted && c2) {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ country: c2, ts: Date.now() }));
            setIsIndia(c2 === "IN");
            return;
          }
        }
      } catch (err) {
        // fallback to next
      }

      // 3) Fallback: ipapi.co (sometimes blocked by VPN, but a useful backup)
      try {
        const res3 = await fetch("https://ipapi.co/json/");
        if (res3.ok) {
          const j3 = await res3.json();
          const c3 = (j3?.country || j3?.country_code || "").toUpperCase();
          if (mounted && c3) {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ country: c3, ts: Date.now() }));
            setIsIndia(c3 === "IN");
            return;
          }
        }
      } catch (err) {
        // final fallback
      }

      // If nothing works, mark as non-India (safe default)
      if (mounted) {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ country: null, ts: Date.now() }));
        setIsIndia(false);
      }
    }

    fetchCountry();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-5px_15px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-md mx-auto h-full grid grid-cols-5 items-center">
        <NavItem href="#" icon={BottomNavIcons.home} label="Home" isActive={activeSection === "home"} />
        <NavItem href="#services" icon={BottomNavIcons.services} label="Services" isActive={activeSection === "services"} />
        <NavItem href="#pricing" icon={BottomNavIcons.pricing} label="Pricing" isActive={activeSection === "pricing"} />
        <NavItem href="#faq" icon={BottomNavIcons.faq} label="FAQ" isActive={activeSection === "faq"} />

        {/* country-specific item */}
        {isIndia === null ? (
          // still detecting
          <div className="flex flex-col items-center justify-center w-full h-full text-slate-400 text-xs">...</div>
        ) : isIndia ? (
          // India -> show call button (tel)
          <NavItem href={`tel:+${phoneNumber}`} icon={BottomNavIcons.contact} label="Call Now" isActive={false} />
        ) : (
          // Others -> WhatsApp
          <NavItem href={whatsappUrl} icon={BottomNavIcons.contact} label="WhatsApp" isActive={false} />
        )}
      </div>
    </nav>
  );
}
