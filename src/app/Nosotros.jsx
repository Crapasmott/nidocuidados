// src/app/Nosotros.jsx
'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Nosotros() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Animación de "flotación" para la imagen
      imageControls.start({
        y: [0, -15, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }, [isInView, controls, imageControls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
    <section id="nosotros" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-cover opacity-20" 
           style={{ backgroundImage: "url('/images/wave-pattern.png')" }}></div>

      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col md:flex-row items-center"
        >
          {/* Imagen con borde curvo - Lado izquierdo */}
          <motion.div 
            className="md:w-1/2 relative mb-8 md:mb-0"
            animate={imageControls}
          >
            <div className="relative" style={{ width: '580px', height: '580px' }}>
              <Image
                src="/images/aboutus_image-1.png"
                alt="Esmeralda Calderon"
                width={580}
                height={580}
                className="object-cover object-center rounded-tr-[100px] rounded-bl-[100px]"
              />
              {/* Borde curvo verde */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#00927c] rounded-tl-full"></div>
            </div>
          </motion.div>

          {/* Contenido - Lado derecho */}
          <motion.div 
            className="md:w-1/2 md:pl-12"
            variants={variants}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-gray-900"
              variants={itemVariants}
            >
              Quienes Somos
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              En Nido de Cuidados, brindamos apoyo integral a madres y recién nacidos, asegurando un acompañamiento físico, emocional y educativo en cada etapa.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-8"
              variants={itemVariants}
            >
              Nuestro equipo, formado por enfermeras profesionales, médicos, psicólogos y doulas especializadas en gestación, parto y postparto, ofrece atención personalizada para que cada familia se sienta segura y acompañada en este proceso.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a 
                href="/nosotros" 
                className="inline-block px-8 py-3 bg-[#e1ccad] text-[#00927c] rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Conócenos
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}