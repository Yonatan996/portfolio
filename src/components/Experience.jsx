import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'CodeAlpha',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    color: '#3B82F6',
    achievements: [
      'Built responsive websites using React and modern CSS frameworks',
      'Developed reusable, modular React component libraries',
      'Improved UI/UX across multiple client-facing interfaces',
      'Collaborated with senior developers in an agile team environment',
      'Delivered projects on time with clean, maintainable code',
    ],
    stack: ['React', 'JavaScript', 'CSS', 'Git'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <div className="section-label">Career Path</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building real-world experience through hands-on development and collaboration.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: 20,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, #3B82F6, transparent)',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ paddingLeft: 56, marginBottom: 48, position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: 12,
                top: 28,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: exp.color,
                border: '3px solid var(--bg)',
                boxShadow: `0 0 16px ${exp.color}60`,
              }} />

              <div className="glass-card" style={{ padding: '32px 36px' }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 16,
                  marginBottom: 24,
                }}>
                  <div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      color: exp.color,
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: 100,
                      padding: '4px 12px',
                      marginBottom: 10,
                    }}>
                      <Briefcase size={11} /> {exp.type}
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: 17, fontWeight: 600, color: exp.color }}>{exp.company}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 13 }}>
                      <Calendar size={13} /> {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 13 }}>
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul style={{ listStyle: 'none', marginBottom: 24 }}>
                  {exp.achievements.map((item, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      color: '#9ca3af',
                      fontSize: 15,
                      marginBottom: 10,
                      lineHeight: 1.6,
                    }}>
                      <CheckCircle2 size={15} color={exp.color} style={{ marginTop: 3, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* More coming */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              paddingLeft: 56,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#4b5563',
              fontSize: 14,
            }}
          >
            <div style={{
              position: 'absolute',
              left: 12,
              width: 18,
              height: 18,
              borderRadius: '50%',
              border: '2px dashed #374151',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#374151' }} />
            </div>
            More experience to come...
          </motion.div>
        </div>
      </div>
    </section>
  );
}
