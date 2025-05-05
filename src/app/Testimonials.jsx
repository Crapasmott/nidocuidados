// src/app/Testimonials.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Ana Sofia Varele",
      role: "Madre primeriza",
      content: "El curso prenatal fue una bendición. Me sentí preparada y acompañada durante todo el proceso. Las enfermeras son excepcionales.",
      image: "/images/testimonios/ana-sofio.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Laura Martínez",
      role: "Madre primeriza",
      content: "La asesoría en lactancia salvó mi experiencia de maternidad. Gracias a su apoyo, pude establecer una lactancia exitosa con mi bebé.",
      image: "/images/testimonios/vane.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      role: "Madre reciente",
      content: "Los cuidados postparto fueron fundamentales. Me ayudaron a recuperarme física y emocionalmente. ¡Increíble equipo!",
      image: "/images/testimonios/12.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Carolina López",
      role: "Futura mamá",
      content: "Desde el primer momento me sentí en familia. Su dedicación y profesionalismo hacen toda la diferencia en esta etapa tan especial.",
      image: "/images/testimonios/13.jpg",
      rating: 5
    }
  ];

  // Auto-slide testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="text-yellow-400 text-xl"
      >
        ★
      </motion.span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#00927c] text-lg font-medium mb-3">Testimonios</h3>
          <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestras mamás</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de las familias que han confiado en nosotros
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image side */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-80 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 text-white z-20">
                    <h4 className="text-2xl font-bold">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-200">{testimonials[activeTestimonial].role}</p>
                  </div>
                </motion.div>

                {/* Content side */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                  >
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 text-lg leading-relaxed mb-6"
                  >
                    "{testimonials[activeTestimonial].content}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 h-1 bg-[#00927c]" />
                    <span className="text-[#00927c] font-medium">
                      {activeTestimonial + 1} / {testimonials.length}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#00927c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-[#00927c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-[#00927c]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">¿Lista para comenzar tu viaje?</h3>
          <p className="text-gray-600 mb-8">Únete a las cientos de mamás que han confiado en nosotros</p>
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#00927c] text-white px-8 py-3 rounded-full font-medium hover:bg-[#007c69] transition-colors"
          >
            Agenda tu primera consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}