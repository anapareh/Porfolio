import './Nav.css'
import { IconGitHub, IconDownload } from './icons'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav__logo mono">
        anapare.dev
      </a>

      <div className="nav__right">
        <div className="nav__links">
          <a href="#sobre-mi">sobre mí</a>
          <a href="#proyectos">proyectos</a>
          <a href="#experiencia">experiencia</a>
          <a href="#contacto">contacto</a>
        </div>

        <div className="nav__divider" />

        <a
          href="https://github.com/anapareh"
          target="_blank"
          rel="noreferrer"
          className="nav__github"
          aria-label="GitHub"
        >
          <IconGitHub size={16} color="var(--text-muted)" />
        </a>

        <a href="/CV_Ana_Maria_Pare_Zerbo.pdf" target="_blank" rel="noreferrer" className="nav__cv btn--cv mono">
          <IconDownload size={12} />
          CV.pdf
        </a>
      </div>
    </nav>
  )
}
