<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'
import { useLocale } from '@/composables/useLocale'

const route = useRoute()
const { locale, t } = useLocale()
const project = computed(() => projects.find(({ slug }) => slug === route.params.slug))
const labels = { repository: 'action.repository', live: 'action.live', product: 'action.product', download: 'action.download' } as const
</script>

<template>
  <article v-if="project" class="project-detail">
    <header class="project-detail-hero">
      <RouterLink class="back-link" to="/projects">← {{ t('action.backProjects') }}</RouterLink>
      <div class="project-meta"><span>{{ project.type[locale] }}</span><span>{{ project.year }}</span></div>
      <h1 tabindex="-1">{{ project.title }}</h1>
      <p class="lede">{{ project.summary[locale] }}</p>
      <ul class="tag-list"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
    </header>
    <img class="project-detail-image" :src="project.cover" :alt="project.coverAlt[locale]" width="1440" height="900">
    <div class="case-study-grid">
      <aside><span>{{ t('project.role') }}</span><strong>{{ project.role[locale] }}</strong></aside>
      <div class="case-study-copy">
        <section v-for="field in (['challenge', 'solution', 'contribution', 'outcome'] as const)" :key="field">
          <p class="eyebrow">{{ t(`project.${field}`) }}</p><h2>{{ project[field][locale] }}</h2>
        </section>
        <div class="button-row">
          <a v-for="(url, kind) in project.links" :key="kind" class="button button-quiet" :href="url" target="_blank" rel="noreferrer">{{ t(labels[kind]) }} ↗</a>
        </div>
      </div>
    </div>
  </article>
  <section v-else class="page-intro"><p class="eyebrow">{{ t('notFound.code') }}</p><h1 tabindex="-1">{{ t('notFound.title') }}</h1></section>
</template>
