# ziburiofoundation.org

The public website of Žiburio Foundation, a Michigan nonprofit. One static page, no build step, no analytics, no third-party forms. Contact is a mailto link only.

Hosting: Vercel, team `lietuvaais-projects` (the Foundation's team, where lietuva.ai runs). Domain: `ziburiofoundation.org`, registered at Porkbun; the DNS record is added by Vilija.

## Status

**Staging.** `index.html` carries `<meta name="robots" content="noindex, nofollow">`; the go-live PR removes that line and nothing else. Nothing is public until Vilija says so.

## Where every sentence comes from

The page is assembled, never composed. Body copy is verbatim from canon in `vilija-os` unless listed under "Edits" below.

| Block | Source |
|---|---|
| One-liner | Duality Doctrine, `corpus/projects/culturenet-foundation.md` |
| Hero lede, the four steps, the three resources, the apprenticeship paragraph, "The thinking behind it", "Next: a method other communities can follow" | the LinkedIn About she approved on the Imminent brief's register, `voice/public-presence/foundation-first-launch-set-2026-10-15.md` block 4 (and the short bio's "young people from the community do much of the work") |
| The two questions, the principle "The human being remains responsible for memory…" | `corpus/publications/2026-09-musu-eile-statyti.md`, appendix |
| Figures | `voice/public-presence/numbers-ruling-2026-09-24.md` only: 326/513, 155 institutions, seven interns. The grant's "4,000-item" and "1816" are not in the ruling and are left off |
| "operated independently by Žiburio Foundation" | `voice/public-presence/bio-set-2026-10-10.md`, without the clause that follows it |
| Three stamped internship lines; "Representation is not inheritance."; "A corpus is not a culture."; the sovereignty clause | `voice/public-presence/doctrine-lines.md` |
| "Žiburio Foundation cannot become an AI company." | Duality Doctrine, the first sentence of its pair ([main] decision, 2026-10-15) |
| Entity facts | culturenet-brain `docs/legal/entity-status.md`: Michigan nonprofit, formed 2026-08-18 |
| Look | `voice/visual-look.md` tokens, plus the school's navy `#3D4F6B` and the tricolor from the Žiburio mark (see `assets/README.md`) |

Written fresh, and only these: navigation and section labels, the Now/Next chips, link text, the hero tile captions ("Žiburys (the light)", "Metro Detroit"), the Support placeholder line, the contact line, the footer.

## Edits to canon text (stealth hold)

CultureNet and Labs are not named on this site while the hold stands. The September shared statement is used only for its two questions and its principle; its CultureNet paragraphs are not on the page. The path ends at Lietuva.AI; the CultureNet ring and the reciprocal link are removed. "Žiburio Foundation cannot become an AI company." stands alone, without its paired sentence.

## Design (2026-10-15, her direction: "cool and modern", "a cool technology foundation", not an AI template)

White, Geist, mono labels, hairlines; the Foundation mark redrawn from the school's (`assets/`); navy as the brand ink; a tricolor rule; figures as tiles; the four steps as a track; programs as cards; the path as concentric rings; stamped lines in Instrument Serif. No analytics, no scripts, one HTML file.

## Now vs. research (Vilija, 2026-10-15; `voice/forbidden-language.md`)

Present-tense fact only for what exists and is used today: the Archive (326 published), Lietuva.AI, SOLP, the interns scanning and cataloguing. Everything else is labeled. On this page: the About statement's doctrine, from "AI should extend…" on, sits under the label "Our thinking"; the Programs rows carry "Now"; the interns' caption states what they do today, with the category line attached; the two stamped lines about stewarding, noticing and making are under "Next"; "What stays human" is labeled "Our thinking". Labels are mono, the only fresh text added.

## Rules that bind this site

- "Nonprofit", never a tax term; no promise of deductibility.
- Entity facts only from culturenet-brain `docs/legal/entity-status.md`. The registered office is Farmington, Michigan, so the entity lines say "Michigan" and nothing narrower; "Detroit" appears only for the parish and the community.
- Student interns are credited as a group, never named; no student images.
- Surname "Jurgutis" on this English surface.
- No analytics that send data anywhere; no third-party forms.
- Branch and PR flow; never push `main` directly. Git identity `LietuvaAI` / `vilija@lietuva.ai`.

## Going live

1. Vilija confirms the copy (see the open lines in the launch PR).
2. PR removing the `robots` meta line.
3. Vilija adds the DNS record at Porkbun; the project's domain is attached in Vercel.
