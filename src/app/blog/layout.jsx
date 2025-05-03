// src/app/blog/layout.jsx
import React from 'react';
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div className="blog-layout">
      {/* Opcional: Navegación del blog */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#00927c]">Blog Nido de Cuidados</h2>
            <div className="space-x-4">
              <Link href="/blog" className="text-gray-600 hover:text-[#00927c]">
                Inicio
              </Link>
              <Link href="/blog/categorias" className="text-gray-600 hover:text-[#00927c]">
                Categorías
              </Link>
              <Link href="/" className="text-gray-600 hover:text-[#00927c]">
                Volver al sitio
              </Link>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Contenido principal */}
      <main>
        {children}
      </main>
    </div>
  );
}