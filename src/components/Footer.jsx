import { contactInfo } from '../config/contact_info';
import { config } from '../config/site_config';
import t from '../locales/en.json';

export default function Footer() {
  const year = new Date().getFullYear();
  const navSections = [
    { label: t.nav.appartamento, href: '#apartment' },
    { label: t.nav.esperienza, href: '#experience' },
    { label: t.nav.comeFunziona, href: '#how-to-book' },
    { label: t.nav.posizione, href: '#location' },
    { label: t.nav.recensioni, href: '#reviews' },
  ];

  return (
    <footer style={{ background: '#1a3a5c', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 400, color: '#ffffff', marginBottom: 12 }}>
              {config.propertyName}
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              {t.footer.tagline}
            </p>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#a0782a', fontWeight: 500 }}>
              📸 Instagram
            </a>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 16 }}>
              {t.footer.nav_label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navSections.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 16 }}>
              {t.footer.contact_label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
              <span>{contactInfo.address}</span>
              <a href={`mailto:${contactInfo.email}`} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >{contactInfo.email}</a>
              <a href={`tel:${contactInfo.phone}`} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >{contactInfo.phone}</a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a0782a', marginBottom: 16 }}>
              Booking
            </div>
            <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', background: '#a0782a', color: '#ffffff',
              padding: '12px 24px', borderRadius: 4, fontSize: '0.875rem', fontWeight: 500, transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#8a6520'}
              onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
            >{t.nav.prenota}</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
            © {year} {config.propertyName} — Lucea Collection. {t.footer.legal}
          </span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="/privacy.html" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >{t.footer.privacy}</a>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
              <a href={config.langIT} style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >IT</a>
              {' | '}
              <span style={{ color: '#a0782a', fontWeight: 600 }}>EN</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
