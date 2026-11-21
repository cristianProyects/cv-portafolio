<!-- Proyectos personales y freelance: sección propia (fondo blanco tras la de empresas, misma paleta
     azul del sitio). Cada proyecto se muestra a lo ancho con su ilustración interactiva. -->
<script setup lang="ts">
import { mdiRocketLaunchOutline } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import { PERSONAL_HEADING, PERSONAL_PROJECTS } from '../content/projects.content'
import type { TechName } from '../content/tech.content'
import FeaturedProject from './FeaturedProject.vue'
import ProjectCard from './ProjectCard.vue'

const { focused = null, highlight = null } = defineProps<{
  focused?: string | null
  highlight?: TechName | null
}>()
const { t } = useLocale()
</script>

<template>
  <section
    id="personales"
    class="relative overflow-hidden bg-white py-20 md:py-28"
    aria-labelledby="personal-title"
  >
    <div
      class="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-brand-sky/12 blur-3xl"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-6xl px-5">
      <header class="mb-12 max-w-3xl md:mb-16">
        <p
          class="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-bold text-brand ring-1 ring-brand/15"
        >
          <AppIcon :path="mdiRocketLaunchOutline" :size="16" />
          {{ PERSONAL_PROJECTS.length }} {{ t({ es: 'proyectos', en: 'projects' }) }} ·
          {{ t({ es: 'de la idea a producción', en: 'from idea to production' }) }}
        </p>
        <h2
          id="personal-title"
          class="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight md:text-5xl"
        >
          {{ t(PERSONAL_HEADING.title) }}
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-muted">{{ t(PERSONAL_HEADING.intro) }}</p>
      </header>

      <div class="space-y-8">
        <div
          v-for="(project, i) in PERSONAL_PROJECTS"
          :id="`proyecto-${project.id}`"
          :key="project.id"
          data-reveal
          class="scroll-mt-24 rounded-[2rem] transition-shadow duration-500"
          :class="focused === project.id ? 'ring-4 ring-brand-sky/60 ring-offset-4' : ''"
        >
          <FeaturedProject
            v-if="project.media.kind === 'demo'"
            :project="project"
            :flip="i % 2 === 1"
            :highlight="highlight"
          />
          <ProjectCard v-else :project="project" :highlight="highlight" />
        </div>
      </div>
    </div>
  </section>
</template>
