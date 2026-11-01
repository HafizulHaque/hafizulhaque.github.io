import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import type { PostMeta } from '@/lib/types'

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="flex flex-col gap-3 border-t border-rule pt-6">
      <p className="text-xs text-mute">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <h2 className="text-2xl font-semibold tracking-tight">
        <Link href={`/blog/${post.slug}/`} className="hover:text-accent">
          {post.title}
        </Link>
      </h2>
      <p className="text-mute">{post.description}</p>
      {post.cover && (
        <Link href={`/blog/${post.slug}/`} tabIndex={-1} aria-hidden="true" className="mt-2 block">
          <Image
            src={post.cover}
            alt=""
            width={1200}
            height={630}
            className="h-auto w-full rounded-md border border-rule"
          />
        </Link>
      )}
    </article>
  )
}
