<!-- Encabezado de sección: título grande y una entrada corta (sin etiqueta encima del título).
     `headingId` permite que la sección se nombre con aria-labelledby. -->
<script setup lang="ts">
const {
  title,
  intro,
  headingId,
  align = 'start',
  tone = 'default',
} = defineProps<{
  title: string
  intro?: string
  headingId?: string
  align?: 'start' | 'center'
  tone?: 'default' | 'on-brand'
}>()
</script>

<template>
  <header
    data-reveal
    class="mb-10 max-w-2xl md:mb-14"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <h2 :id="headingId" class="text-3xl leading-tight font-extrabold md:text-5xl">{{ title }}</h2>
    <p
      v-if="intro"
      class="mt-4 text-lg leading-relaxed"
      :class="tone === 'on-brand' ? 'text-white/85' : 'text-ink-muted'"
    >
      {{ intro }}
    </p>
  </header>
</template>
