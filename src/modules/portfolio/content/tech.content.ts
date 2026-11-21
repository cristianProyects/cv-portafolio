// Catálogo de tecnologías. Los proyectos y la sección de stack usan estos mismos nombres, así un
// clic en una tecnología filtra los proyectos donde se usó. `logo` es el nombre en Devicon.
import type { Localized } from '@/shared/i18n/locale'

export const TECH = {
  'Vue.js': { logo: 'vuejs/vuejs-original' },
  React: { logo: 'react/react-original' },
  'Next.js': { logo: 'nextjs/nextjs-original' },
  TypeScript: { logo: 'typescript/typescript-original' },
  JavaScript: { logo: 'javascript/javascript-original' },
  HTML: { logo: 'html5/html5-original' },
  CSS: { logo: 'css3/css3-original' },
  SCSS: { logo: 'sass/sass-original' },
  'Tailwind CSS': { logo: 'tailwindcss/tailwindcss-original' },
  Vuetify: { logo: 'vuetify/vuetify-original' },
  'Material UI': { logo: 'materialui/materialui-original' },
  Pinia: { logo: null },
  'TanStack Query': { logo: null },
  'Node.js': { logo: 'nodejs/nodejs-original' },
  'Express.js': { logo: 'express/express-original' },
  'API REST': { logo: null },
  JWT: { logo: null },
  WebSockets: { logo: null },
  MQTT: { logo: null },
  Stripe: { logo: null },
  Java: { logo: 'java/java-original' },
  Python: { logo: 'python/python-original' },
  FastAPI: { logo: 'fastapi/fastapi-original' },
  MySQL: { logo: 'mysql/mysql-original' },
  'SQL Server': { logo: 'microsoftsqlserver/microsoftsqlserver-original' },
  PostgreSQL: { logo: 'postgresql/postgresql-original' },
  MongoDB: { logo: 'mongodb/mongodb-original' },
  'Google Cloud': { logo: 'googlecloud/googlecloud-original' },
  'Cloud Run': { logo: null },
  'App Engine': { logo: null },
  'Compute Engine': { logo: null },
  'Cloud Storage': { logo: null },
  Firebase: { logo: 'firebase/firebase-original' },
  AppSheet: { logo: null },
  'Apps Script': { logo: null },
  'Looker Studio': { logo: null },
  Tableau: { logo: null },
  Docker: { logo: 'docker/docker-original' },
  NGINX: { logo: 'nginx/nginx-original' },
  Linux: { logo: 'linux/linux-original' },
  Git: { logo: 'git/git-original' },
  GitHub: { logo: 'github/github-original' },
  Bitbucket: { logo: 'bitbucket/bitbucket-original' },
  Jenkins: { logo: 'jenkins/jenkins-original' },
  SonarQube: { logo: 'sonarqube/sonarqube-original' },
  Vitest: { logo: 'vitest/vitest-original' },
  Jira: { logo: 'jira/jira-original' },
  Postman: { logo: 'postman/postman-original' },
  Swagger: { logo: 'swagger/swagger-original' },
} as const satisfies Record<string, { logo: string | null }>

export type TechName = keyof typeof TECH

export function techLogoUrl(name: TechName): string | null {
  const logo = TECH[name].logo
  return logo ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}.svg` : null
}

export type StackGroup = {
  id: string
  title: Localized
  items: TechName[]
}

// Agrupado como en el CV (sección "Habilidades técnicas").
export const STACK_GROUPS: StackGroup[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      'Vue.js',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Pinia',
      'TanStack Query',
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express.js', 'Java', 'API REST', 'JWT', 'WebSockets', 'MQTT', 'Stripe'],
  },
  {
    id: 'data',
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'cloud',
    title: { es: 'Google Cloud', en: 'Google Cloud' },
    items: [
      'Google Cloud',
      'Cloud Run',
      'App Engine',
      'Compute Engine',
      'Cloud Storage',
      'Firebase',
      'AppSheet',
      'Apps Script',
    ],
  },
  {
    id: 'quality',
    title: { es: 'CI/CD y calidad', en: 'CI/CD & quality' },
    items: [
      'Jenkins',
      'SonarQube',
      'Vitest',
      'Docker',
      'NGINX',
      'Linux',
      'Git',
      'GitHub',
      'Bitbucket',
    ],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Jira', 'Postman', 'Swagger', 'Tableau', 'Looker Studio'],
  },
]

// Nivel aclarado junto al nombre cuando no es de uso diario (se muestra en el stack).
export const TECH_NOTES: Partial<Record<TechName, Localized>> = {
  Java: { es: 'Java 8 · básico', en: 'Java 8 · basic' },
}
