import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Educación</p>
          <h2 className="section-title">Formación académica</h2>
        </motion.div>

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="edu-icon">
            <GraduationCap size={24} />
          </div>
          <div className="edu-info">
            <h3>Ingeniería en Sistemas Computacionales</h3>
            <p className="edu-school">TecNM — Instituto Tecnológico Superior de Felipe Carrillo Puerto</p>
            <span className="edu-period">2022 – 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
