import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BottomNavBar from '@/components/layout/BottomNavBar';
import './globals.css';
// CHANGE: Script component ko import kiya
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'] 
});

export const metadata = {
  metadataBase: new URL('https://www.gmb.expert'),
  title: {
    default: 'GMB Expert: Google Business Profile SEO & Ranking Services',
    template: '%s | GMB Expert',
  },
  description: 'Dominate local search with GMB Expert. We offer Google My Business (GMB) SEO, optimization, profile recovery, and ranking services to get you more customers.',
  openGraph: {
    title: 'GMB Expert: Rank Higher on Google Maps',
    description: 'Specialized GMB SEO and optimization services.',
    url: 'https://www.gmb.expert',
    siteName: 'GMB Expert',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMB Expert: Google Business Profile SEO & Ranking Services',
    description: 'Dominate local search with expert GMB optimization and ranking services.',
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} pb-16 md:pb-0`}>
        
        {/* --- CHANGE: Google Tag Manager (noscript) yahan add kiya --- */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHZFQXMB"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        
        <Header />
        <main>{children}</main>
        <Footer />
        <BottomNavBar />
      </body>

      {/* --- CHANGE: Google Tag Manager (script) yahan add kiya --- */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KHZFQXMB');
        `}
      </Script>
    </html>
  );
}