---
name: design-review
description: Capture viewport screenshots of the live site (mobile/tablet/desktop) and run them through the visual-design-critic agent against design-tokens and portfolio-principles. Invoke with /design-review, "design review the site", or "audit the visuals".
---

# /design-review

A visual sanity check on the portfolio. Captures three viewports, runs them through the design critic, and returns prioritized findings — without editing anything.

## Workflow

### 1. Confirm the dev server is running

Ask the user which port (`http://localhost:8000` or similar) or check for a known port:

```bash
lsof -i :8000 -i :5500 -i :3000 -i :8080 -i :5173 2>/dev/null | grep LISTEN
```

If nothing is running, suggest:
```bash
python3 -m http.server 8000
# or any equivalent static server
```

Do not start the server yourself unless the user asks.

### 2. Capture screenshots at three widths

Use puppeteer MCP. Capture each viewport full-page:

| Name | Width × Height |
|---|---|
| mobile | 375 × 812 |
| tablet | 768 × 1024 |
| desktop | 1440 × 900 |

Save to `tmp/design-review/<timestamp>/<viewport>.png` (create the dir if it doesn't exist).

Also capture the modal-open state at desktop width (click the contact-modal trigger, screenshot, then close).

### 3. Hand to the visual-design-critic agent

Spawn the `visual-design-critic` agent with:
- The three screenshot paths.
- The modal-open screenshot path.
- The user's specific concern, if any (e.g., "I think the hero feels cramped on mobile").
- Explicit instruction to **not edit** files and to **propose 2 options** for any change.

### 4. Report back

Summarize the agent's findings to the user with:
- **Top 3 actions** (blockers and highest-impact warnings).
- A pointer to the screenshot directory so the user can compare visually.
- The full critique attached if the user wants to dig deeper.

## When NOT to use this skill

- For a copy or text-only change → use `/copy-pass`.
- For a performance question → use `/perf-check`.
- For an a11y question → use `/a11y-check`.
- For a release-ready sweep across all of these → use `/ship-check`.

## Tooling required

- Puppeteer MCP for screenshots.
- A running static server.

If puppeteer isn't available, fall back to: read the source files, describe expected rendering, run the critic against the description. Note the limitation in the report.
