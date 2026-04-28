import { useEffect, useRef } from 'react';
import t from '../locales/en.json';

// Foto territorio Rimini dalla galleria RAB
const EXP_IMGS = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80',
  'https://images.unsplash.com/photo-1635666591066-af0c94d69739?w=800&q=80',
];

export default function Experience() {
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
    <section id="experience" ref={ref} style={{ background: '#faf8f4', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 64, maxWidth: 560 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
            {t.experience.label}
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15 }}>
            {t.experience.titolo}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {t.experience.cards.map((card, i) => (
            <div key={i} className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 60, alignItems: 'center',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }} >
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={EXP_IMGS[i]} alt={card.titolo} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ direction: 'ltr', padding: '0 16px' }}>
                <div style={{ width: 32, height: 2, background: '#a0782a', marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 400, color: '#1a3a5c', marginBottom: 16, lineHeight: 1.2 }}>
                  {card.titolo}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4a3f35', lineHeight: 1.8, fontWeight: 300 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .reveal > div { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  );
}
