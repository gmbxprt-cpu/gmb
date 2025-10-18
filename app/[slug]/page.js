// app/[slug]/page.jsx
import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../studio/lib/sanity.client"; // adjust path if different
import { urlFor } from "../../studio/lib/urlFor"; // adjust path if different

// Import your existing WhatsApp button (the one in components/common/WhatsAppButton.js)
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default async function PostPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    "mainImage": mainImage.asset->,
    body
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div className="text-center py-20 text-xl">Post not found 😢</div>;
  }

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const src = urlFor(value).width(1200).auto("format").url();
        const alt = value.alt || value.caption || "";
        return (
          <figure className="my-8">
            <img
              src={src}
              alt={alt}
              className="w-full rounded-lg object-cover max-h-[700px]"
            />
            {value.caption && (
              <figcaption className="text-sm text-gray-500 mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-5 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-4 leading-tight">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-base md:text-lg leading-relaxed text-slate-800 mb-4">
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 my-6">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ children, value }) => {
        const href = value?.href || "";
        const isExternal = href && !href.startsWith("/");
        return (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  // WhatsApp phone - keep international format WITHOUT plus sign
  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      {/* Reduce top gap: use pt-6 on small screens, larger top padding on md+: pt-12 */}
      <article className="max-w-4xl mx-auto pt-6 md:pt-12 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>

        {post.publishedAt && (
          <p className="text-gray-500 mb-6">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}

        {/* main image */}
        {post.mainImage?.url && (
          <div className="mb-8">
            <img
              src={post.mainImage.url}
              alt={post.title}
              className="w-full rounded-xl object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={components} />
        </div>
      </article>

      {/* Reuse your existing WhatsApp component (keeps its animation and safe-area handling).
          Pass phoneNumber prop only if your component accepts it. If not, remove prop. */}
      <WhatsAppButton phoneNumber={phoneNumber} />
    </>
  );
}
