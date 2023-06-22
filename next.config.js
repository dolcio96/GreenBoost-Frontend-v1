/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}


module.exports = nextConfig
/*

module.exports = {
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://localhost:1234/api/:path*' // Proxy to Backend
      }
    ]
  }
}*/