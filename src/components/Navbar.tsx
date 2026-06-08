import { useState, useEffect } from 'react'
import { Menu, X, Instagram } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/jcworks.se'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <nav className={`navbar${scrolled && !mobileOpen ? ' navbar--scrolled' : ''}${mobileOpen ? ' navbar--menu-open' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleClick(e, '#home')}>
          <img src="/logo.png" alt="JC Works" className="navbar__logo-img" />
          <span className="navbar__logo-text">JC Works</span>
        </a>

        <ul className={`navbar__links${mobileOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="#contact" className="btn btn--primary" onClick={(e) => handleClick(e, '#contact')}>
              Get a Quote
            </a>
          </li>
          <li className="navbar__social-mobile">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#contact" className="btn btn--primary navbar__cta-desktop" onClick={(e) => handleClick(e, '#contact')}>
            Get a Quote
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
