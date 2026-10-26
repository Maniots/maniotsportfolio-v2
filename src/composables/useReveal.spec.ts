import { describe, expect, it, vi } from 'vitest'
import { revealOnScroll } from './useReveal'

describe('scroll reveal fallback', () => {
  it('reveals content immediately when IntersectionObserver is unavailable', () => {
    document.body.innerHTML = '<article data-reveal></article>'
    const original = window.IntersectionObserver
    Object.defineProperty(window, 'IntersectionObserver', { value: undefined, configurable: true })
    revealOnScroll(document)
    expect(document.querySelector<HTMLElement>('[data-reveal]')?.dataset.revealed).toBe('true')
    Object.defineProperty(window, 'IntersectionObserver', { value: original, configurable: true })
  })

  it('reveals intersecting content and disconnects the observer', () => {
    document.body.innerHTML = '<article data-reveal></article>'
    let callback: IntersectionObserverCallback = () => undefined
    const unobserve = vi.fn()
    const disconnect = vi.fn()
    class Observer {
      constructor(nextCallback: IntersectionObserverCallback) { callback = nextCallback }
      observe = vi.fn()
      unobserve = unobserve
      disconnect = disconnect
    }
    Object.defineProperty(window, 'IntersectionObserver', { value: Observer, configurable: true })
    const cleanup = revealOnScroll(document)
    const element = document.querySelector<HTMLElement>('[data-reveal]')!
    callback([{ isIntersecting: true, target: element } as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(element.dataset.revealed).toBe('true')
    expect(unobserve).toHaveBeenCalledWith(element)
    cleanup()
    expect(disconnect).toHaveBeenCalled()
  })
})
