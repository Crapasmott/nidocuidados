// src/app/Footer.jsx
'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'youtube', url: 'https://youtube.com' }
  ];

  const footerLinks = [
    {
      title: 'Servicios',
      links: [
        { text: 'Curso prenatal', url: '/prenatal' },
        { text: 'Cuidados postparto', url: '/cuidados-postparto' },
        { text: 'Asesoría en lactancia', url: '/asesoria-lactancia' },
        { text: 'Asesoría en anticoncepción', url: '/anticoncepcion' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Nosotros', url: '/nosotros' },
        { text: 'Blog', url: '/blog' },
        { text: 'Testimonios', url: '/testimonios' },
        { text: 'Profesionales', url: '/#nosotros' }
      ]
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Reservar cita', url: '/contacto#reservar' },
        { text: 'Preguntas frecuentes', url: '/faq' },
        { text: 'Ubicación', url: '/contacto#ubicacion' },
        { text: 'Teléfono: (01) 234-5678', url: 'tel:+5101234567' }
      ]
    }
  ];

  // Renderiza iconos sociales
  const renderSocialIcon = (icon) => {
    switch(icon) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V10a4 4 0 0 0-4-4zm2 8a2 2 0 0 1-4 0v-4a2 2 0 0 1 4 0v4zm2-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#00927c] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Logo y descripción */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="mb-6">
              <Image 
                src="/images/nido-logo.png" 
                alt="Nido de Cuidados" 
                width={180} 
                height={60}
                className="h-auto"
              />
            </div>
            <p className="mb-6 text-gray-100">
              Brindamos apoyo emocional, físico y mental para una maternidad consciente
              y un acompañamiento personalizado para ti y tu familia.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-[#e1ccad] text-[#00927c] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {renderSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces del footer */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div 
              key={columnIndex}
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-[#e1ccad]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.url} className="hover:text-[#e1ccad] transition-colors duration-300">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Línea divisoria */}
        <motion.div 
          className="border-t border-[#e1ccad]/30 my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        ></motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-sm text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© {new Date().getFullYear()} Nido de Cuidados. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con ♥ para mamás y bebés</p>
        </motion.div>
      </div>
    </footer>
  );
}