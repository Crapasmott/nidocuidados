// src/app/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300" style={{ backgroundColor: '#00927c' }}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-6"> {/* Aumenté el padding vertical aquí */}
          {/* Logo */}
          <Link href="/" className="z-10">
            <div className="relative h-16 w-48">
              <Image 
                src="/images/nido-logo.png"
                alt="Nido de Cuidados"
                fill
                style={{objectFit: "contain"}}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10"> {/* Aumenté el espacio entre elementos */}
            <NavLink href="/" label="Inicio" />
            <NavLink href="/nosotros" label="Nosotros" />
            <NavLink href="/#servicios" label="Servicios" />
            <NavLink href="/blog" label="Blog" />
            <Link 
              href="/contacto" 
              className="bg-secondary text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              style={{ backgroundColor: '#e1ccad', color: '#00927c' }}
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 py-4" style={{ backgroundColor: '#00927c' }}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="/" label="Inicio" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/nosotros" label="Nosotros" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/#servicios" label="Servicios" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/blog" label="Blog" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/contacto" label="Contáctanos" onClick={() => setIsMobileMenuOpen(false)} isButton />
          </div>
        </div>
      )}
    </header>
  );
}

// Navigation Link Component
const NavLink = ({ href, label }) => {
  return (
    <Link href={href} className="text-white font-medium hover:text-secondary transition-colors duration-300">
      {label}
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, label, onClick, isButton }) => {
  return (
    <Link 
      href={href} 
      className={`${isButton ? 'bg-secondary text-primary py-2 px-4 rounded-full text-center' : 'text-white'} font-medium block`} 
      onClick={onClick}
      style={isButton ? { backgroundColor: '#e1ccad', color: '#00927c' } : {}}
    >
      {label}
    </Link>
  );
};