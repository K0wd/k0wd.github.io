---
name: a11y-check
description: Run a full accessibility audit on the portfolio — static review, axe-core dynamic scan via puppeteer, keyboard pass, reduced-motion case, contrast spot-check. Invoke with /a11y-check, "audit accessibility", "check a11y", or "WCAG check".
---

# /a11y-check

A WCAG 2.2 AA audit of the portfolio. Read-only — produces a fix list, doesn't edit.

## Workflow

### 1. Static review

Read `index.html` and any affected CSS/JS. Apply the static checklist from `.claude/rules/a11y-targets.md § Static review`.

### 2. Confirm the dev server

Same as `/design-review`. Ask the user for the port; don't auto-start.

### 3. Dynamic axe scan

Spawn the `a11y-auditor` agent with:
- The base URL.
- Instruction to run axe at the WCAG 2.0 A + AA + 2.2 AA rule sets.
- Instruction to re-scan with the contact modal open.

### 4. Manual checks (delegated to the agent)

The agent walks:
- Tab order on the closed page.
- Tab order with the modal open (focus trap, Esc close, focus return).
- Reduced-motion case via `emulateMediaFeatures`.
- Contrast pairs for `text-secondary` and `text-muted` against their backgrounds.

### 5. Report back

Summarize findings to the user:
- **Blockers** count and one-line each.
- **Top 3 actions**.
- Lighthouse a11y score (if Lighthouse is available; otherwise note).
- A 5-minute manual screen-reader script the user can run themselves.

Save the full report to `tmp/a11y/<timestamp>/report.md`.

## When NOT to use this skill

- Purely visual review → `/design-review`.
- Perf concerns → `/perf-check`.
- Combined release-ready check → `/ship-check`.

## Tooling required

- Puppeteer MCP for axe injection + interaction.
- Optionally Lighthouse CLI for the a11y score.

If neither is available, fall back to the static review only and tell the user what's missing.
