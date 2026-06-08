import { useState } from 'react'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  image: string | null
}

const PROJECTS: Project[] = [
  { id: 1, title: 'Brickwork, Bromley', category: 'Brickwork', image: null },
  { id: 2, title: 'Rendering, Greenwich', category: 'Plastering & Rendering', image: null },
  { id: 3, title: 'Interior Decorating, Maidstone', category: 'Painting & Decorating', image: null },
  { id: 4, title: 'Garden Landscaping, Lewisham', category: 'Landscaping', image: null },
  { id: 5, title: 'Plastering, Canterbury', category: 'Plastering & Rendering', image: null },
  { id: 6, title: 'Property Maintenance, Sevenoaks', category: 'Building Maintenance', image: null },
]

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    if (PROJECTS[index].image) setLightbox(index)
  }

  const navigate = (dir: -1 | 1) => {
    if (lightbox === null) return
    const next = lightbox + dir
    if (next >= 0 && next < PROJECTS.length && PROJECTS[next].image) {
      setLightbox(next)
    }
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2>Recent Projects</h2>
          <p className="section-subtitle">
            A selection of completed projects across London and Kent.
          </p>
        </div>

        <div className="gallery__grid">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`gallery__item${project.image ? ' gallery__item--has-image' : ''}`}
              onClick={() => openLightbox(i)}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="gallery__placeholder">
                  <Camera size={40} />
                  <span>Photo Coming Soon</span>
                </div>
              )}
              <div className="gallery__overlay">
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && PROJECTS[lightbox].image && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={PROJECTS[lightbox].image!}
            alt={PROJECTS[lightbox].title}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
