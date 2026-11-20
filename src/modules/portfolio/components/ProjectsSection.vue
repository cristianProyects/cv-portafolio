<!-- Proyectos: dos destacados y la lista filtrable por categoría y por tecnología (la tecnología se
     elige aquí o desde la sección de stack). -->
<script setup lang="ts">
import { mdiClose, mdiFilterVariant } from '@mdi/js'
import { computed } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { CATEGORY_LABELS, FEATURED, PROJECTS, PROJECTS_HEADING } from '../content/projects.content'
import { UI } from '../content/profile.content'
import type { TechName } from '../content/tech.content'
import { filterProjects, type CategoryFilter } from '../utils/project-filters'
import FeaturedProject from './FeaturedProject.vue'
import ProjectCard from './ProjectCard.vue'

const category = defineModel<CategoryFilter>('category', { required: true })
const tech = defineModel<TechName | null>('tech', { required: true })
const { t } = useLocale()

const CATEGORIES = ['all', 'work', 'freelance', 'nocode'] as const
const visible = computed(() => filterProjects(PROJECTS, category.value, tech.value))
</script>

<template>
  <section id="proyectos" class="bg-surface-soft py-20 md:py-28" aria-labelledby="projects-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="projects-title"
        :title="t(PROJECTS_HEADING.title)"
        :intro="t(PROJECTS_HEADING.intro)"
      />

      <div class="space-y-8">
        <FeaturedProject
          v-for="(project, i) in FEATURED"
          :key="project.id"
          :project="project"
          :flip="i % 2 === 1"
        />
      </div>

      <div id="proyectos-lista" class="mt-20 scroll-mt-24">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            class="flex flex-wrap gap-2"
            role="group"
            :aria-label="t({ es: 'Categoría', en: 'Category' })"
          >
            <button
              v-for="key in CATEGORIES"
              :key="key"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
              :class="
                category === key
                  ? 'bg-brand text-white shadow-md shadow-brand/25'
                  : 'bg-white text-ink-muted ring-1 ring-border hover:text-ink hover:ring-brand/30'
              "
              :aria-pressed="category === key ? 'true' : 'false'"
              @click="category = key"
            >
              {{ t(CATEGORY_LABELS[key]) }}
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

        <TransitionGroup
          v-if="visible.length"
          tag="div"
          name="cards"
          class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard
            v-for="project in visible"
            :key="project.id"
            :project="project"
            :highlight="tech"
          />
        </TransitionGroup>
        <p
          v-else
          class="mt-8 rounded-[var(--radius-card)] bg-white p-8 text-center text-ink-muted ring-1 ring-border"
        >
          {{ t(UI.noResults) }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards-enter-active,
.cards-leave-active {
  transition:
    opacity 0.35s var(--ease-out-expo),
    scale 0.35s var(--ease-out-expo);
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  scale: 0.96;
}
.cards-leave-active {
  position: absolute;
  visibility: hidden;
}
.cards-move {
  transition: translate 0.45s var(--ease-out-expo);
}
</style>
