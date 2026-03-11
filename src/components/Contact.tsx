import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const links = [
  {
    icon: <Mail size={18} />,
    iconClass: 'icon-blue',
    label: 'Email',
    value: 'JohanHdezRy@gmail.com',
    href: 'mailto:JohanHdezRy@gmail.com',
  },
  {
    icon: <Github size={18} />,
    iconClass: 'icon-purple',
    label: 'GitHub',
    value: 'JohanHdezRy',
    href: 'https://github.com/JohanHdezRy',
  },
  {
    icon: <Linkedin size={18} />,
    iconClass: 'icon-cyan',
    label: 'LinkedIn',
    value: 'JohanHdezRy',
    href: 'https://linkedin.com/in/JohanHdezRy',
  },
  {
    icon: <Phone size={18} />,
    iconClass: 'icon-green',
    label: 'Teléfono',
    value: '+52 987 304 5620',
    href: 'tel:+529873045620',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section contact-bg" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contacto</p>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="contact-sub">
            Estoy abierto a nuevas oportunidades, colaboraciones o simplemente
            intercambiar ideas sobre desarrollo. ¡No dudes en escribirme!
          </p>

          <div className="contact-links">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-link"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <div className={`icon ${l.iconClass}`}>{l.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 500 }}>{l.label}</div>
                  <div style={{ fontSize: '0.88rem' }}>{l.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
