// app/sitemap.js
import { client } from "../studio/lib/sanity.client";

export const revalidate = 43200; // Revalidate every 12 hours

// ✅ Define your static routes here
const STATIC_ROUTES = [
  "/",          // Home
  "/blogs",     // Blog listing page
];

export default async function sitemap() {
  // ✅ Determine correct base URL (handles local, Vercel preview, and production)
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.gmb.expert");

  // ✅ Fetch blog posts from Sanity
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const posts = await client.fetch(query);

  // ✅ Build dynamic blog URLs
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post._updatedAt || Date.now()).toISOString(),
  }));

  // ✅ Build static URLs
  const staticRoutes = STATIC_ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // ✅ Combine and return sitemap entries
  return [...staticRoutes, ...blogRoutes];
}
