<script setup lang="ts">

const languageLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
];

const cloudLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg",
    "https://blog.kakaocdn.net/dn/WSVB2/btsyEUF6UT2/TBuRkGbTFDwlZ6BKV0ksFK/img.png",
    "https://iconape.com/wp-content/png_logo_vector/google-appengine-logo.png",
    "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/google-appsheet-logo.png",
];

const databaseLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
];

const versionControlLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg"
];

const toolsLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "https://websockets.readthedocs.io/en/10.2/_static/websockets.svg",
    "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-qmopau7qaog2hcyqa1r78m.png/jwt-nuo0qqa4imspf51wa8qqr.png?_a=DATAg1AAZAA0",
    "https://1000logos.net/wp-content/uploads/2022/03/Tableau-Logo.png"
]

const heroComponentProps = {
    title: ['Stack', 'Tecnológico'],
    description: 'Desarrollador Full Stack que ve la tecnología como un camino de aprendizaje continuo. Me motiva crear, mejorar y entender cómo la tecnología puede simplificar la vida de las personas.',
};
</script>
<template>
    <HeroGlobal :title="heroComponentProps.title" :description="heroComponentProps.description" />
    <article class="tech-stack">
        <section class="tech-section language-section">
            <div class="title">
                <div class="gradient-number">01</div>
                <h2>Lenguajes</h2>
            </div>
            <div class="logos">
                <img v-for="logo in languageLogos" :key="logo" :src="logo" />
            </div>
        </section>

        <section class="tech-section cloud-section">
            <div class="title">
                <div class="gradient-number">02</div>
                <h2>Servicios en la nube</h2>
            </div>

            <div class="logos">
                <img v-for="logo in cloudLogos" :key="logo" :src="logo" />
            </div>
        </section>

        <section class="tech-section database-section">
            <div class="title">
                <div class="gradient-number">03</div>
                <h2>Base de datos</h2>
            </div>

            <div class="logos">
                <img v-for="logo in databaseLogos" :key="logo" :src="logo" />
            </div>
        </section>
        <section class="tech-section database-section">
            <div class="title">
                <div class="gradient-number">04</div>
                <h2>Control de versiones</h2>
            </div>

            <div class="logos">
                <img v-for="logo in versionControlLogos" :key="logo" :src="logo" />
            </div>
        </section>
        <section class="tech-section database-section">
            <div class="title">
                <div class="gradient-number">05</div>
                <h2>Herramientas y otros</h2>
            </div>

            <div class="logos">
                <img v-for="logo in toolsLogos" :key="logo" :src="logo" />
            </div>
        </section>
    </article>
</template>
<style scoped lang="scss">
.tech-stack {
    margin: 0 auto;
    padding: 0rem 6rem;
    position: relative;
    z-index: 1;

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

        .logos {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;

            img {
                background: rgba(255, 255, 255, 0.02);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 30px;
                padding: 40px 30px;
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                width: 200px;
                height: 200px;
                object-fit: contain;
                cursor: pointer;
            }

            img:hover {
                transform: translateY(-15px) scale(1.02);
                border-color: rgba(236, 72, 153, 0.5);
                box-shadow:
                    0 30px 60px rgba(236, 72, 153, 0.3),
                    0 0 0 1px rgba(236, 72, 153, 0.2);
            }

        }
    }
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

    img {
        width: 180px !important;
        height: 180px !important;
    }
}

@media (max-width: 480px) {
    .tech-stack {
        padding: 0rem 1rem;

        img {
            width: 180px !important;
            height: 180px !important;
        }
    }


}
</style>
