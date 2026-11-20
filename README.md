# CV · Cristian Espiridion Martinez

Portafolio/CV en línea: https://cristianproyects.github.io/cv-portafolio/

Página única bilingüe (ES/EN) con experiencia, proyectos filtrables por tecnología, stack, formación y
descarga del CV en PDF según el idioma.

## Stack

Vue 3 (`<script setup>` + TypeScript strict) · Vite · Tailwind CSS v4 con tokens propios · `@mdi/js` ·
Poppins self-hosted · Vitest · ESLint flat + Prettier. Misma arquitectura que el frontend de la agencia
de tours:

```
src/
  app/                 App, barra superior y pie
  modules/portfolio/   contenido (content/*.content.ts), componentes, utilidades y vista
  shared/              ui (AppIcon, AppButton, AppBadge, SectionHeading), i18n, composables, utils, estilos
```

- **Cambiar textos, trabajos o proyectos:** `src/modules/portfolio/content/`.
- **CV descargable:** `public/cv/` (ES y EN). El EN se genera desde `cv-en.html` en la carpeta del CV.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000/cv-portafolio/
npm run build      # vue-tsc + vite build → dist/
npm run lint
npm test
```

El despliegue a GitHub Pages corre solo al hacer push a `main` (`.github/workflows/static.yml`: lint,
pruebas y build).
