// src/app/blog/page.jsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from './wordpress-utils'; // Asegúrate de usar la ruta correcta

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
        
        // Obtener posts
        const postsData = await getAllPosts();
        console.log('Posts recibidos:', postsData);
        setPosts(postsData);
        
        // Obtener categorías
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

  // ... resto del código
}