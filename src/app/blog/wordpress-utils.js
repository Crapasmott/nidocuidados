// src/app/blog/wordpress-utils.js
const API_URL = 'https://blog.nidodecuidados.com/wp-json'; // Reemplaza con tu URL real

export async function getAllPosts() {
  try {
    console.log('Intentando obtener posts de:', `${API_URL}/wp/v2/posts?_embed&per_page=100`);
    
    const response = await fetch(`${API_URL}/wp/v2/posts?_embed&per_page=100`);
    
    if (!response.ok) {
      console.error('Error en la respuesta:', response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Posts obtenidos de WordPress:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener posts de WordPress:', error);
    // Retornar array vacío en caso de error
    return [];
  }
}

export async function getAllCategories() {
  try {
    console.log('Intentando obtener categorías de:', `${API_URL}/wp/v2/categories`);
    
    const response = await fetch(`${API_URL}/wp/v2/categories`);
    
    if (!response.ok) {
      console.error('Error en la respuesta:', response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Categorías obtenidas de WordPress:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener categorías de WordPress:', error);
    // Retornar array vacío en caso de error
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    console.log('Intentando obtener post por slug:', `${API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    
    const response = await fetch(`${API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      console.error('Error en la respuesta:', response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error al obtener post por slug:', error);
    return null;
  }
}

// Función de prueba para verificar la conexión
export async function testWordPressConnection() {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Conexión exitosa con WordPress:', data);
    return true;
  } catch (error) {
    console.error('Error conectando con WordPress:', error);
    return false;
  }
}