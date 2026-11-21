<!-- Caso de proyecto: imagen, tipo, nombre y cliente; qué es, mi rol, qué hice y con qué. Todo visible,
     sin desplegables: el rol es lo que más le importa a quien revisa el CV. -->
<script setup lang="ts">
import { mdiAccountHardHatOutline, mdiCheckCircle, mdiCodeBraces, mdiDomain } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import { EMPLOYER_LABELS, type Project } from '../content/projects.content'
import { UI } from '../content/profile.content'
import type { TechName } from '../content/tech.content'
import { resolveTitle } from '../utils/project-filters'
import CompanyMark from './CompanyMark.vue'

const {
  project,
  highlight = null,
  showCompany = false,
} = defineProps<{
  project: Project
  highlight?: TechName | null
  showCompany?: boolean
}>()
const { t, locale } = useLocale()
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-border transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
  >
    <div
      class="relative overflow-hidden bg-surface-tint"
      :class="
        project.media.kind === 'image' && project.media.fit === 'contain' ? 'h-40' : 'aspect-[2/1]'
      "
    >
      <img
        v-if="project.media.kind === 'image'"
        :src="project.media.src"
        :alt="t(project.media.alt)"
        loading="lazy"
        class="size-full transition-transform duration-500 group-hover:scale-[1.04]"
        :class="
          project.media.fit === 'contain'
            ? 'bg-white object-contain px-10 pt-12 pb-6'
            : 'object-cover object-top'
        "
      />
      <div
        v-else
        class="grid size-full place-items-center bg-gradient-to-br from-brand-navy via-brand to-brand-sky text-white"
        aria-hidden="true"
      >
        <AppIcon :path="mdiCodeBraces" :size="56" />
      </div>
      <span class="absolute top-4 left-4">
        <AppBadge tone="brand" class="bg-white/95 shadow-sm">{{ t(project.type) }}</AppBadge>
      </span>
    </div>

    <div class="flex flex-1 flex-col p-6 md:p-7">
      <p v-if="showCompany" class="mb-3 flex items-center gap-2 text-xs font-bold text-ink-muted">
        <CompanyMark :employer="project.employer" size="xs" />
        {{ t(EMPLOYER_LABELS[project.employer]) }}
      </p>
      <h3 class="text-xl leading-snug font-extrabold">
        {{ resolveTitle(project.title, locale) }}
      </h3>
      <p
        v-if="project.client"
        class="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-ink-muted"
      >
        <AppIcon :path="mdiDomain" :size="16" class="text-brand-sky" />
        {{ t(UI.client) }}: <span class="text-ink">{{ project.client }}</span>
      </p>
      <p class="mt-3 leading-relaxed text-ink-muted">{{ t(project.summary) }}</p>

      <div class="mt-5 flex gap-3 rounded-2xl bg-accent-soft p-4 ring-1 ring-brand/10">
        <AppIcon :path="mdiAccountHardHatOutline" :size="22" class="shrink-0 text-brand" />
        <p class="text-sm leading-relaxed">
          <strong class="block text-brand">{{ t(UI.myRole) }}</strong>
          {{ t(project.role) }}
        </p>
      </div>

      <h4 class="mt-5 text-sm font-bold">{{ t(UI.whatIDid) }}</h4>
      <ul class="mt-2.5 space-y-2">
        <li
          v-for="(item, i) in project.highlights"
          :key="i"
          class="flex gap-2.5 text-sm leading-relaxed"
        >
          <AppIcon :path="mdiCheckCircle" :size="18" class="mt-0.5 shrink-0 text-brand-sky" />
          <span>{{ t(item) }}</span>
        </li>
      </ul>

      <p class="mt-auto flex flex-wrap gap-1.5 pt-6">
        <AppBadge
          v-for="tech in project.tech"
          :key="tech"
          :tone="tech === highlight ? 'brand' : 'neutral'"
        >
          {{ tech }}
        </AppBadge>
      </p>
    </div>
  </article>
</template>
