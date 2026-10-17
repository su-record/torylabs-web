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
- Environment variable (recommended): `NODE_VERSION=20`

Then add the custom domain `torylabs.dev` in the Pages project.
