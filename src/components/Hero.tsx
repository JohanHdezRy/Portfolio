import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import DecryptedText from '../effects/DecryptedText';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

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
              {t.hero.available}
            </div>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DecryptedText
              text="Johan B. Hernandez Raya"
              animateOn="view"
              sequential={true}
              speed={40}
              revealDirection="start"
              className="grad-text"
              encryptedClassName="encrypted-text"
            />
          </motion.h1>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.title}
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">{t.hero.viewProjects}</a>
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
