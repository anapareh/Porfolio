import './About.css'

const photos = [
  { id: 1, src: '', alt: '' },
  { id: 2, src: '', alt: '' },
  { id: 3, src: '', alt: '' },
  { id: 4, src: '', alt: '' },
]

export default function About() {
  return (
    <section className="about section-divider" id="sobre-mi">
      <div className="about__layout">

        {/* ── Columna izquierda: texto ── */}
        <div className="about__left">
          <div className="section-label">// sobre mí</div>

          <div className="about__avatar" aria-hidden="true">A</div>

          <p className="about__bio">
            {"Me considero una persona observadora, siempre pensando en cómo agilizar y mejorar lo que me rodea. Después de meses como voluntaria en el Consulado de Malí, vi de primera mano cómo la ineficiencia documental afectaba a personas que venían de muy lejos a hacer sus gestiones. Eso derivó en GestCon — un sistema real, en producción, que resuelve un problema real."}
          </p>

          <p className="about__bio about__bio--muted">
            {"Aprendo rápido y de forma autodidacta. He pasado por entornos muy distintos — el consulado, las prácticas en Wozell, la formación en el instituto — y en cada uno me llevé algo diferente. Donde más crezco es cuando el código tiene impacto real detrás."}
          </p>

          <div className="about__edu">
            <div className="about__edu-divider" />
            <div>
              <div className="about__edu-title">
                IES Abastos · Desarrollo de Aplicaciones Multiplataforma
              </div>
              <div className="about__edu-dates mono">
                {/* Años */}
              </div>
            </div>
          </div>
        </div>

        {/* ── Columna derecha: galería ── */}
        <div className="about__gallery">
          {photos.map(photo => (
            <div key={photo.id} className="about__photo">
              {photo.src
                ? <img src={photo.src} alt={photo.alt} />
                : <div className="about__photo-placeholder" />
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
