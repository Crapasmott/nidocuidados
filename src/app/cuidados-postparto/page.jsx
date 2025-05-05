// src/app/cuidados-postparto/page.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './postparto.css';

export default function CuidadosPostpartoPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();

  // Número de WhatsApp
  const whatsappNumber = "573332358135"; // Reemplaza con el número real

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Estados para el formulario
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phonenum: '',
    emailaddrs: '',
    msg: ''
  });

  // Estado para controlar los modales
  const [activeModal, setActiveModal] = useState(null);

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
      let message = `*Consulta desde Cuidados Postparto*\n\n`;
      message += `*Nombre:* ${formData.fname}\n`;
      message += `*Apellidos:* ${formData.lname}\n`;
      message += `*Teléfono:* ${formData.phonenum || 'No proporcionado'}\n`;
      message += `*Email:* ${formData.emailaddrs}\n`;
      message += `*Mensaje:*\n${formData.msg}`;
      
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
          fname: '',
          lname: '',
          phonenum: '',
          emailaddrs: '',
          msg: ''
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

  // Función para abrir modal
  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar modal
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const services = [
    {
      id: 'masaje',
      title: 'MASAJE POSTPARTO',
      icon: 'fas fa-spa',
      image: '/images/masajepostparto.jpg',
      shortDesc: 'Técnicas suaves para aliviar dolores de espalda, hinchazón y tensión muscular, adaptadas a cada trimestre.',
      longDesc: (
        <>
          <p>Nuestros masajes postparto están diseñados específicamente para mujeres que han dado a luz recientemente. Utilizamos técnicas suaves y efectivas para:</p>
          <ul>
            <li>Aliviar dolores de espalda causados por la lactancia y cargar al bebé</li>
            <li>Reducir la hinchazón en extremidades</li>
            <li>Liberar la tensión muscular acumulada</li>
            <li>Estimular la circulación sanguínea</li>
            <li>Promover la relajación y el bienestar emocional</li>
          </ul>
          <p>Cada sesión se adapta a tus necesidades específicas y al tiempo transcurrido desde el parto.</p>
        </>
      )
    },
    {
      id: 'aromaterapia',
      title: 'AROMATERAPIA',
      icon: 'fas fa-wind',
      image: '/images/aromaterapia.jpg',
      shortDesc: 'Descubre cómo los aromas adecuados pueden aportar equilibrio y apoyo en esta hermosa pero desafiante etapa.',
      longDesc: (
        <>
          <p>La aromaterapia utiliza aceites esenciales cuidadosamente seleccionados para apoyar tu bienestar físico y emocional durante el postparto:</p>
          <ul>
            <li>Lavanda para promover la relajación y el sueño reparador</li>
            <li>Manzanilla para calmar el sistema nervioso</li>
            <li>Bergamota para elevar el ánimo</li>
            <li>Sándalo para equilibrar las emociones</li>
          </ul>
          <p>Aprenderás cómo incorporar estos aromas en tu rutina diaria de forma segura para ti y tu bebé.</p>
        </>
      )
    },
    {
      id: 'cuarentena',
      title: 'CIERRE DE CUARENTENA',
      icon: 'fas fa-heart',
      image: '/images/cierre-cuarentena.jpg',
      shortDesc: 'Permítete celebrar tu fortaleza, reconocer tu transformación y darte el espacio para recibir apoyo en este camino.',
      longDesc: (
        <>
          <p>El cierre de cuarentena es un ritual significativo para marcar el fin del periodo postparto inicial. Te ofrecemos:</p>
          <ul>
            <li>Ceremonias personalizadas que honran tu camino hacia la maternidad</li>
            <li>Técnicas de relajación profunda</li>
            <li>Masajes especiales para "cerrar" el cuerpo</li>
            <li>Un espacio para procesar emocionalmente tu experiencia de parto</li>
            <li>Herramientas para integrar tu nueva identidad como madre</li>
          </ul>
        </>
      )
    },
    {
      id: 'lactancia',
      title: 'LACTANCIA MATERNA',
      icon: 'fas fa-baby',
      image: '/images/lactacia-materna.jpg',
      shortDesc: 'Posiciones, agarre, producción de leche, prevención y solución de problemas como grietas o mastitis.',
      longDesc: (
        <>
          <p>Nuestro servicio de apoyo a la lactancia incluye asesoría profesional sobre:</p>
          <ul>
            <li>Posiciones cómodas para amamantar</li>
            <li>Técnicas de agarre correcto para prevenir dolor</li>
            <li>Estrategias para aumentar la producción de leche</li>
            <li>Prevención y tratamiento de problemas comunes como grietas en los pezones</li>
            <li>Manejo y prevención de mastitis</li>
            <li>Extracción y almacenamiento de leche materna</li>
          </ul>
          <p>Te acompañamos para establecer una relación de lactancia satisfactoria para ti y tu bebé.</p>
        </>
      )
    },
    {
      id: 'primerosCuidados',
      title: 'LOS PRIMEROS CUIDADOS DEL BEBÉ',
      icon: 'fas fa-baby-carriage',
      image: '/images/cuidados-bb.jpg',
      shortDesc: 'Pueden estar llenos de dudas y emociones. Cada bebé es único, y con nosotras aprenderás a conocer sus necesidades con el tiempo.',
      longDesc: (
        <>
          <p>Te guiamos en los primeros días y semanas con tu recién nacido:</p>
          <ul>
            <li>Técnicas de baño seguro y confortable</li>
            <li>Cuidado del cordón umbilical</li>
            <li>Cambio de pañal e higiene</li>
            <li>Interpretación del llanto y señales de comunicación</li>
            <li>Patrones de sueño del recién nacido</li>
            <li>Signos de alerta que requieren atención médica</li>
          </ul>
          <p>Cada bebé es único, y juntas aprenderemos a conocer y responder a las necesidades particulares del tuyo.</p>
        </>
      )
    },
    {
      id: 'anticoncepcion',
      title: 'ASESORÍA EN ANTICONCEPCIÓN',
      icon: 'fas fa-user-md',
      image: '/images/anticoncepcion.jpg',
      shortDesc: 'Te brindaremos una asesoría experta de planificación familiar que no interfieran con la lactancia materna.',
      longDesc: (
        <>
          <p>Te proporcionamos información experta sobre opciones anticonceptivas compatibles con la lactancia:</p>
          <ul>
            <li>Métodos no hormonales</li>
            <li>Opciones de progestágeno solo</li>
            <li>Métodos de barrera</li>
            <li>Planificación familiar natural</li>
            <li>Cronograma recomendado para iniciar métodos anticonceptivos</li>
          </ul>
          <p>Nuestro objetivo es ayudarte a tomar decisiones informadas que protejan tu salud reproductiva sin afectar la lactancia materna.</p>
        </>
      )
    },
  ];

  return (
    <div className="w-full">
      {/* Header/Banner section */}
      <header className="header2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Cuidado Integral Postparto
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Te acompañamos en cada paso de tu hermosa travesía hacia la maternidad.
        </motion.p>
        <motion.a
          href="#modalidades"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ¡Comienza Tu Viaje Maternal!
        </motion.a>
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="">@nidodecuidados</a> | <a href="">www.nidodecuidados.com</a>
        </motion.div>
      </header>

      {/* Intro Section */}
      <section className="intro py-12">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-gray-700 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Con formación especializada y un enfoque holístico, nuestro objetivo es crear un espacio seguro
            que te permita transitar esta etapa con confianza, reduciendo el riesgo de depresión postparto y
            potenciando tu bienestar integral como nueva madre.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section id="modalidades" className="services py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-[#00927c]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nuestros Servicios
          </motion.h2>
    
          <div className="services-grid">
            {/* Primera fila - 3 primeros servicios */}
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                onClick={() => openModal(service.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className={service.icon}></i> {service.title}
                  </div>
                  <p>{service.shortDesc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Segunda fila - 3 últimos servicios */}
            {services.slice(3, 6).map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                onClick={() => openModal(service.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (0.1 * index) }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className={service.icon}></i> {service.title}
                  </div>
                  <p>{service.shortDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-16 bg-[#00927c] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Comienza tu viaje de cuidado postparto
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Comprendemos los cambios emocionales profundos que experimentas después del parto y en Nido de
            cuidados te ofrecemos un espacio seguro para procesar tus sentimientos, reduciendo el riesgo de
            depresión postparto y ansiedad.
          </motion.p>
          <motion.a
            href="#contacto"
            className="px-8 py-4 bg-white text-[#00927c] rounded-full font-medium text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Contáctanos ahora
          </motion.a>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contacto" className="subscribe_section py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Ponte en contacto con nosotras</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                          placeholder="Apellidos"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phonenum"
                          id="phonenum"
                          value={formData.phonenum}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                          placeholder="Móvil"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="emailaddrs"
                          id="emailaddrs"
                          value={formData.emailaddrs}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        rows="3"
                        name="msg"
                        id="msg"
                        value={formData.msg}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                        placeholder="Mensaje"
                        required
                      ></textarea>
                    </div>
                    <div className="btn_wrapper">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 ${
                          isSubmitting ? 'bg-gray-400' : 'bg-[#00927c] hover:bg-[#007c69] transform hover:scale-105 hover:shadow-lg'
                        }`}
                      >
                        {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
                      </button>
                      
                      {submitStatus === 'success' && (
                        <p className="mt-4 text-green-600">¡Redirigiendo a WhatsApp!</p>
                      )}
                      
                      {submitStatus === 'error' && (
                        <p className="mt-4 text-red-600">Hubo un problema. Por favor, intenta nuevamente.</p>
                      )}
                    </div>
                  </form>
                </motion.div>
              </div>
              <div className="md:col-span-5">
                <div className="relative h-full flex items-center justify-center">
                  <Image
                    src="/images/subscribe_image.png"
                    alt="Suscripción"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {services.map((service) => (
        <div 
          key={`modal-${service.id}`} 
          className={`modal ${activeModal === service.id ? 'modal-active' : ''}`}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{service.title}</h2>
            {service.longDesc}
          </div>
        </div>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}