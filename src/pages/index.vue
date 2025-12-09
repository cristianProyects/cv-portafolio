<script lang="ts" setup>

const informationHeroComponent = {
  title: ['Soy', 'Cristian Espiridion'],
  subtitle: 'Desarrollador Full Stack',
  description: 'Especializado en crear experiencias digitales excepcionales. Con experiencia en Google y BBVA, transformo ideas en soluciones tecnológicas escalables.',
  actions: [
    { label: 'Ver Proyectos', link: '#proyectos', type: 'primary' },
    { label: 'Stack Tecnológico', link: '#stack', type: 'secondary' },
  ],
};

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
        <a href="#experiencia" class="link-card">
          <div class="link-icon">🚀</div>
          <h3 class="link-title">Experiencias Destacadas</h3>
          <p class="link-description">
            Mi trayectoria en Google México y BBVA, trabajando en proyectos de alto impacto
          </p>
        </a>

        <a href="#proyectos" class="link-card">
          <div class="link-icon">💼</div>
          <h3 class="link-title">Proyectos</h3>
          <p class="link-description">
            Soluciones innovadoras que he desarrollado: e-commerce, dashboards, APIs y más
          </p>
        </a>

        <a href="#stack" class="link-card">
          <div class="link-icon">💻</div>
          <h3 class="link-title">Stack Tecnológico</h3>
          <p class="link-description">
            Tecnologías y herramientas que domino: Vue, React, Node.js, Cloud y más
          </p>
        </a>
      </div>
    </div>
  </section>


</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3), transparent 50%),
    #0a0a0f;
  color: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}





/* Company Logos */
.companies {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.companies-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.company-logo-item {
  height: 40px;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: grayscale(100%) brightness(200%);
}

.company-logo-item:hover {
  opacity: 1;
  transform: scale(1.1);
  filter: grayscale(0%) brightness(100%);
}



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
  filter: drop-shadow(0 5px 15px rgba(236, 72, 153, 0.5));
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

/* Footer */
.footer {
  padding: 60px 40px 40px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3));
  border-color: rgba(236, 72, 153, 0.5);
  color: #fff;
  transform: translateY(-5px);
}

.footer-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {

  .hero-section {
    padding: 100px 20px 60px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-btn {
    justify-content: center;
  }

  .companies {
    gap: 30px;
  }

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
