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
    role1: string;
    role2: string;
    typingTexts: readonly string[];
    description: string;
    techTags: readonly string[];
    contactBtn: string;
    viewProjects: string;
    title: string;
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
      skills: { label: string; title: string; subtitle: string };
      projects: { label: string; title: string; subtitle: string };
      experience: { label: string; title: string; subtitle: string };
      education: { label: string; title: string; subtitle: string };
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
    items: readonly { title: string; org: string; period: string; desc: readonly string[] }[];
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
      role1: 'Ing. en Sistemas',
      role2: 'Computacionales',
      typingTexts: ['Entusiasta de la tecnología', 'Desarrollador Full-Stack', 'Diseñador de experiencias'],
      description: 'Construyo interfaces limpias, escalables y de alto rendimiento que impresionan.',
      techTags: ['React', 'TypeScript', 'Node.js', 'CCNA'],
      contactBtn: 'Contacto',
      viewProjects: 'Ver proyectos',
      title: 'Ing. en Sistemas Computacionales · Desarrollador full-stack con fuerte enfoque en frontend moderno.',
    },
    about: {
      label: 'Sobre mí',
      heading: '¿Quién soy?',
      status: 'Disponible',
      contactText: 'Contactar',
      bio1: 'Desarrollador full-stack con fuerte enfoque en frontend moderno, apasionado por construir interfaces limpias y de alto rendimiento. Aprendo nuevas tecnologías rápidamente: desde configurar infraestructura de red Cisco hasta desarrollar aplicaciones web full-stack con React y Node.js.',
      bio2: 'Escribo código TypeScript-first, me preocupo por la arquitectura y me desenvuelvo mejor en entornos donde puedo tomar iniciativa, aprender de ingenieros senior y avanzar hacia calidad de producción.',
      softSkills: ['Proactividad', 'Trabajo en equipo', 'Ganas de aprender', 'Responsabilidad', 'Adaptabilidad', 'Inglés C1'],
    },
    bento: {
      label: 'Portfolio',
      heading: 'Explora mi trabajo',
      cards: {
        skills: { label: 'Habilidades', title: 'Tecnologías y herramientas', subtitle: '5 áreas · 18+ tecnologías' },
        projects: { label: 'Proyectos', title: 'Lo que he construido', subtitle: '4 proyectos destacados' },
        experience: { label: 'Experiencia', title: 'Experiencia profesional', subtitle: '2 posiciones' },
        education: { label: 'Educación', title: 'Ingeniería en Sistemas', subtitle: 'TecNM · 2021 – 2025' },
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
        { desc: 'Gestor de tareas con filtrado multi-eje: por categoría, importancia, estado, rango de fechas y búsqueda por palabra clave. Estado dividido en dos stores de Zustand (taskStore / filterStore), con la lógica de filtrado encapsulada en un hook personalizado useFilteredTasks.' },
        { desc: 'Aplicación dual de inventario y punto de venta. El modo inventario soporta CRUD completo con filtros por categoría, alertas de bajo stock y dashboard de estadísticas en vivo. El modo TPV gestiona un carrito de compras con procesamiento de ventas en tiempo real.' },
        { desc: 'Buscador de GIFs integrado con la API de Giphy. Búsqueda con debounce, historial de búsquedas recientes y grid tipo masonry.' },
        { desc: 'Siete páginas de destino de hoteles de lujo, cada una con un sistema de diseño único construido íntegramente en CSS — sin frameworks de UI. Animaciones personalizadas con scroll: revelaciones palabra a palabra con blur, 5 variantes de transición y efecto glare CSS en hover. Desplegado automáticamente con GitHub Actions.' },
      ],
    },
    experience: {
      label: 'Experiencia',
      heading: 'Experiencia profesional',
      items: [
        {
          title: 'Backend Software Engineering',
          org: 'CENIDET · Cuernavaca, Morelos',
          period: 'Jul 2025 – Nov 2025',
          desc: [
            'Desarrollé y mantuve servicios backend con Node.js y MySQL.',
            'Asistí en el diseño e implementación de APIs y lógica de negocio del lado del servidor.',
            'Colaboré con el equipo de investigación durante todo el ciclo de desarrollo de software.',
          ],
        },
        {
          title: 'Network Infrastructure Engineer',
          org: 'UNID Campus Cozumel · Cozumel, Quintana Roo',
          period: 'Ene 2025 – Jun 2025',
          desc: [
            'Diseñé y desplegué una red de servidores para soportar eventos académicos competitivos.',
            'Configuré switches y routers Cisco para garantizar conectividad fiable bajo alta demanda.',
            'Gestioné el despliegue de red de extremo a extremo, desde la planificación hasta la operación en vivo.',
          ],
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
      role1: 'Computer Systems',
      role2: 'Engineer',
      typingTexts: ['Tech Enthusiast', 'Full-Stack Developer', 'Experience Designer'],
      description: 'Building smooth, scalable, and high-performance interfaces that impress.',
      techTags: ['React', 'TypeScript', 'Node.js', 'CCNA'],
      contactBtn: 'Contact',
      viewProjects: 'View projects',
      title: 'Computer Systems Engineer · Full-stack developer with a strong focus on modern frontend.',
    },
    about: {
      label: 'About me',
      heading: 'Who am I?',
      status: 'Available',
      contactText: 'Contact',
      bio1: 'Software engineer with a full-stack background, focused on building reliable, scalable, and well-structured systems. I have experience developing modern web applications with React, Node.js, and .NET, along with a solid foundation in networking (CCNA) and system-level thinking. I am particularly interested in the broader scope of software engineering, including backend architecture, infrastructure, and distributed systems. I enjoy understanding how systems operate end-to-end, from user interfaces to servers, networks, and deployment pipelines.',
      bio2: 'I write TypeScript-first code, prioritize clean architecture, and continuously expand my skill set toward cloud, DevOps, and system reliability. I perform best in environments where I can learn and collaborate with experienced engineers, and contribute to production-grade systems.',
      softSkills: ['Proactivity', 'Teamwork', 'Eagerness to learn', 'Responsibility', 'Adaptability', 'English C1'],
    },
    bento: {
      label: 'Portfolio',
      heading: 'Explore my work',
      cards: {
        skills: { label: 'Skills', title: 'Technologies & tools', subtitle: '5 areas · 18+ technologies' },
        projects: { label: 'Projects', title: "What I've built", subtitle: '4 featured projects' },
        experience: { label: 'Experience', title: 'Professional Experience', subtitle: '2 positions' },
        education: { label: 'Education', title: 'Systems Engineering', subtitle: 'TecNM · 2021 – 2025' },
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
        { desc: 'Feature-rich task manager with multi-axis filtering: by category, importance, status, due date range, and keyword search. State split across two Zustand stores (taskStore / filterStore), with filter logic encapsulated in a custom useFilteredTasks hook.' },
        { desc: 'Dual-mode inventory and point-of-sale application. Inventory mode supports full CRUD with category filters, low-stock alerts, and a live stats dashboard. POS mode handles a shopping cart with real-time sale processing. Built with a custom Zustand-like store using React hooks.' },
        { desc: 'GIF search app integrated with the Giphy API. Debounced search, recent search history, and masonry-style grid.' },
        { desc: 'Seven luxury hotel landing pages, each with a unique design system built entirely in CSS — no UI frameworks. Features custom scroll-triggered animations: word-by-word blur reveals, 5-variant entrance transitions, and a CSS glare hover effect. Deployed via GitHub Actions.' },
      ],
    },
    experience: {
      label: 'Experience',
      heading: 'Professional experience',
      items: [
        {
          title: 'Backend Software Engineering',
          org: 'CENIDET · Cuernavaca, Morelos',
          period: 'Jul 2025 – Nov 2025',
          desc: [
            'Developed and maintained backend services using Node.js and MySQL.',
            'Assisted in the design and implementation of APIs and server-side business logic.',
            'Collaborated with the research team throughout the software development lifecycle.',
          ],
        },
        {
          title: 'Network Infrastructure Engineer',
          org: 'UNID Campus Cozumel · Cozumel, Quintana Roo',
          period: 'Jan 2025 – Jun 2025',
          desc: [
            'Designed and deployed a server network to support competitive academic events.',
            'Configured Cisco switches and routers to ensure reliable connectivity under high-demand conditions.',
            'Managed end-to-end network setup, from planning to live event operation.',
          ],
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
