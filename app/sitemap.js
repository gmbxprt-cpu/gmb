// app/sitemap.js
import { client } from "../studio/lib/sanity.client";

// ✅ Disable ISR — we’ll control revalidation via webhook
export const revalidate = 0; // always fresh when webhook triggers

// ✅ Define static routes
const STATIC_ROUTES = [
  "/",        // Home
  "/blogs",   // Blog list
];

export default async function sitemap() {
  // ✅ Compute base URL dynamically
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.gmb.expert");

  // ✅ Fetch only published posts with defined slugs
  const query = `
    *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]{
      "slug": slug.current,
      _updatedAt
    }
  `;
  const posts = await client.fetch(query, {}, { cache: "no-store" });

  // ✅ Build dynamic post URLs
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`.replace(/([^:]\/)\/+/g, "$1"), // clean double slashes
    lastModified: new Date(post._updatedAt || Date.now()).toISOString(),
  }));

  // ✅ Build static URLs
  const staticRoutes = STATIC_ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // ✅ Return final sitemap
  return [...staticRoutes, ...blogRoutes];
}
