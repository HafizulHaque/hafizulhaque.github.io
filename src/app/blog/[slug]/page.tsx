import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { mdxComponents } from '@/components/blog/mdx-components'
import { Container } from '@/components/ui/Container'
import { getAllPostMeta, getPostBySlug } from '@/lib/content/blog'
import { buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return getAllPostMeta().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.cover,
  })
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: 'github-light' }]],
      },
    },
  })

  return (
    <article className="py-16">
      <Container>
        <div className="mx-auto max-w-prose">
          <header className="mb-12 flex flex-col gap-4">
            <p className="text-sm text-mute">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="text-lg text-mute">{post.description}</p>
          </header>
          <div className="prose prose-neutral max-w-none">{content}</div>
        </div>
      </Container>
    </article>
  )
}
