import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    /* TODO: conectar envío (EmailJS, Formspree, o tu backend) */
    console.log(form)
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
            />
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
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
          />

          <button type="submit" className="btn btn--primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
