import { useState, useEffect, useRef } from 'react';
import { config } from '../config/site_config';
import t from '../locales/en.json';

const IMAGES = [
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/2916e3d6-8aa4-4503-b605-29f860066e90.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/ddd6f64d-2d02-402d-bd93-faf1cb7d4eac.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/931c2f12-4b44-417c-9d6e-a1410698f8bc.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/937d7b56-8521-4179-8bf7-9804b20703a3.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/b2e26141-c675-4c74-8cc3-a3e7cd2d6ff2.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/73dedf61-67ae-4212-9c77-bb6b020d6906.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/4e1426fc-1b84-41db-9ae6-9d036efa0911.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/f75f38f8-2fd8-472e-8862-3f24879b91fd.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/8f48eef0-6ccd-48c3-be23-e4b48fa03852.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/188bafa1-7d1b-46bf-8f59-b9a4e6d99fb1.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/5f89d3fd-3be0-4aac-8571-9475cefffaef.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1618206280550914997/original/aca2a79e-39a2-4c4a-ac0d-740076205571.jpeg',
];

export default function Apartment() {
  const [active, setActive] = useState(0);
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
    <section id="apartment" ref={ref} style={{ background: '#faf8f4', padding: '100px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 48, maxWidth: 640 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 12 }}>
            {t.apartment.label}
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#1a3a5c', lineHeight: 1.15, marginBottom: 16 }}>
            {t.apartment.titolo}
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#4a3f35', lineHeight: 1.8, fontWeight: 300 }}>
            {t.apartment.descrizione}
          </p>
        </div>

        {/* Quick stats */}
        <div className="reveal" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
          {[
            { icon: '👥', val: t.apartment.ospiti },
            { icon: '🛏️', val: t.apartment.camere },
            { icon: '🚿', val: t.apartment.bagni },
            { icon: '🏠', val: t.apartment.tipo },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#ffffff', border: '1px solid #e3dcd2',
              borderRadius: 8, padding: '12px 20px', fontSize: '0.875rem', color: '#1a1612', fontWeight: 400,
            }}>
              <span>{s.icon}</span> {s.val}
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="reveal">
          <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
            <img src={IMAGES[active]} alt={`Samilla Loft - foto ${active + 1}`} loading="lazy" style={{
              width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s',
            }} />
            <button onClick={() => setActive(p => (p - 1 + IMAGES.length) % IMAGES.length)} style={{
              position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
              width: 44, height: 44, cursor: 'pointer', fontSize: '1.1rem',
            }}>‹</button>
            <button onClick={() => setActive(p => (p + 1) % IMAGES.length)} style={{
              position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
              width: 44, height: 44, cursor: 'pointer', fontSize: '1.1rem',
            }}>›</button>
            <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '0.8rem', padding: '4px 12px', borderRadius: 20 }}>
              {active + 1} / {IMAGES.length}
            </div>
          </div>
          {/* Thumbnails */}
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
            {IMAGES.map((img, i) => (
              <img key={i} src={img} alt={`thumb ${i+1}`} loading="lazy" onClick={() => setActive(i)}
                style={{
                  width: 80, height: 56, objectFit: 'cover', borderRadius: 6, cursor: 'pointer', flexShrink: 0,
                  border: i === active ? '2px solid #a0782a' : '2px solid transparent',
                  opacity: i === active ? 1 : 0.7, transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Amenities su navy — clip-path onda */}
      <div style={{
        background: '#1a3a5c',
        clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        marginTop: 64, padding: '100px 24px 80px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h3 className="reveal" style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 300, color: '#ffffff', marginBottom: 48, textAlign: 'center',
          }}>{t.amenities.titolo}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {t.amenities.items.map((item, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10, padding: '24px 20px',
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 500, color: '#ffffff', fontSize: '0.9rem', marginBottom: 6 }}>{item.titolo}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
              background: '#a0782a', color: '#fff', padding: '14px 36px',
              borderRadius: 4, fontWeight: 500, fontSize: '0.95rem', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#8a6520'}
              onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
            >{t.nav.prenota}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
