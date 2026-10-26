import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { restorePagesRoute } from './pagesFallback'

describe('GitHub Pages route restoration', () => {
  it('restores and clears a route saved by 404.html', async () => {
    sessionStorage.setItem('portfolio-redirect', '/projects/everysync?source=direct')
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/projects/:slug', component: { template: '<div />' } }],
    })
    await restorePagesRoute(router)
    expect(router.currentRoute.value.fullPath).toBe('/projects/everysync?source=direct')
    expect(sessionStorage.getItem('portfolio-redirect')).toBeNull()
  })

  it('leaves the initial route alone without a saved redirect', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes: [] })
    await restorePagesRoute(router)
    expect(router.currentRoute.value.fullPath).toBe('/')
  })
})
