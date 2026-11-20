import { describe, expect, it } from 'vitest'
import { detectLocale, isLocale, useLocale } from './locale'

describe('detectLocale', () => {
  it('respeta el idioma guardado', () => {
    expect(detectLocale('en', ['es-MX'])).toBe('en')
    expect(detectLocale('es', ['en-US'])).toBe('es')
  })

  it('usa inglés solo si el navegador lo pide primero', () => {
    expect(detectLocale(null, ['en-US', 'es'])).toBe('en')
    expect(detectLocale(null, ['es-MX', 'en'])).toBe('es')
  })

  it('cae en español con valores desconocidos', () => {
    expect(detectLocale('fr', [])).toBe('es')
    expect(detectLocale(null, [])).toBe('es')
  })
})

describe('useLocale', () => {
  it('cambia de idioma, traduce y actualiza <html lang>', () => {
    const { setLocale, toggleLocale, t, locale } = useLocale()
    setLocale('es')
    expect(t({ es: 'Hola', en: 'Hello' })).toBe('Hola')
    expect(document.documentElement.lang).toBe('es-MX')

    toggleLocale()
    expect(locale.value).toBe('en')
    expect(t({ es: 'Hola', en: 'Hello' })).toBe('Hello')
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('cv-locale')).toBe('en')
  })

  it('reconoce solo los idiomas soportados', () => {
    expect(isLocale('es')).toBe(true)
    expect(isLocale('pt')).toBe(false)
    expect(isLocale(3)).toBe(false)
  })
})
