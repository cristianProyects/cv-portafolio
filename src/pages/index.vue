<script lang="ts" setup>

const informationHeroComponent = {
  title: ['Soy', 'Cristian Espiridion'],
  subtitle: 'Desarrollador Full Stack',
  description: 'Especializado en crear experiencias digitales excepcionales. Con experiencia en Google y BBVA, transformo ideas en soluciones tecnológicas escalables.',
  actions: [
    { label: 'Ver Proyectos', link: 'projects', type: 'primary' },
    { label: 'Stack Tecnológico', link: 'techstack', type: 'secondary' },
  ],
};

const quickLinks = [
  {
    title: 'Experiencias Destacadas',
    description: 'Mi trayectoria en Google México y BBVA, trabajando en proyectos de alto impacto',
    icon: 'mdi-rocket-launch',
    link: 'experience',
    color: 'red',
  },
  {
    title: 'Proyectos',
    description: 'Soluciones innovadoras que he desarrollado: e-commerce, dashboards, APIs y más',
    icon: 'mdi-briefcase-variant',
    link: 'projects',
    color: 'brown',

  },
  {
    title: 'Stack Tecnológico',
    description: 'Tecnologías y herramientas que domino: Vue, React, Node.js, Cloud y más',
    icon: 'mdi-laptop',
    link: 'techstack',
    color: 'grey',
  },
];

</script>

<template>
  <HeroGlobal :title="informationHeroComponent.title" :subtitle="informationHeroComponent.subtitle"
    :description="informationHeroComponent.description" :actions="informationHeroComponent.actions" />

  <!-- Quick Links Section -->
  <section class="quick-links">
    <div class="quick-links-container">
      <div class="section-header">
        <h2 class="section-title">Explora mi trabajo</h2>
        <p class="section-description">Descubre mis experiencias, proyectos y habilidades técnicas</p>
      </div>

      <div class="links-grid">
        <a :href="nav.link" class="link-card" v-for="nav in quickLinks" :key="nav.title">
          <div class="link-icon"><v-icon :color="nav.color">{{ nav.icon }}</v-icon></div>
          <h3 class="link-title">{{ nav.title }}</h3>
          <p class="link-description">
            {{nav.description}}
          </p>
        </a>
      </div>
    </div>
  </section>


</template>

<style scoped lang="scss">
/* Quick Links Section */
.quick-links {
  padding: 100px 40px;
  position: relative;
  z-index: 1;
}

.quick-links-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  background: linear-gradient(135deg, #fff 0%, #ec4899 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.link-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 50px 40px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.link-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1));
  opacity: 0;
  transition: opacity 0.5s ease;
}

.link-card:hover {
  transform: translateY(-15px);
  border-color: rgba(236, 72, 153, 0.5);
  box-shadow: 0 30px 60px rgba(236, 72, 153, 0.3);
}

.link-card:hover::before {
  opacity: 1;
}

.link-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  transition: transform 0.5s ease;
}

.link-card:hover .link-icon {
  transform: scale(1.2) rotate(5deg);
}

.link-title {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.link-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {

  .company-logo-item {
    height: 30px;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .link-card {
    padding: 40px 30px;
  }
}
</style>
