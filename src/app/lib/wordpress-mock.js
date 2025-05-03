// src/lib/wordpress-mock.js
// Datos de ejemplo para desarrollo

const posts = [
    {
        id: 1,
        slug: 'importancia-contacto-piel-con-piel',
        title: { rendered: 'La importancia del contacto piel con piel' },
        excerpt: { rendered: 'El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé...' },
        content: { rendered: '<p>El contacto piel con piel inmediato después del nacimiento fortalece el vínculo entre madre y bebé de manera extraordinaria. Esta práctica, respaldada por numerosos estudios científicos, ofrece beneficios tanto físicos como emocionales que impactan positivamente el desarrollo del recién nacido.</p><h2>Beneficios para el bebé</h2><p>Cuando un recién nacido es colocado sobre el pecho desnudo de su madre, se activan mecanismos biológicos que favorecen:</p><ul><li>Regulación de la temperatura corporal</li><li>Estabilización de la frecuencia cardíaca y respiratoria</li><li>Colonización con bacterias beneficiosas de la madre</li><li>Inicio temprano y más exitoso de la lactancia materna</li><li>Reducción del estrés y llanto</li></ul>' },
        date: '2024-04-15',
        categories: [1],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/piel-con-piel.jpg' }],
            'wp:term': [[{ id: 1, name: 'Postparto' }], [{ id: 1, name: 'contacto' }, { id: 2, name: 'vínculo' }]],
            'author': [{ name: 'Esmeralda Calderón', avatar_urls: { '96': '/images/team/esmeralda.jpg' } }]
        }
    },
    {
        id: 2,
        slug: 'preparandote-para-lactancia',
        title: { rendered: 'Preparándote para la lactancia: lo que debes saber' },
        excerpt: { rendered: 'Una buena preparación desde el embarazo puede hacer que la experiencia de lactancia sea más exitosa...' },
        content: { rendered: '<p>Prepararse para la lactancia durante el embarazo puede marcar una gran diferencia en tu experiencia. Conocer las bases y establecer una red de apoyo son factores clave para el éxito.</p>' },
        date: '2024-04-02',
        categories: [2],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/lactancia-preparacion.jpg' }],
            'wp:term': [[{ id: 2, name: 'Lactancia' }], [{ id: 3, name: 'preparación' }, { id: 4, name: 'lactancia' }]],
            'author': [{ name: 'Natalia González', avatar_urls: { '96': '/images/team/natalia.jpg' } }]
        }
    },
    {
        id: 3,
        slug: 'metodos-anticonceptivos-lactancia',
        title: { rendered: 'Métodos anticonceptivos compatibles con la lactancia' },
        excerpt: { rendered: 'Conoce las opciones anticonceptivas que no afectan la producción de leche ni la salud del bebé...' },
        content: { rendered: '<p>Elegir el método anticonceptivo adecuado durante la lactancia es crucial para no afectar la producción de leche ni la salud del bebé. Existen varias opciones seguras y efectivas.</p>' },
        date: '2024-03-20',
        categories: [3],
        _embedded: {
            'wp:featuredmedia': [{ source_url: '/images/blog/anticoncepcion-lactancia.jpg' }],
            'wp:term': [[{ id: 3, name: 'Anticoncepción' }], [{ id: 5, name: 'anticoncepción' }, { id: 4, name: 'lactancia' }]],
            'author': [{ name: 'Laura Sierra', avatar_urls: { '96': '/images/team/laura.jpg' } }]
        }
    }
];

const categories = [
    { id: 1, name: 'Postparto', slug: 'postparto' },
    { id: 2, name: 'Lactancia', slug: 'lactancia' },
    { id: 3, name: 'Anticoncepción', slug: 'anticoncepcion' },
    { id: 4, name: 'Prenatal', slug: 'prenatal' }
];

export async function getAllPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve(posts), 500); // Simular delay de red
    });
}

export async function getPostBySlug(slug) {
    return new Promise(resolve => {
        const post = posts.find(p => p.slug === slug);
        setTimeout(() => resolve(post), 500);
    });
}

export async function getAllCategories() {
    return new Promise(resolve => {
        setTimeout(() => resolve(categories), 500);
    });
}

export async function getPostsByCategory(categoryId) {
    return new Promise(resolve => {
        const filteredPosts = posts.filter(post => post.categories.includes(parseInt(categoryId)));
        setTimeout(() => resolve(filteredPosts), 500);
    });
}