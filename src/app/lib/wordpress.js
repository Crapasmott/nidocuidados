// src/lib/wordpress.js
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://blog.nidodecuidados.com/wp-json';

export async function fetchAPI(endpoint, options = {}) {
    const headers = { 'Content-Type': 'application/json' };

    if (options.token) {
        headers['Authorization'] = `Bearer ${options.token}`;
    }

    const res = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : null,
    });

    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.message || 'Ha ocurrido un error');
    }

    return json;
}

// Función para obtener todos los posts
export async function getAllPosts() {
    const data = await fetchAPI('/wp/v2/posts?_embed&per_page=100');
    return data;
}

// Función para obtener un post por su slug
export async function getPostBySlug(slug) {
    const data = await fetchAPI(`/wp/v2/posts?slug=${slug}&_embed`);
    return data[0];
}

// Función para obtener todas las categorías
export async function getAllCategories() {
    const data = await fetchAPI('/wp/v2/categories');
    return data;
}

// Función para obtener posts por categoría
export async function getPostsByCategory(categoryId) {
    const data = await fetchAPI(`/wp/v2/posts?categories=${categoryId}&_embed`);
    return data;
}

// Función para autenticarse
export async function login(username, password) {
    const data = await fetchAPI('/jwt-auth/v1/token', {
        method: 'POST',
        body: { username, password },
    });
    return data;
}

// Función para crear un post (requiere autenticación)
export async function createPost(postData, token) {
    const data = await fetchAPI('/wp/v2/posts', {
        method: 'POST',
        body: postData,
        token,
    });
    return data;
}

// Función para actualizar un post (requiere autenticación)
export async function updatePost(postId, postData, token) {
    const data = await fetchAPI(`/wp/v2/posts/${postId}`, {
        method: 'POST',
        body: postData,
        token,
    });
    return data;
}

// Función para eliminar un post (requiere autenticación)
export async function deletePost(postId, token) {
    const data = await fetchAPI(`/wp/v2/posts/${postId}`, {
        method: 'DELETE',
        token,
    });
    return data;
}