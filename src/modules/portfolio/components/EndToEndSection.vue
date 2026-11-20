<!-- "Construyo el sistema completo": las cinco capas de un proyecto unidas por una línea que se
     dibuja al entrar en pantalla (horizontal en escritorio, vertical en celular). -->
<script setup lang="ts">
import {
  mdiApi,
  mdiCloudOutline,
  mdiDatabaseOutline,
  mdiMonitorCellphone,
  mdiSourceBranchCheck,
} from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { END_TO_END } from '../content/profile.content'

const { t } = useLocale()

const ICONS = {
  monitor: mdiMonitorCellphone,
  api: mdiApi,
  database: mdiDatabaseOutline,
  cloud: mdiCloudOutline,
  pipeline: mdiSourceBranchCheck,
} as const
</script>

<template>
  <section class="bg-surface-soft py-20 md:py-28" aria-labelledby="e2e-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="e2e-title"
        :title="t(END_TO_END.title)"
        :intro="t(END_TO_END.intro)"
      />

      <ol data-reveal class="e2e relative grid gap-10 md:grid-cols-5 md:gap-6">
        <!-- Línea que une las capas -->
        <span
          class="e2e-line absolute top-7 bottom-7 left-7 w-0.5 rounded-full bg-gradient-to-b from-brand via-brand-sky to-spark md:top-7 md:right-[10%] md:bottom-auto md:left-[10%] md:h-0.5 md:w-auto md:bg-gradient-to-r"
          aria-hidden="true"
        />
        <li
          v-for="(layer, index) in END_TO_END.layers"
          :key="layer.id"
          class="e2e-node relative grid grid-cols-[3.5rem_1fr] gap-x-5 md:grid-cols-1 md:text-center"
          :style="{ '--i': index }"
        >
          <span
            class="relative z-10 grid size-14 place-items-center rounded-2xl bg-white text-brand shadow-[var(--shadow-card)] ring-1 ring-border md:mx-auto"
          >
            <AppIcon :path="ICONS[layer.icon]" :size="28" />
          </span>
          <div class="md:mt-5">
            <h3 class="text-lg font-bold">{{ t(layer.title) }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-ink-muted">{{ t(layer.text) }}</p>
            <p class="mt-3 flex flex-wrap gap-1.5 md:justify-center">
              <span
                v-for="tech in layer.tech"
                :key="tech"
                class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-brand/15"
                >{{ tech }}</span
              >
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* La línea crece y cada capa se enciende en orden: una sola coreografía para toda la sección. */
:global(.can-reveal) .e2e[data-reveal] {
  opacity: 1;
  translate: none;
  filter: none;
}

:global(.can-reveal) .e2e .e2e-line {
  transform-origin: top left;
  scale: 1 0;
  transition: scale 1.4s var(--ease-out-expo);
}

@media (min-width: 48rem) {
  :global(.can-reveal) .e2e .e2e-line {
    scale: 0 1;
  }
}

:global(.can-reveal) .e2e .e2e-node {
  opacity: 0;
  translate: 0 14px;
  transition:
    opacity 0.8s var(--ease-out-expo),
    translate 0.8s var(--ease-out-expo);
  transition-delay: calc(var(--i) * 140ms + 150ms);
}

:global(.can-reveal) .e2e.is-revealed .e2e-line {
  scale: 1 1;
}

:global(.can-reveal) .e2e.is-revealed .e2e-node {
  opacity: 1;
  translate: 0 0;
}
</style>
