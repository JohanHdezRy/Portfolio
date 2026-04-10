import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ChromaGrid from '../effects/ChromaGrid';
import { useLanguage } from '../context/LanguageContext';

import hotelImg    from '../imgs/hotel.png';
import taskImg     from '../imgs/task.png';
import webDemosImg from '../imgs/handsome.png';
import gifsImg     from '../imgs/gifs.png';

const projects = [
  {
    image: hotelImg,
    title: 'Hotel Demos Web',
    handle: 'React · TypeScript · CSS · Framer Motion',
    subtitle: '7 luxury hotel landing pages, each with a unique design system and custom scroll animations. Deployed via GitHub Actions.',
    borderColor: '#7c3aed',
    gradient: 'linear-gradient(150deg, #1a0a2e 0%, #050508 60%)',
    github: 'https://github.com/JohanHdezRy/Hotel-Demos-Web',
    demo:   'https://johanhdezry.github.io/Hotel-Demos-Web/',
  },
  {
    image: taskImg,
    title: 'Task Manager',
    handle: 'React · TypeScript · Tailwind · Zustand',
    subtitle: 'Feature-rich task manager with multi-axis filtering by category, importance, status, and date range. Custom Zustand stores and useFilteredTasks hook.',
    borderColor: '#4f7ef8',
    gradient: 'linear-gradient(150deg, #081a3a 0%, #050508 60%)',
    github: 'https://github.com/JohanHdezRy/Task-Manager',
    demo:   'https://johanhdezry.github.io/Task-Manager/',
  },
  {
    image: webDemosImg,
    title: 'WEB Demos',
    handle: 'React · TypeScript · GSAP · WebGL · ogl',
    subtitle: '6 production-quality demos: restaurant, e-commerce, creative agency, real estate and more. WebGL particle backgrounds and spring animations.',
    borderColor: '#06b6d4',
    gradient: 'linear-gradient(150deg, #051a1f 0%, #050508 60%)',
    github: 'https://github.com/JohanHdezRy/WEB-Demos',
    demo:   'https://johanhdezry.github.io/WEB-Demos/',
  },
  {
    image: gifsImg,
    title: 'Gifs Search',
    handle: 'React · TypeScript · Giphy API · CSS',
    subtitle: 'GIF search app with Giphy API integration, debounced search, recent search history, and masonry-style grid.',
    borderColor: '#f59e0b',
    gradient: 'linear-gradient(150deg, #1f1200 0%, #050508 60%)',
    github: 'https://github.com/JohanHdezRy/Gifs-Search',
    demo:   'https://johanhdezry.github.io/Gifs-Search/',
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p className="section-label">{t.projects.label}</p>
          <h2 className="section-title">{t.projects.heading}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ChromaGrid items={projects} columns={2} radius={380} />
        </motion.div>
      </div>
    </section>
  );
}
