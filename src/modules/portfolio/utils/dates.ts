// Fechas de la experiencia: "Oct 2024 — Actualidad" y duración "1 año 2 meses" (meses inclusivos,
// como se cuentan en un CV).
import type { Locale } from '@/shared/i18n/locale'

const MONTHS: Record<Locale, string[]> = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

function parse(ym: string): { y: number; m: number } {
  const [y, m] = ym.split('-').map(Number)
  return { y: y ?? 0, m: (m ?? 1) - 1 }
}

export function formatMonth(ym: string, locale: Locale): string {
  const { y, m } = parse(ym)
  return `${MONTHS[locale][m]} ${y}`
}

export function formatPeriod(start: string, end: string | undefined, locale: Locale): string {
  const to = end ? formatMonth(end, locale) : locale === 'es' ? 'Actualidad' : 'Present'
  return `${formatMonth(start, locale)} — ${to}`
}

export function monthsBetween(start: string, end: string | undefined, now: Date): number {
  const a = parse(start)
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() }
  return Math.max(1, (b.y - a.y) * 12 + (b.m - a.m) + 1)
}

export function formatDuration(months: number, locale: Locale): string {
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts: string[] = []
  if (locale === 'es') {
    if (years) parts.push(`${years} ${years === 1 ? 'año' : 'años'}`)
    if (rest) parts.push(`${rest} ${rest === 1 ? 'mes' : 'meses'}`)
  } else {
    if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
    if (rest) parts.push(`${rest} ${rest === 1 ? 'mo' : 'mos'}`)
  }
  return parts.join(' ')
}
