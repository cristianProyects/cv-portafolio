import { describe, expect, it } from 'vitest'
import { mapLegacyHash } from './legacy-hash'

describe('mapLegacyHash', () => {
  it('traduce las rutas del portafolio anterior', () => {
    expect(mapLegacyHash('#/projects')).toBe('#proyectos')
    expect(mapLegacyHash('#/projects/')).toBe('#proyectos')
    expect(mapLegacyHash('#/experiences')).toBe('#experiencia')
    expect(mapLegacyHash('#/techstack')).toBe('#stack')
    expect(mapLegacyHash('#/')).toBe('#inicio')
  })

  it('manda rutas viejas desconocidas al inicio', () => {
    expect(mapLegacyHash('#/otra')).toBe('#inicio')
  })

  it('deja en paz los anclajes nuevos', () => {
    expect(mapLegacyHash('#proyectos')).toBeNull()
    expect(mapLegacyHash('')).toBeNull()
  })
})
