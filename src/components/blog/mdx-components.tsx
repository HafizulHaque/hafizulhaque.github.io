import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isExternalUrl } from '@/lib/utils'

function MdxLink({ href = '', children, ...props }: ComponentPropsWithoutRef<'a'>) {
  const external = isExternalUrl(href)
  if (!external) {
    return (
      <Link href={href} className="text-accent underline-offset-4 hover:underline">
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline" {...props}>
      {children}
    </a>
  )
}

function Figure({ src, alt, width, height, caption }: { src: string; alt: string; width: number; height: number; caption?: string }) {
  return (
    <figure className="my-10">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full rounded-md border border-rule" />
      {caption && <figcaption className="mt-2 text-sm text-mute">{caption}</figcaption>}
    </figure>
  )
}

function Callout({ children }: { children: ReactNode }) {
  return <aside className="my-8 border-l-4 border-accent bg-tint px-5 py-4 text-ink">{children}</aside>
}

export const mdxComponents = {
  a: MdxLink,
  Image,
  Figure,
  Callout,
}
