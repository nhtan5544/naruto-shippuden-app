# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

There is no test runner configured yet.

## Tech Stack

- **Next.js 16** with App Router (not Pages Router)
- **React 19** with strict TypeScript
- **TailwindCSS v4** — uses `@theme` directive and `@tailwindcss/postcss` (not the classic `tailwind.config.js`)
- **TanStack React Query v5** for server state / data fetching
- **Axios** for HTTP requests
- **Framer Motion** for animations
- **next-themes** for light/dark mode
- **CVA** (`class-variance-authority`) + `clsx` + `tailwind-merge` for component variant styling

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Architecture

Single Next.js App Router application. All source lives under `src/app/`. Route segments follow the App Router file conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, etc.).

**Styling pattern**: TailwindCSS v4 — avoid `tailwind.config.js`; use `globals.css` with `@theme` for custom tokens. Combine classes using `cn()` helper (compose `clsx` + `tailwind-merge`).

**Data fetching**: Use React Query (`useQuery`, `useMutation`) with Axios for all API calls. Wrap the app in a `QueryClientProvider`; devtools (`ReactQueryDevtools`) should be included in dev only.

## Shadcn/UI v4 Gotchas

This project uses Shadcn/UI v4 which is based on `@base-ui/react` (not Radix UI). Key differences:

- **No `asChild` prop** on any component. Use the `render` prop pattern instead, or style `Link` directly.
- **`buttonVariants` is "use client"**: Do NOT import `buttonVariants` from `@/components/ui/button` in Server Components. Use `@/lib/button-variants` (a separate non-client export) instead.
- **Button as link**: `<Link href="..." className={buttonVariants({ variant: "outline" })}>Label</Link>`
- **SheetTrigger**: Accepts `className` and `aria-label` directly — no need to wrap in a Button.

## Static Data

Content lives in `src/data/` as TypeScript files:
- `author.ts` — Masashi Kishimoto biography
- `villages.ts` — 7 villages with history
- `characters.ts` — 12 main characters with history and abilities
- `dojutsu.ts` — 7 eye techniques (Sharingan, Rinnegan, Byakugan, etc.)
- `types.ts` — shared TypeScript interfaces

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — hero + section cards + featured characters |
| `/tac-gia` | Author history (Masashi Kishimoto) |
| `/lang` | Village list |
| `/lang/[slug]` | Village detail (SSG via `generateStaticParams`) |
| `/nhan-vat` | Character grid |
| `/nhan-vat/[slug]` | Character detail (SSG via `generateStaticParams`) |
| `/con-mat` | Dojutsu encyclopedia with Tabs filter |
