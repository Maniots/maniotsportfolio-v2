<script setup lang="ts">
import type { Project } from '@/types/content'
import { useLocale } from '@/composables/useLocale'

defineProps<{ project: Project; index: number }>()
const { locale, t } = useLocale()
</script>

<template>
  <article v-reveal class="project-card" data-reveal>
    <RouterLink class="project-image" :to="`/projects/${project.slug}`" :aria-label="`${t('action.caseStudy')}: ${project.title}`">
      <img :src="project.cover" :alt="project.coverAlt[locale]" width="960" height="600" loading="lazy">
      <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
    </RouterLink>
    <div class="project-card-copy">
      <div class="project-meta"><span>{{ project.type[locale] }}</span><span>{{ project.year }}</span></div>
      <h3><RouterLink :to="`/projects/${project.slug}`">{{ project.title }}</RouterLink></h3>
      <p>{{ project.summary[locale] }}</p>
      <ul class="tag-list" aria-label="Technologies">
        <li v-for="technology in project.technologies.slice(0, 4)" :key="technology">{{ technology }}</li>
      </ul>
    </div>
  </article>
</template>
