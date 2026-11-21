import { describe, expect, it } from 'vitest'
import { initLocale, useLocale } from './locale'

describe('useLocale', () => {
  it('muestra siempre la versión en español', () => {
    const { t, locale } = useLocale()
    expect(locale.value).toBe('es')
    expect(t({ es: 'Hola', en: 'Hello' })).toBe('Hola')
  })

  it('marca la página en español y olvida el idioma guardado', () => {
    localStorage.setItem('cv-locale', 'en')
    initLocale()
    expect(document.documentElement.lang).toBe('es-MX')
    expect(localStorage.getItem('cv-locale')).toBeNull()
  })
})
