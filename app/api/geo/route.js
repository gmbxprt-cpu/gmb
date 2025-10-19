// /app/api/geo/route.js
export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Next.js edge exposes geo info on the request in most deployments
    // (e.g., req.geo.country)
    // Vercel also adds headers we can fall back to
    const countryFromGeo = (req.geo && req.geo.country) || null;
    const countryFromHeader = req.headers.get('x-vercel-ip-country') || req.headers.get('x-edge-country') || null;

    const country = (countryFromGeo || countryFromHeader || '').toUpperCase() || null;

    return NextResponse.json({ country: country || null });
  } catch (err) {
    return NextResponse.json({ country: null });
  }
}
