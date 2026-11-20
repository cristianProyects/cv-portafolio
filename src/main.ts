// Arranque: fuente Poppins servida desde el propio sitio, estilos, idioma y montaje.
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/poppins/latin-700.css'
import '@fontsource/poppins/latin-800.css'
import './shared/styles/main.css'
import { createApp } from 'vue'
import App from './app/App.vue'
import { initLocale } from './shared/i18n/locale'
import { mapLegacyHash } from './shared/utils/legacy-hash'

// Enlaces del portafolio anterior (#/projects…) → sección equivalente.
const legacy = mapLegacyHash(window.location.hash)
if (legacy) history.replaceState(null, '', legacy)

initLocale()
createApp(App).mount('#app')

if (legacy) requestAnimationFrame(() => document.querySelector(legacy)?.scrollIntoView())
