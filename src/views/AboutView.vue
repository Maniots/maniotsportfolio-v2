<script setup lang="ts">
import CapabilityGrid from '@/components/CapabilityGrid.vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="page-intro about-intro">
    <p class="eyebrow">{{ t('about.kicker') }}</p>
    <h1 tabindex="-1">{{ t('about.title') }}</h1>
    <p class="lede">{{ t('about.body') }}</p>
  </section>
  <section class="story-grid">
    <p class="story-lead">{{ t('about.story') }}</p>
    <div class="story-side">
      <p>{{ t('about.goal') }}</p>
      <ol>
        <li>{{ t('about.principleA') }}</li>
        <li>{{ t('about.principleB') }}</li>
        <li>{{ t('about.principleC') }}</li>
      </ol>
    </div>
  </section>
  <CapabilityGrid />
</template>
