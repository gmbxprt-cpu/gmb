// app/[slug]/layout.js
export const revalidate = 0; // Disable ISR for dynamic routes

export default function BlogLayout({ children }) {
  // Use same max-width and padding as your homepage
  // (matches the HomePage container you shared earlier)
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      {children}
    </div>
  );
}
