<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'

defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useLocale()

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Transition name="menu">
    <div v-if="open" class="mobile-menu" data-mobile-menu :aria-hidden="!open">
      <button class="menu-close" type="button" data-menu-close :aria-label="t('nav.close')" @click="emit('close')">×</button>
      <nav aria-label="Mobile navigation">
        <RouterLink to="/projects" @click="emit('close')"><span>01</span>{{ t('nav.work') }}</RouterLink>
        <RouterLink to="/about" @click="emit('close')"><span>02</span>{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/contact" @click="emit('close')"><span>03</span>{{ t('nav.contact') }}</RouterLink>
      </nav>
    </div>
  </Transition>
</template>
