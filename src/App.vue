<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main id="main-content">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in"><component :is="Component" @vue:mounted="startReveal" /></Transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { useLocale } from '@/composables/useLocale'
import { applyRouteMeta } from '@/composables/usePageMeta'
import { revealOnScroll } from '@/composables/useReveal'
import { router } from '@/router'

const { locale } = useLocale()
watch(locale, () => applyRouteMeta(router.currentRoute.value))
let stopReveal: () => void = () => undefined
function startReveal() {
  stopReveal()
  stopReveal = revealOnScroll()
}
onBeforeUnmount(() => stopReveal())
</script>
