// src/app/Newsletter.jsx
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simulación de envío
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setEmail('');
      
      // Resetear mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setEnviado(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-[#00927c] rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenido */}
            <div className="md:w-2/3 p-8 md:p-12 text-white">
              <h3 className="text-xl font-bold mb-2">Suscríbete ahora</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Manténgase al día con nuestro boletín</h2>
              
              <form onSubmit={handleSubmit} className="max-w-xl">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escriba tu dirección de correo electrónico"
                    required
                    className="w-full px-6 py-4 pr-36 rounded-full text-gray-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={enviando || enviado}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full font-medium ${
                      enviado 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#e1ccad] text-[#00927c] hover:bg-opacity-90'
                    }`}
                  >
                    {enviando ? 'Enviando...' : enviado ? '¡Suscrito!' : 'Suscríbete'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Imagen */}
            <div className="md:w-1/3">
              <img 
                src="/images/subscribe_image.png" 
                alt="Suscríbete a nuestro boletín" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}