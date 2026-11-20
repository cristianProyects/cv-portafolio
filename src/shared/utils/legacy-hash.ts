// El portafolio anterior usaba rutas con hash (#/projects…). Los enlaces viejos que circulan
// (CV en PDF, LinkedIn) se traducen a la sección equivalente de la página única.
const LEGACY: Record<string, string> = {
  '#/': '#inicio',
  '#/experiences': '#experiencia',
  '#/projects': '#proyectos',
  '#/techstack': '#stack',
}

export function mapLegacyHash(hash: string): string | null {
  if (!hash.startsWith('#/')) return null
  const clean = hash.length > 2 ? hash.replace(/\/+$/, '') : hash
  return LEGACY[clean] ?? '#inicio'
}
