<script setup lang="ts">
import pAgroMera from '@/assets/projects/p_meraiot.png';
import pMeraShop from '@/assets/projects/p_merashop.png';
import pCartera from '@/assets/projects/p_cartera.png';
import pBBVA from '@/assets/projects/p_bbva.png';
import pTRIGOO from '@/assets/projects/p_trigoo.jpg';
</script>
<template>
    <article class="tech-stack">
        <section class="header">
            <h1>
                <span class="title-line">Mis</span>
                <span class="title-line gradient-text">Proyectos</span>
            </h1>
            <p class="subtitle">Soluciones innovadoras que he desarrollado para resolver problemas reales y crear
                impacto</p>
        </section>

              <!-- Experiencias Destacadas -->
        <section class="section">
            <div class="mesh-header">
                <div class="gradient-number">🚀</div>
                <h2 class="mesh-title">Experiencias Destacadas</h2>
            </div>

            <div class="experience-container">
                <!-- BBVA -->
                <div class="experience-card featured">
                    <div class="experience-header">
                        <div class="company-logo bbva-logo">
                            <img src="https://www.bbva.com/wp-content/uploads/2019/06/Marqueex2.png" alt="BBVA">
                        </div>
                        <div class="experience-badge current">Actual</div>
                    </div>
                    <div class="experience-content">
                        <h3 class="experience-title">BBVA México – Torre BBVA</h3>
                        <p class="experience-description">
                            Trabajo en proyectos internos de desarrollo web e integración de sistemas, colaborando en entornos de <strong>alta exigencia y seguridad bancaria</strong>. Esta experiencia me ha permitido fortalecer mis habilidades técnicas, comunicación con equipos multidisciplinarios y enfoque en soluciones escalables.
                        </p>
                        <div class="experience-highlights">
                            <div class="highlight-item">
                                <span class="highlight-icon">🏦</span>
                                <span class="highlight-text">Desarrollo de sistemas bancarios críticos</span>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-icon">🔒</span>
                                <span class="highlight-text">Entorno de alta seguridad</span>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-icon">👥</span>
                                <span class="highlight-text">Equipos multidisciplinarios</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- GOOGLE -->
                <div class="experience-card featured">
                    <div class="experience-header">
                        <div class="company-logo google-logo">
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google">
                        </div>
                        <div class="experience-badge google">Google</div>
                    </div>
                    <div class="experience-content">
                        <h3 class="experience-title">Google México – Oficinas CDMX</h3>
                        <p class="experience-description">
                            Participé como <strong>desarrollador y auditor técnico</strong> en sesiones con clientes, llevando MVPs (Minimum Viable Products) en colaboración con <strong>Googlers</strong>. Tuve la oportunidad de trabajar directamente en entornos reales dentro de Google, comprendiendo el flujo completo de desarrollo de soluciones empresariales basadas en la nube.
                        </p>
                        <div class="experience-highlights">
                            <div class="highlight-item">
                                <span class="highlight-icon">☁️</span>
                                <span class="highlight-text">Desarrollo de MVPs empresariales</span>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-icon">🔍</span>
                                <span class="highlight-text">Auditoría técnica con clientes</span>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-icon">🤝</span>
                                <span class="highlight-text">Colaboración con Googlers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tech-section language-section">
            <div class="title">
                <div class="gradient-number">01</div>
                <h2>Desarrollo  Web</h2>
            </div>
            <div class="projects-grid">

                <div class="project-card">
                    <img :src="pAgroMera"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">AgroMera IoT</h3>
                            <span class="project-type">Web App</span>
                        </div>
                        <p class="project-description">
                            Desarrollé un sistema completo de Internet de las Cosas (IoT) para la gestión de riegos en invernaderos. Implementé toda la arquitectura: desde el diseño de la base de datos y la configuración de una máquina virtual con protocolo MQTT, hasta el desarrollo del backend y frontend. El sistema permite monitorear variables clave, analizar datos y facilitar la toma de decisiones. Este proyecto fue mi primera experiencia integral que me introdujo al mundo del desarrollo web y la tecnología IoT.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Vuetify</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">MySql</span>
                            <span class="tech-tag">MQTT</span>
                            <span class="tech-tag">GCP</span>
                            <span class="tech-tag">Compute Engine</span>
                            <span class="tech-tag">WebSockets</span>
                            <span class="tech-tag">JWT</span>
                            <span class="tech-tag">NGINX</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <img :src="pMeraShop"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Mera Shop</h3>
                            <span class="project-type">Eccomerce Web</span>
                        </div>
                        <p class="project-description">
                            Desarrollé una tienda en línea integrada con Stripe como pasarela de pago, con el objetivo de modernizar y reemplazar una versión anterior basada en PrestaShop. El proyecto incluyó la implementación de pagos en línea, la creación de un diseño renovado alineado con la identidad de la empresa y la incorporación de nuevos servicios, como impresión 3D y cursos. Este desarrollo permitió mejorar la experiencia del usuario y ampliar las capacidades comerciales del negocio.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Vuetify</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express.js</span>
                            <span class="tech-tag">Stripe</span>
                            <span class="tech-tag">GCP</span>
                            <span class="tech-tag">MySql</span>
                            <span class="tech-tag">JWT</span>
                            <span class="tech-tag">NGINX</span>
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">GitHub</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <img :src="pCartera"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Cartera Liomont</h3>
                            <span class="project-type">Dashboard</span>
                        </div>
                        <p class="project-description">
                            Desarrollé un proyecto de análisis de datos llamado Cartera, en el cual implementé toda la lógica de negocio en el backend y trabajé a profundidad con SQL Server, creando vistas, stored procedures, linked servers, jobs y configuraciones avanzadas del servidor. También diseñé y construí dashboards en Tableau conectados a SQL Server, donde los datos eran procesados y depurados antes de su visualización. Finalmente, integré estos dashboards dentro de una aplicación web desarrollada con React, permitiendo al cliente acceder de forma centralizada y segura a toda la información analítica.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React.js</span>
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JS</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express.js</span>
                            <span class="tech-tag">JWT</span>
                            <span class="tech-tag">Tableau</span>
                            <span class="tech-tag">SQL Server</span>
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">GitHub</span>
                            <span class="tech-tag">NGINX</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img :src="pBBVA"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Dispersion BBVA</h3>
                            <span class="project-type">Web App</span>
                        </div>
                        <p class="project-description">
                           Desarrollé un módulo frontend para la plataforma de dispersión de recursos de Fundación BBVA. Este módulo permite configurar los montos a asignar por nivel y grado escolar, además de aplicar etiquetas que pueden incrementar o reducir la cantidad base. El flujo incluye procesos de validación y visto bueno (Vo.Bo.) antes de aprobar la configuración final. Mi participación estuvo enfocada exclusivamente en el desarrollo del frontal, asegurando una interfaz clara, dinámica y alineada con los requerimientos del sistema
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue 3.js</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">TS</span>
                            <span class="tech-tag">TanStackQuery</span>
                            <span class="tech-tag">Axios</span>
                            <span class="tech-tag">GCP</span>
                            <span class="tech-tag">App Engine</span>
                            <span class="tech-tag">Buckets</span>
                            <span class="tech-tag">Arquetipo</span>
                            <span class="tech-tag">Vitest</span>
                            <span class="tech-tag">SonarQube</span>
                            <span class="tech-tag">Jenkins</span>
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">BitBucket</span>
                            <span class="tech-tag">Jira</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img :src="pBBVA"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Captación donativos BBVA</h3>
                            <span class="project-type">Web App</span>
                        </div>
                        <p class="project-description">
                           Desarrollé el módulo de Desastres Naturales para la plataforma de captación de donativos de BBVA. Implementé un sistema de autenticación con Firebase y construí un flujo completo de pantallas para el registro de un donativo, recopilando tanto la información del donante como la del aporte realizado. La pasarela de pago se integró mediante un proveedor externo, por lo que el sistema debía coordinar la captura de datos y el envío seguro hacia este servicio. Mi rol se centró en el desarrollo del frontal, asegurando un proceso claro, seguro y eficiente para los usuarios que deseaban realizar donativos.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue 3.js</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">TS</span>
                            <span class="tech-tag">TanStackQuery</span>
                            <span class="tech-tag">Axios</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">GCP</span>
                            <span class="tech-tag">App Engine</span>
                            <span class="tech-tag">Buckets</span>
                            <span class="tech-tag">Arquetipo</span>
                            <span class="tech-tag">Vitest</span>
                            <span class="tech-tag">SonarQube</span>
                            <span class="tech-tag">Jenkins</span>
                            <span class="tech-tag">Git</span>
                            <span class="tech-tag">BitBucket</span>
                            <span class="tech-tag">Jira</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="title">
                <div class="gradient-number">02</div>
                <h2>No Code / AppSheet</h2>
            </div>
            <div class="projects-grid">

                <div class="project-card">
                    <img :src="pTRIGOO"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">TRIGOO</h3>
                            <span class="project-type">APP Web/Movil</span>
                        </div>
                        <p class="project-description">
                            Desarrollé un sistema en AppSheet que implementa lógica de negocio configurable y capaz de autogestionarse según las reglas definidas por el cliente FANASA. La plataforma permite que sus clientes, principalmente farmacias realicen negociaciones con laboratorios para la compra de medicamentos bajo distintos criterios y condiciones. Además, integré un flujo de aprobación para cada negociación y un sistema de reportería que centraliza y muestra la información generada. Este desarrollo permitió automatizar procesos clave y facilitar la gestión operativa del cliente.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">StoreProcedures</span>
                            <span class="tech-tag">Triggers</span>
                            <span class="tech-tag">AppScript</span>
                            <span class="tech-tag">AppSheet</span>
                            <span class="tech-tag">LookerStudio</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="https://play-lh.googleusercontent.com/UVQSNpR3Alvkgou8OGNF9nmjvVMh0WOrn2HMUiSzl_KCB_cWECQt55Sjdd1ayD7CNpyx=w600-h300-pc0xffffff-pd"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Gestion OfficeDepot</h3>
                            <span class="project-type">APP Web/Movil</span>
                        </div>
                        <p class="project-description">
                            Desarrollé un sistema en AppSheet para Office Depot que permite gestionar el inventario de productos y administrar procesos relacionados con instalaciones, técnicos, ventas y categorización de artículos. Además, implementé un módulo de reportería que facilita la consulta de información por cada tienda a nivel nacional. Este desarrollo proporcionó una solución centralizada y de fácil uso para optimizar la operación de sus sucursales en México.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">StoreProcedures</span>
                            <span class="tech-tag">Triggers</span>
                            <span class="tech-tag">AppScript</span>
                            <span class="tech-tag">AppSheet</span>
                            <span class="tech-tag">LookerStudio</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <img src="https://ventasmg.com/wp-content/uploads/2024/03/IMG-58.png"
                        alt="E-Commerce Platform" class="project-image">
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">Bitacora Herdez</h3>
                            <span class="project-type">APP Web/Movil</span>
                        </div>
                        <p class="project-description">
                            Desarrollé una aplicación en AppSheet para Herdez que permite gestionar bitácoras de auditoría en cada uno de sus proveedores. La aplicación guía diversos procesos de verificación para asegurar que los cultivos y productos cumplan con las políticas de calidad de la empresa. Además, implementé la generación automática de reportes en PDF que consolidan toda la información capturada durante las auditorías, facilitando su descarga y documentación formal.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">StoreProcedures</span>
                            <span class="tech-tag">Triggers</span>
                            <span class="tech-tag">AppScript</span>
                            <span class="tech-tag">AppSheet</span>
                            <span class="tech-tag">LookerStudio</span>
                        </div>
                    </div>
                </div>

                
            </div>
                
        </section>


    </article>
</template>
<style scoped lang="scss">
          /* Section Header */
        .section {
            margin-bottom: 80px;
        }

        .mesh-header {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-bottom: 50px;
            padding: 35px 45px;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05));
            backdrop-filter: blur(20px);
            border-radius: 25px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .mesh-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }

        .mesh-header:hover {
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1));
            border-color: rgba(236, 72, 153, 0.4);
            box-shadow: 0 10px 40px rgba(236, 72, 153, 0.2);
            transform: translateY(-5px);
        }

        .mesh-header:hover::before {
            transform: translateX(100%);
        }

        .gradient-number {
            font-size: 5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #ec4899, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            position: relative;
            animation: numberPulse 3s ease-in-out infinite;
        }

        .gradient-number::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #ec4899, #3b82f6);
            border-radius: 2px;
            opacity: 0.5;
        }

        @keyframes numberPulse {
            0%, 100% {
                filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.4));
            }
            50% {
                filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
            }
        }

        .mesh-title {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, #ec4899 50%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            padding-left: 15px;
            letter-spacing: -1px;
        }

        .mesh-title::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 5px;
            background: linear-gradient(180deg, #ec4899 0%, #3b82f6 100%);
            border-radius: 3px;
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
        }
         /* Experience Cards */
        .experience-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin-bottom: 80px;
        }

        .experience-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            padding: 40px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .experience-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05));
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .experience-card.featured {
            border-width: 2px;
        }

        .experience-card:hover {
            transform: translateY(-10px);
            border-color: rgba(236, 72, 153, 0.5);
            box-shadow: 
                0 30px 60px rgba(236, 72, 153, 0.3),
                0 0 0 1px rgba(236, 72, 153, 0.2);
        }

        .experience-card:hover::before {
            opacity: 1;
        }

        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            position: relative;
            z-index: 1;
        }

        .company-logo {
            height: 50px;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .company-logo img {
            height: 100%;
            width: auto;
            object-fit: contain;
            border-radius: 15px;
        }

        .bbva-logo {
            background: #004481;
        }

        .google-logo {
            background: white;
            padding: 8px 15px;
        }

        .experience-badge {
            padding: 8px 20px;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2));
            border: 2px solid rgba(236, 72, 153, 0.4);
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 700;
            color: #ec4899;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: badgePulse 3s ease-in-out infinite;
        }

        .experience-badge.current {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2));
            border-color: rgba(34, 197, 94, 0.5);
            color: #22c55e;
        }

        .experience-badge.google {
            background: linear-gradient(135deg, rgba(234, 67, 53, 0.2), rgba(66, 133, 244, 0.2));
            border-color: rgba(66, 133, 244, 0.5);
            color: #4285f4;
        }

        .experience-content {
            position: relative;
            z-index: 1;
        }

        .experience-title {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }

        .experience-period {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .experience-period::before {
            content: '📅';
            font-size: 1.2rem;
        }

        .experience-description {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.8;
            font-size: 1.05rem;
            margin-bottom: 25px;
        }

        .experience-description strong {
            color: #ec4899;
            font-weight: 700;
        }

        .experience-highlights {
            display: grid;
            gap: 15px;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
        }

        .highlight-item:hover {
            background: rgba(236, 72, 153, 0.1);
            border-color: rgba(236, 72, 153, 0.3);
            transform: translateX(5px);
        }

        .highlight-icon {
            font-size: 1.5rem;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2));
            border-radius: 12px;
            flex-shrink: 0;
        }

        .highlight-text {
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            font-size: 1rem;
        }

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 30px;
}

.tech-stack {
    margin: 0 auto;
    padding: 0rem 6rem;
    position: relative;
    z-index: 1;
}

/* Responsive */
@media (max-width: 1024px) {
    .tech-stack {
        padding: 0rem 6rem;
    }
}

@media (max-width: 768px) {
    .tech-stack {
        padding: 0rem 3rem;
    }

}

@media (max-width: 480px) {
     /* Experience Cards */
        .experience-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-bottom: 80px;
        }
    .tech-stack {
        padding: 0rem 1rem;
    }
    .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
}


}

.header {
    height: 100dvh;
    text-align: center;
    align-content: center;

    h1 {
        font-size: clamp(3.5rem, 10vw, 7rem);
        font-weight: 900;
        margin-bottom: 20px;
        line-height: 1.1;
        letter-spacing: -3px;
    }

    .title-line {
        display: block;
    }

    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .subtitle {
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.6);
        max-width: 700px;
        margin: 0 auto 50px;
        line-height: 1.6;
    }

}

.tech-section {
    margin-bottom: 5rem;

    .title {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        margin-bottom: 50px;
        padding: 30px 40px;

        .gradient-number {
            font-size: 4rem;
            font-weight: 900;
            background: linear-gradient(135deg, #ec4899, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        h2 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.6));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    .project-card {
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;

        .project-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-content {
            padding: 30px;
            position: relative;
            z-index: 1;
            text-align: justify;

            .project-header {
                display: flex;
                justify-content: space-between;
                align-items: start;
                margin-bottom: 15px;

                .project-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 10px;
                }

                .project-type {
                    display: inline-block;
                    padding: 6px 15px;
                    background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2));
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #a78bfa;
                    border: 1px solid rgba(167, 139, 250, 0.3);
                }
            }

            .project-description {
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.6;
                margin-bottom: 20px;
                font-size: 1rem;
            }

            .project-tech {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 20px;

                .tech-tag {
                    padding: 6px 14px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }

                .tech-tag:hover {
                    background: rgba(236, 72, 153, 0.2);
                    border-color: rgba(236, 72, 153, 0.5);
                    color: #fff;
                }
            }
        }
    }

    .project-card:hover .project-image {
        transform: scale(1.1);
    }


    .project-card:hover {
        transform: translateY(-15px);
        border-color: rgba(236, 72, 153, 0.5);
        box-shadow:
            0 30px 60px rgba(236, 72, 153, 0.3),
            0 0 0 1px rgba(236, 72, 153, 0.2);
    }

    .project-card:hover::before,
    .project-card:hover::after {
        opacity: 1;
    }

}
</style>
