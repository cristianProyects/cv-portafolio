import { describe, expect, it } from 'vitest'
import type { Project } from '../content/projects.content'
import { FEATURED, PROJECTS } from '../content/projects.content'
import { STACK_GROUPS, TECH } from '../content/tech.content'
import { countTechUsage, filterProjects, resolveTitle } from './project-filters'

const base = { type: { es: '', en: '' }, summary: { es: '', en: '' }, role: { es: '', en: '' } }
const SAMPLE: Project[] = [
  { ...base, id: 'a', title: 'A', category: 'work', tech: ['Vue.js', 'MySQL'] },
  { ...base, id: 'b', title: 'B', category: 'freelance', tech: ['React', 'MySQL'] },
  { ...base, id: 'c', title: 'C', category: 'nocode', tech: ['AppSheet', 'MySQL', 'MySQL'] },
]

describe('filterProjects', () => {
  it('sin filtros devuelve todo', () => {
    expect(filterProjects(SAMPLE, 'all', null).map((p) => p.id)).toEqual(['a', 'b', 'c'])
  })

  it('filtra por categoría y por tecnología a la vez', () => {
    expect(filterProjects(SAMPLE, 'freelance', null).map((p) => p.id)).toEqual(['b'])
    expect(filterProjects(SAMPLE, 'all', 'MySQL')).toHaveLength(3)
    expect(filterProjects(SAMPLE, 'work', 'React')).toEqual([])
  })
})

describe('countTechUsage', () => {
  it('cuenta cada proyecto una sola vez por tecnología', () => {
    const usage = countTechUsage(SAMPLE)
    expect(usage.get('MySQL')).toBe(3)
    expect(usage.get('Vue.js')).toBe(1)
    expect(usage.get('Docker')).toBeUndefined()
  })
})

describe('resolveTitle', () => {
  it('respeta nombres propios y traduce los demás', () => {
    expect(resolveTitle('Mera Shop', 'en')).toBe('Mera Shop')
    expect(resolveTitle({ es: 'Hola', en: 'Hi' }, 'en')).toBe('Hi')
  })
})

describe('contenido', () => {
  it('cada tecnología del stack existe en el catálogo', () => {
    for (const group of STACK_GROUPS)
      for (const item of group.items) expect(TECH[item]).toBeDefined()
  })

  it('los ids de proyecto son únicos', () => {
    const ids = [...FEATURED, ...PROJECTS].map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
