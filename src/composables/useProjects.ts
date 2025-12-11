import pAgroMera from '@/assets/projects/p_meraiot.png';
import pMeraShop from '@/assets/projects/p_merashop.png';
import pCartera from '@/assets/projects/p_cartera.png';
import pBBVA from '@/assets/projects/p_bbva.png';
import pTRIGOO from '@/assets/projects/p_trigoo.jpg';

const useProjects = () => {
    const heroComponentProps = {
    title: ['Mis', 'Proyectos'],
    description:
        'Soluciones innovadoras que he desarrollado para resolver problemas reales y crear impacto.',
};

type Project = {
    title: string;
    type: string;
    image: string;
    description: string;
    techStack: string[];
};

const developWeb: Project[] = [
    {
        title: 'AgroMera IoT',
        type: 'Web App',
        image: pAgroMera,
        description: `Desarrollé un sistema completo de Internet de las Cosas (IoT) para la gestión de riegos en invernaderos. 
        Implementé toda la arquitectura: desde el diseño de la base de datos y la configuración de una máquina virtual con protocolo MQTT, 
        hasta el desarrollo del backend y frontend. El sistema permite monitorear variables clave, analizar datos y facilitar la toma de decisiones. 
        Este proyecto fue mi primera experiencia integral que me introdujo al mundo del desarrollo web y la tecnología IoT.`,
        techStack: [
            'Vue.js',
            'Vuetify',
            'Node.js',
            'Express.js',
            'MongoDB',
            'MySql',
            'MQTT',
            'GCP',
            'Compute Engine',
            'WebSockets',
            'JWT',
            'NGINX',
        ],
    },
    {
        title: 'Mera Shop',
        type: 'Ecommerce Web',
        image: pMeraShop,
        description: `Desarrollé una tienda en línea integrada con Stripe como pasarela de pago, 
        con el objetivo de modernizar y reemplazar una versión anterior basada en PrestaShop. 
        Incluyó la implementación de pagos en línea, un diseño renovado alineado con la identidad de la empresa 
        y nuevos servicios como impresión 3D y cursos. 
        Este desarrollo mejoró la experiencia del usuario y amplió las capacidades comerciales del negocio.`,
        techStack: [
            'Vue.js',
            'Vuetify',
            'Node.js',
            'Express.js',
            'Stripe',
            'GCP',
            'MySql',
            'JWT',
            'NGINX',
            'Git',
            'GitHub',
        ],
    },
    {
        title: 'Cartera Liomont',
        type: 'Dashboard',
        image: pCartera,
        description: `Desarrollé un proyecto de análisis de datos llamado Cartera, implementando toda la lógica de negocio en el backend. 
        Trabajé con SQL Server creando vistas, stored procedures, linked servers, jobs y configuraciones avanzadas. 
        Diseñé dashboards en Tableau conectados al servidor, procesando y depurando los datos antes de su visualización. 
        Finalmente integré estos dashboards dentro de una aplicación web en React, permitiendo al cliente acceder de forma centralizada y segura.`,
        techStack: [
            'React.js',
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Express.js',
            'JWT',
            'Tableau',
            'SQL Server',
            'Git',
            'GitHub',
            'NGINX',
        ],
    },
    {
        title: 'Dispersión BBVA',
        type: 'Web App',
        image: pBBVA,
        description: `Desarrollé un módulo frontend para la plataforma de dispersión de recursos de Fundación BBVA. 
        Este módulo permite configurar montos a asignar por nivel y grado escolar, aplicar etiquetas que modifican los valores base, 
        e incluir flujos de validación y Vo.Bo. antes de aprobar configuraciones finales. 
        Mi participación se centró en el desarrollo del frontal, garantizando una interfaz clara, dinámica y alineada con los requerimientos del sistema.`,
        techStack: [
            'Vue 3.js',
            'SCSS',
            'TS',
            'TanStackQuery',
            'Axios',
            'GCP',
            'App Engine',
            'Buckets',
            'Arquetipo',
            'Vitest',
            'SonarQube',
            'Jenkins',
            'Git',
            'BitBucket',
            'Jira',
        ],
    },
    {
        title: 'Captación Donativos BBVA',
        type: 'Web App',
        image: pBBVA,
        description: `Desarrollé el módulo de Desastres Naturales para la plataforma de captación de donativos de BBVA. 
        Implementé autenticación con Firebase y un flujo completo para registrar donativos, 
        recopilando información de donantes y aportes. 
        La pasarela de pago fue integrada mediante un proveedor externo, coordinando la captura y envío seguro de datos. 
        Mi rol se centró en el desarrollo del frontal, asegurando un proceso claro, seguro y eficiente para los usuarios.`,
        techStack: [
            'Vue 3.js',
            'SCSS',
            'TS',
            'TanStackQuery',
            'Axios',
            'Firebase',
            'GCP',
            'App Engine',
            'Buckets',
            'Arquetipo',
            'Vitest',
            'SonarQube',
            'Jenkins',
            'Git',
            'BitBucket',
            'Jira',
        ],
    },
];
const developWebPersonal: Project[] = [
    {
        title: 'Eccommerce Colombia',
        type: 'Ecommerce Web',
        image: 'https://cdn.worldvectorlogo.com/logos/colombia.svg',
        description: `Desarrollé el backend de un e-commerce de tecnología en colaboración con un desarrollador de Colombia. El proyecto fue implementado en JavaScript e incluyó la integración de una pasarela de pago utilizada en ese país. Mi responsabilidad principal fue la construcción de la API y la lógica del servidor, mientras que apoyé al desarrollador del frontend guiándolo en el uso de React y brindándole retroalimentación para mejorar la calidad de la interfaz. Este proyecto combinó desarrollo técnico con mentoría práctica.`,
        techStack: [
            'React.js',
            'HTML',
            'CSS',
            'JS',
            'MongoDB',
            'PostgreSQL',
            'GCP',
            'Cloud Run',
            'Docker',
            'JWT',
            'Express.js',
            'Node.js',
            'Postman',
            'Swagger',
            'Git',
            'GitHub',
        ],
    },
    {
        title: 'Aplicativo para BARBERSHOP ',
        type: 'Web App',
        image: 'https://lh3.googleusercontent.com/p/AF1QipN-S3NPC79WFsbczvkiRwZsqvOrUpsoSoWilX8h=s680-w680-h510-rw',
        description: `Desarrollé una aplicación tipo sistema de inventarios para una barbería, que permite administrar productos, gestionar citas y visualizar el trabajo realizado por cada barbero en distintas sucursales. Implementé tanto el backend como el frontend utilizando Next.js, aprovechando su arquitectura full-stack para construir la API, la lógica de negocio y la interfaz de usuario dentro del mismo proyecto. El sistema facilita la organización interna y mejora la experiencia del cliente al agendar servicios.`,
        techStack: [
            'Next.js',
            'Material UI',
            'HTML',
            'CSS',
            'JS',
            'GCP',
            'App Engine',
            'Docker',
            'PostgreSQL',
            'JWT',
            'NGINX',
            'Git',
            'GitHub',
        ],
    },
];

const noCodeProjects: Project[] = [
    {
        title: 'TRIGOO',
        type: 'APP Web/Movil',
        image: pTRIGOO,
        description: `Desarrollé un sistema en AppSheet que implementa lógica de negocio configurable y capaz de autogestionarse según las reglas definidas por el cliente FANASA. 
        La plataforma permite que sus clientes, principalmente farmacias, realicen negociaciones con laboratorios para la compra de medicamentos bajo distintos criterios y condiciones. 
        Implementé un flujo de aprobación para cada negociación y un sistema de reportería que centraliza y muestra la información generada. 
        Este desarrollo permitió automatizar procesos clave y facilitar la gestión operativa del cliente.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
    {
        title: 'Gestión OfficeDepot',
        type: 'APP Web/Movil',
        image:
            'https://play-lh.googleusercontent.com/UVQSNpR3Alvkgou8OGNF9nmjvVMh0WOrn2HMUiSzl_KCB_cWECQt55Sjdd1ayD7CNpyx=w600-h300-pc0xffffff-pd',
        description: `Desarrollé un sistema en AppSheet para Office Depot que permite gestionar el inventario de productos y administrar procesos relacionados con instalaciones, técnicos, ventas y categorización de artículos. 
        Implementé también un módulo de reportería que facilita la consulta de información por cada tienda a nivel nacional. 
        Este desarrollo proporcionó una solución centralizada y de fácil uso para optimizar la operación de sus sucursales en México.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
    {
        title: 'Bitácora Herdez',
        type: 'APP Web/Movil',
        image: 'https://ventasmg.com/wp-content/uploads/2024/03/IMG-58.png',
        description: `Desarrollé una aplicación en AppSheet para Herdez que permite gestionar bitácoras de auditoría en cada uno de sus proveedores. 
        La aplicación guía procesos de verificación para asegurar que los cultivos y productos cumplan con las políticas de calidad de la empresa. 
        Implementé además la generación automática de reportes en PDF que consolidan la información capturada, facilitando su descarga y documentación formal.`,
        techStack: [
            'MySQL',
            'StoreProcedures',
            'Triggers',
            'AppScript',
            'AppSheet',
            'LookerStudio',
        ],
    },
];
    return { heroComponentProps, developWeb, developWebPersonal, noCodeProjects };
}
export default useProjects;
