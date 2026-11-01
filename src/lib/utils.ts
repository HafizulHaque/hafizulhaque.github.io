export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso))
}

export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:')
}
