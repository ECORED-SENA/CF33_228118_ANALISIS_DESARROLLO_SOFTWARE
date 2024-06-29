export default {
  global: {
    componenteFormativo:
      'Actividades de documentación y entrega de <i>software</i> en procesos de implantación',
    descripcionCurso:
      'Una de las partes fundamentales en la etapa de implantación de <i>software</i>, son los documentos que acompañan y dan soporte a este proceso, como son: los manuales de usuario, instalación, actas de entrega y otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: 'Documentación de procesos de implantación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Manuales técnicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manuales de usuario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manuales de instalación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Capacitación de usuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Plan de capacitación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Videotutoriales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Pruebas y actas de entrega',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mantenimiento de <i>software</i>',
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
        download: 'downloads/228118_CF33_DU.pdf',
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
      tema: 'Manuales de instalación',
      referencia:
        'Microsoft. (2021). <i>Consulta las especificaciones, características y requisitos del sistema de Windows 11.</i>',
      tipo: 'Artículo',
      link:
        'https://www.microsoft.com/es-ar/windows/windows-11-specifications?r=1',
    },
  ],
  glosario: [
    {
      termino: '<i>Firmware</i>',
      significado:
        'conjunto de instrucciones de un programa informático que se encuentra registrado en una memoria ROM, <i>flash</i> o similar. Estas instrucciones fijan la lógica primaria que ejerce el control de los circuitos de alguna clase de artefacto.',
    },
    {
      termino: 'RAM',
      significado:
        'es la memoria de corto plazo del computador. Su función principal es recordar la información que se tiene en cada una de las aplicaciones abiertas en el computador, mientras este se encuentre encendido. Cuanta más memoria RAM tenga el computador, más cosas se pueden hacer al mismo tiempo.',
    },
    {
      termino: 'Tarjeta gráfica',
      significado:
        'la tarjeta gráfica o tarjeta de video, es un componente que viene integrado en la placa base del PC o se instala aparte para ampliar sus capacidades. Concretamente, esta tarjeta está dedicada al procesamiento de datos relacionados con el video y las imágenes que se están reproduciendo en el ordenador.',
    },
    {
      termino: 'TPM',
      significado:
        'tiene como propósito en las acciones cotidianas que los equipos operen sin averías y fallos, eliminar toda clase de pérdidas, mejorar la fiabilidad de los equipos y emplear verdaderamente la capacidad industrial instalada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bichachi, D. S. (2004). El uso de las listas de chequeo (CHEK-LIST) como herramienta para controlar la calidad de las leyes.',
      link: 'https://www.claudiabernazza.com.ar/ssgp/html/pdf/check_list.pdf',
    },
    {
      referencia:
        'Edgepoint Learning. (2020). <i>How To Train Employees On a New System Or Technology: 5 Tips</i>.',
      link:
        'https://www.edgepointlearning.com/blog/how-to-train-employees-on-new-system/',
    },
    {
      referencia:
        'Ministerio TIC Colombia. (2018). G.SIS.03 Guía para la construcción del catálogo de Sistemas de Información.',
    },
    {
      referencia:
        'Ruiz, F. & Polo, M. (2007). Mantenimiento del <i>Software</i>. Grupo Alarcos, Departamento de Informática de la Universidad de Castilla-La Mancha.',
    },
    {
      referencia:
        'Ugur, A. (2009). <i>How to Write a Software Installation Guide</i>.',
      link:
        'https://www.technicalcommunicationcenter.com/online-classes/how-to-write-a-software-installation-guide/',
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
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Fernando Meneses Calvache',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
