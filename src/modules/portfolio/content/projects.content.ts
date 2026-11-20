// Proyectos. Solo hechos verificables: qué es, mi rol y con qué se construyó (sin métricas ni
// testimonios inventados). Fuentes: portafolio anterior, CV 2026 y los repositorios de los proyectos.
import pBBVA from '@/assets/projects/p_bbva.png'
import pBarber from '@/assets/projects/p_barber.webp'
import pCartera from '@/assets/projects/p_cartera.png'
import pHerdez from '@/assets/projects/p_herdez.png'
import pMeraIot from '@/assets/projects/p_meraiot.png'
import pMeraShop from '@/assets/projects/p_merashop.png'
import pOfficeDepot from '@/assets/projects/p_officedepot.png'
import pTrigoo from '@/assets/projects/p_trigoo.jpg'
import type { Localized } from '@/shared/i18n/locale'
import type { TechName } from './tech.content'

export type ProjectCategory = 'work' | 'freelance' | 'nocode'

export type Project = {
  id: string
  /** Nombre propio (igual en ambos idiomas) o texto traducido. */
  title: string | Localized
  category: ProjectCategory
  type: Localized
  image?: { src: string; alt: Localized; fit?: 'cover' | 'contain' }
  summary: Localized
  role: Localized
  tech: TechName[]
}

export type FeaturedProject = Project & {
  status: Localized
  live: boolean
  points: Localized[]
  demo: 'tours' | 'markets'
}

export const PROJECTS_HEADING = {
  title: { es: 'Proyectos', en: 'Projects' },
  intro: {
    es: 'Sistemas reales para bancos, empresas y negocios: del IoT en invernaderos a pagos en línea.',
    en: 'Real systems for banks, companies and small businesses: from greenhouse IoT to online payments.',
  },
  featuredTitle: { es: 'Lo más reciente', en: 'Latest work' },
} as const

export const CATEGORY_LABELS: Record<ProjectCategory | 'all', Localized> = {
  all: { es: 'Todos', en: 'All' },
  work: { es: 'Empresa', en: 'Company' },
  freelance: { es: 'Freelance y personales', en: 'Freelance & personal' },
  nocode: { es: 'Low-code (AppSheet)', en: 'Low-code (AppSheet)' },
}

export const FEATURED: FeaturedProject[] = [
  {
    id: 'tours',
    title: {
      es: 'Plataforma de reservas y pagos · Agencia de tours',
      en: 'Booking & payments platform · Travel agency',
    },
    category: 'freelance',
    type: { es: 'Freelance · 2026', en: 'Freelance · 2026' },
    status: { es: 'MVP terminado', en: 'MVP complete' },
    live: false,
    demo: 'tours',
    summary: {
      es: 'Landing para una agencia de viajes a festivales de música donde el cliente arma su paquete paso a paso (fecha, hotel, habitación, transporte y extras), ve el precio calculado en el servidor y paga a su ritmo.',
      en: 'Landing for a music-festival travel agency where customers build their package step by step (date, hotel, room, transport and extras), see a server-calculated price and pay at their own pace.',
    },
    role: {
      es: 'Todo el proyecto: diseño de la arquitectura, API, base de datos, frontend y panel de administración.',
      en: 'The whole project: architecture, API, database, frontend and admin panel.',
    },
    points: [
      {
        es: 'Configurador de paquetes con cotización en el servidor y cupos en tiempo real.',
        en: 'Package builder with server-side quotes and live seat availability.',
      },
      {
        es: 'Cuentas con correo y Google, apartado de lugar, mensualidades y comprobante con QR.',
        en: 'Email and Google sign-in, seat holds, monthly payments and QR vouchers.',
      },
      {
        es: 'Panel para administrar paquetes, órdenes, crónicas con fotos y opiniones.',
        en: 'Admin panel for packages, orders, event recaps with photos and reviews.',
      },
    ],
    tech: [
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Pinia',
      'TanStack Query',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'Vitest',
      'Docker',
    ],
  },
  {
    id: 'markets',
    title: {
      es: 'Plataforma de análisis de mercados con IA',
      en: 'AI market-analysis platform',
    },
    category: 'freelance',
    type: { es: 'Proyecto personal', en: 'Personal project' },
    status: { es: 'En desarrollo', en: 'In progress' },
    live: true,
    demo: 'markets',
    summary: {
      es: 'Agentes de IA que recolectan datos de mercado, noticias y calendario económico, detectan patrones y miden con honestidad qué tan seguido una señal llega a su objetivo. Solo análisis: nunca ejecuta operaciones.',
      en: 'AI agents that collect market data, news and the economic calendar, detect patterns and honestly measure how often a signal reaches its target. Analysis only: it never places trades.',
    },
    role: {
      es: 'Diseño y desarrollo completo: servicios de datos, API, base de datos de series de tiempo y panel en vivo.',
      en: 'Full design and build: data services, API, time-series database and live dashboard.',
    },
    points: [
      {
        es: 'Servicios en Docker que se recuperan solos y respaldos diarios.',
        en: 'Self-healing Docker services and daily backups.',
      },
      {
        es: 'Panel en vivo con gráfica de velas, sesiones de mercado y salud de los datos.',
        en: 'Live dashboard with candlestick chart, market sessions and data health.',
      },
      {
        es: 'Estadísticas con su línea base, sin porcentajes inflados.',
        en: 'Statistics always shown against their baseline, no inflated hit rates.',
      },
    ],
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'React',
      'TypeScript',
      'WebSockets',
      'Docker',
      'NGINX',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'dispersion-bbva',
    title: {
      es: 'Dispersión de recursos · Fundación BBVA',
      en: 'Funds disbursement · BBVA Foundation',
    },
    category: 'work',
    type: { es: 'Web App · BBVA', en: 'Web App · BBVA' },
    image: {
      src: pBBVA,
      alt: { es: 'Logotipo de BBVA', en: 'BBVA logo' },
    },
    summary: {
      es: 'Módulo para configurar los montos de apoyo por nivel y grado escolar, con etiquetas que ajustan los valores base y un flujo de validación y Vo.Bo. antes de aprobar.',
      en: 'Module to configure support amounts by school level and grade, with tags that adjust base values and a review and sign-off flow before approval.',
    },
    role: {
      es: 'Desarrollo del frontend sobre el arquetipo corporativo.',
      en: 'Frontend development on the corporate archetype.',
    },
    tech: [
      'Vue.js',
      'TypeScript',
      'SCSS',
      'TanStack Query',
      'App Engine',
      'Vitest',
      'SonarQube',
      'Jenkins',
      'Bitbucket',
      'Jira',
    ],
  },
  {
    id: 'donativos-bbva',
    title: { es: 'Captación de donativos · BBVA', en: 'Donations platform · BBVA' },
    category: 'work',
    type: { es: 'Web App · BBVA', en: 'Web App · BBVA' },
    image: {
      src: pBBVA,
      alt: { es: 'Logotipo de BBVA', en: 'BBVA logo' },
    },
    summary: {
      es: 'Módulo de Desastres Naturales para registrar donativos: autenticación con Firebase, captura de donantes y aportes, y envío seguro de datos a la pasarela de pago externa.',
      en: 'Natural Disasters module to register donations: Firebase authentication, donor and contribution capture, and secure hand-off to the external payment gateway.',
    },
    role: {
      es: 'Desarrollo del frontend y del flujo de captura.',
      en: 'Frontend and capture-flow development.',
    },
    tech: [
      'Vue.js',
      'TypeScript',
      'SCSS',
      'TanStack Query',
      'Firebase',
      'App Engine',
      'Vitest',
      'SonarQube',
      'Jenkins',
      'Bitbucket',
    ],
  },
  {
    id: 'cartera',
    title: 'Cartera Liomont',
    category: 'work',
    type: { es: 'Dashboard de datos', en: 'Data dashboard' },
    image: {
      src: pCartera,
      alt: { es: 'Tablero del proyecto Cartera', en: 'Cartera dashboard' },
    },
    summary: {
      es: 'Análisis de cartera: lógica de negocio en SQL Server (vistas, stored procedures, linked servers y jobs), tableros en Tableau y una app web en React que los centraliza de forma segura.',
      en: 'Portfolio analytics: business logic in SQL Server (views, stored procedures, linked servers and jobs), Tableau dashboards and a React web app that centralizes them securely.',
    },
    role: {
      es: 'Backend de datos, tableros y app web.',
      en: 'Data backend, dashboards and web app.',
    },
    tech: ['React', 'Node.js', 'Express.js', 'JWT', 'SQL Server', 'Tableau', 'NGINX', 'GitHub'],
  },
  {
    id: 'agromera',
    title: 'AgroMera IoT',
    category: 'freelance',
    type: { es: 'Web App · IoT', en: 'Web App · IoT' },
    image: {
      src: pMeraIot,
      alt: { es: 'Panel de AgroMera IoT', en: 'AgroMera IoT dashboard' },
    },
    summary: {
      es: 'Sistema IoT para gestionar el riego de invernaderos: monitorea variables en tiempo real y ayuda a decidir. Mi primer sistema de punta a punta.',
      en: 'IoT system to manage greenhouse irrigation: real-time monitoring of key variables to support decisions. My first end-to-end system.',
    },
    role: {
      es: 'Todo: base de datos, máquina virtual con MQTT, backend y frontend.',
      en: 'Everything: database, MQTT virtual machine, backend and frontend.',
    },
    tech: [
      'Vue.js',
      'Vuetify',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'MQTT',
      'WebSockets',
      'Compute Engine',
      'JWT',
      'NGINX',
    ],
  },
  {
    id: 'merashop',
    title: 'Mera Shop',
    category: 'freelance',
    type: { es: 'E-commerce', en: 'E-commerce' },
    image: {
      src: pMeraShop,
      alt: { es: 'Página principal de Mera Shop', en: 'Mera Shop home page' },
    },
    summary: {
      es: 'Tienda en línea que reemplazó una versión en PrestaShop: pagos con Stripe, diseño alineado a la marca y nuevos servicios como impresión 3D y cursos.',
      en: 'Online store that replaced a PrestaShop version: Stripe payments, on-brand design and new services such as 3D printing and courses.',
    },
    role: {
      es: 'Frontend, API, pagos y despliegue.',
      en: 'Frontend, API, payments and deployment.',
    },
    tech: [
      'Vue.js',
      'Vuetify',
      'Node.js',
      'Express.js',
      'Stripe',
      'MySQL',
      'Google Cloud',
      'JWT',
      'NGINX',
      'GitHub',
    ],
  },
  {
    id: 'barbershop',
    title: { es: 'Sistema para barbería', en: 'Barbershop management system' },
    category: 'freelance',
    type: { es: 'Web App', en: 'Web App' },
    image: {
      src: pBarber,
      alt: { es: 'Interior de la barbería', en: 'Barbershop interior' },
    },
    summary: {
      es: 'Inventario, citas y trabajo de cada barbero por sucursal, con API y frontend en un mismo proyecto Next.js.',
      en: 'Inventory, appointments and each barber’s work per branch, with API and frontend in a single Next.js project.',
    },
    role: { es: 'Backend y frontend completos.', en: 'Full backend and frontend.' },
    tech: [
      'Next.js',
      'Material UI',
      'PostgreSQL',
      'App Engine',
      'Docker',
      'JWT',
      'NGINX',
      'GitHub',
    ],
  },
  {
    id: 'ecommerce-co',
    title: { es: 'E-commerce de tecnología · Colombia', en: 'Tech e-commerce · Colombia' },
    category: 'freelance',
    type: { es: 'E-commerce', en: 'E-commerce' },
    summary: {
      es: 'Tienda de tecnología con la pasarela de pago local de Colombia, hecha en colaboración con un desarrollador de ese país.',
      en: 'Tech store with Colombia’s local payment gateway, built together with a developer from that country.',
    },
    role: {
      es: 'API y lógica del servidor; mentoría en React al desarrollador del frontend.',
      en: 'API and server logic; React mentoring for the frontend developer.',
    },
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Cloud Run',
      'Docker',
      'JWT',
      'Swagger',
      'Postman',
      'React',
    ],
  },
  {
    id: 'trigoo',
    title: 'TRIGOO · FANASA',
    category: 'nocode',
    type: { es: 'App web y móvil', en: 'Web & mobile app' },
    image: {
      src: pTrigoo,
      alt: { es: 'Logotipo de TRIGOO', en: 'TRIGOO logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Negociaciones entre farmacias y laboratorios con reglas configurables por el cliente, flujo de aprobación y reportería.',
      en: 'Negotiations between pharmacies and labs with client-configurable rules, an approval flow and reporting.',
    },
    role: {
      es: 'Desarrollo completo de la app y su lógica en MySQL.',
      en: 'Full app build and its MySQL logic.',
    },
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },
  {
    id: 'officedepot',
    title: 'Gestión Office Depot',
    category: 'nocode',
    type: { es: 'App web y móvil', en: 'Web & mobile app' },
    image: {
      src: pOfficeDepot,
      alt: { es: 'Logotipo de Office Depot', en: 'Office Depot logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Inventario, instalaciones, técnicos, ventas y categorías, con reportes por tienda a nivel nacional.',
      en: 'Inventory, installations, technicians, sales and categories, with nationwide per-store reports.',
    },
    role: {
      es: 'Desarrollo completo de la app y sus reportes.',
      en: 'Full app build and its reports.',
    },
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },
  {
    id: 'herdez',
    title: 'Bitácora Herdez',
    category: 'nocode',
    type: { es: 'App web y móvil', en: 'Web & mobile app' },
    image: {
      src: pHerdez,
      alt: { es: 'Logotipo de Grupo Herdez', en: 'Grupo Herdez logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Bitácoras de auditoría a proveedores para verificar que cultivos y productos cumplan la política de calidad, con reportes PDF automáticos.',
      en: 'Supplier audit logs to verify crops and products meet quality policy, with automatic PDF reports.',
    },
    role: {
      es: 'Desarrollo completo de la app y los reportes PDF.',
      en: 'Full app build and PDF reports.',
    },
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },
]
