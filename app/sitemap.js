// app/sitemap.js
import { client } from "../studio/lib/sanity.client";

// ✅ Adjust this based on your site structure
const STATIC_ROUTES = [
  "/",           // home
  "/blogs",
];

export const revalidate = 43200; // every 12 hours

export default async function sitemap() {
  // ✅ Detect environment automatically
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.gmb.expert");

  // ✅ Fetch blog posts from Sanity
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const posts = await client.fetch(query);

  // ✅ Build Sanity blog URLs
  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  // ✅ Add static pages only if they exist in your project
  const staticRoutes = STATIC_ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // ✅ Combine and return
  return [...staticRoutes, ...blogRoutes];
}
