import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import SiteHeader from './SiteHeader.vue'

const mountHeader = async () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }],
  })
  await router.push('/')
  await router.isReady()
  return mount(SiteHeader, { global: { plugins: [router] } })
}

describe('site header', () => {
  it('opens and closes the mobile navigation', async () => {
    const wrapper = await mountHeader()
    const trigger = wrapper.get('[data-menu-trigger]')
    expect(wrapper.find('[data-mobile-menu]').exists()).toBe(false)
    await trigger.trigger('click')
    expect(wrapper.get('[data-mobile-menu]').attributes('aria-hidden')).toBe('false')
    await wrapper.get('[data-menu-close]').trigger('click')
    expect(wrapper.find('[data-mobile-menu]').exists()).toBe(false)
  })

  it('switches language without changing route', async () => {
    const wrapper = await mountHeader()
    await wrapper.get('[data-locale-toggle]').trigger('click')
    expect(document.documentElement.lang).toBe('it')
    expect(wrapper.text()).toContain('Progetti')
  })

  it('closes the mobile navigation with Escape', async () => {
    const wrapper = await mountHeader()
    await wrapper.get('[data-menu-trigger]').trigger('click')
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-mobile-menu]').exists()).toBe(false)
  })
})
