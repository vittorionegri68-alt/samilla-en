import { useEffect, useRef } from 'react';
import { contactInfo } from '../config/contact_info';
import t from '../locales/en.json';

export default function AboutHost() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="host" ref={ref} style={{ background: '#faf8f4', padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="reveal">
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
            {t.host.label}
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15, marginBottom: 20 }}>
            {t.host.nome}
          </h2>

          {/* Badge superhost */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff8f0', border: '1px solid #e3dcd2', borderRadius: 20,
            padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ color: '#a0782a', fontSize: '0.9rem' }}>⭐</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#a0782a' }}>{t.host.badge}</span>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#4a3f35', lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
            {t.host.bio}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 32, marginBottom: 36, flexWrap: 'wrap' }}>
            {t.host.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '1.8rem', color: '#1a3a5c', lineHeight: 1 }}>{stat.valore}</div>
                <div style={{ fontSize: '0.75rem', color: '#9a8f84', marginTop: 4 }}>{stat.etichetta}</div>
              </div>
            ))}
          </div>

          {/* Contatti */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`mailto:${contactInfo.email}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid #e3dcd2', borderRadius: 4, padding: '10px 20px',
              fontSize: '0.875rem', color: '#1a1612', fontWeight: 400,
              background: '#ffffff', transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#a0782a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#e3dcd2'}
            >✉️ {contactInfo.email}</a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid #e3dcd2', borderRadius: 4, padding: '10px 20px',
              fontSize: '0.875rem', color: '#1a1612', fontWeight: 400,
              background: '#ffffff', transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#a0782a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#e3dcd2'}
            >📸 Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
