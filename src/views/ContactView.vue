<script setup lang="ts">
import ContactPanel from '@/components/ContactPanel.vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="page-intro contact-view">
    <p class="eyebrow">{{ t('contact.kicker') }}</p>
    <h1 tabindex="-1">{{ t('contact.title') }}</h1>
    <p class="lede">{{ t('contact.body') }}</p>
    <ContactPanel />
  </section>
</template>
