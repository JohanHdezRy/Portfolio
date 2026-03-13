export type Lang = 'es' | 'en';

export interface Translations {
  navbar: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    available: string;
    title: string;
    viewProjects: string;
  };
  about: {
    label: string;
    heading: string;
    status: string;
    contactText: string;
    bio1: string;
    bio2: string;
    softSkills: readonly string[];
  };
  bento: {
    label: string;
    heading: string;
    cards: {
      skills:     { label: string; title: string; subtitle: string };
      projects:   { label: string; title: string; subtitle: string };
      experience: { label: string; title: string; subtitle: string };
      education:  { label: string; title: string; subtitle: string };
    };
    close: string;
  };
  skills: {
    label: string;
    heading: string;
    groups: { networks: string; tools: string };
  };
  projects: {
    label: string;
    heading: string;
    code: string;
    newProject: string;
    comingSoon: string;
    items: readonly { desc: string }[];
  };
  experience: {
    label: string;
    heading: string;
    items: readonly { title: string; org: string; period: string; desc: string }[];
  };
  education: {
    label: string;
    heading: string;
    degree: string;
    school: string;
  };
  contact: {
    label: string;
    heading: string;
    sub: string;
    phone: string;
  };
  footer: {
    builtBy: string;
  };
}

export const translations: Record<Lang, Translations> = {
  es: {
    navbar: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      available: 'Disponible para nuevas oportunidades',
      title: 'Ing. en Sistemas Computacionales · Desarrollador Frontend con enfoque en React y TypeScript.',
      viewProjects: 'Ver proyectos',
    },
    about: {
      label: 'Sobre mí',
      heading: '¿Quién soy?',
      status: 'Disponible',
      contactText: 'Contactar',
      bio1: 'Soy Ingeniero en Sistemas Computacionales egresado del TecNM — Instituto Tecnológico Superior de Felipe Carrillo Puerto. Como ing. sistemas he optado por la rama de desarrollo; actualmente me he certificado en React, pero quiero seguir aprendiendo nuevos frameworks, lenguajes y tecnologías que me permitan crear soluciones más robustas y modernas.',
      bio2: 'Me apasiona construir interfaces de usuario funcionales y bien diseñadas, trabajar con buenas prácticas y seguir creciendo como desarrollador full-stack.',
      softSkills: ['Proactividad', 'Trabajo en equipo', 'Ganas de aprender', 'Responsabilidad', 'Adaptabilidad', 'Inglés C1'],
    },
    bento: {
      label: 'Portfolio',
      heading: 'Explora mi trabajo',
      cards: {
        skills:     { label: 'Habilidades', title: 'Tecnologías y herramientas', subtitle: '5 áreas · 18+ tecnologías' },
        projects:   { label: 'Proyectos',   title: 'Lo que he construido',       subtitle: '4 proyectos destacados' },
        experience: { label: 'Experiencia', title: 'Proyectos y desarrollo',     subtitle: '3 proyectos académicos' },
        education:  { label: 'Educación',   title: 'Ingeniería en Sistemas',     subtitle: 'TecNM · 2022 – 2026' },
      },
      close: 'Cerrar',
    },
    skills: {
      label: 'Habilidades',
      heading: 'Tecnologías y herramientas',
      groups: { networks: 'Redes', tools: 'Herramientas' },
    },
    projects: {
      label: 'Proyectos',
      heading: 'Lo que he construido',
      code: 'Código',
      newProject: 'Proyecto Nuevo',
      comingSoon: 'Próximamente',
      items: [
        { desc: 'Aplicación de gestión de tareas con categorías personalizables, filtros, prioridades y ordenamiento. Interfaz oscura con diseño moderno.' },
        { desc: 'Sistema de inventario con CRUD de productos, carga de imágenes, estadísticas en tiempo real y módulo de ventas con alertas de stock.' },
        { desc: 'Buscador de GIFs integrado con la API de Giphy. Búsqueda con debounce, historial de búsquedas recientes y grid tipo masonry.' },
        { desc: 'Una colección de 7 páginas de destino de hoteles de lujo creadas como demostraciones de interfaz, cada una con una identidad visual única, un sistema de diseño personalizado y animaciones fluidas.' },
      ],
    },
    experience: {
      label: 'Experiencia',
      heading: 'Proyectos y desarrollo',
      items: [
        {
          title: 'Sistema de seguimiento y evaluación de egresados',
          org: 'Proyecto académico · TecNM FCP',
          period: '2024',
          desc: 'Desarrollé una aplicación para el seguimiento, evaluación y mejora continua de egresados, permitiendo recopilar y analizar datos sobre su trayectoria profesional post-egreso.',
        },
        {
          title: 'Solver de métodos numéricos',
          org: 'Proyecto académico · TecNM FCP',
          period: '2023',
          desc: 'Implementé una herramienta de resolución numérica que incluye algoritmos como bisección, Newton-Raphson y Runge-Kutta, con visualización de resultados paso a paso. Proyecto trabajado enteramente en Java.',
        },
        {
          title: 'Redes neuronales artificiales de segunda generación',
          org: 'Proyecto de investigación · CENIDET',
          period: '2024',
          desc: 'Diseñé e implementé redes neuronales artificiales de segunda generación (spiking neural networks) como proyecto de investigación aplicada, explorando modelos bio-inspirados. Proyecto trabajado en Matlab.',
        },
      ],
    },
    education: {
      label: 'Educación',
      heading: 'Formación académica',
      degree: 'Ingeniería en Sistemas Computacionales',
      school: 'TecNM — Instituto Tecnológico Superior de Felipe Carrillo Puerto',
    },
    contact: {
      label: 'Contacto',
      heading: '¿Hablamos?',
      sub: 'Estoy abierto a nuevas oportunidades, colaboraciones o simplemente intercambiar ideas sobre desarrollo. ¡No dudes en escribirme!',
      phone: 'Teléfono',
    },
    footer: {
      builtBy: 'Diseñado y construido por',
    },
  },
  en: {
    navbar: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for new opportunities',
      title: 'Computer Systems Engineer · Frontend Developer focused on React and TypeScript.',
      viewProjects: 'View projects',
    },
    about: {
      label: 'About me',
      heading: 'Who am I?',
      status: 'Available',
      contactText: 'Contact',
      bio1: "I am a Computer Systems Engineer graduated from TecNM — Instituto Tecnológico Superior de Felipe Carrillo Puerto. As a systems engineer I chose the development path; I am currently certified in React, but I want to keep learning new frameworks, languages, and technologies that allow me to build more robust and modern solutions.",
      bio2: 'I am passionate about building functional and well-designed user interfaces, following best practices, and continuing to grow as a full-stack developer.',
      softSkills: ['Proactivity', 'Teamwork', 'Eagerness to learn', 'Responsibility', 'Adaptability', 'English C1'],
    },
    bento: {
      label: 'Portfolio',
      heading: 'Explore my work',
      cards: {
        skills:     { label: 'Skills',     title: 'Technologies & tools',   subtitle: '5 areas · 18+ technologies' },
        projects:   { label: 'Projects',   title: "What I've built",        subtitle: '4 featured projects' },
        experience: { label: 'Experience', title: 'Projects & development', subtitle: '3 academic projects' },
        education:  { label: 'Education',  title: 'Systems Engineering',    subtitle: 'TecNM · 2022 – 2026' },
      },
      close: 'Close',
    },
    skills: {
      label: 'Skills',
      heading: 'Technologies and tools',
      groups: { networks: 'Networks', tools: 'Tools' },
    },
    projects: {
      label: 'Projects',
      heading: "What I've built",
      code: 'Code',
      newProject: 'New Project',
      comingSoon: 'Coming soon',
      items: [
        { desc: 'Task management app with customizable categories, filters, priorities, and sorting. Dark interface with modern design.' },
        { desc: 'Inventory system with product CRUD, image upload, real-time statistics, and a sales module with stock alerts.' },
        { desc: 'GIF search app integrated with the Giphy API. Debounced search, recent search history, and masonry-style grid.' },
        { desc: 'A collection of 7 luxury hotel landing pages built as UI demos, each with a unique visual identity, custom design system, and smooth animations.' },
      ],
    },
    experience: {
      label: 'Experience',
      heading: 'Projects & development',
      items: [
        {
          title: 'Graduate tracking and evaluation system',
          org: 'Academic project · TecNM FCP',
          period: '2024',
          desc: 'Developed an application for tracking, evaluation, and continuous improvement of graduates, enabling collection and analysis of data about their post-graduation career paths.',
        },
        {
          title: 'Numerical methods solver',
          org: 'Academic project · TecNM FCP',
          period: '2023',
          desc: 'Implemented a numerical solving tool including algorithms such as bisection, Newton-Raphson, and Runge-Kutta, with step-by-step result visualization. Project built entirely in Java.',
        },
        {
          title: 'Second-generation artificial neural networks',
          org: 'Research project · CENIDET',
          period: '2024',
          desc: 'Designed and implemented second-generation artificial neural networks (spiking neural networks) as an applied research project, exploring bio-inspired models. Project built in Matlab.',
        },
      ],
    },
    education: {
      label: 'Education',
      heading: 'Academic background',
      degree: 'Computer Systems Engineering',
      school: 'TecNM — Instituto Tecnológico Superior de Felipe Carrillo Puerto',
    },
    contact: {
      label: 'Contact',
      heading: "Let's talk?",
      sub: "I'm open to new opportunities, collaborations, or simply exchanging ideas about development. Don't hesitate to reach out!",
      phone: 'Phone',
    },
    footer: {
      builtBy: 'Designed and built by',
    },
  },
};
