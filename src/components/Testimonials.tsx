import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Your Name Here',
    location: 'London',
    text: 'This is a placeholder testimonial. Replace it with a real review from a satisfied customer to build trust with potential clients.',
    rating: 5,
  },
  {
    name: 'Your Name Here',
    location: 'Kent',
    text: 'Another placeholder review. Real testimonials from past clients make a huge difference. Ask your best customers for a few words about their experience.',
    rating: 5,
  },
  {
    name: 'Your Name Here',
    location: 'London',
    text: 'A third placeholder. Aim for 3-6 genuine reviews covering different types of work (extensions, kitchens, renovations) to show the breadth of your services.',
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
