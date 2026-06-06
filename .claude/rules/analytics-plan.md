# Analytics Plan

You can't improve what you don't measure — but a portfolio that markets a QA engineer cannot ship analytics that slow the page or leak visitor data. This rule defines the **small, deliberate** set of events worth tracking and the constraints they ship under. The instrument is `posthog` or `google-analytics` via MCP; this rule is what to point it at.

## Principle

Track the funnel, not vanity. Every event must answer a question that could change the page. If an event wouldn't change a decision, don't collect it. `[[portfolio-principles]]` applies to instrumentation too: no over-build.

## The events worth tracking

| Event | Why (the decision it informs) |
|---|---|
| `page_view` | Baseline traffic + referrer (where recruiters come from). |
| `hero_cta_click` | Does the primary CTA ("See AI Framework in action") convert the glance? |
| `showcase_open` | Do readers engage the differentiator, or skip it? |
| `showcase_step_run` | Do they actually *play* with the demo, or just open it? |
| `contact_open` / `contact_submit` | The real goal — open rate vs. completion (form friction). |
| `scroll_depth` (25/50/75/100) | Where attention dies — validates the `[[recruiter-scan]]` decay model. |
| `outbound_click` (LinkedIn / GitHub) | Secondary-action pull vs. the primary CTA. |
| `resume_view` (if a résumé link exists) | Demand for the long form. |

That's the whole list. Resist adding more without cutting one — see `[[portfolio-principles]]` section-add discipline.

## What NOT to track

- No PII, no form-field contents, no keystroke/heatmap capture without a clear reason.
- No third-party ad/marketing pixels — off-brand and a privacy cost.
- No event that exists only to look busy on a dashboard.

## Constraints (non-negotiable)

- **Performance:** the snippet loads `defer`/`async`, never render-blocking, and counts against the JS budget in `[[perf-budget]]` ("Analytics: if added, must be deferred and not block render"). Re-run `/perf-check` after adding it.
- **Privacy:** prefer cookieless / IP-anonymized config; honor Do Not Track; if any cookie is set, a disclosure is required.
- **Console hygiene:** `[[portfolio-principles]]` requires an empty console on load — the analytics lib must not log warnings.
- **No CLS:** the snippet must not inject layout-shifting elements (`[[perf-budget]]` CLS ≤ 0.05).

## What success looks like

- A hero CTA click-through you can watch move when copy changes (pairs with `/copy-pass`).
- A showcase open-rate that proves the differentiator earns its slot — or doesn't (pairs with `/trim-check`).
- A scroll-depth curve that confirms (or refutes) where the strongest proof should sit.

## Related

- `[[perf-budget]]` — analytics JS lives under the budget and must not block render.
- `[[portfolio-principles]]` — measure the one primary CTA per section; don't over-instrument.
- `[[recruiter-scan]]` — scroll-depth data validates the attention-decay model.
- `[[brand-voice]]` — what the CTA says is what you're A/B-measuring.
