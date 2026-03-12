import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechBanner from './components/TechBanner'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'
import LiquidEther from './effects/LiquidEther'
import './index.css'

export default function App() {
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
          <p>Diseñado y construido por <span className="grad-text">Johan B. Hernandez Raya</span> · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
