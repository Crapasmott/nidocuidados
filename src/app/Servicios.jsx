'use client';
import { motion } from 'framer-motion';

export default function Servicios() {
  const servicios = [
    {
      id: 'prenatal',
      titulo: 'Preparación al Parto',
      descripcion: 'Brindamos sesiones personalizadas para preparar a las futuras madres, sus parejas y familias para el parto.',
      imagen: '/images/services_img_1.png',
      enlace: '/prenatal'
    },
    {
      id: 'postparto',
      titulo: 'Cuidado Postparto',
      descripcion: 'Proporcionamos un servicio de acompañamiento postparto, apoyando a la madre en la recuperación física y emocional.',
      imagen: '/images/services_img_2.png',
      enlace: '/cuidados-postparto'
    },
    {
      id: 'lactancia',
      titulo: 'Asesoría en Lactancia',
      descripcion: 'Incluye orientación sobre la importancia de la lactancia materna, técnicas de agarre, posiciones cómodas etc.',
      imagen: '/images/services_img_3.png',
      enlace: '/asesoria-lactancia'
    },
    {
      id: 'anticoncepcion',
      titulo: 'Asesoría en Anticoncepción',
      descripcion: 'La maternidad es un viaje único y personal, y cada mujer merece orientación profesional para tomar decisiones.',
      imagen: '/images/services_img_4.png',
      enlace: '/anticoncepcion'
    }
  ];

  // Variantes para la animación de la tarjeta (movimiento hacia arriba)
  const cardVariants = {
    hover: {
      y: -15, // Mover hacia arriba 15px
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Variantes para la animación del botón (cambio de color)
  const buttonVariants = {
    hover: {
      backgroundColor: "#00927c",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00927c] uppercase font-medium tracking-wider mb-2 inline-block">NUESTROS SERVICIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apoyo Integral en tu Camino a la Maternidad
          </h2>
          <p className="text-gray-600 mb-10">
            Nido de Cuidados es un espacio dedicado a brindar un apoyo cálido y continuo a la mujer en
            cada etapa de su viaje hacia la maternidad.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio) => (
            <motion.div 
              key={servicio.id} 
              className="flex flex-col items-center"
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Contenedor para la imagen ovalada exactamente como en la imagen 1 */}
              <div className="mb-4" style={{ 
                width: '255px', 
                height: '357px', 
                borderRadius: '0%', 
                overflow: 'hidden'
              }}>
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{servicio.titulo}</h3>
              <p className="text-gray-600 text-center mb-5 text-sm">{servicio.descripcion}</p>
              
              {/* Botón con flecha exactamente como en la imagen 1 */}
              <a href={servicio.enlace} className="inline-block">
                <motion.div 
                  className="w-12 h-12 rounded-md flex items-center justify-center mx-auto"
                  style={{ backgroundColor: '#e1ccad' }}
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <span className="text-gray-800">→</span>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}