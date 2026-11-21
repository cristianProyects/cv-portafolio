<!-- Ilustración del configurador de paquetes de la agencia de tours: pasos, opciones y total.
     Datos de ejemplo (se marca como ilustración); no es una captura del sistema real. -->
<script setup lang="ts">
import { mdiBedOutline, mdiBusSide, mdiCheckCircle, mdiStarFourPointsOutline } from '@mdi/js'
import { computed, ref } from 'vue'
import { useLocale } from '@/shared/i18n/locale'
import AppIcon from '@/shared/ui/AppIcon.vue'

const { t } = useLocale()

const STEPS = [
  { es: 'Fecha', en: 'Date' },
  { es: 'Personas', en: 'People' },
  { es: 'Hotel', en: 'Hotel' },
  { es: 'Extras', en: 'Extras' },
  { es: 'Resumen', en: 'Summary' },
]

const OPTIONS = [
  {
    id: 'hotel',
    icon: mdiBedOutline,
    label: { es: 'Hotel cerca del evento', en: 'Hotel near the venue' },
    price: 0,
  },
  {
    id: 'bus',
    icon: mdiBusSide,
    label: { es: 'Transporte redondo', en: 'Round-trip shuttle' },
    price: 850,
  },
  {
    id: 'vip',
    icon: mdiStarFourPointsOutline,
    label: { es: 'Acceso VIP', en: 'VIP access' },
    price: 2400,
  },
]

const BASE = 6990
const selected = ref<string[]>(['hotel', 'bus'])

function toggle(id: string) {
  selected.value = selected.value.includes(id)
    ? selected.value.filter((s) => s !== id)
    : [...selected.value, id]
}

const total = computed(
  () =>
    BASE + OPTIONS.filter((o) => selected.value.includes(o.id)).reduce((a, o) => a + o.price, 0),
)
const money = (n: number) => `$${n.toLocaleString('es-MX')}`
</script>

<template>
  <div
    class="w-full max-w-sm rounded-[1.75rem] bg-white p-5 shadow-[var(--shadow-lift)] ring-1 ring-border"
  >
    <ol class="flex gap-1" :aria-label="t({ es: 'Pasos', en: 'Steps' })">
      <li
        v-for="(step, i) in STEPS"
        :key="step.es"
        class="h-1.5 flex-1 rounded-full"
        :class="i <= 3 ? 'bg-brand' : 'bg-surface-tint'"
      >
        <span class="sr-only">{{ t(step) }}</span>
      </li>
    </ol>
    <p class="mt-4 text-xs font-semibold text-ink-muted">
      {{ t({ es: 'Paso 4 de 5', en: 'Step 4 of 5' }) }}
    </p>
    <p class="text-lg font-bold">{{ t({ es: 'Arma tu paquete', en: 'Build your package' }) }}</p>

    <ul class="mt-4 space-y-2">
      <li v-for="option in OPTIONS" :key="option.id">
        <button
          type="button"
          class="flex w-full items-center gap-3 rounded-2xl p-3 text-left text-sm ring-1 transition-colors"
          :class="
            selected.includes(option.id)
              ? 'bg-accent-soft ring-brand/40'
              : 'bg-white ring-border hover:bg-surface-soft'
          "
          :aria-pressed="selected.includes(option.id) ? 'true' : 'false'"
          @click="toggle(option.id)"
        >
          <span
            class="grid size-9 place-items-center rounded-xl bg-white text-brand ring-1 ring-border"
          >
            <AppIcon :path="option.icon" :size="20" />
          </span>
          <span class="flex-1 font-semibold">{{ t(option.label) }}</span>
          <span class="tabular text-ink-muted">
            {{ option.price ? `+${money(option.price)}` : t({ es: 'Incluido', en: 'Included' }) }}
          </span>
          <AppIcon
            :path="mdiCheckCircle"
            :size="20"
            :class="selected.includes(option.id) ? 'text-brand' : 'text-border'"
          />
        </button>
      </li>
    </ul>

    <div
      class="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-0.5 rounded-2xl bg-brand-navy px-4 py-3 text-white"
    >
      <span class="text-xs text-white/75">{{
        t({ es: 'Total por persona', en: 'Total per person' })
      }}</span>
      <span class="tabular text-lg font-bold whitespace-nowrap">{{ money(total) }} MXN</span>
    </div>
  </div>
</template>
