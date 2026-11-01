import Link from 'next/link'
import type { Project } from '@/lib/types'
import { isExternalUrl } from '@/lib/utils'
import { Tag } from './Tag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col gap-3 border-t border-rule pt-5">
      <p className="text-xs text-mute">{project.year}</p>
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="text-mute">{project.summary}</p>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
        {project.liveUrl && <ProjectLink href={project.liveUrl} label="Live" title={project.title} />}
        {project.repoUrl && <ProjectLink href={project.repoUrl} label="Source" title={project.title} />}
      </div>
    </article>
  )
}

function ProjectLink({ href, label, title }: { href: string; label: string; title: string }) {
  const external = isExternalUrl(href)
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link href={href} className="text-accent underline-offset-4 hover:underline" {...props}>
      {label}
      <span className="sr-only"> for {title}</span>
    </Link>
  )
}
