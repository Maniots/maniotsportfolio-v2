import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { projects } from '@/data/projects'
import { useLocale } from './useLocale'

export function applyPageMeta(title: string, description: string) {
  document.title = title ? `${title} — Manuel Rizzo` : 'Manuel Rizzo — Developer'
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.append(meta)
  }
  meta.content = description
}

export function applyRouteMeta(route: RouteLocationNormalizedLoaded) {
  const { locale, t } = useLocale()
  const titles: Record<string, string> = {
    projects: t('nav.work'), about: t('nav.about'), contact: t('nav.contact'),
    'not-found': '404',
  }
  const project = route.name === 'project-detail'
    ? projects.find(({ slug }) => slug === route.params.slug)
    : undefined
  const title = project?.title ?? titles[String(route.name)] ?? ''
  const description = project?.summary[locale.value] ?? t('meta.home')
  applyPageMeta(title, description)
}
