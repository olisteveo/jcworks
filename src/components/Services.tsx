import {
  BrickWall,
  PaintBucket,
  Paintbrush,
  TreePine,
  Wrench,
  HardHat,
} from 'lucide-react'

const SERVICES = [
  {
    icon: BrickWall,
    title: 'Brickwork',
    description:
      'All types of brickwork including new builds, extensions, garden walls, repointing, and structural repairs. Clean, precise work built to last.',
  },
  {
    icon: PaintBucket,
    title: 'Plastering & Rendering',
    description:
      'Interior plastering and exterior rendering to a smooth, lasting finish. Skimming, dry lining, pebbledash removal, and decorative render.',
  },
  {
    icon: Paintbrush,
    title: 'Painting & Decorating',
    description:
      'Interior and exterior painting, wallpapering, and decorating. A clean, professional finish that transforms any space.',
  },
  {
    icon: TreePine,
    title: 'Landscaping',
    description:
      'Patios, driveways, fencing, turfing, and garden structures. Durable outdoor spaces designed and built to suit your property.',
  },
  {
    icon: Wrench,
    title: 'Building Maintenance',
    description:
      'General repairs, property maintenance, and upkeep for residential and commercial properties. Reliable, responsive service.',
  },
  {
    icon: HardHat,
    title: 'General Building',
    description:
      'All aspects of building work undertaken. If your project isn\'t listed here, get in touch. Chances are we can help.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Our Services</h2>
          <p className="section-subtitle">
            All aspects of building undertaken, from brickwork and plastering
            to painting, landscaping, and property maintenance.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="services__card">
              <div className="services__icon">
                <Icon size={32} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
