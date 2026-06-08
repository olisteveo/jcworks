function Footer() {
  const year = 2026

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo.png" alt="JC Works" className="footer__logo" />
            <p>
              Quality building services across London and Kent. Founded by
              Clark Stephens and Josh Dodson.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a></li>
              <li><a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')}>Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Services</h4>
            <ul>
              <li>Brickwork</li>
              <li>Plastering & Rendering</li>
              <li>Painting & Decorating</li>
              <li>Landscaping</li>
              <li>Building Maintenance</li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Areas Covered</h4>
            <ul>
              <li>Central London</li>
              <li>South East London</li>
              <li>North Kent</li>
              <li>West Kent</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} JC Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
