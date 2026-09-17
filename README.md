# gustavotso

Personal portfolio of Gustavo T. Souza — a single, minimal page: an intro that
types the name in eight different faces, the stack, the work history, the
projects, and a
way to get in touch.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- [Tailwind CSS 4](https://tailwindcss.com) — configured from CSS, no JS config
- [next-themes](https://github.com/pacocoursey/next-themes) for the Paper / Ink toggle
- `next/font` for every typeface, self-hosted at build time

No animation library: the intro and the entrance choreography are CSS keyframes
plus a small state machine.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build     # production build
npm run lint      # eslint
npm run typecheck # tsc --noEmit
npm run format    # prettier
```

## Where things live

| Path | What |
| --- | --- |
| `src/config/site.ts` | Name, role, tagline, location, calendar link |
| `src/config/stack.ts` | The tech grouped by category for the Stack section |
| `src/config/experience.ts` | Work history rendered by the Experience section |
| `src/config/projects.ts` | Projects rendered by the Projects section |
| `src/config/social.ts` | Social links |
| `src/components/intro/` | The loading curtain and the reveal it triggers |
| `src/components/sections/` | Hero, Stack, Experience, Projects, Contact |
| `src/lib/fonts.ts` | Every font, including the eight used by the intro |
| `src/styles/globals.css` | Theme tokens, keyframes, base styles |

## Themes

The site ships two themes, named on the page: **Paper** (light) and **Ink**
(dark, the default). next-themes writes the active one as a class on `<html>`,
and every color is a CSS variable (`--bg`, `--fg`, `--muted`, `--accent`…)
defined once in `globals.css` and exposed to Tailwind through `@theme inline`,
so `bg-bg`, `text-muted` and friends follow the theme automatically.

Two custom utilities carry the rest: `label` for the uppercase micro copy (the
site uses no monospace anywhere) and `icon-adapt` for white-on-transparent logos
that need flipping on Paper.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the canonical URL so metadata and Open Graph tags
point at the right place. Everything is statically prerendered.
