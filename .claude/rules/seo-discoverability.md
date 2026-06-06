# SEO & Discoverability

A portfolio that can't be found, and whose shared link looks like a broken stub, loses recruiters before the site's quality ever matters. This rule covers being **found** (search) and being **forwarded** (share cards). It is deliberately lean — this is a single-page portfolio, not a content site; the goal is correctness, not volume.

## Target

- Lighthouse **SEO category = 100** (it's cheap to hit on one page — treat anything less as a defect).
- Every share of the URL renders a rich card with title, description, and image.
- The page is indexable and the canonical URL is unambiguous.

## Required `<head>` (single source of truth)

| Tag | Rule |
|---|---|
| `<title>` | Name + role + niche, ≤ 60 chars. e.g. `Kim E. Bandeleon — Senior QA & Automation Engineer`. |
| `<meta name="description">` | One sentence, 120–155 chars, the value prop + one proof. Selectable, no buzzwords. |
| `<link rel="canonical">` | Absolute URL of the live site (the GitHub Pages domain). |
| `<meta name="robots">` | `index, follow`. Never ship `noindex` to production. |
| `<html lang>` | Set (`en`). Also an `[[a11y-targets]]` requirement. |
| `<meta name="viewport">` | Present and responsive. |

## Social share card (Open Graph + Twitter)

Recruiters forward the link in Slack, email, and ATS notes. The unfurl is the first impression for the *next* reader.

| Tag | Value |
|---|---|
| `og:title` | Same intent as `<title>` (can be slightly longer). |
| `og:description` | The meta description. |
| `og:type` | `profile`. |
| `og:url` | Canonical URL. |
| `og:image` | A **1200×630** PNG/JPG (< 1 MB, respects `[[perf-budget]]`). Name + role + one proof, on-brand per `[[design-tokens]]`. |
| `og:image:alt` | Describes the card image. |
| `twitter:card` | `summary_large_image`. |
| `twitter:title` / `twitter:description` / `twitter:image` | Mirror the OG values. |

The OG image must not be the 1.9 MB `UE-3d-seal.png` outlier flagged in `[[perf-budget]]` — generate a purpose-built, compressed card.

## Structured data (JSON-LD)

One `<script type="application/ld+json">` block in `<head>`, schema.org **`Person`** (optionally wrapped in `ProfilePage`):

- `name`, `jobTitle` (Senior Quality & Automation Engineer), `description`.
- `url` (canonical), `image`.
- `sameAs`: array of the social profile URLs already linked in the hero (LinkedIn, GitHub).
- `knowsAbout`: the niche keywords — test automation, AI-augmented QA, etc.

Validate against Google's Rich Results test. Keep it factually identical to the visible page (see `[[resume-parity]]`) — schema that contradicts the page is worse than no schema.

## Crawl surface

- **`robots.txt`** at root: allow all, point to the sitemap.
- **`sitemap.xml`** at root: the one canonical URL (and any future pages).
- No render-blocking JS required to read the core content — search engines and previews should get the value prop from HTML, not after JS runs.

## Common drift sources

- New hero copy lands but `<title>` / `og:title` never updated → stale share card.
- OG image edited in design but the file the meta tag points at is the old one (or missing → blank unfurl).
- JSON-LD `jobTitle` or stats drift from the visible hero / résumé.
- A staging `noindex` shipped to production by accident.
- Adding a second page without adding it to the sitemap.

## How to verify

- Lighthouse SEO category (mobile preset) — see `[[perf-budget]]` for the run harness; SEO rides the same Lighthouse run.
- Google Rich Results / Schema validator for the JSON-LD.
- Paste the URL into a LinkedIn/Slack draft (or an OG-preview tool) and eyeball the card.
- `[[seo-auditor]]` agent automates the static checks.

## Related

- `[[recruiter-scan]]` — being forwarded is step zero of the recruiter funnel.
- `[[perf-budget]]` — the OG image and any SEO JS live under the asset budget; SEO shares the Lighthouse run.
- `[[a11y-targets]]` — `lang`, semantic headings, and image `alt` are shared requirements.
- `[[design-tokens]]` — the share-card image must be on-brand.
- `[[resume-parity]]` — schema and meta must match the résumé and the visible page.
- `[[seo-auditor]]` — agent that runs this audit.
