import { useEffect, useRef } from 'react';
import t from '../locales/en.json';

// Foto Rimini dalla galleria RAB
const IMG_LOCATION = 'https://images.unsplash.com/photo-1597231435495-ad3f09e6ca9d?w=1000&q=80';

export default function Location() {
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
    <section id="location" ref={ref} style={{
      background: '#ffffff',
      clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="split-grid">
          {/* Testo e distanze */}
          <div className="reveal">
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
              {t.location.label}
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15, marginBottom: 20 }}>
              {t.location.titolo}
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4a3f35', lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
              {t.location.desc}
            </p>

            {/* Distanze */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {t.location.distanze.map((d, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', borderBottom: '1px solid #f0ebe4',
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#1a1612', fontWeight: 400 }}>📍 {d.luogo}</span>
                  <span style={{
                    fontSize: '0.85rem', color: '#1a3a5c', fontWeight: 500,
                    background: '#e8f0f8', padding: '4px 12px', borderRadius: 20,
                  }}>{d.tempo}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: '16px 20px', background: '#f5f9ff', borderRadius: 8, borderLeft: '3px solid #1a3a5c' }}>
              <div style={{ fontSize: '0.8rem', color: '#9a8f84', marginBottom: 4 }}>Indirizzo</div>
              <div style={{ fontSize: '0.9rem', color: '#1a1612', fontWeight: 400 }}>{t.location.indirizzo}</div>
            </div>
          </div>

          {/* Immagine */}
          <div className="reveal" style={{ transitionDelay: '0.2s', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5' }}>
            <img src={IMG_LOCATION} alt="Rimini riviera" loading="lazy" style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
