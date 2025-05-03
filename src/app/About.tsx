// src/app/About.tsx
'use client';

export default function About() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen del lado izquierdo */}
          <div className="md:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary">
                Imagen del equipo de Nido de Cuidados
              </div>
            </div>
          </div>
          
          {/* Contenido del lado derecho */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">Quienes Somos</h2>
            
            <p className="text-gray-700 mb-4">
              En Nido de Cuidados, brindamos apoyo integral a madres y recién nacidos, asegurando un
              acompañamiento físico, emocional y educativo en cada etapa.
            </p>
            
            <p className="text-gray-700 mb-8">
              Nuestro equipo, formado por enfermeras profesionales, médicos, psicólogos y doulas
              especializadas en gestación, parto y postparto, ofrece atención personalizada para que cada familia 
              se sienta segura y acompañada en este proceso.
            </p>
            
            <a href="/nosotros" className="bg-secondary text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all inline-block">
              Conócenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}