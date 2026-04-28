import { useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/en.json';

const IMG_HERO = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/2916e3d6-8aa4-4503-b605-29f860066e90.jpeg';
const IMG_HERO2 = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/ddd6f64d-2d02-402d-bd93-faf1cb7d4eac.jpeg';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="split-grid">
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
        background: '#ffffff',
      }}>
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <span style={{
            display: 'inline-block', background: '#e8f0f8', color: '#1a3a5c',
            fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '6px 14px', borderRadius: 20, marginBottom: 28,
          }}>{t.hero.badge}</span>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 300,
            fontSize: 'clamp(2.6rem, 5vw, 4rem)',
            color: '#1a3a5c', lineHeight: 1.1, marginBottom: 24,
            letterSpacing: '-0.02em', whiteSpace: 'pre-line',
          }}>{t.hero.titolo}</h1>

          <p style={{
            fontSize: '1rem', fontWeight: 300, color: '#4a3f35',
            lineHeight: 1.75, maxWidth: 440, marginBottom: 40,
          }}>{t.hero.sottotitolo}</p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
              background: '#a0782a', color: '#ffffff', padding: '14px 32px',
              borderRadius: 4, fontWeight: 500, fontSize: '0.95rem', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
              onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
            >{t.hero.cta_primary}</a>
            <a href="#apartment" style={{
              border: '1px solid #a0782a', color: '#a0782a', padding: '14px 32px',
              borderRadius: 4, fontWeight: 400, fontSize: '0.95rem', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a0782a'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#a0782a'; }}
            >{t.hero.cta_secondary}</a>
          </div>

          <div style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid #e3dcd2' }}>
            {[
              { val: t.hero.stat1_val, label: t.hero.stat1_label },
              { val: t.hero.stat2_val, label: t.hero.stat2_label },
              { val: t.hero.stat3_val, label: t.hero.stat3_label },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 500, color: '#1a3a5c', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: '#9a8f84', marginTop: 4, fontWeight: 400, letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }} className="reveal">
        <img src={IMG_HERO} alt="Samilla Loft Rimini — sea view" loading="eager" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', bottom: 32, left: 32,
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
          borderRadius: 8, padding: '16px 22px',
          display: 'flex', alignItems: 'center', gap: 12,
          boxShadow: '0 4px 24px rgba(26,58,92,0.15)',
        }}>
          <img src={IMG_HERO2} alt="Samilla Loft interior" style={{ width: 52, height: 52, borderRadius: 6, objectFit: 'cover' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1a1612' }}>Sea view included</div>
            <div style={{ fontSize: '0.75rem', color: '#9a8f84', marginTop: 2 }}>Adriatic, 2 minutes away</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; }
          .split-grid > div:last-child { min-height: 60vw !important; }
        }
      `}</style>
    </section>
  );
}
