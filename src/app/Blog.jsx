// src/app/Blog.jsx
export default function Blog() {
    const blogPosts = [
      {
        id: 1,
        categoria: 'AFIRMACIONES POSTPARTO',
        titulo: '"Maternidad con Amor: Un Viaje de Cuidado, Conexión y Empoderamiento',
        imagen: '/images/blog_posts_1.png',
        enlace: '/blog/maternidad-con-amor'
      },
      {
        id: 2,
        categoria: 'CIERRE DE CUARENTENA',
        titulo: '¿El Cierre de los 40 Días: Un Ritual de Renacimiento y Sanación?',
        imagen: '/images/blog_posts_2.png',
        enlace: '/blog/cierre-cuarentena'
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00927c] uppercase font-medium tracking-wider mb-2 inline-block">Blog Posts</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bienvenida a nuestro Blog</h2>
            <p className="text-gray-600">
              Aquí cuentas con un espacio de apoyo y guía en tu maternidad. Encuentra información, consejos
              y contención para vivir esta etapa con amor y confianza.
            </p>
          </div>
          
          {/* Artículos del blog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {blogPosts.map(post => (
              <div key={post.id} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={post.imagen} 
                  alt={post.titulo} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[#e1ccad] font-medium mb-2 inline-block">{post.categoria}</span>
                  <h3 className="text-xl text-white font-bold mb-4">{post.titulo}</h3>
                  <a 
                    href={post.enlace} 
                    className="inline-block w-12 h-12 bg-[#e1ccad] rounded-full flex items-center justify-center text-[#00927c] transition-transform group-hover:translate-x-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/blog" 
              className="inline-block px-8 py-3 border-2 border-[#00927c] text-[#00927c] rounded-full font-medium hover:bg-[#00927c] hover:text-white transition-all"
            >
              Ver todos los blogs
            </a>
          </div>
        </div>
      </section>
    );
  }