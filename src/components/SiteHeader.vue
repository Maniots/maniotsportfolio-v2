<script setup lang="ts">
import { nextTick, ref } from 'vue'
import MobileNavigation from './MobileNavigation.vue'
import { useLocale } from '@/composables/useLocale'

const menuOpen = ref(false)
const trigger = ref<HTMLButtonElement>()
const { locale, t, toggleLocale } = useLocale()

const closeMenu = async () => {
  menuOpen.value = false
  await nextTick()
  trigger.value?.focus()
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="wordmark" to="/" :aria-label="`${t('nav.home')} — Manuel Rizzo`">MR<span>.</span></RouterLink>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <RouterLink to="/projects">{{ t('nav.work') }}</RouterLink>
      <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
      <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
    </nav>
    <div class="header-actions">
      <button class="locale-toggle" type="button" data-locale-toggle :aria-label="t('locale.switch')" @click="toggleLocale">
        {{ locale === 'en' ? 'IT' : 'EN' }}
      </button>
      <button ref="trigger" class="menu-trigger" type="button" data-menu-trigger :aria-expanded="menuOpen" :aria-label="t('nav.menu')" @click="menuOpen = true">
        <i aria-hidden="true" /><i aria-hidden="true" />
      </button>
    </div>
    <MobileNavigation :open="menuOpen" @close="closeMenu" />
  </header>
</template>
