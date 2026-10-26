import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'
import ProjectDetailView from './ProjectDetailView.vue'

describe('project detail view', () => {
  it('renders the matching case study and verified links', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/projects/:slug', component: ProjectDetailView }],
    })
    await router.push('/projects/everysync')
    await router.isReady()
    const wrapper = mount(ProjectDetailView, { global: { plugins: [router] } })

    expect(wrapper.get('h1').text()).toBe('EverySync')
    expect(wrapper.text()).toContain('Challenge')
    expect(wrapper.get('a[href="https://github.com/Maniots/OneDriveSync"]').exists()).toBe(true)
  })

  it('renders recovery content for an unknown slug', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/projects/:slug', component: ProjectDetailView }],
    })
    await router.push('/projects/unknown')
    await router.isReady()
    const wrapper = mount(ProjectDetailView, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('off-map')
  })
})
