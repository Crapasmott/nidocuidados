// src/app/page.jsx
export default function Home() {
  return (
    <main>
      <section className="relative pt-24 pb-16 bg-[#00927c]">
        {/* Fondo con imagen de flores/plantas */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/images/banner_section_background.jpg')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenido lado izquierdo */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cuidamos del Bienestar en<br />
                <span className="text-[#e1ccad]">el Bebé</span>
              </h1>
              
              <p className="mb-8">
                Brindamos apoyo emocional, físico y mental para una maternidad 
                consciente y un acompañamiento personalizado para ti y tu familia.
              </p>
              
              <a 
                href="#servicios" 
                className="inline-block bg-[#e1ccad] text-[#00927c] px-8 py-3 rounded-full font-medium"
              >
                Más Información
              </a>
              
              {/* Flecha hacia abajo */}
              <div className="mt-12">
                <a href="#servicios" className="inline-block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Imagen lado derecho */}
            <div className="md:w-1/2">
              <div className="rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] overflow-hidden w-full max-w-md mx-auto">
                <img
                  src="/images/banner_right_image.png"
                  alt="Madre con su bebé"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Íconos redes sociales */}
        <div className="fixed left-0 top-1/3 z-20">
          <div className="bg-white bg-opacity-10 p-2 rounded-r-lg">
            <a href="#" className="block p-2 text-white hover:text-[#e1ccad]" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="block p-2 text-white hover:text-[#e1ccad]" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="block p-2 text-white hover:text-[#e1ccad]" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Otras secciones de la página pueden ir aquí */}
    </main>
  );
}