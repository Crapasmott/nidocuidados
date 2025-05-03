// src/app/blog/wordpress-utils.js
const API_URL = 'https://blog.nidodecuidados.com/wp-json'; // URL de tu WordPress

// Datos estáticos de respaldo
const staticPosts = [
    {
        id: 1,
        slug: 'importancia-contacto-piel-con-piel',
        title: { rendered: 'La importancia del contacto piel con piel' },
        excerpt: { rendered: '<p>El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé...</p>' },
        content: { rendered: '<p>El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé de manera extraordinaria. Esta práctica, respaldada por numerosos estudios científicos, ofrece beneficios tanto físicos como emocionales.</p>' },
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
        content: { rendered: '<p>Prepararse para la lactancia durante el embarazo puede marcar una gran diferencia en tu experiencia. Conocer las bases y establecer una red de apoyo son clave.</p>' },
        date: '2024-04-02',
        categories: [2],
        _embedded: {
            'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/600x400?text=Piel+con+piel' }],
            'wp:term': [[{ id: 2, name: 'Lactancia' }]],
            'author': [{ name: 'Natalia González' }]
        }
    },
    {
        id: 3,
        slug: 'metodos-anticonceptivos-lactancia',
        title: { rendered: 'Métodos anticonceptivos compatibles con la lactancia' },
        excerpt: { rendered: '<p>Conoce las opciones anticonceptivas que no afectan la producción de leche ni la salud del bebé...</p>' },
        content: { rendered: '<p>Elegir el método anticonceptivo adecuado durante la lactancia es crucial para no afectar la producción de leche ni la salud del bebé.</p>' },
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

// Por ahora, usar solo datos estáticos
export async function getAllPosts() {
    // Simular un pequeño delay como si fuera una API real
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Usando datos estáticos para posts');
            resolve(staticPosts);
        }, 500);
    });
}

export async function getAllCategories() {
    // Simular un pequeño delay como si fuera una API real
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Usando datos estáticos para categorías');
            resolve(staticCategories);
        }, 300);
    });
}

export async function getPostBySlug(slug) {
    // Simular un pequeño delay como si fuera una API real
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Buscando post por slug:', slug);
            const post = staticPosts.find(post => post.slug === slug);
            resolve(post || null);
        }, 400);
    });
}

// OPCIONAL: Funciones para probar la conexión con WordPress cuando esté lista
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