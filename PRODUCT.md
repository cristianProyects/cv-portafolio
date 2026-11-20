# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el mismo peso (confirmado por el usuario, 2026-11-20):

1. **Reclutadores y tech leads** que evalúan a Cristian para un puesto de Desarrollador Fullstack. Llegan desde el enlace del CV en PDF o LinkedIn, muchas veces en el celular, y deciden en segundos si vale la pena seguir leyendo.
2. **Clientes freelance** (negocios) que buscan a alguien que les construya su sistema completo: landing, panel, pagos, base de datos y despliegue.

## Product Purpose

Portafolio/CV en línea de **Cristian Espiridion Martinez**, Desarrollador Fullstack. Debe ser llamativo y original para que quien entre recuerde el perfil, y a la vez dejar claro en segundos: quién es, qué ha construido, con qué tecnologías y cómo contactarlo o descargar su CV.

Éxito: el visitante entiende el perfil en el primer vistazo, recorre experiencia y proyectos, y termina descargando el CV o escribiendo.

## Positioning

Fullstack que entrega sistemas completos de punta a punta (interfaz, API, base de datos, nube y CI/CD), con experiencia en sector bancario (BBVA vía Global Hitss) y formación/certificación en Google Cloud y AppSheet dentro de las oficinas de Google.

## Operating Context

- Sitio estático en **GitHub Pages**: `https://cristianproyects.github.io/cv-portafolio/` (base `/cv-portafolio/`, router con hash).
- Se enlaza desde el CV en PDF (`C:\Users\crist\OneDrive\Documentos\PERSONAL\CV\CV_Cristian_Espiridion_Martinez_Fullstack.pdf`).
- **Bilingüe:** español por defecto con botón ES/EN; el CV descargable corresponde al idioma (confirmado).

## Capabilities and Constraints

- Stack: Vue 3 + Vite + TypeScript. Patrones de frontend tomados del proyecto de la agencia de tours (Tailwind v4 con tokens propios, íconos `@mdi/js` vía `AppIcon`, módulos con contenido separado, Vitest, ESLint flat).
- Sin backend: todo el contenido vive en archivos de contenido del frontend.
- Despliegue por GitHub Actions (`.github/workflows/static.yml`).

## Brand Commitments

- **Modo claro siempre, nada de fondos negros/oscuros** (decisión del usuario, 2026-11-20: "lo quiero en modo brillo, no oscuro"). Es un CV, no una pantalla publicitaria: atractivo y amigable, que se entienda.
- Estilo de referencia elegido por el usuario: la landing de la agencia de tours ("Blanco vibrante": fondo blanco, azul de marca, tarjetas redondeadas, Poppins).
- Nombre: **Cristian Espiridion Martinez**. Rol: **Desarrollador Fullstack** / *Fullstack Developer*.
- Fotos reales: en la Torre BBVA (`src/assets/bbva_yo.jpg`) y en Google México (`src/assets/google_yo_yo.jpg`).

## Evidence on Hand

- Experiencia (del CV 2026): Global Hitss · cliente BBVA México (Oct 2024 – actualidad), Esource Capital (Ago 2023 – Oct 2024), Turing-IA (Ene – May 2023).
- Educación: Ingeniería en Sistemas Computacionales, Universidad Politécnica de Atlacomulco (2020 – 2023).
- Certificaciones: Certified Scrum Developer® (SCRUMstudy, vigente hasta nov 2027); Desarrollo Seguro v2.0 (Net4skills, vigente hasta 2028).
- Proyectos con capturas: AgroMera IoT, Mera Shop, Cartera Liomont, Dispersión BBVA, Captación de Donativos BBVA, TRIGOO, Office Depot, Bitácora Herdez, e-commerce Colombia, app para barbería.
- Proyectos nuevos (confirmado agregarlos): plataforma de reservas y pagos para agencia de tours (freelance 2026) y plataforma de análisis de mercados con agentes de IA (en desarrollo, sin operaciones reales).
- **No existen**: testimonios, métricas de negocio de clientes, número de usuarios. No inventarlos.
- No se publican teléfono ni dirección exacta en el sitio salvo lo que ya está en el CV público.

## Product Principles

1. **Lo cierto, bien contado:** solo hechos verificables; cero métricas o testimonios inventados.
2. **Recordable en un vistazo:** el primer pantallazo debe dejar nombre, rol y una prueba concreta.
3. **De punta a punta:** mostrar que construye el sistema completo, no solo pantallas.
4. **Igual de bueno en el celular.**

## Accessibility & Inclusion

WCAG AA: contraste suficiente, foco visible, navegación por teclado y `prefers-reduced-motion` respetado (mismo estándar que el proyecto de tours).
