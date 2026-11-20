// Filtros de proyectos por categoría y tecnología, y conteo de uso por tecnología (lo que muestra la
// sección de stack: "Vue.js · 6 proyectos").
import type { Locale, Localized } from '@/shared/i18n/locale'
import type { Project, ProjectCategory } from '../content/projects.content'
import type { TechName } from '../content/tech.content'

export type CategoryFilter = ProjectCategory | 'all'

export function filterProjects<P extends Project>(
  projects: readonly P[],
  category: CategoryFilter,
  tech: TechName | null,
): P[] {
  return projects.filter(
    (p) => (category === 'all' || p.category === category) && (!tech || p.tech.includes(tech)),
  )
}

export function countTechUsage(projects: readonly Project[]): Map<TechName, number> {
  const usage = new Map<TechName, number>()
  for (const project of projects) {
    for (const tech of new Set(project.tech)) usage.set(tech, (usage.get(tech) ?? 0) + 1)
  }
  return usage
}

export function resolveTitle(title: string | Localized, locale: Locale): string {
  return typeof title === 'string' ? title : title[locale]
}
