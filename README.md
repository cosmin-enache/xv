# Anniversary Site

## Develop locally
1. Node 16+ (Node 18+ recommended).
2. Install deps (public npm):
   - 
3. Start dev server:
   -  then open the shown localhost URL.

If your default registry blocks packages, prefix commands with .

## Build
- 
- Output in .

## Netlify deploy
Option A — Drag & drop:
- Run , then drag the  folder into Netlify UI (Add new site → Deploy manually).

Option B — Connect repository:
- Build command: 
- Publish directory: 
- Ensure  exists (SPA redirects + build).

## Edit content
- Update :
  - : ISO string, e.g., 
  - : e.g., 
  - : array of entries: 
- Place images under  and reference them as .

## Fonts & vibe
- Headings: Fraunces
- Body: Inter
- Accents: Parisienne
- Palette: minimal cream/rose; subtle gradient in .

## Notes
- Time together auto-updates every minute using Luxon (timezone-safe).
- The hero shows decades, years, months, days computed stepwise.
