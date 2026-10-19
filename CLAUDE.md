# Lisa Marie Photography

Portfolio site for a lifestyle photographer. Next.js App Router (15), React 19, TypeScript, plain CSS Modules driven by design tokens. Deployed statically; photos live on S3.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` — production build (also runs lint + typecheck; must pass with zero warnings)
- `npm run lint`

## Structure

- `app/layout.tsx` — fonts (next/font/google), metadata, skip link, `Header` + `Footer` around every page
- `app/page.tsx` — home: Carousel → Description → GallerySection → About → Contact
- `app/gallery/[id]/page.tsx` — one page per gallery, statically generated from `galleries` (unknown ids 404)
- `app/pictures.ts` — **all photo data** (URL, width, height, alt). The only place image URLs live
- `app/api/contact/route.ts` — contact form endpoint (Resend)
- `app/components/ui/` — reusable primitives: `Button`, `Container`, `Section`, `SectionHeading`, `TextField`. Import from `./ui`
- `app/styles/tokens.css` — design tokens; `app/globals.css` — reset + base typography

## Conventions

- **Never hard-code colors, font sizes, spacing, radii, shadows or durations.** Use the `var(--…)` tokens in `app/styles/tokens.css`. Add a token if one is missing.
- Style with a co-located `Component.module.css`. Don't add global selectors (`h1 {}`, `button {}`) outside `globals.css`.
- Build new sections from `Section` + `SectionHeading`; one `h1` per page.
- Images: always `next/image` with real `width`/`height` from `pictures.ts`, a meaningful `alt`, and a `sizes` hint. Use `priority` only for above-the-fold images.
- Navigation links use `/#section-id` so they work from any page. Section ids: `home`, `gallery`, `about`, `contact`.
- Server components by default; add `"use client"` only for state/effects/browser APIs (currently `CarouselComponent`, `ContactForm`).
- Fonts: Cinzel (display/headings), Parisienne (script accents), Open Sans (body), exposed as `--font-display`, `--font-script`, `--font-body`.

## Photos

Hosted in a public Vercel Blob store (`lisa-marie-photos`, connected to the `lisamariephotography-next` project; token is `BLOB_READ_WRITE_TOKEN`). URLs: `https://vc6bfofuoftvo8ls.public.blob.vercel-storage.com/<folder>/<file>`. Folders: `carousel/`, `nature/`, `portraits/`, `families/`, plus `about.jpg` at the root. Original S3 bucket `lisamariephotography` (us-west-1) still holds the old copies.

To add a photo: `vercel env pull .env.local`, then with only `BLOB_READ_WRITE_TOKEN` exported (unset `VERCEL_OIDC_TOKEN`) run `vercel blob put <file> --access public --pathname <folder>/<file>`. Then add a `photo(path, width, height, alt)` entry in `app/pictures.ts` (order in the array = display order). Name files `<category>-tall|long-N.jpg` by convention. Upload web-sized files (~2000px long edge, JPEG q80). The host must stay allowed in `next.config.ts` (`images.remotePatterns`) and match `IMAGE_HOST`.

## Environment variables (contact form)

- `RESEND_API_KEY` — required; without it the form shows an error (503) rather than silently dropping messages
- `CONTACT_TO_EMAIL` — required; where messages are delivered
- `CONTACT_FROM_EMAIL` — optional; must be a verified Resend sender (defaults to Resend's test sender)

Set in `.env.local` locally and in the Vercel project settings for deploys. `.env*` is git-ignored.

## Known gaps

- Dependencies: Next 15.0.2 + a React RC are outdated (see `npm audit`); upgrade to latest Next 15.x and stable React 19.
- Tailwind is still installed but no longer used (its directives were removed from `globals.css`). Remove `tailwindcss`, `postcss`, `tailwind.config.ts`, `postcss.config.mjs` if not needed.
- No tests, no rate limiting on `/api/contact`, no lightbox on gallery pages, alt text is generic.
