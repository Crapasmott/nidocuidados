// src/app/prenatal/page.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './prenatal.css';

export default function PrenatalPage() {
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
      let message = `*Consulta desde Curso Prenatal*\n\n`;
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

  const modules = [
    {
      number: 1,
      title: "Reconociendo mi cuerpo, mis emociones y mi nueva familia",
      content: "Introducción al curso: Derechos de la familia gestante, emociones y sentimientos y el rol de la familia en la gestación, cambios emocionales durante la gestación, Manejo de síntomas frecuentes; Signos de alarma. Desarrollo del embarazo por trimestre.",
      icon: "🤰",
      color: "from-pink-500 to-rose-500"
    },
    {
      number: 2,
      title: "Me alimento conscientemente y mi cuerpo se prepara para recibirte",
      content: "Nutrición durante la gestación y la lactancia. Suplementación con micronutrientes; Dieta adecuada para el embarazo; Mitos y creencias sobre la alimentación durante el embarazo ¿Alimentos prohibidos?; Higiene postural.",
      icon: "🥗",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 3,
      title: "Me muevo y Cuido mi piso pélvico",
      content: "La importancia de cuidar el suelo pélvico durante y después del embarazo, a través de ejercicios adecuados y la práctica de actividad física segura que favorezca la recuperación y la prevención de problemas en esta área.",
      icon: "🧘‍♀️",
      color: "from-purple-500 to-indigo-500"
    },
    {
      number: 4,
      title: "De la Espera al Encuentro: La Aventura del Parto",
      content: "Trabajo de parto y parto, cascada hormonal, cesárea, episiotomía, desgarro, signos de alarma, elementos para llevar a la atención de parto y cuando debo ir al hospital.",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 5,
      title: "El Dulce Río de Amor: Tu Viaje en la Lactancia Materna",
      content: "Lactancia materna exclusiva, posiciones para lactar, pautas para una lactancia materna exitosa, señales de alerta durante la lactancia materna, conservación de lactancia materna.",
      icon: "🤱",
      color: "from-orange-500 to-amber-500"
    },
    {
      number: 6,
      title: "Renaciendo en tu Nuevo Cuerpo: Postparto",
      content: "Te guiaremos sobre los cambios fisiológicos y psicológicos durante el postparto, signos y síntomas de alarma en la usuaria y en el recién nacido.",
      icon: "✨",
      color: "from-teal-500 to-emerald-500"
    },
    {
      number: 7,
      title: "Tu viaje hacia la maternidad experta: Cuidando a nuestro bebé",
      content: "Sabemos que los primeros días con tu bebé pueden ser desafiantes, es por eso te entrenaremos en los cuidados básicos de tu recién nacido.",
      icon: "👶",
      color: "from-pink-500 to-red-500"
    },
    {
      number: 8,
      title: "Amor desde el primer latido: Forjando un vínculo inquebrantable",
      content: "Contaremos con charlas con profesionales que te brindarán una orientación sobre el desarrollo emocional y psicológico del bebé y la importancia de la interacción y el vínculo afectivo.",
      icon: "❤️",
      color: "from-red-500 to-pink-500"
    },
    {
      number: 9,
      title: "Educación para la salud y el bienestar familiar",
      content: "Hablaremos sobre la importancia de establecer rutinas familiares saludables: Organización del tiempo con el bebé, Alimentación complementaria y actividad física.",
      icon: "👨‍👩‍👧",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="w-full">
      {/* Header/Banner section - SIN CAMBIOS */}
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Curso Prenatal Personalizado
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Te guiamos para que te conectes profundamente con tu cuerpo y
          tu bebé, preparándote para el momento del parto
          con confianza y serenidad.
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
          <a href="">@nido_de_cuidados</a> | <a href="">www.nidodecuidados.com</a>
        </motion.div>
      </header>

      {/* Modalidades section - SIN CAMBIOS */}
      <section id="modalidades" className="modalities">
        <motion.h2
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nuestras Modalidades
        </motion.h2>
        <div className="modalities-container">
          {/* Modalidad Virtual */}
          <motion.div
            className="modality-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/images/virtual.jpg"
              alt="Modalidad Virtual"
              width={400}
              height={300}
              className="modality-image"
            />
            <div className="modality-content">
              <h3>Modalidad Virtual</h3>
              <p>
                Aprende desde la comodidad de tu hogar con nuestras sesiones online en vivo.
                Incluye acceso a material digital y seguimiento personalizado.
              </p>
              <ul className="my-4 list-inside">
                <li>Sesiones por Zoom</li>
                <li>Material descargable</li>
                <li>Grupo de apoyo WhatsApp</li>
              </ul>
              <div className="price-tag">contáctanos</div>
            </div>
          </motion.div>

          {/* Modalidad Presencial */}
          <motion.div
            className="modality-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image
              src="/images/presencial.jpg"
              alt="Modalidad Presencial"
              width={400}
              height={300}
              className="modality-image"
            />
            <div className="modality-content">
              <h3>Modalidad Presencial</h3>
              <p>
                Experiencia completa con atención personalizada en nuestro centro.
                Práctica directa y conexión con otras futuras mamás.
              </p>
              <ul className="my-4 list-inside">
                <li>Clases presenciales</li>
                <li>Material físico</li>
                <li>Prácticas guiadas</li>
              </ul>
              <div className="price-tag">contáctanos</div>
            </div>
          </motion.div>

          {/* Modalidad Híbrida */}
          <motion.div
            className="modality-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/images/yoga.jpg"
              alt="Modalidad Híbrida"
              width={400}
              height={300}
              className="modality-image"
            />
            <div className="modality-content">
              <h3>Modalidad Híbrida</h3>
              <p>
                Combina lo mejor de ambos mundos con sesiones presenciales y virtuales
                según tu conveniencia.
              </p>
              <ul className="my-4 list-inside">
                <li>Flexibilidad de horarios</li>
                <li>Material completo</li>
                <li>Apoyo 24/7</li>
              </ul>
              <div className="price-tag">contáctanos</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two column layout section */}
      <div className="two-column-layout">
        {/* Columna de Módulos - ACTUALIZADA SOLO ESTA PARTE */}
        <section className="modules-section">
          <motion.h2
            className="text-center mb-8 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contenido del Curso
          </motion.h2>

          {/* Módulos del curso en tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl">{module.icon}</span>
                    </div>
                    <div className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center text-white font-bold">
                      {module.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {module.content}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#00927c] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#007c69] transition-colors"
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Más información
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Columna de Descarga - SIN CAMBIOS */}
        <motion.aside 
          className="side-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-center mb-4">Descarga el Plan Completo</h3>
          <Image 
            src="/images/descarga.jpg" 
            alt="Vista previa del PDF" 
            width={300} 
            height={400}
            className="w-full rounded-lg mb-4"
          />
          <div className="bg-secondary p-4 rounded-lg mb-4">
            <h4 className="text-primary mb-2">El PDF incluye:</h4>
            <ul className="list-none p-0">
              <li className="my-2">✓ Programa detallado</li>
              <li className="my-2">✓ Recursos adicionales</li>
              <li className="my-2">✓ Calendario de sesiones</li>
              <li className="my-2">✓ Material de apoyo</li>
            </ul>
          </div>
          <a 
            href="/pdf/Curso prenatal Personalizado NDC.cleaned.pdf" 
            className="download-button flex justify-center w-full" 
            download
          >
            ⬇️ Descargar Ahora
          </a>
        </motion.aside>
      </div>

      {/* Contact form section - ACTUALIZADO PARA WHATSAPP */}
      <section id="contact-form" className="subscribe_section py-16">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}