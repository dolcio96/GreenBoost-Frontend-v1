/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://localhost:1234/api/:path*' // Proxy to Backend
      }
    ]
  }
}