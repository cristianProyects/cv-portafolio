<!-- Botón-enlace base. Variantes del sistema de tours: primario azul, secundario claro y dos
     variantes "sobre color" para la franja de marca. Siempre es un <a>: cada acción lleva a algún lado. -->
<script setup lang="ts">
const {
  href,
  variant = 'primary',
  external = false,
  download,
} = defineProps<{
  href: string
  variant?: 'primary' | 'secondary' | 'on-brand' | 'ghost-on-brand'
  external?: boolean
  download?: string
}>()

const variants = {
  primary: 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-navy',
  secondary: 'border border-border bg-surface text-ink hover:border-brand/40 hover:bg-accent-soft',
  'on-brand': 'bg-white text-brand-navy shadow-lg shadow-black/15 hover:bg-accent-soft',
  'ghost-on-brand': 'border border-white/45 text-white hover:border-white hover:bg-white/10',
}
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :download="download"
    :class="variants[variant]"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] px-6 py-3 font-semibold transition-[background-color,border-color,translate] duration-200 hover:-translate-y-0.5 active:translate-y-0"
  >
    <slot />
  </a>
</template>
