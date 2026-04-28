import './Experience.css'

const entries = [
  {
    id: 'Woztell',
    title: 'Backend Developer and help desk', /* Título del puesto */
    company: 'Wozell', /* Empresa */
    dates: '2025-2026', /* Período */
    description: 'Prácticas en empresa de comunicaciones empresariales donde trabajé en el desarrollo e integración de automatizaciones entre plataformas, consumo de APIs REST y GraphQL, y resolución de incidencias técnicas en entornos de producción. Con contacto directo con clientes y gestión simultánea de varios proyectos.', /* Descripción */
    badge: null,
    active: true,
  },
  { 
    id: 'Desarollo de aplicaciones Multiplataforma',
    title: 'Desarollo de aplicaciones Multiplataforma',
    company: 'Ies Abastos',
    dates: 'finalizado en 2025',
    description: 'Formación en desarrollo fullstack, bases de datos relacionales, programación orientada a objetos y despliegue de aplicaciones.',
    badge: 'origen de GestCon',
    active: false,
  },
  {
    id: 'consulado',
    title: 'Consulado Mali',
    company: 'Consulado honorario de Mali en Valencia',
    dates: '2018',
    description: 'Apoyo en la tramitación de documentos consulares (pasaportes, salvoconductos y certificados), atención a ciudadanos y gestión de expedientes mediante herramientas ofimáticas.',
    badge: '',
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
