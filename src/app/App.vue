<!-- Raíz: enlace para saltar al contenido, barra superior, página y pie. El título y la descripción
     del documento siguen al idioma elegido. -->
<script setup lang="ts">
import { watchEffect } from 'vue'
import { META, PortfolioView } from '@/modules/portfolio'
import { useLocale } from '@/shared/i18n/locale'
import { setDocumentMeta } from '@/shared/utils/document-meta'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const { t, locale } = useLocale()

watchEffect(() => {
  const meta = t(META)
  setDocumentMeta(meta.title, meta.description)
})
</script>

<template>
  <a
    href="#contenido"
    class="sr-only z-50 rounded-xl bg-brand px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
  >
    {{ locale === 'es' ? 'Saltar al contenido' : 'Skip to content' }}
  </a>
  <SiteHeader />
  <main id="contenido">
    <PortfolioView />
  </main>
  <SiteFooter />
</template>
