<script lang="ts" setup>
import { onMounted } from 'vue';
import bbvaMe from '@/assets/bbva_yo.jpg';
import googleMe from '@/assets/google_yo_yo.jpg';
import confetti from 'canvas-confetti';

const heroComponentProps = {
  title: ['Experiencias', 'Destacadas'],
  description: 'Mi trayectoria en Google México y BBVA, trabajando en proyectos de alto impacto.',
};

type Highlight = {
  icon: string;
  text: string;
};

type Experience = {
  id: string;
  company: string;
  title: string;
  locationTag: string;
  badgeLabel: string;
  badgeVariant: 'current' | 'google' | 'default';
  logoUrl: string;
  logoClass: string;
  image: string;
  imageAlt: string;
  descriptionHtml: string;
  highlights: Highlight[];
};

const experiences: Experience[] = [
  {
    id: 'bbva',
    company: 'BBVA México',
    title: 'BBVA México – Torre BBVA',
    locationTag: 'Torre BBVA · CDMX',
    badgeLabel: 'Actual',
    badgeVariant: 'current',
    logoUrl: 'https://www.bbva.com/wp-content/uploads/2019/06/Marqueex2.png',
    logoClass: 'bbva-logo',
    image: bbvaMe,
    imageAlt: 'Yo en la Torre BBVA México',
    descriptionHtml: `
      Trabajo en proyectos internos de <strong>desarrollo web</strong> e <strong>integración de sistemas</strong>,
      colaborando en entornos de <strong>alta exigencia y seguridad bancaria</strong>. Esta experiencia me ha
      permitido fortalecer mis <strong>habilidades técnicas</strong>, la comunicación con <strong>equipos multidisciplinarios</strong>
      y el enfoque en <strong>soluciones escalables</strong>.
    `,
    highlights: [
      { icon: '🏦', text: 'Desarrollo de sistemas bancarios críticos' },
      { icon: '🔒', text: 'Flujos con alta seguridad y cumplimiento' },
      { icon: '👥', text: 'Trabajo con equipos multidisciplinarios' },
    ],
  },
  {
    id: 'google',
    company: 'Google México',
    title: 'Google México – Oficinas CDMX',
    locationTag: 'Oficinas Google · CDMX',
    badgeLabel: 'Google',
    badgeVariant: 'google',
    logoUrl:
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    logoClass: 'google-logo',
    image: googleMe,
    imageAlt: 'Yo en las oficinas de Google México',
    descriptionHtml: `
      Participé como <strong>desarrollador</strong> y <strong>auditor técnico</strong> en sesiones con clientes,
      llevando <strong>MVPs (Minimum Viable Products)</strong> en colaboración con <strong>Googlers</strong>. Tuve la
      oportunidad de trabajar directamente en entornos reales dentro de Google, entendiendo el flujo completo de
      desarrollo de <strong>soluciones empresariales basadas en la nube</strong>.
    `,
    highlights: [
      { icon: '☁️', text: 'MVPs empresariales sobre Google Cloud' },
      { icon: '🔍', text: 'Auditoría técnica en sesiones con clientes' },
      { icon: '🤝', text: 'Colaboración directa con Googlers' },
    ],
  },
];

/**
 * Lanza confeti a pantalla completa al entrar
 */
const launchFullScreenConfetti = () => {
  const duration = 2000;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 40,
    spread: 360,
    ticks: 70,
    zIndex: 9999,
  };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = Math.round(120 * (timeLeft / duration));

    // Izquierda
    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: randomInRange(0.1, 0.3),
      },
    });

    // Derecha
    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: randomInRange(0.1, 0.3),
      },
    });

    // Centro
    confetti({
      ...defaults,
      particleCount: particleCount / 2,
      origin: { x: 0.5, y: randomInRange(0.2, 0.5) },
    });
  }, 250);
};

onMounted(() => {
  setTimeout(() => {
    launchFullScreenConfetti();
  }, 300);
});
</script>

<template>
  <HeroGlobal
    :title="heroComponentProps.title"
    :description="heroComponentProps.description"
  />

  <section class="experiences-section">
    <div class="experiences-header">
      <span class="experiences-pill">Experiencias en la industria</span>
      <p class="experiences-subtitle">
        Proyectos reales en Google México y BBVA trabajando con equipos y
        sistemas de alto impacto.
      </p>
    </div>

    <div class="experience-container">
      <article
        v-for="(exp, index) in experiences"
        :key="exp.id"
        class="experience-card"
        :class="[
          { 'experience-card--reverse': index % 2 === 1 },
          `experience-card--${exp.id}`,
        ]"
        :style="{ '--delay': `${index * 0.15}s` }"
      >
        <!-- Imagen -->
        <div class="experience-card__media">
          <img :src="exp.image" :alt="exp.imageAlt" loading="lazy" />
          <div class="experience-card__media-tag">
            <span class="tag-dot"></span>
            <span>{{ exp.locationTag }}</span>
          </div>
        </div>

        <!-- Contenido -->
        <div class="experience-card__content">
          <header class="experience-card__header">
            <div class="company-logo" :class="exp.logoClass">
              <img :src="exp.logoUrl" :alt="exp.company" />
            </div>
            <div
              class="experience-badge"
              :class="`experience-badge--${exp.badgeVariant}`"
            >
              {{ exp.badgeLabel }}
            </div>
          </header>

          <h3 class="experience-card__title">
            {{ exp.title }}
          </h3>

          <p
            class="experience-card__description"
            v-html="exp.descriptionHtml"
          />

          <div class="experience-card__highlights">
            <div
              v-for="(item, idx) in exp.highlights"
              :key="item.text"
              class="highlight-item"
              :style="{ '--h-delay': `${idx * 0.08}s` }"
            >
              <span class="highlight-item__icon">{{ item.icon }}</span>
              <span class="highlight-item__text">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experiences-section {
  margin-bottom: 80px;
  padding: 0 6rem 80px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at top left,
        rgba(236, 72, 153, 0.14),
        transparent 55%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(59, 130, 246, 0.12),
        transparent 55%
      );
    opacity: 0.18;
    pointer-events: none;
    z-index: -1;
  }

  .experience-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

/* Header pequeño para alinear con el home */
.experiences-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 40px;

  .experiences-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    margin-bottom: 14px;
    border-radius: 999px;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #f9a8d4;
    background: rgba(236, 72, 153, 0.12);
    border: 1px solid rgba(236, 72, 153, 0.4);
  }

  .experiences-subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
  }
}

/* Card base alineada con estilos de link-card / project-card */
.experience-card {
  --delay: 0s;

  display: flex;
  gap: 26px;
  align-items: stretch;

  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  padding: 26px 26px;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  opacity: 0;
  transform: translateY(26px) scale(0.97);
  animation: card-in 0.75s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  animation-delay: var(--delay);

  &::before {
    content: '';
    position: absolute;
    inset: -40%;
    background: conic-gradient(
      from 160deg,
      rgba(236, 72, 153, 0.16),
      transparent,
      rgba(59, 130, 246, 0.18),
      transparent,
      rgba(236, 72, 153, 0.16)
    );
    opacity: 0;
    transform: rotate(0deg);
    transition: opacity 0.5s ease, transform 0.8s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-10px) scale(1);
    border-color: rgba(236, 72, 153, 0.7);
    box-shadow:
      0 30px 60px rgba(15, 23, 42, 0.9),
      0 0 0 1px rgba(236, 72, 153, 0.4);

    &::before {
      opacity: 1;
      transform: rotate(10deg);
    }

    .experience-card__media img {
      transform: scale(1.08);
      filter: saturate(1.18) contrast(1.06);
    }

    .company-logo {
      transform: translateY(-2px) scale(1.06);
      box-shadow: 0 16px 35px rgba(15, 23, 42, 0.9);
    }
  }

  &--reverse {
    flex-direction: row-reverse;
  }

  &--bbva {
    /* si luego quieres acento más azul, aquí es el lugar */
  }

  &--google {
    /* aquí podrías aplicar un ligero acento con los colores de Google */
  }
}

/* Animación de entrada */
@keyframes card-in {
  0% {
    opacity: 0;
    transform: translateY(26px) scale(0.97);
  }
  70% {
    opacity: 1;
    transform: translateY(-4px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* MEDIA (foto) */
.experience-card__media {
  position: relative;
  flex: 0 0 35%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.5);
  min-height: 260px;
  max-height: 420px;
  background: radial-gradient(
    circle at top left,
    rgba(236, 72, 153, 0.2),
    transparent 60%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.03);
    transition: transform 0.6s ease, filter 0.6s ease;
    filter: saturate(1.05) contrast(1.02);
  }

  &-tag {
    position: absolute;
    left: 16px;
    bottom: 16px;
    padding: 6px 13px;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    color: rgba(248, 250, 252, 0.96);
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.9);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.95);
    z-index: 2;

    .tag-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
    }
  }
}

/* CONTENIDO */
.experience-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.experience-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo empresa (sin bordes, redondeado) */
.company-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  padding: 4px 12px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.7);
  transform: translateY(0) scale(1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  img {
    max-height: 32px;
    width: auto;
    object-fit: contain;
    border-radius: 999px;
  }

  &.bbva-logo img {
    max-height: 30px;
  }

  &.google-logo img {
    max-height: 26px;
  }
}

/* Badges */
.experience-badge {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(236, 72, 153, 0.5);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: badge-pulse 3s ease-in-out infinite;
  background: linear-gradient(
    135deg,
    rgba(236, 72, 153, 0.2),
    rgba(59, 130, 246, 0.2)
  );
  color: #fecdd3;

  &--current {
    background: linear-gradient(
      135deg,
      rgba(34, 197, 94, 0.25),
      rgba(59, 130, 246, 0.25)
    );
    border-color: rgba(34, 197, 94, 0.7);
    color: #bbf7d0;
  }

  &--google {
    background: linear-gradient(
      135deg,
      rgba(234, 67, 53, 0.25),
      rgba(66, 133, 244, 0.25)
    );
    border-color: rgba(66, 133, 244, 0.8);
    color: #bfdbfe;
  }
}

@keyframes badge-pulse {
  0%,
  100% {
    transform: translateY(0);
    box-shadow: 0 0 8px rgba(236, 72, 153, 0.4);
  }
  50% {
    transform: translateY(-1px);
    box-shadow: 0 0 16px rgba(59, 130, 246, 0.6);
  }
}

/* Títulos y texto */
.experience-card__title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.experience-card__description {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
  font-size: 1.02rem;

  strong {
    color: #ec4899;
    font-weight: 700;
  }
}

/* Highlights */
.experience-card__highlights {
  display: grid;
  gap: 10px;
}

.highlight-item {
  --h-delay: 0s;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 9px 14px;
  background: rgba(15, 23, 42, 0.9);
  border-radius: 15px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  transition: all 0.25s ease;

  opacity: 0;
  transform: translateY(8px);
  animation: highlight-in 0.35s ease-out forwards;
  animation-delay: calc(var(--delay) + var(--h-delay));

  &:hover {
    background: rgba(236, 72, 153, 0.18);
    border-color: rgba(236, 72, 153, 0.6);
    transform: translateY(0) translateX(3px);
  }

  &__icon {
    font-size: 1.3rem;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    flex-shrink: 0;
    background: rgba(236, 72, 153, 0.35);
  }

  &__text {
    color: rgba(248, 250, 252, 0.96);
    font-weight: 600;
    font-size: 0.95rem;
  }
}

@keyframes highlight-in {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .experiences-section {
    padding: 0 3rem 60px;
  }

  .experience-card,
  .experience-card--reverse {
    flex-direction: column;
  }

  .experience-card__media {
    flex-basis: auto;
    min-height: 240px;
    max-height: 380px;
  }
}

@media (max-width: 640px) {
  .experiences-section {
    padding: 0 1.5rem 50px;
  }

  .experience-card {
    padding: 20px 18px;
    gap: 18px;
  }

  .experience-card__title {
    font-size: 1.6rem;
  }

  .experience-card__media {
    min-height: 220px;
  }

  .experience-card__media-tag {
    left: 12px;
    bottom: 12px;
    padding: 5px 11px;
    font-size: 0.8rem;
  }
}
</style>
