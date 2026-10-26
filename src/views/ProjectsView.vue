<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="page-intro">
    <p class="eyebrow">{{ t('projects.kicker') }}</p>
    <h1 tabindex="-1">{{ t('projects.title') }}</h1>
    <p class="lede">{{ t('projects.body') }}</p>
  </section>
  <section class="all-projects" :aria-label="t('section.selected')">
    <ProjectCard v-for="(project, index) in projects" :key="project.slug" :project="project" :index="index" />
  </section>
</template>
