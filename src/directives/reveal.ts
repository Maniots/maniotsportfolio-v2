import type { ObjectDirective } from 'vue'
import { observeRevealElement } from '@/composables/useReveal'

const cleanups = new WeakMap<HTMLElement, () => void>()

export const revealDirective: ObjectDirective<HTMLElement> = {
  mounted(element) {
    cleanups.set(element, observeRevealElement(element))
  },
  beforeUnmount(element) {
    cleanups.get(element)?.()
    cleanups.delete(element)
  },
}
