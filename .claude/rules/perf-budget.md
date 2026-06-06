---
name: perf-budget
description: Concrete performance budget — Core Web Vitals targets, asset budgets, render budget. A QA engineer's portfolio that's slow is a contradiction in terms.
---

# Performance Budget

Hard numbers. Crossing them is a regression and blocks the change.

## Core Web Vitals (75th percentile, mobile-throttled)

| Metric | Target | Stretch |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.0s | ≤ 1.5s |
| INP (Interaction to Next Paint) | ≤ 200ms | ≤ 100ms |
| CLS (Cumulative Layout Shift) | ≤ 0.05 | ≤ 0.01 |
| FCP (First Contentful Paint) | ≤ 1.5s | ≤ 1.0s |
| TBT (Total Blocking Time) | ≤ 200ms | ≤ 100ms |
| TTI (Time to Interactive) | ≤ 3.0s | ≤ 2.0s |

Lighthouse Performance score (mobile, simulated throttling): **≥ 90**.

## Asset budget (per page, gzipped)

| Asset class | Budget | Notes |
|---|---|---|
| HTML | ≤ 30 KB | Currently ~13 KB raw — fine |
| CSS | ≤ 30 KB | Currently 35 KB raw — minify on deploy or trim |
| JS | ≤ 80 KB | Currently script.js 30 KB + data.js 9.4 KB — fine; budget covers a future Web3Forms add or analytics |
| Fonts (woff2) | ≤ 120 KB | Inter subset, 1-2 weights preloaded |
| Hero/above-fold images | ≤ 200 KB | Total |
| Below-fold images | lazy-loaded | `loading="lazy"` on every below-fold `<img>` |
| **Total above-the-fold transfer** | **≤ 500 KB** | Hard ceiling |
| Total page transfer | ≤ 1.5 MB | Soft ceiling |

### Current outlier

`UE-3d-seal.png` is 1.9 MB. Decisions:
- If it's below the fold and lazy-loaded, that's tolerable but still wasteful.
- Convert to WebP or AVIF + appropriate `<picture>` fallback — typically a 70-90% size cut.
- Or replace with a smaller, semantically equivalent asset.

This is a real, fixable item — flag in any audit.

## Network requests

- Above the fold: ≤ 10 requests.
- Total: ≤ 30 requests.
- No render-blocking third-party scripts above the fold.
- No more than 1 web-font origin.

## Runtime budget

- No animation or scroll handler runs > 16ms (one frame at 60fps).
- No JS task > 50ms on main thread.
- No layout thrash (read-then-write loops on DOM).
- Hero terminal animation pauses or short-circuits when not in viewport.

## Font loading

- `font-display: swap` or `optional` — never `block`.
- Preconnect to Google Fonts (already in place).
- Self-host Inter when convenient — eliminates the Google Fonts CDN round-trip and ad-blocker breakage.

## Image rules

- Every `<img>` has explicit `width` and `height` attributes — prevents CLS.
- Below-fold images: `loading="lazy"` + `decoding="async"`.
- Hero / LCP image: `fetchpriority="high"` and preloaded if separate from HTML.
- Prefer SVG for logos/icons (already doing this for SVG icons inline — keep it up).
- Raster images served as WebP or AVIF where the browser supports it.

## CSS rules

- No `@import` in production CSS — flattens the critical request chain.
- Critical above-the-fold styles can be inlined if FCP becomes a bottleneck (premature for now).
- Avoid universal selectors (`*`) in expensive rules (transitions on everything).

## JS rules

- No render-blocking JS in `<head>` — keep scripts at end of `<body>` (already correct).
- No unminified production JS.
- No `eval`, no `new Function`.
- Event listeners on individual list items → delegate to the parent list.

## Third-party budget

- Web3Forms: 1 request on form submit, doesn't block render. Fine.
- Google Fonts: 1 connection. Self-host if it ever becomes a CWV gate.
- Analytics: not currently present. If added, must be deferred and not block render.

## Lighthouse mobile CI baseline

Every release runs:
- 3 Lighthouse runs (median of 3 for noise).
- Mobile preset, Moto G Power CPU throttle, Slow 4G network throttle.
- Compared against `lighthouse-baseline.json` checked in.
- Regression > 5 points on Performance → block.

## Common regression sources

- Adding a hero image without preload / sized attributes.
- New web font weight pulled in for one heading.
- Embedding a third-party widget above the fold.
- Animation that runs continuously off-screen.
- Hero terminal typing-loop that doesn't pause when not visible.

## Related

- [[design-tokens]] — animation durations affect TBT/INP; respect the motion scale.
- [[a11y-targets]] — Lighthouse runs both; treat them as one audit.
- [[perf-auditor]] — agent that runs this check.
