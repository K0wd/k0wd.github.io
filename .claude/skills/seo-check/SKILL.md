---
name: seo-check
description: Audit the portfolio's discoverability — head meta, Open Graph / Twitter share card, JSON-LD Person schema, robots/sitemap — against seo-discoverability, plus the Lighthouse SEO category. The Lighthouse category /perf-check doesn't cover. Read-only. Invoke with /seo-check, "check SEO", or "audit the share card".
---

# /seo-check

Discoverability audit: can a recruiter *find* the site, and does the *forwarded link* look credible. Read-only — proposes fixes, doesn't edit. This closes the one Lighthouse category `/perf-check` leaves out.

## Workflow

### 1. Gather sources

Read:
- `index.html` `<head>` — title, description, canonical, robots, OG/Twitter, JSON-LD.
- Project root — `robots.txt`, `sitemap.xml`, the OG image file.
- The hero (`index.html` / `data.js`) — to check meta/schema match the visible claims.

### 2. Hand to seo-auditor

Spawn the `seo-auditor` agent with the sources and (optionally) the dev server URL for dynamic + Lighthouse checks. Ask the user for the port if they want the Lighthouse SEO run; don't auto-start a server.

### 3. Run Lighthouse SEO (if a server is available)

Via the Lighthouse MCP or `lighthouse` CLI, SEO category only. Report the score and each failed audit. Target = 100.

### 4. Report back

Lead with two headlines: **Lighthouse SEO score** and **share-card status** (renders / blank / missing image). Then Blockers / Warnings / Suggestions and the top 3 fixes. Save to `tmp/seo/<timestamp>/report.md` with the rendered-card screenshot.

## When the user wants fixes applied

Surface as an edit list (head tags to add, JSON-LD block, robots/sitemap files, OG image spec). The OG image itself is a design asset — hand its creation to `/design-review` or generate to spec; don't ship the 1.9 MB seal as the card. Don't auto-apply.

## When NOT to use this skill

- Performance / CWV / asset weight → `/perf-check`.
- Copy quality of the title/description wording → `/copy-pass`.
- Whether the page reads well to a recruiter → `/recruiter-review`.

## Tooling required

- Read, Glob, Grep, Bash (`identify`/`file` for image dims).
- Lighthouse MCP or CLI (optional but recommended).
- DataForSEO MCP (optional, paid — keyword ranking only).
