import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Cloud, Network, Wrench } from 'lucide-react';

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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section skills-bg" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Habilidades</p>
          <h2 className="section-title">Tecnologías y herramientas</h2>
        </motion.div>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <div className="skill-group-header">
                <div className={`skill-group-icon ${g.iconClass}`}>{g.icon}</div>
                <span className="skill-group-name">{g.name}</span>
              </div>
              <div className="skill-tags">
                {g.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
