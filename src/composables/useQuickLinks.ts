const useQucickLinks = () => {
const informationHeroComponent = {
  title: ['Soy', 'Cristian Espiridion'],
  subtitle: 'Desarrollador Full Stack',
  description:
    'Especializado en crear experiencias digitales excepcionales. Con experiencia en Google y BBVA, transformo ideas en soluciones tecnológicas escalables.',
  actions: [
    { label: 'Ver Proyectos', link: 'projects', type: 'primary' as const },
    { label: 'Stack Tecnológico', link: 'techstack', type: 'secondary' as const },
  ],
};

const quickLinks = [
  {
    title: 'Experiencias Destacadas',
    description:
      'Mi trayectoria en Google México y BBVA, trabajando en proyectos de alto impacto',
    icon: 'mdi-rocket-launch',
    link: 'experiences',
    color: 'red',
  },
  {
    title: 'Proyectos',
    description:
      'Soluciones innovadoras que he desarrollado: e-commerce, dashboards, APIs y más',
    icon: 'mdi-briefcase-variant',
    link: 'projects',
    color: 'brown',
  },
  {
    title: 'Stack Tecnológico',
    description:
      'Tecnologías y herramientas que domino: Vue, React, Node.js, Cloud y más',
    icon: 'mdi-laptop',
    link: 'techstack',
    color: 'grey',
  },
];
return { informationHeroComponent, quickLinks };
}


export default useQucickLinks