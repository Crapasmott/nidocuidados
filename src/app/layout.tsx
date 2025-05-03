// src/app/layout.jsx
import { Montserrat, Playfair_Display } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';
import Script from 'next/script';

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

export const metadata = {
  title: 'Nido de Cuidados | Apoyo integral en tu camino a la maternidad',
  description: 'Brindamos apoyo emocional, físico y mental para una maternidad consciente y un acompañamiento personalizado para ti y tu familia.',
  // Aquí puedes agregar los metadatos para Font Awesome
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        {/* Cargar Font Awesome de forma correcta en Next.js App Router */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        {/* Nota: Este footer ahora será reemplazado por nuestro componente Footer en cada página */}
      </body>
    </html>
  );
}