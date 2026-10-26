export function observeRevealElement(element: HTMLElement) {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion || !window.IntersectionObserver) {
    element.dataset.revealed = 'true'
    return () => undefined
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const element = entry.target as HTMLElement
      element.dataset.revealed = 'true'
      observer.unobserve(element)
    }
  }, { threshold: 0.12 })
  observer.observe(element)
  return () => observer.disconnect()
}

export function revealOnScroll(root: ParentNode = document) {
  const cleanups = [...root.querySelectorAll<HTMLElement>('[data-reveal]')].map(observeRevealElement)
  return () => cleanups.forEach((cleanup) => cleanup())
}
