<!-- Stack tecnológico por grupo. Cada tecnología usada en proyectos es un botón: al tocarla filtra la
     lista de proyectos y lleva hasta ella. -->
<script setup lang="ts">
import { mdiCodeTags } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { UI } from '../content/profile.content'
import { PROJECTS } from '../content/projects.content'
import { STACK_GROUPS, techLogoUrl, type TechName } from '../content/tech.content'
import { countTechUsage } from '../utils/project-filters'

const { selected = null } = defineProps<{ selected?: TechName | null }>()
const emit = defineEmits<{ select: [tech: TechName] }>()
const { t } = useLocale()

const usage = countTechUsage(PROJECTS)

function hideBrokenLogo(event: Event) {
  ;(event.target as HTMLImageElement).style.display = 'none'
}
</script>

<template>
  <section id="stack" class="py-20 md:py-28" aria-labelledby="stack-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading
        heading-id="stack-title"
        :title="t({ es: 'Stack tecnológico', en: 'Tech stack' })"
        :intro="t(UI.stackHint)"
      />

      <div
        class="divide-y divide-border rounded-[2rem] bg-white px-6 shadow-[var(--shadow-card)] ring-1 ring-border md:px-10"
      >
        <div
          v-for="group in STACK_GROUPS"
          :key="group.id"
          data-reveal
          class="grid gap-4 py-7 md:grid-cols-[12rem_1fr] md:items-start md:gap-8"
        >
          <h3 class="text-lg font-bold md:pt-2">{{ t(group.title) }}</h3>
          <ul class="flex flex-wrap gap-2.5">
            <li v-for="tech in group.items" :key="tech">
              <component
                :is="usage.get(tech) ? 'button' : 'span'"
                :type="usage.get(tech) ? 'button' : undefined"
                class="inline-flex items-center gap-2 rounded-2xl py-2 pr-3 pl-2 text-sm font-semibold ring-1 transition-[background-color,box-shadow,translate]"
                :class="[
                  selected === tech
                    ? 'bg-brand text-white ring-brand'
                    : 'bg-surface-soft text-ink ring-border',
                  usage.get(tech) && selected !== tech
                    ? 'cursor-pointer hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-brand/40'
                    : '',
                ]"
                :aria-pressed="usage.get(tech) ? (selected === tech ? 'true' : 'false') : undefined"
                @click="usage.get(tech) && emit('select', tech)"
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
                  v-if="usage.get(tech)"
                  class="tabular rounded-full px-1.5 text-xs"
                  :class="
                    selected === tech ? 'bg-white/20 text-white' : 'bg-accent-soft text-brand'
                  "
                  :aria-label="`${usage.get(tech)} ${usage.get(tech) === 1 ? t(UI.usedInOne) : t(UI.usedIn)}`"
                  >{{ usage.get(tech) }}</span
                >
              </component>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
