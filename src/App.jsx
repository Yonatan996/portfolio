import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Award,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Search,
  Server,
  Sparkles,
  Store,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import heroArt from './assets/hero.png'
import './App.css'

const CONTACT_EMAIL = 'yonatanwondessen99@gmail.com'
const GITHUB_URL = 'https://github.com/yonatan996'
const LINKEDIN_URL = 'https://linkedin.com/in/yonatanwondessen'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    color: '#3B82F6',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 84 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#10B981',
    skills: [
      { name: 'Node.js', level: 86 },
      { name: 'Express', level: 84 },
      { name: 'Firebase', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'PHP', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#F59E0B',
    skills: [
      { name: 'MySQL', level: 84 },
      { name: 'Firestore', level: 88 },
      { name: 'SQLite', level: 82 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Wrench,
    color: '#38BDF8',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 88 },
      { name: 'AWS', level: 68 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 86 },
      { name: 'Google Apps Script', level: 76 },
    ],
  },
]

const projects = [
  {
    title: 'Real Estate CRM',
    type: 'Featured System',
    icon: Building2,
    description:
      'A scalable CRM for real estate teams with authentication, lead tracking, property workflows, pipeline visibility, and document storage.',
    features: [
      'Authentication',
      'Lead Management',
      'Property Management',
      'Sales Pipeline',
      'Document Storage',
      'Firebase',
    ],
    stack: ['React', 'Node.js', 'Firebase', 'Tailwind'],
    category: ['React', 'Node.js', 'Firebase'],
    accent: '#3B82F6',
    featured: true,
    demo: '#',
    github: GITHUB_URL,
  },
  {
    title: 'Telegram Product Management Bot',
    type: 'Automation',
    icon: Bot,
    description:
      'A Python automation tool for product operations, channel publishing, inventory updates, and multi-channel Telegram workflows.',
    features: ['Product automation', 'Channel management', 'Inventory updates', 'Multi-channel posting'],
    stack: ['Python', 'Telethon', 'SQLite', 'Redis'],
    category: ['Python', 'SQLite', 'Redis'],
    accent: '#10B981',
    demo: '#',
    github: GITHUB_URL,
  },
  {
    title: 'E-Commerce Website',
    type: 'Commerce',
    icon: Store,
    description:
      'A full online store with product browsing, cart flows, payment handling, login, orders, and database-backed product management.',
    features: ['Shopping cart', 'Payment', 'Login', 'Orders'],
    stack: ['PHP', 'MySQL', 'JavaScript'],
    category: ['PHP', 'MySQL', 'JavaScript'],
    accent: '#F59E0B',
    demo: '#',
    github: GITHUB_URL,
  },
  {
    title: 'Machinery Rental Website',
    type: 'Booking Platform',
    icon: LayoutDashboard,
    description:
      'A rental management website with availability flows, booking requests, an admin dashboard, and operational rental tracking.',
    features: ['Booking', 'Admin Dashboard', 'Rental Management'],
    stack: ['JavaScript', 'Database', 'Responsive UI'],
    category: ['JavaScript'],
    accent: '#38BDF8',
    demo: '#',
    github: GITHUB_URL,
  },
  {
    title: 'Luxury Fashion Website',
    type: 'Brand UI',
    icon: Sparkles,
    description:
      'A minimal premium fashion experience with refined black-and-white visuals, responsive layouts, and smooth presentation details.',
    features: ['Minimal premium UI', 'Black and white', 'Responsive'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: ['HTML', 'CSS', 'JavaScript'],
    accent: '#E5E7EB',
    demo: '#',
    github: GITHUB_URL,
  },
]

const services = [
  {
    title: 'Full Stack Development',
    icon: Code2,
    text: 'Modern web applications using React, Node.js, Firebase, and practical database design.',
  },
  {
    title: 'UI/UX Design',
    icon: MonitorSmartphone,
    text: 'Responsive, elegant interfaces with thoughtful layout systems and Tailwind CSS.',
  },
  {
    title: 'AI & Automation',
    icon: Zap,
    text: 'Telegram bots, OCR systems, AI integrations, and automation flows for real operations.',
  },
]

const techFilters = ['All', 'React', 'Node.js', 'Firebase', 'Python', 'PHP', 'JavaScript', 'MySQL']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function scrollToSection(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionIntro({ eyebrow, title, highlight, text, centered = false }) {
  return (
    <motion.div
      className={centered ? 'section-intro section-intro-center' : 'section-intro'}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {text && <p className="section-copy">{text}</p>}
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#hero"
        onClick={(event) => {
          event.preventDefault()
          scrollToSection('#hero')
        }}
        aria-label="Yonatan homepage"
      >
        <span className="brand-mark">
          <Code2 size={18} />
        </span>
        <span>Yonatan</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection(item.href)
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cv desktop-only" href="/cv.pdf" download>
        <FileText size={16} />
        CV
      </a>

      <button
        className="icon-button mobile-only"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <motion.nav
          className="mobile-panel"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={(event) => {
                event.preventDefault()
                setOpen(false)
                scrollToSection(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="/cv.pdf" download>
            Download CV
          </a>
        </motion.nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="animated-grid" aria-hidden="true" />
      <div className="hero-lighting" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="status-pill">
            <span />
            Available for full stack roles
          </p>
          <h1>Hi, I'm Yonatan.</h1>
          <div className="typing-line" aria-label="Full Stack Developer, Computer Science Graduate">
            <span>Full Stack Developer</span>
            <span>Computer Science Graduate</span>
          </div>
          <p className="hero-text">
            Building scalable web applications, AI-powered solutions, and modern user experiences.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('#projects')
              }}
            >
              <ExternalLink size={17} />
              View Projects
            </a>
            <a className="button button-secondary" href="/cv.pdf" download>
              <ArrowDown size={17} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="terminal-window">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <pre>{`const developer = {
  name: 'Yonatan',
  focus: ['React', 'Node.js', 'AI'],
  builds: 'scalable products'
}`}</pre>
          </div>
          <img src={heroArt} alt="Layered developer interface illustration" />
        </motion.div>
      </div>

      <button
        className="scroll-cue"
        type="button"
        aria-label="Scroll to about section"
        onClick={() => scrollToSection('#about')}
      >
        <ChevronDown size={18} />
      </button>
    </section>
  )
}

function About() {
  const specialties = ['React', 'Node.js', 'Firebase', 'AI Integrations', 'REST APIs', 'Database Design']

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <motion.div
          className="portrait"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="portrait-frame">
            <GraduationCap size={76} />
            <span>CS Graduate</span>
          </div>
          <div className="portrait-meta">
            <CheckCircle2 size={18} />
            Full stack developer focused on usable, reliable software.
          </div>
        </motion.div>

        <div>
          <SectionIntro
            eyebrow="About Me"
            title="Building useful products with"
            highlight="clean execution"
            text="I'm a Computer Science graduate and Full Stack Developer passionate about building modern web applications that solve real-world problems."
          />
          <motion.div
            className="specialty-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {specialties.map((item) => (
              <span key={item}>
                <CheckCircle2 size={15} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section muted-section" id="skills">
      <div className="container">
        <SectionIntro
          centered
          eyebrow="Skills"
          title="A practical stack for"
          highlight="modern apps"
          text="Frontend polish, backend structure, databases, and deployment tools for end-to-end product work."
        />

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon
            return (
              <motion.article
                className="skill-card"
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              >
                <div className="card-heading">
                  <span style={{ '--accent': group.color }}>
                    <Icon size={18} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill, index) => (
                    <div className="skill-meter" key={skill.name}>
                      <div>
                        <span>{skill.name}</span>
                        <small>{skill.level}%</small>
                      </div>
                      <div className="meter-track">
                        <motion.span
                          style={{ '--accent': group.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionIntro
          eyebrow="Experience"
          title="Hands-on work with"
          highlight="real interfaces"
          text="Focused internship experience building responsive UI, reusable components, and cleaner development workflows."
        />

        <motion.article
          className="timeline-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="timeline-icon">
            <BriefcaseBusiness size={20} />
          </div>
          <div>
            <p className="eyebrow compact">CodeAlpha</p>
            <h3>Frontend Developer Intern</h3>
            <p className="timeline-meta">Remote Internship</p>
            <ul className="check-list">
              {[
                'Built responsive websites',
                'Developed reusable React components',
                'Improved UI/UX across client-facing screens',
                'Collaborated with developers on implementation details',
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesFilter = filter === 'All' || project.category.includes(filter) || project.stack.includes(filter)
      const matchesQuery =
        !normalizedQuery ||
        [project.title, project.type, project.description, ...project.stack, ...project.features]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <section className="section muted-section" id="projects">
      <div className="container">
        <SectionIntro
          centered
          eyebrow="Featured Projects"
          title="Project work with"
          highlight="product depth"
          text="Search or filter by technology to explore full stack platforms, automation tools, commerce flows, and responsive web experiences."
        />

        <motion.div
          className="project-toolbar"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <label className="search-box">
            <Search size={17} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects"
              aria-label="Search projects"
            />
          </label>
          <div className="filter-row" aria-label="Project filters">
            {techFilters.map((item) => (
              <button
                className={filter === item ? 'active' : ''}
                key={item}
                type="button"
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                className={project.featured ? 'project-card project-card-featured' : 'project-card'}
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="project-preview" style={{ '--accent': project.accent }}>
                  <div className="preview-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="preview-body">
                    <div className="preview-sidebar" />
                    <div className="preview-main">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-heading">
                    <span style={{ '--accent': project.accent }}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="feature-list">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <div className="stack-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.demo} aria-label={`${project.title} live demo`}>
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.github} aria-label={`${project.title} GitHub repository`}>
                        <Code2 size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {filteredProjects.length === 0 && <p className="empty-state">No projects match that search.</p>}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container split-section">
        <SectionIntro
          eyebrow="Certifications"
          title="Proof of"
          highlight="continued growth"
          text="Current credentials and learning milestones, with space to add more as the portfolio grows."
        />
        <motion.div
          className="cert-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <Award size={28} />
          <div>
            <h3>CodeAlpha Internship</h3>
            <p>Frontend Developer Internship</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section muted-section" id="services">
      <div className="container">
        <SectionIntro
          centered
          eyebrow="What I Do"
          title="Services for"
          highlight="builders and teams"
          text="I help turn ideas into fast, responsive, maintainable web products."
        />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                className="service-card"
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span>
                  <Icon size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GitHubSnapshot() {
  const weeks = Array.from({ length: 84 }, (_, index) => {
    const strength = [0, 1, 2, 3, 1, 0, 2][index % 7]
    return strength
  })

  return (
    <section className="section compact-section" id="github">
      <div className="container github-panel">
        <div>
          <p className="eyebrow">GitHub Snapshot</p>
          <h2>Consistent building, clean delivery.</h2>
        </div>
        <div className="github-stats">
          <span>
            <strong>5+</strong>
            Projects
          </span>
          <span>
            <strong>12+</strong>
            Technologies
          </span>
          <span>
            <strong>100%</strong>
            Responsive
          </span>
        </div>
        <div className="contribution-grid" aria-label="Contribution graph preview">
          {weeks.map((strength, index) => (
            <span className={`level-${strength}`} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('Opening your email app...')
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionIntro
            eyebrow="Contact"
            title="Let's build"
            highlight="something useful"
            text="Send a short message about your project, opportunity, or collaboration idea."
          />
          <div className="contact-links">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={17} />
              {CONTACT_EMAIL}
            </a>
            <a href={GITHUB_URL}>
              <Code2 size={17} />
              GitHub
            </a>
            <a href={LINKEDIN_URL}>
              <BriefcaseBusiness size={17} />
              LinkedIn
            </a>
            <span>
              <MapPin size={17} />
              Ethiopia
            </span>
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>
          <button className="button button-primary" type="submit">
            <Mail size={17} />
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>Yonatan</strong>
          <p>Full Stack Developer</p>
        </div>
        <p>Made with React + Tailwind</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Services />
        <GitHubSnapshot />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
