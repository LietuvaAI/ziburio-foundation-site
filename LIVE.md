# ziburiofoundation.org is live

This records the 2026-10-20 launch state on `main`. The later four-page design review remains on PR #3 and is not described here until it is approved and merged.

**https://ziburiofoundation.org** — public, HTTPS, valid certificate. Went live 2026-10-20.

| Page | Link |
|---|---|
| Home | https://ziburiofoundation.org |
| About | https://ziburiofoundation.org/about |
| Our work | https://ziburiofoundation.org/work |
| Skaitmeniniai Knygnešiai | https://ziburiofoundation.org/skaitmeniniai-knygnesiai |
| Principles | https://ziburiofoundation.org/principles |

EN | LT switch is top right on every page.

## What was done

1. `noindex` removed from all five pages.
2. PR #1 merged to `main` (merge commit `7751ddb`); Vercel deployed production.
3. Domain `ziburiofoundation.org` and `www` attached to the project, both verified.
4. DNS at Porkbun:
   - The apex **ALIAS** record was changed from `pixie.porkbun.com` (Porkbun parking) to `cname.vercel-dns.com`.
   - A **CNAME** was added for `www` → `cname.vercel-dns.com`.
   - Nothing else was touched. The MX records (`fwd1`/`fwd2.porkbun.com`) and the SPF, DKIM and DMARC TXT records are exactly as they were, so `info@ziburiofoundation.org` keeps working. The `*` wildcard still points at Porkbun parking; harmless, and it can go whenever you like.
5. TLS certificate issued by Let's Encrypt, valid to 2027-01-19.

The apex redirects to `www.ziburiofoundation.org`, which is Vercel's default when both are attached. Both work. Say the word if you'd rather the plain `ziburiofoundation.org` be the canonical one — it's a one-line change.

## Verified

All five pages return 200 over HTTPS, on the apex and on www. The mark, the photographs and the favicon load. Vercel reports the DNS as correctly configured.

## Still open, for the refining pass

- The constructed Lithuanian lines want your eye: the hero subline, the four principles' wording, the Source · Inference · Authority triad, parts of the founding statement and the Support block, and the section labels. Everything else in Lithuanian is your own text.
- Vercel Authentication is off for the whole project, so the older preview URLs are public too. Nothing links to them.
- `assets/books/` and `ziburio-mark.png` are still in the repository but no page uses them now.
