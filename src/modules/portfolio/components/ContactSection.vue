<!-- Cierre: tarjeta de marca dividida. A la izquierda la invitación (disponibilidad, título, ubicación);
     a la derecha, tarjetas blancas grandes por cada vía de contacto. El correo se puede copiar. -->
<script setup lang="ts">
import {
  mdiArrowTopRight,
  mdiCheck,
  mdiContentCopy,
  mdiDownload,
  mdiEmailOutline,
  mdiGithub,
  mdiMapMarkerOutline,
  mdiSend,
  mdiWhatsapp,
} from '@mdi/js'
import { ref } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import { CONTACT, PROFILE, UI } from '../content/profile.content'

const { t } = useLocale()
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(PROFILE.email)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${PROFILE.email}`
  }
}

const CHANNELS = [
  {
    id: 'whatsapp',
    icon: mdiWhatsapp,
    tone: 'bg-[#e7f8ee] text-[#128c4a]',
    label: { es: 'WhatsApp', en: 'WhatsApp' },
    value: { es: 'Mensaje directo', en: 'Direct message' },
    href: PROFILE.whatsapp,
    external: true,
  },
  {
    id: 'github',
    icon: mdiGithub,
    tone: 'bg-surface-soft text-ink',
    label: { es: 'GitHub', en: 'GitHub' },
    value: { es: 'cristianproyects', en: 'cristianproyects' },
    href: PROFILE.github,
    external: true,
  },
] as const
</script>

<template>
  <section id="contacto" class="bg-surface-soft py-20 md:py-28" aria-labelledby="contact-title">
    <div class="mx-auto max-w-6xl px-5">
      <div
        data-reveal
        class="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-navy via-brand to-brand-sky p-6 text-white shadow-[var(--shadow-lift)] sm:p-10 md:p-14"
      >
        <!-- Decoración: retícula de puntos, anillos y brillo cálido -->
        <div class="contact-dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div
          class="pointer-events-none absolute -top-28 -right-28 -z-10 size-96 rounded-full border-[4rem] border-white/8"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-24 -left-16 -z-10 size-72 rounded-full border-[3rem] border-white/6"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute right-1/3 -bottom-20 -z-10 size-64 rounded-full bg-spark/35 blur-3xl"
          aria-hidden="true"
        />

        <div
          class="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_27rem] lg:gap-14"
        >
          <!-- Invitación -->
          <div>
            <p
              class="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold ring-1 ring-white/25 backdrop-blur"
            >
              <span class="relative flex size-2.5" aria-hidden="true">
                <span class="absolute inset-0 animate-ping rounded-full bg-brand-sky opacity-80" />
                <span class="relative size-2.5 rounded-full bg-[#7fd3ff]" />
              </span>
              {{ t({ es: 'Abierto a nuevas oportunidades', en: 'Open to new opportunities' }) }}
            </p>

            <h2
              id="contact-title"
              class="mt-6 flex items-center gap-4 text-5xl leading-none font-extrabold tracking-tight md:text-7xl"
            >
              {{ t(CONTACT.title) }}
              <span
                class="contact-plane grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-lg shadow-black/15 md:size-16"
                aria-hidden="true"
              >
                <AppIcon :path="mdiSend" :size="30" />
              </span>
            </h2>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              {{ t(CONTACT.text) }}
            </p>

            <p class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/90">
              <span class="inline-flex items-center gap-1.5">
                <AppIcon :path="mdiMapMarkerOutline" :size="18" />
                {{ t(PROFILE.location) }}
              </span>
              <span>{{ t(PROFILE.role) }}</span>
            </p>
          </div>

          <!-- Vías de contacto -->
          <ul class="space-y-3">
            <!-- Correo: principal, con copiar -->
            <li
              class="rounded-3xl bg-white p-5 text-ink shadow-xl shadow-black/15 ring-1 ring-white/60"
            >
              <div class="flex items-center gap-4">
                <span
                  class="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-md shadow-brand/30"
                >
                  <AppIcon :path="mdiEmailOutline" :size="24" />
                </span>
                <div class="min-w-0 flex-1">
                  <p class="text-xs font-bold tracking-wide text-ink-muted uppercase">
                    {{ t({ es: 'Correo', en: 'Email' }) }}
                  </p>
                  <p class="font-bold break-all sm:truncate">{{ PROFILE.email }}</p>
                </div>
              </div>
              <div class="mt-4 grid grid-cols-2 gap-2">
                <a
                  :href="`mailto:${PROFILE.email}`"
                  class="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
                >
                  <AppIcon :path="mdiSend" :size="18" />
                  {{ t(UI.writeMe) }}
                </a>
                <button
                  type="button"
                  class="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] px-4 text-sm font-semibold ring-1 transition-colors"
                  :class="
                    copied
                      ? 'bg-[#e7f8ee] text-[#128c4a] ring-[#128c4a]/30'
                      : 'bg-surface-soft text-ink ring-border hover:bg-accent-soft hover:text-brand'
                  "
                  @click="copyEmail"
                >
                  <AppIcon :path="copied ? mdiCheck : mdiContentCopy" :size="18" />
                  <span aria-live="polite">
                    {{
                      copied
                        ? t({ es: '¡Copiado!', en: 'Copied!' })
                        : t({ es: 'Copiar', en: 'Copy' })
                    }}
                  </span>
                </button>
              </div>
            </li>

            <li v-for="channel in CHANNELS" :key="channel.id">
              <a
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 rounded-3xl bg-white p-4 pr-5 text-ink shadow-lg shadow-black/10 transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span
                  class="grid size-12 shrink-0 place-items-center rounded-2xl"
                  :class="channel.tone"
                >
                  <AppIcon :path="channel.icon" :size="26" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-xs font-bold tracking-wide text-ink-muted uppercase">
                    {{ t(channel.label) }}
                  </span>
                  <span class="block truncate font-bold">{{ t(channel.value) }}</span>
                </span>
                <AppIcon
                  :path="mdiArrowTopRight"
                  :size="22"
                  class="text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </li>

            <li>
              <a
                :href="t(PROFILE.cv).href"
                :download="t(PROFILE.cv).file"
                class="group flex items-center gap-4 rounded-3xl bg-spark p-4 pr-5 text-white shadow-lg shadow-spark/30 transition-[translate,background-color] duration-200 hover:-translate-y-0.5 hover:bg-spark-ink"
              >
                <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/20">
                  <AppIcon :path="mdiDownload" :size="26" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-xs font-bold tracking-wide text-white/80 uppercase">
                    PDF
                  </span>
                  <span class="block font-bold">{{ t(UI.downloadCv) }}</span>
                </span>
                <AppIcon
                  :path="mdiArrowTopRight"
                  :size="22"
                  class="rotate-90 transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-dots {
  background-image: radial-gradient(rgb(255 255 255 / 0.16) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
  mask-image: radial-gradient(ellipse 60% 70% at 15% 20%, black 10%, transparent 70%);
}

@media (prefers-reduced-motion: no-preference) {
  .contact-plane {
    animation: float 4s ease-in-out infinite;
  }
}

@keyframes float {
  0%,
  100% {
    translate: 0 0;
    rotate: -6deg;
  }
  50% {
    translate: 0 -6px;
    rotate: 4deg;
  }
}
</style>
