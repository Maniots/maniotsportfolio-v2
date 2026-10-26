<script setup lang="ts">
import { profile } from '@/data/profile'
import { useLocale } from '@/composables/useLocale'

const { locale, t } = useLocale()
</script>

<template>
  <section class="content-section section-grid capability-section">
    <div class="section-index"><span>02</span><span>{{ t('section.capabilities') }}</span></div>
    <div class="capability-grid">
      <article v-for="(capability, index) in profile.capabilities" :key="capability.title.en" v-reveal data-reveal>
        <span class="capability-number">0{{ index + 1 }}</span>
        <h3>{{ capability.title[locale] }}</h3>
        <ul><li v-for="item in capability.items" :key="item">{{ item }}</li></ul>
      </article>
    </div>
  </section>
</template>
