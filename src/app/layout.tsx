// src/app/layout.tsx
import { Montserrat, Playfair_Display } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';

// Configurar fuentes
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// Metadatos completos para SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://nidodecuidados.com'),
  title: {
    default: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    template: '%s | Nido de Cuidados',
  },
  description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente. Servicios de acompañamiento prenatal, parto, postparto y lactancia en Bogotá.',
  keywords: [
    'maternidad',
    'embarazo',
    'parto humanizado',
    'doula Bogotá',
    'lactancia materna',
    'cuidados postparto',
    'curso prenatal',
    'acompañamiento maternal',
    'salud maternal',
    'cuidado del bebé',
    'maternidad consciente',
    'parto respetado',
    'apoyo embarazo Bogotá',
    'clases prenatales',
    'preparación para el parto'
  ],
  authors: [{ name: 'Nido de Cuidados' }],
  creator: 'Nido de Cuidados',
  publisher: 'Nido de Cuidados',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente.',
    url: 'https://nidodecuidados.com',
    siteName: 'Nido de Cuidados',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nido de Cuidados - Acompañamiento Maternal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente.',
    creator: '@nidodecuidados',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'health',
  alternates: {
    canonical: 'https://nidodecuidados.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${montserrat.variable} ${playfair.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#00927c" />
        <meta name="msapplication-TileColor" content="#00927c" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00927c" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Nido de Cuidados",
              "description": "Acompañamiento integral para mamás y bebés",
              "url": "https://nidodecuidados.com",
              "logo": "https://nidodecuidados.com/images/logo.png",
              "image": "https://nidodecuidados.com/images/og-image.jpg",
              "telephone": "+573332358135",
              "email": "gerencia@nidodecuidados.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 116 b # 84 a -30 Barrio Gran Granada",
                "addressLocality": "Bogotá",
                "addressRegion": "Bogotá D.C.",
                "postalCode": "111111",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.722658641465412,
                "longitude": -74.13111292432356
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://facebook.com/nidodecuidados",
                "https://instagram.com/nidodecuidados",
                "https://linkedin.com/company/nidodecuidados"
              ],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="afterInteractive"
        />
        
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-568PQ9PN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}