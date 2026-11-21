// Filtros de proyectos por empresa y tecnología, y "dónde usé cada tecnología" (trabajos + proyectos),
// que alimenta la sección de stack.
import type { Locale, Localized } from '@/shared/i18n/locale'
import type { EmployerId, Job } from '../content/experience.content'
import type { Project } from '../content/projects.content'
import type { TechName } from '../content/tech.content'

export type EmployerFilter = EmployerId | 'all'

/** Proyectos por página en la sección de proyectos de empresas. */
export const PAGE_SIZE = 4

/** Página (desde 1) en la que queda un proyecto dentro de una lista. */
export function pageOf(projects: readonly Project[], id: string, size = PAGE_SIZE): number {
  const index = projects.findIndex((p) => p.id === id)
  return index < 0 ? 1 : Math.floor(index / size) + 1
}

export function filterProjects<P extends Project>(
  projects: readonly P[],
  employer: EmployerFilter,
  tech: TechName | null,
): P[] {
  return projects.filter(
    (p) => (employer === 'all' || p.employer === employer) && (!tech || p.tech.includes(tech)),
  )
}

/** Agrupa conservando el orden de aparición de cada empresa. */
export function groupByEmployer<P extends Project>(projects: readonly P[]) {
  const groups = new Map<EmployerId, P[]>()
  for (const p of projects) groups.set(p.employer, [...(groups.get(p.employer) ?? []), p])
  return [...groups].map(([employer, items]) => ({ employer, items }))
}

export function countTechUsage(projects: readonly Project[]): Map<TechName, number> {
  const usage = new Map<TechName, number>()
  for (const project of projects) {
    for (const tech of new Set(project.tech)) usage.set(tech, (usage.get(tech) ?? 0) + 1)
  }
  return usage
}

export function techUsage(tech: TechName, jobs: readonly Job[], projects: readonly Project[]) {
  return {
    jobs: jobs.filter((j) => j.tech.includes(tech)),
    projects: projects.filter((p) => p.tech.includes(tech)),
  }
}

export function resolveTitle(title: string | Localized, locale: Locale): string {
  return typeof title === 'string' ? title : title[locale]
}
