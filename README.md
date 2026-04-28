# Samilla Loft — Sito Web

Sito React/Vite per Samilla Loft, Rimini. Design Style 13 — Azure Lido.
Gestito da Lucea Collection per Romagna Affitti Brevi.

## Struttura

```
samilla-loft-it/   IT — samilla.romagna-affitti-brevi.it
samilla-loft-en/   EN — samilla.romagna-short-stay.com
```

## Avvio locale

```bash
cd samilla-loft-it   # oppure samilla-loft-en
npm install
npm run dev
```

## Deploy su Vercel

1. Creare repo GitHub: `samilla-loft-it` e `samilla-loft-en`
2. Fare push della rispettiva cartella
3. Collegare a Vercel con auto-deploy
4. Configurare dominio personalizzato:
   - IT: `samilla.romagna-affitti-brevi.it`
   - EN: `samilla.romagna-short-stay.com`

## Dopo il deploy

- Sostituire `G-TEST123` con il GA4 ID reale in `src/config/site_config.js`
- Aggiornare `langIT` e `langEN` in `site_config.js` se i domini cambiano
- Aggiungere `privacy.html` in `public/` (file condiviso RAB)
- Aggiungere CIN in `index.html` schema LodgingBusiness quando disponibile
- Aggiornare `strutture-Rab.js` con i dati di `struttura-samilla.js`
- Rich Results Test: https://search.google.com/test/rich-results

## Note tecniche

- Style 13 Azure Lido: navy #1a3a5c, gold #a0782a, clip-path onda tra sezioni
- Nessuna foto host (struttura nuova, Anna e Cesare come host)
- Sezione Testimonials: "struttura nuova" — aggiornare quando arrivano le prime recensioni
- Foto appartamento: 12 immagini da Airbnb CDN

## Romagna Affitti Brevi

- IT directory: https://www.romagna-affitti-brevi.it/
- EN directory: https://www.romagna-short-stay.com/
- Contatti: luceacollection@gmail.com
