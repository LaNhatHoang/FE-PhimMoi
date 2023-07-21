/** @type {import('next').NextConfig} */

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/image/:name',
                destination: 'http://52.221.182.94/api/v1/file/image/:name',
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
