import useRevealAll from '../hooks/useRevealAll'

const projectsData = [
  {
    title: 'Private Knowledge Assistant – RAG System',
    period: 'Oct 2025 – Dec 2025',
    icon: 'fas fa-brain',
    description:
      'A retrieval-augmented generation system for private document question answering. Built a production-ready RAG system using local LLM inference (Ollama), reducing document query latency by 60%.',
    highlights: [
      'Integrated Streamlit UI with FastAPI backend',
      'Secure Q&A over 1,000+ private documents',
      '60% reduction in query latency',
    ],
    tags: ['Python', 'FastAPI', 'Streamlit', 'Ollama', 'RAG'],
    color: 'from-violet-500/10 to-purple-500/10',
    borderColor: 'hover:border-violet-500/30',
  },
  {
    title: 'ZYNK – Secure Real-Time Messaging',
    period: 'Aug 2025 – Oct 2025',
    icon: 'fas fa-shield-alt',
    description:
      'A secure real-time chat application with authentication and encryption. Developed multi-client messaging using WebSockets, supporting 100+ concurrent users.',
    highlights: [
      'OAuth 2.0 & JWT session management',
      'End-to-end encryption for message privacy',
      '100+ concurrent users supported',
    ],
    tags: ['Node.js', 'WebSockets', 'OAuth 2.0', 'JWT', 'React'],
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'hover:border-cyan-500/30',
  },
  {
    title: 'Invoice Intelligence Chatbot',
    period: 'Apr 2025 – Jun 2025',
    icon: 'fas fa-file-invoice',
    description:
      'An AI-powered chatbot for invoice document analysis. Extracted and answered invoice queries using NLP and LLMs, automating data extraction from 500+ invoices.',
    highlights: [
      'NLP & LLM-powered data extraction',
      'Automated analysis of 500+ invoices',
      'Intelligent query answering',
    ],
    tags: ['Python', 'NLP', 'LLMs', 'AI'],
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'hover:border-emerald-500/30',
  },
  {
    title: 'RELABTeams – Collaboration Platform',
    period: 'Jan 2025 – Present',
    icon: 'fas fa-users-cog',
    description:
      'A full-stack recruitment and project management platform with role-based access. Built using React (Vite), Redux, Node.js/Express, and MongoDB.',
    highlights: [
      'Role-based modules for admins, recruiters & users',
      'Job posting, applications & messaging system',
      'End-to-end recruitment workflows',
    ],
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    color: 'from-orange-500/10 to-amber-500/10',
    borderColor: 'hover:border-orange-500/30',
  },
]

export default function Projects() {
  const sectionRef = useRevealAll()

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="reveal text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">03.</span>
          <span>Projects</span>
          <span className="flex-1 h-px bg-dark-lighter ml-4 hidden sm:block" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={`reveal group relative p-6 rounded-2xl bg-surface/50 border border-white/5 ${project.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                    <i className={project.icon} />
                  </div>
                  <a
                    href="https://github.com/EswarbabuEttaligalla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dim hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-lg" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-dim text-xs font-mono mb-3">
                  <i className="far fa-calendar-alt mr-1" />
                  {project.period}
                </p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-muted text-sm">
                      <i className="fas fa-chevron-right text-primary text-[10px] mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
