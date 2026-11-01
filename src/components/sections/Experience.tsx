import { Container } from '@/components/ui/Container'
import { experience } from '@/content/experience'

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="py-16">
      <Container>
        <h2 id="experience-heading" className="mb-10 text-3xl font-semibold tracking-tight">
          Experience
        </h2>
        <ol className="flex flex-col gap-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="grid gap-2 border-t border-rule pt-6 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="text-sm text-mute">{job.period}</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">
                  {job.role} <span className="font-normal text-mute">at {job.company}</span>
                </h3>
                <p className="text-mute">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
