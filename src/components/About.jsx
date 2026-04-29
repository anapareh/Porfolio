import './About.css'

export default function About() {
  return (
    <section className="about section-divider" id="sobre-mi">
      <div className="about__layout">

        {/* ── Columna izquierda: texto ── */}
        <div className="about__left">
          <div className="section-label">// sobre mí</div>

          <img className="about__avatar" src="/images/ana.png" alt="Ana Maria Pare Zerbo" />

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


      </div>
    </section>
  )
}
