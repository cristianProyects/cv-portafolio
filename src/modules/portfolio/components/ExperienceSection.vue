<!-- Experiencia como línea de tiempo: a la izquierda la empresa, el periodo y la duración; a la derecha
     el puesto, el contexto, lo que hice, los proyectos de ese puesto (enlazados) y las tecnologías. -->
<script setup lang="ts">
import { mdiArrowRight, mdiCheckCircle } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { EXPERIENCE_HEADING, JOBS } from '../content/experience.content'
import { UI } from '../content/profile.content'
import { PROJECTS } from '../content/projects.content'
import { formatDuration, formatPeriod, monthsBetween } from '../utils/dates'
import { resolveTitle } from '../utils/project-filters'
import CompanyMark from './CompanyMark.vue'

const emit = defineEmits<{ 'show-project': [id: string] }>()
const { t, locale } = useLocale()
const now = new Date()

const projectsOf = (jobId: string) => PROJECTS.filter((p) => p.employer === jobId)
</script>

<template>
  <section id="experiencia" class="py-20 md:py-28" aria-labelledby="experience-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="experience-title"
        :title="t(EXPERIENCE_HEADING.title)"
        :intro="t(EXPERIENCE_HEADING.intro)"
      />

      <ol class="space-y-12 md:space-y-16">
        <li
          v-for="job in JOBS"
          :key="job.id"
          data-reveal
          class="relative grid gap-5 md:grid-cols-[15rem_1fr] md:gap-10"
        >
          <!-- Empresa y periodo -->
          <header class="md:sticky md:top-24 md:self-start">
            <div class="flex items-center gap-4 md:flex-col md:items-start">
              <CompanyMark :employer="job.id" />
              <div>
                <p class="text-lg leading-tight font-bold">{{ job.company }}</p>
                <p v-if="job.client" class="text-sm font-semibold text-ink-muted">
                  {{ t(UI.client) }}: <span class="text-brand">{{ job.client }}</span>
                </p>
              </div>
            </div>
            <p class="tabular mt-4 text-sm font-semibold text-ink">
              {{ formatPeriod(job.start, job.end, locale) }}
            </p>
            <p class="mt-2 flex flex-wrap gap-2">
              <AppBadge v-if="!job.end" tone="live">{{ t(UI.current) }}</AppBadge>
              <AppBadge>{{
                formatDuration(monthsBetween(job.start, job.end, now), locale)
              }}</AppBadge>
            </p>
          </header>

          <!-- Detalle -->
          <article
            class="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-border"
          >
            <img
              v-if="job.image"
              :src="job.image.src"
              :alt="t(job.image.alt)"
              loading="lazy"
              width="960"
              height="1280"
              class="h-40 w-full object-cover object-[50%_32%] md:h-52"
            />
            <div class="p-6 md:p-8">
              <h3 class="text-xl leading-snug font-extrabold md:text-2xl">{{ t(job.role) }}</h3>
              <p class="mt-3 leading-relaxed text-ink-muted">{{ t(job.context) }}</p>

              <h4 class="mt-6 text-sm font-bold text-brand">{{ t(UI.whatIDid) }}</h4>
              <ul class="mt-3 space-y-3">
                <li
                  v-for="(item, i) in job.highlights"
                  :key="i"
                  class="flex gap-3 leading-relaxed text-ink"
                >
                  <AppIcon :path="mdiCheckCircle" :size="20" class="mt-0.5 text-brand-sky" />
                  <span>{{ t(item) }}</span>
                </li>
              </ul>

              <template v-if="projectsOf(job.id).length">
                <h4 class="mt-7 text-sm font-bold text-brand">{{ t(UI.projectsHere) }}</h4>
                <ul class="mt-3 grid gap-2 sm:grid-cols-2">
                  <li v-for="project in projectsOf(job.id)" :key="project.id">
                    <a
                      :href="`#proyecto-${project.id}`"
                      class="group flex items-center gap-3 rounded-2xl bg-surface-soft p-2.5 pr-4 ring-1 ring-border transition-colors hover:bg-accent-soft hover:ring-brand/30"
                      @click.prevent="emit('show-project', project.id)"
                    >
                      <img
                        v-if="project.media.kind === 'image'"
                        :src="project.media.src"
                        alt=""
                        loading="lazy"
                        class="size-11 shrink-0 rounded-xl bg-white"
                        :class="
                          project.media.fit === 'contain' ? 'object-contain p-1' : 'object-cover'
                        "
                      />
                      <span class="min-w-0 flex-1">
                        <span class="block truncate text-sm font-bold">
                          {{ resolveTitle(project.title, locale) }}
                        </span>
                        <span v-if="project.client" class="block text-xs text-ink-muted">
                          {{ project.client }}
                        </span>
                      </span>
                      <AppIcon
                        :path="mdiArrowRight"
                        :size="18"
                        class="text-brand transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                </ul>
              </template>

              <p class="mt-7 flex flex-wrap gap-1.5">
                <AppBadge v-for="tech in job.tech" :key="tech">{{ tech }}</AppBadge>
              </p>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
