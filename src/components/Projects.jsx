import './Projects.css'

const projects = [
  {
    id: 'gestcon',
    name: 'GestCon',
    status: 'en producción',
    subtitle: '', /* Descripción corta */
    description: '', /* Descripción larga */
    tags: {
      accent: ['Node.js', 'MySQL', 'JWT'],
      blue:   ['React', 'Electron'],
    },
    github: '#',
    caseStudy: '#',
  },
  /* Añade más proyectos aquí */
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.status && (
        <span className="project-card__badge mono">{project.status}</span>
      )}
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.accent.map(t => (
          <span key={t} className="tag tag--accent">{t}</span>
        ))}
        {project.tags.blue.map(t => (
          <span key={t} className="tag tag--blue">{t}</span>
        ))}
      </div>
      <div className="project-card__actions">
        <a href={project.github} className="btn btn--outline btn--sm">GitHub →</a>
        <a href={project.caseStudy} className="btn btn--ghost btn--sm">Case Study →</a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects section-divider" id="proyectos">
      <div className="section-inner">
        <div className="section-label">// proyectos</div>

        <div className="projects__list">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}

          <div className="project-card project-card--placeholder">
            <div className="mono" style={{ fontSize: 13, color: 'var(--text-muted)' }}>// próximo proyecto</div>
            <div style={{ fontSize: 13, color: 'var(--border)', marginTop: 6 }}>coming soon...</div>
          </div>
        </div>
      </div>
    </section>
  )
}
