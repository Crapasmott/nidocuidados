// src/app/Contacto.jsx
'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    servicio: '', // Agregamos el campo de servicio
    mensaje: ''
  });
  
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  
  // Número de WhatsApp (reemplaza con el número real)
  const whatsappNumber = "573332358135"; // Este es el número que aparece en tu código actual
  
  // Lista de servicios disponibles
  const servicios = [
    { id: 'curso-prenatal', nombre: 'Curso prenatal' },
    { id: 'cuidados-postparto', nombre: 'Cuidados postparto' },
    { id: 'asesoria-lactancia', nombre: 'Asesoría en lactancia' },
    { id: 'asesoria-anticoncepcion', nombre: 'Asesoría en anticoncepción' },
    { id: 'psicoprofilaxis', nombre: 'Psicoprofilaxis' },
    { id: 'acompanamiento-parto', nombre: 'Acompañamiento en el parto' },
    { id: 'consulta-psicologia', nombre: 'Consulta psicológica' },
    { id: 'otro', nombre: 'Otro' }
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    
    try {
      // Obtener el nombre del servicio seleccionado
      const servicioSeleccionado = servicios.find(s => s.id === formData.servicio)?.nombre || 'No especificado';
      
      // Crear el mensaje para WhatsApp
      let message = `*Nuevo mensaje de contacto*\n\n`;
      message += `*Nombre:* ${formData.nombre}\n`;
      message += `*Apellidos:* ${formData.apellidos}\n`;
      message += `*Teléfono:* ${formData.telefono}\n`;
      message += `*Email:* ${formData.email}\n`;
      message += `*Servicio de interés:* ${servicioSeleccionado}\n`;
      message += `*Mensaje:*\n${formData.mensaje}`;
      
      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Crear la URL de WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
      
      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, '_blank');
      
      // Simulación de éxito
      setTimeout(() => {
        setEnviando(false);
        setEnviado(true);
        
        // Resetear el formulario después de 3 segundos
        setTimeout(() => {
          setFormData({
            nombre: '',
            apellidos: '',
            telefono: '',
            email: '',
            servicio: '',
            mensaje: ''
          });
          setEnviado(false);
        }, 3000);
      }, 1500);
      
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Formulario */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Quieres saber más?</h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Ponte en contacto con nosotras</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Apellidos"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Móvil"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Campo de selección de servicio */}
              <div className="mb-4">
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  {servicios.map(servicio => (
                    <option key={servicio.id} value={servicio.id}>
                      {servicio.nombre}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={enviando || enviado}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  enviado 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#00927c] text-white hover:bg-opacity-90'
                }`}
              >
                {enviando ? 'Abriendo WhatsApp...' : enviado ? '¡Mensaje enviado!' : 'Enviar por WhatsApp'}
              </button>
            </form>
          </div>
          
          {/* Información de contacto */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00927c] rounded-full flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Móvil</h4>
                    <p className="text-gray-600">333 2358135</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00927c] rounded-full flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">gerencia@nidodecuidados.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00927c] rounded-full flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Dirección</h4>
                    <p className="text-gray-600">Calle 116 b # 363544 a - 40, Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#00927c] rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}