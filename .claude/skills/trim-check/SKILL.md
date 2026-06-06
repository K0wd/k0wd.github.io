---
name: trim-check
description: Audit the portfolio for over-build — redundant sections, walls of text, competing CTAs, content costing more attention than it proves. Runs the content-restraint-critic and reports ranked cut/compress/merge candidates. The anti-bloat counterpart to /copy-pass. Read-only. Invoke with /trim-check, "what can I cut", or "is this too much".
---

# /trim-check

Finds what to remove. The portfolio's enemy is over-build — this skill measures attention cost against proof carried and proposes cuts. Read-only — proposes, doesn't edit. Pairs with `/copy-pass` (which fixes wording); this one decides what should *exist*.

## Workflow

### 1. Measure the page

Ask for the dev server URL. Via puppeteer, capture total scroll height ÷ viewport height (how many screens the reader traverses) and note where each section falls — especially how deep the strongest proof (AI showcase) sits.

### 2. Hand to content-restraint-critic

Spawn the `content-restraint-critic` agent with the source files (`index.html`, `data.js`, `script.js`) and the live measurements. Pass the user's optional focus (e.g., "the work section feels long").

### 3. Report back

Lead with the **attention map** (N screen-heights, where proof lands). Then the ranked **cut candidates** (attention saved ÷ proof lost), compress, and merge lists. Always include the **protect** list so the user sees what not to touch. Save to `tmp/trim/<timestamp>/report.md`.

## When the user wants cuts applied

Surface as a discrete change list (remove section X, compress block Y from N→M lines, merge A+B). Re-run `/recruiter-review` and `/design-review` after a structural cut to confirm the page still passes the glance and the layout holds. Don't auto-apply.

## When NOT to use this skill

- Wording / voice → `/copy-pass`.
- Whether a recruiter gets it fast → `/recruiter-review`.
- Visual hierarchy / spacing → `/design-review`.

## Tooling required

- Read, Glob, Grep, Bash.
- puppeteer MCP (to measure real scroll cost).
- The dev server running.
