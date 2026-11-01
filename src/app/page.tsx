import { Experience } from '@/components/sections/Experience'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Hero } from '@/components/sections/Hero'
import { Skills } from '@/components/sections/Skills'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
    </>
  )
}
