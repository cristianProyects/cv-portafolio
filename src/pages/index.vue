<script lang="ts" setup>
import { onMounted } from 'vue';
import useQuickLinks from '@/composables/useQuickLinks';

const { quickLinks, informationHeroComponent } = useQuickLinks();
onMounted(() => {
  window.scrollTo({ top: 0 });
});

</script>


<template>
  <HeroGlobal :title="informationHeroComponent.title" :subtitle="informationHeroComponent.subtitle"
    :description="informationHeroComponent.description" :actions="informationHeroComponent.actions" />

  <!-- Quick Links Section -->
  <section class="quick-links">
    <div class="quick-links-container">
      <div class="section-header">
        <h2 class="section-title">Explora mi trabajo</h2>
        <p class="section-description">
          Descubre mis experiencias, proyectos y habilidades técnicas
        </p>
      </div>

      <div class="links-grid" >
        <a v-for="(nav, index) in quickLinks" :key="nav.title" :href="`/${nav.link}`" class="link-card"
          :style="{ '--delay': `${index * 0.08}s` }">
          <div class="link-icon-wrapper">
            <div class="link-icon-ring"></div>
            <div class="link-icon">
              <v-icon :color="nav.color">{{ nav.icon }}</v-icon>
            </div>
          </div>

          <h3 class="link-title">{{ nav.title }}</h3>
          <p class="link-description">
            {{ nav.description }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.quick-links {
  padding: 90px 40px 100px;
  position: relative;
  z-index: 1;

  /* ligerísimo fondo de malla detrás de las cards */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top left,
        rgba(236, 72, 153, 0.14),
        transparent 55%),
      radial-gradient(circle at bottom right,
        rgba(59, 130, 246, 0.12),
        transparent 55%);
    opacity: 0.18;
    pointer-events: none;
    z-index: -1;
  }
}

.quick-links-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  margin-bottom: 18px;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f9a8d4;
  background: rgba(236, 72, 153, 0.12);
  border: 1px solid rgba(236, 72, 153, 0.4);
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  background: linear-gradient(135deg, #fff 0%, #ec4899 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

/* Grid de links */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

/* Card con animación de entrada + hover */
.link-card {
  --delay: 0s;

  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(148, 163, 184, 0.5);
  border-radius: 30px;
  padding: 42px 34px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  isolation: isolate;

  /* animación de entrada */
  opacity: 0;
  transform: translateY(35px) scale(0.96);
  animation: link-card-in 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  animation-delay: var(--delay);
  will-change: transform, opacity;

  &::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: conic-gradient(from 160deg,
        rgba(236, 72, 153, 0.16),
        transparent,
        rgba(59, 130, 246, 0.18),
        transparent,
        rgba(236, 72, 153, 0.16));
    opacity: 0;
    transform: rotate(0deg);
    transition: opacity 0.5s ease, transform 0.8s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-10px) scale(1.01);
    border-color: rgba(236, 72, 153, 0.7);
    box-shadow:
      0 28px 60px rgba(15, 23, 42, 0.9),
      0 0 0 1px rgba(236, 72, 153, 0.35);

    &::before {
      opacity: 1;
      transform: rotate(12deg);
    }
  }
}

/* Icono con anillo */
.link-icon-wrapper {
  position: relative;
  margin-bottom: 26px;
}

.link-icon-ring {
  width: 78px;
  height: 78px;
  border-radius: 999px;
  background: radial-gradient(circle,
      rgba(236, 72, 153, 0.35),
      transparent 60%);
  filter: blur(1px);
  opacity: 0.8;
}

.link-icon {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: radial-gradient(circle at top, #1f2937, #020617);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  .v-icon {
    font-size: 2rem;
  }
}

.link-card:hover .link-icon {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 1),
    0 0 0 1px rgba(236, 72, 153, 0.6);
}

/* Texto */
.link-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.link-description {
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.02rem;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

/* 🎬 Keyframes */
@keyframes link-card-in {
  0% {
    opacity: 0;
    transform: translateY(35px) scale(0.96);
  }

  60% {
    opacity: 1;
    transform: translateY(-4px) scale(1.01);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .quick-links {
    padding: 70px 30px 80px;
  }
}

@media (max-width: 768px) {
  .quick-links {
    padding: 60px 20px 70px;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .link-card {
    padding: 32px 26px;
  }
}

@media (max-width: 480px) {
  .quick-links {
    padding: 50px 16px 60px;
  }

  .link-card {
    padding: 28px 22px;
    border-radius: 24px;
  }

  .link-title {
    font-size: 1.5rem;
  }
}
</style>
