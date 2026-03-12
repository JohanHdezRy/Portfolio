import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import task from '../imgs/task.png'
import invetario from '../imgs/inventario.png'
import hotel from '../imgs/hotel.png'
import gifs from '../imgs/gifs.png'
import { ParticleCard, GlobalSpotlight } from '../effects/MagicBento';

const projects = [
  {
    name: 'Task Manager',
    desc: 'Aplicación de gestión de tareas con categorías personalizables, filtros, prioridades y ordenamiento. Interfaz oscura con diseño moderno.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    demo: 'https://johanhdezry.github.io/Task-Manager/',
    repo: 'https://github.com/JohanHdezRy/Task-Manager',
    img: task,
  },
  {
    name: 'Inventory System',
    desc: 'Sistema de inventario con CRUD de productos, carga de imágenes, estadísticas en tiempo real y módulo de ventas con alertas de stock.',
    tags: ['React', 'TypeScript', 'LocalStorage'],
    demo: 'https://johanhdezry.github.io/Inventory-System/',
    repo: 'https://github.com/JohanHdezRy/Inventory-System',
    img: invetario,
  },
  {
    name: 'GIF Finder',
    desc: 'Buscador de GIFs integrado con la API de Giphy. Búsqueda con debounce, historial de búsquedas recientes y grid tipo masonry.',
    tags: ['React', 'TypeScript', 'Axios', 'Giphy API'],
    demo: 'https://johanhdezry.github.io/Gifs-Search/',
    repo: 'https://github.com/JohanHdezRy/Gifs-Search',
    img: gifs,
  },
  {
    name: 'Hotel-Demos-Web',
    desc: 'Una colección de 7 páginas de destino de hoteles de lujo creadas como demostraciones de interfaz, cada una con una identidad visual única, un sistema de diseño personalizado y animaciones fluidas.',
    tags: ['React', 'TypeScript', 'Axios'],
    demo: 'https://johanhdezry.github.io/Hotel-Demos-Web/',
    repo: 'https://github.com/JohanHdezRy/Hotel-Demos-Web.git',
    img: hotel,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" ref={ref}>
      <GlobalSpotlight gridRef={gridRef} glowColor="124, 58, 237" spotlightRadius={320} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Lo que he construido</h2>
        </motion.div>

        <div className="projects-grid bento-section" ref={gridRef}>
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <ParticleCard
                className="project-card magic-bento-card magic-bento-card--border-glow"
                glowColor="124, 58, 237"
                enableTilt={false}
                clickEffect={true}
                particleCount={10}
              >
                <div className="project-img">
                  {p.img
                    ? <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div className="project-img-placeholder">
                        <Layers size={28} />
                        <span>{p.name}</span>
                      </div>
                  }
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-links">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={13} /> Demo
                    </a>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={13} /> Código
                    </a>
                  </div>
                </div>
              </ParticleCard>
            </motion.div>
          ))}

          {/* Academic project — blank */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ParticleCard
              className="project-card blank magic-bento-card magic-bento-card--border-glow"
              glowColor="124, 58, 237"
              clickEffect={true}
              particleCount={6}
            >
              <div className="blank-card-content">
                <Layers size={32} />
                <p>Proyecto académico</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Próximamente</p>
              </div>
            </ParticleCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
