// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/wp-api/:path*',
                destination: 'https://blog.nidodecuidados.com/wp-json/:path*' // Reemplaza con tu URL de WordPress
            }
        ]
    }
}