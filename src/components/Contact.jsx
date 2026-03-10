import { useState } from 'react'
import useRevealAll from '../hooks/useRevealAll'

const contacts = [
  {
    href: 'mailto:eswarbabuettaligalla@gmail.com',
    icon: 'fas fa-envelope',
    title: 'Email',
    text: 'eswarbabuettaligalla@gmail.com',
    external: false,
  },
  {
    href: 'tel:+919063980608',
    icon: 'fas fa-phone',
    title: 'Phone',
    text: '+91 9063980608',
    external: false,
  },
  {
    href: 'https://github.com/EswarbabuEttaligalla',
    icon: 'fab fa-github',
    title: 'GitHub',
    text: 'github.com/EswarbabuEttaligalla',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/eswar-babu-ettaligalla-646452384/',
    icon: 'fab fa-linkedin-in',
    title: 'LinkedIn',
    text: 'linkedin.com/in/eswarbabu',
    external: true,
  },
]

// ─── HOW TO SET UP (one-time, takes 30 seconds): ───
// 1. Go to https://web3forms.com/
// 2. Enter your email: eswarbabuettaligalla@gmail.com
// 3. You'll get an Access Key in your inbox
// 4. Replace the key below with your real key
const WEB3FORMS_KEY = '503b7a54-82dd-4934-888e-2713be33e661'

export default function Contact() {
  const sectionRef = useRevealAll()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="reveal text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">05.</span>
          <span>Get In Touch</span>
          <span className="flex-1 h-px bg-dark-lighter ml-4 hidden sm:block" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact info */}
          <div>
            <p className="reveal text-text-muted text-lg leading-relaxed mb-8">
              I'm currently looking for opportunities where I can contribute, learn, and grow.
              Whether you have a question, a project idea, or just want to say hi — my inbox is
              always open!
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contacts.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="reveal group flex items-center gap-4 p-4 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <i className={`${c.icon} text-lg`} />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-sm font-semibold text-text">{c.title}</div>
                    <div className="text-text-dim text-xs truncate">{c.text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-surface/60 border border-white/5 shadow-xl space-y-6"
            >
              <h3 className="text-xl font-bold text-text">Send Message</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-dark-light/80 border border-white/5 text-text placeholder-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-dark-light/80 border border-white/5 text-text placeholder-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-light/80 border border-white/5 text-text placeholder-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-linear-to-r from-primary to-primary-dark rounded-xl font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 text-lg"
              >
                {status === 'sending' ? (
                  <>
                    <i className="fas fa-spinner animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 px-4 py-3 rounded-xl">
                  <i className="fas fa-check-circle" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-xl">
                  <i className="fas fa-exclamation-circle" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
