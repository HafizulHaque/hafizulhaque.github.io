/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
