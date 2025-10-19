// app/[slug]/page.jsx
import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../studio/lib/sanity.client"; // adjust path if different
import { urlFor } from "../../studio/lib/urlFor"; // adjust path if different

// Optional: import your WhatsApp floating button (if present)
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
      // render images inside the Portable Text
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
      }
    },
    block: {
      h1: ({ children }) => (
        // remove top margin and left-align
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
      )
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
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
      }
    }
  };

  // WhatsApp phone - keep international format WITHOUT plus sign
  const phoneNumber = "917009364216";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      {/* === Inline CSS that ensures readable colors in light + dark modes ===
          - .post-article scope keeps styles local
          - Uses prefers-color-scheme media query, so it adapts automatically
      */}
      <style>{`
        /* Default / Light mode */
        .post-article {
          color: #0f172a; /* slate-900 - good contrast on light bg */
        }
        .post-article .link-lite { color: #0b72a6; } /* blue for links */
        .post-article .caption-lite { color: #475569; font-size: 0.95rem; }
        .post-article .blockquote-lite { border-color: #e2e8f0; color: #475569; background: transparent; padding-left: 0.75rem; }

        /* Improve readability for images (no filter) */
        .post-article img { filter: none; }

        /* Dark mode overrides */
        @media (prefers-color-scheme: dark) {
          .post-article {
            color: #e6eef8; /* light text on dark bg */
          }
          .post-article .link-lite { color: #7fcdff; } /* lighter blue in dark */
          .post-article .caption-lite { color: #cbd5e1; }
          .post-article .blockquote-lite { border-color: #334155; color: #cbd5e1; }
          /* ensure code block contrast */
          .post-article code { background: rgba(255,255,255,0.03); color: #e6eef8; }
        }

        /* Optional: increase line-height for better mobile reading */
        .post-article p, .post-article li { line-height: 1.8; }

        /* Make sure .prose doesn't apply theme-incompatible colors if using tailwind-typography */
        .post-article :where(.prose) { color: inherit; }
        .post-article :where(.prose) a { color: inherit; } /* link-lite class used instead */
      `}</style>

      {/* Article container: full width, no left/right padding (px-0) and no top padding (pt-0) */}
      <article className="post-article w-full max-w-none mx-0 px-0 pt-0 pb-10">
        {/* Title & meta */}
        <div className="w-full px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-0 mb-2 leading-tight text-left">
            {post.title}
          </h1>

          {post.publishedAt && (
            <p className="text-gray-500 mb-6 text-left">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Main hero image (if exists) - full width, no side gaps */}
        {post.mainImage?.url && (
          <div className="mb-6 w-full px-0">
            <img
              src={post.mainImage.url}
              alt={post.title}
              className="w-full rounded-none object-cover"
            />
          </div>
        )}

        {/* Portable Text content - no side gap (px-0) and left-aligned text */}
        <div className="prose prose-lg max-w-none px-0 text-left">
          <PortableText value={post.body} components={components} />
        </div>
      </article>

      {/* Floating WhatsApp button (uses your component if available) */}
      {typeof WhatsAppButton !== "undefined" ? (
        <WhatsAppButton phoneNumber={phoneNumber} />
      ) : (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed z-[9999] right-4 bottom-6"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2.16c-5.49 0-9.94 4.45-9.94 9.94 0 1.96.58 3.82 1.63 5.43l-1.68 5.67 5.8-1.55c1.51.87 3.2 1.34 4.19 1.34h.02c5.49 0 9.94-4.45 9.94-9.94 0-2.67-1.04-5.18-2.92-7.06-1.88-1.88-4.39-2.92-7.06-2.92zM12.04 20.89c-1.6 0-3.11-.47-4.43-1.34l-.27-.16-2.78.74.75-2.73-.18-.28c-.97-1.49-1.52-3.2-1.52-4.99.01-4.75 3.86-8.61 8.61-8.61 2.3 0 4.46.9 6.09 2.53 1.63 1.63 2.53 3.8 2.53 6.09.01 4.75-3.86 8.61-8.61 8.61z" fill="#fff"/>
            </svg>
          </span>
        </a>
      )}
    </>
  );
}
