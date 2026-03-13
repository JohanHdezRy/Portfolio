import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section exp-bg" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.experience.label}</p>
          <h2 className="section-title">{t.experience.heading}</h2>
        </motion.div>

        <div className="timeline">
          {t.experience.items.map((item, i) => (
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
