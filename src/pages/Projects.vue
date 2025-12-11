<script setup lang="ts">
import { onMounted } from 'vue';
import useProjects from '@/composables/useProjects';
import vIntersect from '@/directives/vIntersect';

const { heroComponentProps, developWeb, developWebPersonal, noCodeProjects } = useProjects();
onMounted(() => {
    window.scrollTo({ top: 0 });
});


</script>

<template>
    <article class="tech-stack">
        <HeroGlobal :title="heroComponentProps.title" :description="heroComponentProps.description" />

        <section class="tech-section language-section">
            <!-- Desarrollo Web -->
            <div class="title">
                <div class="gradient-number">01</div>
                <h2>Desarrollo Web / Empresas</h2>
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
            <!-- Desarrollo Web Personal-->
            <div class="title">
                <div class="gradient-number">02</div>
                <h2>Desarrollo Web / Personal</h2>
            </div>

            <div class="projects-grid">
                <div class="project-card" v-for="(project, index) in developWebPersonal" :key="project.title" v-intersect
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
                <div class="gradient-number">03</div>
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
        text-align: justify;
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

/* ✅ SOLO CAMBIOS RESPONSIVE DESDE AQUÍ */

/* Tablet grande / laptop pequeña */
@media (max-width: 1024px) {
    .tech-stack {
        padding: 0 4rem;
    }

    .tech-section .title {
        margin-bottom: 40px;
        padding: 24px 28px;
    }

    .tech-section .title .gradient-number {
        font-size: 3.4rem;
    }

    .tech-section .title h2 {
        font-size: 2.3rem;
    }

    .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }

    .project-media {
        height: 230px;
    }
}

/* Tablet / móvil horizontal */
@media (max-width: 768px) {
    .tech-stack {
        padding: 0 2rem;
    }

    .tech-section .title {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 20px 18px;
        margin-bottom: 35px;
    }

    .tech-section .title h2 {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .project-content {
        padding: 20px 20px 22px;
        text-align: left; /* más cómodo para leer en móvil */
    }

    .project-content .project-description {
        font-size: 0.95rem;
    }
}

/* Móvil pequeño */
@media (max-width: 480px) {
    .tech-stack {
        padding: 0 1rem;
    }

    .project-media {
        height: 200px;
    }

    .project-content {
        padding: 18px 16px 20px;
    }

    .project-content .project-header .project-title {
        font-size: 1.5rem;
    }

    .project-content .project-tech {
        gap: 8px;
    }

    .project-content .project-tech .tech-tag {
        font-size: 0.78rem;
        padding: 4px 10px;
    }
}
</style>
