<!-- Stack tecnológico por grupo. Tocar una tecnología despliega, dentro de su grupo, dónde la he usado:
     en qué empresas y en qué proyectos; desde ahí se filtra la lista de proyectos.
     -->
<script setup lang="ts">
import {
  mdiArrowRight,
  mdiClose,
  mdiCloudOutline,
  mdiCodeTags,
  mdiDatabaseOutline,
  mdiMonitor,
  mdiServerNetwork,
  mdiShieldCheckOutline,
  mdiToolboxOutline,
} from '@mdi/js'
import { computed, ref } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { JOBS } from '../content/experience.content'
import { UI } from '../content/profile.content'
import { PROJECTS } from '../content/projects.content'
import { STACK_GROUPS, TECH_NOTES, techLogoUrl, type TechName } from '../content/tech.content'
import { countTechUsage, resolveTitle, techUsage } from '../utils/project-filters'
import CompanyMark from './CompanyMark.vue'

const emit = defineEmits<{ select: [tech: TechName]; 'show-project': [id: string] }>()
const { t, locale } = useLocale()

const ICONS: Record<string, string> = {
  frontend: mdiMonitor,
  backend: mdiServerNetwork,
  data: mdiDatabaseOutline,
  cloud: mdiCloudOutline,
  quality: mdiShieldCheckOutline,
  tools: mdiToolboxOutline,
}

const usage = countTechUsage(PROJECTS)
const atWork = new Set(JOBS.flatMap((j) => j.tech))
const inspected = ref<TechName | null>(null)
const detail = computed(() => (inspected.value ? techUsage(inspected.value, JOBS, PROJECTS) : null))

const workCount = computed(
  () => detail.value?.projects.filter((p) => p.employer !== 'personal').length ?? 0,
)

const usedSomewhere = (tech: TechName) => atWork.has(tech) || (usage.get(tech) ?? 0) > 0

function toggle(tech: TechName) {
  inspected.value = inspected.value === tech ? null : tech
}

function hideBrokenLogo(event: Event) {
  ;(event.target as HTMLImageElement).style.display = 'none'
}
</script>

<template>
  <section id="stack" class="bg-surface-soft py-20 md:py-28" aria-labelledby="stack-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="stack-title"
        :title="t({ es: 'Stack tecnológico', en: 'Tech stack' })"
        :intro="t(UI.stackHint)"
      />

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="group in STACK_GROUPS"
          :key="group.id"
          data-reveal
          class="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-border md:p-7"
        >
          <header class="mb-5 flex items-center gap-3">
            <span class="grid size-11 place-items-center rounded-2xl bg-accent-soft text-brand">
              <AppIcon :path="ICONS[group.id] ?? mdiCodeTags" :size="24" />
            </span>
            <h3 class="text-lg font-extrabold">{{ t(group.title) }}</h3>
            <span class="tabular ml-auto text-sm font-semibold text-ink-muted">
              {{ group.items.length }}
            </span>
          </header>

          <ul class="flex flex-wrap gap-2.5">
            <li v-for="tech in group.items" :key="tech">
              <component
                :is="usedSomewhere(tech) ? 'button' : 'span'"
                :type="usedSomewhere(tech) ? 'button' : undefined"
                class="relative inline-flex items-center gap-2 rounded-2xl py-2 pr-3 pl-2 text-sm font-semibold ring-1 transition-[background-color,box-shadow,translate]"
                :class="[
                  inspected === tech
                    ? 'bg-brand text-white ring-brand'
                    : 'bg-surface-soft text-ink ring-border',
                  usedSomewhere(tech) && inspected !== tech
                    ? 'cursor-pointer hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-brand/40'
                    : '',
                ]"
                :aria-expanded="
                  usedSomewhere(tech) ? (inspected === tech ? 'true' : 'false') : undefined
                "
                @click="usedSomewhere(tech) && toggle(tech)"
              >
                <span class="grid size-7 place-items-center rounded-lg bg-white">
                  <img
                    v-if="techLogoUrl(tech)"
                    :src="techLogoUrl(tech)!"
                    alt=""
                    width="18"
                    height="18"
                    loading="lazy"
                    class="size-[18px]"
                    @error="hideBrokenLogo"
                  />
                  <AppIcon v-else :path="mdiCodeTags" :size="16" class="text-brand" />
                </span>
                {{ tech }}
                <span
                  v-if="TECH_NOTES[tech]"
                  class="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-ink-muted ring-1 ring-border"
                  >{{ t(TECH_NOTES[tech]!) }}</span
                >
              </component>
            </li>
          </ul>

          <!-- Dónde la he usado -->
          <div
            v-if="detail && inspected && group.items.includes(inspected)"
            class="mt-6 rounded-2xl bg-surface-soft p-5 ring-1 ring-border md:p-6"
            aria-live="polite"
          >
            <div class="flex items-start justify-between gap-4">
              <p class="text-base font-extrabold">
                {{ t({ es: 'Dónde he usado', en: 'Where I have used' }) }}
                <span class="text-brand">{{ inspected }}</span>
              </p>
              <button
                type="button"
                class="grid size-8 shrink-0 place-items-center rounded-full text-ink-muted hover:bg-white hover:text-ink"
                :aria-label="t({ es: 'Cerrar', en: 'Close' })"
                @click="inspected = null"
              >
                <AppIcon :path="mdiClose" :size="18" />
              </button>
            </div>

            <div class="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div v-if="detail.jobs.length">
                <h4 class="text-xs font-bold tracking-wide text-ink-muted uppercase">
                  {{ t({ es: 'En empresas', en: 'At companies' }) }}
                </h4>
                <ul class="mt-3 space-y-2.5">
                  <li v-for="job in detail.jobs" :key="job.id" class="flex items-center gap-3">
                    <CompanyMark :employer="job.id" size="sm" />
                    <span class="text-sm leading-tight">
                      <strong class="block">{{ job.company }}</strong>
                      <span class="text-ink-muted">{{ t(job.role) }}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div v-if="detail.projects.length">
                <h4 class="text-xs font-bold tracking-wide text-ink-muted uppercase">
                  {{ t({ es: 'En proyectos', en: 'In projects' }) }}
                </h4>
                <ul class="mt-3 space-y-1.5">
                  <li v-for="project in detail.projects" :key="project.id">
                    <a
                      :href="`#proyecto-${project.id}`"
                      class="group flex items-center gap-2 rounded-lg py-1 text-sm font-semibold hover:text-brand"
                      @click.prevent="emit('show-project', project.id)"
                    >
                      <CompanyMark :employer="project.employer" size="xs" />
                      <span class="min-w-0 flex-1 truncate">
                        {{ resolveTitle(project.title, locale) }}
                      </span>
                      <AppIcon
                        :path="mdiArrowRight"
                        :size="16"
                        class="text-brand opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                </ul>
                <button
                  v-if="workCount"
                  type="button"
                  class="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:bg-brand-navy"
                  @click="emit('select', inspected)"
                >
                  {{
                    workCount === 1
                      ? t({ es: 'Ver el proyecto en empresas', en: 'See the company project' })
                      : t({
                          es: `Ver los ${workCount} proyectos en empresas`,
                          en: `See the ${workCount} company projects`,
                        })
                  }}
                  <AppIcon :path="mdiArrowRight" :size="16" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
