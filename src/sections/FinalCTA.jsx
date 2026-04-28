import { useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/en.json';

const IMG_CTA = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/b2e26141-c675-4c74-8cc3-a3e7cd2d6ff2.jpeg';

export default function FinalCTA() {
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
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
      {/* Background image */}
      <img src={IMG_CTA} alt="Samilla Loft Rimini" loading="lazy" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
      }} />
      {/* Overlay navy */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,92,0.92) 0%, rgba(26,58,92,0.75) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: '100px 24px', textAlign: 'center' }}>
        <div className="reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: 20 }}>
            {t.finalCta.titolo}
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontWeight: 300, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            {t.finalCta.sottotitolo}
          </p>
          <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
            background: '#a0782a', color: '#ffffff', padding: '16px 48px',
            borderRadius: 4, fontWeight: 500, fontSize: '1rem',
            transition: 'background 0.2s', display: 'inline-block',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#8a6520'}
            onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
          >{t.finalCta.cta}</a>
        </div>
      </div>
    </section>
  );
}
