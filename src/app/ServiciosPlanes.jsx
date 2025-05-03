'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function ServiciosPlanes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Animación para el círculo con icono
  const circleVariants = {
    rest: { y: 0 },
    hover: { 
      y: -5, 
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 1.5
      } 
    }
  };

  // Hover effects para botones - Todos los botones cambian a verde al pasar el mouse
  const buttonVariants = {
    initial: { 
      backgroundColor: "#e1ccad" // Color beige por defecto
    },
    hover: { 
      backgroundColor: "#00927c", // Cambia a verde al pasar el mouse
      transition: { duration: 0.3 }
    }
  };

  // Configuración de planes según la imagen de referencia
  const planes = [
    {
      id: 1,
      title: "Curso prenatal",
      image: "/images/pricing_plan_1.png",
      icon: "/images/pricing_plan_icon_1.png",
      benefits: [
        "Módulos personalizados",
        "Entrega de certificado",
        "Virtual o presencial"
      ],
      buttonColor: "bg-[#e1ccad]"
    },
    {
      id: 2,
      title: "Cuidados postparto",
      image: "/images/pricing_plan_2.png",
      icon: "/images/pricing_plan_icon_2.png",
      benefits: [
        "Masaje postparto",
        "Cierre cuarentena",
        "Visita al recien nacido"
      ],
      buttonColor: "bg-[#e1ccad]"
    },
    {
      id: 3,
      title: "Asesoría en lactancia",
      image: "/images/pricing_plan_3.png",
      icon: "/images/pricing_plan_icon_3.png",
      benefits: [
        "Posiciones y agarre",
        "Prevención y solución",
        "de problemas"
      ],
      buttonColor: "bg-[#e1ccad]"
    }
  ];

  return (
    <section id="servicios-planes" className="py-24 bg-white">
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
            Conoce nuestros planes
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Porque queremos acompañarte en cada etapa, te ofrecemos opciones flexibles que se adaptan a ti y a tu familia. ¡Descúbrelos!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {planes.map((plan) => (
            <motion.div 
              key={plan.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 relative" // Añadido relative para posicionar el círculo
              variants={itemVariants}
            >
              {/* Imagen con bordes redondeados en la parte superior */}
              <div className="relative h-64 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Círculo verde con icono - aseguramos que esté presente en cada tarjeta */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-64" // Posición ajustada para que esté en medio entre la imagen y contenido
                variants={circleVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative w-20 h-20 bg-[#00927c] rounded-full flex items-center justify-center shadow-md">
                  <Image 
                    src={plan.icon} 
                    alt={`Ícono de ${plan.title}`} 
                    width={56} 
                    height={56}
                  />
                </div>
              </motion.div>
              
              {/* Contenido de la tarjeta */}
              <div className="pt-12 px-6 pb-6">
                {/* Título centrado */}
                <h3 className="text-xl font-bold mb-6 text-center text-gray-800">{plan.title}</h3>
                
                {/* Lista de beneficios con checks verdes */}
                <ul className="mb-8 space-y-3">
                  {plan.benefits.map((benefit, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start"
                    >
                      <span className="text-[#00927c] mr-2 flex-shrink-0">✓</span>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botón de contacto beige que cambia a verde */}
                <div className="text-center">
                  <motion.a 
                    href="/contacto" 
                    className="inline-block px-8 py-3 rounded-3xl text-gray-800 font-medium"
                    initial="initial"
                    whileHover="hover"
                    variants={buttonVariants}
                  >
                    Contáctanos
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}