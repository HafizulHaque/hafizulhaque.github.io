import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { JsonLd, personJsonLd } from '@/components/seo/JsonLd'
import { site } from '@/content/site'
import { buildMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({ title: site.name, description: site.description, path: '/' }),
  title: { default: site.name, template: `%s | ${site.name}` },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={personJsonLd} />
      </body>
    </html>
  )
}
