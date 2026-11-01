import type { Metadata } from 'next'
import { PostCard } from '@/components/blog/PostCard'
import { Container } from '@/components/ui/Container'
import { getAllPostMeta } from '@/lib/content/blog'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Notes on software engineering by Hafizul Haque.',
  path: '/blog/',
})

export default function BlogPage() {
  const posts = getAllPostMeta()
  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-12 text-5xl font-semibold tracking-tight">Blog</h1>
        <div className="flex flex-col gap-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
