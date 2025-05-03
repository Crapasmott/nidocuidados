// src/app/components/BlogSection.jsx
'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "6 ejercicios recomendados durante el embarazo",
      excerpt: "El ejercicio físico moderado es fundamental durante la gestación para mantener un buen estado de salud...",
      image: "/images/blog/ejercicio-embarazo.jpg",
      category: "Ejercicio",
      date: "Mayo 2, 2025",
      slug: "ejercicios-durante-embarazo"
    },
    {
      id: 2,
      title: "Alimentación saludable en cada trimestre",
      excerpt: "Cada etapa del embarazo requiere atención especial a ciertos nutrientes. Descubre qué alimentos priorizar...",
      image: "/images/blog/alimentacion-embarazo.jpg",
      category: "Nutrición",
      date: "Abril 15, 2025",
      slug: "alimentacion-saludable-embarazo"
    },
    {
      id: 3,
      title: "Señales de alerta durante el embarazo",
      excerpt: "Aprender a reconocer los signos que requieren atención médica inmediata puede marcar la diferencia...",
      image: "/images/blog/senales-embarazo.jpg",
      category: "Salud",
      date: "Marzo 28, 2025",
      slug: "senales-alerta-embarazo"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            RECURSOS PARA MAMÁS
          </motion.span>
          <motion.h2 
            className="text-4xl font-playfair mt-2 mb-6"
            variants={itemVariants}
          >
            Nuestro Blog
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Compartimos información valiosa y actualizada para acompañarte en cada etapa 
            de tu maternidad con seguridad y confianza.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-60 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#00927c] text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h3 className="font-semibold text-xl mt-2 mb-3 hover:text-[#00927c] transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#00927c] font-medium hover:underline"
                >
                  Leer más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.a
            href="/blog"
            className="inline-block px-6 py-3 border-2 border-[#00927c] text-[#00927c] font-medium rounded-full hover:bg-[#00927c] hover:text-white transition-colors duration-300"
            variants={itemVariants}
          >
            Ver todos los artículos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}