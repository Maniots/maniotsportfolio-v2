import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('project catalogue', () => {
  it('contains the five approved projects with unique slugs', () => {
    expect(projects).toHaveLength(5)
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(5)
    expect(projects.map(({ title }) => title)).toEqual([
      'EverySync',
      'Runalys',
      'SkylineProjects',
      'TaxiXpress',
      'Ticketing Mobile App',
    ])
  })

  it('keeps required narrative fields bilingual', () => {
    for (const project of projects) {
      for (const field of ['summary', 'challenge', 'solution', 'contribution', 'outcome'] as const) {
        expect(project[field].en).not.toBe('')
        expect(project[field].it).not.toBe('')
      }
    }
  })

  it('maps EverySync to its real repository', () => {
    const everySync = projects.find(({ slug }) => slug === 'everysync')
    expect(everySync?.links.repository).toBe('https://github.com/Maniots/OneDriveSync')
  })
})
