# ziburiofoundation.org

The public website of Žiburio Foundation, a Michigan nonprofit. One static page, no build step, no analytics, no third-party forms. Contact is a mailto link only.

Hosting: Vercel, team `lietuvaais-projects` (the Foundation's team, where lietuva.ai runs). Domain: `ziburiofoundation.org`, registered at Porkbun; the DNS record is added by Vilija.

## Status

**Staging.** `index.html` carries `<meta name="robots" content="noindex, nofollow">`; the go-live PR removes that line and nothing else. Nothing is public until Vilija says so.

## Where every sentence comes from

Mission-first, at Vilija's direction (2026-10-16): "use the about from the foundation formation documents… we need to start our mission clearly… be more meta."

| Block | Source |
|---|---|
| Hero headline (the mission) | Articles of Incorporation as filed, Article II(a), verbatim (culturenet-brain `docs/legal/formation/articles-of-incorporation-AS-FILED-verbatim.md`) |
| "Žiburys means a light."; "A new institution for new times."; "Žiburys means what it says: a light. The Foundation's job is to keep that light burning…" | founding director letter, culturenet-brain `docs/legal/formation/director-invitation-letter-v3.md` |
| "permanent steward of Lithuanian diaspora cultural memory"; formed 2026 | Article II(b); entity-status (formed 2026-08-18) |
| "Each generation of the Lithuanian diaspora built the institutions its moment required…" | English rendering of her Draugas #4 structure, vilija-os `corpus/publications/2026-09-musu-eile-statyti.md` (points 1–2) |
| "It preserves, gathers, teaches and forms. It measures its success by…" | bylaws v6.6 §1.2 |
| "Its existence and purposes do not depend on any particular school, parish or host institution…" | Article II, closing sentence, in plain English |
| Purposes rows | Article II(b)–(f), verbatim; the row labels are fresh |
| "We prepare our memory and our young people…" | Duality Doctrine one-liner |
| New in the archive | catalog records for items catalogued 2026-10-14 (Supabase `items_public`): titles, places, years, edition |
| "Every source is digitized, read by AI, checked by people, and linked to the page it came from." | medium bio, vilija-os `voice/public-presence/foundation-first-launch-set-2026-10-15.md` |
| Resources, apprenticeship, statements | LinkedIn About (vilija-os PR #231), numbers ruling, doctrine-lines, [main] decisions 2026-10-15 |

Article II's opening clause names a tax code section; it is not quoted. Nothing on the page says "501(c)(3)" or promises deductibility.

## Edits to canon text (stealth hold)

CultureNet and Labs are not named on this site while the hold stands. The September shared statement is used only for its two questions and its principle; its CultureNet paragraphs are not on the page. The path ends at Lietuva.AI; the CultureNet ring and the reciprocal link are removed. "Žiburio Foundation cannot become an AI company." stands alone, without its paired sentence.

## Design (2026-10-15, her direction)

Three passes were rejected: a Geist/white layout ("a blob of text", then "I don't like this at all"), the lietuva.ai theme ("the whole theme is totally off", "I don't want the same design for the Foundation"), and a cream/serif/mono layout ("looks like a generic Claude AI site"). Her direction: the original Žiburio logo; tech and culture at the same time.

This pass follows her verdicts from the ten CultureNet design rounds of 2026-09-28 (Claude Design canvas, design memory `labs-site-design-direction`). Accepted there and used here: a plain sans, pill buttons, real book photographs drifting behind the hero, short statements on hairline rows. Rejected there and kept out here: mono eyebrows, numbered side markers, card grids, long prose, giant type, off-white ivory, the lietuva.ai look. The Foundation's own: white ground, Schibsted Grotesk, the original mark and its navy, one navy band, a tricolor rule. Not the CultureNet look: no dark ground, no Instrument Sans.

**Images.** `assets/books/` holds the Foundation's own photographs of three pre-1931 imprints (Kudirka, Tilsit 1909; Lietuvos Kanklės, Tilsit 1895; Šatrijos Ragana, Į Šviesą, Vilnius 1908), public domain in the U.S.; the catalog still marks each "rights review required", so record them before go-live. **Knygnešys 1864–1904, I (Kaunas, 1938)** is not cleared: its cover sits in the gitignored `private/` folder, appears only in the private preview, and never enters this public repository. The lietuva.ai scans used on 2026-10-15 were removed (2026-10-16); the 1925–26 notebook and the 1948 DP publication remain in this repository's history at commit 497a8a2.

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
