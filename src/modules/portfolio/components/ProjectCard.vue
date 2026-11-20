<!-- Tarjeta de proyecto: imagen, tipo, nombre, resumen y tecnologías. "Ver detalle" despliega el rol
     y la lista completa de tecnologías (la tecnología filtrada se resalta). -->
<script setup lang="ts">
import { mdiChevronDown, mdiCodeBraces } from '@mdi/js'
import { computed, ref, useId } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import type { Project } from '../content/projects.content'
import { UI } from '../content/profile.content'
import type { TechName } from '../content/tech.content'
import { resolveTitle } from '../utils/project-filters'

const { project, highlight = null } = defineProps<{
  project: Project
  highlight?: TechName | null
}>()
const { t, locale } = useLocale()

const VISIBLE_TECH = 4
const open = ref(false)
const detailId = useId()

const shownTech = computed(() => {
  if (open.value) return project.tech
  const first = project.tech.slice(0, VISIBLE_TECH)
  // La tecnología filtrada siempre se ve, aunque esté más abajo en la lista.
  return highlight && !first.includes(highlight) && project.tech.includes(highlight)
    ? [...first.slice(0, VISIBLE_TECH - 1), highlight]
    : first
})
const hiddenCount = computed(() => project.tech.length - shownTech.value.length)
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-border transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-surface-tint">
      <img
        v-if="project.image"
        :src="project.image.src"
        :alt="t(project.image.alt)"
        loading="lazy"
        class="size-full transition-transform duration-500 group-hover:scale-[1.04]"
        :class="project.image.fit === 'contain' ? 'object-contain p-8' : 'object-cover object-top'"
      />
      <div
        v-else
        class="grid size-full place-items-center bg-gradient-to-br from-brand-navy via-brand to-brand-sky text-white"
        aria-hidden="true"
      >
        <AppIcon :path="mdiCodeBraces" :size="56" />
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <p class="text-xs font-bold tracking-wide text-brand uppercase">{{ t(project.type) }}</p>
      <h3 class="mt-1.5 text-xl leading-snug font-bold">
        {{ resolveTitle(project.title, locale) }}
      </h3>
      <p class="mt-3 leading-relaxed text-ink-muted">{{ t(project.summary) }}</p>

      <p
        v-if="open"
        :id="detailId"
        class="mt-4 rounded-2xl bg-surface-soft p-4 text-sm leading-relaxed"
      >
        <strong class="text-brand">{{ t(UI.myRole) }}:</strong> {{ t(project.role) }}
      </p>

      <div class="mt-auto pt-5">
        <p class="flex flex-wrap gap-1.5">
          <AppBadge
            v-for="tech in shownTech"
            :key="tech"
            :tone="tech === highlight ? 'brand' : 'neutral'"
          >
            {{ tech }}
          </AppBadge>
          <AppBadge v-if="hiddenCount > 0">+{{ hiddenCount }}</AppBadge>
        </p>
        <button
          type="button"
          class="mt-4 inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-brand hover:underline"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-controls="open ? detailId : undefined"
          @click="open = !open"
        >
          {{ open ? t(UI.showLess) : t(UI.showMore) }}
          <AppIcon
            :path="mdiChevronDown"
            :size="18"
            class="transition-transform duration-300"
            :class="open ? 'rotate-180' : ''"
          />
        </button>
      </div>
    </div>
  </article>
</template>
