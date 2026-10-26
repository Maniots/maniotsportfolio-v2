import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ContactPanel from './ContactPanel.vue'

describe('contact panel', () => {
  it('offers direct email and confirms clipboard copy', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn().mockResolvedValue(undefined) }, configurable: true,
    })
    const wrapper = mount(ContactPanel)
    expect(wrapper.get('a[href="mailto:manuelrizzo2006@gmail.com"]').exists()).toBe(true)
    await wrapper.get('[data-copy-email]').trigger('click')
    await Promise.resolve()
    expect(wrapper.get('[role="status"]').text()).toContain('Email copied')
  })
})
