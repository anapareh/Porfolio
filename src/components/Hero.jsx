import { useState, useEffect } from 'react'
import './Hero.css'

const FULL_NAME = 'Ana Maria Pare Zerbo'
const ACCENT_START = 10

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const done = displayed.length >= FULL_NAME.length

  useEffect(() => {
    if (done) return
    const t = setTimeout(() => setDisplayed(FULL_NAME.slice(0, displayed.length + 1)), 80)
    return () => clearTimeout(t)
  }, [displayed, done])

  const plain = displayed.slice(0, ACCENT_START)
  const accent = displayed.slice(ACCENT_START)

  return (
    <section className="hero" id="hero">
      <div className="hero__dot-grid" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow mono">// fullstack developer</div>

        <h1 className="hero__title">
          {plain}
          {accent && <span className="hero__title--accent">{accent}</span>}
          {!done && <span className="hero__cursor">|</span>}
        </h1>

        <p className="hero__subtitle">
          {/* Rol · Ciudad */}
        </p>

        <div className="hero__code mono">
          {/* Snippet de código — reemplazar con tu stack real */}
          <span className="code-keyword">const</span>{' '}
          <span className="code-var">stack</span>{' '}
          <span className="code-keyword">=</span>{' '}
          [<span className="code-str">'JavaScript'</span>,{' '}
          <span className="code-str">'Node.js'</span>,{' '}
          <span className="code-str">'MySQL'</span>,{' '}
          <span className="code-str">'REST APIs'</span>]
          <span className="code-cursor">▋</span>
        </div>

        <div className="hero__ctas">
          <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
          <a href="#contacto"  className="btn btn--outline">Contactar</a>
        </div>
      </div>
    </section>
  )
}
