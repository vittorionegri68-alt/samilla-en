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
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#a0782a', marginBottom: 12,
          }}>
            {t.testimonials.label}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 300, color: '#1a3a5c',
            lineHeight: 1.15, marginBottom: 24,
          }}>
            {t.testimonials.titolo}
          </h2>
          {/* Box rating */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#ffffff', border: '1px solid #e3dcd2',
            borderRadius: 12, padding: '20px 36px',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '2.8rem',
              fontWeight: 500, color: '#1a3a5c', lineHeight: 1,
            }}>
              {t.testimonials.rating_val}
            </div>
            <div>
              <div style={{ color: '#a0782a', fontSize: '1.1rem', letterSpacing: 2, marginBottom: 2 }}>
                ★★★★★
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9a8f84', fontWeight: 400 }}>
                {t.testimonials.rating_label}
              </div>
            </div>
          </div>
        </div>

        {/* Card recensioni */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>
          {t.testimonials.items.map((r, i) => (
            <div key={i} style={{
              background: '#ffffff',
              border: '1px solid #e3dcd2',
              borderRadius: 12,
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              {/* Stelle */}
              <div style={{ color: '#a0782a', fontSize: '1rem', letterSpacing: 2 }}>
                {'★'.repeat(r.stelle)}
              </div>
              {/* Testo */}
              <p style={{
                fontSize: '0.95rem',
                color: '#4a3f35',
                lineHeight: 1.75,
                fontWeight: 300,
                flex: 1,
                margin: 0,
              }}>
                {r.testo}
              </p>
              {/* Autore */}
              <div style={{
                borderTop: '1px solid #e3dcd2',
                paddingTop: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#1a3a5c',
                }}>
                  {r.nome}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#9a8f84', fontWeight: 400 }}>
                  {r.luogo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <a
            href={config.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#a0782a', color: '#fff',
              padding: '14px 32px', borderRadius: 4,
              fontWeight: 500, fontSize: '0.95rem',
              transition: 'background 0.2s',
              display: 'inline-block',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
            onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
          >
            {t.nav.prenota}
          </a>
        </div>

      </div>
    </section>
  );
}
