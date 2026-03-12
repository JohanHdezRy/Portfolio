import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_GLOW_COLOR = '79, 126, 248';
const DEFAULT_PARTICLE_COUNT = 10;
const DEFAULT_SPOTLIGHT_RADIUS = 300;

const createParticle = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    left: ${x}px; top: ${y}px;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
  `;
  return el;
};

const updateGlowProps = (card: HTMLElement, mx: number, my: number, glow: number, radius: number) => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--glow-x', `${((mx - r.left) / r.width) * 100}%`);
  card.style.setProperty('--glow-y', `${((my - r.top) / r.height) * 100}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

/* ─── ParticleCard ─── */
interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
}

export const ParticleCard: React.FC<ParticleCardProps> = ({
  children,
  className = '',
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = false,
  clickEffect = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach(p =>
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => p.remove() })
    );
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    Array.from({ length: particleCount }).forEach((_, i) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const p = createParticle(Math.random() * width, Math.random() * height, glowColor);
        cardRef.current.appendChild(p);
        particlesRef.current.push(p);
        gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(p, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
        gsap.to(p, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, i * 80);
      timeoutsRef.current.push(id);
    });
  }, [particleCount, glowColor]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => { isHoveredRef.current = true; spawnParticles(); if (enableTilt) gsap.to(el, { rotateX: 4, rotateY: 4, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 }); };
    const onLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
      if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
    };
    const onMove = (e: MouseEvent) => {
      if (!enableTilt) return;
      const r = el.getBoundingClientRect();
      const cx = r.width / 2, cy = r.height / 2;
      gsap.to(el, { rotateX: ((e.clientY - r.top - cy) / cy) * -8, rotateY: ((e.clientX - r.left - cx) / cx) * 8, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
    };
    const onClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const d = Math.max(Math.hypot(x, y), Math.hypot(x - r.width, y), Math.hypot(x, y - r.height), Math.hypot(x - r.width, y - r.height));
      const ripple = document.createElement('div');
      ripple.style.cssText = `position:absolute;width:${d*2}px;height:${d*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.35) 0%,rgba(${glowColor},0.15) 30%,transparent 70%);left:${x-d}px;top:${y-d}px;pointer-events:none;z-index:50;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('click', onClick);
    return () => {
      isHoveredRef.current = false;
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('click', onClick);
      clearParticles();
    };
  }, [spawnParticles, clearParticles, enableTilt, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, '--glow-color': glowColor, position: 'relative', overflow: 'hidden' } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

/* ─── GlobalSpotlight ─── */
interface SpotlightProps {
  gridRef: React.RefObject<HTMLDivElement | null>;
  glowColor?: string;
  spotlightRadius?: number;
}

export const GlobalSpotlight: React.FC<SpotlightProps> = ({
  gridRef,
  glowColor = DEFAULT_GLOW_COLOR,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
}) => {
  useEffect(() => {
    if (!gridRef?.current) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `position:fixed;width:700px;height:700px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(${glowColor},0.14) 0%,rgba(${glowColor},0.07) 20%,rgba(${glowColor},0.03) 40%,transparent 65%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
    document.body.appendChild(spotlight);

    const proximity = spotlightRadius * 0.5;
    const fadeDistance = spotlightRadius * 0.8;

    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
        cards.forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'));
        return;
      }

      let minDist = Infinity;
      cards.forEach(c => {
        const ce = c as HTMLElement;
        const cr = ce.getBoundingClientRect();
        const dist = Math.max(0, Math.hypot(e.clientX - (cr.left + cr.width / 2), e.clientY - (cr.top + cr.height / 2)) - Math.max(cr.width, cr.height) / 2);
        minDist = Math.min(minDist, dist);
        const intensity = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance - dist) / (fadeDistance - proximity) : 0;
        updateGlowProps(ce, e.clientX, e.clientY, intensity, spotlightRadius);
      });

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOpacity = minDist <= proximity ? 0.8 : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.4 });
    };

    const onLeave = () => {
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'));
      gsap.to(spotlight, { opacity: 0, duration: 0.3 });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      spotlight.parentNode?.removeChild(spotlight);
    };
  }, [gridRef, glowColor, spotlightRadius]);

  return null;
};
