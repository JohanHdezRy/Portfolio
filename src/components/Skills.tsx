import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Cloud, Network, Wrench } from 'lucide-react';
import { ParticleCard, GlobalSpotlight } from '../effects/MagicBento';

const groups = [
  {
    icon: <Code2 size={18} />,
    iconClass: 'icon-blue',
    name: 'Frontend',
    tags: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'],
  },
  {
    icon: <Server size={18} />,
    iconClass: 'icon-purple',
    name: 'Backend & BD',
    tags: ['Java', 'C++', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: <Cloud size={18} />,
    iconClass: 'icon-cyan',
    name: 'DevOps / Cloud',
    tags: ['Docker', 'Terraform', 'GitHub', 'GitLab CI/CD'],
  },
  {
    icon: <Network size={18} />,
    iconClass: 'icon-green',
    name: 'Redes',
    tags: ['CCNA', 'CCNP'],
  },
  {
    icon: <Wrench size={18} />,
    iconClass: 'icon-orange',
    name: 'Herramientas',
    tags: ['Figma', 'XAMPP', 'Visual Studio', 'Git'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section skills-bg" ref={ref}>
      <GlobalSpotlight gridRef={gridRef} glowColor="79, 126, 248" spotlightRadius={280} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Habilidades</p>
          <h2 className="section-title">Tecnologías y herramientas</h2>
        </motion.div>

        <div className="skills-grid bento-section" ref={gridRef}>
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <ParticleCard
                className="skill-group magic-bento-card magic-bento-card--border-glow"
                glowColor="79, 126, 248"
                enableTilt={true}
                clickEffect={true}
                particleCount={8}
              >
                <div className="skill-group-header">
                  <div className={`skill-group-icon ${g.iconClass}`}>{g.icon}</div>
                  <span className="skill-group-name">{g.name}</span>
                </div>
                <div className="skill-tags">
                  {g.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </ParticleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
