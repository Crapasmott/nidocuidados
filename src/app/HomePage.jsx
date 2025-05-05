// src/app/HomePage.jsx
'use client';

import { useEffect, useRef } from 'react';
import Servicios from './Servicios';
import PlanesServicios from './ServiciosPlanes';
import Nosotros from './Nosotros';
import Beneficios from './Beneficios';
import Contacto from './Contacto';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function HomePage() {
  // Referencia para la animación de texto
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    // Esta función se ejecuta solo en el cliente
    const loadTyped = async () => {
      try {
        // Verificar que el elemento existe antes de inicializar Typed
        if (!typedTextRef.current) return;
        
        // Importación dinámica de Typed.js
        const Typed = (await import('typed.js')).default;
        
        // Inicializar la animación de texto
        const typed = new Typed(typedTextRef.current, {
          strings: ['Bebé', 'Embarazo', 'Parto', 'Postparto', 'Lactancia'],
          typeSpeed: 60,
          backSpeed: 40,
          backDelay: 1500,
          loop: true,
          showCursor: true
        });
        
        // Limpiar al desmontar
        return () => typed.destroy();
      } catch (error) {
        console.error('Error cargando la animación:', error);
      }
    };
    
    // Esperar a que el DOM esté listo
    if (typedTextRef.current) {
      loadTyped();
    } else {
      // Si el elemento no está listo, esperar un poco y reintentar
      const timeoutId = setTimeout(loadTyped, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <main>
      {/* Sección Hero */}
      <section className="relative pt-24 pb-16 bg-[#00927cad]">
        {/* Fondo con imagen de flores/plantas */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/images/encantador-nido-campo-flores_1123896-49502.jpg')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenido lado izquierdo */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cuidamos del Bienestar del<br />
                <span className="text-[#e1ccad]">
                  <span ref={typedTextRef}>Bebé</span>
                </span>
              </h1>
              
              <p className="mb-8">
                Brindamos apoyo emocional, físico y mental para una maternidad 
                consciente y un acompañamiento personalizado para ti y tu familia.
              </p>
            
              <a 
                href="#servicios" 
                className="inline-block bg-[#e1ccad] text-[#00927c] px-10 py-3 rounded-full font-medium text-lg transform hover:scale-105 transition-all duration-300"
                style={{ 
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  minWidth: "200px",
                  textAlign: "center"
                }}
              >
                Más Información
              </a>
              
              {/* Flecha hacia abajo */}
              <div className="mt-16 flex justify-center md:justify-start">
                <a href="#servicios" className="animate-bounce">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Imagen lado derecho */}
            <div className="md:w-1/2">
              <div className="rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] overflow-hidden w-full max-w-md mx-auto">
                <img
                  src="/images/banner_right_image.png"
                  alt="Madre con su bebé"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Iconos redes sociales */}
        <div className="fixed left-0 top-1/3 z-20">
          <div className="rounded-r-xl overflow-hidden">
            {/* Facebook */}
            <a href="#" className="block w-12 h-12 bg-[#e1ccad] text-[#00927c] flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="#" className="block w-12 h-12 bg-[#e1ccad] text-[#00927c] flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="block w-12 h-12 bg-[#e1ccad] text-[#00927c] flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Sección Servicios - Con el diseño original */}
      <Servicios />
     
      {/* Sección Nosotros */}
      <Nosotros />
      
      {/* Sección Beneficios */}
      <Beneficios />
      
      {/* Sección Contacto */}
      <Contacto />
      
      {/* Sección Blog */}
      <Blog />
      
      {/* Sección Planes de Servicios - Después de Blog */}
      <PlanesServicios />
      
      {/* Sección Newsletter */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}