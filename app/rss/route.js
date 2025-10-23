import { client } from "../../studio/lib/sanity.client";

export async function GET() {
  const siteUrl = "https://www.gmb.expert";

  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...20]{
    title,
    "slug": slug.current,
    publishedAt
  }`);

  const items = posts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${siteUrl}/${post.slug}</link>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      </item>
    `
    )
    .join("");

  const rss = `
    <rss version="2.0">
      <channel>
        <title>Your Blog Feed</title>
        <link>${siteUrl}</link>
        <description>Latest articles from Your Blog GMB.Expert</description>
        ${items}
      </channel>
    </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
