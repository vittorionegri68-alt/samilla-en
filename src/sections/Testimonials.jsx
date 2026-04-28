import { useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/en.json';

export default function Testimonials() {
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
    <section id="reviews" ref={ref} style={{ background: '#faf8f4', padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal">
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
            {t.testimonials.label}
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15, marginBottom: 24 }}>
            {t.testimonials.titolo}
          </h2>

          {/* Rating Airbnb */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#ffffff', border: '1px solid #e3dcd2', borderRadius: 12,
            padding: '20px 36px', marginBottom: 32,
          }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 500, color: '#1a3a5c', lineHeight: 1 }}>
              {t.testimonials.rating_val}
            </div>
            <div>
              <div style={{ color: '#a0782a', fontSize: '1.1rem', letterSpacing: 2, marginBottom: 2 }}>★★★★★</div>
              <div style={{ fontSize: '0.75rem', color: '#9a8f84', fontWeight: 400 }}>{t.testimonials.rating_label}</div>
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: '#4a3f35', lineHeight: 1.8, fontWeight: 300, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            {t.testimonials.sottotitolo}
          </p>

          <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
            background: '#a0782a', color: '#fff', padding: '14px 32px',
            borderRadius: 4, fontWeight: 500, fontSize: '0.95rem', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
            onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
          >{t.nav.prenota}</a>
        </div>
      </div>
    </section>
  );
}
