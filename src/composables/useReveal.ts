export function revealOnScroll(root: ParentNode = document) {
  const elements = [...root.querySelectorAll<HTMLElement>('[data-reveal]')]
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion || !window.IntersectionObserver) {
    elements.forEach((element) => { element.dataset.revealed = 'true' })
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
  elements.forEach((element) => observer.observe(element))
  return () => observer.disconnect()
}
