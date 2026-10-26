import { mount, type VueWrapper } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'
import HomeView from './HomeView.vue'
import ProjectsView from './ProjectsView.vue'
import AboutView from './AboutView.vue'
import NotFoundView from './NotFoundView.vue'

const mountView = async (component: object): Promise<VueWrapper> => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component }],
  })
  await router.push('/')
  await router.isReady()
  return mount(component, { global: { plugins: [router] } })
}

describe('portfolio views', () => {
  it.each([
    [HomeView, 'Creative code.'],
    [ProjectsView, 'Five projects'],
    [AboutView, 'Curious by nature'],
    [NotFoundView, 'off-map'],
  ])('renders its main editorial content', async (component, copy) => {
    const wrapper = await mountView(component)
    expect(wrapper.text()).toContain(copy)
    wrapper.unmount()
  })
})
