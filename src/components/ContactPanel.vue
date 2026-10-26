<script setup lang="ts">
import { profile } from '@/data/profile'
import { useClipboard } from '@/composables/useClipboard'
import { useLocale } from '@/composables/useLocale'

const { copy, status } = useClipboard()
const { t } = useLocale()
</script>

<template>
  <div class="contact-panel">
    <a class="contact-email" :href="`mailto:${profile.email}`">
      <span>{{ t('contact.email') }}</span><strong>{{ profile.email }}</strong><b aria-hidden="true">↗</b>
    </a>
    <button class="copy-button" type="button" data-copy-email @click="copy(profile.email)">
      {{ t('contact.copy') }} <span aria-hidden="true">⧉</span>
    </button>
    <p class="copy-status" role="status" aria-live="polite">
      {{ status === 'success' ? t('contact.copied') : status === 'error' ? t('contact.copyError') : '' }}
    </p>
    <div class="social-links">
      <a :href="profile.social.github" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a :href="profile.social.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
    </div>
  </div>
</template>
