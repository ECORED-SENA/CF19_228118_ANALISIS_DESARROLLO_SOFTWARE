export default {
  global: {
    componenteFormativo: 'Integración continua',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados con el funcionamiento de un sistema web, soportado por la arquitectura de internet. A continuación, se revisarán las tecnologías más importantes para el desarrollo web, tanto del lado del cliente como del servidor. Por último, se explorarán los conceptos básicos de una arquitectura orientada a servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de control de versiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de control de versiones - Git',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comandos básicos de Git',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Git en entornos remotos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plataformas para implementar integración continua – Gitlab',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF19_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comandos básicos de Git',
      referencia:
        'Fazt. (2014). Git y Github – Curso práctico de Git y Github desde cero. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/HiXLkL42tMU',
    },
    {
      tema: 'Comandos básicos de Git',
      referencia: 'GIT. (s.f.). Git - Download for Windows.',
      tipo: 'Software',
      link: 'http://Git-scm.com/download/win ',
    },
  ],
  glosario: [
    {
      termino: 'BitBucket',
      significado:
        'servicio de alojamiento basado en web para proyectos que utilizan Mercurial y Git.',
    },
    {
      termino: 'Comandos básicos de Git',
      significado:
        'comandos como <b>git init</b>, <b>git clone</b>, <b>git add</b>, <b>git commit</b>, <b>git push</b> para gestionar repositorios. ',
    },
    {
      termino: '<em>DevOps</em>',
      significado:
        'metodología de desarrollo de software que integra el desarrollo (Dev) y las operaciones (Ops) para mejorar la colaboración y productividad mediante la automatización de procesos y la entrega continua de <em>software</em>.',
    },
    {
      termino: 'Git',
      significado:
        'sistema de control de versiones distribuido que permite trabajar sin conexión y garantiza la integridad de datos.',
    },
    {
      termino: 'GitHub',
      significado:
        'plataforma para alojar código de aplicaciones y colaborar en proyectos. ',
    },
    {
      termino: 'GitLab',
      significado:
        'plataforma web que permite el control de versiones y desarrollo colaborativo basado en Git. ',
    },
    {
      termino: 'Hospedaje de proyectos',
      significado:
        'proceso de alojar proyectos en repositorios remotos accesibles por internet. ',
    },
    {
      termino: 'Integración continua',
      significado:
        'práctica de <em>DevOps</em> que asegura la disponibilidad de un espacio compartido y gestión unificada del trabajo. ',
    },
    {
      termino: 'Repositorios',
      significado:
        'espacios donde se agrupan archivos y se administran metadatos relacionados con los cambios realizados. ',
    },
    {
      termino: 'Sistemas de control de versiones',
      significado:
        'sistemas que registran los cambios en archivos a lo largo del tiempo, permitiendo su recuperación. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Atlassian. (s.f.). <em>Qué es el control de versiones | Atlassian Git Tutorial</em>.',
      link:
        'https://www.atlassian.com/es/git/tutorials/what-is-version-control',
    },
    {
      referencia:
        'Git. (2021) <em>Git - Acerca del control de versiones</em>. Git --Local-Branching-on-the-Cheap.',
      link:
        'https://Git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones ',
    },
    {
      referencia:
        'Younes. (2021).<em>Gitlab VS Github VS BitBucket. Which one deserve your time</em>? DEV Community.',
      link:
        'https://dev.to/yafkari/gitlab-vs-github-vs-bitbucket-which-one-deserve-your-time-2npm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa ',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez ',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
