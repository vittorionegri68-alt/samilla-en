// ─────────────────────────────────────────────────────────────────────────────
// sections/FAQ.jsx — Frequently Asked Questions, Samilla Loft (English)
//
// Single file: data (qanda array) + React component.
// Style: uses the site's native CSS variables (index.css) — Cormorant
// Garamond / DM Sans, gold on navy, design Style 13. No hardcoded colours.
//
// Must stay identical in meaning to the Italian version, the FAQPage schema,
// the noscript block in index.html, and the N8N GEO/AEO analysis workflow.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';

const qanda = [
  {
    id: "vista-mare-rimini",
    domanda: "Does Samilla Loft have a sea view?",
    risposta: "Yes, the loft has a private terrace overlooking Rimini's main promenade with a sea view. It's the perfect spot for a morning coffee while watching the promenade and the sea in the distance.",
  },
  {
    id: "animali-ammessi",
    domanda: "Does Samilla Loft accept pets?",
    risposta: "Yes, Samilla Loft accepts pets. The central location on Viale Vespucci makes for comfortable seaside walks even with a dog.",
  },
  {
    id: "smart-working-rimini",
    domanda: "Is Samilla Loft suitable for remote work in Rimini?",
    risposta: "Yes. The loft offers WiFi, a spacious living area with a table and air conditioning, ideal for working comfortably during the day and reaching the beach and bars on foot during breaks.",
  },
  {
    id: "affitto-breve-vicino-mare-rimini",
    domanda: "Where to find a short-term rental near the sea in Rimini?",
    risposta: "Samilla Loft is located on Viale Vespucci, in the heart of Rimini's nightlife district, just a few steps from the beach. A convenient option for enjoying Rimini's seaside without giving up the comforts of a modern loft.",
  },
  {
    id: "coppie-piccoli-gruppi",
    domanda: "Is Samilla Loft suitable for couples or small groups of friends?",
    risposta: "Yes, the loft accommodates up to 3 guests between the double bed and an additional single bed. It works well for both couples and small groups of friends looking for a convenient base near the sea.",
  },
  {
    id: "bici-mobilita-rimini",
    domanda: "Does Samilla Loft offer ways to get around Rimini without a car?",
    risposta: "Yes, 2 bicycles are included free of charge to explore Rimini independently. The central location also makes it easy to reach the beach, restaurants, shops and the train station on foot.",
  },
  {
    id: "movida-riminese",
    domanda: "Is Samilla Loft close to Rimini's nightlife?",
    risposta: "Yes, it's located right on Viale Vespucci, in the heart of Rimini's nightlife district, with bars, clubs and arcades right downstairs. An ideal spot for enjoying Rimini's evenings without needing to travel far.",
  },
  {
    id: "terrazzo-privato",
    domanda: "Does Samilla Loft have a private terrace or outdoor space?",
    risposta: "Yes, the loft has a small private terrace overlooking the promenade and the surrounding bars, perfect for a relaxing moment outdoors during your stay.",
  },
  {
    id: "viaggio-lavoro-rimini",
    domanda: "Is Samilla Loft a good choice for a business trip to Rimini?",
    risposta: "Yes. Its proximity to the Rimini Exhibition Centre (5 km) and the Palacongressi (3 km), together with WiFi and carefully designed interiors, make the loft a convenient base for business or trade fair travel in Rimini.",
  },
  {
    id: "dove-dormire-rimini-mare",
    domanda: "Where to stay in Rimini near the sea and the centre?",
    risposta: "Samilla Loft is the ideal solution: overlooking the main promenade with a sea view, just a few metres from the beach and about 2 km from the historic centre and train station, both reachable on foot or by bus.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
          >
            Frequently Asked Questions
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)',
              fontWeight: 500,
              color: 'var(--text)',
              marginTop: '0.7rem',
            }}
          >
            Everything you need to know<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              about Samilla Loft
            </span>
          </h2>
        </div>

        <div>
          {qanda.map((item, i) => (
            <div
              key={item.id}
              style={{
                borderBottom: '1px solid var(--border)',
              }}
            >
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  padding: '1.4rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.08rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {item.domanda}
                </span>
                <span
                  style={{
                    color: 'var(--gold)',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    transform: open === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    color: 'var(--text-mid)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    paddingBottom: '1.5rem',
                    maxWidth: 660,
                  }}
                >
                  {item.risposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
