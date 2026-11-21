<!-- En celular oculta el contenido detrás de un botón "Ver detalle" para no alargar la página; desde
     tablet (md) el contenido siempre está visible y el botón no aparece. -->
<script setup lang="ts">
import { mdiChevronDown } from '@mdi/js'
import { ref, useId } from 'vue'
import AppIcon from './AppIcon.vue'

const {
  moreLabel,
  lessLabel,
  contentClass = '',
} = defineProps<{ moreLabel: string; lessLabel: string; contentClass?: string }>()
const open = ref(false)
const id = useId()
</script>

<template>
  <div :id="id" :class="[contentClass, open ? '' : 'max-md:hidden']">
    <slot />
  </div>
  <button
    type="button"
    class="mt-5 flex w-full items-center justify-center gap-1.5 rounded-[var(--radius-control)] bg-surface-soft py-3 text-sm font-semibold text-brand ring-1 ring-border transition-colors hover:bg-accent-soft md:hidden"
    :aria-expanded="open ? 'true' : 'false'"
    :aria-controls="id"
    @click="open = !open"
  >
    {{ open ? lessLabel : moreLabel }}
    <AppIcon
      :path="mdiChevronDown"
      :size="18"
      class="transition-transform duration-300"
      :class="open ? 'rotate-180' : ''"
    />
  </button>
</template>
