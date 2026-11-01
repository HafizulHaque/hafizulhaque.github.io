import { Container } from '@/components/ui/Container'
import { Tag } from '@/components/ui/Tag'
import { skills } from '@/content/skills'

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="py-16">
      <Container>
        <h2 id="skills-heading" className="mb-10 text-3xl font-semibold tracking-tight">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-mute">{group.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
