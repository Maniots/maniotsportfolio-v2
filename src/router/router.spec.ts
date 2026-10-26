import { describe, expect, it } from 'vitest'
import { router, routes } from './index'

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

  it('loads every lazy route component', async () => {
    for (const route of routes) {
      expect(typeof route.component).toBe('function')
      await (route.component as () => Promise<unknown>)()
    }
  })

  it('runs navigation effects after a route change', async () => {
    await router.push('/projects')
    await router.isReady()
    expect(document.title).toContain('Work')
  })
})
