import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { projects } from '@/content/projects'
import { FEATURED_PROJECT_COUNT } from '@/content/site'
import { getAllPostMeta } from './blog'
import { getFeaturedProjects } from './projects'

const PUBLIC_DIR = path.join(process.cwd(), 'public')

describe('projects content', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('features the configured number of projects', () => {
    expect(getFeaturedProjects()).toHaveLength(Math.min(FEATURED_PROJECT_COUNT, projects.length))
  })
})

describe('blog content', () => {
  const posts = getAllPostMeta()

  it('has at least one post with unique slugs', () => {
    expect(posts.length).toBeGreaterThan(0)
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length)
  })

  it('has valid dates and required text', () => {
    for (const post of posts) {
      expect(Number.isNaN(Date.parse(post.date)), post.slug).toBe(false)
      expect(post.title.length, post.slug).toBeGreaterThan(0)
      expect(post.description.length, post.slug).toBeGreaterThan(0)
    }
  })

  it('has cover images that exist in public/', () => {
    for (const post of posts) {
      if (!post.cover) continue
      expect(fs.existsSync(path.join(PUBLIC_DIR, post.cover)), post.cover).toBe(true)
    }
  })
})
