// Aparición al hacer scroll. El contenido es visible por defecto (sin JS o con movimiento reducido
// nunca se oculta); con movimiento permitido se marca <html class="can-reveal"> y cada elemento con
// [data-reveal] recibe .is-revealed al entrar en pantalla, una sola vez.
import { onBeforeUnmount, onMounted } from 'vue'

export function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : true
}

export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer?.observe(el))
    document.documentElement.classList.add('can-reveal')
  })

  onBeforeUnmount(() => observer?.disconnect())
}
