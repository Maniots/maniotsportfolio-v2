<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="page-intro not-found">
    <p class="eyebrow">{{ t('notFound.code') }}</p>
    <h1 tabindex="-1">{{ t('notFound.title') }}</h1>
    <p class="lede">{{ t('notFound.body') }}</p>
    <RouterLink class="button button-primary" to="/">{{ t('notFound.home') }} <span>↗</span></RouterLink>
  </section>
</template>
