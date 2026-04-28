import { useState, useEffect } from 'react';
import { config } from '../config/site_config';
import t from '../locales/en.json';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.appartamento, href: '#apartment' },
    { label: t.nav.esperienza, href: '#experience' },
    { label: t.nav.comeFunziona, href: '#how-to-book' },
    { label: t.nav.recensioni, href: '#reviews' },
    { label: t.nav.posizione, href: '#location' },
  ];

  const navBg = scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.15)';
  const navBlur = scrolled ? 'blur(16px)' : 'blur(8px)';
  const navBorder = scrolled ? '1px solid #e3dcd2' : '1px solid rgba(255,255,255,0.2)';
  const linkColor = scrolled ? '#4a3f35' : 'rgba(255,255,255,0.92)';
  const logoColor = scrolled ? '#1a3a5c' : '#ffffff';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg, backdropFilter: navBlur,
      borderBottom: navBorder,
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 400,
          fontSize: '1.15rem', color: logoColor, letterSpacing: '0.02em',
          transition: 'color 0.4s',
        }}>{config.propertyName}</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.875rem',
              color: linkColor, transition: 'color 0.3s', letterSpacing: '0.02em',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#a0782a'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor}
            >{l.label}</a>
          ))}
          <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
            background: '#a0782a', color: '#fff', fontWeight: 500,
            fontSize: '0.875rem', padding: '9px 22px', borderRadius: 4,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1a3a5c'}
            onMouseLeave={e => e.currentTarget.style.background = '#a0782a'}
          >{t.nav.prenota}</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 4 }}>
            <a href={config.langIT} style={{ fontWeight: 400, fontSize: '0.8rem', color: linkColor, transition: 'color 0.3s' }}>IT</a>
            <span style={{ color: scrolled ? '#ccc' : 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>|</span>
            <span style={{ fontWeight: 600, fontSize: '0.8rem', color: '#a0782a' }}>EN</span>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          color: logoColor, fontSize: '1.4rem',
        }} className="mobile-menu-btn" aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: '#ffffff', padding: '16px 24px 28px',
          borderTop: '1px solid #e3dcd2', display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontWeight: 400, color: '#4a3f35', fontSize: '1rem' }}>
              {l.label}
            </a>
          ))}
          <a href={config.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{
            background: '#a0782a', color: '#fff', padding: '12px', borderRadius: 4,
            textAlign: 'center', fontWeight: 500,
          }}>{t.nav.prenota}</a>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={config.langIT} style={{ fontWeight: 400, fontSize: '0.85rem', color: '#9a8f84' }}>IT</a>
            <span style={{ color: '#ccc' }}>|</span>
            <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#a0782a' }}>EN</span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
