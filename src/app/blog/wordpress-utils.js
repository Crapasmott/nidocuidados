// src/app/blog/wordpress-utils.js
const API_URL = 'https://tu-wordpress.com/wp-json'; // Reemplaza con tu URL real

// Datos estáticos de respaldo
const staticPosts = [
    {
        id: 1,
        slug: 'importancia-contacto-piel-con-piel',
        title: { rendered: 'La importancia del contacto piel con piel' },
        excerpt: { rendered: '<p>El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé...</p>' },
        content: { rendered: '<p>El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé de manera extraordinaria...</p>' },
        date: '2024-04-15',
        categories: [1],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/piel-con-piel.jpg' }],
            'wp:term': [[{ id: 1, name: 'Postparto' }]],
            'author': [{ name: 'Esmeralda Calderón' }]
        }
    },
    {
        id: 2,
        slug: 'preparandote-para-lactancia',
        title: { rendered: 'Preparándote para la lactancia: lo que debes saber' },
        excerpt: { rendered: '<p>Una buena preparación desde el embarazo puede hacer que la experiencia de lactancia sea más exitosa...</p>' },
        content: { rendered: '<p>Prepararse para la lactancia durante el embarazo puede marcar una gran diferencia...</p>' },
        date: '2024-04-02',
        categories: [2],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/lactancia-preparacion.jpg' }],
            'wp:term': [[{ id: 2, name: 'Lactancia' }]],
            'author': [{ name: 'Natalia González' }]
        }
    },
    {
        id: 3,
        slug: 'metodos-anticonceptivos-lactancia',
        title: { rendered: 'Métodos anticonceptivos compatibles con la lactancia' },
        excerpt: { rendered: '<p>Conoce las opciones anticonceptivas que no afectan la producción de leche ni la salud del bebé...</p>' },
        content: { rendered: '<p>Elegir el método anticonceptivo adecuado durante la lactancia es crucial...</p>' },
        date: '2024-03-20',
        categories: [3],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/anticoncepcion-lactancia.jpg' }],
            'wp:term': [[{ id: 3, name: 'Anticoncepción' }]],
            'author': [{ name: 'Laura Sierra' }]
        }
    }
];

const staticCategories = [
    { id: 1, name: 'Postparto' },
    { id: 2, name: 'Lactancia' },
    { id: 3, name: 'Anticoncepción' },
    { id: 4, name: 'Prenatal' }
];

export async function getAllPosts() {
    try {
        console.log('Intentando obtener posts de:', `${API_URL}/wp/v2/posts?_embed&per_page=12`);

        const response = await fetch(`${API_URL}/wp/v2/posts?_embed&per_page=12`);

        if (!response.ok) {
            console.error('Respuesta no OK:', response.status, response.statusText);
            throw new Error(`Error al obtener posts: ${response.status}`);
        }

        const data = await response.json();
        console.log('Posts obtenidos:', data);
        return data;
    } catch (error) {
        console.error('Error fetching posts, usando datos estáticos:', error);
        return staticPosts; // Retorna datos estáticos si falla la petición
    }
}

export async function getAllCategories() {
    try {
        console.log('Intentando obtener categorías de:', `${API_URL}/wp/v2/categories`);

        const response = await fetch(`${API_URL}/wp/v2/categories`);

        if (!response.ok) {
            console.error('Respuesta no OK:', response.status, response.statusText);
            throw new Error(`Error al obtener categorías: ${response.status}`);
        }

        const data = await response.json();
        console.log('Categorías obtenidas:', data);
        return data;
    } catch (error) {
        console.error('Error fetching categories, usando datos estáticos:', error);
        return staticCategories; // Retorna datos estáticos si falla la petición
    }
}

export async function getPostBySlug(slug) {
    try {
        console.log('Intentando obtener post:', `${API_URL}/wp/v2/posts?slug=${slug}&_embed`);

        const response = await fetch(`${API_URL}/wp/v2/posts?slug=${slug}&_embed`);

        if (!response.ok) {
            console.error('Respuesta no OK:', response.status, response.statusText);
            throw new Error(`Error al obtener post: ${response.status}`);
        }

        const posts = await response.json();
        return posts[0] || null;
    } catch (error) {
        console.error('Error fetching post by slug, usando datos estáticos:', error);
        // Buscar en datos estáticos
        return staticPosts.find(post => post.slug === slug) || null;
    }
}