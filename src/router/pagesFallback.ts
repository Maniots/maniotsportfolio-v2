import type { Router } from 'vue-router'

const storageKey = 'portfolio-redirect'

export async function restorePagesRoute(targetRouter: Router) {
  const redirect = sessionStorage.getItem(storageKey)
  if (!redirect) return
  sessionStorage.removeItem(storageKey)
  await targetRouter.replace(redirect)
}
