import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: '#hero',       label: lang === 'es' ? 'Inicio' : 'Home' },
    { href: '#about',      label: t.navbar.about },
    { href: '#projects',   label: t.navbar.projects },
    { href: '#experience', label: t.navbar.experience },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-pill">
        <a href="#" className="navbar-logo">
          <span className="grad-text">JHR</span>
        </a>

        <div className="navbar-links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta">{t.navbar.contact}</a>
        </div>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <nav className="navbar-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>{t.navbar.contact}</a>
        </nav>
      )}
    </div>
  );
}
