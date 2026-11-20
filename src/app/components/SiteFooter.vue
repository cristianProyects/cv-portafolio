<!-- Pie de página. -->
<script setup lang="ts">
import { mdiArrowUp } from '@mdi/js'
import { PROFILE, UI } from '@/modules/portfolio'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'

const { t } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between"
    >
      <p>
        © {{ year }} {{ PROFILE.name }} · {{ t(PROFILE.role) }}
        <span class="block sm:inline">{{ t(UI.footer) }}</span>
      </p>
      <a
        href="#inicio"
        class="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
      >
        <AppIcon :path="mdiArrowUp" :size="18" />
        {{ t({ es: 'Volver arriba', en: 'Back to top' }) }}
      </a>
    </div>
  </footer>
</template>
