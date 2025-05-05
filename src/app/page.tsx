// src/app/page.jsx
import HomePage from './HomePage';

export const metadata = {
  title: 'Inicio | Nido de Cuidados',
  description: 'Nido de Cuidados: Acompañamiento integral para mamás durante el embarazo, parto y postparto. Servicios de doula, lactancia y cuidados del bebé en Bogotá.',
  keywords: [
    'acompañamiento maternal',
    'doula Bogotá',
    'cuidados postparto',
    'lactancia materna',
    'embarazo',
    'parto humanizado',
    'maternidad consciente',
    'curso prenatal',
    'apoyo embarazo',
    'cuidado del bebé'
  ],
  openGraph: {
    title: 'Nido de Cuidados | Acompañamiento Maternal en Bogotá',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente. Servicios de acompañamiento prenatal, parto, postparto y lactancia.',
    url: 'https://nidodecuidados.com',
    siteName: 'Nido de Cuidados',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nido de Cuidados - Acompañamiento Maternal',
      }
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nido de Cuidados | Acompañamiento Maternal en Bogotá',
    description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://nidodecuidados.com',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  }
};

export default function Page() {
  return <HomePage />;
}