# Résumé Parity

The portfolio, the résumé, and the structured data must tell **one story**. A recruiter who spots "15+ years" on the site and "13 years" on the PDF stops trusting both. This rule makes the résumé the single source of truth and keeps everything downstream in sync. The `jsonresume` MCP is the tooling; this rule is the contract.

## Single source of truth

The canonical record is a **JSON Resume** document (`resume.json`, schema at jsonresume.org). Everything else derives from it:

```
resume.json  ──►  data.js (work / education / skills)
             ──►  index.html hero stats
             ──►  JSON-LD Person schema  (see [[seo-discoverability]])
             ──►  any exported PDF / LinkedIn copy
```

Edit `resume.json` first; propagate outward. Never edit the hero stat and the work list independently — that's how drift starts.

## Parity checklist

These must match across the site, the résumé, and the schema — verify on every content change:

| Fact | Lives in | Must equal |
|---|---|---|
| Years of experience | hero ("15+ Years"), résumé summary | the same number, derived from earliest job date |
| Company count | hero ("10+ Companies"), work list | count of entries in `resume.json.work` |
| Current title | hero, résumé, JSON-LD `jobTitle` | identical string |
| Employer names + dates | `data.js` work, résumé | identical (names, order, dates) |
| Named tools / frameworks | Projects, Showcase, résumé skills | no tool claimed in one place and absent in another |
| Social URLs | hero icons, JSON-LD `sameAs`, résumé | identical set |

## Drift triggers (re-check parity when any happens)

- A new year ticks over and "15+ years" should become "16+" (`[[portfolio-principles]]` lists this as an evolution trigger).
- A new job/employer is added to one surface but not the others.
- A stat in the hero is rounded up for punch — the résumé must use the same rounding or the number must change on both.
- The JSON-LD schema is updated for SEO without checking it still matches the visible page.

## Using the jsonresume MCP

- Keep `resume.json` in the repo (or a linked Gist) as the source.
- Use the MCP to regenerate descriptions or exports from `resume.json` — then diff the output against `data.js`/hero and reconcile.
- Treat MCP-generated prose as a draft: run it through `/copy-pass` before it lands (the MCP doesn't know `[[brand-voice]]`).

## What NOT to do

- Don't let the MCP auto-write marketing adjectives into the résumé — `[[brand-voice]]` bans "passionate", "rockstar", buzzword chains. Numbers and named systems only.
- Don't claim a number on the portfolio that the résumé can't substantiate.
- Don't maintain two divergent "about" narratives — one story, three renderings.

## Related

- `[[seo-discoverability]]` — JSON-LD `Person` schema must match the résumé and visible page.
- `[[recruiter-scan]]` — a stat mismatch is an instant credibility loss during the glance.
- `[[brand-voice]]` — résumé prose follows the same voice rules; MCP output gets a `/copy-pass`.
- `[[portfolio-principles]]` — a stale hero stat is a documented evolution trigger.
