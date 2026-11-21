<!-- Barra superior: monograma y nombre, secciones (resalta la visible), cambio de idioma y descarga
     del CV; en celular, menú desplegable (mismo patrón accesible que el sitio de tours). -->
<script setup lang="ts">
import { mdiClose, mdiDownload, mdiMenu } from '@mdi/js'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { PROFILE, UI } from '@/modules/portfolio'
import { useActiveSection } from '@/shared/composables/useActiveSection'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'

const { t } = useLocale()

const LINKS = [
  { id: 'experiencia', label: UI.nav.experience },
  { id: 'proyectos', label: UI.nav.projects },
  { id: 'personales', label: UI.nav.personal },
  { id: 'stack', label: UI.nav.stack },
  { id: 'contacto', label: UI.nav.contact },
] as const

const active = useActiveSection(LINKS.map((l) => l.id))
const isOpen = ref(false)
const scrolled = ref(false)
const toggleEl = ref<HTMLButtonElement | null>(null)

function close(returnFocus = false) {
  if (!isOpen.value) return
  isOpen.value = false
  if (returnFocus) toggleEl.value?.focus()
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300"
    :class="
      scrolled || isOpen
        ? 'border-b border-border bg-white/90 shadow-[0_6px_20px_-12px_rgb(10_42_79/0.25)] backdrop-blur-md'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
      <a
        href="#inicio"
        class="group flex items-center gap-2.5 font-display font-bold"
        @click="close()"
      >
        <span
          class="grid size-10 place-items-center rounded-2xl bg-brand text-sm font-extrabold tracking-tight text-white shadow-md shadow-brand/30 transition-transform duration-300 group-hover:-rotate-6"
          aria-hidden="true"
          >CE</span
        >
        <span class="hidden sm:inline">{{ PROFILE.firstLine }}</span>
        <span class="sr-only">{{ PROFILE.name }}, {{ t(UI.home) }}</span>
      </a>

      <div class="flex items-center gap-2 lg:order-last">
        <a
          :href="t(PROFILE.cv).href"
          :download="t(PROFILE.cv).file"
          class="hidden h-10 items-center gap-2 rounded-[var(--radius-control)] bg-brand px-4 text-sm font-semibold text-white shadow-md shadow-brand/25 transition-colors hover:bg-brand-navy lg:inline-flex"
        >
          <AppIcon :path="mdiDownload" :size="18" />
          {{ t(UI.downloadCv) }}
        </a>
        <button
          ref="toggleEl"
          type="button"
          class="grid size-10 place-items-center rounded-[var(--radius-control)] text-ink lg:hidden"
          aria-controls="site-menu"
          :aria-expanded="isOpen ? 'true' : 'false'"
          :aria-label="isOpen ? t(UI.menuClose) : t(UI.menuOpen)"
          @click="isOpen = !isOpen"
          @keydown.esc="close(true)"
        >
          <AppIcon :path="isOpen ? mdiClose : mdiMenu" />
        </button>
      </div>

      <nav
        id="site-menu"
        aria-label="Secciones"
        :class="isOpen ? 'flex' : 'hidden'"
        class="absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-white px-5 pt-2 pb-5 lg:static lg:ml-auto lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0"
        @keydown.esc="close(true)"
      >
        <a
          v-for="link in LINKS"
          :key="link.id"
          :href="`#${link.id}`"
          class="relative rounded-xl px-3 py-3 font-medium transition-colors lg:py-2"
          :class="active === link.id ? 'text-brand' : 'text-ink-muted hover:text-ink'"
          :aria-current="active === link.id ? 'true' : undefined"
          @click="close()"
        >
          {{ t(link.label) }}
          <span
            class="absolute inset-x-3 -bottom-0.5 hidden h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 lg:block"
            :class="active === link.id ? 'scale-x-100' : 'scale-x-0'"
            aria-hidden="true"
          />
        </a>
        <a
          :href="t(PROFILE.cv).href"
          :download="t(PROFILE.cv).file"
          class="mt-2 inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] bg-brand px-4 py-3 font-semibold text-white lg:hidden"
          @click="close()"
        >
          <AppIcon :path="mdiDownload" :size="20" />
          {{ t(UI.downloadCv) }}
        </a>
      </nav>
    </div>
  </header>
</template>
