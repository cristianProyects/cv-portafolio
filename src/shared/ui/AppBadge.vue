<!-- Etiqueta tipo pastilla (tecnología, tipo de proyecto, estado). -->
<script setup lang="ts">
const { tone = 'neutral' } = defineProps<{
  tone?: 'neutral' | 'brand' | 'live' | 'on-brand'
}>()

const tones = {
  neutral: 'bg-surface-soft text-ink-muted ring-1 ring-border',
  brand: 'bg-accent-soft text-brand ring-1 ring-brand/15',
  live: 'bg-[#fff1e9] text-spark-ink ring-1 ring-spark/30',
  'on-brand': 'bg-white/12 text-white ring-1 ring-white/25',
}
</script>

<template>
  <span
    :class="tones[tone]"
    class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap"
  >
    <slot />
  </span>
</template>
