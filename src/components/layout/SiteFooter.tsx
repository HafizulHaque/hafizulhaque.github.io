import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute sm:px-8">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <ul className="flex gap-5">
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              Email
            </a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
