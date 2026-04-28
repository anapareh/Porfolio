import './Experience.css'

const entries = [
  {
    id: 'wozell',
    title: '', /* Título del puesto */
    company: '', /* Empresa */
    dates: '', /* Período */
    description: '', /* Descripción */
    badge: null,
    active: true,
  },
  {
    id: 'consulado',
    title: '',
    company: '',
    dates: '',
    description: '',
    badge: 'origen de GestCon',
    active: true,
  },
  {
    id: 'fotografia',
    title: '',
    company: '',
    dates: '',
    description: '',
    badge: null,
    active: false,
  },
]

function TimelineEntry({ entry }) {
  return (
    <div className="timeline-entry">
      <div className={`timeline-entry__dot ${entry.active ? 'timeline-entry__dot--active' : ''}`} />

      <div className="timeline-entry__header">
        <span className="timeline-entry__title">{entry.title}</span>
        {entry.company && (
          <span className="timeline-entry__company"> · {entry.company}</span>
        )}
        {entry.badge && (
          <span className="tag tag--blue timeline-entry__badge">{entry.badge}</span>
        )}
      </div>

      <div className="timeline-entry__dates mono">{entry.dates}</div>
      <p className="timeline-entry__desc">{entry.description}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="experience section-divider" id="experiencia">
      <div className="section-inner">
        <div className="section-label">// experiencia</div>

        <div className="timeline">
          {entries.map(e => <TimelineEntry key={e.id} entry={e} />)}
        </div>
      </div>
    </section>
  )
}
