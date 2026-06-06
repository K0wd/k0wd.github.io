---
name: copy-pass
description: Audit every visible string on the portfolio (headlines, CTAs, body copy, microcopy) against brand-voice and portfolio-principles. Surfaces hedging, jargon, generic CTAs, and proposes two rewrites per finding. Invoke with /copy-pass, "review the copy", or "audit headlines and CTAs".
---

# /copy-pass

A conversion + voice audit of the portfolio's text. Read-only — proposes rewrites, doesn't edit.

## Workflow

### 1. Gather sources

Read in order:
- `index.html` — static visible strings.
- `data.js` — projects, work, education, certifications, skills, trainings.
- `script.js` — rendered text (terminal lines, dynamic state labels).

### 2. Hand to copy-conversion-reviewer

Spawn the `copy-conversion-reviewer` agent with:
- All source files (above).
- The user's optional focus area (e.g., "just the hero" or "the project descriptions feel weak").
- Instruction to propose **two rewrites per finding** with one-line tradeoffs.

### 3. Report back

Group findings by section. Lead with the **Top 3 actions** — usually a headline rewrite, a CTA tightening, and one section-level "earn its place" call.

Save the full report to `tmp/copy/<timestamp>/report.md`.

## When the user picks rewrites

Once the user selects which rewrites they want, surface them as a discrete edit list — file/line + old text → new text. **Do not auto-apply.** Let the user run the edits or ask you to apply them explicitly.

## When NOT to use this skill

- Visual / structural review → `/design-review`.
- Anything performance- or a11y-related → `/perf-check` or `/a11y-check`.
- Release-ready full sweep → `/ship-check`.

## Recurring focus areas

- The hero tagline (`Bringing confidence to software, one test at a time.`) is the locked anchor. Flag any drift; don't rewrite it without a deliberate session.
- Section titles: are they doing the job documented in `portfolio-principles`?
- CTAs: are they specific about what's on the other side?
- Project descriptions: outcome-led or feature-led?

## Tooling required

- Read, Glob, Grep — nothing else.
