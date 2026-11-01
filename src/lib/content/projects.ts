import type { Project } from '@/lib/types'
import { FEATURED_PROJECT_COUNT } from '@/content/site'
import { projects } from '@/content/projects'

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, FEATURED_PROJECT_COUNT)
}
