import { client } from '../../studio/lib/sanity.client';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default async function BlogPage() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title
  }`;

  const posts = await client.fetch(query);

  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>

      {posts.length === 0 && (
        <p className="text-center text-gray-500">
          No blog posts yet. Add one in Sanity Studio!
        </p>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-2xl shadow p-5">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).url()}
                alt={post.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
            )}
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            {post.author && (
              <p className="text-sm text-gray-500 mb-1">By {post.author}</p>
            )}
            <p className="text-sm text-gray-500 mb-3">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            {post.categories && post.categories.length > 0 && (
              <p className="text-xs text-gray-600 mb-3">
                Categories: {post.categories.join(", ")}
              </p>
            )}
            <a
              href={`/${post.slug.current}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
