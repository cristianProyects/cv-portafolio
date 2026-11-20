<!-- Experiencia como línea de tiempo: fechas a la izquierda, un punto por trabajo (el actual late en
     naranja) y el detalle con logros y tecnologías. -->
<script setup lang="ts">
import { mdiCheckCircle, mdiOfficeBuildingOutline } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppBadge from '@/shared/ui/AppBadge.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { EXPERIENCE_HEADING, JOBS } from '../content/experience.content'
import { UI } from '../content/profile.content'

const { t, locale } = useLocale()
</script>

<template>
  <section id="experiencia" class="py-20 md:py-28" aria-labelledby="experience-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="experience-title"
        :title="t(EXPERIENCE_HEADING.title)"
        :intro="t(EXPERIENCE_HEADING.intro)"
      />

      <ol class="relative">
        <li
          v-for="job in JOBS"
          :key="job.id"
          data-reveal
          class="relative grid gap-4 pb-14 pl-10 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0"
        >
          <!-- Columna de fecha + punto en la línea -->
          <div class="md:pt-7 md:text-right">
            <p class="tabular text-sm font-bold text-brand">{{ t(job.period) }}</p>
            <AppBadge v-if="job.current" tone="live" class="mt-2">{{ t(UI.current) }}</AppBadge>
          </div>
          <span
            class="absolute top-1 bottom-0 left-[0.6875rem] w-0.5 bg-border md:top-8 md:left-[12.9375rem]"
            aria-hidden="true"
          />
          <span
            class="absolute top-1 left-0 grid size-6 place-items-center rounded-full bg-white ring-2 md:top-8 md:left-[12.25rem]"
            :class="job.current ? 'ring-spark' : 'ring-brand/40'"
            aria-hidden="true"
          >
            <span class="size-2.5 rounded-full" :class="job.current ? 'bg-spark' : 'bg-brand'" />
          </span>

          <article
            class="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-border md:ml-8"
            :class="job.image ? 'lg:grid lg:grid-cols-[1fr_15rem]' : ''"
          >
            <div class="p-6 md:p-8">
              <h3 class="text-xl leading-snug font-bold md:text-2xl">{{ t(job.role) }}</h3>
              <p class="mt-1 flex flex-wrap items-center gap-x-2 font-semibold text-ink-muted">
                <AppIcon :path="mdiOfficeBuildingOutline" :size="18" class="text-brand" />
                {{ job.company }}
                <template v-if="job.client">
                  <span aria-hidden="true">·</span>
                  <span>
                    {{ locale === 'es' ? 'Cliente' : 'Client' }}:
                    <strong class="text-brand">{{ job.client }}</strong>
                  </span>
                </template>
              </p>

              <ul class="mt-5 space-y-3">
                <li
                  v-for="(item, i) in job.highlights"
                  :key="i"
                  class="flex gap-3 leading-relaxed text-ink"
                >
                  <AppIcon :path="mdiCheckCircle" :size="20" class="mt-0.5 text-brand-sky" />
                  <span>{{ t(item) }}</span>
                </li>
              </ul>

              <p class="mt-6 flex flex-wrap gap-1.5">
                <AppBadge v-for="tech in job.tech" :key="tech">{{ tech }}</AppBadge>
              </p>
            </div>
            <img
              v-if="job.image"
              :src="job.image.src"
              :alt="t(job.image.alt)"
              loading="lazy"
              width="960"
              height="1280"
              class="hidden h-full w-full object-cover object-[50%_35%] lg:block"
            />
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
