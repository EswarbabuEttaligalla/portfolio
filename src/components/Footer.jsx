export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p className="text-primary font-mono text-lg font-bold">&lt;EB /&gt;</p>
        <p className="text-text-muted text-sm">
          Designed & Built by <strong className="text-text">Eswar Babu Ettaligalla</strong>
        </p>
        <div className="flex justify-center gap-5">
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
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-text-dim hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <p className="text-text-dim text-xs">&copy; 2026 Eswar Babu Ettaligalla. All rights reserved.</p>
      </div>
    </footer>
  )
}
