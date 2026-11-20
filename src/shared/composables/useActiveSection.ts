// Sección visible en pantalla (para resaltar el enlace activo del menú).
import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(ids: readonly string[]) {
  const active = ref<string | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) active.value = entry.target.id
      },
      // Franja horizontal a la altura del 35 % superior de la pantalla.
      { rootMargin: '-35% 0px -60% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
