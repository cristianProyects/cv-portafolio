<!-- Proyecto con ilustración interactiva: el mismo caso (rol, qué hice, tecnologías) a lo ancho, con
     la ilustración del producto a un lado. -->
<script setup lang="ts">
import { mdiAccountHardHatOutline, mdiCheckCircle, mdiInformationOutline } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import ExpandOnMobile from '@/shared/ui/ExpandOnMobile.vue'
import type { Project } from '../content/projects.content'
import { UI } from '../content/profile.content'
import type { TechName } from '../content/tech.content'
import { resolveTitle } from '../utils/project-filters'
import MarketsDemo from './MarketsDemo.vue'
import ToursDemo from './ToursDemo.vue'

const {
  project,
  flip = false,
  highlight = null,
} = defineProps<{ project: Project; flip?: boolean; highlight?: TechName | null }>()
const { t, locale } = useLocale()
</script>

<template>
  <article
    class="grid overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-border lg:grid-cols-[1.1fr_1fr]"
  >
    <div class="p-5 sm:p-7 md:p-10" :class="flip ? 'lg:order-last' : ''">
      <p class="flex flex-wrap gap-2">
        <AppBadge tone="brand">{{ t(project.type) }}</AppBadge>
        <AppBadge v-if="project.status" :tone="project.status.live ? 'live' : 'neutral'">
          {{ t(project.status.label) }}
        </AppBadge>
      </p>
      <h3 class="mt-4 text-2xl leading-tight font-extrabold md:text-3xl">
        {{ resolveTitle(project.title, locale) }}
      </h3>
      <p class="mt-4 leading-relaxed text-ink-muted">{{ t(project.summary) }}</p>

      <div class="mt-6 flex gap-3 rounded-2xl bg-accent-soft p-4 ring-1 ring-brand/10">
        <AppIcon :path="mdiAccountHardHatOutline" :size="22" class="shrink-0 text-brand" />
        <p class="text-sm leading-relaxed">
          <strong class="block text-brand">{{ t(UI.myRole) }}</strong>
          {{ t(project.role) }}
        </p>
      </div>

      <ExpandOnMobile :more-label="t(UI.showMore)" :less-label="t(UI.showLess)">
        <h4 class="mt-6 text-sm font-bold">{{ t(UI.whatIDid) }}</h4>
        <ul class="mt-3 space-y-2.5">
          <li v-for="(item, i) in project.highlights" :key="i" class="flex gap-2.5 leading-relaxed">
            <AppIcon :path="mdiCheckCircle" :size="20" class="mt-0.5 shrink-0 text-brand-sky" />
            <span>{{ t(item) }}</span>
          </li>
        </ul>

        <p class="mt-6 flex flex-wrap gap-1.5">
          <AppBadge
            v-for="tech in project.tech"
            :key="tech"
            :tone="tech === highlight ? 'brand' : 'neutral'"
          >
            {{ tech }}
          </AppBadge>
        </p>
      </ExpandOnMobile>
    </div>

    <div
      class="relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-surface-tint px-6 py-10 md:px-10"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-brand-sky/25"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-spark/15"
        aria-hidden="true"
      />
      <template v-if="project.media.kind === 'demo'">
        <ToursDemo v-if="project.media.demo === 'tours'" class="relative" />
        <MarketsDemo v-else class="relative" />
      </template>
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
