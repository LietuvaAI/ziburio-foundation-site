# Historical PR #1 staging preview

This file is retained as review history. These links and instructions describe PR #1, not the current PR #3 Foundation design review.

Open to anyone with the link. Every page carries `noindex, nofollow`, so search engines will not list it.

**Home** — https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app

| Page | Link |
|---|---|
| Home | https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app |
| About | https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app/about |
| Our work | https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app/work |
| Skaitmeniniai Knygnešiai | https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app/skaitmeniniai-knygnesiai |
| Principles | https://ziburio-foundation-site-2aa8hocg3-lietuvaais-projects.vercel.app/principles |

Lithuanian: the EN | LT switch sits at the top right of every page. The choice is kept in that browser only.

PR: https://github.com/LietuvaAI/ziburio-foundation-site/pull/1

## For Codex

Worth its eye:

1. **Lithuanian register.** Written in the Zaranka register, Tier 1 canon first (paraiška, Draugas pieces, `writing/reference/vilija-voice-library.md`). The constructed lines, which have no Tier 1 source and want checking: the hero subline, the four principles' wording, the Source · Inference · Authority triad, parts of the founding statement, the Support block, and the section labels.
2. **Stealth hold.** CultureNet and Labs must not appear anywhere. The white paper's Lietuva.ai sentence is carried without its opening clause.
3. **Entity language.** "Nonprofit" only, never a tax term; no promise of deductibility; entity facts only from culturenet-brain `docs/legal/entity-status.md`.
4. **Figures.** 155 parishes and other institutions; 326 public records of 513 catalogued; seven abiturientai.
5. **Surname.** "Jurgutis" on English surfaces.

## What was changed to publish this

Vercel Authentication was turned off for the project `ziburio-foundation-site` (team `lietuvaais-projects`) on 2026-10-19, at Vilija's request, so the preview could be read without a team login. It had been "Standard Protection".

Side effect: the production `*.vercel.app` URL is now reachable too, and it still serves the **older** single-page version from 2026-10-16. Nothing points at it and it is `noindex`. To close this again, set Vercel Authentication back to Standard Protection in Project Settings → Deployment Protection.
