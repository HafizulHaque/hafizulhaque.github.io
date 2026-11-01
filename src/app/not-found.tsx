import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-mute">The page you were looking for does not exist.</p>
        <Link href="/" className="font-medium text-accent underline-offset-4 hover:underline">
          Back to home
        </Link>
      </Container>
    </section>
  )
}
