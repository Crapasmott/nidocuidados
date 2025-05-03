// src/app/blog/page.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  
  // Datos estáticos de prueba
  const posts = [
    {
      id: 1,
      title: 'La importancia del contacto piel con piel',
      slug: 'importancia-contacto-piel-con-piel',
      excerpt: 'El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé...',
      category: 'Postparto',
      categoryId: 1,
      image: 'https://via.placeholder.com/600x400?text=Contacto+piel+con+piel',
      date: '2024-04-15',
      author: 'Esmeralda Calderón'
    },
    {
      id: 2,
      title: 'Preparándote para la lactancia: lo que debes saber',
      slug: 'preparandote-para-lactancia',
      excerpt: 'Una buena preparación desde el embarazo puede hacer que la experiencia de lactancia sea más exitosa...',
      category: 'Lactancia',
      categoryId: 2,
      image: 'https://via.placeholder.com/600x400?text=Lactancia',
      date: '2024-04-02',
      author: 'Natalia González'
    },
    {
      id: 3,
      title: 'Métodos anticonceptivos compatibles con la lactancia',
      slug: 'metodos-anticonceptivos-lactancia',
      excerpt: 'Conoce las opciones anticonceptivas que no afectan la producción de leche ni la salud del bebé...',
      category: 'Anticoncepción',
      categoryId: 3,
      image: 'https://via.placeholder.com/600x400?text=Anticoncepción',
      date: '2024-03-20',
      author: 'Laura Sierra'
    }
  ];
  
  const categories = [
    { id: 1, name: 'Postparto' },
    { id: 2, name: 'Lactancia' },
    { id: 3, name: 'Anticoncepción' }
  ];
  
  // Filtrar por categoría
  const filteredPosts = selectedCategory === 'todas' 
    ? posts 
    : posts.filter(post => post.categoryId === parseInt(selectedCategory));

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] bg-gray-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Blog</h1>
          <p className="max-w-2xl text-lg">
            Explorando la maternidad consciente: información, consejos y experiencias para tu camino maternal
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filtro de categorías */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <button
              onClick={() => setSelectedCategory('todas')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'todas' 
                  ? 'bg-[#00927c] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id.toString())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id.toString() 
                    ? 'bg-[#00927c] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-56 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#00927c] text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 hover:text-[#00927c] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-[#00927c] font-medium hover:underline">
                    Seguir leyendo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* Mensaje si no hay artículos */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No hay artículos disponibles en esta categoría actualmente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}