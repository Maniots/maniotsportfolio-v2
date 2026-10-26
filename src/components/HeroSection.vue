<script setup lang="ts">
import { profile } from '@/data/profile'
import { useLocale } from '@/composables/useLocale'

const { locale, t } = useLocale()
</script>

<template>
  <section class="hero section-grid">
    <div class="section-index"><span>00</span><span>{{ t('hero.kicker') }}</span></div>
    <div class="hero-copy">
      <h1 tabindex="-1"><span>{{ t('hero.titleA') }}</span><strong>{{ t('hero.titleB') }}</strong></h1>
      <p class="hero-intro">{{ t('hero.body') }}</p>
      <p class="availability"><i aria-hidden="true" />{{ profile.availability[locale] }}</p>
      <div class="button-row">
        <RouterLink class="button button-primary" to="/projects">{{ t('action.work') }} <span>↗</span></RouterLink>
        <RouterLink class="button button-quiet" to="/contact">{{ t('action.contact') }}</RouterLink>
      </div>
    </div>
    <div class="hero-mark" aria-hidden="true">MR</div>
  </section>
</template>
