<script setup lang="ts">
import { profile } from '@/data/profile'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <footer class="site-footer">
    <p>{{ t('footer.note') }}</p>
    <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
    <p>© {{ new Date().getFullYear() }}</p>
  </footer>
</template>
