/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
