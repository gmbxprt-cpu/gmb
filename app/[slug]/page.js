import React from "react";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "../../studio/lib/sanity.client";
import { urlFor } from "../../studio/lib/urlFor";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const revalidate = 60; // ⏱ Revalidate every 1 min (or 0 for instant freshness)

// ✅ Generate all valid slugs for static pre-render
export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
    "slug": slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((post) => ({ slug: post.slug }));
}

// ✅ Optional SEO Metadata (improves indexing)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug][0]{ title }`;
  const post = await client.fetch(query, { slug });

  if (!post) return { title: "Post not found | GMB Expert" };
  return {
    title: `${post.title} | GMB Expert`,
    alternates: {
      canonical: `https://www.gmb.expert/${slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;

  const query = `*[_type == "post" && defined(slug.current) && slug.current == $slug && !(_id in path("drafts.**"))][0]{
    _id,
    title,
    publishedAt,
    mainImage,
    body
  }`;

  // ✅ Force fresh fetch to avoid stale cache
  const post = await client.fetch(query, { slug }, { cache: "no-store" });

  if (!post) {
    notFound(); // 🔥 Built-in 404
  }

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const src = urlFor(value).width(1200).auto("format").url();
        const alt = value.alt || value.caption || "";
        return (
          <figure className="my-8 w-full">
            <img
              src={src}
              alt={alt}
              className="w-full object-cover rounded-none max-h-[700px]"
            />
            {value.caption && (
              <figcaption className="text-sm mt-2 caption-lite">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl md:text-5xl font-extrabold mt-0 mb-4 leading-tight text-left">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4 leading-tight text-left">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-4 leading-tight text-left">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-base md:text-lg leading-relaxed mb-4 text-left">
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="blockquote-lite border-l-4 pl-4 italic my-6">
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
      strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
      ),
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
            className="link-lite hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <article className="post-article w-full max-w-none mx-0 px-0 pt-0 pb-10">
        <div className="w-full px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-0 mb-2 leading-tight text-left">
            {post.title}
          </h1>

          {post.publishedAt && (
            <p className="text-gray-500 mb-6 text-left">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        {post.mainImage && (
          <div className="mb-6 w-full px-0">
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              className="w-full rounded-none object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none px-0 text-left">
          <PortableText value={post.body} components={components} />
        </div>
      </article>

      <WhatsAppButton phoneNumber={phoneNumber} />
    </>
  );
}
