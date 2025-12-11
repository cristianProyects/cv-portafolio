import bbvaMe from '@/assets/bbva_yo.jpg';
import googleMe from '@/assets/google_yo_yo.jpg';

const useExperiences = () => {
    
    const heroComponentProps = {
        title: ['Experiencias', 'Destacadas'],
        description: 'Mi trayectoria en Google México y BBVA, trabajando en proyectos de alto impacto.',
    };
    
    type Highlight = {
        icon: string;
        text: string;
    };
    
    type Experience = {
        id: string;
        company: string;
        title: string;
        locationTag: string;
        badgeLabel: string;
        badgeVariant: 'current' | 'google' | 'default';
        logoUrl: string;
        logoClass: string;
        image: string;
        imageAlt: string;
        descriptionHtml: string;
        highlights: Highlight[];
    };
    
    const experiences: Experience[] = [
        {
            id: 'bbva',
            company: 'BBVA México',
            title: 'BBVA México – Torre BBVA',
            locationTag: 'Torre BBVA · CDMX',
            badgeLabel: 'Actual',
            badgeVariant: 'current',
            logoUrl: 'https://www.bbva.com/wp-content/uploads/2019/06/Marqueex2.png',
            logoClass: 'bbva-logo',
            image: bbvaMe,
            imageAlt: 'Yo en la Torre BBVA México',
            descriptionHtml: `
          Trabajo en proyectos internos de <strong>desarrollo web</strong> e <strong>integración de sistemas</strong>,
          colaborando en entornos de <strong>alta exigencia y seguridad bancaria</strong>. Esta experiencia me ha
          permitido fortalecer mis <strong>habilidades técnicas</strong>, la comunicación con <strong>equipos multidisciplinarios</strong>
          y el enfoque en <strong>soluciones escalables</strong>.
        `,
            highlights: [
                { icon: 'mdi-bank', text: 'Desarrollo de sistemas bancarios críticos' },
                { icon: 'mdi-lock-check-outline', text: 'Flujos con alta seguridad y cumplimiento' },
                { icon: 'mdi-account-group', text: 'Trabajo con equipos multidisciplinarios' },
            ]
            ,
        },
        {
            id: 'google',
            company: 'Google México',
            title: 'Google México – Oficinas CDMX',
            locationTag: 'Oficinas Google · CDMX',
            badgeLabel: 'Google',
            badgeVariant: 'google',
            logoUrl:
                'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            logoClass: 'google-logo',
            image: googleMe,
            imageAlt: 'Yo en las oficinas de Google México',
            descriptionHtml: `
          Participé como <strong>desarrollador</strong> y <strong>auditor técnico</strong> en sesiones con clientes,
          llevando <strong>MVPs (Minimum Viable Products)</strong> en colaboración con <strong>Googlers</strong>. Tuve la
          oportunidad de trabajar directamente en entornos reales dentro de Google, entendiendo el flujo completo de
          desarrollo de <strong>soluciones empresariales basadas en la nube</strong>.
        `,
            highlights: [
                { icon: 'mdi-cloud-outline', text: 'MVPs empresariales sobre Google Cloud' },
                { icon: 'mdi-magnify-scan', text: 'Auditoría técnica en sesiones con clientes' },
                { icon: 'mdi-handshake', text: 'Colaboración directa con Googlers' },
            ],
    
        },
    ];
    return { heroComponentProps, experiences };
}
export default useExperiences;