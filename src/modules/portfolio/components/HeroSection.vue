<!-- Portada: nombre grande, rol con subrayado a mano que se dibuja al cargar, resumen, acciones y una
     composición con las fotos reales (Google México y la Torre BBVA). -->
<script setup lang="ts">
import {
  mdiArrowDown,
  mdiBankOutline,
  mdiClockOutline,
  mdiDownload,
  mdiEmailOutline,
  mdiMapMarkerOutline,
} from '@mdi/js'
import googlePhoto from '@/assets/google_yo_yo.jpg'
import bbvaTower from '@/assets/bbva_yo.jpg'
import { useLocale } from '@/shared/i18n/locale'
import AppButton from '@/shared/ui/AppButton.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import { HERO, PROFILE, UI } from '../content/profile.content'

const { t } = useLocale()

const FACT_ICONS = { clock: mdiClockOutline, bank: mdiBankOutline } as const
</script>

<template>
  <section id="inicio" class="relative -mt-16 overflow-hidden pt-16">
    <!-- Fondo: lavado azul muy claro y una retícula de puntos que se desvanece. -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-soft via-surface to-surface"
      aria-hidden="true"
    />
    <div
      class="hero-dots pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-10 pb-20 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28"
    >
      <div class="hero-copy">
        <p class="flex items-center gap-2 text-sm font-semibold text-ink-muted">
          <AppIcon :path="mdiMapMarkerOutline" :size="18" class="text-brand" />
          {{ t(PROFILE.location) }}
        </p>
        <h1
          class="mt-4 text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-7xl"
        >
          {{ PROFILE.firstLine }}<br />
          <span class="text-brand">{{ PROFILE.secondLine }}</span>
        </h1>
        <p class="relative mt-5 inline-block text-2xl font-bold text-ink sm:text-3xl">
          {{ t(PROFILE.role) }}
          <svg
            class="hero-swash absolute -bottom-3 left-0 h-4 w-full text-spark"
            viewBox="0 0 300 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M3 11 C 60 3, 140 2, 297 9"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              pathLength="1"
            />
          </svg>
        </p>
        <p class="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">{{ t(PROFILE.summary) }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton :href="t(PROFILE.cv).href" :download="t(PROFILE.cv).file">
            <AppIcon :path="mdiDownload" :size="20" />
            {{ t(UI.downloadCv) }}
          </AppButton>
          <AppButton href="#proyectos" variant="secondary">
            {{ t(UI.seeProjects) }}
            <AppIcon :path="mdiArrowDown" :size="20" />
          </AppButton>
          <a
            :href="`mailto:${PROFILE.email}`"
            class="inline-flex min-h-12 items-center gap-2 rounded-[var(--radius-control)] px-3 font-semibold text-brand underline-offset-4 hover:underline"
          >
            <AppIcon :path="mdiEmailOutline" :size="20" />
            {{ t(UI.writeMe) }}
          </a>
        </div>

        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink">
          <li v-for="fact in HERO.facts" :key="fact.icon" class="flex items-center gap-2">
            <span class="grid size-8 place-items-center rounded-xl bg-accent-soft text-brand">
              <AppIcon :path="FACT_ICONS[fact.icon]" :size="18" />
            </span>
            {{ t(fact.text) }}
          </li>
        </ul>
      </div>

      <!-- Composición de fotos -->
      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div
          class="hero-plate absolute inset-0 translate-x-5 translate-y-6 rounded-[2.5rem] bg-gradient-to-br from-brand-navy via-brand to-brand-sky"
          aria-hidden="true"
        />
        <figure class="hero-photo relative">
          <img
            :src="googlePhoto"
            :alt="t(HERO.photoAlt)"
            width="960"
            height="1280"
            fetchpriority="high"
            class="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_45%] shadow-[var(--shadow-lift)] ring-4 ring-white"
          />
          <figcaption
            class="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-md"
          >
            <AppIcon :path="mdiMapMarkerOutline" :size="14" class="text-brand" />
            {{ t(HERO.photoCaption) }}
          </figcaption>
        </figure>

        <!-- Tarjeta "Hoy desarrollo para BBVA" -->
        <div
          class="hero-chip-now absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-5 shadow-[var(--shadow-lift)] ring-1 ring-border sm:-left-8"
        >
          <img
            :src="bbvaTower"
            :alt="t(HERO.towerAlt)"
            width="56"
            height="56"
            loading="lazy"
            class="size-14 rounded-xl object-cover object-[50%_30%]"
          />
          <div>
            <p class="text-xs font-medium text-ink-muted">{{ t(HERO.nowLabel) }}</p>
            <p class="flex items-center gap-2 font-bold text-ink">
              <span class="relative flex size-2.5" aria-hidden="true">
                <span class="absolute inset-0 animate-ping rounded-full bg-brand-sky opacity-70" />
                <span class="relative size-2.5 rounded-full bg-brand-sky" />
              </span>
              {{ HERO.nowValue }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-dots {
  background-image: radial-gradient(
    color-mix(in srgb, var(--color-brand) 22%, transparent) 1.2px,
    transparent 1.2px
  );
  background-size: 22px 22px;
  mask-image: radial-gradient(ellipse 70% 80% at 75% 20%, black 20%, transparent 75%);
}

/* Movimiento de entrada (un solo momento): las fotos se acomodan, las tarjetas aterrizan y el
   subrayado se dibuja. Con movimiento reducido todo aparece ya en su lugar. */
@media (prefers-reduced-motion: no-preference) {
  .hero-copy > * {
    animation: rise 0.9s var(--ease-out-expo) both;
  }
  .hero-copy > :nth-child(2) {
    animation-delay: 60ms;
  }
  .hero-copy > :nth-child(3) {
    animation-delay: 140ms;
  }
  .hero-copy > :nth-child(4) {
    animation-delay: 220ms;
  }
  .hero-copy > :nth-child(5) {
    animation-delay: 300ms;
  }
  .hero-copy > :nth-child(6) {
    animation-delay: 380ms;
  }

  .hero-swash path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 0.9s 0.55s var(--ease-out-expo) forwards;
  }

  .hero-plate {
    animation: plate 1.2s var(--ease-out-expo) both;
  }
  .hero-photo {
    animation: photo 1.2s 0.1s var(--ease-out-expo) both;
  }
  .hero-chip-now {
    animation: chip 0.9s 0.6s var(--ease-out-expo) both;
  }
}

.hero-plate {
  rotate: -3deg;
}

@keyframes rise {
  from {
    opacity: 0;
    translate: 0 18px;
    filter: blur(6px);
  }
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes plate {
  from {
    opacity: 0;
    rotate: 0deg;
    scale: 0.9;
  }
}
@keyframes photo {
  from {
    opacity: 0;
    translate: 0 30px;
  }
}
@keyframes chip {
  from {
    opacity: 0;
    scale: 0.85;
    translate: 0 14px;
  }
}
</style>
