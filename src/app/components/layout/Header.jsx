// src/components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-10">
            <div className="relative h-16 w-48 cursor-pointer">
              <Image 
                src="/images/logo.png"
                alt="Nido de Cuidados Logo"
                width={192}
                height={64}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Inicio" />
            <NavLink href="/nosotros" label="Nosotros" />
            <NavLink href="/#servicios" label="Servicios" />
            <NavLink href="/blog" label="Blog" />
            <Link href="/contacto" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary focus:outline-none"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4"
        >
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
};

// Navigation Link Component
const NavLink = ({ href, label }: { href: string, label: string }) => {
  return (
    <Link href={href} className="relative text-gray-800 font-medium group">
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  href, 
  label, 
  onClick, 
  isButton 
}: { 
  href: string, 
  label: string, 
  onClick: () => void, 
  isButton?: boolean 
}) => {
  return (
    <Link href={href} className={`${isButton ? 'bg-primary text-white py-2 px-4 rounded-full text-center' : 'text-gray-800'} font-medium block`} onClick={onClick}>
      {label}
    </Link>
  );
};

export default Header;