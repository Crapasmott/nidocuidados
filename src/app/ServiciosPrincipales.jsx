'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiciosMaternidad() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.6 
      }
    }
  };

  // Animaciones MEJORADAS para las imágenes
  const imageContainerVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 146, 124, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  // Nuevas animaciones específicas para las imágenes
  const imageVariants = {
    initial: { 
      scale: 1,
      filter: "grayscale(50%)" 
    },
    hover: {
      scale: 1.15,
      filter: "grayscale(0%)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // Efecto de borde brillante para imágenes
  const glowBorderVariants = {
    initial: {
      opacity: 0,
      boxShadow: "0 0 0px rgba(0, 146, 124, 0)"
    },
    hover: {
      opacity: 1,
      boxShadow: "0 0 15px rgba(0, 146, 124, 0.8)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // Efecto de capa de color para imágenes
  const overlayVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 0.3,
      transition: {
        duration: 0.3
      }
    }
  };

  // Animación LLAMATIVA para los botones de flecha
  const arrowButtonVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.8
      }
    },
    hover: {
      x: 5,
      backgroundColor: "#00927c",
      color: "#ffffff",
      scale: 1.1,
      boxShadow: "0 6px 10px rgba(0, 146, 124, 0.4)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Animación LLAMATIVA para títulos al hacer hover
  const titleVariants = {
    hover: {
      color: "#00927c",
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  // Animación de pulso para destacar elementos
  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Datos de los servicios
  const servicios = [
    {
      id: 1,
      title: "Preparación al Parto",
      image: "/img/preparacion-parto.jpg", // Asegúrate de que la ruta sea correcta
      description: "Brindamos sesiones personalizadas para preparar a las futuras madres, sus parejas y familias para el parto."
    },
    {
      id: 2,
      title: "Cuidado Postparto",
      image: "/img/cuidado-postparto.jpg", // Asegúrate de que la ruta sea correcta
      description: "Proporcionamos un servicio de acompañamiento postparto, apoyando a la madre en la recuperación física y emocional."
    },
    {
      id: 3,
      title: "Asesoría en Lactancia",
      image: "/img/asesoria-lactancia.jpg", // Asegúrate de que la ruta sea correcta
      description: "Incluye orientación sobre la importancia de la lactancia materna, técnicas de agarre, posiciones cómodas etc."
    },
    {
      id: 4,
      title: "Asesoría en Anticoncepción",
      image: "/img/asesoria-anticoncepcion.jpg", // Asegúrate de que la ruta sea correcta
      description: "La maternidad es un viaje único y personal, y cada mujer merece orientación profesional para tomar decisiones."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      {/* Elementos decorativos de fondo con animación LLAMATIVA */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#00927c]/10 to-[#00927c]/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.7, 0.5],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-[#e1ccad]/10 to-[#e1ccad]/30"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.8, 0.6],
          rotate: [0, -30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4">
        {/* Encabezado con animación LLAMATIVA */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          {/* Nuevo elemento decorativo animado para el título */}
          <motion.div 
            className="inline-block relative mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-[#00927c] font-medium relative z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              NUESTROS SERVICIOS
            </motion.span>
            <motion.div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-[#00927c] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block"
            whileHover={titleVariants.hover}
          >
            Apoyo Integral en tu Camino a la Maternidad
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-[#00927c]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Nido de Cuidados es un espacio dedicado a brindar un apoyo cálido y continuo a la mujer en cada etapa de su viaje hacia la maternidad.
          </motion.p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {servicios.map((servicio, index) => (
            <motion.div 
              key={servicio.id}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Contenedor de imagen con animación */}
              <motion.div 
                className="relative w-full h-64 mb-4 overflow-hidden"
                variants={imageContainerVariants}
                whileHover="hover"
                initial={{ rotate: index % 2 === 0 ? -3 : 3 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: '50%' }} // Imagen circular
              >
                {/* Borde brillante animado */}
                <motion.div 
                  className="absolute inset-0 z-10 rounded-full"
                  variants={glowBorderVariants}
                  initial="initial"
                  whileHover="hover"
                />
                
                {/* Imagen con efecto de zoom y desaturación */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-full"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay de color en hover */}
                  <motion.div 
                    className="absolute inset-0 bg-[#00927c] rounded-full"
                    variants={overlayVariants}
                    initial="initial"
                    whileHover="hover"
                  />
                </motion.div>
                
                {/* Iconos o efectos adicionales que aparecen en hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="bg-white/80 w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#00927c" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold mb-2 text-gray-800"
                variants={itemVariants}
                whileHover={titleVariants.hover}
              >
                {servicio.title}
              </motion.h3>

              <motion.p 
                className="text-gray-600 text-center mb-4"
                variants={itemVariants}
              >
                {servicio.description}
              </motion.p>

              <motion.div
                variants={arrowButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className="mt-auto"
              >
                <Link 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e1ccad] text-gray-800"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}