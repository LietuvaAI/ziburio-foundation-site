# ziburiofoundation.org

The public website of Žiburio Foundation, a Michigan nonprofit. Four active static pages, no build step, no analytics, no third-party forms. Contact is a mailto link only. English and Lithuanian, switched in the page; the choice is kept in that visitor's own browser and sent nowhere. Two former page URLs remain as local redirects so older links continue to work.

Hosting: Vercel, team `lietuvaais-projects` (the Foundation's team, where lietuva.ai runs). Domain: `ziburiofoundation.org`, registered at Porkbun; the DNS record is added by Vilija.

## Status

**Repetition pass, 2026-11-02 — local `focused-43`.** Mission remains on Home; its project cards now link to detail without repeating the project paragraphs. About covers institutional continuity and the unchanged commitments instead of repeating mission and activities. Our Work loses its generic lead and duplicate internship introduction; program photos, records and detailed practice remain. Removed repeated support strips from Home/About/Work; Support owns the invitation to help, while the shared contact footer remains. Pre-edit pages are saved in `docs/review-archive/before-content-focus-*.html`. EN/LT edited together; new About introduction is review copy. No deployment.

**Support added at Vilija’s request, 2026-11-02.** The local menu is now Home, Our Work, About, Support. `support.html` is a short bilingual invitation to support the internship, contribute archival work, discuss collections, or collaborate, using mailto contact only. No payment flow, tax claim or publication. New Lithuanian interface prose remains review copy.

**Three-page scope confirmed by Vilija, 2026-11-02.** Local `three-pages-39`: Home, Our Work, About. Internship prose/photos/six book links are retained within an expandable Our Work section; anchors open the section automatically. Principles are included on About. Old program and principles routes redirect locally to their replacements. Prior full pages are retained under `docs/review-archive/`. Verified HTML nesting, unique IDs, JavaScript syntax and program deep-link redirect. No deployment.

**Spacing repair, 2026-11-02 — local `spacing-37`.** Removed offset heading/text columns and doubled section padding; headings and their prose now share a left edge. Standardized panel insets at 24px and corrected crossed About-page details/div containers so the founding statement and support appeal are independent sections. EN/LT text remains unchanged. Checked proper HTML nesting across all five pages, expanded About content on desktop, and Lithuanian mobile layout. No publication.

**Unified visual system, 2026-11-02 — local preview `unified-36`.** All five pages share outer edges, heading scales, neutral card surfaces, image corners, navy buttons and section spacing. Longer About and program passages use heading/text columns that stack on mobile. All EN/LT text blocks are byte-for-byte unchanged from the preceding local pass. Desktop and mobile previews and language switching were inspected. No commit, push or deployment.

**Coherence pass, 2026-11-02 — local only.** At Vilija’s direction, the homepage now gives the mission, three linked project introductions, and the restored Lietuvos Kanklės context. Project history stays on Our Work and the internship page; institutional background, founding statement and full support appeal stay on About. The longer inheritance essay is expandable without changing its wording. Principles leads with the four unchanged commitments and definitions, followed by expandable technology context. Repeated support appeals become a short contact strip. Shared navigation, navy buttons and neutral surfaces now apply across all five pages; green accents and the decorative tricolour rule are removed, superseding the earlier visual directions below. The original mark and photographs are unchanged. New Lithuanian teaser/interface wording is review copy; existing independent Lithuanian narratives are retained. No push, merge or deployment.

**Live.** The `robots` meta lines were removed at go-live (2026-10-20).

**Editorial/layout review, 2026-10-21 — not approved for publication.** These changes reduce repeated copy, remove the three navy project slabs, and vary the page layouts while retaining the mark, fonts, palette, photo hero, and tricolour rule. Review branch: `codex/foundation-design-review-2026-10-21`. Its automatic Vercel deployments are disabled in `vercel.json`; production and other branches are not changed. Do not merge or deploy without Vilija's approval. Existing `LIVE.md` describes the earlier launch, not these changes.

**Ownership stays with Claude Code session “Žiburio Foundation site”**, session `0093e281-2aec-445e-b83a-fa68b39f0dbc`. This is the requested school-site surface-craft pass, not a transfer of the repository or standing work. The PR is the handoff artifact for the owning session.

## Pages

| File | What it holds |
|---|---|
| `index.html` | Photo hero, mission, short introductions to the internship, Archive, and parish research, plus one collection example |
| `work.html` | The three projects, with the full internship narrative, photographs, workflow, and student book links |
| `about.html` | Foundation background, institutional continuity, the four commitments, and Source · Inference · Authority |
| `support.html` | A short bilingual invitation to support, contribute collections, or collaborate; mailto contact only |
| `skaitmeniniai-knygnesiai.html` | Redirect to the internship on Our Work |
| `principles.html` | Redirect to the commitments on About |

The original pages were generated from the Claude Design canvas "Žiburio Foundation site" (`claude.ai/artifact/Qr7YNA5jQ3sXV5ykYMWgtm`) by `build_site.py`, which lives with the canvas in the session scratchpad, not in this repository. The October 21 revision is edited directly here, with shared `site.css` and `site.js`; there is still no build step. Re-exporting the old canvas would overwrite the new layouts and copy. Reconcile changes rather than replacing these files.

Every page retains separate `<x-en>` and `<x-lt>` content. Lithuanian is not generated from English. Shared navigation, image descriptions, and document titles respond to the language switch. The full founding statement and all four principles retain their original wording in both languages. Archive figures are an explicitly dated snapshot, not a live database query.

The original Support appeal is also retained verbatim in an expandable section on About; English support summaries now relate to the subject of each page. Protected Lithuanian hero, principle, triad, founding and Support wording is not being submitted as a new translation. Section headings reuse existing Lithuanian labels. Newly added interface/accessibility wording (menu, skip link, image descriptions and snapshot note) is separate from the source prose and should receive the owner's normal language review. Previously unapproved constructed Lithuanian remains unapproved; this design pass does not sign it off.

**Explicit naming amendment, Vilija, 2026-10-21:** Lithuanian surfaces use **Žiburio Fondas**, including prose, page titles, accessible home-link names, copyright and the wordmark. English retains **Žiburio Foundation**. The Lithuanian **FONDAS** line distributes its letters across the existing wordmark width; it does not enlarge or distort the font. This is the sole authorized name substitution in the otherwise preserved founding and Support passages.

**Editorial correction, Vilija, 2026-10-21:** the activity-list introduction was too reductive. Restore the former “Memory is not simply a record of the past…” lead and develop the cultural-continuity purpose underneath it. The new English hero, overview and project summaries emphasize living inheritance, relationships, institutions, evidence, judgment and new cultural work, rather than leading with “preserve.” This is proposed public-mission prose, not commercial positioning or a claim that new technology has already been delivered. Read-only sources: `culturenet-brain/docs/philosophy/culturenet-foundations.md` (memory, context, evidence); `docs/strategy/current-thinking-2026-07-14-foundation-identity-and-unique-capability.md` (Foundation purpose and intergenerational stewardship); `docs/strategy/current-thinking-2026-07-16-mission-continuity-three-layer-language.md` (continuity as mission, AI as means); `docs/strategy/current-thinking-2026-07-15-drift-correction-cultural-memory-infrastructure.md` (living cultural systems and new work from authentic sources); and VilijaOS's `voice/public-presence/foundation-first-launch-set-2026-10-15.md` (Foundation-first public register and stealth hold). No restricted names enter the public HTML. Lithuanian remains independently written and unchanged by this English pass. The original founding/Support documents and principles retain their wording, including historical uses of “preserve”; this revision changes the framing, not the source record.

**Site-wide follow-through, Vilija, 2026-10-21 (“same goes for the rest of the site”):** the same sources above inform the remaining English editorial revisions. About explains the institutional and intergenerational purpose; Our work connects the three areas without reducing the archive to storage; the internship is an apprenticeship in cultural inheritance and historical judgment; Principles explains why evidence, interpretation and institutional decisions must remain distinguishable. Page-specific support summaries replace the repeated English sentence. The internship count now uses the canonical “155 parishes and other institutions” and “seven graduates.” All Lithuanian blocks, the four principles, the Source/Inference/Authority definitions, and the full founding/Support passages remain unchanged in this follow-through. New prose is proposed review copy, not a new canonical source or a claim of Vilija's wording approval. No merge or publication is authorized.

**Visual direction preview, Vilija, 2026-10-21:** “youth, AI, culture” is explored on the homepage through the students' own photography, contrasting editorial type scales, and a source workbench built around the existing public-domain 1909 Kudirka title-page image. The title, preparer (Juozas Gabrys), place (Tilžė), and year are visible on that image; this is a manually checked editorial example, not a live AI extraction demo. The full-resolution image can be opened from the page. New bilingual source-workbench captions are proposed copy; their Lithuanian needs the owner's normal review. Existing Lithuanian passages remain unchanged. The future hero video awaits Vilija's footage. No stock imagery, simulated software UI, new tracking, merge, or deployment.

**Follow-up, Vilija, 2026-10-21:** replace the workbench's repeated Raštai example with the existing `kankles-1895.webp` image. Its visible imprint supports “Lietuvos Kanklės,” “V. Kalvaitis,” and “Tilžė · 1895”; these replace the prior example's metadata, alt text and full-size links. Expand the bilingual technology explanation to describe digital capture, AI-assisted reading/translation and identification, human review, and traceable linked records, without claiming this example was automatically processed. Reduce section padding and layout gaps across all five pages while retaining readable type and touch targets. New Lithuanian explanatory copy remains proposed for language review.

**Project grouping, Vilija, 2026-10-21:** restore a separate visible box around each of the three Our Work projects. These use compact bordered containers and small colour accents, not the former solid navy slabs; the existing varied internal layouts and bilingual copy remain intact. The diary and Knygnešys images remain outside this change pending the separate publication-permission response.

### Incorporation-purpose coverage review — 2026-10-21

Compared against Article II in `culturenet-brain/docs/legal/formation/articles-of-incorporation-AS-FILED-verbatim.md`, not an earlier draft. This is an editorial coverage check, not a legal compliance opinion. Public wording remains a paraphrase; the user-approved mission includes “cultural,” whereas the filed clause says “Lithuanian knowledge.”

| Filed purpose | Public coverage |
|---|---|
| II(a), intergenerational mission | About opening mission |
| II(b), permanent stewardship and governed access to diaspora materials | About “Built to continue”; Our Work archive; Principles access/rights |
| II(c), youth and public education, cultural literacy, research, language, emerging technology | About education and cooperation; internship; Principles technology section |
| II(d), provenance, context, authenticity, intelligible and generative inheritance | Principles, source workbench, connected collections |
| II(e), new cultural, educational and scholarly work | Our Work research section |
| II(f), cooperation and assistance to other communities | About “Built to continue” |
| II closing sentence, continuity beyond a host institution | About “Built to continue” |

New EN/LT paragraphs make the previously implicit points explicit and add a light technology explanation. Their Lithuanian is proposed copy for owner review, not a replacement for independently authored existing passages. Administrative filing provisions, personal addresses, tax-code clauses and financial/legal boilerplate are not added to public narrative; no claim of recognition or deductibility is made. Other Articles are not represented as fully reproduced on the site.

**Intern activity correction, Vilija, 2026-10-21:** remove unsupported current-activity claims about interviewing elders, comparing contradictory records, writing interpretations, and already working with audiovisual records. Her direct report establishes that interns have catalogued/scanned books and are now verifying their own scanned pages; other media is planned. Read-only code evidence: `ziburio-archive/app/intern/submit/page.tsx` (photo submission and review queue), `app/intern/sacred-core-scan/page.tsx` (batch page intake), and `culturenet-brain/tools/culturenet_workbench/intern_pilot.html` (page-image review, AI suggestion corrections, uncertainty, reviewer attribution, no publication authority). Code demonstrates workflow support, not individual completion or production deployment; current participation is attributed to Vilija's report. The separate `intern_workspace.py` includes locked future assignments, so those are not advertised as operational. The program's EN/LT learning section is explicitly revised under this correction; new LT wording remains proposed for owner review. No student identities, private source images, or review results are published.

### Local review

**Mission prominence, Vilija, 2026-10-25 — local only:** the homepage now places the existing mission from About directly below the photo hero, with a clear “Our mission” heading. Both language versions reuse their existing wording; no new translation or mission wording is introduced. The full introductory explanation and all other substantive copy remain in place. This responds to her direction to keep the detail while making the Foundation's purpose easy to find. No push, merge or deployment.

**Homepage journal study, Vilija, 2026-10-23 — local only:** `home-journal.css` is loaded only by `index.html`, leaving other page layouts intact. The internship becomes a headline-led editorial spread; the book's historical context and compact metadata stand separately from the technology explanation. White surfaces replace the homepage's rounded panels, with the original fonts, wordmark, photographs, hero copy and tricolour retained. Existing independent EN/LT copy is unchanged. Reference research informed hierarchy and pacing, not copied assets or content. No push, merge or deployment authorized.

**Voice pass, Vilija, 2026-10-22:** replace abstract introductory/promotional wording in homepage and Our Work teasers and English program opening/community sections with concrete descriptions. Tighten the EN/LT review explanation without losing uncertainty or publication-authority limits. Newly drafted Lithuanian teasers revised separately. Canonical hero, mission, principles, founding statement and independently sourced Lithuanian narrative remain intact. No invented student quotes or experiences. Local only.

**Visual style refinement, Vilija, 2026-10-22:** warm paper background, restrained pale panels, soft image corners, consistent link treatment and lighter headings. Long narrative sections place headings beside independently preserved EN/LT text on desktop, stacking on mobile, to use the right-hand space intentionally. Blog remains deferred. All changes are local review work, not publication approval.

**Editorial refinement, Vilija, 2026-10-22:** blog deferred; no empty blog link or invented posts. `editorial.css` provides a shared layout layer across all five pages: consistent outer edges and two-column grids, left-aligned reading sections, restrained type sizes and monospace metadata, compact project panels, captions separated by fine rules, and a quieter book feature without its oversized decorative year. Existing brand, photo heroes, independently authored EN/LT text, and tricolour remain. Cohere's supplied article is a hierarchy reference, not copied design or content. Local review only.

**Hero focus, Vilija, 2026-10-22:** the English subline now leads with cultural continuity through language, faith, knowledge, institutions and young people, using the wording discussed and approved in this chat. The independently authored Lithuanian hero already focuses on cultural sources, institutions and the next generation rather than AI, so its wording is retained. Technology remains explained in the body. Local review only; no push or publication.

**Homepage book significance, Vilija, 2026-10-21:** replace generic “A page is a beginning” text with a short EN/LT explanation of Lietuvos Kanklės as a poetry collection published in Tilžė during the press ban. Sources: [Mažosios Lietuvos enciklopedija, Vilius Kalvaitis](https://www.mle.lt/straipsniai/vilius-kalvaitis), [VLE, Lithuanian press ban](https://www.vle.lt/straipsnis/lietuviu-spaudos-draudimas/), and [VLE, Tilžė printing houses](https://www.vle.lt/straipsnis/tilzes-spaustuves/). The second paragraph is editorial interpretation of that context, not evidence of this copy's ownership, transport or use. No claim that this specific copy was smuggled. Do not confuse this collection with Kudirka's similarly named Kanklės. Both language versions are review copy; local only.

**Count removal, Vilija, 2026-10-21:** removed the 326/513 catalogue tallies and their dated-snapshot note from Our Work, plus the repeated tally in the Lithuanian homepage summary. Other dates and numbers remain unchanged. This supersedes earlier notes describing these counts as public snapshot figures. No merge or deployment performed.

**Internship cross-links and repetition, Vilija, 2026-10-21:** Home now provides a short invitation; Our Work retains its project box with a one-paragraph overview instead of repeating the program history and workflow. About retains its institutional purpose and links directly to the program. Principles retains its technology commitments and links to the actual page-review explanation. The full program narrative, photographs and book records remain on `skaitmeniniai-knygnesiai.html`. Both languages edited; historical/founding source passages preserved. Local only; no push or deployment.

**Internship consolidation, Vilija, 2026-10-21 — local only:** the Foundation program page now carries the Archive's documentary sequence and six book links, sourced from `ziburio-archive/app/internship/content.tsx`. Copied already-public program photos: `archive-sorting.jpg`, `IMG_6802.jpeg` (as `archive-sorting-notes.jpeg`), and `skaitmeniniai-knygnesiai-books.jpeg` (as `students-with-books.jpeg`). Student-photo consent is recorded above; these are not the restricted diary or 1938 Knygnešys images. Six cover URLs, record IDs, titles and dates follow the Archive source; covers remain on its public storage. New bilingual captions avoid claiming all six books date from the press ban. Foundation attribution follows Vilija's direction; the school's origin remains in the narrative. Catalogue records and review/rights authority stay with the Archive. No Archive routes or live links changed: its return link awaits Foundation publication. New Lithuanian captions remain review copy.

Serve this directory with `python3 -m http.server 8766 --bind 127.0.0.1` and open `http://127.0.0.1:8766`. The preview stays on this computer.

`scripts/check-site.cjs` uses Playwright to check the four active pages in EN and LT at 360, 390, 768, and 1440px. It checks language visibility/persistence, four-item navigation, images, overflow, headings, internal anchors, approved external links, the two compatibility redirects, the home hero with Vilija's requested English revision, the principles, and the Support invitation. It also proves the retired long-form founding copy remains in `docs/review-archive/`, checks navigation without JavaScript, and checks language switching when storage is blocked. Screenshots go to a temporary directory, not the repository.

Run with `node scripts/check-site.cjs` where Playwright is available (or set `NODE_PATH` to its existing package directory). `CHROME_EXECUTABLE` can select an installed Chrome binary; `SITE_URL` can override the localhost URL. This script never publishes anything.

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
- **Section rhythm.** Open white backgrounds, photography, fine rules, an occasional yellow accent, and reading-width prose. The three repeated navy work boxes are removed. Home is an overview; the full project descriptions belong on Our work. Longer source text remains available without interrupting the main reading path.

**Images.** All are Vilija's own photographs or screenshots of her own sites; consent for the student photographs and names is on record with her (`memory/student-images-consent.md`). Shipped in `assets/`: `interns-table.webp` (hero, ceiling cropped), `sigita-lightbox.webp`, `interns-gloves.webp`, `interns-phones.webp`, `interns-cataloging.webp`, `archive-catalog.webp`, `solp-site.webp`. The home archive entry now uses the existing `assets/books/kudirka-1909-cover.webp`; the other public-domain pre-1931 imprints and `ziburio-mark.png` remain unused. **Not in this repository**, by her permission-first rule, kept in the gitignored `private/` folder: Knygnešys 1864–1904, I (Kaunas 1938) and three lietuva.ai cutouts; each needs its rights recorded before it can be committed here. The notebook and DP images remain in this repository's history at commit 497a8a2.

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
