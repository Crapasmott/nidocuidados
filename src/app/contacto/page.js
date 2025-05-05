'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function ContactoPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });
    const controls = useAnimation();

    // Número de WhatsApp
    const whatsappNumber = "573332358135";

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Lista de servicios disponibles
    const services = [
        { id: 'agendar-cita', name: 'Agendar una cita' },
        { id: 'curso-prenatal', name: 'Curso prenatal' },
        { id: 'cuidados-postparto', name: 'Cuidados postparto' },
        { id: 'asesoria-lactancia', name: 'Asesoría en lactancia' },
        { id: 'asesoria-anticoncepcion', name: 'Asesoría en anticoncepción' },
        { id: 'retiro-implante', name: 'Retiro de implante subdérmico' },
        { id: 'informacion-general', name: 'Información general' },
        { id: 'otro', name: 'Otro servicio' }
    ];

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    // ELIMINA ESTA LÍNEA -> export default function ContactoPage() {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Obtener el nombre del servicio seleccionado
            const servicioSeleccionado = services.find(s => s.id === formData.service)?.name || 'No especificado';

            // Crear el mensaje para WhatsApp
            let message = `*Consulta desde Página de Contacto*\n\n`;
            message += `*Nombre:* ${formData.firstname}\n`;
            message += `*Apellidos:* ${formData.lastname}\n`;
            message += `*Teléfono:* ${formData.phone || 'No proporcionado'}\n`;
            message += `*Email:* ${formData.email}\n`;
            message += `*Servicio de interés:* ${servicioSeleccionado}\n`;
            message += `*Mensaje:*\n${formData.message}`;

            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(message);

            // Crear la URL de WhatsApp
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');

            setSubmitStatus('success');

            // Resetear el formulario después de 3 segundos
            setTimeout(() => {
                setFormData({
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    service: '',
                    message: ''
                });
                setSubmitStatus(null);
            }, 3000);

        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Banner Section */}
            <div className="sub-banner-section">
                <section className="relative h-[500px]">
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/blog.jpg"
                            alt="Contacto Nido de Cuidados"
                            fill
                            className="object-cover brightness-50"
                            priority
                        />
                    </div>

                    {/* Contenido sobre la imagen */}
                    <div className="relative z-10 h-full bg-black/40 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center text-white">
                            <motion.h1
                                className="text-5xl font-bold mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                Contáctanos
                            </motion.h1>
                            <motion.p
                                className="text-xl max-w-2xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Tu nido de amor te espera. Contáctanos y tejamos juntas el comienzo más dulce para ti y tu bebé. ¿Empezamos?
                            </motion.p>
                            <motion.div
                                className="flex justify-center items-center space-x-2 text-sm mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <Link href="/" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full transition-colors transform hover:scale-105 duration-300">
                                    Inicio
                                </Link>
                                <Link href="/#Servicios" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full transition-colors transform hover:scale-105 duration-300">
                                    Servicios
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Message Section */}
            <section className="message_section py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <motion.div
                                className="bg-white p-8 rounded-lg shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h5 className="text-[#00927c] uppercase tracking-wider text-sm font-medium mb-2">Ponte en contacto.</h5>
                                <h2 className="text-3xl font-bold mb-4">Envíanos un mensaje</h2>
                                <p className="text-gray-600 mb-8">Mamá, tu amor ya florece. Comparte tus sueños con Nido de Cuidados y haz que tu viaje sea mágico. ¡Escríbenos!</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="fname"
                                                value={formData.firstname}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                                                placeholder="Nombre(s)"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="lastname"
                                                id="lname"
                                                value={formData.lastname}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                                                placeholder="Apellidos"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phonenum"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                                                placeholder="Número de contacto"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="emailaddrs"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Campo de selección de servicio */}
                                    <div className="form-group mb-4">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent appearance-none bg-white"
                                            required
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            {services.map(service => (
                                                <option key={service.id} value={service.id}>
                                                    {service.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group mb-6">
                                        <textarea
                                            rows="5"
                                            name="message"
                                            id="comment"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00927c] focus:border-transparent"
                                            placeholder="Mensaje"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="btn_wrapper">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 ${isSubmitting ? 'bg-gray-400' : 'bg-[#00927c] hover:bg-[#007c69] transform hover:scale-105 hover:shadow-lg'
                                                }`}
                                        >
                                            {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}
                                        </button>

                                        {submitStatus === 'success' && (
                                            <p className="mt-4 text-green-600">¡Redirigiendo a WhatsApp!</p>
                                        )}

                                        {submitStatus === 'error' && (
                                            <p className="mt-4 text-red-600">Hubo un problema. Por favor, intenta nuevamente.</p>
                                        )}
                                    </div>
                                </form>
                            </motion.div>
                        </div>

                        <div className="md:col-span-1">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 mr-4 bg-[#00927c]/10 rounded-full flex items-center justify-center">
                                            <Image src="/images/contact_location.png" alt="Ubicación" width={24} height={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Ubicación</h3>
                                        </div>
                                    </div>
                                    <p className="pl-16 text-gray-600">Calle 116 b # 84 a -30 Barrio Gran Granada Bogotá</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 mr-4 bg-[#00927c]/10 rounded-full flex items-center justify-center">
                                            <Image src="/images/contact_phone.png" alt="Teléfono" width={24} height={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Números de contacto</h3>
                                        </div>
                                    </div>
                                    <p className="pl-16 text-gray-600">
                                        <a href="tel:3332358135" className="hover:text-[#00927c] transition-colors">3332358135</a>
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 mr-4 bg-[#00927c]/10 rounded-full flex items-center justify-center">
                                            <Image src="/images/contact_mail.png" alt="Email" width={24} height={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Email</h3>
                                        </div>
                                    </div>
                                    <div className="pl-16 text-gray-600">
                                        <p><a href="mailto:nicocuidados@gmail.com" className="hover:text-[#00927c] transition-colors">gerencia@nidodecuidaos.com</a></p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Map Section */}
            <div className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.272507453169!2d-74.13111292432356!3d4.722658641465412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f83594a500001%3A0xcc9e4018dcae6728!2sDg.%2077b%20%23116%20B%2042%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1728256108447!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}