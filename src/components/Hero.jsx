import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const TYPING_PHRASES = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'AI Integration Builder',
  'Computer Science Graduate',
];

function useTypingEffect(phrases) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && text === phrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      } else {
        setText((t) => isDeleting ? t.slice(0, -1) : phrase.slice(0, t.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, phraseIdx, phrases]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_PHRASES);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Animated grid */}
      <div className="grid-bg" />

      {/* Gradient blobs */}
      <div className="blob blob-blue" style={{ top: '-150px', left: '-150px' }} />
      <div className="blob blob-emerald" style={{ bottom: '-100px', right: '-100px' }} />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)',
          top: '40%',
          left: '60%',
          animationDelay: '-2s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              color: '#93c5fd',
              marginBottom: 32,
            }}
          >
            <span style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 8px #10B981',
              animation: 'pulse 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            Available for opportunities
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: 20,
            }}>
              <span style={{ color: '#fff' }}>Hi, I'm </span>
              <span className="gradient-text">Yonatan</span>
              <span style={{ color: '#fff' }}> 👋</span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginBottom: 24 }}
          >
            <div style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              color: '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              minHeight: 48,
            }}>
              <span>{typedText}</span>
              <span className="typing-cursor" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: 18,
              color: '#6b7280',
              lineHeight: 1.8,
              maxWidth: 580,
              marginBottom: 48,
            }}
          >
            Computer Science graduate building{' '}
            <span style={{ color: '#e5e7eb' }}>scalable web applications</span> and{' '}
            <span style={{ color: '#e5e7eb' }}>AI-powered solutions</span> that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 64 }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <ExternalLink size={16} /> View Projects
            </a>
            <a href="/cv.pdf" download className="btn-outline">
              <ArrowDown size={16} /> Download CV
            </a>
            <div style={{ display: 'flex', gap: 12, marginLeft: 8 }}>
              <a href="https://github.com/yonatane" target="_blank" rel="noreferrer" style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/yonatane" target="_blank" rel="noreferrer" style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                <Linkedin size={22} />
              </a>
              <a href="mailto:yonatan@example.com" style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}
          >
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '10+', label: 'Technologies' },
              { value: 'CS', label: 'Graduate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{value}</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 12, color: '#4b5563', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{
          width: 1,
          height: 48,
          background: 'linear-gradient(to bottom, #4b5563, transparent)',
        }} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
