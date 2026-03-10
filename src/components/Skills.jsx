import useRevealAll from '../hooks/useRevealAll'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    skills: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C', icon: 'fas fa-copyright' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: 'fas fa-globe',
    skills: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express', icon: 'fas fa-server' },
      { name: 'Flask', icon: 'fab fa-python' },
      { name: 'REST APIs', icon: 'fas fa-plug' },
      { name: 'WebSockets', icon: 'fas fa-bolt' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    skills: [
      { name: 'SQLite', icon: 'fas fa-database' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
    ],
  },
  {
    title: 'Core CS',
    icon: 'fas fa-microchip',
    skills: [
      { name: 'Data Structures', icon: 'fas fa-project-diagram' },
      { name: 'DBMS', icon: 'fas fa-database' },
      { name: 'OOP', icon: 'fas fa-cubes' },
      { name: 'Operating Systems', icon: 'fas fa-cogs' },
      { name: 'Computer Networks', icon: 'fas fa-network-wired' },
      { name: 'System Design', icon: 'fas fa-drafting-compass' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-wrench',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'VS Code', icon: 'fas fa-laptop-code' },
      { name: 'AWS', icon: 'fab fa-aws' },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRevealAll()

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="reveal text-3xl sm:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">04.</span>
          <span>Skills & Tech Stack</span>
          <span className="flex-1 h-px bg-dark-lighter ml-4 hidden sm:block" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="reveal group p-6 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i className={cat.icon} />
                </div>
                <h3 className="font-semibold text-text">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark/50 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <i className={`${skill.icon} text-primary/70 text-sm`} />
                    <span className="text-text-muted text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
