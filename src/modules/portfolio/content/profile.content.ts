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
    stack: { es: 'Stack', en: 'Stack' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  menuOpen: { es: 'Abrir menú', en: 'Open menu' },
  menuClose: { es: 'Cerrar menú', en: 'Close menu' },
  home: { es: 'inicio', en: 'home' },
  switchLanguage: { es: 'Switch to English', en: 'Cambiar a español' },
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
  noResults: {
    es: 'Ningún proyecto de esta categoría usa esa tecnología. Prueba con "Todos".',
    en: 'No project in this category uses that technology. Try "All".',
  },
  stackHint: {
    es: 'Toca una tecnología para ver en qué proyectos la usé.',
    en: 'Tap a technology to see which projects used it.',
  },
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
    { icon: 'google', text: { es: 'Formado en Google México', en: 'Trained at Google Mexico' } },
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
  title: { es: 'Construyo el sistema completo', en: 'I build the whole system' },
  intro: {
    es: 'No solo pantallas: desde lo que ve el usuario hasta el servidor, los datos y el despliegue. Así se arma cada proyecto que entrego.',
    en: 'Not just screens: from what the user sees to the server, the data and the deployment. That is how every project I ship comes together.',
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
      tech: ['Vue.js', 'React', 'TypeScript'],
    },
    {
      id: 'api',
      icon: 'api',
      title: { es: 'API y lógica', en: 'API & logic' },
      text: {
        es: 'Servicios REST, autenticación, webhooks y pagos.',
        en: 'REST services, authentication, webhooks and payments.',
      },
      tech: ['Node.js', 'Express.js', 'JWT'],
    },
    {
      id: 'data',
      icon: 'database',
      title: { es: 'Datos', en: 'Data' },
      text: {
        es: 'Modelos, vistas, stored procedures y triggers.',
        en: 'Schemas, views, stored procedures and triggers.',
      },
      tech: ['MySQL', 'SQL Server', 'PostgreSQL'],
    },
    {
      id: 'cloud',
      icon: 'cloud',
      title: { es: 'Nube', en: 'Cloud' },
      text: {
        es: 'Despliegue y automatización en Google Cloud.',
        en: 'Deployment and automation on Google Cloud.',
      },
      tech: ['Cloud Run', 'App Engine', 'Firebase'],
    },
    {
      id: 'ci',
      icon: 'pipeline',
      title: { es: 'Calidad y CI/CD', en: 'Quality & CI/CD' },
      text: {
        es: 'Pruebas, análisis de código y entregas continuas.',
        en: 'Tests, code analysis and continuous delivery.',
      },
      tech: ['Jenkins', 'SonarQube', 'Vitest'],
    },
  ],
} as const

export const CONTACT = {
  title: { es: '¿Construimos algo juntos?', en: 'Shall we build something together?' },
  text: {
    es: 'Busco nuevos retos como Desarrollador Fullstack y también tomo proyectos freelance: landings, sistemas a la medida, paneles y pagos en línea. Te respondo pronto.',
    en: "I'm open to new Fullstack Developer roles and freelance projects: landing pages, custom systems, admin panels and online payments. I'll get back to you soon.",
  },
  whatsapp: { es: 'WhatsApp', en: 'WhatsApp' },
} as const
