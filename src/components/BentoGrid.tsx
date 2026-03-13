import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Briefcase, GraduationCap, X } from 'lucide-react';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import { useLanguage } from '../context/LanguageContext';
import './BentoGrid.css';

const MODAL_CONTENT: Record<string, React.ReactNode> = {
  skills: <Skills />,
  projects: <Projects />,
  experience: <Experience />,
  education: <Education />,
};

export default function BentoGrid() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const CARDS = [
    { id: 'skills',     Icon: Code2,        accent: 'var(--blue)',   ...t.bento.cards.skills },
    { id: 'projects',   Icon: Layers,       accent: 'var(--purple)', ...t.bento.cards.projects },
    { id: 'experience', Icon: Briefcase,    accent: 'var(--blue)',   ...t.bento.cards.experience },
    { id: 'education',  Icon: GraduationCap,accent: 'var(--purple)', ...t.bento.cards.education },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = openId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openId]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenId(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <p className="section-label">{t.bento.label}</p>
        <h2 className="section-title">{t.bento.heading}</h2>

        <div className="bento-main-grid">
          {CARDS.map(({ id, label, title, subtitle, Icon, accent }) => (
            <motion.div
              key={id}
              id={id}
              className={`bento-preview-card bento-card-${id}`}
              style={{ visibility: openId === id ? 'hidden' : 'visible' }}
              onClick={() => setOpenId(id)}
              whileHover={{ scale: 1.015, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bento-bg-icon" style={{ color: accent }}>
                <Icon size={180} />
              </div>

              <span className="bento-card-label">{label}</span>

              <div className="bento-card-footer">
                <div className="bento-card-icon" style={{ color: accent }}>
                  <Icon size={15} />
                </div>
                <div>
                  <h3 className="bento-card-title">{title}</h3>
                  <p className="bento-card-sub">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openId && (
          <>
            <motion.div
              className="bento-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpenId(null)}
            />
            <motion.div
              className="bento-modal"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <button
                className="bento-close-btn"
                onClick={() => setOpenId(null)}
                aria-label={t.bento.close}
              >
                <X size={17} />
              </button>
              <div className="bento-modal-scroll">
                {MODAL_CONTENT[openId]}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
