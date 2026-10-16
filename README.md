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
| About, "Memory and intelligence, together" | `corpus/publications/2026-09-musu-eile-statyti.md`, appendix: the Foundation half of the shared statement |
| The path, Programs rows | `voice/public-presence/surface-set-proposal-2026-09-20.md` §3; figures from `voice/public-presence/numbers-ruling-2026-09-24.md` only (326/513, 155 institutions, seven interns) |
| "operated independently by Žiburio Foundation" | `voice/public-presence/bio-set-2026-10-10.md`, without the clause that follows it |
| Three stamped internship lines | `voice/public-presence/doctrine-lines.md`, Foundation room |
| What stays human | Duality Doctrine (the scale sentence) and two stamped lines, `doctrine-lines.md` |
| Entity facts | culturenet-brain `docs/legal/entity-status.md`: Michigan nonprofit, formed 2026-08-18 |
| Look | `voice/visual-look.md`, the white look she approved |

Written fresh, and only these: navigation and section labels, link text, the Support placeholder line, the contact line, the footer.

## Edits to the verbatim statement (stealth hold)

CultureNet and Labs are not named on this site while the hold stands. The About statement is therefore its Foundation half:

- "Žiburio Foundation and CultureNet were created around those two questions." → "Žiburio Foundation was created around those two questions."
- "One asks what should be remembered…" → "It asks what should be remembered…", attached to "The Foundation protects the human responsibility."
- Dropped whole: the CultureNet paragraph, "They are deliberately not the same institution.", "CultureNet develops the technological capacity.", "The other asks…", "Together they represent a different vision…:" (its bold claim kept on its own), "The two projects therefore meet at a simple principle:" (its bold principle kept), "CultureNet builds the instruments for discovery.", "Neither is complete without the other."
- "What stays human": the pair "Žiburio Foundation cannot become an AI company. CultureNet cannot become the owner of the cultural memory." is out, since half of it names CultureNet.
- The path ends at Lietuva.AI; the CultureNet ring and the reciprocal link are removed.

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
