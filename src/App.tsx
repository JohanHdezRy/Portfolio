import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechBanner from './components/TechBanner'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'
import LiquidEther from './effects/LiquidEther'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import './index.css'

function AppContent() {
  const { t } = useLanguage();
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <LiquidEther
          colors={['#4f7ef8', '#7c3aed', '#1a1a2e']}
          mouseForce={25}
          cursorSize={120}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <TechBanner />
        <BentoGrid />
        <Contact />
        <footer>
          <p>{t.footer.builtBy} <span className="grad-text">Johan B. Hernandez Raya</span> · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
