<script setup lang="ts">
import { onMounted } from 'vue';
import useTechStack from '@/composables/useTechStack';
import vIntersect from '@/directives/vIntersect';

const { heroComponentProps, sections } = useTechStack();

onMounted(() => {
  window.scrollTo({ top: 0 });
});

</script>

<template>
  <HeroGlobal
    :title="heroComponentProps.title"
    :description="heroComponentProps.description"
  />

  <article class="tech-stack">
    <section
      v-for="section in sections"
      :key="section.id"
      class="tech-section"
    >
      <div class="title">
        <div class="gradient-number">
          {{ section.number }}
        </div>
        <h2>{{ section.title }}</h2>
      </div>

      <div class="logos">
        <div
          v-for="(logo, index) in section.logos"
          :key="logo"
          class="logo-card"
          v-intersect
          :style="{ '--delay': `${index * 0.06}s` }"
        >
          <img
            :src="logo"
            :alt="`${section.title} - logo`"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.tech-stack {
  margin: 0 auto;
  padding: 0 6rem;
  position: relative;
  z-index: 1;
}

/* Secciones */
.tech-section {
  margin-bottom: 5rem;

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    padding: 24px 32px;

    .gradient-number {
      font-size: 3.4rem;
      font-weight: 900;
      background: linear-gradient(135deg, #ec4899, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 800;
      background: linear-gradient(
        135deg,
        #ffffff,
        rgba(255, 255, 255, 0.7)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.8rem;
    justify-items: center;
  }
}

/* Card de logo */
.logo-card {
  --delay: 0s;

  width: 200px;
  height: 200px;
  border-radius: 28px;
  padding: 28px 24px;
  background: radial-gradient(
      circle at top left,
      rgba(236, 72, 153, 0.09),
      transparent 55%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(59, 130, 246, 0.08),
      transparent 55%
    ),
    rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.5);
  backdrop-filter: blur(18px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  position: relative;
  overflow: hidden;

  /* Estado inicial (antes de entrar al viewport) */
  opacity: 0;
  transform: translateY(18px) scale(0.96);

  &::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: conic-gradient(
      from 140deg,
      rgba(236, 72, 153, 0.1),
      transparent,
      rgba(59, 130, 246, 0.18),
      transparent,
      rgba(236, 72, 153, 0.1)
    );
    opacity: 0;
    transform: rotate(0deg);
    transition: opacity 0.5s ease, transform 0.8s ease;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 10px 25px rgba(15, 23, 42, 0.8));
    transition: transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease;
  }

  /* Cuando entra al viewport (v-intersect añade .is-visible) */
  &.is-visible {
    animation: logo-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(236, 72, 153, 0.7);
    box-shadow:
      0 24px 40px rgba(15, 23, 42, 0.9),
      0 0 0 1px rgba(236, 72, 153, 0.25);

    &::before {
      opacity: 1;
      transform: rotate(8deg);
    }

    img {
      transform: scale(1.06);
      filter: drop-shadow(0 16px 35px rgba(15, 23, 42, 0.95))
        saturate(1.05);
    }
  }
}

/* Animación de entrada */
@keyframes logo-in {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.96);
  }
  70% {
    opacity: 1;
    transform: translateY(-3px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .tech-stack {
    padding: 0 4rem;
  }

  .logo-card {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .tech-stack {
    padding: 0 2rem;
  }

  .tech-section .title {
    padding: 20px 18px;

    h2 {
      font-size: 2rem;
    }

    .gradient-number {
      font-size: 3rem;
    }
  }

  .logos {
    gap: 1.5rem;
  }

  .logo-card {
    width: 170px;
    height: 170px;
    padding: 22px 18px;
  }
}

@media (max-width: 480px) {
  .tech-stack {
    padding: 0 1rem;
  }

  .tech-section .title {
    margin-bottom: 28px;
  }

  .logo-card {
    width: 150px;
    height: 150px;
    padding: 18px 14px;
  }
}
</style>
