// app/rss/route.js
import { client } from "../../studio/lib/sanity.client";

export const revalidate = 0; // Always serve fresh (controlled by webhook)

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.gmb.expert");

  // ✅ Fetch only published posts (exclude drafts)
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))] | order(publishedAt desc)[0...20]{
      title,
      "slug": slug.current,
      publishedAt
    }`,
    {},
    { cache: "no-store" } // Always fetch fresh data
  );

  // ✅ Helper: convert to IST (+05:30)
  const toIST = (dateStr) => {
    const date = new Date(dateStr);
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 3600000);
    return ist.toUTCString().replace("GMT", "IST");
  };

  // ✅ Build RSS items
  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}/${post.slug}</link>
          <guid>${siteUrl}/${post.slug}</guid>
          <pubDate>${toIST(post.publishedAt)}</pubDate>
        </item>
      `
    )
    .join("");

  // ✅ Construct RSS feed
  const rss = `
    <rss version="2.0">
      <channel>
        <title>GMB Expert Blog Feed</title>
        <link>${siteUrl}</link>
        <description>Latest posts from GMB Expert Blog</description>
        <language>en</language>
        <lastBuildDate>${toIST(new Date())}</lastBuildDate>
        <ttl>60</ttl>
        ${items}
      </channel>
    </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "no-store, must-revalidate", // ✅ Disable caching
    },
  });
}
