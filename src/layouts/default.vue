<script lang="ts" setup>
const pages = [
  { name: 'Inicio', link: '/' },
  { name: 'Experiencia', link: '/experiences' },
  { name: 'Proyectos', link: '/projects' },
  { name: 'Stack Tecnológico', link: '/techstack' },
];
</script>
<template>
  <v-main class="body">
    <div class="cuadricula"></div>
    <HeaderGlobal :pages="pages" />

    <router-view />
  </v-main>
</template>

//
<style>
.body {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.3), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3), transparent 50%),
    #0a0a0f;
  color: #fff;
  min-height: 100vh;
  position: relative;
}

.cuadricula {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}
</style>
