import { useEffect, useRef } from 'react';
import t from '../locales/en.json';

export default function HowItWorks() {
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
    <section id="how-to-book" ref={ref} style={{
      background: '#ffffff',
      clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
            {t.howItWorks.label}
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15 }}>
            {t.howItWorks.titolo}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms`, textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a3a5c, #2a5a8c)',
                color: '#ffffff', fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem', fontWeight: 400,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>{step.num}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 500, color: '#1a3a5c', marginBottom: 12 }}>
                {step.titolo}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#4a3f35', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
