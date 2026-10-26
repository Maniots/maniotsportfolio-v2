<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import CapabilityGrid from '@/components/CapabilityGrid.vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <HeroSection />
  <FeaturedProjects />
  <CapabilityGrid />
  <section class="closing-cta">
    <p>{{ t('section.contact') }}</p>
    <RouterLink to="/contact">{{ t('action.contact') }} <span>↗</span></RouterLink>
  </section>
</template>
