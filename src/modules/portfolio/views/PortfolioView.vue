<!-- Página única del CV. La vista orquesta la navegación entre secciones: la experiencia y el stack
     enlazan a proyectos concretos (abriendo la página donde están), y el stack filtra por tecnología. -->
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useReveal } from '@/shared/composables/useReveal'
import ContactSection from '../components/ContactSection.vue'
import EducationSection from '../components/EducationSection.vue'
import EndToEndSection from '../components/EndToEndSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import HeroSection from '../components/HeroSection.vue'
import PersonalSection from '../components/PersonalSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import StackSection from '../components/StackSection.vue'
import { WORK_PROJECTS } from '../content/projects.content'
import type { TechName } from '../content/tech.content'
import { pageOf, type EmployerFilter } from '../utils/project-filters'

const employer = ref<EmployerFilter>('all')
const tech = ref<TechName | null>(null)
const page = ref(1)
const focused = ref<string | null>(null)
let focusTimer: ReturnType<typeof setTimeout> | undefined

useReveal()

async function selectTech(next: TechName) {
  tech.value = next
  employer.value = 'all'
  await nextTick()
  document.getElementById('proyectos-lista')?.scrollIntoView({ block: 'start' })
}

/** Lleva a un proyecto concreto (quitando filtros y abriendo su página) y lo resalta un momento. */
async function showProject(id: string) {
  employer.value = 'all'
  tech.value = null
  await nextTick()
  page.value = pageOf(WORK_PROJECTS, id)
  await nextTick()
  // La transición de página tarda un instante en montar la tarjeta.
  setTimeout(() => {
    document.getElementById(`proyecto-${id}`)?.scrollIntoView({ block: 'start' })
  }, 300)
  history.replaceState(null, '', `#proyecto-${id}`)
  focused.value = id
  clearTimeout(focusTimer)
  focusTimer = setTimeout(() => (focused.value = null), 2500)
}
</script>

<template>
  <HeroSection />
  <EndToEndSection />
  <ExperienceSection @show-project="showProject" />
  <ProjectsSection
    v-model:employer="employer"
    v-model:tech="tech"
    v-model:page="page"
    :focused="focused"
  />
  <PersonalSection :focused="focused" :highlight="tech" />
  <StackSection @select="selectTech" @show-project="showProject" />
  <EducationSection />
  <ContactSection />
</template>
