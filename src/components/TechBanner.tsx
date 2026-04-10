import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import LogoLoop from '../effects/LogoLoop';
import { useLanguage } from '../context/LanguageContext';

const carouselTechs = [
  { name: 'React',       slug: 'react',            color: '61DAFB' },
  { name: 'TypeScript',  slug: 'typescript',       color: '3178C6' },
  { name: 'JavaScript',  slug: 'javascript',       color: 'F7DF1E' },
  { name: 'Tailwind',    slug: 'tailwindcss',      color: '06B6D4' },
  { name: 'Vite',        slug: 'vite',             color: '646CFF' },
  { name: 'Node.js',     slug: 'nodedotjs',        color: '339933' },
  { name: '.NET',        slug: 'dotnet',           color: '512BD4' },
  { name: 'PostgreSQL',  slug: 'postgresql',       color: '4169E1' },
  { name: 'Docker',      slug: 'docker',           color: '2496ED' },
  { name: 'GitHub',      slug: 'github',           color: 'ffffff' },
  { name: 'Figma',       slug: 'figma',            color: 'F24E1E' },
  { name: 'VS Code',     slug: 'visualstudiocode', color: '007ACC' },
];

const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    col: 'right',
    skills: [
      { name: 'React',    slug: 'react',       color: '61DAFB' },
      { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4' },
      { name: 'Vite',     slug: 'vite',        color: '646CFF' },
    ],
  },
  {
    id: 'backend',
    title: 'Back-end',
    col: 'right',
    skills: [
      { name: '.NET',       slug: 'dotnet',    color: '512BD4' },
      { name: 'Node.js',    slug: 'nodedotjs', color: '339933' },
      { name: 'Express.js', slug: 'express',   color: 'ffffff' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    col: 'right',
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'MySQL',      slug: 'mysql',      color: '4479A1' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps / Cloud',
    col: 'left',
    skills: [
      { name: 'Docker',     slug: 'docker',  color: '2496ED' },
      { name: 'GitHub',     slug: 'github',  color: 'ffffff' },
      { name: 'GitLab',     slug: 'gitlab',  color: 'FC6D26' },
    ],
  },
  {
    id: 'network',
    title: 'Network',
    col: 'left',
    skills: [
      { name: 'Cisco / CCNA', slug: 'cisco', color: '1BA0D7' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    col: 'left',
    skills: [
      { name: 'VS Code', slug: 'visualstudiocode', color: '007ACC' },
      { name: 'Figma',   slug: 'figma',            color: 'F24E1E' },
      { name: 'Postman', slug: 'postman',           color: 'FF6C37' },
      { name: 'Cursor',  slug: 'cursor',            color: 'ffffff' },
    ],
  },
];

const leftGroups  = skillGroups.filter(g => g.col === 'left');
const rightGroups = skillGroups.filter(g => g.col === 'right');

function SkillItem({ skill, delay }: {
  skill: { name: string; slug: string; color: string };
  delay: number;
}) {
  return (
    <motion.div
      className="bento-skill-item"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
    >
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
        alt={skill.name}
        width={36}
        height={36}
        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <span>{skill.name}</span>
    </motion.div>
  );
}

const carouselLogos = carouselTechs.map(skill => ({
  node: (
    <div className="skills-featured-item">
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
        alt={skill.name}
        width={18}
        height={18}
      />
      <span>{skill.name}</span>
    </div>
  ),
  title: skill.name,
}));

export default function TechBanner() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="skills-section" ref={ref} id="skills">

      {/* Carousel */}
      <div className="skills-carousel-wrap">
        <LogoLoop
          logos={carouselLogos}
          speed={55}
          gap={12}
          logoHeight={40}
          pauseOnHover
          fadeOut
          fadeOutColor="transparent"
        />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p className="section-label">{t.skills.label}</p>
          <h2 className="section-title">{t.skills.heading}</h2>
        </motion.div>

        <div className="skills-bento">

          {/* Left: DevOps, Network, Tools */}
          <div className="skills-bento-col skills-bento-col-left">
            {leftGroups.map((group, gi) => (
              <motion.div
                key={group.id}
                className="bento-card"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
              >
                <h3 className="bento-card-title">{group.title}</h3>
                <div className="bento-skill-grid">
                  {group.skills.map((s, i) => (
                    <SkillItem key={s.name} skill={s} delay={0.15 + gi * 0.1 + i * 0.06} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Frontend, Backend, Database */}
          <div className="skills-bento-col skills-bento-col-right">
            {rightGroups.map((group, gi) => (
              <motion.div
                key={group.id}
                className="bento-card"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + gi * 0.1 }}
              >
                <h3 className="bento-card-title">{group.title}</h3>
                <div className="bento-skill-grid">
                  {group.skills.map((s, i) => (
                    <SkillItem key={s.name} skill={s} delay={0.2 + gi * 0.1 + i * 0.06} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
