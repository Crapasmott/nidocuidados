// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.nidodecuidados.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            // Si necesitas otros dominios de imágenes, agrégalos aquí
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Otras configuraciones si las tienes
}

module.exports = nextConfig