import useRevealAll from '../hooks/useRevealAll'

const educationData = [
  {
    period: '2023 – Present',
    title: 'Indian Institute of Information Technology, Sri City',
    subtitle: 'B.Tech – Computer Science and Engineering',
    location: 'Tirupati, Andhra Pradesh',
    icon: 'fas fa-graduation-cap',
    highlight: null,
  },
  {
    period: '2021 – 2023',
    title: 'Narayana Junior College',
    subtitle: 'MPC – IIT Stream',
    location: 'Tirupati, Andhra Pradesh',
    icon: 'fas fa-school',
    highlight: 'Percentage: 95.4%',
  },
  {
    period: '2020 – 2021',
    title: 'Sri Chaitanya Techno School',
    subtitle: 'Selected for C-Batch, IPL, and Super China-Batch',
    location: 'Hyderabad, Telangana',
    icon: 'fas fa-book-reader',
    highlight: 'GPA: 99%',
  },
]

export default function Education() {
  const sectionRef = useRevealAll()

  return (
    <section id="education" className="py-24 relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="reveal text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">02.</span>
          <span>Education</span>
          <span className="flex-1 h-px bg-dark-lighter ml-4 hidden sm:block" />
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-accent/50 to-primary/50" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border-2 border-primary/50 flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                  <i className={`${edu.icon} text-primary text-sm`} />
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="group p-6 rounded-2xl bg-surface/60 border border-white/5 hover:border-primary/20 shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-primary bg-primary/10 rounded-full mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-lg font-bold text-text mb-1">{edu.title}</h3>
                    <p className="text-text-muted text-sm mb-2">{edu.subtitle}</p>
                    {edu.highlight && (
                      <p className="text-accent font-semibold text-sm mb-2">
                        <i className="fas fa-star text-accent/70 mr-1" />
                        {edu.highlight}
                      </p>
                    )}
                    <p className="text-text-dim text-xs">
                      <i className="fas fa-map-marker-alt mr-1" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
