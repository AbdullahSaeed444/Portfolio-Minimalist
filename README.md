# Portfolio

Next.js App Router portfolio for a software engineer and data/business analyst. Personal details and case-study content are intentionally marked `TODO: real content` until verified information is available.

## Development

```bash
npm install
npm run dev
```

Run the quality checks before deploying:

```bash
npm run lint
npm run build
```

## Content

- Add or edit case studies in `src/data/work.ts`. Each case study includes Problem, What I built, Stack, Result, and Link fields.
- Replace the marked placeholders in `src/app/about/page.tsx`, `src/app/contact/page.tsx`, and the shared site header/footer.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed origin. See `.env.example`.
- The local Instrument Sans variable font and its OFL license are in `public/fonts/`.
