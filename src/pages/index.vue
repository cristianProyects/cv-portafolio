<script lang="ts" setup>


</script>

<template>
  <!-- Header -->

    <!-- Hero Section -->
    <section class="hero-section" id="inicio">
        <div class="hero-content">
            
            <h1 class="hero-title">
                Soy <span class="hero-name">Cristian Espiridion</span>
            </h1>
            
            <p class="hero-role">Desarrollador Full Stack</p>
            
            <p class="hero-description">
                Especializado en crear experiencias digitales excepcionales. Con experiencia en Google y BBVA, transformo ideas en soluciones tecnológicas escalables.
            </p>

            <div class="hero-buttons">
                <a href="#proyectos" class="hero-btn primary">
                    Ver Proyectos →
                </a>
                <a href="#stack" class="hero-btn secondary">
                    Stack Tecnológico
                </a>
            </div>

            
        </div>

        <div class="scroll-indicator">
            <span class="scroll-text">Baja </span>
            <div class="scroll-arrow"></div>
        </div>
    </section>

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

        .mesh-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: 0;
        }

      

        /* Hero Section */
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 40px 80px;
            position: relative;
            z-index: 1;
        }

        .hero-content {
            max-width: 1200px;
            text-align: center;
        }

        .hero-badge {
            display: inline-block;
            padding: 10px 25px;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2));
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            backdrop-filter: blur(10px);
            margin-bottom: 30px;
            font-weight: 600;
            animation: badgePulse 3s ease-in-out infinite;
        }

        @keyframes badgePulse {
            0%, 100% {
                box-shadow: 0 0 30px rgba(236, 72, 153, 0.3);
                transform: scale(1);
            }
            50% {
                box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
                transform: scale(1.05);
            }
        }

        .hero-title {
            font-size: clamp(3rem, 10vw, 7rem);
            font-weight: 900;
            margin-bottom: 20px;
            line-height: 1.1;
            letter-spacing: -3px;
        }

        .hero-name {
            background: linear-gradient(135deg, #ec4899 0%, #3b82f6 50%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            animation: titleGlow 3s ease-in-out infinite;
        }

        @keyframes titleGlow {
            0%, 100% {
                filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.4));
            }
            50% {
                filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
            }
        }

        .hero-role {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 30px;
        }

        .hero-description {
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 0.7);
            max-width: 800px;
            margin: 0 auto 40px;
            line-height: 1.6;
        }

        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 60px;
        }

        .hero-btn {
            padding: 16px 40px;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 30px;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .hero-btn.primary {
            background: linear-gradient(135deg, #ec4899, #3b82f6);
            color: white;
            border: none;
        }

        .hero-btn.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(236, 72, 153, 0.5);
        }

        .hero-btn.secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .hero-btn.secondary:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(236, 72, 153, 0.5);
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

        /* Scroll Indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-10px); }
        }

        .scroll-text {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .scroll-arrow {
            width: 30px;
            height: 50px;
            border: 2px solid rgba(236, 72, 153, 0.5);
            border-radius: 20px;
            position: relative;
        }

        .scroll-arrow::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background: #ec4899;
            border-radius: 50%;
            animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes scrollDot {
            0% { top: 8px; opacity: 1; }
            100% { top: 30px; opacity: 0; }
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


