<!-- Monograma de empresa (no usamos logotipos de terceros): iniciales sobre un color de la paleta. -->
<script setup lang="ts">
import { mdiAccountCircleOutline } from '@mdi/js'
import AppIcon from '@/shared/ui/AppIcon.vue'
import type { EmployerId } from '../content/experience.content'

const { employer, size = 'md' } = defineProps<{
  employer: EmployerId
  size?: 'xs' | 'sm' | 'md'
}>()

const SIZES = {
  xs: 'size-6 rounded-lg text-[0.625rem]',
  sm: 'size-10 rounded-xl text-sm',
  md: 'size-14 rounded-2xl text-lg',
}
const ICON_SIZE = { xs: 16, sm: 22, md: 28 }

const MARKS: Record<EmployerId, { initials: string; class: string }> = {
  hitss: { initials: 'GH', class: 'bg-brand text-white' },
  esource: { initials: 'EC', class: 'bg-brand-sky text-brand-navy' },
  turing: { initials: 'TI', class: 'bg-brand-navy text-white' },
  mera: { initials: 'IM', class: 'bg-[#e6f6ee] text-[#0f7a43] ring-1 ring-[#0f7a43]/25' },
  personal: { initials: '', class: 'bg-[#fff1e9] text-spark-ink ring-1 ring-spark/30' },
}
</script>

<template>
  <span
    class="grid shrink-0 place-items-center font-extrabold tracking-tight"
    :class="[MARKS[employer].class, SIZES[size]]"
    aria-hidden="true"
  >
    <template v-if="MARKS[employer].initials">{{ MARKS[employer].initials }}</template>
    <AppIcon v-else :path="mdiAccountCircleOutline" :size="ICON_SIZE[size]" />
  </span>
</template>
