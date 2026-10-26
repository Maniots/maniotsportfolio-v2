import { describe, expect, it } from 'vitest'
import { applyPageMeta, applyRouteMeta } from '@/composables/usePageMeta'

describe('page metadata', () => {
  it('updates the document title and description', () => {
    applyPageMeta('Selected work', 'Five selected projects.')
    expect(document.title).toBe('Selected work — Manuel Rizzo')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Five selected projects.')
  })

  it('uses the portfolio name without a page title', () => {
    applyPageMeta('', 'Portfolio description')
    expect(document.title).toBe('Manuel Rizzo — Developer')
  })

  it('derives metadata for standard and project routes', () => {
    applyRouteMeta({ name: 'about', params: {} } as never)
    expect(document.title).toContain('About')
    applyRouteMeta({ name: 'project-detail', params: { slug: 'everysync' } } as never)
    expect(document.title).toContain('EverySync')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('Sync selected')
  })
})
