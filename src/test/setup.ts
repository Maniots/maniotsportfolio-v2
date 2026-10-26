import { afterEach } from 'vitest'

afterEach(() => {
  localStorage.clear()
  document.head.querySelectorAll('[data-test-meta]').forEach((node) => node.remove())
})
