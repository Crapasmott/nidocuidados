// src/app/anticoncepcion/page.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './anticoncepcion.css';

export default function AnticoncepcionPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

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
      let message = `*Consulta desde Anticoncepción*\n\n`;
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
  }, [isInView]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Asesoría en Anticoncepción
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              La maternidad es un viaje único y transformador. Cada mujer merece orientación 
              profesional para tomar decisiones informadas sobre su salud reproductiva. 
              Entendemos los cambios físicos y hormonales durante la lactancia, y por eso 
              ofrecemos una asesoría anticonceptiva especializada que honra tu proceso de 
              maternidad mientras protege tanto tu bienestar como el de tu bebé.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="#contacto" className="cta-button">
                ¡Agenda tu asesoría ahora!
              </Link>
              <Link href="#servicios" className="cta-button cta-secondary">
                Descubre nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-24 bg-white" id="servicios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold relative inline-block mb-6">
              Nuestros Servicios
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00927c]"></span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Brindamos apoyo profesional para tus necesidades reproductivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primera tarjeta - Asesoría Personalizada */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-[#00927c]/10 p-3 rounded-full mr-4">
                  <i className="fas fa-stethoscope text-[#00927c]"></i>
                </div>
                <h3 className="text-2xl font-semibold">Asesoría Personalizada</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#00927c] mr-2">•</span>
                  <span>Métodos anticonceptivos 100% compatibles con lactancia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00927c] mr-2">•</span>
                  <span>Evaluación individual de riesgos y beneficios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00927c] mr-2">•</span>
                  <span>Seguimiento y acompañamiento profesional</span>
                </li>
              </ul>
              
              <p className="text-center font-semibold my-8">
                ¡Con nosotras planifica tu maternidad con seguridad y confianza!
              </p>
              
              <div className="text-center">
                <Link 
                  href="#contacto" 
                  className="inline-block px-6 py-3 bg-[#00927c] text-white rounded-md hover:bg-[#007c69] transition duration-300"
                >
                  Solicitar asesoría
                </Link>
              </div>
            </div>
            
            {/* Segunda tarjeta - Retiro de Implante Subdérmico */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-[#00927c]/10 p-3 rounded-full mr-4">
                  <i className="fas fa-hand-holding-medical text-[#00927c]"></i>
                </div>
                <h3 className="text-2xl font-semibold">Retiro de Implante Subdérmico</h3>
              </div>
              
              <p className="mb-4">
                Ofrecemos un servicio profesional y personalizado para el retiro de implante subdérmico, pensando en tus necesidades reproductivas.
              </p>
              
              <p className="mb-6">
                Ya sea que desees iniciar un embarazo o cambiar tu método anticonceptivo, realizamos el procedimiento con la máxima precisión y cuidado.
              </p>
              
              <div className="bg-[#00927c]/10 p-4 rounded-md text-center mb-6">
                <p className="text-[#00927c] font-medium">¡Y todo esto en la comodidad de tu casa!</p>
              </div>
              
              <div className="text-center">
                <Link 
                  href="#contacto" 
                  className="inline-block px-6 py-3 bg-[#00927c] text-white rounded-md hover:bg-[#007c69] transition duration-300"
                >
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="two-column-section py-24 bg-gray-50" id="beneficios">
        <div className="container mx-auto px-4">
          <div className="section-title mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold relative inline-block mb-6">
              Atención Integral
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00927c]"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 fade-in">
              <Image 
                src="/images/anticon.jpg" 
                alt="Atención personalizada" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 fade-in">
              <h3 className="text-3xl font-bold mb-6 font-playfair">Un enfoque completo para tu salud reproductiva</h3>
              <p className="mb-4 text-gray-700">Nuestro equipo te brinda una atención integral que incluye:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li><strong>Evaluación previa</strong> completa para entender tus necesidades y objetivos</li>
                <li><strong>Procedimientos delicados</strong> realizados con la máxima precisión y cuidado</li>
                <li><strong>Asesoría posterior</strong> sobre planificación reproductiva</li>
                <li><strong>Seguimiento continuo</strong> para garantizar tu bienestar</li>
              </ul>
              <p className="mb-8 text-gray-700">
                En cada paso del proceso, nos aseguramos de resolver todas tus dudas con total
                empatía y profesionalismo.
              </p>
              <Link href="#contacto" className="inline-block px-6 py-3 bg-[#00927c] text-white rounded-full hover:bg-[#007c69] transition duration-300">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Box */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-10 shadow-md text-center max-w-4xl mx-auto border-b-4 border-[#00927c] fade-in">
            <h3 className="text-3xl font-bold mb-6 font-playfair text-[#00927c]">¿Por qué elegir nuestros servicios?</h3>
            <p className="mb-4 text-gray-700">
              Somos profesionales especializados en salud reproductiva con enfoque en las necesidades
              de la mujer durante y después del embarazo.
            </p>
            <p className="mb-4 text-gray-700">
              Entendemos que cada mujer tiene circunstancias únicas, por lo que nuestros servicios son
              100% personalizados y adaptados a tus necesidades específicas.
            </p>
            <p className="mb-6 text-gray-700">
              Nos preocupamos por tu comodidad y tranquilidad, por eso ofrecemos:
            </p>
            <div className="bg-[#00927c]/10 p-5 rounded-md mb-8 inline-block">
              <p className="text-[#00927c] font-semibold text-xl">Atención profesional en la comodidad de tu hogar</p>
            </div>
            <div>
              <Link href="#contacto" className="inline-block px-6 py-3 bg-[#00927c] text-white rounded-full hover:bg-[#007c69] transition duration-300">
                Agenda tu cita hoy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - ACTUALIZADO */}
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
    </>
  );
}