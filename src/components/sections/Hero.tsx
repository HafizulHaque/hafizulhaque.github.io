import { Container } from '@/components/ui/Container'
import { Portrait } from '@/components/portrait/Portrait'
import { site } from '@/content/site'

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_minmax(0,320px)]">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-mute">
            {site.role} · {site.location}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-mute">{site.intro}</p>
          <p className="text-sm text-mute">{site.education}</p>
        </div>
        <Portrait />
      </Container>
    </section>
  )
}
