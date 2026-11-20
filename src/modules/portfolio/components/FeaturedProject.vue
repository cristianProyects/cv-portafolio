<!-- Proyecto destacado: texto y rol de un lado, ilustración interactiva del producto del otro. -->
<script setup lang="ts">
import { mdiCheck, mdiInformationOutline } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import type { FeaturedProject } from '../content/projects.content'
import { UI } from '../content/profile.content'
import { resolveTitle } from '../utils/project-filters'
import MarketsDemo from './MarketsDemo.vue'
import ToursDemo from './ToursDemo.vue'

const { project, flip = false } = defineProps<{ project: FeaturedProject; flip?: boolean }>()
const { t, locale } = useLocale()
</script>

<template>
  <article
    data-reveal
    class="grid overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-border lg:grid-cols-2"
  >
    <div class="p-7 md:p-10" :class="flip ? 'lg:order-last' : ''">
      <p class="flex flex-wrap gap-2">
        <AppBadge tone="brand">{{ t(project.type) }}</AppBadge>
        <AppBadge :tone="project.live ? 'live' : 'neutral'">{{ t(project.status) }}</AppBadge>
      </p>
      <h3 class="mt-4 text-2xl leading-tight font-extrabold md:text-3xl">
        {{ resolveTitle(project.title, locale) }}
      </h3>
      <p class="mt-4 leading-relaxed text-ink-muted">{{ t(project.summary) }}</p>
      <ul class="mt-5 space-y-2.5">
        <li v-for="(point, i) in project.points" :key="i" class="flex gap-3">
          <span
            class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white"
          >
            <AppIcon :path="mdiCheck" :size="14" />
          </span>
          <span class="leading-relaxed">{{ t(point) }}</span>
        </li>
      </ul>
      <p class="mt-5 text-sm leading-relaxed">
        <strong class="text-brand">{{ t(UI.myRole) }}:</strong> {{ t(project.role) }}
      </p>
      <p class="mt-5 flex flex-wrap gap-1.5">
        <AppBadge v-for="tech in project.tech" :key="tech">{{ tech }}</AppBadge>
      </p>
    </div>

    <div
      class="relative flex flex-col items-center justify-center gap-3 bg-surface-tint px-6 py-10 md:px-10"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-brand-sky/25"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-spark/15"
        aria-hidden="true"
      />
      <ToursDemo v-if="project.demo === 'tours'" class="relative" />
      <MarketsDemo v-else class="relative" />
      <p class="relative flex items-center gap-1.5 text-xs font-medium text-ink-muted">
        <AppIcon :path="mdiInformationOutline" :size="14" />
        {{
          t({
            es: 'Ilustración interactiva con datos de ejemplo',
            en: 'Interactive illustration with sample data',
          })
        }}
      </p>
    </div>
  </article>
</template>
