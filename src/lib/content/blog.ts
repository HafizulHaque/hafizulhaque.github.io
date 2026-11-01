import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Post, PostMeta } from '@/lib/types'

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  const slug = file.replace(/\.mdx$/, '')
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    cover: data.cover ? String(data.cover) : undefined,
    coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
    source: content,
  }
}

export function getAllPostMeta(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { slug, title, description, date, cover, coverAlt } = readPost(file)
      return { slug, title, description, date, cover, coverAlt }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  const file = `${slug}.mdx`
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return undefined
  return readPost(file)
}
