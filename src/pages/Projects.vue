<script setup lang="ts">

import pAgroMera from '@/assets/projects/p_meraiot.png';
import pMeraShop from '@/assets/projects/p_merashop.png';
import pCartera from '@/assets/projects/p_cartera.png';
import pBBVA from '@/assets/projects/p_bbva.png';
import pTRIGOO from '@/assets/projects/p_trigoo.jpg';

import { onMounted } from 'vue';
onMounted(() => {
    window.scrollTo({ top: 0 });
});

const heroComponentProps = {
    title: ['Mis', 'Proyectos'],
    description:
        'Soluciones innovadoras que he desarrollado para resolver problemas reales y crear impacto.',
};

type Project = {
    title: string;
    type: string;
    image: string;
    description: string;
    techStack: string[];
};

const developWeb: Project[] = [
    {
        title: 'AgroMera IoT',
        type: 'Web App',
        image: pAgroMera,
        description: `Desarrollé un sistema completo de Internet de las Cosas (IoT) para la gestión de riegos en invernaderos. 
        Implementé toda la arquitectura: desde el diseño de la base de datos y la configuración de una máquina virtual con protocolo MQTT, 
        hasta el desarrollo del backend y frontend. El sistema permite monitorear variables clave, analizar datos y facilitar la toma de decisiones. 
        Este proyecto fue mi primera experiencia integral que me introdujo al mundo del desarrollo web y la tecnología IoT.`,
        techStack: [
            'Vue.js',
            'Vuetify',
            'Node.js',
            'Express.js',
            'MongoDB',
            'MySql',
            'MQTT',
            'GCP',
            'Compute Engine',
            'WebSockets',
            'JWT',
            'NGINX',
        ],
    },
    {
        title: 'Mera Shop',
        type: 'Ecommerce Web',
        image: pMeraShop,
        description: `Desarrollé una tienda en línea integrada con Stripe como pasarela de pago, 
        con el objetivo de modernizar y reemplazar una versión anterior basada en PrestaShop. 
        Incluyó la implementación de pagos en línea, un diseño renovado alineado con la identidad de la empresa 
        y nuevos servicios como impresión 3D y cursos. 
        Este desarrollo mejoró la experiencia del usuario y amplió las capacidades comerciales del negocio.`,
        techStack: [
            'Vue.js',
            'Vuetify',
            'Node.js',
            'Express.js',
            'Stripe',
            'GCP',
            'MySql',
            'JWT',
            'NGINX',
            'Git',
            'GitHub',
        ],
    },
    {
        title: 'Cartera Liomont',
        type: 'Dashboard',
        image: pCartera,
        description: `Desarrollé un proyecto de análisis de datos llamado Cartera, implementando toda la lógica de negocio en el backend. 
        Trabajé con SQL Server creando vistas, stored procedures, linked servers, jobs y configuraciones avanzadas. 
        Diseñé dashboards en Tableau conectados al servidor, procesando y depurando los datos antes de su visualización. 
        Finalmente integré estos dashboards dentro de una aplicación web en React, permitiendo al cliente acceder de forma centralizada y segura.`,
        techStack: [
            'React.js',
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Express.js',
            'JWT',
            'Tableau',
            'SQL Server',
            'Git',
            'GitHub',
            'NGINX',
        ],
    },
    {
        title: 'Dispersión BBVA',
        type: 'Web App',
        image: pBBVA,
        description: `Desarrollé un módulo frontend para la plataforma de dispersión de recursos de Fundación BBVA. 
        Este módulo permite configurar montos a asignar por nivel y grado escolar, aplicar etiquetas que modifican los valores base, 
        e incluir flujos de validación y Vo.Bo. antes de aprobar configuraciones finales. 
        Mi participación se centró en el desarrollo del frontal, garantizando una interfaz clara, dinámica y alineada con los requerimientos del sistema.`,
        techStack: [
            'Vue 3.js',
            'SCSS',
            'TS',
            'TanStackQuery',
            'Axios',
            'GCP',
            'App Engine',
            'Buckets',
            'Arquetipo',
            'Vitest',
            'SonarQube',
            'Jenkins',
            'Git',
            'BitBucket',
            'Jira',
        ],
    },
    {
        title: 'Captación Donativos BBVA',
        type: 'Web App',
        image: pBBVA,
        description: `Desarrollé el módulo de Desastres Naturales para la plataforma de captación de donativos de BBVA. 
        Implementé autenticación con Firebase y un flujo completo para registrar donativos, 
        recopilando información de donantes y aportes. 
        La pasarela de pago fue integrada mediante un proveedor externo, coordinando la captura y envío seguro de datos. 
        Mi rol se centró en el desarrollo del frontal, asegurando un proceso claro, seguro y eficiente para los usuarios.`,
        techStack: [
            'Vue 3.js',
            'SCSS',
            'TS',
            'TanStackQuery',
            'Axios',
            'Firebase',
            'GCP',
            'App Engine',
            'Buckets',
            'Arquetipo',
            'Vitest',
            'SonarQube',
            'Jenkins',
            'Git',
            'BitBucket',
            'Jira',
        ],
    },
];

const noCodeProjects: Project[] = [
    {
        title: 'TRIGOO',
        type: 'APP Web/Movil',
        image: pTRIGOO,
        description: `Desarrollé un sistema en AppSheet que implementa lógica de negocio configurable y capaz de autogestionarse según las reglas definidas por el cliente FANASA. 
        La plataforma permite que sus clientes, principalmente farmacias, realicen negociaciones con laboratorios para la compra de medicamentos bajo distintos criterios y condiciones. 
        Implementé un flujo de aprobación para cada negociación y un sistema de reportería que centraliza y muestra la información generada. 
        Este desarrollo permitió automatizar procesos clave y facilitar la gestión operativa del cliente.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
    {
        title: 'Gestión OfficeDepot',
        type: 'APP Web/Movil',
        image:
            'https://play-lh.googleusercontent.com/UVQSNpR3Alvkgou8OGNF9nmjvVMh0WOrn2HMUiSzl_KCB_cWECQt55Sjdd1ayD7CNpyx=w600-h300-pc0xffffff-pd',
        description: `Desarrollé un sistema en AppSheet para Office Depot que permite gestionar el inventario de productos y administrar procesos relacionados con instalaciones, técnicos, ventas y categorización de artículos. 
        Implementé también un módulo de reportería que facilita la consulta de información por cada tienda a nivel nacional. 
        Este desarrollo proporcionó una solución centralizada y de fácil uso para optimizar la operación de sus sucursales en México.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
    {
        title: 'Bitácora Herdez',
        type: 'APP Web/Movil',
        image: 'https://ventasmg.com/wp-content/uploads/2024/03/IMG-58.png',
        description: `Desarrollé una aplicación en AppSheet para Herdez que permite gestionar bitácoras de auditoría en cada uno de sus proveedores. 
        La aplicación guía procesos de verificación para asegurar que los cultivos y productos cumplan con las políticas de calidad de la empresa. 
        Implementé además la generación automática de reportes en PDF que consolidan la información capturada, facilitando su descarga y documentación formal.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
];

/**
 * Directiva para animar cards solo al entrar en el viewport
 */
type IntersectEl = HTMLElement & { _observer?: IntersectionObserver };

const vIntersect = {
    mounted(el: IntersectEl) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.unobserve(el);
                }
            },
            {
                threshold: 0.25,
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
    <article class="tech-stack">
        <HeroGlobal :title="heroComponentProps.title" :description="heroComponentProps.description" />

        <section class="tech-section language-section">
            <!-- Desarrollo Web -->
            <div class="title">
                <div class="gradient-number">01</div>
                <h2>Desarrollo Web</h2>
            </div>

            <div class="projects-grid">
                <div class="project-card" v-for="(project, index) in developWeb" :key="project.title" v-intersect
                    :style="{ '--delay': `${index * 0.12}s` }">
                    <div class="project-media">
                        <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
                        <div class="project-type-badge">
                            <span>{{ project.type }}</span>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">
                                {{ project.title }}
                            </h3>
                        </div>
                        <p class="project-description">
                            {{ project.description }}
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag" v-for="skill in project.techStack" :key="skill">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- No Code / AppSheet -->
            <div class="title">
                <div class="gradient-number">02</div>
                <h2>No Code / AppSheet</h2>
            </div>

            <div class="projects-grid">
                <div class="project-card project-card--nocode" v-for="(project, index) in noCodeProjects"
                    :key="project.title" v-intersect :style="{ '--delay': `${index * 0.12 + 0.2}s` }">
                    <div class="project-media">
                        <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
                        <div class="project-type-badge">
                            <span>{{ project.type }}</span>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">
                                {{ project.title }}
                            </h3>
                        </div>
                        <p class="project-description">
                            {{ project.description }}
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag" v-for="skill in project.techStack" :key="skill">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
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

/* Sección */
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
}

/* GRID */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 30px;
    margin-bottom: 4rem;
}

/* CARD */
.project-card {
    --delay: 0s;

    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(148, 163, 184, 0.3);
    border-radius: 25px;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: column;

    /* Estado inicial (fuera de vista) */
    opacity: 0;
    transform: translateY(24px) scale(0.98);

    &::before,
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    &::before {
        background: radial-gradient(circle at top left,
                rgba(236, 72, 153, 0.18),
                transparent 55%);
    }

    &::after {
        background: radial-gradient(circle at bottom right,
                rgba(59, 130, 246, 0.18),
                transparent 55%);
    }

    /* Cuando entra al viewport */
    &.is-visible {
        animation: card-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        animation-delay: var(--delay);
    }

    &:hover {
        transform: translateY(-12px) scale(1);
        border-color: rgba(236, 72, 153, 0.6);
        box-shadow:
            0 30px 60px rgba(15, 23, 42, 0.9),
            0 0 0 1px rgba(236, 72, 153, 0.25);

        &::before,
        &::after {
            opacity: 1;
        }

        .project-image {
            transform: scale(1.08);
            filter: saturate(1.15) contrast(1.05);
        }
    }

    &--nocode {
        background: rgba(15, 23, 42, 0.5);
    }
}

/* Animación de entrada */
@keyframes card-in {
    0% {
        opacity: 0;
        transform: translateY(24px) scale(0.98);
    }

    70% {
        opacity: 1;
        transform: translateY(-3px) scale(1.01);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* MEDIA (IMAGEN) */
.project-media {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;

    .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease, filter 0.5s ease;
        transform: scale(1.02);
        filter: saturate(1.05) contrast(1.02);
    }

    .project-type-badge {
        position: absolute;
        left: 18px;
        top: 16px;
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.8);
        box-shadow: 0 12px 25px rgba(15, 23, 42, 0.9);

        span {
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: rgba(248, 250, 252, 0.95);
        }
    }
}

/* CONTENIDO */
.project-content {
    padding: 24px 28px 26px;
    text-align: justify;
    position: relative;
    z-index: 1;

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;

        .project-title {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 6px;
        }
    }

    .project-description {
        color: rgba(226, 232, 240, 0.85);
        line-height: 1.7;
        margin-bottom: 18px;
        font-size: 0.98rem;
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 4px;

        .tech-tag {
            padding: 6px 14px;
            background: rgba(15, 23, 42, 0.9);
            border-radius: 15px;
            font-size: 0.82rem;
            color: rgba(248, 250, 252, 0.92);
            border: 1px solid rgba(148, 163, 184, 0.5);
            transition: all 0.25s ease;
            transform: translateY(0);

            &:hover {
                background: rgba(236, 72, 153, 0.2);
                border-color: rgba(236, 72, 153, 0.8);
                color: #f9fafb;
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(236, 72, 153, 0.35);
            }
        }
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .tech-stack {
        padding: 0 4rem;
    }

    .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }
}

@media (max-width: 768px) {
    .tech-stack {
        padding: 0 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .tech-stack {
        padding: 0 1rem;
    }

    .project-content {
        padding: 20px 18px 22px;
    }

    .project-media {
        height: 210px;
    }

    .project-content .project-header .project-title {
        font-size: 1.5rem;
    }
}
</style>
