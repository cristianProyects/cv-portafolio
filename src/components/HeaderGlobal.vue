<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(false);

const onHandleMenu = () => {
    active.value = !active.value;
};

const props = withDefaults(defineProps<{
    title?: string;
    pages: Array<{ name: string; link: string }>;
}>(), {
    title: 'Portafolio',
    pages: () => [],
});
</script>

<template>
    <header class="header" id="header">
        <nav class="nav-container">
            <div class="logo">{{ props.title }}</div>

            <ul :class="`nav-menu ${active && 'active'}`" id="navMenu">
                <li v-for="nav in props.pages" :key="nav.name">
                    <RouterLink style="text-decoration: none;" :to="nav.link" v-slot="{ isActive }">
                        <span
                            class="nav-link"
                            :class="{ active: isActive }"
                        >
                            {{ nav.name }}
                        </span>
                    </RouterLink>
                </li>
            </ul>

            <v-btn
                class="mobile-menu-btn"
                id="mobileMenuBtn"
                @click="onHandleMenu"
            >
                <v-icon
                    :icon="`${!active ? 'mdi-menu' : 'mdi-close'}`"
                    size="large"
                />
            </v-btn>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
/* Header Navigation */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 20px 0;
    background: rgba(10, 10, 15, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.header.scrolled {
    padding: 15px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(135deg, #ec4899, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
    cursor: pointer;
}

.nav-menu {
    display: flex;
    gap: 40px;
    list-style: none;
}

/* para que el <li> no rompa el layout */
.nav-menu li {
    display: flex;
    align-items: center;
}

.nav-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ec4899, #3b82f6);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #fff;
}

.nav-link:hover::after {
    width: 100%;
}

/* 🔥 Link activo */
.nav-link.active {
    color: #ec4899;
}

.nav-link.active::after {
    width: 100%;
}

.cta-button {
    padding: 12px 30px;
    background: linear-gradient(135deg, #ec4899, #3b82f6);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
}

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }

    .nav-menu {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: rgba(10, 10, 15, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 30px;
        gap: 20px;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
    }

    .cta-button {
        display: none;
    }
}
</style>
