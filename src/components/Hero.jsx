import { useState, useEffect, useCallback } from 'react'

const roles = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Tech Explorer',
  'CS Undergrad @ IIIT Sri City',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = roles[roleIndex]
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1))
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 1800)
        return
      }
    } else {
      setText(current.substring(0, text.length - 1))
      if (text.length === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
    }
  }, [text, roleIndex, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid + gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="text-primary font-mono text-sm md:text-base mb-3 tracking-wider animate-[fadeInUp_0.6s_ease_forwards]">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 animate-[fadeInUp_0.6s_0.1s_ease_both]">
            <span className="text-text">Eswar Babu</span>
            <br />
            <span className="gradient-text">Ettaligalla</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 my-5 text-lg md:text-xl animate-[fadeInUp_0.6s_0.2s_ease_both]">
            <span className="text-text-muted">I'm a</span>
            <span className="text-accent font-semibold font-mono">{text}</span>
            <span className="text-primary animate-[typewriter-blink_0.8s_infinite]">|</span>
          </div>

          <p className="text-text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-[fadeInUp_0.6s_0.3s_ease_both]">
            B.Tech CSE student at IIIT Sri City, passionate about building scalable
            applications, AI-powered systems, and solving real-world problems through code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-[fadeInUp_0.6s_0.4s_ease_both]">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group px-7 py-3.5 bg-linear-to-r from-primary to-primary-dark rounded-xl font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-rocket mr-2 group-hover:animate-bounce" />
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 border border-primary/30 rounded-xl font-semibold text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-paper-plane mr-2" />
              Get In Touch
            </a>
          </div>

          <div className="flex gap-5 mt-8 justify-center lg:justify-start animate-[fadeInUp_0.6s_0.5s_ease_both]">
            {[
              { href: 'https://github.com/EswarbabuEttaligalla', icon: 'fab fa-github', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/eswar-babu-ettaligalla-646452384/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
              { href: 'mailto:eswarbabuettaligalla@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile image */}
        <div className="order-1 lg:order-2 flex justify-center animate-[fadeInUp_0.8s_0.3s_ease_both]">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-primary/20 via-transparent to-accent/20 animate-[pulse-glow_4s_ease-in-out_infinite]" />
            {/* Dots decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src="/profile.png"
                alt="Eswar Babu Ettaligalla"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeInUp_0.6s_0.8s_ease_both]">
        <div className="w-6 h-10 rounded-full border-2 border-text-dim flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-[scroll-wheel_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-text-dim text-xs font-mono tracking-wider">Scroll Down</span>
      </div>
    </section>
  )
}
