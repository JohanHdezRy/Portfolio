import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

const softSkills = [
  'Proactividad', 'Trabajo en equipo', 'Ganas de aprender',
  'Responsabilidad', 'Adaptabilidad', 'Inglés C1',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Sobre mí</p>
          <h2 className="section-title">¿Quién soy?</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Reemplaza con: <img src="/assets/photo.jpg" alt="Johan" className="about-photo" /> */}
            <div className="photo-placeholder">
              <User size={40} />
              <span>Tu foto aquí</span>
            </div>
            <div className="about-glow" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Johan B. Hernandez Raya</h3>
            <p>
              Soy Ingeniero en Sistemas Computacionales egresado del TecNM — Instituto
              Tecnológico Superior de Felipe Carrillo Puerto. Como ing. sistemas he optado
              por la rama de desarrollo; actualmente me he certificado en React, pero quiero
              seguir aprendiendo nuevos frameworks, lenguajes y tecnologías que me permitan
              crear soluciones más robustas y modernas.
            </p>
            <p>
              Me apasiona construir interfaces de usuario funcionales y bien diseñadas,
              trabajar con buenas prácticas y seguir creciendo como desarrollador full-stack.
            </p>
            <div className="about-chips">
              {softSkills.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
