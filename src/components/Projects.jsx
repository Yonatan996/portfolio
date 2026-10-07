import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'crm',
    title: 'Real Estate CRM',
    subtitle: 'Nasew CRM System',
    emoji: '🏠',
    description:
      'A comprehensive CRM platform for real estate agencies. Features full authentication, lead tracking, property management, sales pipeline, and document storage — all built for scale.',
    features: ['Authentication & RBAC', 'Lead Management', 'Property Management', 'Sales Pipeline', 'Document Storage', 'Analytics Dashboard'],
    stack: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    stackColors: { React: '#61DAFB', 'Node.js': '#68A063', Firebase: '#FFCA28', 'Tailwind CSS': '#38BDF8' },
    category: ['React', 'Firebase', 'Node.js'],
    featured: true,
    color: '#3B82F6',
    github: 'https://github.com',
    demo: 'https://example.com',
    size: 'large',
  },
  {
    id: 'bot',
    title: 'Telegram Product Bot',
    subtitle: 'Multi-channel Automation',
    emoji: '🤖',
    description:
      'An advanced Telegram bot for product and inventory management. Automates multi-channel posting, tracks stock, and handles orders across multiple channels simultaneously.',
    features: ['Product Automation', 'Channel Management', 'Inventory Tracking', 'Multi-channel Posting'],
    stack: ['Python', 'Telethon', 'SQLite', 'Redis'],
    stackColors: { Python: '#FFD43B', Telethon: '#2CA5E0', SQLite: '#003B57', Redis: '#DC382D' },
    category: ['Python'],
    featured: true,
    color: '#10B981',
    github: 'https://github.com',
    demo: null,
    size: 'normal',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    subtitle: 'Full-featured Online Store',
    emoji: '🛒',
    description:
      'A complete e-commerce solution with product catalog, shopping cart, payment integration, user authentication, and order management.',
    features: ['Shopping Cart', 'Payment Integration', 'User Auth', 'Order Management'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    stackColors: { PHP: '#8892BF', MySQL: '#00758F', JavaScript: '#F7DF1E', Bootstrap: '#7952B3' },
    category: ['PHP'],
    featured: false,
    color: '#8B5CF6',
    github: 'https://github.com',
    demo: 'https://example.com',
    size: 'normal',
  },
  {
    id: 'machinery',
    title: 'Machinery Rental Platform',
    subtitle: 'Meedish Rental System',
    emoji: '🏗️',
    description:
      'A machinery rental management system with booking, admin dashboard, rental tracking, and a customer-facing catalog interface.',
    features: ['Online Booking', 'Admin Dashboard', 'Rental Management', 'Customer Catalog'],
    stack: ['JavaScript', 'Supabase', 'HTML', 'CSS'],
    stackColors: { JavaScript: '#F7DF1E', Supabase: '#3ECF8E', HTML: '#E34F26', CSS: '#1572B6' },
    category: ['JavaScript'],
    featured: false,
    color: '#F59E0B',
    github: 'https://github.com',
    demo: 'https://example.com',
    size: 'normal',
  },
  {
    id: 'fashion',
    title: 'Luxury Fashion Website',
    subtitle: 'Premium Brand Experience',
    emoji: '👔',
    description:
      'A minimal, premium luxury fashion website featuring a black-and-white aesthetic, smooth animations, and a fully responsive mobile experience.',
    features: ['Minimal Premium UI', 'Black & White Theme', 'Smooth Animations', 'Fully Responsive'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    stackColors: { HTML: '#E34F26', CSS: '#1572B6', JavaScript: '#F7DF1E' },
    category: ['JavaScript'],
    featured: false,
    color: '#E5E7EB',
    github: 'https://github.com',
    demo: 'https://example.com',
    size: 'normal',
  },
];

const FILTERS = ['All', 'React', 'Python', 'Firebase', 'Node.js', 'PHP', 'JavaScript'];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-card"
      style={{ gridColumn: project.size === 'large' ? 'span 2' : 'span 1' }}
    >
      {/* Top color bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />

      <div style={{ padding: project.size === 'large' ? '36px 40px' : '28px 32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: project.size === 'large' ? 40 : 32, marginBottom: 12 }}>{project.emoji}</div>
            {project.featured && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 11,
                fontWeight: 700,
                color: '#fbbf24',
                background: 'rgba(251,191,36,0.1)',
                border: '1px solid rgba(251,191,36,0.2)',
                borderRadius: 100,
                padding: '3px 10px',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                <Star size={10} fill="#fbbf24" /> Featured
              </div>
            )}
            <h3 style={{
              fontSize: project.size === 'large' ? 24 : 20,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 4,
              letterSpacing: '-0.02em',
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: 13, color: project.color, fontWeight: 500 }}>{project.subtitle}</p>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#9ca3af', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
          {project.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {project.features.map((f) => (
            <div key={f} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 12,
              color: '#9ca3af',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 6,
              padding: '4px 10px',
            }}>
              <ArrowRight size={10} color={project.color} /> {f}
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill" style={{ color: project.stackColors?.[tech] || '#9ca3af' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [ref, inView] = useInView(0.05);

  const filtered = PROJECTS.filter((p) => {
    const matchFilter = filter === 'All' || p.category.includes(filter);
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <section id="projects" className="section" ref={ref} style={{ background: 'rgba(10,10,10,0.5)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills across full-stack development, automation, and design.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}
        >
          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: 200, maxWidth: 300 }}>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              style={{ paddingLeft: 44 }}
            />
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontSize: 16 }}>🔍</span>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 100,
                  border: filter === f ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                  background: filter === f ? 'rgba(59,130,246,0.12)' : 'transparent',
                  color: filter === f ? '#60a5fa' : '#6b7280',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
            {filtered.length === 0 && (
              <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '60px 0', color: '#4b5563' }}>
                No projects match your search.
              </div>
            )}
          </div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #projects .project-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
