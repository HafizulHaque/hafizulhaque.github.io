import type { NextConfig } from 'next'

// Static export for GitHub Pages. The site is served from the root of
// hafizulhaque.github.io, so no basePath is needed.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
