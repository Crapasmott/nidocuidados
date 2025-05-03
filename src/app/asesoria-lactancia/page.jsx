// src/app/asesoria-lactancia/page.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './lactancia.css';

export default function AsesoriaLactanciaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();

  // Para observar elementos para animaciones de fade-in
  const observeElements = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  };

  useEffect(() => {
    // Para animaciones con Framer Motion
    if (isInView) {
      controls.start('visible');
    }
    
    // Para animaciones de fade-in con clases CSS
    observeElements();
    
    // Limpiar observador en desmontaje
    return () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver(() => {});
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="hero-content fade-in">
            <h1 className="text-white">La lactancia materna: un acto de amor y vida</h1>
            <p className="text-white">
              Tu cuerpo tiene el poder de crear el alimento perfecto para tu bebé.
              Cada gota de leche materna es una caricia de amor que nutre, protege y fortalece. 
              A través de la lactancia, construyes un vínculo profundo e inquebrantable con tu pequeño, 
              sembrando salud y bienestar en su futuro.
            </p>
            <Link href="#servicios" className="cta-button cta-secondary">
              Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-24" id="acerca">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Acompañamiento desde el inicio</h2>
          </div>

          <div className="about-container flex flex-col md:flex-row items-center">
            <div className="about-image fade-in md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <Image 
                src="/images/ASESORIA-PRENATAL.jpeg" 
                alt="Madre amamantando a su bebé" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="about-content fade-in md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-bold mb-6">Transformando desafíos en logros</h3>
              <p className="mb-4">
                Los primeros días pueden ser un torbellino de emociones: dudas, inseguridades, cansancio…
                Pero no estás sola. Te acompañamos de manera cercana, brindándote orientación
                profesional y apoyo emocional para que ganes confianza y disfrutes de este viaje.
              </p>
              <p className="mb-8">
                Juntas, convertiremos los obstáculos en peldaños hacia una experiencia de lactancia
                satisfactoria y empoderadora.
              </p>
              <Link href="#contacto" className="cta-button">
                Agenda tu consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-24 bg-gray-50" id="servicios">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Servicios</h2>
          </div>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Ofrecemos acompañamiento personalizado para cada etapa de tu viaje de lactancia
          </p>

          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultas Personalizadas</h3>
              <p className="mb-4">Sesiones individuales adaptadas a tus necesidades, donde abordamos temas como:</p>
              <ul className="mb-6">
                <li className="mb-2">Técnica de amamantamiento y buen agarre</li>
                <li className="mb-2">Manejo del dolor, grietas o ingurgitación</li>
                <li className="mb-2">Extracción manual y uso del sacaleches</li>
                <li className="mb-2">Dudas sobre frecuencia de tomas, duración, horarios, etc.</li>
              </ul>
              <Link href="#contacto" className="cta-button">
                Reservar consulta
              </Link>
            </div>

            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Apoyo Emocional</h3>
              <p className="mb-4">
                Creamos un espacio seguro para hablar de tus emociones, miedos o frustraciones, y
                reforzar tu seguridad como madre.
              </p>
              <p className="mb-6">
                No se trata solo de la técnica, sino de acompañarte en todo el proceso emocional que
                implica la maternidad y la lactancia.
              </p>
              <Link href="#contacto" className="cta-button">
                Necesito apoyo
              </Link>
            </div>

            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Seguimiento Continuo</h3>
              <p className="mb-4">
                No se trata de una sesión aislada: te ofrecemos seguimiento durante todo tu proceso de
                lactancia, para que te sientas acompañada en cada etapa.
              </p>
              <p className="mb-6">
                Las consultas pueden ser presenciales o virtuales, para que elijas lo que mejor se adapta
                a tu estilo de vida.
              </p>
              <Link href="#contacto" className="cta-button">
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-24" id="beneficios">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Beneficios de recibir asesoría en lactancia</h2>
          </div>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Descubre cómo un acompañamiento profesional puede transformar tu experiencia
          </p>

          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <i className="fas fa-fist-raised"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Empoderamiento</h3>
              <p>
                Te brindamos herramientas prácticas y conocimientos basados en evidencia, para que tomes
                decisiones informadas.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Tranquilidad</h3>
              <p>
                Resolverás dudas y evitarás complicaciones, sintiéndote segura en cada paso.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <i className="fas fa-link"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Conexión</h3>
              <p>
                Fortalecerás el vínculo con tu bebé desde el primer momento, con conciencia y confianza.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Bienestar</h3>
              <p>
                Disminuyes el estrés y aumentas la satisfacción en tu rol como madre.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section className="contact-section py-24 bg-gray-50" id="contacto">
  <div className="container mx-auto px-4">
    <div className="section-title mb-10">
      <h2>Contacto</h2>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 items-start">
      <div className="w-full lg:w-2/3">
        <h3 className="text-2xl font-semibold mb-6">Ponte en contacto con nosotras</h3>
        
        <div className="contact-form bg-white rounded-lg p-6 shadow-sm">
          <form className="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <input 
                  type="text" 
                  id="nombre" 
                  placeholder="Nombre" 
                  className="form-control w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="apellidos" 
                  placeholder="Apellidos" 
                  className="form-control w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <input 
                  type="tel" 
                  id="movil" 
                  placeholder="Móvil" 
                  className="form-control w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  className="form-control w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                  required 
                />
              </div>
            </div>
            
            <div className="form-group mb-6">
              <textarea 
                id="mensaje" 
                placeholder="Mensaje" 
                className="form-control w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                rows="5" 
                required
              ></textarea>
            </div>
            
            <div className="mt-4">
              <button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="w-full lg:w-1/3">
        <Image 
          src="/images/madre-bebe.jpg" 
          alt="Madre con bebé" 
          width={400} 
          height={400}
          className="rounded-lg shadow-sm"
        />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}