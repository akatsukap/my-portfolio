import './App.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link?: string
}

interface Skill {
  id: number
  name: string
}

function App() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A minimal, accessible portfolio built with React, TypeScript, and Vite. Features penguin-inspired design.',
      tags: ['React', 'TypeScript', 'Vite', 'Accessibility'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Add your own projects here. This is a placeholder to demonstrate the layout.',
      tags: ['Example', 'Placeholder'],
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Showcase your best work with detailed descriptions and relevant technologies.',
      tags: ['Demo', 'Sample'],
    },
  ]

  const skills: Skill[] = [
    { id: 1, name: 'React' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'HTML5' },
    { id: 5, name: 'CSS3' },
    { id: 6, name: 'Vite' },
    { id: 7, name: 'Git' },
    { id: 8, name: 'Accessibility' },
  ]

  return (
    <div className="app">
      {/* Skip to main content for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Header with navigation */}
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="nav-brand" aria-label="Home">
            <svg className="penguin-icon" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="48" fill="#fff"/>
              <ellipse cx="50" cy="55" rx="30" ry="35" fill="#000"/>
              <circle cx="40" cy="45" r="4" fill="#fff"/>
              <circle cx="60" cy="45" r="4" fill="#fff"/>
              <path d="M 45 55 Q 50 58 55 55" stroke="#ff6b35" strokeWidth="2" fill="none"/>
            </svg>
            Portfolio
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main id="main" className="main">
        {/* Hero section */}
        <section id="home" className="hero">
          <h1>
            Hello, I'm <span className="hero-accent">Your Name</span>
          </h1>
          <p>
            A developer passionate about creating accessible, performant, and beautifully minimal web experiences.
          </p>
        </section>

        {/* About section */}
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Welcome to my portfolio! I'm a developer who believes in the power of clean, minimal design 
            and accessible web experiences. This portfolio is built with React, TypeScript, and Vite, 
            following best practices for performance and accessibility.
          </p>
          <p>
            The penguin-inspired design reflects simplicity, elegance, and purpose - just like a penguin's 
            sleek black and white appearance with a hint of warmth.
          </p>
        </section>

        {/* Projects section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid" role="list">
            {projects.map((project) => (
              <article key={project.id} className="project-card" role="listitem">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags" aria-label="Technologies used">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-list" role="list">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-item" role="listitem">
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Let's connect! Feel free to reach out through any of the following channels:</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              📧 Email
            </a>
            <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              🔗 GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with ❤️ using React, TypeScript & Vite
        </p>
        <p>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
