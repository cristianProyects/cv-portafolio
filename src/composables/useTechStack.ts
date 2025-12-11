const useTechStack = () => {

    const languageLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
];

const cloudLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg',
  'https://blog.kakaocdn.net/dn/WSVB2/btsyEUF6UT2/TBuRkGbTFDwlZ6BKV0ksFK/img.png',
  'https://iconape.com/wp-content/png_logo_vector/google-appengine-logo.png',
  'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/google-appsheet-logo.png',
];

const databaseLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
];

const versionControlLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
];

const toolsLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'https://websockets.readthedocs.io/en/10.2/_static/websockets.svg',
  'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-qmopau7qaog2hcyqa1r78m.png/jwt-nuo0qqa4imspf51wa8qqr.png?_a=DATAg1AAZAA0',
  'https://1000logos.net/wp-content/uploads/2022/03/Tableau-Logo.png',
];

const heroComponentProps = {
  title: ['Stack', 'Tecnológico'],
  description:
    'Desarrollador Full Stack que ve la tecnología como un camino de aprendizaje continuo. Me motiva crear, mejorar y entender cómo la tecnología puede simplificar la vida de las personas.',
};

type StackSection = {
  id: string;
  number: string;
  title: string;
  logos: string[];
};

const sections: StackSection[] = [
  {
    id: 'languages',
    number: '01',
    title: 'Lenguajes',
    logos: languageLogos,
  },
  {
    id: 'cloud',
    number: '02',
    title: 'Servicios en la nube',
    logos: cloudLogos,
  },
  {
    id: 'databases',
    number: '03',
    title: 'Bases de datos',
    logos: databaseLogos,
  },
  {
    id: 'version-control',
    number: '04',
    title: 'Control de versiones',
    logos: versionControlLogos,
  },
  {
    id: 'tools',
    number: '05',
    title: 'Herramientas y otros',
    logos: toolsLogos,
  },
];
return { heroComponentProps, sections };
}

export default useTechStack;