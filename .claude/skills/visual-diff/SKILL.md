---
name: visual-diff
description: Capture before/after screenshots at three viewports across a visual change. Generates side-by-side comparison plus pixel-diff regions. Invoke with /visual-diff, "before-after screenshots", or "visual regression check" after making a UI change.
---

# /visual-diff

Side-by-side comparison of the portfolio across a change. Useful after editing CSS, HTML structure, or any visual JS.

## Workflow

### 1. Establish the baseline

Two modes:

**Mode A — explicit baseline.** The user names a baseline (commit SHA, branch, "before this session"). Stash current changes, check out the baseline, capture, then return:

```bash
# Confirm a clean state first
git status

# Capture current as work-in-progress
git stash push -m "visual-diff WIP"

# Check out baseline
git checkout <ref>

# Take screenshots — see step 2
# Then return
git checkout -
git stash pop
```

Ask the user before stashing. If they don't have a clean stash-able state, don't proceed.

**Mode B — explicit before-snapshot already taken.** The user has already captured `tmp/visual-diff/<id>/before/`. Skip to step 2.

### 2. Capture screenshots

For both `before/` and `after/` directories, at three viewports:

| Name | Width × Height |
|---|---|
| mobile | 375 × 812 |
| tablet | 768 × 1024 |
| desktop | 1440 × 900 |

Plus the modal-open state at desktop.

Use puppeteer MCP. Save to `tmp/visual-diff/<timestamp>/{before,after}/<viewport>.png`.

### 3. Compute the diff

Use ImageMagick (if installed) or a similar tool:

```bash
for v in mobile tablet desktop modal-desktop; do
  compare -metric AE \
    tmp/visual-diff/<timestamp>/before/$v.png \
    tmp/visual-diff/<timestamp>/after/$v.png \
    tmp/visual-diff/<timestamp>/diff/$v.png \
    2>&1 | tee -a tmp/visual-diff/<timestamp>/diff/metrics.txt
done
```

`metric AE` returns the count of differing pixels — useful sanity number.

If ImageMagick isn't installed, render an HTML comparison page with `<img>` pairs side-by-side and save to `tmp/visual-diff/<timestamp>/compare.html`.

### 4. Report back

For each viewport, output:
- **Pixel-diff count** (or "no measurement available").
- **Intent vs. observed** — was this the change the user expected?
- **Unexpected diffs** — anything that shifted outside the change region.

If the change altered layout in a way the user didn't ask for (CLS, font swap, accidental margin) — flag it as a Warning.

### 5. Optional follow-on

If diffs look suspicious, suggest invoking `/design-review` on the after state, or `/a11y-check` if focus/contrast may have shifted.

## When NOT to use this skill

- For a perf change without a visual surface (e.g., compressed image, font preload) → use `/perf-check`.
- For a copy change → use `/copy-pass` and screenshot side-by-side manually if needed.

## Tooling required

- Puppeteer MCP for screenshots.
- ImageMagick (`magick compare`) for pixel diffs — optional.
- A running static server.
