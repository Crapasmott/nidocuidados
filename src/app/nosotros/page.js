'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function NosotrosPage() {
    // Estados para animaciones hover
    const [hoverCEO, setHoverCEO] = useState(false);
    const [hoverTeam1, setHoverTeam1] = useState(false);
    const [hoverTeam2, setHoverTeam2] = useState(false);

    // Estados y refs para el footer
    const footerRef = useRef(null);
    const isFooterInView = useInView(footerRef, { once: false, threshold: 0.1 });
    const footerControls = useAnimation();

    useEffect(() => {
        if (isFooterInView) {
            footerControls.start('visible');
        }
    }, [isFooterInView, footerControls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const socialLinks = [
        { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
        { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
        { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
        { icon: 'youtube', url: 'https://youtube.com', label: 'YouTube' }
    ];

    const footerLinks = [
        {
            title: 'Servicios',
            links: [
                { text: 'Curso prenatal', url: '/servicios#curso-prenatal' },
                { text: 'Cuidados postparto', url: '/servicios#cuidados-postparto' },
                { text: 'Asesoría en lactancia', url: '/servicios#asesoria-lactancia' },
                { text: 'Asesoría en anticoncepción', url: '/servicios#anticoncepcion' }
            ]
        },
        {
            title: 'Empresa',
            links: [
                { text: 'Nosotros', url: '/nosotros' },
                { text: 'Blog', url: '/blog' },
                { text: 'Testimonios', url: '/testimonios' },
                { text: 'Profesionales', url: '/equipo' }
            ]
        },
        {
            title: 'Contacto',
            links: [
                { text: 'Reservar cita', url: '/contacto#reservar' },
                { text: 'Preguntas frecuentes', url: '/faq' },
                { text: 'Ubicación', url: '/contacto#ubicacion' },
                { text: 'Teléfono: (01) 234-5678', url: 'tel:+5101234567' }
            ]
        }
    ];
    // Renderiza iconos sociales
    const renderSocialIcon = (icon) => {
        switch (icon) {
            case 'facebook':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V10a4 4 0 0 0-4-4zm2 8a2 2 0 0 1-4 0v-4a2 2 0 0 1 4 0v4zm2-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                );
            case 'twitter':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
                    </svg>
                );
            case 'youtube':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </svg>
                );
            default:
                return null;
        }
    };
    return (
        <div className="w-full">
            {/* Hero Banner - Imagen 1 */}
            <div className="relative w-full h-[500px]">
                <Image
                    src="/images/materna.jpg"
                    alt="Madre con bebé"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-playfair mb-6 animate-fade-in-down">Nosotros</h1>
                    <p className="max-w-2xl text-lg md:text-xl animate-fade-in">
                        Que cada paso en este camino esté lleno de confianza, amor y
                        serenidad. Y que recuerdes siempre que estás rodeada de
                        personas que te acompañan y sostienen en esta maravillosa
                        travesía.
                    </p>
                    <div className="mt-8 flex space-x-4 animate-bounce-slow">
                    <Link href="/inicio" className="px-6 py-3 bg-[#00927c] hover:bg-[#007c69] rounded-full transition-colors duration-300 transform hover:scale-105">
  Inicio
</Link>
<Link href="/#servicios" className="px-6 py-3 bg-[#00927c] hover:bg-[#007c69] rounded-full transition-colors duration-300 transform hover:scale-105">
Servicios
</Link>
                       
                    </div>
                </div>
            </div>
            {/* Estructura principal */}
            <div className="container mx-auto px-4 py-16">
                {/* Sobre Nosotros - Título */}
                <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
                    <h2 className="text-4xl font-playfair mb-4">Sobre Nosotros</h2>
                    <p className="text-[#00927c]">
                        En Nido de Cuidados creemos en el poder transformador de una maternidad
                        acompañada, consciente y respetuosa.
                    </p>
                </div>

                {/* Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden transform transition duration-500 hover:shadow-lg hover:-translate-y-2">
                        <div className="md:flex">
                            <div className="md:w-1/2 relative">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src="/images/mision.jpg"
                                        alt="Nuestra Misión"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                {/* Borde curvo verde */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00927c] rounded-tl-full" />
                            </div>
                            <div className="md:w-1/2 p-6">
                                <h3 className="text-2xl font-playfair mb-4">Nuestra Misión</h3>
                                <p className="text-gray-700 mb-4">
                                    Acompañamos el viaje transformador de la maternidad, integrando cuerpo, mente y
                                    espíritu. Creamos un espacio de cuidado, aprendizaje y crecimiento para nutrir y
                                    empoderar a cada mujer en su camino, desde la concepción hasta la crianza.
                                </p>
                                <a href="#contacto" className="inline-block px-6 py-2 bg-[#00927c] text-white rounded-full hover:bg-[#007c69] transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                                    ¡Conoce más!
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden transform transition duration-500 hover:shadow-lg hover:-translate-y-2">
                        <div className="md:flex flex-row-reverse">
                            <div className="md:w-1/2 relative">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src="/images/vision.jpg"
                                        alt="Nuestra Visión"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                {/* Borde curvo verde */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#00927c] rounded-tr-full" />
                            </div>
                            <div className="md:w-1/2 p-6">
                                <h3 className="text-2xl font-playfair mb-4">Nuestra Visión</h3>
                                <p className="text-gray-700 mb-4">
                                    Ser un referente en el acompañamiento integral de la maternidad, brindando a cada mujer un
                                    espacio seguro, amoroso y respetuoso donde pueda vivir su experiencia con confianza,
                                    bienestar y empoderamiento.
                                </p>
                                <a href="#contacto" className="inline-block px-6 py-2 bg-[#00927c] text-white rounded-full hover:bg-[#007c69] transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                                    ¡Descubre cómo!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nuestros Valores */}
                <div className="mb-16">
                    <h3 className="text-2xl font-playfair text-center mb-10">Nuestros Valores</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/respeto.png" alt="Respeto" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Respeto</h4>
                            <p className="text-gray-600">Honramos las decisiones y el proceso único de cada mujer y familia.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/empatia.png" alt="Empatía" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Empatía</h4>
                            <p className="text-gray-600">Acompañamos desde la comprensión profunda de las necesidades emocionales.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/conocimiento.png" alt="Conocimiento" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Conocimiento</h4>
                            <p className="text-gray-600">Basamos nuestras prácticas en la mejor evidencia científica disponible.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/cuidado.png" alt="Cuidado" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Cuidado</h4>
                            <p className="text-gray-600">Brindamos atención integral y personalizada en cada etapa del proceso maternal.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/comunidad.png" alt="Comunidad" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Comunidad</h4>
                            <p className="text-gray-600">Creamos redes de apoyo que sostienen y nutren a las familias.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00927c]/10 flex items-center justify-center">
                                <Image src="/images/iconos/inclusion.png" alt="Inclusión" width={80} height={80}
                                    className="object-cover object-center" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Inclusión</h4>
                            <p className="text-gray-600">Acogemos a todas las familias en su diversidad y unicidad.</p>
                        </div>
                    </div>
                </div>
                {/* Nuestro Equipo */}
                <div className="mb-16">
                    <h2 className="text-3xl font-playfair text-center mb-4">Nuestro Equipo de Expertas</h2>
                    <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
                        Contamos con profesionales altamente calificadas y apasionadas
                        por el acompañamiento maternal, cada una especializada en
                        diferentes aspectos del proceso de gestación y crianza.
                    </p>

                    {/* CEO - Diseño actualizado basado en la imagen 2 */}
                    <div
                        className={`bg-white rounded-lg shadow-lg overflow-hidden mb-16 max-w-6xl mx-auto transform transition-all duration-500 ${hoverCEO ? 'shadow-2xl -translate-y-2' : ''}`}
                        onMouseEnter={() => setHoverCEO(true)}
                        onMouseLeave={() => setHoverCEO(false)}
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Contenedor de la imagen con borde curvo y verde */}
                            <div className="md:w-1/2 relative">
                                <div className="relative" style={{ width: '580px', height: '682px' }}>
                                    {/* Imagen principal */}
                                    <Image
                                        src="/images/aboutus_image-1.png"
                                        alt="Esmeralda Calderon"
                                        width={580}
                                        height={682}
                                        className="object-cover object-center"
                                    />
                                    {/* Borde curvo verde */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#00927c] rounded-tl-full" />
                                </div>
                            </div>

                            {/* Contenido de texto e iconos */}
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <div className="mb-3 text-[#00927c] uppercase tracking-wider font-medium">
                                    CEO NIDO DE CUIDADOS
                                </div>
                                <h2 className="text-4xl font-playfair mb-6">Esmeralda Calderon.</h2>
                                <p className="text-gray-700 mb-10">
                                    Soy enfermera de la FUCS, doula en gestación, parto y postparto, asesora en lactancia materna y
                                    anticoncepción. Como mamá de Emi, quiero acompañarte en la vocación más sublime: dar vida.
                                </p>

                                {/* Iconos de servicios en grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:bg-[#00927c]/10 hover:shadow-md">
                                        <div className="mb-2">
                                            <Image
                                                src="/images/iconos/yoga.png"
                                                alt="Parto humanizado"
                                                width={60}
                                                height={60}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Parto humanizado
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:bg-[#00927c]/10 hover:shadow-md">
                                        <div className="mb-2">
                                            <Image
                                                src="/images/iconos/padres.png"
                                                alt="Atención domiciliaria"
                                                width={60}
                                                height={60}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Atención domiciliaria
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:bg-[#00927c]/10 hover:shadow-md">
                                        <div className="mb-2">
                                            <Image
                                                src="/images/iconos/dia-de-la-madre.png"
                                                alt="Seguimiento personalizado"
                                                width={60}
                                                height={60}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Seguimiento personalizado
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:bg-[#00927c]/10 hover:shadow-md">
                                        <div className="mb-2">
                                            <Image
                                                src="/images/iconos/feto.png"
                                                alt="Experiencia en neonatos"
                                                width={60}
                                                height={60}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Experiencia en neonatos
                                        </div>
                                    </div>
                                </div>

                                {/* Llamada a la acción */}
                                <div className="mt-8 text-center">
                                    <a href="/contacto" className="inline-block px-8 py-3 bg-[#00927c] text-white rounded-full hover:bg-[#007c69] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        ¡Agenda tu consulta ahora!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Miembros del equipo */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div
                            className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ${hoverTeam1 ? 'shadow-xl -translate-y-2' : ''}`}
                            onMouseEnter={() => setHoverTeam1(true)}
                            onMouseLeave={() => setHoverTeam1(false)}
                        >
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src="/images/natalia.jpg"
                                    alt="Dra. Natalia González"
                                    width={400}
                                    height={400}
                                    className="object-cover object-center w-full h-full"
                                />
                                {/* Borde curvo verde */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00927c] rounded-tl-full" />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">Dra. Natalia González</h3>
                                <p className="text-gray-700 mb-4">
                                    Egresada de la FUJNC y diplomada en Atención Primaria en Salud. Apasionada por la lactancia materna y el cuidado integral del lactante, mi objetivo es promover el bienestar con estrategias educativas.
                                </p>

                            </div>
                        </div>

                        <div
                            className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ${hoverTeam2 ? 'shadow-xl -translate-y-2' : ''}`}
                            onMouseEnter={() => setHoverTeam2(true)}
                            onMouseLeave={() => setHoverTeam2(false)}
                        >
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src="/images/laura.jpg"
                                    alt="Psic. Laura Sierra"
                                    width={400}
                                    height={400}
                                    className="object-cover object-center w-full h-full"
                                />
                                {/* Borde curvo verde */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00927c] rounded-tl-full" />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">Psic. Laura Sierra</h3>
                                <p className="text-gray-700 mb-4">
                                    Magíster en Psicología Clínica. Te brindo un espacio seguro para afrontar maternidad, cambios de pareja y duelos perinatales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Certificaciones */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <div className="text-[#00927c] uppercase tracking-wide text-sm font-medium mb-2">NUESTRAS CERTIFICACIONES</div>
                        <h2 className="text-3xl font-playfair mb-4">Profesionales Certificados</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Las certificaciones no solo garantizan calidad y confianza, sino que también reflejan un compromiso con
                            el bienestar integral de cada madre y su bebé. A través de una formación constante, podemos ofrecer un
                            acompañamiento que respete la naturaleza única de cada proceso, honrando el cuerpo, las emociones y
                            la conexión profunda que se crea en esta etapa.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {/* FUCS - Primera certificación */}
                        <div className="transform transition-all duration-300 hover:scale-110">
                            <Image
                                src="/images/certificado1.jpg"
                                alt="Fundación Universitaria de Ciencias de la Salud - FUCS"
                                width={200}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        {/* FUCS - Segunda certificación (duplicada) */}
                        <div className="transform transition-all duration-300 hover:scale-110">
                            <Image
                                src="/images/sabana.jpg"
                                alt="Fundación Universitaria de Ciencias de la Salud - FUCS"
                                width={200}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        {/* Universidad de La Sabana */}
                        <div className="transform transition-all duration-300 hover:scale-110">
                            <Image
                                src="/images/sanitas.jpg"
                                alt="Universidad de La Sabana"
                                width={200}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        {/* Unisanitas */}
                        <div className="transform transition-all duration-300 hover:scale-110">
                            <Image
                                src="/images/antu.jpg"
                                alt="Unisanitas"
                                width={200}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Llamada a la acción final */}
                    <div className="text-center mt-12">
                        <a href="/contacto" className="inline-block px-8 py-4 bg-[#00927c] text-white text-lg rounded-full hover:bg-[#007c69] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            ¡Comienza tu camino con nosotras hoy!
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-[#00927c] text-white py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        ref={footerRef}
                        initial="hidden"
                        animate={footerControls}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
                    >
                        {/* Logo y descripción */}
                        <motion.div
                            className="lg:col-span-2"
                            variants={itemVariants}
                        >
                            <div className="mb-6">
                                <Image
                                    src="/images/nido-logo.png"
                                    alt="Nido de Cuidados"
                                    width={180}
                                    height={60}
                                    className="h-auto"
                                />
                            </div>
                            <p className="mb-6 text-gray-100">
                                Brindamos apoyo emocional, físico y mental para una maternidad consciente
                                y un acompañamiento personalizado para ti y tu familia.
                            </p>

                            {/* Redes sociales */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-[#e1ccad] text-[#00927c] rounded-full flex items-center justify-center"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {renderSocialIcon(social.icon)}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Enlaces del footer */}
                        {footerLinks.map((column, columnIndex) => (
                            <motion.div
                                key={columnIndex}
                                variants={itemVariants}
                            >
                                <h3 className="text-xl font-bold mb-4 text-[#e1ccad]">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, linkIndex) => (
                                        <motion.li
                                            key={linkIndex}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link href={link.url} className="hover:text-[#e1ccad] transition-colors duration-300">
                                                {link.text}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Línea divisoria */}
                    <motion.div
                        className="border-t border-[#e1ccad]/30 my-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    ></motion.div>

                    {/* Copyright */}
                    <motion.div
                        className="text-center text-sm text-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <p>© {new Date().getFullYear()} Nido de Cuidados. Todos los derechos reservados.</p>
                        <p className="mt-2">Diseñado con ♥ para mamás y bebés</p>
                    </motion.div>
                </div>
            </footer>

            {/* Estilos personalizados para animaciones */}
            <style jsx global>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes bounceSlow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .animate-fade-in-down {
                    animation: fadeInDown 1s ease-out;
                }
                
                .animate-fade-in {
                    animation: fadeIn 1.5s ease-out;
                }
                
                .animate-bounce-slow {
                    animation: bounceSlow 3s infinite;
                }
            `}</style>
        </div>
    );
}