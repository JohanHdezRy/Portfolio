import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import DecryptedText from "../effects/DecryptedText";
import { useLanguage } from "../context/LanguageContext";

function TypingText({ texts }: { texts: readonly string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = texts[textIndex];
    const delay = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, textIndex, texts]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-layout">
          {/* Left: content */}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="hero-name-decrypt">
                <DecryptedText
                  text="Johan B. Hernandez Raya"
                  animateOn="view"
                  sequential={true}
                  speed={40}
                  revealDirection="start"
                  className="grad-text"
                  encryptedClassName="encrypted-text"
                />
              </p>
              <h1 className="hero-role">
                <span className="hero-role-line1">{t.hero.role1}</span>
                <span className="hero-role-line2 grad-text">
                  {t.hero.role2}
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="hero-typing-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <TypingText texts={t.hero.typingTexts} />
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="hero-tech-tags"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {t.hero.techTags.map((tag) => (
                <span key={tag} className="hero-tech-tag">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a href="#projects" className="btn-primary">
                {t.hero.viewProjects} <ExternalLink size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                {t.hero.contactBtn} <Mail size={15} />
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="https://github.com/JohanHdezRy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/JohanHdezRy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Kirby (transparent GIF) */}
          <motion.div
            className="hero-gif-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}kirby.gif`}
              alt="Kirby"
              className="hero-gif"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
