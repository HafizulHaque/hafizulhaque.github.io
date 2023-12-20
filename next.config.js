/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
