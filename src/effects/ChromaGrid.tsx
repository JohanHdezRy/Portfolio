import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Github, ExternalLink } from 'lucide-react';
import './ChromaGrid.css';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  github?: string;
  demo?: string;
}

interface ChromaGridProps {
  items: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export default function ChromaGrid({
  items,
  className = '',
  radius = 340,
  columns = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}: ChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<((value: number) => void) | null>(null);
  const setY = useRef<((value: number) => void) | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as (v: number) => void;
    setY.current = gsap.quickSetter(el, '--y', 'px') as (v: number) => void;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x, y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const openLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{ '--r': `${radius}px`, '--cols': columns } as React.CSSProperties}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          style={{
            '--card-border': c.borderColor ?? 'transparent',
            '--card-gradient': c.gradient,
          } as React.CSSProperties}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <div className="chroma-info-top">
              <h3 className="chroma-title">{c.title}</h3>
              <div className="chroma-links">
                {c.github && (
                  <button
                    className="chroma-link-btn"
                    onClick={e => openLink(e, c.github!)}
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github size={15} />
                  </button>
                )}
                {c.demo && (
                  <button
                    className="chroma-link-btn"
                    onClick={e => openLink(e, c.demo!)}
                    aria-label="Live demo"
                    title="Live demo"
                  >
                    <ExternalLink size={15} />
                  </button>
                )}
              </div>
            </div>
            {c.handle && <span className="chroma-handle">{c.handle}</span>}
            <p className="chroma-subtitle">{c.subtitle}</p>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}
