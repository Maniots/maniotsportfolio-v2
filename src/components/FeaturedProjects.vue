<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const featured = projects.filter(({ featured }) => featured).slice(0, 3)
</script>

<template>
  <section class="content-section section-grid">
    <div class="section-index"><span>01</span><span>{{ t('section.selected') }}</span></div>
    <div class="project-list">
      <ProjectCard v-for="(project, index) in featured" :key="project.slug" :project="project" :index="index" />
      <RouterLink class="text-link" to="/projects">{{ t('action.allProjects') }} <span>↗</span></RouterLink>
    </div>
  </section>
</template>
