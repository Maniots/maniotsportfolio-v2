import { readonly, ref } from 'vue'
import { en, type TranslationKey } from '@/locales/en'
import { it } from '@/locales/it'
import type { Locale } from '@/types/content'

const storageKey = 'portfolio-locale'
const dictionaries = { en, it }
const stored = typeof window === 'undefined' ? null : localStorage.getItem(storageKey)
const initialLocale: Locale = stored === 'it' ? 'it' : 'en'
const currentLocale = ref<Locale>(initialLocale)

if (typeof document !== 'undefined') document.documentElement.lang = initialLocale

export function useLocale() {
  const setLocale = (nextLocale: Locale) => {
    currentLocale.value = nextLocale
    if (typeof window !== 'undefined') localStorage.setItem(storageKey, nextLocale)
    if (typeof document !== 'undefined') document.documentElement.lang = nextLocale
  }

  const toggleLocale = () => setLocale(currentLocale.value === 'en' ? 'it' : 'en')

  const t = (key: string): string => {
    const dictionary = dictionaries[currentLocale.value]
    return dictionary[key as TranslationKey] ?? key
  }

  return {
    locale: readonly(currentLocale),
    setLocale,
    toggleLocale,
    t,
  }
}
