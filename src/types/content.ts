export type Locale = 'en' | 'it'
export type LocalizedText = Record<Locale, string>

export interface ProjectLinks {
  repository?: string
  live?: string
  product?: string
  download?: string
}

export interface Project {
  slug: string
  title: string
  type: LocalizedText
  summary: LocalizedText
  challenge: LocalizedText
  solution: LocalizedText
  contribution: LocalizedText
  outcome: LocalizedText
  year: string
  status: 'active' | 'completed'
  role: LocalizedText
  technologies: string[]
  cover: string
  coverAlt: LocalizedText
  links: ProjectLinks
  featured: boolean
}

export interface Capability {
  title: LocalizedText
  items: string[]
}
