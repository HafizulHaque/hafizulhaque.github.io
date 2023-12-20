/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
