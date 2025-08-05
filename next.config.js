/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurace pro Coolify deployment
  output: 'standalone',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
