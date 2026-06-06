# Recruiter Scan

The portfolio has two readers with two clocks. `[[brand-voice]]` covers the *engineer* who reads carefully. This rule covers the **recruiter / sourcer** who does not — they skim in seconds and decide whether to forward you. The site must survive that scan before the careful read ever happens.

## The two clocks

| Pass | Time | Reader | Question they're answering |
|---|---|---|---|
| **Glance** | ~6 seconds | Recruiter / sourcer | "Is this the right kind of person? Forward or skip?" |
| **Read** | ~60 seconds | Hiring manager / tech lead | "Is this person actually good? Worth a call?" |

Both happen above the fold first, then top-to-bottom in an **F-pattern** (top bar → first heading → left edge of each block). Anything that needs a click, a hover, or a scroll-to-find does not exist during the Glance.

## The 6-second test (Glance)

Within the first viewport, **without scrolling, hovering, or clicking**, a recruiter must extract all five:

1. **Name** — Kim E. Bandeleon.
2. **Role + seniority** — Senior Quality & Automation Engineer.
3. **The niche** — AI-augmented QA (not generic "QA tester").
4. **One hard proof** — a number or named system (15+ years, 10+ companies, a named tool).
5. **A next step** — an obvious primary action or scroll affordance.

If any of the five requires interaction to surface, it fails the Glance. Test it: load the page, screenshot the first viewport, cover everything below the fold, and ask "can I answer all five?"

## The 60-second test (Read)

Scrolling top-to-bottom, the reader should hit, in order, escalating proof:

| Order | Beat | Must land |
|---|---|---|
| 1 | Hero | The claim + one stat (the Glance payload). |
| 2 | AI Framework Showcase | The differentiator, *running* — not described. |
| 3 | Projects | "I build" — outcomes, one line each. |
| 4 | Work | Named employers — the receipts. |

The strongest proof (the AI showcase) must come **before** the reader's attention decays. `[[portfolio-principles]]` flags that Education currently sits between Showcase and Projects — that's a decay risk; the Read should not spend its second-best slot on a credential list.

## Recruiter-specific must-haves

- **Title keywords are visible as text**, not baked into an image or animation. Sourcers search and skim for "QA", "Automation", "SDET", "Senior" — these must be selectable text in the hero.
- **Years of experience is a number near the top.** "15+ years" beats a work list the reader has to date-math.
- **Contact is reachable in one action from anywhere** — the modal trigger qualifies; a buried footer email does not.
- **The link is shareable.** Recruiters forward URLs in Slack/email/ATS — the share-preview card matters (see `[[seo-discoverability]]`).
- **Niche is unambiguous.** The reader should never wonder "is this a manual tester or an automation engineer who ships AI pipelines?"

## Anti-patterns (recruiter-hostile)

- The value proposition lives in a paragraph the recruiter won't read instead of a headline they will.
- Seniority is implied by the work history but never stated.
- The differentiator (AI-augmented QA) is below the fold while generic skills are above it.
- The only path to contact is a `mailto:` or a resume PDF download (we use the modal — keep it).
- Hero stats drift out of sync with the work list (see `[[resume-parity]]`) — a recruiter who notices is gone.
- "Open to work" / availability signal absent when the site's job is to get hired.

## How to verify

- **Manual:** load the live site, screenshot the first viewport only, run the five-question Glance test.
- **Agent:** `[[recruiter-lens]]` role-plays both passes against the live site.
- **Keyword check:** view source, confirm role/seniority/niche are selectable text in the hero, not image-only.

## Related

- `[[brand-voice]]` — how the careful reader is addressed; this rule is the skim layer above it.
- `[[portfolio-principles]]` — principle 1 ("first 5 seconds") and the IA order this rule stress-tests.
- `[[seo-discoverability]]` — being *found* and the share-card a recruiter forwards.
- `[[resume-parity]]` — the stats a recruiter scans must match the résumé.
- `[[recruiter-lens]]` — agent that runs this audit.
