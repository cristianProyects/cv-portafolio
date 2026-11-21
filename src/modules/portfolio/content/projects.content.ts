// Proyectos como casos: dónde se hizo (empresa o personal), qué es, mi rol, qué hice y con qué.
// Solo hechos verificables: sin métricas ni testimonios inventados. Fuentes: portafolio anterior,
// CV 2026 y los repositorios de los proyectos; la empresa de cada uno la confirmó el usuario.
import pBBVA from '@/assets/projects/p_bbva.png'
import pCartera from '@/assets/projects/p_cartera.png'
import pHerdez from '@/assets/projects/p_herdez.png'
import pMeraIot from '@/assets/projects/p_meraiot.png'
import pMeraShop from '@/assets/projects/p_merashop.png'
import pOfficeDepot from '@/assets/projects/p_officedepot.png'
import pTrigoo from '@/assets/projects/p_trigoo.jpg'
import type { Localized } from '@/shared/i18n/locale'
import type { EmployerId } from './experience.content'
import type { TechName } from './tech.content'

export type ProjectMedia =
  | { kind: 'image'; src: string; alt: Localized; fit?: 'cover' | 'contain' }
  | { kind: 'demo'; demo: 'tours' | 'markets' }
  | { kind: 'none' }

export type Project = {
  id: string
  /** Nombre propio (igual en ambos idiomas) o texto traducido. */
  title: string | Localized
  employer: EmployerId
  client?: string
  type: Localized
  status?: { label: Localized; live: boolean }
  media: ProjectMedia
  summary: Localized
  role: Localized
  highlights: Localized[]
  tech: TechName[]
}

export const PROJECTS_HEADING = {
  title: { es: 'Proyectos', en: 'Projects' },
  intro: {
    es: 'Lo que he construido en cada empresa: qué es, cuál fue mi rol y con qué tecnologías.',
    en: 'What I have built at each company: what it is, my role and the technologies used.',
  },
} as const

export const EMPLOYER_LABELS: Record<EmployerId | 'all', Localized> = {
  all: { es: 'Todos', en: 'All' },
  hitss: { es: 'Global Hitss · BBVA', en: 'Global Hitss · BBVA' },
  esource: { es: 'Esource Capital', en: 'Esource Capital' },
  turing: { es: 'Turing-IA', en: 'Turing-IA' },
  mera: { es: 'Ingeniería MERA', en: 'Ingeniería MERA' },
  personal: { es: 'Personales y freelance', en: 'Personal & freelance' },
}

export const PROJECTS: Project[] = [
  // ── Global Hitss · BBVA ─────────────────────────────────────────────
  {
    id: 'dispersion-bbva',
    title: {
      es: 'Dispersión de recursos · Fundación BBVA',
      en: 'Funds disbursement · BBVA Foundation',
    },
    employer: 'hitss',
    client: 'BBVA México',
    type: { es: 'Web App', en: 'Web App' },
    media: { kind: 'image', src: pBBVA, alt: { es: 'Logotipo de BBVA', en: 'BBVA logo' } },
    summary: {
      es: 'Plataforma para asignar los apoyos de la Fundación BBVA: define cuánto corresponde por nivel y grado escolar antes de dispersar los recursos.',
      en: 'Platform to allocate BBVA Foundation support: it defines the amount per school level and grade before funds are disbursed.',
    },
    role: {
      es: 'Desarrollador frontend del módulo de configuración, sobre el arquetipo corporativo de BBVA.',
      en: 'Frontend developer of the configuration module, on BBVA’s corporate archetype.',
    },
    highlights: [
      {
        es: 'Configuración de montos por nivel y grado escolar.',
        en: 'Amount configuration by school level and grade.',
      },
      {
        es: 'Etiquetas que modifican los valores base de cada configuración.',
        en: 'Tags that adjust the base values of each configuration.',
      },
      {
        es: 'Flujo de validación y Vo.Bo. antes de aprobar la configuración final.',
        en: 'Review and sign-off flow before approving the final configuration.',
      },
    ],
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
    employer: 'hitss',
    client: 'BBVA México',
    type: { es: 'Web App', en: 'Web App' },
    media: { kind: 'image', src: pBBVA, alt: { es: 'Logotipo de BBVA', en: 'BBVA logo' } },
    summary: {
      es: 'Plataforma de BBVA para recibir donativos. Desarrollé el módulo de Desastres Naturales, desde el acceso del donante hasta la entrega de datos a la pasarela de pago.',
      en: 'BBVA platform to receive donations. I built the Natural Disasters module, from donor sign-in to handing data to the payment gateway.',
    },
    role: {
      es: 'Desarrollador frontend del módulo de Desastres Naturales.',
      en: 'Frontend developer of the Natural Disasters module.',
    },
    highlights: [
      { es: 'Autenticación con Firebase.', en: 'Firebase authentication.' },
      {
        es: 'Registro de donantes y aportes en un flujo claro paso a paso.',
        en: 'Donor and contribution capture in a clear step-by-step flow.',
      },
      {
        es: 'Captura y envío seguro de datos a la pasarela de pago externa.',
        en: 'Secure capture and hand-off of data to the external payment gateway.',
      },
    ],
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

  // ── Esource Capital ────────────────────────────────────────────────
  {
    id: 'trigoo',
    title: 'TRIGOO',
    employer: 'esource',
    client: 'FANASA',
    type: { es: 'App web y móvil · AppSheet', en: 'Web & mobile app · AppSheet' },
    media: {
      kind: 'image',
      src: pTrigoo,
      alt: { es: 'Logotipo de FANASA', en: 'FANASA logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Sistema donde las farmacias clientes de FANASA negocian con laboratorios la compra de medicamentos bajo distintas condiciones, con reglas que el propio cliente configura.',
      en: 'System where FANASA’s pharmacy clients negotiate medicine purchases with labs under different conditions, with rules the client configures.',
    },
    role: {
      es: 'Desarrollo completo de la app y de su lógica de negocio en MySQL.',
      en: 'Full app build and its business logic in MySQL.',
    },
    highlights: [
      {
        es: 'Lógica de negocio configurable que se autogestiona según las reglas del cliente.',
        en: 'Configurable business logic that self-manages from the client’s rules.',
      },
      {
        es: 'Flujo de aprobación para cada negociación.',
        en: 'Approval flow for every negotiation.',
      },
      {
        es: 'Reportería centralizada con Looker Studio.',
        en: 'Centralized reporting with Looker Studio.',
      },
    ],
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },
  {
    id: 'officedepot',
    title: { es: 'Gestión de tiendas', en: 'Store management' },
    employer: 'esource',
    client: 'Office Depot',
    type: { es: 'App web y móvil · AppSheet', en: 'Web & mobile app · AppSheet' },
    media: {
      kind: 'image',
      src: pOfficeDepot,
      alt: { es: 'Logotipo de Office Depot', en: 'Office Depot logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Aplicación para operar las sucursales de Office Depot en México: inventario, instalaciones, técnicos y ventas en un solo lugar.',
      en: 'App to run Office Depot branches across Mexico: inventory, installations, technicians and sales in one place.',
    },
    role: {
      es: 'Desarrollo completo de la app y de sus reportes.',
      en: 'Full app build and its reports.',
    },
    highlights: [
      {
        es: 'Inventario de productos con categorización de artículos.',
        en: 'Product inventory with item categorization.',
      },
      {
        es: 'Gestión de instalaciones, técnicos y ventas.',
        en: 'Installations, technicians and sales management.',
      },
      {
        es: 'Reportes por tienda a nivel nacional.',
        en: 'Nationwide per-store reports.',
      },
    ],
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },
  {
    id: 'herdez',
    title: { es: 'Bitácora de auditorías', en: 'Audit log' },
    employer: 'esource',
    client: 'Grupo Herdez',
    type: { es: 'App web y móvil · AppSheet', en: 'Web & mobile app · AppSheet' },
    media: {
      kind: 'image',
      src: pHerdez,
      alt: { es: 'Logotipo de Grupo Herdez', en: 'Grupo Herdez logo' },
      fit: 'contain',
    },
    summary: {
      es: 'Aplicación para auditar a los proveedores de Herdez y verificar que cultivos y productos cumplan su política de calidad.',
      en: 'App to audit Herdez suppliers and verify crops and products meet its quality policy.',
    },
    role: {
      es: 'Desarrollo completo de la app y de los reportes PDF.',
      en: 'Full app build and PDF reports.',
    },
    highlights: [
      {
        es: 'Bitácoras guiadas de verificación por proveedor.',
        en: 'Guided verification logs per supplier.',
      },
      {
        es: 'Generación automática de reportes en PDF para documentación formal.',
        en: 'Automatic PDF reports for formal documentation.',
      },
    ],
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio'],
  },

  // ── Turing-IA ──────────────────────────────────────────────────────
  {
    id: 'cartera',
    title: 'Cartera Liomont',
    employer: 'turing',
    client: 'Liomont',
    type: { es: 'Dashboard de datos', en: 'Data dashboard' },
    media: {
      kind: 'image',
      src: pCartera,
      alt: { es: 'Tablero del proyecto Cartera', en: 'Cartera dashboard' },
    },
    summary: {
      es: 'Análisis de la cartera del cliente: los datos se procesan en SQL Server, se visualizan en Tableau y se consultan desde una aplicación web propia.',
      en: 'Client portfolio analytics: data is processed in SQL Server, visualized in Tableau and accessed from a custom web app.',
    },
    role: {
      es: 'Lógica de negocio en el backend, tableros y app web.',
      en: 'Backend business logic, dashboards and web app.',
    },
    highlights: [
      {
        es: 'Vistas, stored procedures, linked servers y jobs en SQL Server.',
        en: 'Views, stored procedures, linked servers and jobs in SQL Server.',
      },
      {
        es: 'Depuración de datos y tableros en Tableau conectados al servidor.',
        en: 'Data cleansing and Tableau dashboards connected to the server.',
      },
      {
        es: 'App en React que centraliza los tableros con acceso seguro.',
        en: 'React app that centralizes the dashboards with secure access.',
      },
    ],
    tech: ['React', 'Node.js', 'Express.js', 'JWT', 'SQL Server', 'Tableau', 'NGINX', 'GitHub'],
  },

  // ── Personales y freelance ─────────────────────────────────────────
  {
    id: 'tours',
    title: {
      es: 'Plataforma de reservas y pagos · Agencia de tours',
      en: 'Booking & payments platform · Travel agency',
    },
    employer: 'personal',
    type: { es: 'Freelance · 2026', en: 'Freelance · 2026' },
    status: { label: { es: 'MVP terminado', en: 'MVP complete' }, live: false },
    media: { kind: 'demo', demo: 'tours' },
    summary: {
      es: 'Landing para una agencia de viajes a festivales de música donde el cliente arma su paquete paso a paso (fecha, hotel, habitación, transporte y extras), ve el precio calculado en el servidor y paga en mensualidades.',
      en: 'Landing for a music-festival travel agency where customers build their package step by step (date, hotel, room, transport and extras), see a server-calculated price and pay in installments.',
    },
    role: {
      es: 'Todo el proyecto: arquitectura, API, base de datos, frontend y panel de administración.',
      en: 'The whole project: architecture, API, database, frontend and admin panel.',
    },
    highlights: [
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
    employer: 'personal',
    type: { es: 'Proyecto personal', en: 'Personal project' },
    status: { label: { es: 'En desarrollo', en: 'In progress' }, live: true },
    media: { kind: 'demo', demo: 'markets' },
    summary: {
      es: 'Agentes de IA que recolectan datos de mercado, noticias y calendario económico, detectan patrones y miden con honestidad qué tan seguido una señal llega a su objetivo. Solo análisis: nunca ejecuta operaciones.',
      en: 'AI agents that collect market data, news and the economic calendar, detect patterns and honestly measure how often a signal reaches its target. Analysis only: it never places trades.',
    },
    role: {
      es: 'Diseño y desarrollo completo: servicios de datos, API, base de datos de series de tiempo y panel en vivo.',
      en: 'Full design and build: data services, API, time-series database and live dashboard.',
    },
    highlights: [
      {
        es: 'Servicios en Docker que se recuperan solos, con respaldos diarios.',
        en: 'Self-healing Docker services with daily backups.',
      },
      {
        es: 'Panel en vivo con gráfica de velas, sesiones de mercado y salud de los datos.',
        en: 'Live dashboard with candlestick chart, market sessions and data health.',
      },
      {
        es: 'Estadísticas siempre junto a su línea base, sin porcentajes inflados.',
        en: 'Statistics always shown next to their baseline, no inflated hit rates.',
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
  {
    id: 'agromera',
    title: 'AgroMera IoT',
    employer: 'mera',
    type: { es: 'Web App · IoT', en: 'Web App · IoT' },
    media: {
      kind: 'image',
      src: pMeraIot,
      alt: { es: 'Panel de AgroMera IoT', en: 'AgroMera IoT dashboard' },
    },
    summary: {
      es: 'Sistema IoT para gestionar el riego de invernaderos: monitorea variables clave en tiempo real y ayuda a tomar decisiones. Fue mi primer sistema de punta a punta.',
      en: 'IoT system to manage greenhouse irrigation: real-time monitoring of key variables to support decisions. My first end-to-end system.',
    },
    role: {
      es: 'Todo el sistema: base de datos, servidor MQTT, backend y frontend.',
      en: 'The whole system: database, MQTT server, backend and frontend.',
    },
    highlights: [
      {
        es: 'Máquina virtual en Compute Engine con protocolo MQTT para los sensores.',
        en: 'Compute Engine virtual machine with MQTT for the sensors.',
      },
      {
        es: 'Backend con WebSockets para ver los datos en tiempo real.',
        en: 'WebSocket backend for real-time data.',
      },
      {
        es: 'Panel para monitorear y analizar las variables del invernadero.',
        en: 'Dashboard to monitor and analyze greenhouse variables.',
      },
    ],
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
    employer: 'mera',
    type: { es: 'E-commerce', en: 'E-commerce' },
    media: {
      kind: 'image',
      src: pMeraShop,
      alt: { es: 'Página principal de Mera Shop', en: 'Mera Shop home page' },
    },
    summary: {
      es: 'Tienda en línea de componentes electrónicos que reemplazó una versión anterior en PrestaShop, con un diseño alineado a la marca.',
      en: 'Online electronics store that replaced a previous PrestaShop version, with an on-brand design.',
    },
    role: {
      es: 'Frontend, API, pagos y despliegue.',
      en: 'Frontend, API, payments and deployment.',
    },
    highlights: [
      { es: 'Pagos en línea con Stripe.', en: 'Online payments with Stripe.' },
      {
        es: 'Nuevos servicios en la tienda: impresión 3D y cursos.',
        en: 'New services in the store: 3D printing and courses.',
      },
      {
        es: 'Despliegue en Google Cloud con NGINX.',
        en: 'Deployment on Google Cloud with NGINX.',
      },
    ],
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
]

/** Proyectos hechos en un trabajo (sección Proyectos) y por mi cuenta (sección Personales). */
export const WORK_PROJECTS = PROJECTS.filter((p) => p.employer !== 'personal')
export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.employer === 'personal')

export const PERSONAL_HEADING = {
  title: { es: 'Proyectos personales y freelance', en: 'Personal & freelance projects' },
  intro: {
    es: 'Proyectos que diseño y construyo por mi cuenta, completos: arquitectura, backend, base de datos, interfaz y despliegue. Aquí es donde pruebo y aplico lo que aprendo.',
    en: 'Projects I design and build on my own, end to end: architecture, backend, database, interface and deployment. This is where I try out and apply what I learn.',
  },
} as const
