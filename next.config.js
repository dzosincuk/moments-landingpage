/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurace pro Coolify deployment
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // Optimalizace pro produkci
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
