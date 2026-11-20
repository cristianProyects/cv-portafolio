---
name: Cristian Espiridion · CV
description: CV en línea en modo claro, estilo "Blanco vibrante" heredado de la landing de la agencia de tours.
colors:
  brand: "#0b5cad"
  brand-navy: "#0a2a4f"
  brand-sky: "#38b6f2"
  spark: "#ff7a3d"
  spark-ink: "#b8410f"
  ink: "#141823"
  ink-muted: "#4c5a69"
  surface: "#ffffff"
  surface-soft: "#f5f9fd"
  surface-tint: "#e6f1fb"
  border: "#d9e5ef"
  accent-soft: "#eaf5fd"
typography:
  family: "Poppins (self-hosted, latin, 400–800)"
  display: "800, tracking -0.035em, 2.75rem → 4.5rem"
  section-title: "800, 1.875rem → 3rem"
  body: "400, 1.125rem en textos de entrada, 1rem en tarjetas, line-height relaxed"
  label: "600–700, 0.75rem, pastillas y tipo de proyecto (mayúsculas)"
rounded:
  control: "0.875rem"
  card: "1.5rem"
  panel: "2rem"
  band: "2.5rem"
  pill: "999px"
shadows:
  card: "0 10px 30px -8px rgb(10 42 79 / 0.16)"
  lift: "0 22px 44px -14px rgb(10 42 79 / 0.28)"
motion:
  ease: "cubic-bezier(0.16, 1, 0.3, 1)"
---

# Sistema de diseño

Fuente de verdad en código: `src/shared/styles/main.css` (`@theme` de Tailwind v4). Mismo esquema que el
frontend de la agencia de tours: tokens en `@theme`, primitivas en `src/shared/ui`, dominio en
`src/modules/portfolio`, contenido bilingüe en `content/*.content.ts`.

## Reglas

- **Siempre modo claro.** Fondo blanco; secciones alternas en `surface-soft`. El color fuerte vive en
  regiones completas: placa azul detrás de la foto, tarjeta de la carrera y la franja de contacto
  (degradado `brand-navy → brand → sky`).
- **Azul `brand`** para botones, enlaces, apellido y acentos de texto (AA sobre blanco). `brand-sky` solo
  decorativo. **Naranja `spark`** solo como chispa: subrayado del rol, punto "Actual", final de la línea
  de capas. Como texto se usa `spark-ink`.
- Sin texto en degradado, sin etiquetas encima de los títulos, sin bordes de color a la izquierda.
- Íconos: `@mdi/js` con `AppIcon`. Logos de tecnologías desde Devicon (se ocultan si fallan).
- Tarjetas: `radius-card`, `shadow-card`, `ring-1 ring-border`; al pasar el cursor suben 4px con
  `shadow-lift`. Pastillas con `AppBadge` (`neutral`, `brand`, `live`, `on-brand`).
- Botones (`AppButton`): `primary` azul, `secondary` blanco con borde, `on-brand` / `ghost-on-brand`
  sobre la franja azul. Altura mínima 48px.

## Movimiento

Un solo momento de entrada en la portada (texto que sube y se enfoca, foto que se acomoda, tarjetas que
aterrizan, subrayado que se dibuja) y una coreografía en "Construyo el sistema completo" (la línea crece
y las capas se encienden en orden). El resto aparece con `data-reveal` (opacidad + desenfoque). Todo es
visible sin JS y con `prefers-reduced-motion`.

## Componentes del dominio

- `HeroSection`, `EndToEndSection`, `ExperienceSection` (línea de tiempo), `ProjectsSection`
  (`FeaturedProject` con `ToursDemo` / `MarketsDemo` interactivos marcados como ilustración,
  `ProjectCard` filtrable), `StackSection` (cada tecnología filtra los proyectos), `EducationSection`,
  `ContactSection`.
