import './Footer.css'
import { IconGitHub } from './icons'

export default function Footer() {
  return (
    <footer className="footer section-divider">
      <span className="footer__built mono">
        built with React · anapareh.dev · 2025
      </span>

      <a
        href="https://github.com/anapareh"
        target="_blank"
        rel="noreferrer"
        className="footer__github"
      >
        <IconGitHub size={14} color="var(--text-muted)" />
        github.com/anapareh
      </a>
    </footer>
  )
}
