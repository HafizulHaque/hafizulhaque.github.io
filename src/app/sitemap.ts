import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { getAllPostMeta } from '@/lib/content/blog'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/projects/', '/blog/']
  const postPaths = getAllPostMeta().map((post) => `/blog/${post.slug}/`)
  return [...staticPaths, ...postPaths].map((path) => ({
    url: new URL(path, site.url).toString(),
  }))
}
