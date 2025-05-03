// src/app/blog/[slug]/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '../wordpress-utils';
import Footer from '../../components/Footer';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const postData = await getPostBySlug(slug);
        
        if (!postData) {
          setError('Artículo no encontrado.');
        } else {
          setPost(postData);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('No se pudo cargar el artículo. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchPost();
  }, [slug]);

  // Funciones auxiliares
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getFeaturedImageUrl = (post) => {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-default.jpg';
  };

  const getAuthorName = (post) => {
    return post._embedded?.author?.[0]?.name || 'Autor';
  };

  const getCategoryName = (post) => {
    return post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Sin categoría';
  };

  // Estados de carga y error
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00927c] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {error || 'Artículo no encontrado'}
          </h1>
          <p className="mb-8 text-gray-600">
            {error || 'El artículo que estás buscando no existe o ha sido eliminado.'}
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-[#00927c] text-white rounded-lg hover:bg-[#007c69] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navegación */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-gray-600 hover:text-[#00927c] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver al blog
            </Link>
          </nav>

          {/* Encabezado del artículo */}
          <header className="mb-10">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-gray-900 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
              <span className="bg-[#00927c] text-white px-3 py-1 rounded-full">
                {getCategoryName(post)}
              </span>
              <span className="text-gray-400">•</span>
              <time className="text-gray-600" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            
            {/* Imagen destacada */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src={getFeaturedImageUrl(post)}
                alt={post.title.rendered}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                onError={(e) => {
                  e.currentTarget.src = '/images/blog-default.jpg';
                }}
              />
            </div>
            
            {/* Información del autor */}
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold text-gray-600">
                  {getAuthorName(post).charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-900">{getAuthorName(post)}</p>
                <p className="text-sm text-gray-500">Autor</p>
              </div>
            </div>
          </header>
          
          {/* Contenido del artículo */}
          <div 
            className="prose prose-lg max-w-none mb-12
              prose-headings:font-playfair prose-headings:font-semibold
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-[#00927c] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-lg prose-img:shadow-md
              prose-blockquote:border-l-4 prose-blockquote:border-[#00927c] prose-blockquote:pl-6 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          {/* Sección para compartir */}
          <aside className="border-t border-b border-gray-200 py-6">
            <h2 className="text-lg font-semibold mb-4">Compartir este artículo</h2>
            <div className="flex gap-3">
              <button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Compartir en Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title.rendered)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Compartir en Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.796a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-6.975 3.736 11.65 11.65 0 01-8.45-4.287 4.097 4.097 0 001.267 5.471 4.06 4.06 0 01-1.859-.513v.052a4.097 4.097 0 003.285 4.022 4.09 4.09 0 01-1.852.07 4.097 4.097 0 003.824 2.845A8.23 8.23 0 012 18.407a11.614 11.614 0 006.29 1.84c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.35 8.35 0 0022 5.796z" />
                </svg>
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  // Podrías usar una biblioteca de notificaciones aquí
                  alert('¡Enlace copiado al portapapeles!');
                }}
                className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Copiar enlace"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </aside>
        </div>
      </article>
      
      <Footer />
    </>
  );
}