import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    try {
      const res = await fetch('https://formsubmit.co/ajax/jcworks.se@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Request a Free Quote</h2>
          <p className="section-subtitle">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Brickwork</option>
                  <option>Plastering & Rendering</option>
                  <option>Painting & Decorating</option>
                  <option>Landscaping</option>
                  <option>Building Maintenance</option>
                  <option>General Building</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project. What work do you need, rough timeline, any other details..."
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--lg contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {status === 'success' && (
              <div className="contact__status contact__status--success">
                <CheckCircle size={20} />
                Message sent. We'll be in touch shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error">
                <AlertCircle size={20} />
                Something went wrong. Please call or email us directly.
              </div>
            )}
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3>Contact Details</h3>
              <div className="contact__info-item">
                <Mail size={20} />
                <a href="mailto:jcworks.se@gmail.com">jcworks.se@gmail.com</a>
              </div>
              <div className="contact__info-item">
                <Phone size={20} />
                <div>
                  <strong>Josh</strong>
                  <a href="tel:07807747103">07807 747 103</a>
                </div>
              </div>
              <div className="contact__info-item">
                <Phone size={20} />
                <div>
                  <strong>Clark</strong>
                  <a href="tel:07447645099">07447 645 099</a>
                </div>
              </div>
              <div className="contact__info-item">
                <MapPin size={20} />
                <span>Serving London & Kent</span>
              </div>
            </div>

            <div className="contact__info-card">
              <h3>Free Quotations</h3>
              <p>
                We offer free, no-obligation quotes on all building work.
                Call us directly or fill in the form and we'll get back
                to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
