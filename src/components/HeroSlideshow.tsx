import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { src: '/projects/hero/1.jpg', alt: 'Pebble driveway, Swanley' },
  { src: '/projects/hero/2.jpg', alt: 'Pebble driveway progress, Swanley' },
  { src: '/projects/hero/3.jpg', alt: 'Crazy paving patio, Locks Bottom' },
  { src: '/projects/hero/4.jpg', alt: 'Crazy paving progress, Locks Bottom' },
  { src: '/projects/hero/5.jpg', alt: 'Rendering work, Keston' },
  { src: '/projects/hero/6.jpg', alt: 'Rendering progress, Keston' },
  { src: '/projects/hero/7.jpg', alt: 'Brickwork, Keston' },
  { src: '/projects/hero/8.jpg', alt: 'Bedroom refurbishment, Bromley Common' },
  { src: '/projects/hero/9.jpg', alt: 'Bedroom refurbishment progress, Bromley Common' },
  { src: '/projects/hero/10.jpg', alt: 'Bedroom complete, Bromley Common' },
  { src: '/projects/hero/11.jpg', alt: 'Bedroom before, Bromley Common' },
  { src: '/projects/hero/12.jpg', alt: 'Soffit and fascia, Bickley' },
  { src: '/projects/hero/13.jpg', alt: 'Soffit and fascia progress, Bickley' },
  { src: '/projects/hero/14.jpg', alt: 'Soffit and fascia before, Bickley' },
  { src: '/projects/hero/15.jpg', alt: 'House repaint, Bickley' },
  { src: '/projects/hero/16.jpg', alt: 'House repaint complete, Bickley' },
  { src: '/projects/hero/17.jpg', alt: 'House repaint before, Bickley' },
  { src: '/projects/hero/18.jpg', alt: 'House repaint detail, Bickley' },
  { src: '/projects/hero/19.jpg', alt: 'Rendering and painting, Beckenham' },
  { src: '/projects/hero/20.jpg', alt: 'Rendering complete, Beckenham' },
  { src: '/projects/hero/21.jpg', alt: 'Rendering progress, Beckenham' },
]

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  return (
    <div className="hero-slideshow">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slideshow__slide${i === current ? ' hero-slideshow__slide--active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <button className="hero-slideshow__arrow hero-slideshow__arrow--left" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={28} />
      </button>
      <button className="hero-slideshow__arrow hero-slideshow__arrow--right" onClick={next} aria-label="Next slide">
        <ChevronRight size={28} />
      </button>
      <div className="hero-slideshow__counter">
        {current + 1} / {SLIDES.length}
      </div>
    </div>
  )
}

export default HeroSlideshow
