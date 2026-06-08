import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  slug: string
  title: string
  location: string
  category: string
  description: string
  cover: number
  imageCount: number
}

const PROJECTS: Project[] = [
  {
    slug: 'bromley-common',
    title: 'Bedroom Refurbishment',
    location: 'Bromley Common',
    category: 'Interior Renovation',
    description: 'Full bedroom refurb including artex removal, ceiling skim and paint, new flooring, and a custom-built window bench seat.',
    cover: 3,
    imageCount: 10,
  },
  {
    slug: 'locks-bottom',
    title: 'Crazy Paving Patio',
    location: 'Locks Bottom',
    category: 'Landscaping',
    description: 'New crazy paving patio and pathway with raised step detail, laid to complement the existing garden.',
    cover: 5,
    imageCount: 7,
  },
  {
    slug: 'swanley',
    title: 'Pebble Driveway',
    location: 'Swanley',
    category: 'Landscaping',
    description: 'Old concrete driveway stripped and replaced with eggshell pebble finish. Clean, durable, and low maintenance.',
    cover: 6,
    imageCount: 6,
  },
  {
    slug: 'keston',
    title: 'Full Exterior Renovation',
    location: 'Keston',
    category: 'Painting & Rendering',
    description: 'Complete house repaint, window and door repair and repaint, chimney render and repair, plus conservatory stain work.',
    cover: 18,
    imageCount: 24,
  },
  {
    slug: 'beckenham',
    title: 'Rendering & Painting',
    location: 'Beckenham',
    category: 'Plastering & Rendering',
    description: 'Exterior rendering and painting on a residential block. Fresh render applied with a smooth finish and full repaint.',
    cover: 10,
    imageCount: 14,
  },
  {
    slug: 'bickley-repaint',
    title: 'House Repaint & Wood Repair',
    location: 'Bickley',
    category: 'Painting & Decorating',
    description: 'Full exterior repaint with rotten wood repair and replacement, window repainting, and guttering cleanout.',
    cover: 11,
    imageCount: 13,
  },
  {
    slug: 'bickley-soffit',
    title: 'Soffit Cladding & Gutter Work',
    location: 'Bickley',
    category: 'Building Maintenance',
    description: 'Over-cladding of soffits, rot repair to fascia boards, and full gutter cleaning with guard installation.',
    cover: 1,
    imageCount: 7,
  },
  {
    slug: 'bromley-driveway',
    title: 'Driveway & Brick Wall',
    location: 'Bromley',
    category: 'Landscaping',
    description: 'Full front garden conversion to block paved driveway with new brick boundary wall and stone caps. Includes drainage, membrane, and new front steps.',
    cover: 1,
    imageCount: 13,
  },
]

function imagePath(slug: string, index: number) {
  return `/projects/${slug}/${index}.jpg`
}

function Gallery() {
  const [lightbox, setLightbox] = useState<{ project: number; image: number } | null>(null)

  const openLightbox = (projectIndex: number) => {
    setLightbox({ project: projectIndex, image: 1 })
  }

  const navigate = (dir: -1 | 1) => {
    if (!lightbox) return
    const project = PROJECTS[lightbox.project]
    const next = lightbox.image + dir
    if (next >= 1 && next <= project.imageCount) {
      setLightbox({ ...lightbox, image: next })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') navigate(-1)
    if (e.key === 'ArrowRight') navigate(1)
    if (e.key === 'Escape') setLightbox(null)
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
              key={project.slug}
              className="gallery__item gallery__item--has-image"
              onClick={() => openLightbox(i)}
            >
              <img
                src={imagePath(project.slug, project.cover)}
                alt={`${project.title}, ${project.location}`}
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__category">{project.category}</span>
                <h4>{project.title}</h4>
                <span className="gallery__location">{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          <div className="lightbox__header">
            <div className="lightbox__info">
              <h3>{PROJECTS[lightbox.project].title}</h3>
              <span>{PROJECTS[lightbox.project].location}</span>
            </div>
            <span className="lightbox__counter">
              {lightbox.image} / {PROJECTS[lightbox.project].imageCount}
            </span>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
          </div>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            disabled={lightbox.image <= 1}
          >
            <ChevronLeft size={36} />
          </button>

          <img
            src={imagePath(PROJECTS[lightbox.project].slug, lightbox.image)}
            alt={`${PROJECTS[lightbox.project].title} - Image ${lightbox.image}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            disabled={lightbox.image >= PROJECTS[lightbox.project].imageCount}
          >
            <ChevronRight size={36} />
          </button>

          <div className="lightbox__description" onClick={(e) => e.stopPropagation()}>
            <p>{PROJECTS[lightbox.project].description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
