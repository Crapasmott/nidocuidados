// src/app/components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menu cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Prevenir scroll cuando el menu está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const services = [
    { name: 'Curso Prenatal', href: '/prenatal' },
    { name: 'Cuidados Postparto', href: '/cuidados-postparto' },
    { name: 'Asesoría en Lactancia', href: '/asesoria-lactancia' },
    { name: 'Asesoría en Anticoncepción', href: '/anticoncepcion' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nido-logo.png"
              alt="Nido de Cuidados"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`hover:text-[#00927c] transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Inicio
            </Link>
            
            {/* Dropdown de Servicios para desktop */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 hover:text-[#00927c] transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span>Servicios</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00927c] hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/nosotros" className={`hover:text-[#00927c] transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Nosotros
            </Link>
            
            <Link href="/contacto" className={`hover:text-[#00927c] transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Contacto
            </Link>
            
            <Link href="/contacto" className="bg-[#00927c] text-white px-6 py-2 rounded-full hover:bg-[#007c69] transition-colors">
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-8 h-8 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} block transition-all`}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} block my-1.5 transition-all`}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className={`w-6 h-0.5 ${isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'} block transition-all`}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
              <div className="flex flex-col space-y-6">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium text-gray-800 hover:text-[#00927c] transition-colors"
                >
                  Inicio
                </Link>
                
                {/* Servicios con submenú */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-[#00927c] transition-colors"
                  >
                    <span>Servicios</span>
                    <motion.svg
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 mt-4 space-y-4">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={handleLinkClick}
                              className="block text-lg text-gray-600 hover:text-[#00927c] transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/nosotros"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium text-gray-800 hover:text-[#00927c] transition-colors"
                >
                  Nosotros
                </Link>
                
                <Link
                  href="/contacto"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium text-gray-800 hover:text-[#00927c] transition-colors"
                >
                  Contacto
                </Link>

                <Link
                  href="/contacto"
                  onClick={handleLinkClick}
                  className="inline-block text-center bg-[#00927c] text-white px-6 py-3 rounded-full hover:bg-[#007c69] transition-colors mt-8"
                >
                  Agendar Cita
                </Link>
              </div>

              {/* Info adicional en el menú móvil */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <a href="tel:3161030924" className="flex items-center text-gray-600 hover:text-[#00927c]">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    3161030924
                  </a>
                  <a href="mailto:nicocuidados@gmail.com" className="flex items-center text-gray-600 hover:text-[#00927c]">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    nicocuidados@gmail.com
                  </a>
                </div>

                {/* Redes sociales */}
                <div className="flex justify-center space-x-6 mt-8">
                  <a href="#" className="text-gray-400 hover:text-[#00927c]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#00927c]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}