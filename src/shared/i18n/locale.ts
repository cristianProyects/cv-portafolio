// Idioma del sitio (ES por defecto, EN con el botón). Se recuerda entre visitas y actualiza
// <html lang>. El contenido bilingüe se escribe como { es, en } y se resuelve con `t()`.
import { computed, ref } from 'vue'

export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export type Localized<T = string> = Record<Locale, T>

export const STORAGE_KEY = 'cv-locale'
const HTML_LANG: Record<Locale, string> = { es: 'es-MX', en: 'en' }

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

// Idioma inicial: el guardado; si no hay, inglés solo cuando el navegador lo pide primero.
export function detectLocale(
  stored: string | null,
  browserLanguages: readonly string[] = [],
): Locale {
  if (isLocale(stored)) return stored
  const first = browserLanguages[0]?.toLowerCase() ?? ''
  return first.startsWith('en') ? 'en' : 'es'
}

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const current = ref<Locale>(
  detectLocale(readStored(), typeof navigator === 'undefined' ? [] : navigator.languages),
)

function apply(locale: Locale) {
  document.documentElement.lang = HTML_LANG[locale]
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Modo privado o almacenamiento bloqueado: el idioma vale solo para esta visita.
  }
}

export function useLocale() {
  const locale = computed(() => current.value)

  function setLocale(next: Locale) {
    current.value = next
    apply(next)
  }

  function toggleLocale() {
    setLocale(current.value === 'es' ? 'en' : 'es')
  }

  function t<T>(value: Localized<T>): T {
    return value[current.value]
  }

  return { locale, setLocale, toggleLocale, t }
}

export function initLocale() {
  apply(current.value)
}
