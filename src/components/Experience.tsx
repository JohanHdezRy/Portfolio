import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const items = [
  {
    title: 'Sistema de seguimiento y evaluación de egresados',
    org: 'Proyecto académico · TecNM ITSFCP',
    period: '2024',
    desc: 'Desarrollé una aplicación para el seguimiento, evaluación y mejora continua de egresados, permitiendo recopilar y analizar datos sobre su trayectoria profesional post-egreso. [Puedes editar este texto con más detalles del proyecto]',
  },
  {
    title: 'Solver de métodos numéricos',
    org: 'Proyecto académico · TecNM ITSFCP',
    period: '2023',
    desc: 'Implementé una herramienta de resolución numérica que incluye algoritmos como bisección, Newton-Raphson y Runge-Kutta, con visualización de resultados paso a paso. [Puedes editar este texto con más detalles]',
  },
  {
    title: 'Redes neuronales artificiales de segunda generación',
    org: 'Proyecto de investigación · TecNM ITSFCP',
    period: '2024',
    desc: 'Diseñé e implementé redes neuronales artificiales de segunda generación (spiking neural networks) como proyecto de investigación aplicada, explorando modelos bio-inspirados. [Puedes editar este texto con más detalles]',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section exp-bg" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experiencia</p>
          <h2 className="section-title">Proyectos y desarrollo</h2>
        </motion.div>

        <div className="timeline">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="timeline-dot">
                <Briefcase size={14} color="#fff" />
              </div>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <div className="timeline-meta">
                  <span>{item.org}</span>
                  <span className="timeline-dot-sep" />
                  <span>{item.period}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
