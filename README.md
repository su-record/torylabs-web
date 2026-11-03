# torylabs-web

Homepage for **Tory Labs (토리랩스)** — https://torylabs.dev

Next.js (App Router, TypeScript, Tailwind) exported as a fully static site.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # static output in ./out
```

## Deploy (Cloudflare Pages)

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`
- Company info / placeholders (TBD): edit `content/company.ts`
- Environment variable (recommended): `NODE_VERSION=20`

Then add the custom domain `torylabs.dev` in the Pages project.

## Search and AI answers

English URLs live at `/`; Korean and Japanese use `/ko` and `/ja`.
The root layouts in `app/(en)` and `app/[lang]` put the correct language in
the exported HTML. Language links select an explicit URL; browser preferences
do not redirect an incoming link.

- `content/seo.ts` supplies canonical URLs, translated metadata and social previews.
  `content/i18n.ts` supplies reciprocal hreflang links and the English `x-default`.
- `app/sitemap.ts` includes the 18 public URLs. Pricing and refund pages remain
  accessible with `noindex, follow` while subscription promotion is on hold.
  No build timestamp is used as a fabricated content update date.
- `app/robots.ts` permits crawling, including pages whose `noindex` must be read.
  Cloudflare can add managed rules; verify the served file after deployment.
- `components/StructuredData.tsx` describes the organization, website, pages,
  software and FAQs. FAQ markup and visible answers use the same content.
  Product versions and download links reuse the existing release data.
- The relay guide exports every step and includes a readable no-JavaScript version.
  Unknown company details are omitted until supplied in `content/company.ts`.

After a build, run `python3 scripts/check-seo.py` to check the exported HTML,
sitemap, robots rules, internal links and social image. For browser checks, use
the Python environment with Sutory and Playwright installed:

```bash
~/venvs/pw/bin/python scripts/check-browser.py
```

The browser check serves the export locally and checks three languages at mobile
and desktop widths with and without JavaScript. It uses Sutory's browser capability;
`SUTORY_ROOT` can point to another Sutory checkout. It also tests clipboard denial
and retry without writing to the system clipboard. Screenshots and results go to
`~/sutory/work/torylabs-seo/`.

After an authorized deployment, verify the live sitemap, canonical URLs and
Cloudflare crawler rules, then submit `/sitemap.xml` in Google Search Console and
Bing Webmaster Tools using the site owner's accounts. Measure indexed pages,
search impressions and actual AI citations; local checks do not measure ranking.

The implementation follows Google's [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features)
and [localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
FAQ markup describes the answers on the page; it does not promise rich results.
