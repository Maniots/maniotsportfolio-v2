import { afterEach } from 'vitest'

Object.defineProperty(window, 'scrollTo', { value: () => undefined, writable: true })

afterEach(() => {
  localStorage.clear()
  document.head.querySelectorAll('[data-test-meta]').forEach((node) => node.remove())
})
