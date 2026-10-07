import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code2, Database, Cpu, Globe } from 'lucide-react';

const specializations = [
  { icon: <Code2 size={16} />, label: 'React & Modern JS' },
  { icon: <Database size={16} />, label: 'Node.js & Firebase' },
  { icon: <Cpu size={16} />, label: 'AI Integrations' },
  { icon: <Globe size={16} />, label: 'REST APIs & Design' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left – illustration / avatar */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Avatar container */}
              <div style={{
                width: 280,
                height: 280,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
                padding: 3,
                animation: 'morphing 8s ease-in-out infinite',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 100,
                }}>
                  👨‍💻
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  background: 'var(--surface)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: 12,
                  padding: '10px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#93c5fd',
                  boxShadow: '0 8px 32px rgba(59,130,246,0.15)',
                }}
              >
                ⚡ Full Stack
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  left: -20,
                  background: 'var(--surface)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: 12,
                  padding: '10px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#6ee7b7',
                  boxShadow: '0 8px 32px rgba(16,185,129,0.15)',
                }}
              >
                🎓 CS Graduate
              </motion.div>
            </div>
          </motion.div>

          {/* Right – text content */}
          <div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="section-label">About Me</div>
            </motion.div>

            <motion.h2
              className="section-title"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Passionate about building{' '}
              <span className="gradient-text-blue">meaningful software</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}
            >
              I'm a Computer Science graduate and Full Stack Developer passionate about crafting modern
              web applications that solve real-world problems. I love the intersection of clean code,
              great design, and smart engineering.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: 16, marginBottom: 40 }}
            >
              From building full-featured CRM systems to developing Telegram bots and AI integrations,
              I thrive on turning complex ideas into elegant, scalable solutions.
            </motion.p>

            {/* Specializations */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
            >
              {specializations.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#93c5fd',
                  }}
                >
                  {icon}
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes morphing {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
      `}</style>
    </section>
  );
}
