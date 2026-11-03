# Historical DNS cutover note

This note records the instructions used before the domain went live. The cutover is complete; see `LIVE.md` for the resulting live-state record. Do not apply these values without checking the current Vercel and registrar settings first.

## Original instruction: two DNS records at Porkbun

Everything else is done. The domain is attached and verified in Vercel; the site is live and public. `ziburiofoundation.org` still points at Porkbun's parking page, which is why it doesn't show the site yet.

## What to change

Porkbun → **Domain Management** → `ziburiofoundation.org` → **DNS**.

**Delete** the existing parking records — the `A` records on `@` pointing at `207.207.210.229` and `207.207.210.107`, and the `www` record pointing at `pixie.porkbun.com`.

**Add these two:**

| Type | Host | Answer / Value |
|---|---|---|
| A | *(leave blank, or `@`)* | `216.150.1.1` |
| CNAME | `www` | `cname.vercel-dns.com` |

TTL: leave the default.

If Vercel's dashboard shows different values on the Domains page, use what Vercel shows — it is authoritative. Vercel also accepts the older `76.76.21.21` for the A record if you prefer it; `216.150.1.1` is the one it recommends now.

## Then

Tell me and I'll check that it resolves and that HTTPS comes up. DNS usually takes a few minutes; the certificate issues itself once Vercel sees the records.

## Why I didn't do this one

There are no Porkbun credentials on this machine — no API key, no CLI, nothing in the environment. Signing in to your Porkbun account would mean handling your password, which I won't do. Your approval covers it; the access doesn't exist for me to use.

If you want me to handle DNS changes directly in future: Porkbun → Account → API Access, enable it for this domain, generate a key pair, and save the two values into a file on this machine (not into chat). I'll use it from there the same way I use the Vercel CLI's stored token.

## Where things stand

- Live and public: https://ziburio-foundation-site.vercel.app
- `main` holds the site; merge commit `7751ddb`; production deployed.
- `noindex` removed from all five pages.
- Domain `ziburiofoundation.org` + `www` attached to project `ziburio-foundation-site`, both verified.
- Remaining: the two records above.
