import Link from 'next/link'
import { site } from '@/content/site'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex gap-6 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mute hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
