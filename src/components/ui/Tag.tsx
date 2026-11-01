import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-rule px-2.5 py-0.5 text-xs font-medium text-mute">
      {children}
    </span>
  )
}
