# ziburiofoundation.org

The public website of Žiburio Foundation, a Michigan nonprofit. Five static pages, no build step, no analytics, no third-party forms. Contact is a mailto link only. English and Lithuanian, switched in the page; the choice is kept in that visitor's own browser and sent nowhere.

Hosting: Vercel, team `lietuvaais-projects` (the Foundation's team, where lietuva.ai runs). Domain: `ziburiofoundation.org`, registered at Porkbun; the DNS record is added by Vilija.

## Status

**Live.** The `robots` meta lines were removed at go-live (2026-10-20).

## Pages

| File | What it holds |
|---|---|
| `index.html` | Hero, mission, short About, the three work sections, the next-generation panel |
| `about.html` | Mission, the full About, Our purpose, "What is worth the cost of carrying forward?", the founding statement |
| `work.html` | The three sections in full |
| `skaitmeniniai-knygnesiai.html` | The internship, written broadly — the Foundation's youth work, not the archive's workflow |
| `principles.html` | The four principles and Source · Inference · Authority |

The pages are generated from the Claude Design canvas "Žiburio Foundation site" (`claude.ai/artifact/Qr7YNA5jQ3sXV5ykYMWgtm`) by `build_site.py`, which lives with the canvas in the session scratchpad, not in this repository. Edits can be made directly in these files; if the canvas is rebuilt, re-export and re-check.

## What the Foundation does — the three sections

At Vilija's direction (2026-10-19): "more like three sections — the internship, the Archive and Learning/Creating from our past… we should be more clean about what the foundation does."

1. **The Internship** — Skaitmeniniai Knygnešiai. Links to the program page here and to the interns' own work at the Žiburio Archive.
2. **The Archive** — preserving the sources and keeping their origins visible. Lietuva.ai is described inside this section as how dispersed sources are connected with provenance kept, and linked; it is no longer presented as a separate project.
3. **Learning and creating from our past** — research, documentation and new work made from the record. Save Our Lithuanian Parishes carries it now. The graphic novel was named here on 2026-10-19 and removed the same day at her word; the section is framed so new work can be named when it is ready.

## Where every sentence comes from

English prose is assembled from the October 2026 Foundation draft (hero, About, Our purpose, the four principles, the next generation, the founding statement, Support), from the white paper Version 7 (Drive, "CultureNet Whitepaper — Version 7") for the three categories that must never collapse, the youth-formation passages and the rights line, and from her own published text for the internship page (The Hearth support page, `writing/press/2026-09_hearth-support-page.md`, and the archive's internship page). The mission sentence is the paraiška's, in English: "To ensure that Lithuanian cultural knowledge, memory, faith, language, institutions, and archives continue to illuminate future generations."

Lithuanian is **not a translation of the English.** Per her instruction (2026-10-18), it is written in the **Zaranka register** (`writing/reference/zaranka-register.md`) and assembled Tier 1 first — the Globali Lietuva paraiška, her Draugas pieces and `writing/reference/vilija-voice-library.md`. Tier 1 lines carried here include "Praeitis yra žiburys…", "Be kalbos nėra tautos.", "Tautos atmintis — ne istorija ir ne archyvas…", the "Per X" sweep, the "Be Valančiaus parapijų tinklo — nebūtų knygnešių…" chain, "Knygnešiai nesaugojo — nešė.", "Tikslas – išsaugoti jų reikšmę.", "Tai ne prototipas – tai jau veikia.", and the lietuva.ai published lines. Because the two languages are built from their own canon, a section can carry different sentences in each.

**Constructed Lithuanian awaiting her sign-off** (no Tier 1 line existed): the hero subline, the four principles' wording, the Source/Inference/Authority triad, parts of the founding statement and the Support block, and the section labels.

Article II's opening clause names a tax code section; it is not quoted. Nothing on the site says "501(c)(3)" or promises deductibility.

## Edits to canon text (stealth hold)

CultureNet and Labs are not named on this site while the hold stands. The white paper's Lietuva.ai sentence "Using CultureNet technology, it develops new ways…" is carried without its first clause. "Žiburio Foundation cannot become an AI company." stands alone, without its paired sentence.

## Design

Her direction across 2026-10-15 → 19: the original Žiburio mark, "tech and cultural at the same time", young and dynamic, Twelve Labs for layout, pops of colour, less padding, no juosta pattern, no big green/red/black blocks, no sideways labels, her own photographs.

- **Type.** Hanken Grotesk throughout. The wordmark is the school's lockup, set in Oswald: ŽIBURIO over FOUNDATION, both lines flush left and right (ŽIBURIO is tracked to 0.1175em so the two lines measure the same).
- **Mark.** The original school mark with its navy square removed and the glyph recoloured navy; the tricolour keeps the original's geometry exactly. `assets/mark.png`. A white version for dark grounds is built but not currently used.
- **Colour.** Navy `#0E1426`, yellow `#FDB913`, green `#006A44` for section labels, red only in the tricolour rule. The 3px geltona–žalia–raudona rule under the hero follows the Save Our Lithuanian Parishes pattern.
- **Work boxes.** Navy, image left at 4:3, text right, yellow number, a yellow primary link and outlined secondary links.

**Images.** All are Vilija's own photographs or screenshots of her own sites; consent for the student photographs and names is on record with her (`memory/student-images-consent.md`). Shipped in `assets/`: `interns-table.webp` (hero, ceiling cropped), `sigita-lightbox.webp`, `interns-gloves.webp`, `interns-phones.webp`, `interns-cataloging.webp`, `archive-catalog.webp`, `solp-site.webp`. Retained but no longer used by any page: `assets/books/` (public-domain pre-1931 imprints) and `ziburio-mark.png`. **Not in this repository**, by her permission-first rule, kept in the gitignored `private/` folder: Knygnešys 1864–1904, I (Kaunas 1938) and three lietuva.ai cutouts; each needs its rights recorded before it can be committed here. The notebook and DP images remain in this repository's history at commit 497a8a2.

## Rules that bind this site

- "Nonprofit", never a tax term; no promise of deductibility.
- Entity facts only from culturenet-brain `docs/legal/entity-status.md`. The registered office is Farmington, Michigan, so the entity lines say "Michigan" and nothing narrower; "Detroit" appears only for the parish and the community.
- Student photographs are used with her consent on record; students are credited as a group and only Sigita Jurgutis is named, in an image description, as on the archive's own internship page.
- Surname "Jurgutis" on English surfaces.
- No analytics that send data anywhere; no third-party forms. `localStorage` holds only the visitor's language choice.
- Branch and PR flow; never push `main` directly. Git identity `LietuvaAI` / `vilija@lietuva.ai`.

## Going live

1. Vilija confirms the copy, including the constructed Lithuanian listed above.
2. PR removing the `robots` meta lines.
3. Vilija adds the DNS record at Porkbun; the project's domain is attached in Vercel.
