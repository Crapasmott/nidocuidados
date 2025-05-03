// src/app/test-wordpress/page.jsx
'use client';
import { useState } from 'react';
import { testWordPressConnection, getAllPosts, getAllCategories } from '../blog/wordpress-utils';

export default function TestWordPress() {
  const [status, setStatus] = useState('');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const testConnection = async () => {
    setStatus('Probando conexión...');
    const isConnected = await testWordPressConnection();
    setStatus(isConnected ? '✅ Conexión exitosa' : '❌ Error de conexión');
  };

  const fetchPosts = async () => {
    setStatus('Obteniendo posts...');
    const data = await getAllPosts();
    setPosts(data);
    setStatus(`✅ ${data.length} posts obtenidos`);
  };

  const fetchCategories = async () => {
    setStatus('Obteniendo categorías...');
    const data = await getAllCategories();
    setCategories(data);
    setStatus(`✅ ${data.length} categorías obtenidas`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Prueba de conexión WordPress</h1>
      
      <div className="space-y-4">
        <button 
          onClick={testConnection}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Probar Conexión
        </button>
        
        <button 
          onClick={fetchPosts}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Obtener Posts
        </button>
        
        <button 
          onClick={fetchCategories}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Obtener Categorías
        </button>
      </div>
      
      <div className="mt-4">
        <p>Estado: {status}</p>
      </div>
      
      {posts.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Posts:</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title.rendered}</li>
            ))}
          </ul>
        </div>
      )}
      
      {categories.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Categorías:</h2>
          <ul>
            {categories.map(cat => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}