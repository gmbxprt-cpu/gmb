// app/[slug]/layout.js
export const revalidate = 0; // Disable ISR for dynamic routes

export default function BlogLayout({ children }) {
  return (
    <div className="max-w-8xl mx-auto px-8 md:px-12 lg:px-20 py-20">
      {children}
    </div>
  );
}
