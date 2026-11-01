export type Project = {
  slug: string
  title: string
  summary: string
  year: number
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  cover?: string
  coverAlt?: string
}

export type Post = PostMeta & {
  source: string
}
