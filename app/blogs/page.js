import { client } from "../../studio/lib/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export const revalidate = 60; // 🔁 Revalidate every 1 minute (or less if webhook triggers)

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default async function BlogPage() {
  // ✅ Fetch only published posts with slugs
  const query = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] 
    | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title
    }`;

  const posts = await client.fetch(query, {}, { cache: "no-store" }); // ✅ Always fresh data

  return (
    <main className="max-w-6xl mx-auto py-16 px-4 bg-white text-slate-800 min-h-screen">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Latest Blog Posts
        </h1>
        <p className="text-slate-600 mt-2 text-base md:text-lg">
          Insights and updates to help your business grow
        </p>
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <p className="text-center text-gray-500">
          No blog posts yet. Add one in Sanity Studio!
        </p>
      )}

      {/* Blog Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100"
          >
            {/* Blog Image */}
            {post.mainImage && (
              <div className="overflow-hidden">
                <img
                  src={urlFor(post.mainImage).width(800).height(450).url()}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="p-5">
              <h2 className="text-xl md:text-2xl font-semibold mb-1 text-slate-900 line-clamp-2">
                {post.title}
              </h2>

              {post.author && (
                <p className="text-sm text-gray-500 mb-1">By {post.author}</p>
              )}

              <p className="text-sm text-gray-500 mb-3">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>

              {post.categories && post.categories.length > 0 && (
                <p className="text-xs text-slate-600 mb-3">
                  <span className="font-semibold text-slate-700">
                    Categories:
                  </span>{" "}
                  {post.categories.join(", ")}
                </p>
              )}

              <a
                href={`/${post.slug.current}`}
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
