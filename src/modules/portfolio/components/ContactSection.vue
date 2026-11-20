<!-- Cierre: franja de marca con las vías de contacto y la descarga del CV. -->
<script setup lang="ts">
import { mdiDownload, mdiEmailOutline, mdiGithub, mdiWhatsapp } from '@mdi/js'
import { useLocale } from '@/shared/i18n/locale'
import AppButton from '@/shared/ui/AppButton.vue'
import AppIcon from '@/shared/ui/AppIcon.vue'
import { CONTACT, PROFILE, UI } from '../content/profile.content'

const { t } = useLocale()
</script>

<template>
  <section id="contacto" class="py-20 md:py-28" aria-labelledby="contact-title">
    <div class="mx-auto max-w-6xl px-5">
      <div
        data-reveal
        class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-navy via-brand to-[#1f8fd6] px-7 py-14 text-white shadow-[var(--shadow-lift)] md:px-16 md:py-20"
      >
        <div
          class="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full border-[3.5rem] border-white/8"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-16 left-1/3 size-40 rounded-full bg-spark/30 blur-2xl"
          aria-hidden="true"
        />

        <div class="relative max-w-2xl">
          <h2 id="contact-title" class="text-3xl leading-tight font-extrabold md:text-5xl">
            {{ t(CONTACT.title) }}
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-white/85">{{ t(CONTACT.text) }}</p>

          <a
            :href="`mailto:${PROFILE.email}`"
            class="mt-8 inline-flex items-center gap-3 text-lg font-bold break-all underline-offset-4 hover:underline md:text-2xl"
          >
            <AppIcon :path="mdiEmailOutline" :size="28" />
            {{ PROFILE.email }}
          </a>

          <div class="mt-8 flex flex-wrap gap-3">
            <AppButton :href="`mailto:${PROFILE.email}`" variant="on-brand">
              <AppIcon :path="mdiEmailOutline" :size="20" />
              {{ t(UI.writeMe) }}
            </AppButton>
            <AppButton :href="PROFILE.whatsapp" variant="ghost-on-brand" external>
              <AppIcon :path="mdiWhatsapp" :size="20" />
              {{ t(CONTACT.whatsapp) }}
            </AppButton>
            <AppButton
              :href="t(PROFILE.cv).href"
              :download="t(PROFILE.cv).file"
              variant="ghost-on-brand"
            >
              <AppIcon :path="mdiDownload" :size="20" />
              {{ t(UI.downloadCv) }}
            </AppButton>
            <AppButton :href="PROFILE.github" variant="ghost-on-brand" external>
              <AppIcon :path="mdiGithub" :size="20" />
              GitHub
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
