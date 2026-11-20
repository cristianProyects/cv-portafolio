<!-- Página única del CV. La vista orquesta el filtro compartido entre Stack y Proyectos: elegir una
     tecnología en el stack filtra la lista y lleva hasta ella. -->
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useReveal } from '@/shared/composables/useReveal'
import ContactSection from '../components/ContactSection.vue'
import EducationSection from '../components/EducationSection.vue'
import EndToEndSection from '../components/EndToEndSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import StackSection from '../components/StackSection.vue'
import type { TechName } from '../content/tech.content'
import type { CategoryFilter } from '../utils/project-filters'

const category = ref<CategoryFilter>('all')
const tech = ref<TechName | null>(null)

useReveal()

async function selectTech(next: TechName) {
  const same = tech.value === next
  tech.value = same ? null : next
  if (same) return
  category.value = 'all'
  await nextTick()
  document.getElementById('proyectos-lista')?.scrollIntoView({ block: 'start' })
}
</script>

<template>
  <HeroSection />
  <EndToEndSection />
  <ExperienceSection />
  <ProjectsSection v-model:category="category" v-model:tech="tech" />
  <StackSection :selected="tech" @select="selectTech" />
  <EducationSection />
  <ContactSection />
</template>
