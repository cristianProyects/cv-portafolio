import { describe, expect, it } from 'vitest'
import { formatDuration, formatPeriod, monthsBetween } from './dates'

describe('dates', () => {
  it('formatea periodos en ambos idiomas', () => {
    expect(formatPeriod('2023-08', '2024-10', 'es')).toBe('Ago 2023 — Oct 2024')
    expect(formatPeriod('2024-10', undefined, 'es')).toBe('Oct 2024 — Actualidad')
    expect(formatPeriod('2024-10', undefined, 'en')).toBe('Oct 2024 — Present')
  })

  it('cuenta meses de forma inclusiva', () => {
    expect(monthsBetween('2023-01', '2023-05', new Date())).toBe(5)
    expect(monthsBetween('2023-08', '2024-10', new Date())).toBe(15)
    expect(monthsBetween('2024-10', undefined, new Date(2026, 10, 20))).toBe(26)
  })

  it('escribe la duración legible', () => {
    expect(formatDuration(5, 'es')).toBe('5 meses')
    expect(formatDuration(15, 'es')).toBe('1 año 3 meses')
    expect(formatDuration(24, 'es')).toBe('2 años')
    expect(formatDuration(13, 'en')).toBe('1 yr 1 mo')
  })
})
