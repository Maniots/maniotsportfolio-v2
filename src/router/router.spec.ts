import { describe, expect, it } from 'vitest'
import { routes } from './index'

describe('portfolio routes', () => {
  it('declares every public route and the fallback', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '/',
      '/projects',
      '/projects/:slug',
      '/about',
      '/contact',
      '/:pathMatch(.*)*',
    ])
  })

  it('names the dynamic project route', () => {
    expect(routes.find((route) => route.path === '/projects/:slug')?.name).toBe('project-detail')
  })
})
