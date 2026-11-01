import { describe, expect, it } from 'vitest'
import { formatDate, isExternalUrl } from './utils'

describe('formatDate', () => {
  it('formats an ISO date in UTC', () => {
    expect(formatDate('2024-03-05')).toBe('March 5, 2024')
  })
})

describe('isExternalUrl', () => {
  it('detects absolute, protocol-relative and mailto links', () => {
    expect(isExternalUrl('https://example.com')).toBe(true)
    expect(isExternalUrl('//example.com')).toBe(true)
    expect(isExternalUrl('mailto:a@b.co')).toBe(true)
  })

  it('treats internal paths as internal', () => {
    expect(isExternalUrl('/projects/')).toBe(false)
  })
})
