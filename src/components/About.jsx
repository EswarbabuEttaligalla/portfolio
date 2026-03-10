import { useEffect, useRef, useState } from 'react'
import useRevealAll from '../hooks/useRevealAll'

function Counter({ target, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useRevealAll()

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="reveal text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">01.</span>
          <span>About Me</span>
          <span className="flex-1 h-px bg-dark-lighter ml-4 hidden sm:block" />
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            <p className="reveal text-text-muted leading-relaxed">
              I'm a <strong className="text-text">Computer Science Engineering</strong> student at the{' '}
              <strong className="text-text">Indian Institute of Information Technology, Sri City</strong>,
              driven by curiosity and a passion for technology. I thrive on building practical,
              impactful software — from AI-powered chatbots to secure real-time messaging platforms.
            </p>
            <p className="reveal text-text-muted leading-relaxed">
              My journey in tech started with competitive academics and evolved into hands-on
              development across full-stack web applications, retrieval-augmented generation systems,
              and collaboration platforms. I enjoy working at the intersection of{' '}
              <strong className="text-text">AI, backend systems, and modern web development</strong>.
            </p>
            <p className="reveal text-text-muted leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to
              team projects, or diving into system design concepts.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-4 pt-6">
              {[
                { target: 4, suffix: '+', label: 'Projects Built' },
                { target: 5, suffix: '+', label: 'Technologies' },
                { target: 95, suffix: '%', label: 'Intermediate Score' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-text-dim text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 flex justify-center reveal-right">
            <div className="relative group">
              <div className="absolute -inset-3 bg-linear-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-64 sm:w-72 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
                <img src={`${import.meta.env.BASE_URL}about.png`} alt="Eswar Babu" className="w-full aspect-3/4 object-cover object-center" />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
