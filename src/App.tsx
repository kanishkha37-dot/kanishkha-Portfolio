import { useEffect, useState, type ReactNode } from 'react'

type Project = {
  title: string
  category?: string
  overview: string
  features: string[]
  objective: string
  example?: string
  note?: string
}

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Education', 'education'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Achievements', 'achievements'],
  ['Activities', 'activities'],
  ['Contact', 'contact'],
]

const projects: Project[] = [
  {
    title: 'CAREBOT',
    category: '1st Year Project',
    overview:
      'CAREBOT is an AI-based student support application designed to monitor students’ academic progress and emotional well-being while providing personalized support.',
    features: [
      'Mental well-being check-ins to understand a student’s current emotional state.',
      'Supportive activities and guidance to help students improve their well-being.',
      'Academic assistance through task management, study planning and progress tracking.',
      'Monitoring both academic development and emotional well-being.',
      'Parent updates to communicate students’ progress and growth.',
    ],
    objective:
      'To create an integrated platform that supports students’ emotional well-being and academic development.',
  },
  {
    title: 'PlanWise AI',
    overview:
      'PlanWise AI is an intelligent production planning system designed to optimize manufacturing operations by considering machine availability, workforce availability and production requirements.',
    features: [
      'Machine allocation based on production tasks.',
      'Alternative machine assignment when a machine breaks down.',
      'Workforce allocation based on employee availability.',
      'Production rescheduling when workers are absent.',
      'Optimizing production schedules to minimize delays and meet deadlines.',
    ],
    objective:
      'To improve manufacturing efficiency through intelligent resource allocation and production scheduling.',
    example:
      'If one machine breaks down or a worker is absent, the system identifies alternative resources and adjusts the production schedule to help complete orders on time.',
  },
  {
    title: 'SchemeGuide',
    overview:
      'SchemeGuide is a smart guidance platform designed to help individuals discover suitable government schemes and scholarships, verify required documents and understand the application process.',
    features: [
      'Discovering relevant government schemes and scholarships.',
      'Identifying eligibility requirements.',
      'Checking whether required certificates and documents are valid and complete.',
      'Guiding users on how to correct missing, expired or invalid documents.',
      'Providing information about the appropriate government office for document submission.',
      'Helping users identify nearby offices for further assistance.',
    ],
    objective:
      'To simplify access to government schemes and scholarships through intelligent eligibility checking and step-by-step guidance.',
    example:
      'If a student qualifies for a scholarship but has an invalid income certificate, the platform guides them on how to resolve the document issue before proceeding with the application.',
  },
  {
    title: 'FairLend AI',
    overview:
      'FairLend AI is an AI-based loan eligibility assessment concept designed to evaluate applicants using multiple relevant financial indicators rather than relying solely on traditional credit scores.',
    features: [
      'Collecting relevant applicant financial information.',
      'Evaluating loan eligibility using multiple data points.',
      'Considering alternative financial indicators when traditional credit history is limited or unavailable.',
      'Providing an eligibility assessment and supporting explanations.',
      'Helping identify applicants who may deserve further financial evaluation despite having limited credit history.',
    ],
    objective:
      'To explore more inclusive and data-driven approaches to preliminary loan eligibility assessment.',
    example:
      'An applicant without an established CIBIL score could still be assessed using other relevant financial information rather than being automatically excluded.',
    note:
      'FairLend AI should support fair, explainable assessments, not automatically approve or reject loans. Its criteria must be tested for accuracy and discriminatory bias.',
  },
]

const certifications = [
  {
    title: 'R Programming',
    subtitle: 'Statistical Computing',
    detail:
      'Secured 95% with 2 academic credits through a remotely invigilated examination organized by Dr. N.G.P. Institute of Technology, in collaboration with EduPyramids, SINE and IIT Bombay.',
  },
  {
    title: 'NPTEL',
    subtitle: 'Enhancing Soft Skills and Personality',
    detail: 'Successfully completed the Elite certification offered by IIT Kanpur with a consolidated score of 63%.',
  },
  {
    title: 'NPTEL',
    subtitle: 'Problem Solving Through Programming in C',
    detail: 'Successfully completed the course with a score of 53%.',
  },
  {
    title: 'Infosys Springboard',
    subtitle: 'Artificial Intelligence Foundation',
    detail: 'Successfully completed the AI Foundation certification.',
  },
]

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const icons: Record<string, ReactNode> = {
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2 0 15 1.8a13.4 13.4 0 0 0-7 0C4.8 0 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6M8 7v.01M12 17v-6M12 14a3 3 0 0 1 6 0v3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    up: <><path d="m18 15-6-6-6 6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    cap: <><path d="m2 10 10-5 10 5-10 5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    award: <><circle cx="12" cy="8" r="6"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
      setShowTop(scrollTop > 600)

      const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
      let current = 'home'
      sections.forEach((section) => {
        if (section && section.getBoundingClientRect().top <= 180) current = section.id
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
  }, [selectedProject])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="nav-shell">
        <nav className="navbar" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span>K</span> Kanishkha B R
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, id]) => (
              <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> AI &amp; DATA SCIENCE UNDERGRADUATE</p>
              <h1>Kanishkha B R</h1>
              <p className="tagline">Exploring Intelligence.<br />Building Innovation.</p>
              <p className="hero-location"><Icon name="pin" size={17} /> Coimbatore, Tamil Nadu, India</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollTo('projects')}>Explore My Work <Icon name="arrow" /></button>
                <button className="button secondary" onClick={() => scrollTo('contact')}>Contact Me</button>
              </div>
              <div className="social-links" aria-label="Social links">
                <a href="https://github.com/kanishkha37-dot" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
                <a href="https://www.linkedin.com/in/kanishkha-b-r-9881b837b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              </div>
            </div>
            <div className="portrait-wrap reveal">
              <div className="portrait-glow" />
              <div className="portrait-placeholder" role="img" aria-label="Profile photo placeholder">
                <div className="portrait-monogram">KB</div>
                <span>Profile Photo</span>
              </div>
              <div className="floating-tag tag-top"><Icon name="code" size={18} /> AI &amp; ML</div>
              <div className="floating-tag tag-bottom"><Icon name="award" size={18} /> Research Mindset</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="section-heading reveal">
              <p className="section-kicker">01 / INTRODUCTION</p>
              <h2>About <span>Me</span></h2>
            </div>
            <div className="about-card reveal">
              <p>“I am passionate about exploring emerging technologies, particularly Artificial Intelligence, Machine Learning, Natural Language Processing, and Data Analytics. As a curious learner, I enjoy expanding my technical knowledge, exploring new domains, and discovering innovative ways to solve real-world problems.”</p>
              <div className="interest-row">
                <span>Artificial Intelligence</span><span>Machine Learning</span><span>Data Analytics</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">02 / ACADEMIC JOURNEY</p>
              <h2>Education</h2>
            </div>
            <div className="education-card reveal">
              <div className="education-icon"><Icon name="cap" size={34} /></div>
              <div className="education-main">
                <p className="education-degree">B.Tech – AI &amp; Data Science</p>
                <h3>Dr. N.G.P. Institute of Technology</h3>
                <p>2nd Year · Expected Graduation 2029</p>
              </div>
              <div className="cgpa"><span>CGPA</span><strong>8.67</strong></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">03 / CAPABILITIES</p>
              <h2>Technical <span>Skills</span></h2>
            </div>
            <div className="skills-grid reveal">
              {[
                ['Programming', ['C', 'Python', 'R']],
                ['Web Development', ['HTML', 'CSS', 'JavaScript']],
                ['Database', ['SQL', 'PostgreSQL']],
                ['AI / ML', ['Machine Learning', 'Deep Learning', 'NLP']],
                ['Tools', ['VS Code', 'GitHub']],
              ].map(([category, values]) => (
                <article className="skill-card" key={category as string}>
                  <h3>{category}</h3>
                  <div>{(values as string[]).map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">04 / SELECTED WORK</p>
              <h2>Featured <span>Projects</span></h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card reveal" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  {project.category && <p className="project-category">{project.category}</p>}
                  <h3>{project.title}</h3>
                  <p className="project-overview">{project.overview}</p>
                  <button className="details-button" onClick={() => setSelectedProject(project)}>View Details <Icon name="arrow" size={18} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">05 / LEARNING RECORD</p>
              <h2>Certifications</h2>
            </div>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="cert-card reveal" key={cert.title + cert.subtitle}>
                  <div className="cert-mark"><Icon name="award" size={24} /></div>
                  <div><p>{cert.title}</p><h3>{cert.subtitle}</h3><span>{cert.detail}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">06 / RECOGNITION</p>
              <h2>Academic <span>Achievement</span></h2>
            </div>
            <article className="award-card reveal">
              <div className="award-icon"><Icon name="award" size={44} /></div>
              <div>
                <p>2026 · Dr. N.G.P. Institute of Technology</p>
                <h3>NGP Empowerment Award</h3>
                <p className="award-detail">Received the NGP Empowerment Award and <strong>100% Merit Scholarship</strong> for the academic year 2025–2026, awarded on 19 January 2026.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="activities" className="section activities-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-kicker">07 / BEYOND CLASSROOM</p>
              <h2>Activities &amp; <span>Presentations</span></h2>
            </div>
            <div className="activity-layout">
              <article className="activity-column reveal">
                <h3>Hackathons &amp; Ideathons</h3>
                <ul>
                  <li><strong>SPARKTANK ’26 – Internal Hackathon</strong><span>Participated in the internal hackathon organized by the Hackathon Club, Dr. N.G.P. Institute of Technology, on 19 September 2026.</span></li>
                  <li><strong>FairLend AI – 36-Hour Hackathon</strong><span>Participated at Excel College of Engineering, gaining experience in collaborative problem-solving and developing innovative AI-based solutions.</span></li>
                  <li><strong>செம்மொழி CLASH – Ideathon</strong><span>Presented Kalam Kural, an AI-powered Tamil OCR and digital heritage preservation solution.</span></li>
                </ul>
              </article>
              <article className="activity-column reveal">
                <h3>Presentations &amp; Workshops</h3>
                <ul>
                  <li className="highlight-item"><strong>IEEE Pathfinder 3.0 – 4th Place</strong><span>Idea Pitch Challenge, KPR Institute of Engineering and Technology. Presented SchemeGuide with Team KNOWASTACK.</span></li>
                  <li><strong>Hybrid Computing</strong><span>Technical paper presentation at Karpagam Institute of Technology.</span></li>
                  <li><strong>Kalam Kural</strong><span>Presented an AI-powered Tamil OCR and digital heritage preservation idea at Kumaraguru College of Technology.</span></li>
                  <li><strong>Biomimicry Inspired Solutions for SDG</strong><span>Participated in a workshop exploring nature-inspired solutions for Sustainable Development Goals.</span></li>
                  <li><strong>IEEE Xplore Webinar</strong><span>Successfully participated in online training organized by Dr. N.G.P. Institute of Technology in collaboration with EBSCO Information Services and IEEE.</span></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="section-heading reveal">
              <p className="section-kicker">08 / LET’S CONNECT</p>
              <h2>Start a <span>Conversation</span></h2>
              <p className="contact-lead">Open to academic collaboration, internships and research opportunities.</p>
            </div>
            <div className="contact-card reveal">
              <a href="mailto:kanishkha37@gmail.com"><span><Icon name="mail" /></span><div><small>Email</small><strong>kanishkha37@gmail.com</strong></div></a>
              <a href="https://github.com/kanishkha37-dot" target="_blank" rel="noreferrer"><span><Icon name="github" /></span><div><small>GitHub</small><strong>kanishkha37-dot</strong></div></a>
              <a href="https://www.linkedin.com/in/kanishkha-b-r-9881b837b/" target="_blank" rel="noreferrer"><span><Icon name="linkedin" /></span><div><small>LinkedIn</small><strong>Kanishkha B R</strong></div></a>
              <div className="contact-location"><span><Icon name="pin" /></span><div><small>Location</small><strong>Coimbatore, Tamil Nadu, India</strong></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© 2026 Kanishkha B R</p>
          <button onClick={() => scrollTo('home')}>Back to top <Icon name="up" size={16} /></button>
        </div>
      </footer>

      {showTop && <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top"><Icon name="up" /></button>}

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><Icon name="close" /></button>
            {selectedProject.category && <p className="project-category">{selectedProject.category}</p>}
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p className="modal-overview">{selectedProject.overview}</p>
            <h3>Key Features</h3>
            <ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            {selectedProject.example && <div className="modal-example"><h3>Example</h3><p>{selectedProject.example}</p></div>}
            <div className="modal-objective"><h3>Main Objective</h3><p>{selectedProject.objective}</p></div>
            {selectedProject.note && <p className="ethical-note"><strong>Important:</strong> {selectedProject.note}</p>}
          </article>
        </div>
      )}
    </>
  )
}

export default App
