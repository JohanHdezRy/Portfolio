import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-tag">
              <span />
              Disponible para nuevas oportunidades
            </div>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Johan B.<br />
            <span className="grad-text">Hernandez Raya</span>
          </motion.h1>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ing. en Sistemas Computacionales · Desarrollador Frontend
            con enfoque en React y TypeScript. Inglés C1 · Bachilleres, Q.R.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">Ver proyectos</a>
            <a
              href="https://github.com/JohanHdezRy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/JohanHdezRy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
