# Production Readiness Audit

Date: 2026-06-30

Scope: Bunniemonki website readiness for European and Brazil markets, with focus on routes, CTAs, Automation Scan conversion flow, content, i18n, SEO, analytics, privacy, and launch risks.

## Evidence

Accepted screenshots:

- `screenshots/01-desktop-pt-home-viewport.png` - PT home first viewport.
- `screenshots/02-desktop-pt-tourism-landing.png` - PT tourism landing page.
- `screenshots/03-desktop-pt-scan.png` - PT Automation Scan form.
- `screenshots/04-desktop-en-home.png` - EN home page.
- `screenshots/05-desktop-pt-privacy.png` - PT privacy policy page.
- `screenshots/08-desktop-pt-scan-success-viewport.png` - Automation Scan local success state.

Rejected evidence:

- Browser full-page captures for PT home and mobile produced mostly blank images, while DOM and viewport captures confirmed render. Those files were removed.
- Live mobile menu capture timed out twice in the in-app browser after applying a mobile viewport. Mobile menu wiring was reviewed statically in `src/components/site/site-header.tsx`, but it still needs a real-device or Playwright pass before launch.

## Verification Run

- Existing pending work was committed and pushed to `origin/main` as `6655711`.
- Production build initially returned 500 for `/pt` because `.next` had stale/inconsistent Turbopack artifacts. A clean rebuild fixed it.
- `npm run lint` passed.
- `npm test` passed: 15 files, 40 tests.
- `npm run build` passed: 65 static pages generated.
- `npm audit --audit-level=moderate` initially failed on `next`'s nested `postcss`; fixed with a package override to `postcss >= 8.5.10`.
- Internal route/link sample returned 200 for public PT/EN pages, assets, sitemap, robots, and legal pages. `/` returns 307 to `/en`.

## Flow Steps

1. Git readiness: healthy. Pending work was committed and pushed before audit.
2. Build/start sanity: healthy after clean `.next` rebuild. Watch for stale local build artifacts when using Turbopack.
3. PT home: healthy first viewport. CTAs point to Automation Scan and Solutions.
4. PT tourism landing: visually strong and CTA wiring works. Secondary CTA anchors to `#blueprint`.
5. PT Automation Scan entry: renders and validates required fields.
6. Automation Scan form: validation, step navigation, selects, back button, and final local success state work in desktop testing.
7. Automation Scan production behavior: not healthy for launch. Submission is client-only, creates a local `BM-*` reference, and explicitly says backend, notification, and email providers must be connected before launch.
8. EN home and locale switch: routes resolve and alternate locale links are wired.
9. Legal pages: routes render, but content is not production-ready because policies still use approval placeholders.
10. Mobile menu: source wiring looks coherent, but live mobile browser verification was blocked by capture tooling and must be completed before launch.

## P0 Launch Blockers

- Automation Scan does not send, persist, notify, or create a real lead. Add backend/API route or CRM integration, email/notification channel, spam protection, retention rules, and operational ownership.
- Legal/compliance content is not final. Privacy, terms, cookies, and accessibility pages still include `To be approved`/pre-launch wording.
- Brazil is not fully localized. `/pt` is primarily Portugal/European Portuguese, uses EUR ranges, and does not speak explicitly to LGPD/ANPD or Brazil terminology.

## P1 High Priority

- `html lang` is globally `en`; PT pages need correct language metadata.
- Sitemap lacks explicit `hreflang` alternates even though page metadata has alternates.
- Security headers are not configured in `next.config.ts` beyond `allowedDevOrigins`.
- Detail routes accept extra path segments for solutions, departments, blueprints, and insights. Invalid deep URLs can render valid pages.
- `form-unavailable` exists but is not wired as an operational fallback.
- Geo redirect only checks country and defaults to English; add `Accept-Language` handling or a user-visible locale choice.
- Scan form select labels are visually present but not programmatically associated with the combobox trigger.
- Mobile menu needs live device/automation verification.

## P2 Improvements

- Add stronger proof: case studies, anonymized examples, founder proof, or concrete before/after operations.
- Make offer packaging clearer: free/qualified scan, paid blueprint, expected timeline, deliverables, and investment ranges by market.
- Add richer Open Graph/Twitter images per key landing page.
- Localize 404/not-found handling.
- Consider `pt-BR` or market-aware copy, currency, and legal wording for campaigns in Brazil.

## Notes For Markets

Europe/Portugal: the site is directionally coherent, but legal approval, GDPR-facing details, security headers, and scan backend are required before public acquisition.

Brazil: current PT pages can serve as a first draft, but not a polished Brazil launch. Recommended changes: `pt-BR` or neutral PT copy, BRL investment ranges, LGPD/ANPD language, "sobrenome/equipe/faturamento/enviar" terminology, and explicit Brazil market examples.
