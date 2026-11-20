// Experiencia profesional, educación y certificaciones. Fuente: CV 2026.
import bbvaTower from '@/assets/bbva_yo.jpg'
import type { Localized } from '@/shared/i18n/locale'
import type { TechName } from './tech.content'

export type Job = {
  id: string
  role: Localized
  company: string
  client?: string
  period: Localized
  current: boolean
  image?: { src: string; alt: Localized }
  highlights: Localized[]
  tech: TechName[]
}

export const EXPERIENCE_HEADING = {
  title: { es: 'Experiencia', en: 'Experience' },
  intro: {
    es: 'Del primer portal en React a sistemas bancarios con CI/CD y desarrollo seguro.',
    en: 'From my first React portal to banking systems with CI/CD and secure development.',
  },
} as const

export const JOBS: Job[] = [
  {
    id: 'hitss',
    role: { es: 'Desarrollador de Software Fullstack', en: 'Fullstack Software Developer' },
    company: 'Global Hitss',
    client: 'BBVA México',
    period: { es: 'Oct 2024 — Actualidad', en: 'Oct 2024 — Present' },
    current: true,
    image: {
      src: bbvaTower,
      alt: {
        es: 'La Torre BBVA iluminada de noche en Paseo de la Reforma, CDMX',
        en: 'BBVA Tower lit up at night on Paseo de la Reforma, Mexico City',
      },
    },
    highlights: [
      {
        es: 'Desarrollo módulos frontend y landings públicas sobre el arquetipo corporativo a partir de diseños de UX/UI, creando componentes propios cuando hace falta.',
        en: 'I build frontend modules and public landing pages on the corporate archetype from UX/UI designs, creating custom components when needed.',
      },
      {
        es: 'Automatizo procesos en GCP: un cron ejecuta un servicio de backend y un stored procedure que depuran la información de aspirantes no seleccionados en la base de datos, Firebase y Cloud Storage.',
        en: 'I automate processes on GCP: a cron job runs a backend service and a stored procedure that purge non-selected applicants from the database, Firebase and Cloud Storage.',
      },
      {
        es: 'Administro recursos del proyecto en GCP: acceso a bases de datos mediante proxy, buckets de Cloud Storage y Firebase.',
        en: 'I manage project resources on GCP: database access through a proxy, Cloud Storage buckets and Firebase.',
      },
      {
        es: 'Integro mis entregas al flujo de CI/CD con Jenkins y SonarQube, con prácticas de desarrollo seguro y pruebas.',
        en: 'I ship through the CI/CD flow with Jenkins and SonarQube, following secure development and testing practices.',
      },
    ],
    tech: [
      'Vue.js',
      'TypeScript',
      'SCSS',
      'TanStack Query',
      'Google Cloud',
      'App Engine',
      'Firebase',
      'Cloud Storage',
      'Jenkins',
      'SonarQube',
      'Vitest',
      'Bitbucket',
      'Jira',
    ],
  },
  {
    id: 'esource',
    role: { es: 'Programador Jr', en: 'Junior Developer' },
    company: 'Esource Capital',
    period: { es: 'Ago 2023 — Oct 2024', en: 'Aug 2023 — Oct 2024' },
    current: false,
    highlights: [
      {
        es: 'Desarrollé sistemas en AppSheet para clientes de distintos giros (FANASA, Office Depot, Herdez), integrados con otros servicios mediante webhooks.',
        en: 'I built AppSheet systems for clients across industries (FANASA, Office Depot, Herdez), integrated with other services through webhooks.',
      },
      {
        es: 'Implementé lógica de negocio compleja en MySQL (stored procedures, triggers y vistas) e integré OCR y APIs externas.',
        en: 'I implemented complex business logic in MySQL (stored procedures, triggers and views) and integrated OCR and external APIs.',
      },
      {
        es: 'Me capacité y certifiqué en GCP y AppSheet en las oficinas de Google, donde también presenté MVPs a clientes.',
        en: 'I trained and got certified in GCP and AppSheet at the Google offices, where I also presented MVPs to clients.',
      },
      {
        es: 'Fui el referente técnico del equipo, resolviendo dudas y orientando a otros desarrolladores.',
        en: 'I was the team’s technical reference, answering questions and guiding other developers.',
      },
    ],
    tech: ['AppSheet', 'Apps Script', 'MySQL', 'Looker Studio', 'Google Cloud', 'API REST'],
  },
  {
    id: 'turing',
    role: { es: 'Becario de Desarrollo de Software', en: 'Software Development Intern' },
    company: 'Turing-IA',
    period: { es: 'Ene 2023 — May 2023', en: 'Jan 2023 — May 2023' },
    current: false,
    highlights: [
      {
        es: 'Desarrollé un portal para clientes en React con React Router, Material UI y Context API.',
        en: 'I built a customer portal in React with React Router, Material UI and the Context API.',
      },
      {
        es: 'Creé tableros en Tableau para el análisis de datos de cada cliente.',
        en: 'I created Tableau dashboards for each client’s data analysis.',
      },
      {
        es: 'Configuré SQL Server con una base de datos espejo mediante ODBC.',
        en: 'I configured SQL Server with a mirror database over ODBC.',
      },
      {
        es: 'Migré el correo a Google Workspace y capacité al equipo en su uso.',
        en: 'I migrated email to Google Workspace and trained the team to use it.',
      },
    ],
    tech: ['React', 'Material UI', 'Tableau', 'SQL Server'],
  },
]

export const EDUCATION = {
  title: { es: 'Formación y certificaciones', en: 'Education & certifications' },
  degree: {
    title: { es: 'Ingeniería en Sistemas Computacionales', en: 'B.Eng. in Computer Systems' },
    school: 'Universidad Politécnica de Atlacomulco',
    period: '2020 — 2023',
  },
  certifications: [
    {
      title: { es: 'Certified Scrum Developer® (CSD®)', en: 'Certified Scrum Developer® (CSD®)' },
      issuer: { es: 'SCRUMstudy', en: 'SCRUMstudy' },
      validity: { es: 'Vigente hasta nov 2027', en: 'Valid until Nov 2027' },
    },
    {
      title: { es: 'Desarrollo Seguro v2.0', en: 'Secure Development v2.0' },
      issuer: { es: 'Net4skills', en: 'Net4skills' },
      validity: { es: 'Vigente hasta 2028', en: 'Valid until 2028' },
    },
    {
      title: { es: 'Capacitación en GCP y AppSheet', en: 'GCP & AppSheet training' },
      issuer: { es: 'Oficinas de Google México', en: 'Google Mexico offices' },
      validity: { es: '2023 — 2024', en: '2023 — 2024' },
    },
  ],
} as const
