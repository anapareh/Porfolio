import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <div className="row-split">
          <Skills />
          <Projects />
        </div>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
