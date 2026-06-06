---
name: recruiter-review
description: Run the recruiter-lens agent against the live portfolio — a 6-second recruiter glance and a 60-second hiring-manager read — and report what each reader learns, what's buried, and the ranked fixes. Read-only. Invoke with /recruiter-review, "recruiter review", or "does this pass the recruiter test".
---

# /recruiter-review

Simulates how a recruiter and a hiring manager actually consume the page: fast, skimming, deciding in seconds. Read-only — proposes fixes, doesn't edit.

## Workflow

### 1. Confirm the target

Ask the user for the dev server URL/port. Don't auto-start a server. Note whether the working tree is dirty so the user knows what state was audited.

### 2. Hand to recruiter-lens

Spawn the `recruiter-lens` agent with:
- The URL.
- The user's optional focus (e.g., "just the hero" or "test mobile").
- Instruction to run both passes (6s Glance + 60s Read) at desktop **and** mobile viewports.

### 3. Report back

Lead with the **Glance verdict** (n/5 answerable without interaction) — that's the headline number. Then:
- Any Glance question that failed, with the reason.
- Proof-order / confusion findings from the Read.
- **Top 3 fixes ranked by leverage** — usually "surface buried proof," not "add more."

Save the full report to `tmp/recruiter/<timestamp>/report.md` and screenshots alongside it.

## When the user wants fixes applied

Surface fixes as a discrete edit list (file/line + change). For wording changes, defer to `/copy-pass`. For layout/hierarchy changes, defer to `/design-review`. Don't auto-apply.

## When NOT to use this skill

- Wording quality → `/copy-pass`.
- Visual hierarchy / spacing → `/design-review`.
- Being *found* by recruiters (SEO/share-card) → `/seo-check`.
- Full release gate → `/ship-check`.

## Tooling required

- puppeteer MCP (navigate, screenshot, evaluate), Bash, Read.
- The dev server running.
