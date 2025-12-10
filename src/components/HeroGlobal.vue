<script lang="ts" setup>

const props = withDefaults(defineProps<{
    title: Array<string>;
    subtitle: string;
    description: string;
    actions?: Array<{ label: string; link: string, type: 'primary' | 'secondary' }>;
    scrollIndicator?: boolean;
    scrollIndicatorText?: string;
}>(), {
    actions: () => [],
    scrollIndicator: true,
    scrollIndicatorText: 'Baja',
});

</script>

<template>
    <!-- Hero Section -->
    <section class="hero-section" id="inicio">
        <div class="hero-content">
            <h1 class="hero-title">
                {{ title[0] }} <span class="hero-name">{{ title[1] }}</span>
            </h1>

            <p class="hero-role">{{ subtitle }}</p>

            <p class="hero-description">
                {{ description }}
            </p>

            <div class="hero-buttons" v-if="actions.length > 0">
                <RouterLink v-for="nav in actions" :to="nav.link" :key="nav.label" :class="`hero-btn ${nav.type}`">
                    {{ nav.label }}
                </RouterLink>
            </div>
        </div>

        <div class="scroll-indicator" v-if="scrollIndicator">
            <span class="scroll-text">{{ scrollIndicatorText }} </span>
            <div class="scroll-arrow"></div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
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

    0%,
    100% {
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

    0%,
    100% {
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

    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }

    50% {
        transform: translateX(-50%) translateY(-10px);
    }
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
    0% {
        top: 8px;
        opacity: 1;
    }

    100% {
        top: 30px;
        opacity: 0;
    }
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

}
</style>