import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer>
        <p>Diseñado y construido por <span className="grad-text">Johan B. Hernandez Raya</span> · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
