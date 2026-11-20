<!-- Ícono base con paths de @mdi/js (mismo componente que el proyecto de tours). Decorativo por
     defecto; con label se anuncia como imagen. -->
<script setup lang="ts">
const {
  path,
  label,
  size = 24,
} = defineProps<{
  path: string
  label?: string
  size?: number
}>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    focusable="false"
    class="shrink-0"
  >
    <path :d="path" />
  </svg>
</template>
