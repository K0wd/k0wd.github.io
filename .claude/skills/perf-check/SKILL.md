---
name: perf-check
description: Run a performance audit on the portfolio — asset budget, Lighthouse mobile, CWV measurement, runtime / long-tasks, font and image audit. Compared against the documented perf-budget. Invoke with /perf-check, "audit performance", "run Lighthouse", or "check CWV".
---

# /perf-check

Performance audit against `.claude/rules/perf-budget.md`. Read-only — produces a fix list, doesn't edit.

## Workflow

### 1. Asset budget (static)

Run from the project root:

```bash
ls -la *.html *.css *.js *.png *.jpg *.webp *.svg 2>/dev/null
```

Compute gzipped sizes for text assets. Compare against the budget table.

### 2. Confirm the dev server

Ask the user for the port. Don't auto-start.

### 3. Lighthouse mobile

Run three times, take the median:

```bash
npx -y lighthouse http://localhost:PORT \
  --emulated-form-factor=mobile \
  --throttling-method=simulate \
  --output=json --output=html \
  --output-path=./tmp/perf/<timestamp>/lh-mobile \
  --quiet --chrome-flags="--headless"
```

If `npx lighthouse` isn't available, fall back to puppeteer-based CWV measurement via `PerformanceObserver`.

### 4. Hand to the perf-auditor agent

Spawn `perf-auditor` with:
- The Lighthouse JSON path(s).
- The asset-list output.
- The base URL for runtime / long-task measurement.

### 5. Report back

- **CWV table** with target/actual/delta.
- **Asset budget table** with overages flagged.
- **Top 3 actions** ranked by user-perceived impact.

Save the full report to `tmp/perf/<timestamp>/report.md`. Include the Lighthouse HTML so the user can open it in a browser.

## When NOT to use this skill

- Visual / layout review → `/design-review`.
- A11y review → `/a11y-check`.
- Combined release-ready check → `/ship-check`.

## Known recurring items (don't be surprised)

- `UE-3d-seal.png` is 1.9 MB. Always surfaced as a Blocker until optimized.
- Google Fonts is one external CDN. Acceptable; self-host is an optional optimization.

## Tooling required

- Lighthouse CLI **or** puppeteer MCP for CWV via PerformanceObserver.
- Bash for static asset listing.
