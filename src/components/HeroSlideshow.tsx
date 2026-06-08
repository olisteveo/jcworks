import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  { src: '/projects/hero/1.jpg', alt: 'Bedroom refurbishment, Bromley Common' },
  { src: '/projects/hero/2.jpg', alt: 'Crazy paving patio, Locks Bottom' },
  { src: '/projects/hero/3.jpg', alt: 'Pebble driveway, Swanley' },
  { src: '/projects/hero/4.jpg', alt: 'Rendering and painting, Beckenham' },
  { src: '/projects/hero/5.jpg', alt: 'House repaint, Bickley' },
]

const INTERVAL = 4500

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]))

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL)
    return () => clearInterval(timer)
  }, [advance])

  useEffect(() => {
    const next = (current + 1) % SLIDES.length
    if (!loaded.has(next)) {
      const img = new Image()
      img.src = SLIDES[next].src
      img.onload = () => setLoaded((prev) => new Set(prev).add(next))
    }
  }, [current, loaded])

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
      <div className="hero-slideshow__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-slideshow__dot${i === current ? ' hero-slideshow__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`View slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlideshow
