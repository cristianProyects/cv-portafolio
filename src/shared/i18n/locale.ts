// Idioma del sitio: solo español. El contenido sigue escrito como { es, en } (por si algún día se
// vuelve a ofrecer inglés) y se resuelve con `t()`, que siempre devuelve la versión en español.
import { computed } from 'vue'

export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export type Localized<T = string> = Record<Locale, T>

const CURRENT: Locale = 'es'

export function useLocale() {
  const locale = computed(() => CURRENT)

  function t<T>(value: Localized<T>): T {
    return value[CURRENT]
  }

  return { locale, t }
}

export function initLocale() {
  document.documentElement.lang = 'es-MX'
  try {
    // Limpia la preferencia que guardaba el antiguo botón ES/EN.
    localStorage.removeItem('cv-locale')
  } catch {
    // Almacenamiento bloqueado: no hay nada que limpiar.
  }
}
