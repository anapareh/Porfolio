import './Skills.css'

const primaryStack = [
  'JavaScript', 'Node.js', 'REST APIs', 'MySQL', 'JWT · Auth',
]

const frameworks = [
  'Express', 'React', 'Axios', 'Electron', 'Vite',
]

const databases = [
  'MySQL', 'PostgreSQL', 'MongoDB',
]

export default function Skills() {
  return (
    <section className="skills section-divider" id="habilidades">
      <div className="section-inner">
        <div className="section-label">// habilidades técnicas</div>

        <div className="skills__layout">

          {/* Columna izquierda: stack principal */}
          <div className="skills__primary">
            <div className="skills__primary-header">
              <div className="skills__dot" />
              <span className="skills__primary-title mono">stack principal</span>
            </div>
            <div className="skills__tags">
              {primaryStack.map(tech => (
                <span key={tech} className="tag tag--accent tag--lg">{tech}</span>
              ))}
            </div>
          </div>

          {/* Columna derecha: frameworks + bases de datos */}
          <div className="skills__secondary">
            <div className="skills__card">
              <div className="skills__card-label mono">frameworks &amp; herramientas</div>
              <div className="skills__tags">
                {frameworks.map(t => (
                  <span key={t} className="tag tag--blue">{t}</span>
                ))}
              </div>
            </div>

            <div className="skills__card">
              <div className="skills__card-label mono">bases de datos</div>
              <div className="skills__tags">
                {databases.map(t => (
                  <span key={t} className="tag tag--orange">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
