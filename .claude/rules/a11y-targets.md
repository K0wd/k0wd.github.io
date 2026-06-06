---
name: a11y-targets
description: WCAG 2.2 AA targets and concrete checks for every PR. Used by a11y-auditor agent and /a11y-check skill.
---

# Accessibility Targets

Target: **WCAG 2.2 Level AA**, no known violations. The portfolio markets a senior QA engineer — failing accessibility is a credibility leak before anyone reads a word.

## Non-negotiables

### Contrast

| Surface | Min ratio | How to verify |
|---|---|---|
| Body text on background | 4.5 : 1 | Chrome DevTools color picker, or axe |
| Large text (≥18pt or ≥14pt bold) | 3 : 1 | Same |
| UI components & graphics | 3 : 1 | Buttons, focus rings, form borders |
| Disabled elements | exempt | But should still be distinguishable |

Current palette (from [[design-tokens]]):
- `--text-primary` on `--bg-primary` → verify ≥ 7:1 (AAA — we have headroom)
- `--text-secondary` on `--bg-primary` → must stay ≥ 4.5:1
- `--text-muted` on `--bg-primary` → may dip toward 3:1; use only for non-essential meta

Any token change that touches color requires re-running contrast.

### Focus visibility

- Every interactive element must have a visible focus state. `outline: none` is allowed **only** when paired with a custom focus ring of equal or better visibility.
- Focus ring uses `--accent` at full opacity with 2px width minimum.
- Focus order matches reading order. Test with Tab/Shift+Tab through the page.
- Skip-link to `<main>` for keyboard users. Visually hidden until focused.

### Keyboard operation

Every interactive thing works without a mouse:
- Modal: Esc closes, Tab cycles inside (focus trap), focus returns to trigger on close.
- Collapsibles (`<details>` / custom toggles): Enter and Space activate.
- Carousels / work-nav: ← and → keyboard arrows in addition to buttons.
- Form: Enter submits, all fields reachable by Tab.

### Semantics

- One `<h1>` per page.
- Heading levels don't skip (h1 → h2 → h3, not h1 → h3).
- Landmarks present: `<header>`, `<main>`, `<footer>`, `<nav>` where applicable.
- Lists are lists (`<ul>` / `<ol>`), not styled divs.
- Buttons are `<button>`, links are `<a>` — `<a>` requires `href`, never `href="#"` for buttons.
- Icons inside interactive elements have `aria-label` or visually-hidden text.
- Decorative images: `alt=""`. Meaningful images: descriptive `alt`.
- SVGs that convey meaning: `<title>` element or `aria-label` on the SVG.

### Forms

- Every input has a `<label>` (associated by `for` / `id`, or wrapping).
- Required fields: native `required` attribute; visible indicator (asterisk or "required").
- Error messages tied to fields with `aria-describedby`.
- Don't rely on color alone — use icons + text for error states.

### Motion & reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- No parallax / auto-playing motion that the user didn't trigger.
- Hero terminal animation must stop or short-circuit when reduced motion is on.
- No flashing > 3 Hz.

### Touch targets

- Minimum 44x44 CSS pixels for any tap target (WCAG 2.5.5).
- Adequate spacing between targets — no accidental taps.

## Page-specific checks

### Hero
- One h1 only — "Kim E. Bandeleon".
- Tagline is a `<p>`, not a heading.
- Social icons have `aria-label`.
- Stat tiles ("15+ Years", "10+ Companies") are not interactive — they should not have hover/focus styles that suggest they are.

### AI Framework Showcase (`#testgenerator`)
- Expand/close buttons have `aria-expanded` and `aria-controls`.
- The collapsed state communicates to screen readers that content is hidden.
- Pipeline step states (pass/fail/idle) must use icon + color + label, not color alone.

### Work / Projects lists
- Logo color tiles inside list items must not be the only signal of company identity — company name text is required.
- Logo initials are decorative; the `<a>` wrapping each item carries the accessible name.

### Contact modal
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at the title.
- Focus moves to the first input on open.
- Esc and overlay-click close it.
- Page scroll locked while open.

## Audit toolchain

| Tool | What it catches |
|---|---|
| **axe-core** (via @axe-core/playwright) | Programmatic WCAG checks |
| **Lighthouse** (a11y category) | Subset of axe + manual hints |
| **Manual keyboard pass** | Focus order, trap, skip-link |
| **VoiceOver / NVDA** | Real screen reader on hero + modal |
| **Reduced motion toggle** | macOS → System Settings → Accessibility → Display |

A passing `/a11y-check` requires: zero axe violations, Lighthouse a11y ≥ 95, manual keyboard pass.

## Common drift sources

- `outline: none` added without a replacement focus state.
- New SVG icon without `aria-label` on its parent.
- Modal added without focus trap.
- Color used as the only state signal (red border = error, with no icon/text).
- New section added without a heading or with skipped levels.

## Related

- [[design-tokens]] — color tokens must satisfy contrast targets here.
- [[a11y-auditor]] — agent that runs this audit.
- [[perf-budget]] — performance check ships with a11y because both run in Lighthouse.
