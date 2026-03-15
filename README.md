# Naruto Shippuden App

A Naruto Shippuden encyclopedia web app — covering the author, ninja villages, main characters, and eye techniques (Dojutsu).

## Tech Stack

- **Next.js 16** — App Router (not Pages Router)
- **React 19** — strict TypeScript
- **TailwindCSS v4** — uses `@theme` directive in `globals.css` (no `tailwind.config.js`)
- **TanStack React Query v5** — server state management
- **Axios** — HTTP client
- **Framer Motion** — animations
- **next-themes** — light/dark mode
- **Shadcn/UI v4** — based on `@base-ui/react` (not Radix UI)
- **next-intl v3** — multilingual support (Vietnamese + English)
- **CVA** + `clsx` + `tailwind-merge` — component class variant management

## Features

- Home page with hero section and featured characters
- Author page (Masashi Kishimoto)
- List and detail pages for 7 ninja villages
- List and detail pages for 12 main characters
- Encyclopedia of 7 eye techniques (Sharingan, Rinnegan, Byakugan, ...)
- VI/EN language switcher (preserves current path)
- Light/Dark mode

## Route Structure

All pages live under `src/app/[locale]/` — supporting locale prefix `vi` (default) and `en`.

| Path | Description |
|------|-------------|
| `/vi/` | Home |
| `/vi/tac-gia` | Author biography |
| `/vi/lang` | Village list |
| `/vi/lang/[slug]` | Village detail (SSG) |
| `/vi/nhan-vat` | Character grid |
| `/vi/nhan-vat/[slug]` | Character detail (SSG) |
| `/vi/con-mat` | Dojutsu encyclopedia |

Replace `vi` with `en` for the English version.

## Static Data

Content is stored in `src/data/` as TypeScript files:

| File | Content |
|------|---------|
| `author.ts` | Masashi Kishimoto biography |
| `villages.ts` | 7 ninja villages |
| `characters.ts` | 12 main characters |
| `dojutsu.ts` | 7 eye techniques |
| `types.ts` | Shared TypeScript interfaces |

## Internationalization (i18n)

Uses `next-intl` v3 with the following structure:

- `messages/vi.json`, `messages/en.json` — translation strings
- `src/i18n/routing.ts` — locales: `["vi", "en"]`, default: `"vi"`, prefix: `"always"`
- `src/i18n/navigation.ts` — locale-aware `Link`, `useRouter`, `usePathname`
- `src/proxy.ts` — next-intl middleware (Next.js 16 uses `proxy.ts` instead of `middleware.ts`)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```
