import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID  = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY  = 'your_public_key'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:    form.name,
        from_email:   form.email,
        message:      form.message,
      }, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact section-divider" id="contacto">
      <div className="section-inner">
        <div className="section-label">// contacto</div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
          </div>

          <textarea
            className="contact__input contact__textarea"
            name="message"
            placeholder="Mensaje..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
          />

          <div className="contact__footer">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {status === 'success' && (
              <span className="contact__feedback contact__feedback--ok">
                Mensaje enviado ✓
              </span>
            )}
            {status === 'error' && (
              <span className="contact__feedback contact__feedback--err">
                Algo salió mal, intenta de nuevo.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
