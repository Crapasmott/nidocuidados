// src/app/components/ContactSection.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    servicios: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Número de WhatsApp (reemplaza con el número real)
  const whatsappNumber = "573332358135"; // Formato: código del país + número sin espacios ni caracteres especiales

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Crear el mensaje para WhatsApp
      let message = `Nuevo mensaje de contacto\n\n`;
      message += `Nombre: ${formData.nombre}\n`;
      message += `Email: ${formData.email}\n`;
      message += `Teléfono: ${formData.telefono || 'No proporcionado'}\n`;
      
      // Obtener el texto del servicio seleccionado
      const servicioText = formData.servicios ? 
        document.querySelector(`#servicios option[value="${formData.servicios}"]`)?.textContent || formData.servicios
        : 'No especificado';
      
      message += `Servicio de interés: ${servicioText}\n`;
      message += `Mensaje:\n${formData.mensaje}`;
      
      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message);
      
      // URL de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
      
      // Debug
      console.log('WhatsApp URL:', whatsappUrl);
      console.log('Mensaje:', message);
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Mostrar mensaje de éxito
      setSubmitStatus('success');
      
      // Resetear el formulario
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
          servicios: '',
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "location",
      title: "Ubicación",
      content: "Calle 123 #45-67, Bogotá, Colombia",
      link: "https://maps.google.com/?q=Bogota,Colombia"
    },
    {
      icon: "phone",
      title: "Teléfono",
      content: "(+57) 123 456 7890",
      link: "tel:+571234567890"
    },
    {
      icon: "email",
      title: "Email",
      content: "contacto@nidodecuidados.com",
      link: "mailto:contacto@nidodecuidados.com"
    },
    {
      icon: "clock",
      title: "Horarios",
      content: "Lunes a Viernes: 8am - 6pm",
      link: null
    }
  ];

  const renderIcon = (icon) => {
    switch (icon) {
      case 'location':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'email':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-14"
        >
          <motion.span 
            className="text-[#00927c] text-sm uppercase tracking-wider font-medium"
            variants={itemVariants}
          >
            ESTAMOS AQUÍ PARA TI
          </motion.span>
          <motion.h2 
            className="text-4xl font-playfair mt-2 mb-6"
            variants={itemVariants}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Escríbenos para resolver tus dudas, agendar una consulta o solicitar información sobre nuestros servicios. Estamos para apoyarte en cada paso.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <motion.h3 
                className="text-2xl font-semibold mb-6"
                variants={itemVariants}
              >
                Envíanos un mensaje
              </motion.h3>
              
              <form onSubmit={handleSubmit}>
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00927c]/40 focus:border-[#00927c] transition-all"
                    placeholder="Ingresa tu nombre"
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00927c]/40 focus:border-[#00927c] transition-all"
                      placeholder="correo@ejemplo.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-4">
                    <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00927c]/40 focus:border-[#00927c] transition-all"
                      placeholder="(01) 234-5678"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="mb-4">
                  <label htmlFor="servicios" className="block text-gray-700 mb-2">Servicio de interés</label>
                  <select
                    id="servicios"
                    name="servicios"
                    value={formData.servicios}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00927c]/40 focus:border-[#00927c] transition-all appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="curso-prenatal">Curso prenatal</option>
                    <option value="cuidados-postparto">Cuidados postparto</option>
                    <option value="asesoria-lactancia">Asesoría en lactancia</option>
                    <option value="asesoria-anticoncepcion">Asesoría en anticoncepción</option>
                    <option value="otro">Otro</option>
                  </select>
                </motion.div>
                
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00927c]/40 focus:border-[#00927c] transition-all"
                    placeholder="¿Cómo podemos ayudarte?"
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-full text-white font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#00927c] hover:bg-[#007c69] transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-green-600 text-center">
                      ¡Redirigiendo a WhatsApp! Tu mensaje está listo para enviar.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-red-600 text-center">
                      Hubo un problema al abrir WhatsApp. Por favor, intenta nuevamente.
                    </p>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div 
              className="relative h-80 rounded-lg overflow-hidden mb-8"
              variants={itemVariants}
            >
              <Image
                src="/images/contacto-madre.jpg"
                alt="Madre con bebé"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00927c]/20"></div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#00927c]/10 text-[#00927c] flex items-center justify-center mr-4 flex-shrink-0">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-gray-800">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 hover:text-[#00927c] transition-colors"
                          target={item.icon === 'location' ? '_blank' : undefined}
                          rel={item.icon === 'location' ? 'noopener noreferrer' : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg text-gray-800 mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="w-10 h-10 rounded-full bg-[#00927c]/10 text-[#00927c] flex items-center justify-center hover:bg-[#00927c] hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="w-10 h-10 rounded-full bg-[#00927c]/10 text-[#00927c] flex items-center justify-center hover:bg-[#00927c] hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    className="w-10 h-10 rounded-full bg-[#00927c]/10 text-[#00927c] flex items-center justify-center hover:bg-[#00927c] hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}