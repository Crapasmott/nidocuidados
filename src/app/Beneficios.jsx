// src/app/Beneficios.jsx
'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Beneficios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Animación de "pulso" para la imagen central
      imageControls.start({
        scale: [1, 1.03, 1],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }, [isInView, controls, imageControls]);

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
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const benefits = [
    // Lado izquierdo
    [
      {
        id: 1,
        title: "Preparación prenatal",
        description: "Para lograr un parto con menos complicaciones.",
        icon: "check"
      },
      {
        id: 2,
        title: "Manejo del Dolor",
        description: "Contarás con técnicas no farmacológicas.",
        icon: "check"
      },
      {
        id: 3,
        title: "Estar Informada",
        description: "Al conocer todo sobre tu embarazo.",
        icon: "check"
      },
      {
        id: 4,
        title: "Posiciones",
        description: "Confía en tu capacidad natural de dar a luz.",
        icon: "check"
      }
    ],
    // Lado derecho
    [
      {
        id: 5,
        title: "Lactancia materna",
        description: "Te apoyaré durante el proceso de lactancia.",
        icon: "check"
      },
      {
        id: 6,
        title: "Plan de Parto",
        description: "Con el equipo de salud que te atenderá.",
        icon: "check"
      },
      {
        id: 7,
        title: "Apoyo Postparto",
        description: "Para tu recuperación y bienestar.",
        icon: "check"
      },
      {
        id: 8,
        title: "El rol de la Familia",
        description: "Para recibir al bebé con amor y confianza.",
        icon: "check"
      }
    ]
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900"
            variants={itemVariants}
          >
            Beneficios de nuestro acompañamiento
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Nuestro enfoque integral te proporciona múltiples ventajas durante todo el proceso
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Columna izquierda */}
          <motion.div 
            className="md:w-1/3 space-y-6 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {benefits[0].map((benefit) => (
              <motion.div 
                key={benefit.id}
                className="flex items-start text-right md:mr-8"
                variants={itemVariants}
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
                <div className="ml-4">
                  <div className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

         {/* Imagen central */}
{/* Imagen central */}
<motion.div 
  className="md:w-1/3 px-4"
  animate={imageControls}
>
  <div className="relative w-full mx-auto" style={{ maxWidth: '467px', height: '682px' }}>
    <Image
      src="/images/specialties_image.png"
      alt="Mujer embarazada"
      width={467}
      height={682}
      className="object-contain"
    />
  </div>
</motion.div>

          {/* Columna derecha */}
          <motion.div 
            className="md:w-1/3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {benefits[1].map((benefit) => (
              <motion.div 
                key={benefit.id}
                className="flex items-start md:ml-8"
                variants={rightItemVariants}
              >
                <div className="mr-4">
                  <div className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Llamada a la acción */}
        <motion.div 
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.a 
            href="/contacto"
            className="inline-block px-8 py-4 bg-[#00927c] text-white rounded-full font-medium text-lg shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
            variants={itemVariants}
          >
            ¡Comienza tu camino con nosotras hoy!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}