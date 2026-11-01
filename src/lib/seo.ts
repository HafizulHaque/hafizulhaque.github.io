import type { Metadata } from 'next'
import { site } from '@/content/site'

type MetaInput = {
  title: string
  description: string
  path: string
  image?: string
}

export function buildMetadata({ title, description, path, image }: MetaInput): Metadata {
  const url = new URL(path, site.url).toString()
  const images = image ? [{ url: image }] : undefined
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description, images },
  }
}
