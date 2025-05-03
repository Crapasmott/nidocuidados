// src/app/blog/[slug]/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '../wordpress-utils';

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getFeaturedImageUrl = (post) => {
    if (
      !post._embedded || 
      !post._embedded['wp:featuredmedia'] || 
      !post._embedded['wp:featuredmedia'][0] ||
      !post._embedded['wp:featuredmedia'][0].source_url
    ) {
      return '/images/blog-default.jpg';
    }
    
    return post._embedded['wp:featuredmedia'][0].source_url;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-[#00927c] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {error || 'Artículo no encontrado'}
          </h1>
          <p className="mb-6">
            {error || 'El artículo que estás buscando no existe o ha sido eliminado.'}
          </p>
          <Link href="/blog" className="text-[#00927c] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera del artículo */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#00927c] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver al blog
          </Link>
          
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          
          <div className="flex items-center mb-6">
            {post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && (
              post._embedded['wp:term'][0].map(term => (
                <span key={term.id} className="bg-[#00927c] text-white text-sm py-1 px-3 rounded-full mr-2">
                  {term.name}
                </span>
              ))
            )}
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600">{formatDate(post.date)}</span>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image
              src={getFeaturedImageUrl(post)}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {post._embedded && post._embedded.author && (
            <div className="flex items-center mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={post._embedded.author[0].avatar_urls?.['96'] || '/images/avatar-default.jpg'}
                  alt={post._embedded.author[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="font-medium">{post._embedded.author[0].name}</p>
                <p className="text-sm text-gray-600">Autor</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Contenido del artículo */}
        <div className="blog-content mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
        
        {/* Etiquetas */}
        {post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][1] && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {post._embedded['wp:term'][1].map(tag => (
                <Link 
                  key={tag.id} 
                  href={`/blog/tags/${tag.slug}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Compartir */}
        <div className="border-t border-b py-6 mb-12">
          <p className="text-lg font-medium mb-3">Compartir este artículo</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </button>
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title.rendered)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.796a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-6.975 3.736 11.65 11.65 0 01-8.45-4.287 4.097 4.097 0 001.267 5.471 4.06 4.06 0 01-1.859-.513v.052a4.097 4.097 0 003.285 4.022 4.09 4.09 0 01-1.852.07 4.097 4.097 0 003.824 2.845A8.23 8.23 0 012 18.407a11.614 11.614 0 006.29 1.84c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.35 8.35 0 0022 5.796z" />
              </svg>
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('¡Enlace copiado al portapapeles!');
              }}
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}