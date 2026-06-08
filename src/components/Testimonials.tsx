import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jane',
    location: 'Bickley',
    text: 'The boys were very reasonable with their quoted price and completed the work very quickly to exactly the standard I desired. I will be using them for my roof repairs in the summer.',
    rating: 5,
  },
  {
    name: 'Oliver',
    location: 'Bromley',
    text: 'Josh and Clark completed work on my driveway, they gave me a good price and completed the work on schedule and 10/10 quality.',
    rating: 5,
  },
  {
    name: 'Joe',
    location: 'Elmers End',
    text: 'Had the front of my house rendered and painted. Really pleased with how it turned out, looks like a completely different property. Tidy workers too, left everything spotless.',
    rating: 5,
  },
  {
    name: 'Wayne',
    location: 'Bromley',
    text: 'Used JC Works for a garden wall and patio job. They kept me updated throughout and the finished result was exactly what I had in mind. Fair price and solid work, would recommend to anyone.',
    rating: 5,
  },
  {
    name: 'Devyn',
    location: 'Orpington',
    text: 'Clark and Josh sorted out some rotten fascias and repainted the outside of my house. They were punctual every morning and got it done quicker than I expected. Really happy with the finish.',
    rating: 5,
  },
  {
    name: 'Darren',
    location: 'Westerham',
    text: 'Hired them for plastering and decorating work inside my house. Top quality job, very professional from start to finish. Already booked them in for more work later this year.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reviews</span>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonials__card">
              <Quote size={32} className="testimonials__quote-icon" />
              <Stars count={t.rating} />
              <p>{t.text}</p>
              <div className="testimonials__author">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
