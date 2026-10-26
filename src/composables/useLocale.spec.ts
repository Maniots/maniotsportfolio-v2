import { beforeEach, describe, expect, it, vi } from 'vitest'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.lang = 'en'
  vi.resetModules()
})

describe('locale state', () => {
  it('defaults to English and translates known keys', async () => {
    const { useLocale } = await import('./useLocale')
    const { locale, t } = useLocale()
    expect(locale.value).toBe('en')
    expect(t('nav.work')).toBe('Work')
  })

  it('restores and persists Italian', async () => {
    localStorage.setItem('portfolio-locale', 'it')
    const { useLocale } = await import('./useLocale')
    const { locale, setLocale, t } = useLocale()
    expect(locale.value).toBe('it')
    expect(t('nav.work')).toBe('Progetti')
    setLocale('en')
    expect(localStorage.getItem('portfolio-locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('falls back to the key when a translation is missing', async () => {
    const { useLocale } = await import('./useLocale')
    expect(useLocale().t('missing.key')).toBe('missing.key')
  })
})
