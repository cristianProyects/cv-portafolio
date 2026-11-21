import { describe, expect, it } from 'vitest'
import { JOBS } from '../content/experience.content'
import type { Project } from '../content/projects.content'
import { PROJECTS } from '../content/projects.content'
import { STACK_GROUPS, TECH } from '../content/tech.content'
import {
  countTechUsage,
  filterProjects,
  groupByEmployer,
  pageOf,
  resolveTitle,
  techUsage,
} from './project-filters'

const base = {
  type: { es: '', en: '' },
  summary: { es: '', en: '' },
  role: { es: '', en: '' },
  highlights: [],
  media: { kind: 'none' as const },
}
const SAMPLE: Project[] = [
  { ...base, id: 'a', title: 'A', employer: 'hitss', tech: ['Vue.js', 'MySQL'] },
  { ...base, id: 'b', title: 'B', employer: 'personal', tech: ['React', 'MySQL'] },
  { ...base, id: 'c', title: 'C', employer: 'esource', tech: ['AppSheet', 'MySQL', 'MySQL'] },
  { ...base, id: 'd', title: 'D', employer: 'hitss', tech: ['Vue.js'] },
]

describe('filterProjects', () => {
  it('sin filtros devuelve todo', () => {
    expect(filterProjects(SAMPLE, 'all', null)).toHaveLength(4)
  })

  it('filtra por empresa y por tecnología a la vez', () => {
    expect(filterProjects(SAMPLE, 'personal', null).map((p) => p.id)).toEqual(['b'])
    expect(filterProjects(SAMPLE, 'all', 'MySQL')).toHaveLength(3)
    expect(filterProjects(SAMPLE, 'hitss', 'React')).toEqual([])
  })
})

describe('pageOf', () => {
  it('ubica cada proyecto en su página', () => {
    expect(pageOf(SAMPLE, 'a', 3)).toBe(1)
    expect(pageOf(SAMPLE, 'd', 3)).toBe(2)
    expect(pageOf(SAMPLE, 'zz', 3)).toBe(1)
  })
})

describe('groupByEmployer', () => {
  it('agrupa respetando el orden de aparición', () => {
    const groups = groupByEmployer(SAMPLE)
    expect(groups.map((g) => g.employer)).toEqual(['hitss', 'personal', 'esource'])
    expect(groups[0]?.items.map((p) => p.id)).toEqual(['a', 'd'])
  })
})

describe('uso de tecnologías', () => {
  it('cuenta cada proyecto una sola vez por tecnología', () => {
    const usage = countTechUsage(SAMPLE)
    expect(usage.get('MySQL')).toBe(3)
    expect(usage.get('Docker')).toBeUndefined()
  })

  it('reúne trabajos y proyectos donde se usó', () => {
    const vue = techUsage('Vue.js', JOBS, PROJECTS)
    expect(vue.jobs.map((j) => j.id)).toContain('hitss')
    expect(vue.projects.length).toBeGreaterThan(0)
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

  it('los ids de proyecto son únicos y cada uno dice mi rol y qué hice', () => {
    const ids = PROJECTS.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const p of PROJECTS) {
      expect(p.role.es && p.role.en).toBeTruthy()
      expect(p.highlights.length).toBeGreaterThan(0)
    }
  })

  it('cada trabajo tiene al menos un proyecto ligado', () => {
    for (const job of JOBS) expect(PROJECTS.some((p) => p.employer === job.id)).toBe(true)
  })
})
