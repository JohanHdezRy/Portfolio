import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    name: 'Task Manager',
    desc: 'Aplicación de gestión de tareas con categorías personalizables, filtros, prioridades y ordenamiento. Interfaz oscura con diseño moderno.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    demo: 'https://johanhdezry.github.io/Task-Manager/',
    repo: 'https://github.com/JohanHdezRy/Task-Manager',
    img: null,
  },
  {
    name: 'Inventory System',
    desc: 'Sistema de inventario con CRUD de productos, carga de imágenes, estadísticas en tiempo real y módulo de ventas con alertas de stock.',
    tags: ['React', 'TypeScript', 'LocalStorage'],
    demo: 'https://johanhdezry.github.io/Inventory-System/',
    repo: 'https://github.com/JohanHdezRy/Inventory-System',
    img: null,
  },
  {
    name: 'GIF Finder',
    desc: 'Buscador de GIFs integrado con la API de Giphy. Búsqueda con debounce, historial de búsquedas recientes y grid tipo masonry.',
    tags: ['React', 'TypeScript', 'Axios', 'Giphy API'],
    demo: 'https://johanhdezry.github.io/Gifs-Search/',
    repo: 'https://github.com/JohanHdezRy/Gifs-Search',
    img: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Lo que he construido</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="project-card"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="project-img">
                <div className="project-img-placeholder">
                  <Layers size={28} />
                  <span>{p.name}</span>
                </div>
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
            </motion.div>
          ))}

          {/* Academic project — blank */}
          <motion.div
            className="project-card blank"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="blank-card-content">
              <Layers size={32} />
              <p>Proyecto académico</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Próximamente</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
