// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Columna 1: Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <div className="relative h-20 w-48 mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Nido de Cuidados" 
                  width={192}
                  height={80}
                />
              </div>
            </Link>
            <p className="text-white/90 mb-6 text-center md:text-left">
              Desde la gestación hasta el postparto, entendemos que cada mujer vive esta
              experiencia de manera única y especial.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={FaFacebookF} href="#" />
              <SocialIcon Icon={FaTwitter} href="#" />
              <SocialIcon Icon={FaLinkedinIn} href="#" />
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <FooterLink href="/nosotros" label="Nosotros" />
              <FooterLink href="/servicios" label="Servicios" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/contacto" label="Contacto" />
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-white/80 mt-1 mr-3" />
                <a href="tel:+573332358135" className="hover:text-white/80 transition-colors">
                  333 2358135
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-white/80 mt-1 mr-3" />
                <a href="mailto:nidodecuidados2024@gmail.com" className="hover:text-white/80 transition-colors">
                  nidodecuidados2024@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white/80 mt-1 mr-3" />
                <span>Calle 116 b # 74 a - 40, Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-primary-dark py-4 bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            Copyright © {new Date().getFullYear()} nido.com.co - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Componente para iconos sociales
const SocialIcon = ({ Icon, href }: { Icon: React.ElementType, href: string }) => {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-white" />
    </a>
  );
};

// Componente para enlaces del footer
const FooterLink = ({ href, label }: { href: string, label: string }) => {
  return (
    <li>
      <Link href={href} className="text-white/90 hover:text-white transition-colors">
        {label}
      </Link>
    </li>
  );
};

export default Footer;