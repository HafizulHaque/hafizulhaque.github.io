import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { getAllProjects } from '@/lib/content/projects'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description: 'All projects by Hafizul Haque.',
  path: '/projects/',
})

export default function ProjectsPage() {
  const projects = getAllProjects()
  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-12 text-5xl font-semibold tracking-tight">Projects</h1>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
