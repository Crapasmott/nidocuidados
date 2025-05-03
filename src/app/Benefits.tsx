// src/app/Benefits.tsx
'use client';

import Image from 'next/image';

export default function Benefits() {
  const leftBenefits = [
    {
      title: "Preparación prenatal",
      description: "Para lograr un parto con menos complicaciones."
    },
    {
      title: "Manejo del Dolor",
      description: "Contarás con técnicas no farmacológicas."
    },
    {
      title: "Estar Informada",
      description: "Al conocer todo sobre tu embarazo."
    },
    {
      title: "Posiciones",
      description: "Confía en tu capacidad natural de dar a luz."
    }
  ];

  const rightBenefits = [
    {
      title: "Lactancia materna",
      description: "Te apoyaré durante el proceso de lactancia."
    },
    {
      title: "Plan de Parto",
      description: "Con el equipo de salud que te atenderá."
    },
    {
      title: "Apoyo Postparto",
      description: "Para tu recuperación y bienestar."
    },
    {
      title: "El rol de la Familia",
      description: "Para recibir al bebé con amor y confianza."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary uppercase tracking-wider text-sm font-medium mb-2 inline-block">Los Beneficios Claves</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Del Apoyo Integral Durante tu Gestación</h2>
          <p className="text-gray-600">
            Queremos ofrecerte un apoyo continuo, personalizado y amoroso que mejora significativamente
            tu experiencia durante el embarazo, el parto y el postparto. Te ayudaremos a sentirte más
            segura, empoderada y preparada en cada paso de este hermoso viaje al planeta parto.
          </p>
        </div>

        {/* Sección central con beneficios */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Columna izquierda de beneficios */}
          <div className="md:w-1/3 space-y-12 my-8 md:my-0">
            {leftBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center text-right">
                <div className="md:flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
                <div className="hidden md:block md:w-16 md:ml-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white ml-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {index < leftBenefits.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mx-auto my-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Imagen central */}
          <div className="md:w-1/3 relative">
            <div className="relative h-96 w-full mx-auto">
              <Image
                src="/images/pregnant-woman.jpg"
                alt="Mujer embarazada"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Columna derecha de beneficios */}
          <div className="md:w-1/3 space-y-12 my-8 md:my-0">
            {rightBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center">
                <div className="hidden md:block md:w-16 md:mr-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {index < rightBenefits.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mx-auto my-2"></div>
                  )}
                </div>
                <div className="md:flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}