<!-- Ilustración del panel de análisis de mercados: gráfica de velas y cuántas señales llegan a
     cada objetivo frente a la línea base. Datos de ejemplo (se marca como ilustración). -->
<script setup lang="ts">
import { useLocale } from '@/shared/i18n/locale'

const { t } = useLocale()

// Velas de ejemplo: [apertura, cierre, máximo, mínimo] en una escala 0–100.
const CANDLES: [number, number, number, number][] = [
  [40, 46, 50, 36],
  [46, 43, 49, 40],
  [43, 52, 55, 41],
  [52, 50, 57, 47],
  [50, 58, 61, 48],
  [58, 55, 62, 52],
  [55, 63, 66, 53],
  [63, 60, 67, 57],
  [60, 68, 72, 58],
  [68, 66, 71, 62],
  [66, 73, 77, 64],
  [73, 70, 76, 66],
  [70, 78, 82, 68],
  [78, 75, 81, 71],
  [75, 82, 86, 73],
]
const W = 12
const GAP = 6
const y = (v: number) => 100 - v

const TARGETS = [
  { label: 'TP1', hit: 72, base: 58 },
  { label: 'TP2', hit: 55, base: 44 },
  { label: 'TP3', hit: 38, base: 31 },
]
</script>

<template>
  <div
    class="w-full max-w-sm rounded-[1.75rem] bg-white p-5 shadow-[var(--shadow-lift)] ring-1 ring-border"
  >
    <div class="flex items-center justify-between">
      <p class="font-bold">BTC · 1h</p>
      <p class="flex items-center gap-1.5 text-xs font-semibold text-[#137a41]">
        <span class="size-2 rounded-full bg-[#178a4a]" aria-hidden="true" />
        {{ t({ es: 'En vivo', en: 'Live' }) }}
      </p>
    </div>

    <svg
      viewBox="0 0 270 100"
      class="mt-3 h-32 w-full"
      role="img"
      :aria-label="t({ es: 'Gráfica de velas de ejemplo', en: 'Sample candlestick chart' })"
    >
      <line v-for="g in [25, 50, 75]" :key="g" x1="0" x2="270" :y1="g" :y2="g" stroke="#e6eef6" />
      <g v-for="(c, i) in CANDLES" :key="i">
        <line
          :x1="i * (W + GAP) + W / 2"
          :x2="i * (W + GAP) + W / 2"
          :y1="y(c[2])"
          :y2="y(c[3])"
          :stroke="c[1] >= c[0] ? '#178a4a' : '#c62f3d'"
          stroke-width="1.5"
        />
        <rect
          :x="i * (W + GAP)"
          :y="y(Math.max(c[0], c[1]))"
          :width="W"
          :height="Math.max(2, Math.abs(c[1] - c[0]))"
          rx="2"
          :fill="c[1] >= c[0] ? '#178a4a' : '#c62f3d'"
        />
      </g>
    </svg>

    <p class="mt-3 text-xs font-semibold text-ink-muted">
      {{
        t({
          es: 'Señales que llegan al objetivo vs. línea base',
          en: 'Signals reaching target vs. baseline',
        })
      }}
    </p>
    <ul class="mt-2 space-y-2">
      <li
        v-for="target in TARGETS"
        :key="target.label"
        class="grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 text-xs"
      >
        <span class="font-bold">{{ target.label }}</span>
        <span class="relative h-2.5 rounded-full bg-surface-tint">
          <span
            class="absolute inset-y-0 left-0 rounded-full bg-brand"
            :style="{ width: `${target.hit}%` }"
          />
          <span
            class="absolute -inset-y-1 w-0.5 rounded-full bg-ink"
            :style="{ left: `${target.base}%` }"
            :title="t({ es: 'Línea base', en: 'Baseline' })"
          />
        </span>
        <span class="tabular text-right font-semibold">{{ target.hit }}%</span>
      </li>
    </ul>
  </div>
</template>
