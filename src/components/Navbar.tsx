import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about',      label: t.navbar.about },
    { href: '#skills',     label: t.navbar.skills },
    { href: '#projects',   label: t.navbar.projects },
    { href: '#experience', label: t.navbar.experience },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="grad-text">JHR</span>
        </a>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>{t.navbar.contact}</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="menu-btn" onClick={() => setOpen(o => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
