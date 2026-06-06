---
name: ship-check
description: Composite release-ready audit — runs design-review, a11y-check, perf-check, seo-check, recruiter-review, and link-check in sequence and produces one consolidated report with a single Ready-to-Ship verdict. Invoke with /ship-check, "is this ready to ship", or "pre-release audit".
---

# /ship-check

The composite gate. Use it before publishing changes that will be visible to users.

## Workflow

### 1. Establish state

```bash
git status
git log -5 --oneline
```

If there are uncommitted changes the user wants audited, fine — note them in the report. If the working tree is dirty and the user expected a clean audit of `main`, surface that.

### 2. Confirm dev server

Ask the user for the port. Don't auto-start.

### 3. Run sub-audits

Run, in order, to keep the report coherent:

1. **`/design-review`** — visual at three viewports + modal.
2. **`/a11y-check`** — static + axe + manual checks.
3. **`/perf-check`** — asset budget + Lighthouse (Performance).
4. **`/seo-check`** — head meta, share card, JSON-LD, Lighthouse SEO.
5. **`/recruiter-review`** — the 6-second glance + 60-second read.
6. **Link check** — see step 4.

You can run design-review + a11y-check + perf-check + seo-check via their respective skills/agents — all four ride the same puppeteer/Lighthouse passes, so share screenshots and Lighthouse runs where possible (re-use pages rather than re-loading). Run recruiter-review last; it interprets the assembled page, not individual assets.

### 4. Link check

Walk every `<a href>` in `index.html`. For each external link:
- HEAD request, expect 2xx or 3xx.
- Note any redirects to flag for the user.
- Note any 4xx / 5xx as Blockers.

For internal anchors (`#testgenerator`, `#projects`, etc.) verify the target exists in the DOM.

For `mailto:` — verify there are none. The brand-voice rule disallows them; we use the contact modal.

### 5. Consolidate

Write `tmp/ship-check/<timestamp>/report.md` with:

```
# Ship Check — <date>

## Verdict
**READY** or **NOT READY** — single line.

## Blockers (must fix before ship)
- ...

## Warnings (should fix; user discretion)
- ...

## Suggestions (nice to have)
- ...

## Sub-reports
- Design: tmp/design-review/<ts>/...
- A11y: tmp/a11y/<ts>/...
- Perf: tmp/perf/<ts>/...
- SEO: tmp/seo/<ts>/...
- Recruiter: tmp/recruiter/<ts>/...
- Links: tmp/ship-check/<ts>/links.json
```

### 6. Verdict logic

- **NOT READY** if any of: a11y Blocker, perf Blocker (CWV miss > 20% or asset > 50% over budget), visual Blocker, broken link, SEO Blocker (page not indexable, or share card blank/missing), recruiter Blocker (the 6-second Glance fails — < 5/5 answerable without interaction).
- **READY** otherwise — but always print Warnings count so the user accepts them consciously.

### 7. Report back to the user

Lead with the verdict in one line. Then:
- Blockers count + one-liner each.
- Top 3 fixes ranked by leverage.
- Pointer to the full report for browsing.

## When NOT to use this skill

- A targeted question — use the specific sub-skill instead. `/ship-check` is heavier than any single check.
- A purely backend / data change with no user-visible surface.

## Tooling required

- Everything the sub-skills require: puppeteer MCP, ideally Lighthouse CLI, ideally ImageMagick, Bash.
- The dev server running.

## Anti-patterns

- Don't ship if the verdict is NOT READY. The Blocker list is the work.
- Don't run ship-check on every commit — it's a pre-release gate, not a per-PR check. Use the targeted skills during iteration.
- Don't suppress Blockers to get a green verdict. Every Blocker is a credibility risk — this site markets a QA engineer.
