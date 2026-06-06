---
name: portfolio-principles
description: First-principles rules for the portfolio's structure, hierarchy, and every section's reason to exist. The "is this section earning its place?" filter.
---

# Portfolio Principles

This portfolio is **resume-as-product**. Every section is a feature; every feature has a job; if a feature can't articulate its job, it gets cut or rebuilt. The site itself is the strongest evidence that Kim ships quality software.

## The five principles

### 1. The first 5 seconds prove the claim

The hero is non-negotiable. In 5 seconds a reader must learn:
1. Who you are (name + role).
2. What you do that's distinctive (AI-augmented QA — not generic QA).
3. One credibility signal (15+ years, 10+ companies, a named tool, a stat).
4. Where to go next (CTA or scroll affordance).

The current hero satisfies this. Protect it. New hero elements must replace an existing one — additions without subtractions break the contract.

### 2. Every section answers "so what?"

For each section, write the one-sentence promise:

| Section | Promise (so what?) |
|---|---|
| Hero | Senior QA engineer who builds AI-augmented test pipelines — here's the headline proof. |
| AI Framework Showcase | I don't talk about AI — I shipped it. Here it is, running. |
| Education | Engineering background, formal. (Short — earns its place by being small.) |
| Projects | I build, not just maintain. Here are three examples. |
| Work | 15 years of receipts. Real companies, named. |
| Contact | One frictionless path to start a conversation. |

If a section can't answer "so what?" in one sentence, it gets cut. If two sections answer the same question, merge them.

### 3. Show your work, don't list adjectives

Specifically:
- The terminal animation in the hero **shows** test runs — it doesn't claim "I write tests."
- The TestGenerator demo **shows** the pipeline UI — it doesn't claim "I built a pipeline."
- The work list **shows** named employers — it doesn't claim "diverse experience."

Adding a new section is a budget — what proof does it carry, and what does it cost in attention?

### 4. The site is the demo

A QA engineer's portfolio that has bugs, broken links, layout shift, or accessibility failures is the strongest possible disqualifier. Treat the site itself as the product under test. Run [[a11y-targets]] + [[perf-budget]] checks before any merge. The dogfooding is the marketing.

Concrete instrumentation:
- Console must be empty on page load.
- No 4xx/5xx network requests.
- No CLS spikes on hero load.
- Forms validate inline.
- Every interactive element responds within 100ms.

### 5. One CTA, not five

Marketing portfolios commonly fragment attention with five CTAs (resume PDF, email, LinkedIn, GitHub, "book a call"). Choose **one primary CTA per section**, with secondary actions as text-links of lower visual weight.

Current primary CTAs:
- Hero: "See AI Framework In Action" (the showcase trigger).
- Framework Showcase: "Inquire Now!" → contact modal.
- Footer / always-available: Contact modal trigger.

Social icons are **secondary** — they should not visually compete with the primary CTA. Currently good. Don't add a "Download Resume" button as a primary CTA unless we deliberately reposition the site for application-form workflows.

## Information architecture

Order matters because most readers don't scroll past 40%. Current order:

```
Hero  →  AI Showcase  →  Education  →  Projects  →  Work
```

**Audit:** Education before Projects pushes the strongest proof (Projects, especially the AI demo) further down. Consider moving Education below Work, or collapsing it into a single line near Work. Discuss before changing.

## Section-add checklist

Before adding a section, answer in writing:
1. **Promise:** One sentence — what does this section commit to the reader?
2. **Evidence:** What artifact (number, screenshot, demo, link) backs the promise?
3. **Cost:** What does this section take in attention (height in viewport heights)?
4. **Removal:** What gets cut or compressed to make room?
5. **CTA impact:** Does this strengthen or fragment the primary CTA?

If 4 and 5 are blank, the section isn't ready.

## What this portfolio is NOT

Negative space matters as much as content:

- **Not a blog.** No "thoughts on QA" essays. If you want to publish, link out — don't host.
- **Not a feature flex.** No carousel of testimonial quotes from people who'd never be referenced again.
- **Not a personality reel.** No "fun facts," pets, hobbies. (Unless we deliberately invert this — a single deliberate humanizing touch is fine, but accidental ones aren't.)
- **Not a generalist's site.** The niche is AI-augmented QA. Resist requests to add unrelated work that dilutes it.

## Evolution triggers

These mean the portfolio's IA needs a rethink, not a tweak:

- The role you're optimizing for changes (QA Lead → Director, IC → Consulting).
- You add a meaningful new offering (e.g., open-source TestGenerator → it gets its own page).
- A stat in the hero becomes stale (e.g., year count drifts past hero copy).
- A primary CTA stops converting (track it before changing it).

## Related

- [[brand-voice]] — how every section sounds.
- [[design-tokens]] — how every section looks.
- [[a11y-targets]] / [[perf-budget]] — the site as demo gets these for free.
- [[visual-design-critic]] — agent that audits new visuals against principle 1-3.
- [[copy-conversion-reviewer]] — agent that audits new copy against principle 2 and 5.
