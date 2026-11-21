<!-- Proyectos hechos en empresas: filtro por empresa o tecnología y paginación de 4 en 4 (2×2) para no alargar
     la página. Cada tarjeta dice de qué empresa es. Los personales viven en su propia sección. -->
<script setup lang="ts">
import { mdiChevronLeft, mdiChevronRight, mdiClose, mdiFilterVariant } from '@mdi/js'
import { computed, watch } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { EMPLOYER_LABELS, PROJECTS_HEADING, WORK_PROJECTS } from '../content/projects.content'
import { UI } from '../content/profile.content'
import type { TechName } from '../content/tech.content'
import { filterProjects, PAGE_SIZE, type EmployerFilter } from '../utils/project-filters'
import ProjectCard from './ProjectCard.vue'

const employer = defineModel<EmployerFilter>('employer', { required: true })
const tech = defineModel<TechName | null>('tech', { required: true })
const page = defineModel<number>('page', { required: true })
const { focused = null } = defineProps<{ focused?: string | null }>()
const { t } = useLocale()

const FILTERS = ['all', 'hitss', 'esource', 'turing', 'mera'] as const
const visible = computed(() => filterProjects(WORK_PROJECTS, employer.value, tech.value))
const pages = computed(() => Math.max(1, Math.ceil(visible.value.length / PAGE_SIZE)))
const current = computed(() =>
  visible.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE),
)
const countOf = (key: EmployerFilter) => filterProjects(WORK_PROJECTS, key, tech.value).length

// Cambiar de filtro vuelve a la primera página.
watch([employer, tech], () => (page.value = 1), { flush: 'sync' })

function goTo(next: number) {
  page.value = Math.min(pages.value, Math.max(1, next))
  const list = document.getElementById('proyectos-lista')
  if (list && list.getBoundingClientRect().top < 0) list.scrollIntoView({ block: 'start' })
}
</script>

<template>
  <section id="proyectos" class="bg-surface-soft py-20 md:py-28" aria-labelledby="projects-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="projects-title"
        :title="t(PROJECTS_HEADING.title)"
        :intro="t(PROJECTS_HEADING.intro)"
      />

      <div
        id="proyectos-lista"
        class="flex scroll-mt-24 flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div
          class="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0 md:pb-0"
          role="group"
          :aria-label="t({ es: 'Filtrar por empresa', en: 'Filter by company' })"
        >
          <button
            v-for="key in FILTERS"
            :key="key"
            type="button"
            class="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            :class="
              employer === key
                ? 'bg-brand text-white shadow-md shadow-brand/25'
                : 'bg-white text-ink-muted ring-1 ring-border hover:text-ink hover:ring-brand/30'
            "
            :aria-pressed="employer === key ? 'true' : 'false'"
            @click="employer = key"
          >
            {{ t(EMPLOYER_LABELS[key]) }}
            <span
              class="tabular rounded-full px-1.5 text-xs"
              :class="employer === key ? 'bg-white/20' : 'bg-surface-soft text-ink-muted'"
              >{{ countOf(key) }}</span
            >
          </button>
        </div>

        <p v-if="tech" class="flex items-center gap-2 text-sm font-semibold" aria-live="polite">
          <AppIcon :path="mdiFilterVariant" :size="18" class="text-brand" />
          {{ t(UI.filterBy) }}
          <button
            type="button"
            class="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-white hover:bg-brand-navy"
            :aria-label="`${t(UI.clearFilter)}: ${tech}`"
            @click="tech = null"
          >
            {{ tech }}
            <AppIcon :path="mdiClose" :size="16" />
          </button>
        </p>
      </div>

      <template v-if="visible.length">
        <Transition name="page" mode="out-in">
          <div :key="`${employer}-${tech}-${page}`" class="mt-8 grid gap-6 md:grid-cols-2">
            <div
              v-for="project in current"
              :id="`proyecto-${project.id}`"
              :key="project.id"
              class="scroll-mt-28 rounded-[var(--radius-card)] transition-shadow duration-500"
              :class="
                focused === project.id
                  ? 'ring-4 ring-brand-sky/60 ring-offset-4 ring-offset-surface-soft'
                  : ''
              "
            >
              <ProjectCard :project="project" :highlight="tech" show-company class="h-full" />
            </div>
          </div>
        </Transition>

        <nav
          v-if="pages > 1"
          class="mt-10 flex items-center justify-center gap-2"
          :aria-label="t({ es: 'Páginas de proyectos', en: 'Project pages' })"
        >
          <button
            type="button"
            class="grid size-11 place-items-center rounded-full bg-white text-brand ring-1 ring-border transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="page === 1"
            :aria-label="t(UI.prev)"
            @click="goTo(page - 1)"
          >
            <AppIcon :path="mdiChevronLeft" :size="22" />
          </button>
          <button
            v-for="n in pages"
            :key="n"
            type="button"
            class="tabular grid size-11 place-items-center rounded-full text-sm font-bold transition-colors"
            :class="
              n === page
                ? 'bg-brand text-white shadow-md shadow-brand/25'
                : 'bg-white text-ink-muted ring-1 ring-border hover:text-brand'
            "
            :aria-label="`${t(UI.page)} ${n}`"
            :aria-current="n === page ? 'page' : undefined"
            @click="goTo(n)"
          >
            {{ n }}
          </button>
          <button
            type="button"
            class="grid size-11 place-items-center rounded-full bg-white text-brand ring-1 ring-border transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="page === pages"
            :aria-label="t(UI.next)"
            @click="goTo(page + 1)"
          >
            <AppIcon :path="mdiChevronRight" :size="22" />
          </button>
        </nav>
      </template>
      <p
        v-else
        class="mt-8 rounded-[var(--radius-card)] bg-white p-8 text-center text-ink-muted ring-1 ring-border"
      >
        {{ t(UI.noResults) }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.25s var(--ease-out-expo),
    translate 0.25s var(--ease-out-expo);
}
.page-enter-from {
  opacity: 0;
  translate: 0 8px;
}
.page-leave-to {
  opacity: 0;
}
</style>
