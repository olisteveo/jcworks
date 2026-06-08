import { ArrowRight } from 'lucide-react'

function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg-logo">
        <img src="/logo-watermark.png" alt="" aria-hidden="true" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">JC Works</p>
        <h1 className="hero__title">
          Building<br />
          <span className="hero__title-accent">Specialists</span>
        </h1>
        <div className="hero__divider" />
        <p className="hero__subtitle">
          All aspects of building undertaken across London &amp; Kent.
          Over 12 years of experience delivering quality brickwork,
          plastering, decorating, landscaping, and maintenance.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg" onClick={scrollToContact}>
            Get a Free Quote
            <ArrowRight size={20} />
          </a>
          <a href="#services" className="btn btn--outline btn--lg" onClick={scrollToServices}>
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
