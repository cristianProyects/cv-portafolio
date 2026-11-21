<!-- Formación y certificaciones. -->
<script setup lang="ts">
import { mdiCertificateOutline, mdiSchoolOutline } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'
import SectionHeading from '@/shared/ui/SectionHeading.vue'
import { EDUCATION } from '../content/experience.content'

const { t } = useLocale()
</script>

<template>
  <section class="py-20 md:py-28" aria-labelledby="education-title">
    <div class="mx-auto max-w-6xl px-5">
      <SectionHeading heading-id="education-title" :title="t(EDUCATION.title)" />

      <div class="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <article
          data-reveal
          class="relative overflow-hidden rounded-[2rem] bg-brand p-8 text-white shadow-[var(--shadow-lift)] md:p-10"
        >
          <div
            class="pointer-events-none absolute -right-12 -bottom-12 size-52 rounded-full bg-brand-sky/40"
            aria-hidden="true"
          />
          <span class="relative grid size-14 place-items-center rounded-2xl bg-white/15">
            <AppIcon :path="mdiSchoolOutline" :size="30" />
          </span>
          <h3 class="relative mt-6 text-2xl leading-tight font-extrabold md:text-3xl">
            {{ t(EDUCATION.degree.title) }}
          </h3>
          <p class="relative mt-3 text-white/85">{{ EDUCATION.degree.school }}</p>
          <p class="tabular relative mt-1 font-semibold">{{ EDUCATION.degree.period }}</p>
        </article>

        <ul class="grid gap-4">
          <li
            v-for="(cert, i) in EDUCATION.certifications"
            :key="i"
            data-reveal
            :style="{ '--reveal-delay': `${i * 90}ms` }"
            class="flex items-start gap-5 rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-border"
          >
            <span
              class="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-brand"
            >
              <AppIcon :path="mdiCertificateOutline" :size="26" />
            </span>
            <div>
              <h3 class="font-bold">{{ t(cert.title) }}</h3>
              <p class="mt-0.5 text-ink-muted">{{ t(cert.issuer) }}</p>
              <p class="mt-1 text-sm font-semibold text-brand">{{ t(cert.validity) }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
