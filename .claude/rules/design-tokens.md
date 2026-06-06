---
name: design-tokens
description: Single source of truth for color, spacing, type, motion, and radius tokens. Every visual change must reference these names — never hardcode raw values.
---

# Design Tokens

The portfolio's visual system. CSS custom properties live in `styles.css` `:root`. This file is the contract: change the value here-then-there together, never one without the other.

## Color

Dark theme, single palette. Brand accent is a calm blue (not neon) — credibility over flash.

| Token | Value | Use |
|---|---|---|
| `--bg-primary` | `#0f1117` | Page background |
| `--bg-secondary` | `#161920` | Section backgrounds, cards |
| `--bg-tertiary` | `#1c1f28` | Nested surfaces, inputs |
| `--bg-elevated` | `#222631` | Modals, popovers, terminal |
| `--border` | `#2a2e3a` | Default borders |
| `--border-subtle` | `#1f222c` | Hairline dividers |
| `--text-primary` | `#eef0f4` | Body + headings |
| `--text-secondary` | `#9ca3b0` | Supporting copy, labels |
| `--text-muted` | `#6b7280` | De-emphasized meta |
| `--accent` | `#4f8ff7` | CTAs, links, focus rings |
| `--accent-dim` | `rgba(79,143,247,0.1)` | Hover/selected tints |
| `--accent-hover` | `#6ba1f9` | Hover state on accent |

**Rules:**
- No raw hex outside this file. New hue → add a token first.
- Status color (`#ef4444`, `#eab308`, `#22c55e`) is allowed for the terminal traffic-light only. Anywhere else, define a semantic token: `--status-pass`, `--status-warn`, `--status-fail`.
- Logo color swatches in `data.js` are per-brand exceptions and stay as-is.

## Spacing

4px base, semantic names. Never use raw px for layout gaps.

| Token | Value | Typical use |
|---|---|---|
| `--spacing-xs` | `4px` | Icon-to-text gap |
| `--spacing-sm` | `8px` | Tight inline gap |
| `--spacing-md` | `12px` | Default gap |
| `--spacing-lg` | `16px` | Component padding |
| `--spacing-xl` | `24px` | Section row gap |
| `--spacing-2xl` | `32px` | Section padding |
| `--spacing-3xl` | `48px` | Hero / between major sections |

## Typography

| Token | Value | Use |
|---|---|---|
| `--font-family` | Inter (variable, system fallback) | All UI |
| `--mono` | SF Mono → fallbacks | Terminal, code, tabular data |

**Scale (no token yet — add when extending):**
- 14px / 1.5 — body small
- 16px / 1.6 — body
- 18px / 1.5 — lead
- 24px / 1.3 — h3
- 32px / 1.2 — h2
- 48px / 1.1 — h1

Use rem in new code: 0.875rem, 1rem, 1.125rem, 1.5rem, 2rem, 3rem.

**Weights:** 300 light (de-emphasized only), 400 body, 500 emphasis, 600 headings/buttons, 700 hero only.

## Radius

| Token | Value | Use |
|---|---|---|
| `--radius` | `8px` | Buttons, cards, inputs |
| `--radius-lg` | `12px` | Modals, hero panels, terminal |

Full-pill (`9999px`) only for badges/chips.

## Motion

No tokens yet. When adding:

| Duration | Use |
|---|---|
| 120ms | Hover, focus, instant feedback |
| 200ms | Reveal, fade-in, small position |
| 320ms | Section open/close, modal enter |
| 500ms+ | Hero / decorative only, never blocking interaction |

**Easing defaults:**
- Enter: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart)
- Exit: `cubic-bezier(0.7, 0, 0.84, 0)` (ease-in-quart)
- Default: `ease-out` is acceptable for ≤200ms

**Honor `prefers-reduced-motion`** — see [[a11y-targets]].

## Shadows

No tokens yet. Avoid drop shadows on a dark theme — use `border` + `--bg-elevated` for depth. If shadow is genuinely needed, define a token first.

## Z-index

No tokens yet. When adding:
- 1-10: stacking within a section
- 100: sticky headers
- 1000: modals/overlays
- 10000: toasts/notifications

## How to extend

1. Add the token to `:root` in `styles.css`.
2. Update this file in the same commit.
3. Reference the token everywhere — no hardcoded copies.

If a value is used 3+ times, it must become a token. Two-time uses can stay literal until proven repeated.
