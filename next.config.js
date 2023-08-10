/** @type {import('next').NextConfig} */

const baseUrl = "http://13.215.250.48/api/v1/file"

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/image/:name',
                destination: `${baseUrl}/image/:name`,
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
