import { Shield, Clock, ThumbsUp, Award } from 'lucide-react'

const STATS = [
  { icon: Award, label: '12+ Years Experience', detail: 'Established building specialists' },
  { icon: Shield, label: 'Fully Insured', detail: 'Public liability covered' },
  { icon: Clock, label: 'On Time, On Budget', detail: 'Reliable project delivery' },
  { icon: ThumbsUp, label: 'Free Quotations', detail: 'No obligation estimates' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2>Built on Trust, Delivered with Skill</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              JC Works was founded by <strong>Clark Stephens</strong> and{' '}
              <strong>Josh Dodson</strong>, two experienced building
              specialists with over 12 years in the trade. They share a
              straightforward approach: do quality work, keep your word,
              and leave every client with a result they're proud of.
            </p>
            <p>
              Operating across London and Kent, Clark and Josh undertake all
              aspects of building work, from brickwork and plastering to
              painting, landscaping, and general maintenance. They manage
              each job personally, keeping communication clear and standards
              high from start to finish.
            </p>
            <p>
              JC Works is built on reputation. Most of their work comes through
              word of mouth and returning customers. Contact them for a free,
              no-obligation quotation on any building project.
            </p>
          </div>

          <div className="about__stats">
            {STATS.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="about__stat">
                <div className="about__stat-icon">
                  <Icon size={28} />
                </div>
                <div>
                  <strong>{label}</strong>
                  <span>{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
