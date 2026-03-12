import LogoLoop from '../effects/LogoLoop';

const techs = [
  { name: 'JavaScript',  slug: 'javascript',  color: '#F7DF1E' },
  { name: 'TypeScript',  slug: 'typescript',  color: '#3178C6' },
  { name: 'React',       slug: 'react',       color: '#61DAFB' },
  { name: 'HTML5',       slug: 'html5',       color: '#E34F26' },
  { name: 'CSS3',        slug: 'css3',        color: '#1572B6' },
  { name: 'Tailwind',    slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'Vite',        slug: 'vite',        color: '#646CFF' },
  { name: 'Java',        slug: 'java',        color: '#ED8B00' },
  { name: 'Python',      slug: 'python',      color: '#3776AB' },
  { name: 'PostgreSQL',  slug: 'postgresql',  color: '#4169E1' },
  { name: 'MongoDB',     slug: 'mongodb',     color: '#47A248' },
  { name: 'Docker',      slug: 'docker',      color: '#2496ED' },
  { name: 'Git',         slug: 'git',         color: '#F05032' },
  { name: 'GitHub',      slug: 'github',      color: '#ffffff' },
  { name: 'Figma',       slug: 'figma',       color: '#F24E1E' },
  { name: 'Linux',       slug: 'linux',       color: '#FCC624' },
];

const logos = techs.map(t => ({
  node: (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <img
        src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('#', '')}`}
        alt={t.name}
        style={{ height: 32, width: 32, filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.08))' }}
      />
      <span style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
        {t.name}
      </span>
    </div>
  ),
  title: t.name,
}));

export default function TechBanner() {
  return (
    <div style={{ padding: '3rem 0', overflow: 'hidden' }}>
      <LogoLoop
        logos={logos}
        speed={60}
        gap={48}
        logoHeight={56}
        pauseOnHover
        fadeOut
        fadeOutColor="transparent"
        scaleOnHover
        ariaLabel="Tecnologías y herramientas"
      />
    </div>
  );
}
