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

  // Número de WhatsApp
  const whatsappNumber = "573332358135"; // Reemplaza con tu número real

  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    movil: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Crear el mensaje para WhatsApp
      let message = `*Consulta desde Asesoría de Lactancia*\n\n`;
      message += `*Nombre:* ${formData.nombre}\n`;
      message += `*Apellidos:* ${formData.apellidos}\n`;
      message += `*Móvil:* ${formData.movil || 'No proporcionado'}\n`;
      message += `*Email:* ${formData.email}\n`;
      message += `*Mensaje:*\n${formData.mensaje}`;
      
      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Crear la URL de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          apellidos: '',
          movil: '',
          email: '',
          mensaje: ''
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Section - ACTUALIZADO SEGÚN LA IMAGEN */}
      <section className="contact-section py-24 bg-gray-50" id="contacto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Ponte en contacto con nosotras
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Nombre" 
                      className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent text-lg" 
                      required 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      placeholder="Apellidos" 
                      className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent text-lg" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="tel" 
                      name="movil"
                      value={formData.movil}
                      onChange={handleChange}
                      placeholder="Móvil" 
                      className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent text-lg" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent text-lg" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Mensaje" 
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent text-lg" 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`bg-[#00927c] hover:bg-[#007c69] text-white font-medium py-4 px-10 rounded-full transition duration-300 text-lg ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-green-600 text-lg">¡Redirigiendo a WhatsApp!</p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-red-600 text-lg">Hubo un problema. Por favor, intenta nuevamente.</p>
                  )}
                </div>
              </form>
            </div>
            
            <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
              <Image 
                src="/images/madre-bebe.jpg" 
                alt="Madre con bebé" 
                width={500} 
                height={600}
                className="rounded-lg"
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