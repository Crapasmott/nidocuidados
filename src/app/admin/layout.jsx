// src/app/admin/layout.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname.startsWith(path) ? 'bg-[#00927c]/10 text-[#00927c]' : 'text-gray-600 hover:bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra superior */}
      <div className="bg-white shadow-sm py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/admin" className="flex items-center ml-2 md:ml-0">
            <span className="font-semibold text-xl text-[#00927c]">Nido de Cuidados</span>
            <span className="ml-2 text-sm text-gray-500">Admin</span>
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link 
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 flex items-center"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Ver sitio
          </Link>
          <div className="relative">
            <button className="flex items-center text-sm focus:outline-none">
              <div className="h-8 w-8 rounded-full bg-[#00927c] flex items-center justify-center text-white">
                A
              </div>
              <span className="ml-2 hidden md:block">Admin</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Barra lateral */}
        <div className={`bg-white w-64 min-h-screen shadow-md fixed inset-y-0 left-0 transform transition-transform duration-300 md:translate-x-0 md:static md:h-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-30`}>
          <div className="p-4 h-16 flex items-center justify-center border-b md:hidden">
            <span className="font-semibold text-xl text-[#00927c]">Admin</span>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <nav className="pt-5 px-3">
            <div className="space-y-1">
              <Link 
                href="/admin"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin')}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </Link>
              <Link 
                href="/admin/blog"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/blog')}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                Blog
              </Link>
              <Link 
                href="/admin/usuarios"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/usuarios')}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Usuarios
              </Link>
              <Link 
                href="/admin/configuracion"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/configuracion')}`}
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Configuración
              </Link>
            </div>
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Blog
              </h3>
              <div className="mt-2 space-y-1">
                <Link 
                  href="/admin/blog/nuevo"
                  className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/blog/nuevo')}`}
                >
                  Nuevo artículo
                </Link>
                <Link 
                  href="/admin/blog/categorias"
                  className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/blog/categorias')}`}
                >
                  Categorías
                </Link>
                <Link 
                  href="/admin/blog/comentarios"
                  className={`flex items-center px-4 py-2 text-sm rounded-md ${isActive('/admin/blog/comentarios')}`}
                >
                  Comentarios
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 min-w-0 overflow-hidden">
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}