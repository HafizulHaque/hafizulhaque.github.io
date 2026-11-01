import type { Project } from '@/lib/types'

// Placeholder entries. Replace with real projects. The first FEATURED_PROJECT_COUNT
// entries appear on the home page.
export const projects: Project[] = [
  {
    slug: 'robi-distribution-management',
    title: 'Robi Distribution Management System',
    summary: 'Internal web application for managing distribution workflows.',
    year: 2024,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'Placeholder project description.',
    year: 2023,
    tags: ['React', 'Node.js'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/HafizulHaque',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'Placeholder project description.',
    year: 2023,
    tags: ['Spring Boot', 'Docker'],
    repoUrl: 'https://github.com/HafizulHaque',
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    summary: 'Placeholder project description.',
    year: 2022,
    tags: ['Angular'],
    liveUrl: 'https://example.com',
  },
]
