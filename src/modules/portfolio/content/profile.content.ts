// Datos personales y textos generales del sitio. Fuente: CV 2026
// (CV_Cristian_Espiridion_Martinez_Fullstack.pdf).
import type { Localized } from '@/shared/i18n/locale'

export const PROFILE = {
  name: 'Cristian Espiridion Martinez',
  firstLine: 'Cristian Espiridion',
  secondLine: 'Martinez',
  role: { es: 'Desarrollador Fullstack', en: 'Fullstack Developer' } as Localized,
  location: {
    es: 'Atlacomulco, Estado de México',
    en: 'Atlacomulco, State of Mexico',
  } as Localized,
  email: 'crisespiridion405@gmail.com',
  whatsapp: 'https://wa.me/527122517890',
  github: 'https://github.com/cristianproyects',
  summary: {
    es: 'Ingeniero en Sistemas Computacionales con más de 3 años construyendo aplicaciones web completas: interfaz, servicios, base de datos y despliegue en la nube. Hoy desarrollo para BBVA México con integración continua, revisión de calidad y desarrollo seguro.',
    en: 'Computer Systems Engineer with 3+ years building complete web applications: interface, services, database and cloud deployment. Today I build for BBVA Mexico with continuous integration, quality gates and secure development practices.',
  } as Localized,
  cv: {
    es: {
      href: 'cv/CV_Cristian_Espiridion_Martinez_Fullstack.pdf',
      file: 'CV_Cristian_Espiridion_Martinez.pdf',
    },
    en: {
      href: 'cv/CV_Cristian_Espiridion_Martinez_Fullstack_EN.pdf',
      file: 'CV_Cristian_Espiridion_Martinez_EN.pdf',
    },
  } as Localized<{ href: string; file: string }>,
}

export const META: Localized<{ title: string; description: string }> = {
  es: {
    title: 'Cristian Espiridion Martinez · Desarrollador Fullstack',
    description:
      'Desarrollador Fullstack (Vue, React, Node.js, Google Cloud) con experiencia en BBVA México. Proyectos, experiencia y CV descargable.',
  },
  en: {
    title: 'Cristian Espiridion Martinez · Fullstack Developer',
    description:
      'Fullstack Developer (Vue, React, Node.js, Google Cloud) with experience at BBVA Mexico. Projects, experience and downloadable resume.',
  },
}

// Textos de la interfaz (navegación, botones, etiquetas).
export const UI = {
  nav: {
    experience: { es: 'Experiencia', en: 'Experience' },
    projects: { es: 'Proyectos', en: 'Projects' },
    personal: { es: 'Personales', en: 'Personal' },
    stack: { es: 'Stack', en: 'Stack' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  menuOpen: { es: 'Abrir menú', en: 'Open menu' },
  menuClose: { es: 'Cerrar menú', en: 'Close menu' },
  home: { es: 'inicio', en: 'home' },
  downloadCv: { es: 'Descargar CV', en: 'Download resume' },
  seeProjects: { es: 'Ver proyectos', en: 'See projects' },
  writeMe: { es: 'Escríbeme', en: 'Email me' },
  current: { es: 'Actual', en: 'Current' },
  inProgress: { es: 'En desarrollo', en: 'In progress' },
  showMore: { es: 'Ver detalle', en: 'Show details' },
  showLess: { es: 'Ver menos', en: 'Show less' },
  myRole: { es: 'Mi rol', en: 'My role' },
  builtWith: { es: 'Construido con', en: 'Built with' },
  usedIn: { es: 'proyectos', en: 'projects' },
  usedInOne: { es: 'proyecto', en: 'project' },
  filterBy: { es: 'Filtrando por', en: 'Filtering by' },
  clearFilter: { es: 'Quitar filtro', en: 'Clear filter' },
  page: { es: 'Página', en: 'Page' },
  prev: { es: 'Anterior', en: 'Previous' },
  next: { es: 'Siguiente', en: 'Next' },
  noResults: {
    es: 'Ningún proyecto de esta empresa usa esa tecnología. Prueba con "Todos".',
    en: 'No project at this company uses that technology. Try "All".',
  },
  stackHint: {
    es: 'Toca cualquier tecnología para ver en qué trabajos y proyectos la he usado.',
    en: 'Tap any technology to see the jobs and projects where I have used it.',
  },
  whatIDid: { es: 'Qué hice', en: 'What I did' },
  projectsHere: { es: 'Proyectos en este puesto', en: 'Projects in this role' },
  client: { es: 'Cliente', en: 'Client' },
  footer: {
    es: 'Hecho con Vue 3, TypeScript y Tailwind CSS.',
    en: 'Built with Vue 3, TypeScript and Tailwind CSS.',
  },
} satisfies Record<string, Localized | Record<string, Localized>>

export const HERO = {
  greeting: { es: 'Hola, soy', en: "Hi, I'm" },
  facts: [
    { icon: 'clock', text: { es: '+3 años de experiencia', en: '3+ years of experience' } },
    { icon: 'bank', text: { es: 'Sector bancario · BBVA', en: 'Banking · BBVA' } },
  ],
  photoAlt: {
    es: 'Cristian en las oficinas de Google México, Ciudad de México',
    en: 'Cristian at the Google Mexico offices, Mexico City',
  },
  photoCaption: { es: 'Google México · CDMX', en: 'Google Mexico · CDMX' },
  nowLabel: { es: 'Hoy desarrollo para', en: 'Currently building for' },
  nowValue: 'BBVA México',
  towerAlt: {
    es: 'La Torre BBVA iluminada de noche en Paseo de la Reforma',
    en: 'BBVA Tower lit up at night on Paseo de la Reforma',
  },
} as const

// "De punta a punta": las capas que construyo en un mismo proyecto.
export const END_TO_END = {
  title: { es: 'Experiencia de punta a punta', en: 'End-to-end experience' },
  intro: {
    es: 'En mis trabajos y proyectos he participado en cada etapa de una aplicación web, en orden: de la interfaz hasta la puesta en producción, siguiendo buenas prácticas en cada paso.',
    en: 'Across my jobs and projects I have worked on every stage of a web application, in order: from the interface to the production release, following best practices at each step.',
  },
  layers: [
    {
      id: 'ui',
      icon: 'monitor',
      title: { es: 'Interfaz', en: 'Interface' },
      text: {
        es: 'Pantallas accesibles y rápidas a partir del diseño de UX/UI.',
        en: 'Accessible, fast screens built from UX/UI designs.',
      },
    },
    {
      id: 'api',
      icon: 'api',
      title: { es: 'API y lógica', en: 'API & logic' },
      text: {
        es: 'Servicios REST, autenticación, webhooks y pagos.',
        en: 'REST services, authentication, webhooks and payments.',
      },
    },
    {
      id: 'data',
      icon: 'database',
      title: { es: 'Datos', en: 'Data' },
      text: {
        es: 'Modelos, vistas, stored procedures y triggers.',
        en: 'Schemas, views, stored procedures and triggers.',
      },
    },
    {
      id: 'cloud',
      icon: 'cloud',
      title: { es: 'Nube', en: 'Cloud' },
      text: {
        es: 'Despliegue y automatización en Google Cloud.',
        en: 'Deployment and automation on Google Cloud.',
      },
    },
    {
      id: 'ci',
      icon: 'pipeline',
      title: { es: 'Calidad y CI/CD', en: 'Quality & CI/CD' },
      text: {
        es: 'Pruebas, análisis de código con SonarQube y revisión por Pull Request en cada cambio.',
        en: 'Tests, SonarQube code analysis and Pull Request review on every change.',
      },
    },
    {
      id: 'release',
      icon: 'rocket',
      title: { es: 'Puesta en producción', en: 'Production release' },
      text: {
        es: 'Releases versionadas con PR a main, despliegue automatizado, rollback listo y ramas bugfix/hotfix para corregir incidencias.',
        en: 'Versioned releases via PR to main, automated deployment, ready rollback and bugfix/hotfix branches for incidents.',
      },
    },
  ],
} as const

export const CONTACT = {
  title: { es: 'Hablemos', en: "Let's talk" },
  text: {
    es: 'Estoy abierto a nuevas oportunidades como Desarrollador Fullstack. Si mi perfil encaja con tu equipo, escríbeme o descarga mi CV.',
    en: "I'm open to new opportunities as a Fullstack Developer. If my profile fits your team, email me or download my resume.",
  },
  whatsapp: { es: 'WhatsApp', en: 'WhatsApp' },
} as const
