// src/app/blog/page.jsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from './wordpress-utils';
import Footer from '../components/Footer'; // Asegúrate de que esta ruta sea correcta

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Obtener posts de WordPress
        const postsData = await getAllPosts();
        console.log('Posts recibidos:', postsData);
        setPosts(postsData);
        
        // Obtener categorías de WordPress
        const categoriesData = await getAllCategories();
        console.log('Categorías recibidas:', categoriesData);
        setCategories(categoriesData);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('No se pudieron cargar los datos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // Filtrar posts por categoría
  const filteredPosts = selectedCategory === 'todas' 
    ? posts 
    : posts.filter(post => {
        if (!post.categories) return false;
        return post.categories.includes(parseInt(selectedCategory));
      });

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Obtener URL de imagen destacada
  const getFeaturedImageUrl = (post) => {
    if (
      post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0] &&
      post._embedded['wp:featuredmedia'][0].source_url
    ) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return '/images/blog.jpg'; // Imagen por defecto
  };

  // Obtener nombre del autor
  const getAuthorName = (post) => {
    if (
      post._embedded && 
      post._embedded.author && 
      post._embedded.author[0] &&
      post._embedded.author[0].name
    ) {
      return post._embedded.author[0].name;
    }
    return 'Autor';
  };

  // Obtener nombre de categoría
  const getCategoryName = (post) => {
    if (
      post._embedded && 
      post._embedded['wp:term'] && 
      post._embedded['wp:term'][0] &&
      post._embedded['wp:term'][0][0] &&
      post._embedded['wp:term'][0][0].name
    ) {
      return post._embedded['wp:term'][0][0].name;
    }
    return 'Sin categoría';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00927c] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#00927c] text-white px-6 py-2 rounded-lg hover:bg-[#007c69]"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

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
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No hay artículos publicados todavía.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={getFeaturedImageUrl(post)}
                      alt={post.title.rendered || 'Artículo del blog'}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/blog-default.jpg';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-[#00927c] text-white text-xs px-3 py-1 rounded-full">
                      {getCategoryName(post)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{getAuthorName(post)}</span>
                    </div>
                    
                    <h2 
                      className="text-xl font-semibold mb-3 hover:text-[#00927c] transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    
                    <div 
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
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
        )}
        
        {/* Mensaje si no hay artículos en la categoría */}
        {filteredPosts.length === 0 && posts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No hay artículos disponibles en esta categoría actualmente.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}