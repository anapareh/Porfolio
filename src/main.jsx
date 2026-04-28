import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css' // Importante para cargar tus variables y estilos

function App() {
  return (
    <div className="page-wrap">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <div className="row-split">
          <Projects />
          <Experience />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
