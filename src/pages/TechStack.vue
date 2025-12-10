<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  window.scrollTo({ top: 0 });
});
const languageLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
];

const cloudLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg',
  'https://blog.kakaocdn.net/dn/WSVB2/btsyEUF6UT2/TBuRkGbTFDwlZ6BKV0ksFK/img.png',
  'https://iconape.com/wp-content/png_logo_vector/google-appengine-logo.png',
  'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/google-appsheet-logo.png',
];

const databaseLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
];

const versionControlLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
];

const toolsLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'https://websockets.readthedocs.io/en/10.2/_static/websockets.svg',
  'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-qmopau7qaog2hcyqa1r78m.png/jwt-nuo0qqa4imspf51wa8qqr.png?_a=DATAg1AAZAA0',
  'https://1000logos.net/wp-content/uploads/2022/03/Tableau-Logo.png',
];

const heroComponentProps = {
  title: ['Stack', 'Tecnológico'],
  description:
    'Desarrollador Full Stack que ve la tecnología como un camino de aprendizaje continuo. Me motiva crear, mejorar y entender cómo la tecnología puede simplificar la vida de las personas.',
};

type StackSection = {
  id: string;
  number: string;
  title: string;
  logos: string[];
};

const sections: StackSection[] = [
  {
    id: 'languages',
    number: '01',
    title: 'Lenguajes',
    logos: languageLogos,
  },
  {
    id: 'cloud',
    number: '02',
    title: 'Servicios en la nube',
    logos: cloudLogos,
  },
  {
    id: 'databases',
    number: '03',
    title: 'Bases de datos',
    logos: databaseLogos,
  },
  {
    id: 'version-control',
    number: '04',
    title: 'Control de versiones',
    logos: versionControlLogos,
  },
  {
    id: 'tools',
    number: '05',
    title: 'Herramientas y otros',
    logos: toolsLogos,
  },
];

const getAlt = (logo: string, sectionTitle: string) =>
  `${sectionTitle} - logo`;

/**
 * Directiva para animar logo-cards solo al entrar en el viewport
 * v-intersect => añade la clase .is-visible cuando el elemento es visible
 */
type IntersectEl = HTMLElement & { _observer?: IntersectionObserver };

const vIntersect = {
  mounted(el: IntersectEl) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el); // solo una vez
        }
      },
      {
        threshold: 0.25, // ~25% visible
      },
    );

    el._observer = observer;
    observer.observe(el);
  },
  unmounted(el: IntersectEl) {
    el._observer?.disconnect();
  },
};

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
            :alt="getAlt(logo, section.title)"
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
