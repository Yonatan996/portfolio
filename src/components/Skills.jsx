import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: '#3B82F6',
    skills: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'JavaScript', icon: '🟨', level: 88 },
      { name: 'Tailwind CSS', icon: '🌊', level: 85 },
      { name: 'HTML5', icon: '🧡', level: 95 },
      { name: 'CSS3', icon: '💙', level: 88 },
      { name: 'Bootstrap', icon: '🅱️', level: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: '#10B981',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Express', icon: '🚂', level: 83 },
      { name: 'Firebase', icon: '🔥', level: 88 },
      { name: 'REST APIs', icon: '🔗', level: 87 },
      { name: 'PHP', icon: '🐘', level: 75 },
      { name: 'Python', icon: '🐍', level: 78 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    emoji: '🗄️',
    color: '#8B5CF6',
    skills: [
      { name: 'MySQL', icon: '🐬', level: 82 },
      { name: 'Firestore', icon: '🔥', level: 85 },
      { name: 'SQLite', icon: '🪨', level: 80 },
      { name: 'Redis', icon: '🔴', level: 70 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Tools',
    emoji: '☁️',
    color: '#F59E0B',
    skills: [
      { name: 'Git & GitHub', icon: '🐙', level: 90 },
      { name: 'AWS', icon: '☁️', level: 65 },
      { name: 'VS Code', icon: '💙', level: 95 },
      { name: 'Postman', icon: '🟠', level: 85 },
      { name: 'Google Apps Script', icon: '📊', level: 75 },
      { name: 'Supabase', icon: '💚', level: 78 },
    ],
  },
];

function SkillBar({ name, icon, level, color, delay }) {
  const [barRef, barInView] = useInView(0.3);
  return (
    <div ref={barRef} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: '#e5e7eb', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{icon}</span> {name}
        </span>
        <span style={{ fontSize: 12, color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>{level}%</span>
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 100, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: barInView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${color}, ${color}aa)`, borderRadius: 100 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('frontend');
  const [ref, inView] = useInView(0.1);

  const activeGroup = SKILL_GROUPS.find((g) => g.id === active);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'rgba(20,20,20,0.4)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Skills & Tech Stack</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Constantly learning and adding new tools to build better, faster, and smarter applications.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 48,
          }}
        >
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setActive(group.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 22px',
                borderRadius: 100,
                border: active === group.id ? `1px solid ${group.color}` : '1px solid rgba(255,255,255,0.08)',
                background: active === group.id ? `${group.color}18` : 'transparent',
                color: active === group.id ? group.color : '#6b7280',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <span>{group.emoji}</span>
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {activeGroup.skills.map((skill, i) => (
              <div key={skill.name} className="glass-card" style={{ padding: '24px 28px' }}>
                <SkillBar
                  {...skill}
                  color={activeGroup.color}
                  delay={i * 0.08}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* All-technologies pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 64, textAlign: 'center' }}
        >
          <p style={{ fontSize: 13, color: '#4b5563', marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Also familiar with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {['Telethon', 'OCR', 'EmailJS', 'Formspree', 'Vercel', 'Netlify', 'Figma', 'Telegram API', 'Google Sheets API'].map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
