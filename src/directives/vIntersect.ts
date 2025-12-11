/**
 * Directiva para animar logo-cards solo al entrar en el viewport
 * v-intersect => añade la clase .is-visible cuando el elemento es visible
 */
type IntersectEl = HTMLElement & { _observer?: IntersectionObserver };

const vIntersect = {
  mounted(el: IntersectEl) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el); // solo una vez
        }
      },
      {
        threshold: 0.25, // ~25% visible
      },
    );

    el._observer = observer;
    observer.observe(el);
  },
  unmounted(el: IntersectEl) {
    el._observer?.disconnect();
  },
};

export default vIntersect;