// Configuración de Vite: Vue, Tailwind v4, alias @ y pruebas con jsdom.
// `base` coincide con la ruta de GitHub Pages (https://cristianproyects.github.io/cv-portafolio/).
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: '/cv-portafolio/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { port: 3000 },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts'],
  },
})
