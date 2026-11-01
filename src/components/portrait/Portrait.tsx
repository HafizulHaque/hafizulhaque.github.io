'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { site } from '@/content/site'

// The WebGL layer is client-only and loaded after the page is idle. The plain
// <img> below is the LCP element and the fallback if WebGL is unavailable.
const PortraitScene = dynamic(() => import('./PortraitScene').then((m) => m.PortraitScene), { ssr: false })

const { portrait } = site

export function Portrait() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Defer the WebGL bundle and setup so it does not compete with first paint.
    const id = window.setTimeout(() => setEnabled(true), 1000)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
      <Image
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height}
        priority
        sizes="(min-width: 768px) 320px, 90vw"
        className="h-full w-full object-cover"
      />
      {enabled && <PortraitScene />}
    </div>
  )
}
