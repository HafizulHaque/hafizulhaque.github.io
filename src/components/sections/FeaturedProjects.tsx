import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { getFeaturedProjects } from '@/lib/content/projects'

export function FeaturedProjects() {
  const projects = getFeaturedProjects()
  const [lead, ...rest] = projects
  if (!lead) return null

  return (
    <section aria-labelledby="featured-heading" className="py-16">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-3xl font-semibold tracking-tight">
            Featured projects
          </h2>
          <Link href="/projects/" className="text-sm font-medium text-accent underline-offset-4 hover:underline">
            All projects
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:col-span-2">
            <ProjectCard project={lead} />
          </div>
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
